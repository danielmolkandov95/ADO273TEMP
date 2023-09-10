<?php
$title = "Overview";
$overlay = "load-data";
include('components/head.php');
include('components/overlay.php');
include('components/aside.php');
include('components/header.php');
?>
<main>
    <div class="container">
        <div class="row page-heading">
            <h1>Overview</h1>
            <a class="btn" href="/import/">
                <span class="material-symbols-rounded">add_box</span>
                <span>Add Trades</span>
            </a>
        </div>
        <div class="row four-boxes">
            <div class="box" data-box="netpnl">
                <div class="box-data">
                    <h4>Net P&L</h4>
                    <div class="box-price">0</div>
                </div>
                <div class="box-graph">
                    <svg width="125" height="60" viewBox="0 0 125 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 46.5L1.5 50.5V60H124V1.5L114 3.5L100 12.5H86L70 6.5L60.5 26L48 29L38 26L32 36L24.5 34.5L18.5 44.5L8.5 46.5Z" fill="url(#paint0_linear_57_732)" />
                        <path d="M1.5 50.5L8.5 46.5L18.5 44.5L24.5 34.5L32 36L38 26L48 29L60.5 26L70 6.5L86 12.5H100L114 3.5L124 1.5" stroke="#379f9a" stroke-width="3" />
                        <defs>
                            <linearGradient id="paint0_linear_57_732" x1="62.75" y1="1.5" x2="62.75" y2="60" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#379f9a" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
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
                <div class="box-graph">
                    <svg width="125" height="60" viewBox="0 0 125 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 46.5L1.5 50.5V60H124V1.5L114 3.5L100 12.5H86L70 6.5L60.5 26L48 29L38 26L32 36L24.5 34.5L18.5 44.5L8.5 46.5Z" fill="url(#paint0_linear_57_734)" />
                        <path d="M1.5 50.5L8.5 46.5L18.5 44.5L24.5 34.5L32 36L38 26L48 29L60.5 26L70 6.5L86 12.5H100L114 3.5L124 1.5" stroke="#379f9a" stroke-width="3" />
                        <defs>
                            <linearGradient id="paint0_linear_57_734" x1="62.75" y1="1.5" x2="62.75" y2="60" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#379f9a" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="box" data-box="avglosstrade">
                <div class="box-data">
                    <h4>Avg Loss Trade</h4>
                    <div class="box-price">0</div>
                </div>
                <div class="box-graph">
                    <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.33878 16.0661L2 10.2645V0H111V54L96.3184 41.0579L89.2 49.5372L77.1878 44.1818L62.951 49.5372L59.8367 41.0579L46.0449 33.4711L34.4776 32.1322L29.1388 24.5455L20.6857 26.7769L16.2367 21.4215L7.33878 16.0661Z" fill="url(#paint0_linear_57_735)" />
                        <path d="M2 10L7.33878 15.8367L16.2367 21.2245L20.6857 26.6122L29.1388 24.3673L34.4776 32L46.0449 33.3469L59.8367 40.9796L62.951 49.5102L77.1878 44.1224L89.2 49.5102L96.3184 40.9796L111 54" stroke="#d25c5a" stroke-width="3" />
                        <defs>
                            <linearGradient id="paint0_linear_57_735" x1="56.5" y1="54" x2="56.5" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#d25c5a" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="row mid-row">
            <div class="column">
                <div class="box daily-tip">
                    <span class="bold">Daily Tip:</span><span class="italic"></span>
                </div>
                <div class="box">
                    <h4>Avg Win/Loss by Day</h4>
                    <div>
                        <canvas id="avgWinLossByDayCanvas"></canvas>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-heading">
                    <h4>Trading Days</h4>
                    <div class="buttons-container">
                        <span class="calendar-month">Sept 2023</span>
                        <button class="calendar-btn calendar-previous" data-action="previous">
                            <span class="material-symbols-rounded">chevron_left</span>
                        </button>
                        <button class="calendar-btn calendar-next" data-action="next">
                            <span class="material-symbols-rounded">chevron_right</span>
                        </button>
                    </div>
                </div>
                <div class="calendar">
                    <table>
                        <thead>
                            <tr>
                                <th>Sun</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                            </tr>
                        </thead>
                        <tbody id="calendar-table-tbody"></tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row trades">
            <div class="box">
                <div class="box-heading">
                    <h4>Market Trades</h4>
                    <div class="buttons-container">
                        <button class="btn open-trades">Open Trades</button>
                        <button class="btn recent-trades">Recent Trades</button>
                    </div>
                </div>
                <div class="box-tabs">
                    <div class="tab table-default open-trades">
                        <table>
                            <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>Opened</th>
                                    <th>Side</th>
                                    <th>Avg. Entry Price</th>
                                    <th>Commission</th>
                                    <th>Realized Pnl</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                    <div class="tab table-default recent-trades">
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
    </div>
    </div>
</main>
<script async src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script async type="module" src="/js/overview.js"></script>
<?php include('components/footer.php'); ?>