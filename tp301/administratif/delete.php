<?php

    require 'connect.php';
    $nom = $_GET['nom'];

    echo $sql = "DELETE FROM `administratif` WHERE `nom` = '{$nom}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
        # code...
    }
    else {
        return http_response_code(422);
    }

?>