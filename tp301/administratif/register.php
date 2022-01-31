<?php

include_once 'connect.php';

$postdata = file_get_contents('php://input');

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    //Sanitize

    //generate random string
    $rand_token = openssl_random_pseudo_bytes(16);
    //change binary to hexadecimal
    $token = bin2hex($rand_token);
    //token generated
    echo json_encode ($token);
    echo $token;

    // echo json_encode($token);
    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $tel = mysqli_real_escape_string($con, trim($request->tel));
    $name = mysqli_real_escape_string($con, trim($request->name));
    $password = mysqli_real_escape_string($con, trim($request->password));
    $email = mysqli_real_escape_string($con, trim($request->email));

    //Store.
    $sql = "INSERT INTO `adminstratif` (
        -- `id_admin`,
        `tel`,
        `name`,
        `password`,
        `email`,
        `token`
        )VALUES(
            '{$tel}',
            '{$name}',
            '{$password}',
            '{$email}',
            '{$token}'
            )";
    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
