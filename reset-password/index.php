<?php
$title = "Reset password";
include('../components/head.php');
?>
<link rel="stylesheet" href="../css/form.css">
<link rel="stylesheet" href="../css/solo.css">
<div class="container">
    <div class="box">
        <?php include('../components/general/logo.php'); ?>
        <form class="form" action="">
            <div class="form-group"><input type="email" id="email" name="email" placeholder="Email" class="form-control" required /></div>
            <div class="form-group"><button type="submit" class="btn">Reset Password</button></div>
        </form>
    </div>
</div>
<?php include('../components/footer.php'); ?>