<?php

    require 'connect.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);

        $tel = mysqli_real_escape_string($con, trim($request->tel));
        $nom = mysqli_real_escape_string($con, trim($request->nom));
        $id_matiere = mysqli_real_escape_string($con, trim($request->id_matiere));


        $sql = "INSER INTO `enseignant`(
            `tel`,
            `nom`,
            `id_matiere`
        ) VALUES(
            '{$tel}',
            '{$nom}',
            '{$id_matiere}',
        )";

        if (mysqli_query($con, $sql)) {
            http_response_code(201);
        }
        else {
            http_response_code(422);
        }
    }

?>