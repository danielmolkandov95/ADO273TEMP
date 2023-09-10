<?php
$title = "Subscription";
include('../components/head.php');
include('../components/overlay.php');
include('../components/header.php');
?>
<link rel="stylesheet" href="../css/subscription.css">
<main>
    <div class="container">
        <div class="page-heading">
            <h1>Subscription Plans</h1>
            <p class="subtitle">Choose the plan that suits you and let's get started!</p>
        </div>
        <div class="subscription-container">
            <div class="subscription-box">
                <h2>Monthly</h2>
                <div class="price-container">
                    <span class="price">$33</span>
                </div>
                <p>One month plan. <br /> First time trying a trading journal? This is for you.</p>
                <div class="separation"></div>
                <ul>
                    <li><span class="material-symbols-rounded">check</span> All features</li>
                    <li><span class="material-symbols-rounded">check</span> Community</li>
                    <li><span class="material-symbols-rounded">check</span> Customer Support</li>
                </ul>
                <button class="btn get-started" data-plan="Monthly">Get started</button>
            </div>
            <div class="subscription-box popular">
                <h2>Quarterly</h2>
                <div class="price-container">
                    <span class="price">$28</span>
                </div>
                <p>3 month plan. <br /> <span class="subscription-bold">Save 15%!</span> $84 total for 3 months.</p>
                <div class="separation"></div>
                <ul>
                    <li><span class="material-symbols-rounded">check</span> All features</li>
                    <li><span class="material-symbols-rounded">check</span> Community</li>
                    <li><span class="material-symbols-rounded">check</span> Customer Support</li>
                </ul>
                <button class="btn get-started" data-plan="Quarterly">Get started</button>
            </div>
            <div class="subscription-box">
                <h2>Yearly</h2>
                <div class="price-container">
                    <span class="price">$25</span>
                </div>
                <p>Yearly plan. <br /> Pay for 9 months only, <span class="subscription-bold">get 3 months free!</span></p>
                <div class="separation"></div>
                <ul>
                    <li><span class="material-symbols-rounded">check</span> All features</li>
                    <li><span class="material-symbols-rounded">check</span> Community</li>
                    <li><span class="material-symbols-rounded">check</span> Customer Support</li>
                </ul>
                <button class="btn get-started" data-plan="Yearly">Get started</button>
            </div>
        </div>
    </div>
</main>
<div class="popup payment">
    <div class="popup-body">
        <iframe id="paymentIframe" src="" width="100%" height="500"></iframe>
    </div>
</div>
<script type="module" src="/js/subscription.js"></script>
<?php include('../components/footer.php'); ?>