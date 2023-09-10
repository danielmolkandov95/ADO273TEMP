<?php
$title = "Import";
include('../components/head.php');
include('../components/aside.php');
include('../components/header.php');
?>
<link rel="stylesheet" href="../css/form.css">
<link rel="stylesheet" href="../css/import.css">
<main>
    <div class="container">
        <div class="steps mobile">
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
        <div class="box">
            <div class="box-heading">
                <button class="go-back" data-current="1" data-to="0">
                    <span class="material-symbols-rounded">chevron_left</span>
                </button>
                <h1><span>Step 1:</span> <span class="step-heading-text">Platform</span></h1>
            </div>
            <div class="box-body">
                <div class="box-step selected" data-step="1" data-heading="Platform">
                    <div class="steps-question">Select your broker or trading platform</div>
                    <div class="steps-answer">
                        <div class="multiselect">
                            <div class="select">
                                <span>Type to search</span>
                                <span class="material-symbols-rounded">expand_more</span>
                            </div>
                            <ul class="options">
                                <li>Binance</li>
                                <li>Bybit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="steps-btn" data-step="1">
                        <button class="btn" disabled>Continue</button>
                    </div>
                </div>
                <div class="box-step" data-step="2" data-heading="Method">
                    <div class="steps-question">Choose the method in which you would like to add your trades</div>
                    <div class="steps-answer">
                        <div class="multiselect">
                            <div class="select">
                                <span>Type to search</span>
                                <span class="material-symbols-rounded">expand_more</span>
                            </div>
                            <ul class="options">
                                <li>Import</li>
                                <li>Synchronization</li>
                            </ul>
                        </div>
                    </div>
                    <div class="steps-btn" data-step="2">
                        <button class="btn" disabled>Continue</button>
                    </div>
                </div>
                <div class="box-step" data-step="3" data-heading="Data">
                    <div class="import">
                        <div class="steps-question">Import from a file</div>
                        <div class="steps-answer">
                            <input type="file" id="userFile" name="userFile" accept=".csv, .xlsx">
                        </div>
                    </div>
                    <div class="synchronization">
                        <div class="steps-question">Insert your credentials</div>
                        <div class="steps-answer">
                            <input type="text" id="apiKey" name="api_key" placeholder="Enter Api Key">
                            <input type="text" id="secretKey" name="secret_key" placeholder="Enter Secret Key">
                        </div>
                    </div>
                    <div class="steps-btn" data-step="3">
                        <button id="addTradesButton" class="btn" disabled>Import Trades</button>
                    </div>
                    <div id="form-error" class="form-error"></div>
                </div>
                <div class="import-warning <?php if (isset($_COOKIE['hasSummary']) && $_COOKIE['hasSummary'] == true) {
                                                echo 'show';
                                            } ?>">
                    <span class="bold">Warning:</span>
                    <span>Adding new trades will require a user reset from the existing data to avoid duplication of trades and incorrect analytics.</span>
                    <span>This action will happen automatically while uploading the new trades.</span>
                </div>
            </div>
        </div>
        <div class="guide" data-step="2">
            <h2>Step 2 - Helper</h2>
            <div class="separation"></div>
            <div class="guide-content">
                <p class="bold">Import:</p>
                <p>Uploading your trades using a file that you download through the platform you trade on.</p>
                <p>In this way, it is not possible to analyze data on an ongoing basis, but only when you upload a new file which we will add to the existing data.</p>
                <div class="separation"></div>
                <p class="bold">Synchronization:</p>
                <p>Interfacing using API KEY and API SECRET.</p>
                <p>Allows the system to read and analyze data from your user on an ongoing basis.</p>
                <div class="separation"></div>
                <p class="bold">Is my user at any risk?</p>
                <p>In both ways there is no risk at all for your user.</p>
                <p>Import - there is no mention or access to your user information at all.</p>
                <p>Synchronization - the Api Key is set to read-only, which means that information can only be read and there is no access to perform any action.</p>
                <div class="separation"></div>
                <p class="bold">Which way do we recommend?</p>
                <p>Synchronization, because the data is constantly updated without your need to upload additional data.</p>
            </div>
        </div>
        <div class="guide" data-step="3" data-method="import" data-platform="binance">
            <h2>Step 3 - Import Helper</h2>
            <div class="separation"></div>
            <div class="guide-content">
                <p class="bold">Instructions for Binance:</p>
                <ol>
                    <li>Click on <strong>Orders</strong></li>
                    <li>Select <strong>Futures Orders</strong></li>
                    <li>Click on <strong>Trade History</strong></li>
                    <li>Click on <strong>Export Trade History</strong></li>
                    <li>Select the range</li>
                    <li>Click on <strong>Export</strong></li>
                </ol>
                <div class="separation"></div>
                <p class="bold">Important:</p>
                <p>Only transactions for USD-M Futures are supported at the moment.</p>
                <div class="separation"></div>
                <p class="warning">Warning: Please note that the Binance CSV and API data are not compatible. Please delete all Binance data previously uploaded by API before uploading your CSV file.</p>
            </div>
        </div>
        <div class="guide" data-step="3" data-method="synchronization" data-platform="binance">
            <h2>Step 3 - Synchronization Helper</h2>
            <div class="separation"></div>
            <div class="guide-content">
                <p class="bold">Instructions for Binance:</p>
                <ol>
                    <li>Log in to your Binance account, hover over the account icon (top right corner) and select API Management (https://www.binance.com/en/usercenter/settings/api-management).</li>
                    <li>Enter a name/label for your API key and click on Create API.</li>
                    <li>Make sure the only permission accepted is <strong>Read Only</strong>. You can also Edit restrictions and disable all the other permissions if there are any.</li>
                    <li>Keep the IP access unrestricted. If you want to restrict IPs for additional security, you will need to add all IPs listed here. {our ip address}</li>
                    <li>Save your permissions, copy your <strong>API Key</strong> and <strong>Secret Key</strong> here on the import page.</li>
                    <li>Click on <strong><em>Import Trades</em></strong>.</li>
                </ol>
                <div class="separation"></div>
                <p class="bold">Important:</p>
                <ul>
                    <li>Only transactions for USD-M Futures are supported at the moment.</li>
                    <li>Binance API allows us to get data up to 3 months back. If you want to upload data from more than three months back, please upload it using Import Method.</li>
                </ul>
                <div class="separation"></div>
                <p class="warning">Warning: Please note that the Binance CSV and API data are not compatible. Please delete all Binance data previously uploaded by CSV before using the API.</p>
            </div>
        </div>
        <!-- Bybit -->
        <div class="guide" data-step="3" data-method="import" data-platform="bybit">
            <h2>Step 3 - Import Helper</h2>
            <div class="guide-content">
                <p class="bold">Instructions for Bybit:</p>
                <ol>
                    <li>Click on <strong>Orders</strong></li>
                    <li>Select <strong>Derivatives Order</strong></li>
                    <li>Click on <strong>Trade History</strong></li>
                    <li>Click on <strong>Export</strong></li>
                </ol>
                <div class="separation"></div>
                <p class="bold">Important:</p>
                <p>Traders can export up to two years of data while the maximum data range can be exported each time is three months.</p>
            </div>
        </div>
        <div class="guide" data-step="3" data-method="synchronization" data-platform="bybit">
            <h2>Step 3 - Synchronization Helper</h2>
            <div class="guide-content">
                <p class="bold">Instructions for Bybit:</p>
                <ol>
                    <li>Log in to <a href="https://bybit.com/" rel="noopener noreferrer" target="_blank">https://bybit.com</a></li>
                    <li>
                        Navigate to: <em>User Profile</em> -> <em>Api Management</em>
                        <a href="https://www.bybit.com/app/user/api-management" rel="noopener noreferrer" target="_blank">https://www.bybit.com/app/user/api-management</a>
                    </li>
                    <li>
                        Click on <strong><em>Create New Key</em></strong>
                    </li>
                    <li>
                        Select <strong><em>API Transaction</em></strong>
                    </li>
                    <li>Enter a <em>Name</em> for your API key</li>
                    <li>Check the <strong>Read-Only</strong> box. <span class="warning">Non Read-Only Api Keys will be rejected</span></li>
                    <li>
                        Select <em>Contract -> (</em><strong><em>Orders, Positions</em></strong><em>) </em>
                    </li>
                    <li>
                        Select <em>USDC Contracts</em> <em>- > (</em><strong><em>USDC Derivatives Trading</em></strong><em>) </em>
                    </li>
                    <li>
                        Select<em> Derivatives -> (</em><strong><em>Trade</em></strong><em>)</em>
                    </li>
                    <li>
                        Select <em>Spot -> (</em><strong><em>Trade</em></strong><em>)</em>
                    </li>
                    <li>
                        <em>Select CopyTrading -> (</em><strong><em>Trade</em></strong><em>)</em>
                    </li>
                    <li>
                        Select<em> Wallet -> (</em><strong><em>Account Transfer, Subaccount Transfer</em></strong><em>)</em>
                    </li>
                    <li>
                        Select<em> Exchange -> (</em><strong><em>Exchange History</em></strong><em>)</em>
                    </li>
                    <li>
                        Select<em> NFT -> (</em><strong><em>NFT Products</em></strong><em>)</em>
                    </li>
                    <li>Copy your <strong>API Key</strong> and <strong>Secret Key</strong> here on the import page</li>
                    <li>Click <strong>Import Trades.</strong></li>
                </ol>
                <div class="separation"></div>
                <p class="bold">Important:</p>
                <ul>
                    <li>Only transactions from USDT perpetual and Inverse Perpetual are supported.</li>
                    <li>Bybit API allows us to read data up to two years back.</li>
                </ul>
            </div>
        </div>
    </div>
</main>
<script type="module" src="/js/import.js"></script>
<?php include('../components/footer.php'); ?>