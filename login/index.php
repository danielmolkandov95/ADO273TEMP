<?php
$title = "Login";
include('../components/head.php');
if (isset($_COOKIE["error"])) {
}
?>
<link rel="stylesheet" href="../css/form.css">
<link rel="stylesheet" href="../css/solo.css">
<div class="container">
    <div class="box">
        <?php include('../components/general/logo.php'); ?>
        <form class="form" id="form" action="">
            <div class="form-group"><input type="email" id="userEmail" name="email" placeholder="Email" class="form-control" required /></div>
            <div class="form-group"><input type="password" id="userPassword" name="password" placeholder="Password" class="form-control" required /></div>
            <div class="form-group"><button type="submit" id="signInButton" class="btn">Login</button></div>
            <?php if (isset($_COOKIE["error"])) : ?>
                <div class="form-error show" id="form-error">
                    <?php
                    echo $_COOKIE["error"];
                    setcookie("error", "", time() - 3600, "/");
                    ?>
                </div>
            <? else : ?>
                <div class="form-error" id="form-error"></div>
            <?php endif; ?>
            <div class="form-group form-links">
                <span>Don't have an account? <a href="/signup" class="color-primary">Sign up</a></span>
            </div>
        </form>
    </div>
</div>
<script type="module" src="/js/signin.js"></script>
<?php include('../components/footer.php'); ?>