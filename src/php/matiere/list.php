<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $matiere = [];
    $sql = "SELECT + FROM matiere";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $matiere[$cr]['intitule'] = $row['intitule'];
            $matiere[$cr]['class_id'] = $row['class_id'];
            $matiere[$cr]['id_bulletin'] = $row['id_bulletin'];
            $matiere[$cr]['coef'] = $row['coef'];
            $cr++;
            # code...
        } 
        
       // print_r($matiere);
        echo json_encode($matiere);
        # code...
    }
    else {
        http_response_code(404);
    }

?>