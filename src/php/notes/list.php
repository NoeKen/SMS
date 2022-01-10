<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $teacher = [];
    $sql = "SELECT + FROM enseignant";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $teacher[$cr]['id_matiere'] = $row['id_matiere'];
            $teacher[$cr]['nom'] = $row['nom'];
            $teacher[$cr]['tel'] = $row['tel'];
           // $teacher[$cr]['age'] = $row['age'];
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