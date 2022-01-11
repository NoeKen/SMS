<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $etablissement = [];
    $sql = "SELECT + FROM etablissement";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $etablissement[$cr]['nom'] = $row['nom'];
            $etablissement[$cr]['numeroEts'] = $row['numeroEts'];
            $etablissement[$cr]['ville'] = $row['ville'];
            $etablissement[$cr]['admin_id'] = $row['admin_id'];
            $cr++;
            # code...
        } 
        
       // print_r($etablissement);
        echo json_encode($etablissement);
        # code...
    }
    else {
        http_response_code(404);
    }

?>