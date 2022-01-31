<?php
    require 'connect.php';

    $class_id = ($_GET['class_id'] !== null && (int)$_GET['class_id'] > 0 )? mysqli_real_escape_string($con, (int)$_GET['class_id']) : false ;

    // $id=$_GET['class_id'];
    
    if(!$class_id)
    {
      return http_response_code(400);
    }

    // Delete.
    echo json_encode($class_id);

    $sql = "DELETE FROM `classe` WHERE `class_id` = '{$class_id}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        // echo "deleted";
      http_response_code(204);
    }
    else
    {
        // echo "undeleted";
      return http_response_code(422);
    }

    // echo $sql = "DELETE FROM `classe` WHERE `class_id` = '{$class_id}' LIMIT 1";

    // if (mysqli_query($con, $sql)) {
    //     http_response_code(204);
    //     # code...
    // }
    // else {
    //     return http_response_code(422);
    // }
