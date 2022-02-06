<?php

require "C:\\wamp64\www\\tp301\\connect\\connect.php";

$postdata = file_get_contents('php://input');

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    // echo json_encode($token);
    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $tel = mysqli_real_escape_string($con, trim($request->tel));
    $nom = mysqli_real_escape_string($con, trim($request->nom));
    // $id_matiere = mysqli_real_escape_string($con, trim($request->password));
    // $email = mysqli_real_escape_string($con, trim($request->email));

    //Store.
    $sql = "INSERT INTO `enseignant` (
        -- `id_admin`,
        `tel`,
        `nom`,
        -- `password`,
        -- `email`,
        -- `token`
        )VALUES(
            '{$tel}',
            '{$nom}',
            -- '{$password}',
            -- '{$email}',
            -- '{$token}'
            )";
    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
