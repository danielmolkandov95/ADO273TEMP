export const showError = async(span, text, button) => {
    span.textContent = text;
    span.classList.add('show');
    if(button)
        unloadButton(button);
}

export const setError = async(value) => {
    document.cookie = `error=${value};path=/;`;
}

export const setCookie = async(name, value, expiration) => {
    if(expiration)
        document.cookie = `${name}=${value}; expires=${expiration}; path=/;`;
    else
        document.cookie = `${name}=${value};path=/;`;
}

export const deleteCookie = async(name) => {
    document.cookie = `token=${name};path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export const getCookie = async(cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const loadButton = async(button) => {
    button.classList.add('btn--loading');
    button.setAttribute('disabled', '');
}

export const unloadButton = async(button) => {
    button.classList.remove('btn--loading');
    button.removeAttribute('disabled');
}

export const dollarSign = (num) => {
    if(num < 0) {
        num = Math.abs(num);
        return `-$${num}`;
    } else
        return `$${num}`
}