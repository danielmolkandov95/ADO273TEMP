<?php
$title = "Your payment was successful";
include('../components/head.php');
?>
<link rel="stylesheet" href="../css/transaction.css">
<div class="transaction-text">
    <h1>Your payment was successful</h1>
    <p id="redirectMessage">You will be re-directed to the next step in <span id="secondsLeft">5</span> seconds</p>
    <script type="text/javascript">
        function countdown() {
            if (document.getElementById("secondsLeft").innerHTML > 1) {
                document.getElementById("secondsLeft").innerHTML -= 1;
            } else {
                document.getElementById("secondsLeft").innerHTML = "0";
                document.getElementById("redirectMessage").innerHTML = "You are being redirected now...";
                parent.location.href = "/import";
            }
        }
        newCount = setInterval(countdown, 1000);
    </script>
</div>
<?php include('../components/footer.php'); ?>