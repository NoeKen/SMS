<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $intitule = mysqli_real_escape_string($con, trim($request->intitule));
        $class_id = mysqli_real_escape_string($con, trim($request->class_id));
        $id_bulletin = mysqli_real_escape_string($con, trim($request->id_bulletin));
        $coef = mysqli_real_escape_string($con, trim($request->coef));


        $sql = "INSER INTO `matiere`(
            `intitule`,
            `class_id`,
            `id_bulletin`,
            `coef`
        ) VALUES(
            '{$intitule}',
            '{$class_id}',
            '{$id_bulletin}',
            '{$coef}',
        )";

        if (mysqli_query($con, $sql)) {
            http_response_code(201);
        }
        else {
            http_response_code(422);
        }
    }

?>