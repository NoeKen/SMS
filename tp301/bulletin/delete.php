<?php

    require 'connect.php';
    $id = $_GET['id_bulletin'];

    echo $sql = "DELETE FROM `bulletin` WHERE `id_bulletin` = '{$id_bulletin}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
        # code...
    }
    else {
        return http_response_code(422);
    }

?>