<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $name = mysqli_real_escape_string($con, trim($request->name));
        $matricule = mysqli_real_escape_string($con, trim($request->matricule));
        $class_id = mysqli_real_escape_string($con, trim($request->class_id));
        $id_pension = mysqli_real_escape_string($con, trim($request->id_pension));

        $sql = "INSER INTO `eleve`(
            `name`,
            `matricule`,
            `class_id`
        ) VALUES(
            '{$name}',
            '{$matricule}',
            '{$class_id}',
            '{$id_pension}'
        )";

        if (mysqli_query($con, $sql)) {
            http_response_code(201);
        }
        else {
            http_response_code(422);
        }
    }

?>