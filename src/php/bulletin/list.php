<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $bulletin = [];
    $sql = "SELECT + FROM bulletin";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $bulletin[$cr]['id_bulletin'] = $row['id_bulletin'];
           // $bulletin[$cr]['nom'] = $row['nom'];
           // $bulletin[$cr]['tel'] = $row['tel'];
           // $bulletin[$cr]['age'] = $row['age'];
            $cr++;
            # code...
        } 
        
       // print_r($bulletin);
        echo json_encode($bulletin);
        # code...
    }
    else {
        http_response_code(404);
    }

?>