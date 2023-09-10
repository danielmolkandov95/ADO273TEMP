import { unloadButton, loadButton, showError, getCookie, setCookie } from '/js/base.js';
import { User } from '/js/user.js';

const user = new User();
let userData = null;
const personalInfoTab = document.querySelector('.settings-tab[data-tab="personal-info"]');
const notificationsTab = document.querySelector('.settings-tab[data-tab="notifications"]');
const billingTab = document.querySelector('.settings-tab[data-tab="billing"]');
const passwordSecurityTab = document.querySelector('.settings-tab[data-tab="password-security"]');

const displayNameInput = personalInfoTab.querySelector('#displayName');
const phoneNumberInput = personalInfoTab.querySelector('#phoneNumber');
const personalInfoBtn = personalInfoTab.querySelector('.btn');

const currentPasswordInput = passwordSecurityTab.querySelector('#currentPassword');
const newPasswordInput = passwordSecurityTab.querySelector('#newPassword');
const confirmPasswordInput = passwordSecurityTab.querySelector('#confirmPassword');
const passwordSecurityBtn = passwordSecurityTab.querySelector('.btn');

const personalInfoError = document.querySelector('.settings-tab[data-tab="personal-info"] .form-error');
const passwordSecurityError = document.querySelector('.settings-tab[data-tab="password-security"] .form-error');

function selectTab(tab) {
    document.querySelector(`.settings-sidebar a[href="#${tab}"]`).classList.add('selected');
    document.querySelector(`.settings-tab[data-tab="${tab}"]`).classList.add('selected');
}

function deselectTab(tab) {
    document.querySelector(`.settings-sidebar a[href="#${tab}"]`).classList.remove('selected');
    document.querySelector(`.settings-tab[data-tab="${tab}"]`).classList.remove('selected');
}

let currentTab = await getCookie('settings-tab'),
    tabClicked;
selectTab(currentTab);

const settingsSidebar = document.querySelectorAll('.settings-sidebar a');
if(settingsSidebar) {
    [].forEach.call(settingsSidebar, function(settingsSidebar) {
        settingsSidebar.addEventListener('click', function(e){
            e.preventDefault();
            tabClicked = this.getAttribute('href').substring(1);
            if (tabClicked == currentTab) return;
            deselectTab(currentTab);
            selectTab(tabClicked);
            currentTab = tabClicked;
            setCookie('settings-tab', currentTab);
        });
    }); 
}

const resetUserData = async() => {
    loadButton(resetBtn);
    const response = user.reset();
    if(response == true) {
        // SHOW TOAST (ACCOUNT RESET SUCCESSFULLY)
        window.location.href = '/import';
    }
    // SHOW TOAST (COULDNT RESET YOUR ACCOUNT)
    unloadButton(resetBtn);
}

const resetBtn = document.querySelector('.btn.reset');
if(resetBtn) {
    resetBtn.addEventListener('click', function() {
        resetUserData();
    });
}

function handlePersonalInfoBtn() {
    if(displayNameInput.value != userData.Name || phoneNumberInput.value != userData.PhoneNumber)
        personalInfoBtn.removeAttribute('disabled');
    else
        personalInfoBtn.setAttribute('disabled', '');
}

displayNameInput.addEventListener('input', function() {
    handlePersonalInfoBtn();
});

phoneNumberInput.addEventListener('input', function() {
    handlePersonalInfoBtn();
});

const updateUserData = async() => {
    await loadButton(personalInfoBtn);
    if(displayNameInput.value != userData.Name || phoneNumberInput.value != userData.PhoneNumber) {
        const updateUser = await user.update({
            "Name": displayNameInput.value,
            "PhoneNumber": phoneNumberInput.value
        });
        if(updateUser) {
            showError(personalInfoError, 'The details have been successfully changed', personalInfoBtn);
            userData.Name = displayNameInput.value;
            userData.PhoneNumber = phoneNumberInput.value;
        } else
            showError(personalInfoError, 'We were unable to update the details, please try again in a few minutes', personalInfoBtn);
    } else 
        showError(personalInfoError, 'There was no change in any of the details', personalInfoBtn);
}

if(personalInfoBtn) {
    personalInfoBtn.addEventListener('click', function() {
        updateUserData();
    });
}

function handlePasswordSecurityBtn() {
    if(currentPasswordInput.value != '' && newPasswordInput.value != '' && newPasswordInput.value == confirmPasswordInput.value && currentPasswordInput.value != newPasswordInput.value)
        passwordSecurityBtn.removeAttribute('disabled');
    else
        passwordSecurityBtn.setAttribute('disabled', '');
}

currentPasswordInput.addEventListener('input', function() {
    handlePasswordSecurityBtn();
});

newPasswordInput.addEventListener('input', function() {
    handlePasswordSecurityBtn();
});

confirmPasswordInput.addEventListener('input', function() {
    handlePasswordSecurityBtn();
});

const updateUserPassword = async() => {
    await loadButton(passwordSecurityBtn);
    if(currentPasswordInput.value != '' && newPasswordInput.value != '' && newPasswordInput.value == confirmPasswordInput.value && currentPasswordInput.value != newPasswordInput.value) {
        const response = await user.updatePassword(currentPasswordInput.value, newPasswordInput.value);
        if(await response == true)
            showError(passwordSecurityError, 'Updated password successfully', passwordSecurityBtn);
        else
            showError(passwordSecurityError, await response.replaceAll('Firebase: ', ''), passwordSecurityBtn);
    } else 
        showError(passwordSecurityError, 'We could not update the password, please try again in a few minutes', passwordSecurityBtn);
}

if(passwordSecurityBtn) {
    passwordSecurityBtn.addEventListener('click', function(e) {
        e.preventDefault();
        updateUserPassword();
    });
}

const setUserData = async() => {
    userData = await user.getData();
    displayNameInput.value = userData.Name;
    phoneNumberInput.value = userData.PhoneNumber;
    document.querySelector('#overlay').classList.remove('load-data');
}

setUserData();