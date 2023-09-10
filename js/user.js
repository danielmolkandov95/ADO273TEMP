import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInWithCustomToken, signInWithEmailAndPassword, reauthenticateWithCredential, updatePassword, EmailAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
import { setError, showError, unloadButton, deleteCookie, getCookie, setCookie } from '/js/base.js';

const firebaseConfig = {
    apiKey: "AIzaSyD50WbrVwvLPukGCvpTquNZE8N-DkglhAY",
    authDomain: "quantix-c939b.firebaseapp.com",
    projectId: "quantix-c939b",
    storageBucket: "quantix-c939b.appspot.com",
    messagingSenderId: "1009922658814",
    appId: "1:1009922658814:web:ff701184445b27621a30af",
    measurementId: "G-MJXZJ7KK8P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const formError = document.querySelector("#form-error");
const dataPages = ['/','/trade-log/','/daily-stats/','/settings/'];

export class User {
    token;
    constructor() {
        this.baseUrl = 'https://quantix-bff-ts-pgt5wl73aa-lm.a.run.app/';
        this.#setToken(null);
    }

    // async checkAuthState() {
    //     onAuthStateChanged(auth, user => {
    //         if(user)
    //             this.#setToken(user.accessToken);
    //         else
    //             this.#setToken(null);
    //     })
    // }

    async #setToken(token) {
        if(token == null) {
            this.token = getCookie('token');
            if(!this.token)
                window.location.href = '/login';
        } else {
            this.token = token;
            setCookie('token', token);
        }
    }

    get token() {
        return this.token;
    }

    async getData() {
        if(this.token == null) 
            this.#setToken(null);
        const response = await fetch(`${this.baseUrl}users`, {
            method: 'GET',
            headers: {
                'Authorization': await this.token,
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status == 402) {
                window.location.href = '/subscription';
            } else if(!response.ok) {
                setError(response.message);
                window.location.href = '/login';
            } else
                return response;
        });
        const data = await response.json();
        if(data.Summary && (dataPages.includes(window.location.pathname))) {
            setCookie('hasSummary',true);
            return data;
        } else if(data.Summary) {
            setCookie('hasSummary',true);
            window.location.href = '/';
        } else if(data.Name) {
            window.location.href = '/import';
        }
    }

    async signUp(data, button) {
        try {
            const response = await fetch(`${this.baseUrl}signup`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const responseJson = await response.json();
            if(!response.ok) {
                let errorText;
                if(responseJson.type)
                    errorText = `${responseJson.type.replace(/-/g," ")}, ${responseJson.message.replace(/_/g," ").toLowerCase()}`;
                else
                    errorText = responseJson.message.replace(/-/g," ");
                showError(formError, errorText, button);
            }
            await this.#setToken(responseJson.token);
            await this.customSignIn();
        } catch(error) {
            showError(formError,error.message, button);
            window.location.href = '/login';
        }
    }

    async signIn(e, email, password, button) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            this.#setToken(userCredential.user.accessToken);
            this.getData();
        })
        .catch((error) => {
            showError(formError,(error.code.replace('auth/','')).replaceAll('-',' '), button);
        });
    }

    async customSignIn() {
        signInWithCustomToken(auth, this.token)
        .then((userCredential) => {
            this.#setToken(userCredential.user.accessToken);
            this.getData();
        })
    }

    async update(data) {
        try {
            const response = await fetch(`${this.baseUrl}users`, {
                method: 'PUT',
                headers: {
                    'Authorization': await this.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.ok;
        } catch(error) {
            return error.message;
        }
    }

    async updatePassword(password, newPassword) {
        let response;
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            password
        );
        try {
            await updatePassword(user, newPassword)
            .then((response) => {
                response = response.ok;
            })
            .catch((error) => {
                response = error.message;
            });
        } catch(error) {
            response = error.message;
        }
        await reauthenticateWithCredential(user, credential);
        return response;
    }

    async reset() {
        try {
            const response = await fetch(`${this.baseUrl}users/reset-data`, {
                method: 'PUT',
                headers: {
                    'Authorization': await this.token,
                    'Content-Type': 'application/json'
                },
                body: null
            });
            deleteCookie('hasSummary');
            return response.ok;
        } catch(error) {
            return error.message;
        }
    }

    async uploadFile(data) {
        try {
            const response = await fetch(`${this.baseUrl}users/upload-file`, {
                method: 'POST',
                headers: {
                    'Authorization': await this.token
                },
                body: data
            });
            return response.ok;
        } catch(error) {
            return error.message;
        }
    }

    async updatePositionHistory() {
        try {
            const response = await fetch(`${this.baseUrl}users/position-history`, {
                method: 'PUT',
                headers: {
                    'Authorization': await this.token
                },
                body: null
            });
            return response.ok;
        } catch(error) {
            return error.message;
        }
    }

    async getPositionHistory() {
        try {
            const data = await fetch(`${this.baseUrl}users/position-history`, {
                method: 'GET',
                headers: {
                    'Authorization': await this.token,
                    'Content-Type': 'application/json'
                }
            });
            const response = await data.json();
            return response;
        } catch(error) {
            return error.message;
        }
    }

    async payment(plan) {
        try {
            const data = await fetch(`${this.baseUrl}payments/iframe?plan=${plan}`, {
                method: 'GET',
                headers: {
                    'Authorization': await this.token,
                    'Content-Type': 'application/json'
                }
            });
            const response = await data.json();
            return response.Url;
        } catch(error) {
            return error.message;
        }
    }

    async signOut() {
        await signOut(auth);
        deleteCookie('hasSummary');
        window.location.href = '/login';
    }

    async dailyTip() {
        try {
            const data = await fetch(`${this.baseUrl}textBox`, {
                method: 'GET',
                headers: {
                    'Authorization': await this.token,
                    'Content-Type': 'application/json'
                }
            });
            const response = await data.json();
            return response;
        } catch(error) {
            return error.message;
        }
    }
}