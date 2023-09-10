import { loadButton, unloadButton } from '/js/base.js';
import { User } from '/js/user.js';

const user = new User();
const signUpButton = document.querySelector("#signUpButton");
const formError = document.querySelector("#form-error");

const validateForm = async(displayName, email, phoneNumber, password, terms) => {
    formError.textContent = '';
    formError.classList.remove('show');
    if(displayName.trim() == '' || !(/^([a-zA-Z ]{2,})$/.test(displayName)))
        return 'Display Name is a required field, must be at least 2 characters and, only contain letters and spaces';
    else if(email.trim() == '' || !(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i.test(email)))
        return 'Email is a required field and must be valid e-mail address';
    else if(phoneNumber.trim() == '' || !(/^[0-9 -]{8,}$/.test(phoneNumber)))
        return 'Phone Number is a mandatory field and can only contain numbers, spaces and hyphens';
    else if(password.trim() == '' || password.length < 8)
        return 'Password is a mandatory field and must be at least 8 characters';
    else if(!terms.checked)
        return 'Confirm that you have read and agreed to our Terms and Conditions';
    return 'valid';
}

const userSignUp = async(e) => {
    e.preventDefault();
    await loadButton(signUpButton);
    const userDisplayName = document.querySelector("#userDisplayName").value;
    const userEmail = document.querySelector("#userEmail").value;
    const userPhoneNumber = document.querySelector("#userPhoneNumber").value;
    const userPassword = document.querySelector("#userPassword").value;
    const userTerms = document.querySelector("#terms");
    const formValidation = await validateForm(userDisplayName, userEmail, userPhoneNumber, userPassword, userTerms);
    if(formValidation == 'valid') {
        let phoneNumber = userPhoneNumber.replace(/[^0-9]/g, "");
        if(phoneNumber.charAt(0) == '0') {
            phoneNumber = phoneNumber.substring(1);
        }
        await user.signUp({
            Name: userDisplayName,
            Email: userEmail,
            PhoneNumber: `+972${phoneNumber}`,
            Password: userPassword, 
            JoinDate: new Date()
        }, signUpButton);
    } else {
        formError.textContent = formValidation;
        formError.classList.add('show');
        await unloadButton(signUpButton);
    }
}

if(signUpButton)
    signUpButton.addEventListener('click', userSignUp);