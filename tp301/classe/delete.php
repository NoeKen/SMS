<?php

    require 'connect.php';
    $class_id = $_GET['class_id'];

    echo $sql = "DELETE FROM `classe` WHERE `class_id` = '{$class_id}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
        # code...
    }
    else {
        return http_response_code(422);
    }

?>