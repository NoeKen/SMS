<?php
    
    require 'connect.php';
    error_reporting(E_ERROR);
    $notes = [];
    $sql = "SELECT + FROM notes";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $notes[$cr]['id_note'] = $row['id_note'];
            $notes[$cr]['id_matiere'] = $row['id_matiere'];
            $notes[$cr]['value'] = $row['value'];
           // $notes[$cr]['age'] = $row['age'];
            $cr++;
            # code...
        } 
        
       // print_r($notes);
        echo json_encode($notes);
        # code...
    }
    else {
        http_response_code(404);
    }

?>