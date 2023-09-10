import { getCookie, setCookie } from '/js/base.js';
import { User } from '/js/user.js';

const user = new User();

const aside = document.querySelector('aside');
let aside_state;
if(aside) {
    aside_state = await getCookie('aside_state');
    if(!aside_state) aside_state = 'closed';
    if(window.innerWidth < 786) {
        aside_state = 'closed';
        aside.className = 'closed';
        setCookie('aside_state', 'closed');
    }
}

function handleSidebar(view) {
    aside_state = (aside_state == 'closed') ? 'open' : 'closed';
    document.querySelector('aside').className = aside_state;
    setCookie('aside_state', aside_state);
    if(view == 'mobile') {
        const pageOverlay = document.querySelector('.page-overlay');
        if(aside_state == 'open')
            pageOverlay.className = 'page-overlay menu-overlay show';
        else
            pageOverlay.className = 'page-overlay';
    }
}

const toggleNavbar = document.querySelector('.toggle-navbar .nav-item');
if(toggleNavbar) {
    toggleNavbar.addEventListener('click', function() {
        handleSidebar('desktop');
    });
}

const menuMobile = document.querySelector('.menu.mobile');
if(menuMobile) {
    menuMobile.addEventListener('click', function() {
        handleSidebar('mobile');
    });
}

function handleDropdown(tab, otherTab) {
    let tabClicked = document.querySelector(`.${tab} .dropdown-menu`),
        tabOther = document.querySelector(`.${otherTab} .dropdown-menu`);
    if(tabOther.classList.contains('open'))
        tabOther.classList.toggle('open');
    tabClicked.classList.toggle('open');
}

const notifications = document.querySelector('.notifications > span');
if(notifications) {
    notifications.addEventListener('click', function(e) {
        handleDropdown('notifications', 'user-options');
    });
}

const userOptions = document.querySelector('.user-options > span');
if(userOptions) {
    userOptions.addEventListener('click', function() {
        handleDropdown('user-options', 'notifications');
    });
}

const settingsTabs = document.querySelectorAll('.user-options .dropdown-item a');
if(settingsTabs) {
    [].forEach.call(settingsTabs, function(settingsTab) {
        settingsTab.addEventListener('click', function(e) {
            e.preventDefault();
            setCookie('settings-tab', this.getAttribute('href').substring(1));
            window.location.href = '/settings/';
        });
    }); 
}


const signOutButton = document.querySelector("#signOutButton");

const userSignOut = async(e) => {
    e.preventDefault();
    user.signOut();
}

if(signOutButton)
    signOutButton.addEventListener('click', userSignOut);