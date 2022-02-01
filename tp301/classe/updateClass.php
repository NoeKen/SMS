<?php

    

include_once 'connect.php';

$postdata = file_get_contents("php://input");

// echo "Bomjour";
// $sqlPen = " INSERT INTO `pension` (`Inscription`, `scolarite`) VALUES (,) ";

//     if(mysqli_query($con,$sqlPen)){
//         $lastPenId = mysqli_insert_id($con);
//         echo "Records inserted successfully. Last inserted ID is: " .$lastPenId;
//     }else{
//     echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
// }
//     // echo json_encode($sqlPen);

if (isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize

    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $nom = mysqli_real_escape_string($con , trim ($request->nom));
    $niveau = mysqli_real_escape_string($con , trim ($request->niveau));
    $examen = mysqli_real_escape_string($con , trim ($request->examen));    
    // $idPension = mysqli_real_escape_string($con , trim ($request->idPension));    

    //update a pension
    $sqlPen = " UPDATE `pension` SET id_pension='$idPension' where id_pension='$idPension' ";

    echo json_encode($sqlPen);

    echo $sqlPen;

    if(mysqli_query($con,$sqlPen))
    {
        http_response_code(201);

        $lastPenId = mysqli_insert_id($con);
        echo "Records inserted successfully. Last inserted ID is: " .$lastPenId;

        $sqlClass ="UPDATE `classe` 
        SET `nom`='$nom',
        `niveau`='$niveau' ,
        `examen`='$examen' 
        `id_pension`='$idPension'
         where `nom`='$nom'";
        if (mysqli_query($con, $sqlClass)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }
    }else{
        http_response_code(422);
        echo "ERROR: Could not able to execute $sqlClass. " . mysqli_error($con);
    }
}
?>