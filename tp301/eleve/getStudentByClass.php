<?php
    
    require "C:\\wamp64\www\\tp301\\connect\\connect.php";
    error_reporting(E_ERROR);
    $Matricule = $_GET['Matricule'];
    $class = $_GET['class_id'];
    $eleve = [];
    $sql = "SELECT * FROM eleve where  `Matricule` = '{$Matricule}' AND `class_id` = '{$class}' LIMIT 1 ";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $eleve[$cr]['Nom'] = $row['Nom'];
            $eleve[$cr]['Matricule'] = $row['Matricule'];
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