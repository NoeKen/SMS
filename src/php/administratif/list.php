<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $admin = [];
    $sql = "SELECT + FROM administratif";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
           // $admin[$cr]['id_matiere'] = $row['id_matiere'];
            $admin[$cr]['nom'] = $row['nom'];
            $admin[$cr]['tel'] = $row['tel'];
           // $admin[$cr]['age'] = $row['age'];
            $cr++;
            # code...
        } 
        
        print_r($admin);
       // echo json_encode($admin);
        # code...
    }
    else {
        http_response_code(404);
    }

?>