<header>
    <div class="container">
        <?php if (isset($title) && $title != 'Subscription') : ?>
            <button class="menu mobile">
                <span class="material-symbols-rounded">menu</span>
            </button>
        <?php
        endif;
        $mobile = true;
        include('general/logo.php');
        ?>
        <?php if (str_contains(($_SERVER['REQUEST_URI']), 'import')) : ?> <!-- SHOW ONLY IF IMPORT PAGE -->
            <div class="steps">
                <div class="step done" data-step="1">
                    <span>1</span>
                    <span>Platform</span>
                </div>
                <div class="step" data-step="2">
                    <span>2</span>
                    <span>Method</span>
                </div>
                <div class="step" data-step="3">
                    <span>3</span>
                    <span>Data</span>
                </div>
            </div>
        <?php endif; ?>
        <div class="header-options">
            <div class="notifications">
                <span class="material-symbols-rounded">notifications</span>
                <ul class="dropdown-menu">
                    <li class="dropdown-item">
                        <a href="#" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">notifications</span>
                            </div>
                            <span class="dropdown-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                        </a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">notifications</span>
                            </div>
                            <span class="dropdown-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                        </a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">notifications</span>
                            </div>
                            <span class="dropdown-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="user-options">
                <span class="material-symbols-rounded">settings</span>
                <ul class="dropdown-menu">
                    <li class="dropdown-item">
                        <a href="#personal-info" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">person</span>
                            </div>
                            <span class="dropdown-text">Personal Info</span>
                        </a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#notifications" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">edit_notifications</span>
                            </div>
                            <span class="dropdown-text">Notifications</span>
                        </a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#billing" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">credit_card</span>
                            </div>
                            <span class="dropdown-text">Billing</span>
                        </a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#password-security" target="_self">
                            <div class="dropdown-icon">
                                <span class="material-symbols-rounded">admin_panel_settings</span>
                            </div>
                            <span class="dropdown-text">Password & Security</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="user-logout">
                <a id="signOutButton" href="#" target="_self">
                    <span class="material-symbols-rounded">logout</span>
                </a>
            </div>
        </div>
    </div>
</header>