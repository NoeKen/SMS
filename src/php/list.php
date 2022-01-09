<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $teacher = [];
    $sql = "SELECT + FROM ";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $teacher[$cr]['id'] = $row['id'];
            $teacher[$cr]['name'] = $row['name'];
            $teacher[$cr]['subname'] = $row['subname'];
            $teacher[$cr]['age'] = $row['age'];
            $cr++;
            # code...
        } 
        
        print_r($teacher);
       // echo json_encode($teacher);
        # code...
    }
    else {
        http_response_code(404);
    }

?>