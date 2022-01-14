<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $name = mysqli_real_escape_string($con, trim($request->name));
        $subname = mysqli_real_escape_string($con, trim($request->name));
        $email = mysqli_real_escape_string($con, trim($request->name));


        $sql = "UPDATE `` SET
            `` =  '{$name}',
            `` =  '{$name}',
            `` =  '{$name}',
         WHERE
            `id` = '{$id}'
        LIMIT 1
        ";

        if (mysqli_query($con, $sql)) {
            http_response_code(201);
        }
        else {
            http_response_code(422);
        }
    }

?>