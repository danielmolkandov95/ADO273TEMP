import { loadButton, showError } from "/js/base.js";
import { User } from '/js/user.js';

const user = new User();
const formError = document.querySelector("#form-error");
const apiKey = document.querySelector('#apiKey');
const secretKey = document.querySelector('#secretKey');

let goBackButton = document.querySelector('.go-back'),
    multiSelect,
    userPlatform,
    userMethod,
    currentStep,
    toStep;

function showHideGuide(currentStep, nextStep) {
    const currentGuide = document.querySelector(`.guide[data-step="${currentStep}"]`);
    const nextStepGuide = document.querySelector(`.guide[data-step="${nextStep}"]`);
    if (currentGuide)
        currentGuide.classList.remove('selected');
    if (nextStepGuide) {
        if (nextStep != 3)
            nextStepGuide.classList.add('selected');
        else
            document.querySelector(`.guide[data-step="${nextStep}"][data-method="${userMethod}"][data-platform="${userPlatform}"]`);
    }
}

function moveStep(from, to) {
    document.querySelector(`.box-step[data-step="${from}"]`).classList.remove('selected');
    document.querySelector(`.box-step[data-step="${to}"]`).classList.add('selected');
    document.querySelector('.box-heading h1 span:first-child').textContent = `Step ${to}:`;
    document.querySelector('.box-heading h1 .step-heading-text').textContent = document.querySelector(`.box-step[data-step="${to}"]`).getAttribute('data-heading');
    document.querySelector(`.steps .step[data-step="${to}"]`).classList.add('done');
    goBackButton.setAttribute('data-current', to);
    goBackButton.setAttribute('data-to', to - 1);
}

function showHideBackButton(toStep) {
    if (toStep == 1)
        goBackButton.removeAttribute('style');
    else if (!goBackButton.getAttribute('style'))
        goBackButton.setAttribute('style', 'display: flex;');
}

function goBack() {
    currentStep = goBackButton.getAttribute('data-current');
    toStep = goBackButton.getAttribute('data-to');
    if (currentStep == 3) {
        document.querySelector('.box-step .import').style.display = 'none';
        document.querySelector('.box-step .synchronization').style.display = 'none';
    }
    showHideBackButton(toStep);
    moveStep(currentStep, toStep);
    showHideGuide(currentStep, toStep);
    document.querySelector(`.steps .step[data-step="${currentStep}"]`).classList.remove('done');
}

document.querySelector('.box-step[data-step="1"] .multiselect .select').addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
});

document.querySelector('.box-step[data-step="2"] .multiselect .select').addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
});

function handleMultiSelect(element) {
    multiSelect = element.parentElement.parentElement;
    multiSelect.querySelector('.select span:first-child').textContent = element.textContent;
    multiSelect.classList.remove('open');
    document.querySelector('.box-step.selected .btn').removeAttribute('disabled');
}

const stepOneList = document.querySelectorAll('.box-step[data-step="1"] .multiselect .options li');
if(stepOneList) {
    [].forEach.call(stepOneList, function(option) {
        option.addEventListener('click', function() {
            handleMultiSelect(this);
        });
    }); 
}

const stepTwoList = document.querySelectorAll('.box-step[data-step="2"] .multiselect .options li');
if(stepTwoList) {
    [].forEach.call(stepTwoList, function(option) {
        option.addEventListener('click', function() {
            handleMultiSelect(this);
        });
    }); 
}

function handleStep(element) {
    let currentStep = element.parentElement.getAttribute('data-step'),
        nextStep = Number(currentStep) + 1;
    if (currentStep == 2) {
        userPlatform = document.querySelector('.box-step[data-step="1"] .multiselect .select span:first-child').textContent.toLowerCase();
        userMethod = document.querySelector('.box-step[data-step="2"] .multiselect .select span:first-child').textContent.toLowerCase();
        document.querySelector(`.${userMethod}`).style.display = 'block';
    }
    moveStep(currentStep, nextStep);
    showHideBackButton(nextStep);
    showHideGuide(currentStep, nextStep);
}

document.querySelector('.steps-btn[data-step="1"] .btn').addEventListener('click', function() {
    handleStep(this);
});

document.querySelector('.steps-btn[data-step="2"] .btn').addEventListener('click', function() {
    handleStep(this);
});

goBackButton.addEventListener('click', function() {
    goBack();
});

const userFile = document.querySelector("#userFile");
const addTradesButton = document.querySelector("#addTradesButton");

function handleFileUploaded() {
    const userFileUploaded = this.files[0];
    this.classList.add('filled');
    this.setAttribute('data-filename', userFileUploaded.name);
    addTradesButton.removeAttribute('disabled');
}

async function handleImport() {
    const updateUserPlatform = await user.update({
        "TradingPlatform": `${userPlatform}`
    });
    if(!updateUserPlatform) {
        showError(formError, 'We could not configure your platform, please contact us and a representative will help you in the process', addTradesButton);
        return;
    }
    let formData = new FormData();
    formData.append('file', userFile.files[0]);
    const updateUserFile = await user.uploadFile(formData);
    if(!updateUserFile) {
        showError(formError, 'We detected an error in the file you uploaded, please contact us and a representative will help you in the process', addTradesButton);
        return;
    }
    window.location.href = '/';
}

function handleApiKeys() {
    if(apiKey.value != '' && secretKey.value != '')
        addTradesButton.removeAttribute('disabled');
    else
        addTradesButton.setAttribute('disabled', '');
}

if(apiKey) {
    apiKey.addEventListener('input', function() {
        handleApiKeys();
    });
}

if(secretKey) {
    secretKey.addEventListener('input', function() {
        handleApiKeys();
    });
}

async function handleSync() {
    const updateKeys = await user.update({
        "TradingPlatform": `${userPlatform}`,
        "ApiKey": apiKey.value,
        "SecretKey": secretKey.value
    });
    if(!updateKeys) {
        showError(formError, 'We could not configure your Api & Secret Keys, please contact us and a representative will help you in the process', addTradesButton);
        return;
    }
    const updatePositionHistory = await user.updatePositionHistory();
    if(!updatePositionHistory) {
        showError(formError, 'A problem was detected parsing your data, please contact us and a representative will help you in the process', addTradesButton);
        return;
    }
    window.location.href = '/';
}

userFile.addEventListener("change", handleFileUploaded, false);

const userTrades = async(e) => {
    e.preventDefault();
    await loadButton(addTradesButton);
    if(userMethod == 'import')
        handleImport();
    else
        handleSync();
}

if(addTradesButton)
    addTradesButton.addEventListener('click', userTrades);