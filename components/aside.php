<aside class="<?php if (isset($_COOKIE["aside_state"])) {
                    echo $_COOKIE["aside_state"];
                } else {
                    echo "closed";
                } ?>">
    <div class="container">
        <ul class="navbar">
            <li class="sidebar-logo">
                <?php
                include('general/logo.php');
                include('general/logo-icon.php');
                ?>
            </li>
            <li class="nav-item">
                <a href="/" class="nav-link <?php if ($_SERVER['REQUEST_URI'] == '/') : ?>selected<? endif; ?>">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">dashboard</span>
                    </div>
                    <span class="nav-link-text">Overview</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/daily-stats/" class="nav-link <?php if (str_contains(($_SERVER['REQUEST_URI']), 'daily-stats')) : ?>selected<? endif; ?>">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">calendar_today</span>
                    </div>
                    <span class="nav-link-text">Daily Stats</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/trade-log/" class="nav-link <?php if (str_contains(($_SERVER['REQUEST_URI']), 'trade-log')) : ?>selected<? endif; ?>">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">format_list_bulleted</span>
                    </div>
                    <span class="nav-link-text">Trade Log</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/maintenance/" class="nav-link">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">leaderboard</span>
                    </div>
                    <span class="nav-link-text">Leaderboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/maintenance/" class="nav-link">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">lightbulb</span>
                    </div>
                    <span class="nav-link-text">Trading Ideas</span>
                </a>
            </li>
        </ul>
        <ul class="navbar toggle-navbar desktop">
            <li class="nav-item">
                <a href="#" class="nav-link" data-action="close">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">left_panel_close</span>
                    </div>
                    <span class="nav-link-text">Collapse Sidebar</span>
                </a>
                <a href="#" class="nav-link" data-action="open">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">left_panel_open</span>
                    </div>
                    <span class="nav-link-text">Open Sidebar</span>
                </a>
            </li>
        </ul>
        <ul class="navbar mobile">
            <li class="nav-item mobile">
                <a href="/settings/" class="nav-link">
                    <div class="nav-link-icon">
                        <span class="material-symbols-rounded">settings</span>
                    </div>
                    <span class="nav-link-text">Settings</span>
                </a>
            </li>
        </ul>
    </div>
</aside>