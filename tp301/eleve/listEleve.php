<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $eleve = [];
    $sql = "SELECT * FROM eleve";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $eleve[$cr]['nom'] = $row['Nom'];
            $eleve[$cr]['matricule'] = $row['Matricule'];
            $eleve[$cr]['id_pension'] = $row['id_pension'];
            $eleve[$cr]['class_id'] = $row['class_id'];
            $cr++;
            # code...
        } 
        
       // print_r($eleve);
        echo json_encode($eleve);
        # code...
    }
    else {
        http_response_code(404);
    }

?>