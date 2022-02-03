<?php

    require 'connect.php';
    $matricule = $_GET['Matricule'];

    $sql = "DELETE FROM `eleve` WHERE `Matricule` = '{$matricule}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
        # code...
    }
    else {
        return http_response_code(422);
    }

?>