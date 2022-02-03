<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $class_id = ($_GET['class_id'] !== null && (int)$_GET['class_id'] > 0 )? mysqli_real_escape_string($con, (int)$_GET['class_id']) : false ;

    $classe = [];
    $sql = "SELECT * FROM classe where `class_id`='$class_id'";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $classe[$cr]['class_id'] = $row['class_id'];
            $classe[$cr]['nom'] = $row['nom'];
            $classe[$cr]['niveau'] = $row['niveau'];
            $classe[$cr]['examen'] = $row['examen'];
            $classe[$cr]['id_pension'] = $row['id_pension'];
            $classe[$cr]['id_etablissement'] = $row['id_etablissement'];
            $cr++;
            # code...
        } 
        
       // print_r($classe);
        echo json_encode($classe);
        # code...
    }
    else {
        http_response_code(404);
    }

?>

