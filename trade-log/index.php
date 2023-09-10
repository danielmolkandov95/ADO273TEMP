<?php
$title = "Trade Log";
$overlay = "load-data";
include('../components/head.php');
include('../components/overlay.php');
include('../components/aside.php');
include('../components/header.php');
?>
<main>
    <div class="container">
        <div class="row page-heading">
            <h1>Trade Log</h1>
        </div>
        <div class="row four-boxes">
            <div class="box" data-box="netpnl">
                <div class="box-data">
                    <h4>Net P&L</h4>
                    <div class="box-price">0</div>
                </div>
                <div class="box-graph"></div>
            </div>
            <div class="box" data-box="winlossratio">
                <div class="box-data">
                    <h4>Win Percentage</h4>
                    <div class="box-price">0</div>
                </div>
                <div class="box-graph">
                    <svg width="126" height="62" viewBox="0 0 126 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 44L2 50.5V62H124.5V1.5L108 16L100 6.5L86.5 12.5L70.5 6.5L67 16L51.5 24.5L38.5 26L32.5 34.5L23 32L18 38L8 44Z" fill="url(#paint0_linear_57_733)" />
                        <path d="M2 50.5L8 44L18 38L23 32L32.5 34.5L38.5 26L51.5 24.5L67 16L70.5 6.5L86.5 12.5L100 6.5L108 16L124.5 1.5" stroke="#379f9a" stroke-width="3" />
                        <defs>
                            <linearGradient id="paint0_linear_57_733" x1="63.25" y1="1.5" x2="63.25" y2="62" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#379f9a" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="box" data-box="avgwintrade">
                <div class="box-data">
                    <h4>Avg Win Trade</h4>
                    <div class="box-price">0</div>
                </div>
                <div class="box-graph"></div>
            </div>
            <div class="box" data-box="avglosstrade">
                <div class="box-data">
                    <h4>Avg Loss Trade</h4>
                    <div class="box-price">0</div>
                </div>
                <div class="box-graph"></div>
            </div>
        </div>
        <div class="row trades">
            <div class="box">
                <div class="table-default">
                    <table>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Opened</th>
                                <th>Closed</th>
                                <th>Side</th>
                                <th>Avg. Entry Price</th>
                                <th>Avg. Close Price</th>
                                <th>Commission</th>
                                <th>Closing PNL</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>
<script async type="module" src="/js/trade-log.js"></script>
<?php include('../components/footer.php'); ?>