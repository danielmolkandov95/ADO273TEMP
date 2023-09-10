import { loadButton, unloadButton } from '/js/base.js';
import { User } from '/js/user.js';

const user = new User();
const pageOverlay = document.querySelector('.page-overlay');
const iframe = document.querySelector('#paymentIframe');
const popupPayment = document.querySelector('.popup.payment');
const getStartedBtns = document.querySelectorAll(".subscription-box .btn");
if(getStartedBtns) {
    [].forEach.call(getStartedBtns, function(btn) {
        btn.addEventListener('click', async function() {
            await loadButton(this);
            const paymentPlan = this.getAttribute('data-plan');
            const paymentIframeLink = await user.payment(paymentPlan);
            iframe.src = paymentIframeLink;
            pageOverlay.classList.add('show');
            popupPayment.classList.add('show');
            await unloadButton(this);
        });
    }); 
}
pageOverlay.addEventListener('click', function() {
    popupPayment.classList.remove('show');
    pageOverlay.classList.remove('show');
});