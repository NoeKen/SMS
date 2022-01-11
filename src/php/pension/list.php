<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $pension = [];
    $sql = "SELECT + FROM pension";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $pension[$cr]['id_pension'] = $row['id_pension'];
            $pension[$cr]['Inscription'] = $row['Inscription'];
            $pension[$cr]['scolarite'] = $row['scolarite'];
           // $pension[$cr]['age'] = $row['age'];
            $cr++;
            # code...
        } 
        
       // print_r($pension);
        echo json_encode($pension);
        # code...
    }
    else {
        http_response_code(404);
    }

?>