<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $id_bulletin = mysqli_real_escape_string($con, trim($request->id_bulletin));


        $sql = "INSER INTO `bulletin`(
            `id_bulletin`,
        ) VALUES(
            '{$id_bulletin}',
            
        )";

        if (mysqli_query($con, $sql)) {
            http_response_code(201);
        }
        else {
            http_response_code(422);
        }
    }

?>