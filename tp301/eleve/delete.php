<?php

    require "C:\\wamp64\www\\tp301\\connect\\connect.php";
    $matricule = $_GET['nom'];

    echo $sql = "DELETE FROM `eleve` WHERE `nom` = '{$matricule}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
        # code...
    }
    else {
        return http_response_code(422);
    }

?>