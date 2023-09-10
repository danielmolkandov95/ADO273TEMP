<?php
$title = "Daily stats";
$overlay = "load-data";
include('../components/head.php');
include('../components/overlay.php');
include('../components/aside.php');
include('../components/header.php');
?>
<link rel="stylesheet" href="../css/dailystats.css">
<main>
    <div class="container">
        <div class="row page-heading">
            <h1>Daily Stats</h1>
        </div>
    </div>
</main>
<script async src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script type="module" src="/js/daily-stats.js"></script>
<?php include('../components/footer.php'); ?>