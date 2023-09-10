import { loadButton } from '/js/base.js';
import { User } from '/js/user.js';

const user = new User();
const signInButton = document.querySelector("#signInButton");

const userSignIn = async(e) => {
    e.preventDefault();
    await loadButton(signInButton);
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    await user.signIn(e, signInEmail, signInPassword, signInButton);
}

if(signInButton) 
    signInButton.addEventListener('click', userSignIn);