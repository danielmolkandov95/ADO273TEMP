<?
$GLOBALS["BASE_BACKEND_URL"] = 'https://quantix-bff-ts-pgt5wl73aa-lm.a.run.app/';
$GLOBALS["TOKEN"];

function getCall($endpoint)
{
    $curl = curl_init($GLOBALS["BASE_BACKEND_URL"] . $endpoint);
    $headers = array(
        'Authorization: ' . $GLOBALS["TOKEN"],
        'Content-Type: application/json',
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response =  curl_exec($curl);
    curl_close($curl);
    return $response;
}

function postCall($endpoint, $data)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $GLOBALS["BASE_BACKEND_URL"] . $endpoint);
    curl_setopt($curl, CURLOPT_POST, true);
    // $data = array('name' => 'John', 'email' => 'john@example.com');
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    $headers = array(
        'Authorization: ' . $GLOBALS["TOKEN"],
        'Content-Type: application/json',
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}

function putCall($endpoint, $data)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $GLOBALS["BASE_BACKEND_URL"] . $endpoint);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
    // $data = array('name' => 'John', 'email' => 'john@example.com');
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $headers = array(
        'Authorization: ' . $GLOBALS["TOKEN"],
        'Content-Type: application/json',
    );
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}
