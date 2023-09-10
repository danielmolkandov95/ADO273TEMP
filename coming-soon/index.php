<?php
$title = "Coming soon";
include('../components/head.php');
?>
<link rel="stylesheet" href="../css/form.css">
<link rel="stylesheet" href="../css/solo.css">
<link rel="stylesheet" href="../css/comingsoon.css">
<div class="container">
    <div class="box">
        <?php include('../components/general/logo.php') ?>
        <div class="box-heading">
            <h1>Coming Soon</h1>
            <div class="description">Enter your email to receive an update as soon as the system is ready</div>
        </div>
        <form class="form" action="">
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Email" class="form-control" required>
            </div>
            <div class="form-group">
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>
    </div>
</div>
<?php include('../components/footer.php'); ?>