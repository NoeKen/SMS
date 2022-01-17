<?php

    require 'connect.php';
    $id = $_GET['id'];

    echo $sql = "DELETE FROM `pension` WHERE `id` = '{$id}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
        # code...
    }
    else {
        return http_response_code(422);
    }

?>