<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $name = mysqli_real_escape_string($con, trim($request->name));
        $class_id = mysqli_real_escape_string($con, trim($request->class_id));
        $id_etablissement = mysqli_real_escape_string($con, trim($request->id_etablissement));
        $niveau = mysqli_real_escape_string($con, trim($request->niveau));
        $id_pension = mysqli_real_escape_string($con, trim($request->id_pension));
        $examen = mysqli_real_escape_string($con, trim($request->examen));


        $sql = "UPDATE `` SET
            `name` =  '{$name}',
            `class_id` =  '{$class_id}',
            `id_etablissement` =  '{$id_etablissement}',
            `niveau` =  '{$niveau}',
            `id_pension` =  '{$id_pension}',
            `examen` =  '{$examen}',
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