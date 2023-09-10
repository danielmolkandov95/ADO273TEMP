<?php
$title = "Settings";
$overlay = "load-data";
include('../components/head.php');
include('../components/overlay.php');
include('../components/aside.php');
include('../components/header.php');
?>
<link rel="stylesheet" href="../css/form.css">
<link rel="stylesheet" href="../css/settings.css">
<main>
    <div class="container">
        <div class="row page-heading">
            <h1>Settings</h1>
            <button class="btn reset">
                <span>Reset Account</span>
            </button>
        </div>
        <div class="row settings-row">
            <div class="box settings-sidebar">
                <ul>
                    <li>
                        <a href="#personal-info">
                            <span class="material-symbols-rounded">person</span>
                            <span>Personal Info</span>
                        </a>
                    </li>
                    <li>
                        <a href="#notifications">
                            <span class="material-symbols-rounded">edit_notifications</span>
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li>
                        <a href="#billing">
                            <span class="material-symbols-rounded">credit_card</span>
                            <span>Billing</span>
                        </a>
                    </li>
                    <li>
                        <a href="#password-security">
                            <span class="material-symbols-rounded">admin_panel_settings</span>
                            <span>Password & Security</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="box settings-tab" data-tab="personal-info">
                <h2>Personal Info</h2>
                <form action="">
                    <div class="form-group">
                        <label for="name">Display Name</label>
                        <input type="text" id="displayName" name="name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phone" class="form-control" />
                    </div>
                    <button type="submit" class="btn" disabled>Update Info</button>
                    <div class="form-error"></div>
                </form>
            </div>
            <div class="box settings-tab" data-tab="notifications">
                <h2>Notifications</h2>
                <form class="form">
                    <div class="setting">
                        <div class="setting-text">
                            <h3>System Updates</h3>
                            <span class="setting-text-sub">Such as new features, changes to existing features, etc.</span>
                        </div>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="setting">
                        <div class="setting-text">
                            <h3>Community</h3>
                            <span class="setting-text-sub">Messages from the community managers.</span>
                        </div>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="setting">
                        <button type="submit" class="btn">Update Notifications Settings</button>
                    </div>
                </form>
            </div>
            <div class="box settings-tab" data-tab="billing">
                <h2>Billing History</h2>
                <div class="table-default">
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Invoice #324 - Monthly Plan</td>
                                <td>33$</td>
                                <td>15/8/2023</td>
                                <td>Paid</td>
                                <td>
                                    <a href="#invoice_download_link">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 34" width="20">
                                            <path id="Layer" fill="#fff" d="m31 7.8q-0.4 0-0.8 0.1-0.3 0-0.7 0.1-0.3 0-0.7 0.1-0.4 0.1-0.7 0.2c-0.5-2.3-1.8-4.4-3.7-5.9-1.8-1.5-4.1-2.4-6.5-2.4-2.4 0-4.7 0.7-6.6 2.2-1.9 1.4-3.2 3.5-3.8 5.8-2.3 0.4-4.3 1.6-5.6 3.4-1.4 1.9-2 4.1-1.8 6.4 0.2 2.3 1.2 4.4 2.8 5.9 1.7 1.6 3.9 2.4 6.1 2.5h5.8c0.4 0 0.7-0.2 1-0.4 0.2-0.3 0.3-0.6 0.3-1 0-0.3-0.1-0.6-0.3-0.9-0.3-0.2-0.6-0.4-1-0.4h-5.8c-1.7 0.1-3.3-0.5-4.6-1.7-1.2-1.2-2-2.9-2-4.6-0.1-1.7 0.5-3.4 1.7-4.7 1.2-1.2 2.8-2 4.5-2q0.2-0.1 0.4-0.1 0.2-0.1 0.4-0.3 0.1-0.1 0.3-0.3 0.1-0.2 0.1-0.4c0.3-2 1.4-3.8 2.9-5.1 1.6-1.2 3.5-1.9 5.5-1.8 2 0.2 3.9 1 5.3 2.4 1.4 1.5 2.2 3.4 2.3 5.4q0 0.3 0.2 0.6 0.2 0.3 0.5 0.5 0.3 0.1 0.6 0.1 0.4 0 0.6-0.2c1.8-1 3.9-1.1 5.7-0.3 1.9 0.7 3.3 2.3 3.8 4.3 0.5 2 0.1 4.1-1.1 5.7-1.2 1.6-3.1 2.5-5.1 2.5h-5.8c-0.4 0-0.7 0.2-1 0.4-0.2 0.3-0.3 0.6-0.3 0.9 0 0.4 0.1 0.7 0.3 1 0.3 0.2 0.6 0.4 1 0.4h5.8c2.4 0 4.7-1 6.4-2.7 1.6-1.7 2.6-4.1 2.6-6.5 0-2.4-1-4.8-2.6-6.5-1.7-1.7-4-2.7-6.4-2.7z" />
                                            <path id="Layer" fill="#fff" d="m23 28.4l-1.7 1.5v-9.6c0-0.4-0.1-0.7-0.4-1-0.2-0.2-0.6-0.3-0.9-0.3-0.3 0-0.7 0.1-0.9 0.3-0.3 0.3-0.4 0.6-0.4 1v9.6l-1.7-1.5c-0.3-0.2-0.6-0.3-1-0.2-0.3 0-0.6 0.2-0.8 0.4-0.2 0.3-0.3 0.6-0.3 0.9 0 0.4 0.2 0.7 0.4 0.9l3.9 3.3 0.1 0.1 0.1 0.1h0.1 0.2 0.1q0 0.1 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1h0.1 0.2 0.1l0.1-0.1 0.1-0.1 3.9-3.3c0.3-0.2 0.5-0.5 0.5-0.9 0.1-0.3 0-0.7-0.3-1-0.2-0.3-0.5-0.4-0.9-0.4-0.3-0.1-0.7 0.1-1 0.3z" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Invoice #324 - Monthly Plan</td>
                                <td>33$</td>
                                <td>15/8/2023</td>
                                <td>Paid</td>
                                <td>
                                    <a href="#invoice_download_link">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 34" width="20">
                                            <path id="Layer" fill="#fff" d="m31 7.8q-0.4 0-0.8 0.1-0.3 0-0.7 0.1-0.3 0-0.7 0.1-0.4 0.1-0.7 0.2c-0.5-2.3-1.8-4.4-3.7-5.9-1.8-1.5-4.1-2.4-6.5-2.4-2.4 0-4.7 0.7-6.6 2.2-1.9 1.4-3.2 3.5-3.8 5.8-2.3 0.4-4.3 1.6-5.6 3.4-1.4 1.9-2 4.1-1.8 6.4 0.2 2.3 1.2 4.4 2.8 5.9 1.7 1.6 3.9 2.4 6.1 2.5h5.8c0.4 0 0.7-0.2 1-0.4 0.2-0.3 0.3-0.6 0.3-1 0-0.3-0.1-0.6-0.3-0.9-0.3-0.2-0.6-0.4-1-0.4h-5.8c-1.7 0.1-3.3-0.5-4.6-1.7-1.2-1.2-2-2.9-2-4.6-0.1-1.7 0.5-3.4 1.7-4.7 1.2-1.2 2.8-2 4.5-2q0.2-0.1 0.4-0.1 0.2-0.1 0.4-0.3 0.1-0.1 0.3-0.3 0.1-0.2 0.1-0.4c0.3-2 1.4-3.8 2.9-5.1 1.6-1.2 3.5-1.9 5.5-1.8 2 0.2 3.9 1 5.3 2.4 1.4 1.5 2.2 3.4 2.3 5.4q0 0.3 0.2 0.6 0.2 0.3 0.5 0.5 0.3 0.1 0.6 0.1 0.4 0 0.6-0.2c1.8-1 3.9-1.1 5.7-0.3 1.9 0.7 3.3 2.3 3.8 4.3 0.5 2 0.1 4.1-1.1 5.7-1.2 1.6-3.1 2.5-5.1 2.5h-5.8c-0.4 0-0.7 0.2-1 0.4-0.2 0.3-0.3 0.6-0.3 0.9 0 0.4 0.1 0.7 0.3 1 0.3 0.2 0.6 0.4 1 0.4h5.8c2.4 0 4.7-1 6.4-2.7 1.6-1.7 2.6-4.1 2.6-6.5 0-2.4-1-4.8-2.6-6.5-1.7-1.7-4-2.7-6.4-2.7z" />
                                            <path id="Layer" fill="#fff" d="m23 28.4l-1.7 1.5v-9.6c0-0.4-0.1-0.7-0.4-1-0.2-0.2-0.6-0.3-0.9-0.3-0.3 0-0.7 0.1-0.9 0.3-0.3 0.3-0.4 0.6-0.4 1v9.6l-1.7-1.5c-0.3-0.2-0.6-0.3-1-0.2-0.3 0-0.6 0.2-0.8 0.4-0.2 0.3-0.3 0.6-0.3 0.9 0 0.4 0.2 0.7 0.4 0.9l3.9 3.3 0.1 0.1 0.1 0.1h0.1 0.2 0.1q0 0.1 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1h0.1 0.2 0.1l0.1-0.1 0.1-0.1 3.9-3.3c0.3-0.2 0.5-0.5 0.5-0.9 0.1-0.3 0-0.7-0.3-1-0.2-0.3-0.5-0.4-0.9-0.4-0.3-0.1-0.7 0.1-1 0.3z" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Invoice #324 - Monthly Plan</td>
                                <td>33$</td>
                                <td>15/8/2023</td>
                                <td>Paid</td>
                                <td>
                                    <a href="#invoice_download_link">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 34" width="20">
                                            <path id="Layer" fill="#fff" d="m31 7.8q-0.4 0-0.8 0.1-0.3 0-0.7 0.1-0.3 0-0.7 0.1-0.4 0.1-0.7 0.2c-0.5-2.3-1.8-4.4-3.7-5.9-1.8-1.5-4.1-2.4-6.5-2.4-2.4 0-4.7 0.7-6.6 2.2-1.9 1.4-3.2 3.5-3.8 5.8-2.3 0.4-4.3 1.6-5.6 3.4-1.4 1.9-2 4.1-1.8 6.4 0.2 2.3 1.2 4.4 2.8 5.9 1.7 1.6 3.9 2.4 6.1 2.5h5.8c0.4 0 0.7-0.2 1-0.4 0.2-0.3 0.3-0.6 0.3-1 0-0.3-0.1-0.6-0.3-0.9-0.3-0.2-0.6-0.4-1-0.4h-5.8c-1.7 0.1-3.3-0.5-4.6-1.7-1.2-1.2-2-2.9-2-4.6-0.1-1.7 0.5-3.4 1.7-4.7 1.2-1.2 2.8-2 4.5-2q0.2-0.1 0.4-0.1 0.2-0.1 0.4-0.3 0.1-0.1 0.3-0.3 0.1-0.2 0.1-0.4c0.3-2 1.4-3.8 2.9-5.1 1.6-1.2 3.5-1.9 5.5-1.8 2 0.2 3.9 1 5.3 2.4 1.4 1.5 2.2 3.4 2.3 5.4q0 0.3 0.2 0.6 0.2 0.3 0.5 0.5 0.3 0.1 0.6 0.1 0.4 0 0.6-0.2c1.8-1 3.9-1.1 5.7-0.3 1.9 0.7 3.3 2.3 3.8 4.3 0.5 2 0.1 4.1-1.1 5.7-1.2 1.6-3.1 2.5-5.1 2.5h-5.8c-0.4 0-0.7 0.2-1 0.4-0.2 0.3-0.3 0.6-0.3 0.9 0 0.4 0.1 0.7 0.3 1 0.3 0.2 0.6 0.4 1 0.4h5.8c2.4 0 4.7-1 6.4-2.7 1.6-1.7 2.6-4.1 2.6-6.5 0-2.4-1-4.8-2.6-6.5-1.7-1.7-4-2.7-6.4-2.7z" />
                                            <path id="Layer" fill="#fff" d="m23 28.4l-1.7 1.5v-9.6c0-0.4-0.1-0.7-0.4-1-0.2-0.2-0.6-0.3-0.9-0.3-0.3 0-0.7 0.1-0.9 0.3-0.3 0.3-0.4 0.6-0.4 1v9.6l-1.7-1.5c-0.3-0.2-0.6-0.3-1-0.2-0.3 0-0.6 0.2-0.8 0.4-0.2 0.3-0.3 0.6-0.3 0.9 0 0.4 0.2 0.7 0.4 0.9l3.9 3.3 0.1 0.1 0.1 0.1h0.1 0.2 0.1q0 0.1 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1-0.1h0.1 0.2 0.1l0.1-0.1 0.1-0.1 3.9-3.3c0.3-0.2 0.5-0.5 0.5-0.9 0.1-0.3 0-0.7-0.3-1-0.2-0.3-0.5-0.4-0.9-0.4-0.3-0.1-0.7 0.1-1 0.3z" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="box settings-tab" data-tab="password-security">
                <h2>Password & Security</h2>
                <form action="">
                    <div class="form-group" data-input="currentPassword">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" name="currentPassword" placeholder="Enter your current passowrd" class="form-control" required="">
                    </div>
                    <div class="form-group">
                        <label for="newPassword">New Password</label>
                        <input type="password" id="newPassword" name="newPassword" placeholder="Enter a new password" class="form-control" required="">
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Enter the new password again" class="form-control">
                    </div>
                    <button type="submit" class="btn" disabled>Change Password</button>
                    <div class="form-error"></div>
                </form>
            </div>
        </div>
    </div>
</main>
<script type="module" src="../js/settings.js"></script>
<?php include('../components/footer.php'); ?>