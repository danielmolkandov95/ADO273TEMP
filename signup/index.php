<?php
$title = "Sign up";
include('../components/head.php');
?>
<link rel="stylesheet" href="../css/form.css">
<link rel="stylesheet" href="../css/solo.css">
<div class="container">
    <div class="box">
        <?php include('../components/general/logo.php'); ?>
        <form id="signUpForm">
            <div class="form-group">
                <input name="Name" type="text" id="userDisplayName" placeholder="Display Name" required />
            </div>
            <div class="form-group">
                <input name="Email" type="email" id="userEmail" placeholder="Email" required />
            </div>
            <div class="form-group">
                <input name="PhoneNumber" type="text" id="userPhoneNumber" placeholder="Phone Number" required />
            </div>
            <div class="form-group">
                <input name="Password" type="password" id="userPassword" placeholder="Password" required />
            </div>
            <div class="form-group checkbox-group">
                <input type="checkbox" id="terms" name="terms" required />
                <label for="terms"></label><span>I have read and agree to the <a href="/terms-and-conditions" target="blank">Terms and Conditions</a></span>
            </div>
            <div class="form-group">
                <button type="submit" id="signUpButton" class="btn">Sign Up</button>
            </div>
            <div class="form-error" id="form-error"></div>
            <div class="form-group form-links">
                <span>Forgot your password? <a class="color-primary" href="/reset-password/" target="_self">Reset Your Password</a></span>
                <span>Already have an account? <a class="color-primary" href="/login" target="_self">Login</a></span>
            </div>
        </form>
    </div>
</div>
<script type="module" src="/js/signup.js"></script>
<?php include('../components/footer.php'); ?>