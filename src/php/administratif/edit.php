<?php

    require 'connect.php';

    $id = $_GET('id');

    {
        return http_response_code(400);
    }

    $sql = "SELECT + FROM `` WHERE `id` = '{$id}' LIMIT 1";

    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);

    echo $tokoss =json_encode($row);
    echo json_encode(['data' =>$tokoss]);
?>