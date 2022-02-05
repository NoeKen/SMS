<?php

require "C:\\wamp64\www\\tp301\\connect\\connect.php";

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize

    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $nom = mysqli_real_escape_string($con , trim ($request->Nom));
    $matricule = mysqli_real_escape_string($con , trim ($request->Matricule));
    $class_id = mysqli_real_escape_string($con , trim ($request->class_id));
    // $id_pension = mysqli_real_escape_string($con , trim ($request->id_pension));


        // $qry="SELECT * FROM classe WHERE class_id='$class_id'";
        // $qry1="SELECT * FROM pension WHERE id_pension='$id_pension'";


    $sqlPen = " INSERT INTO `pension` (`Inscription`, `scolarite`) VALUES (0,0) ";

    echo json_encode($sqlPen);

    echo $sqlPen;

    if(mysqli_query($con,$sqlPen))
    {
        http_response_code(201);

        $lastPenId = mysqli_insert_id($con);
        echo "Records inserted successfully. Last inserted ID is: " .$lastPenId;

        $sql="INSERT INTO eleve(
            `Nom`, 
            `Matricule`, 
            `class_id`, 
            `id_pension`)
        VALUES(
            '$nom',
            '$matricule',
            '$class_id',
            '$lastPenId')";

        if(mysqli_query($con,$sql)){
            http_response_code(201);
            echo "Eleve valid!!!";

        }
        else{
            http_response_code(422);
            echo "Eleve ou STUDENT invalid!!!";

        }
    }else{
        http_response_code(422);
        echo json_encode("ERROR: Could not able to execute $sqlPen. " . mysqli_error($con));
    }



    // if (mysqli_query($con,$qry) && mysqli_query($con,$qry1)){

    //     http_response_code(201);
    //     $sql="INSERT INTO eleve(Nom, Matricule, class_id, id_pension)
    //     VALUES
    //     ('$nom',
    //      '$matricule',
    //      '$class_id',
    //      '$id_pension')";
    //      if(mysqli_query($con,$sql)){
    //         http_response_code(201);
    //         echo "Eleve valid!!!";

    //     }
    //     else{
    //         http_response_code(422);
    //         echo "Eleve ou STUDENT invalid!!!";

    //     }
    // }else{
    //     http_response_code(422);
    //     echo "Eleve ou Pension invalid!!!";

    // }
      /*   $result = mysqli_query($qry);
        $res= mysqli_query($qry1);
        $num_rows = mysqli_num_rows($result);
        $num_rows1 = mysqli_num_rows($res);

    if($num_rows > 0 && $num_rows1 > 0){
        http_response_code(201);
        $sql="INSERT INTO eleve(nom, Matricule, class_id, id_pension)
        VALUES
        ('$nom',
         '$matricule',
        '$class_id',
         '$pension_id')";
        if(mysqli_query($con,$sql)){
            http_response_code(201);
        }
        else{
            http_response_code(422);
        }
    }else{
        http_response_code(422);
        echo "Eleve ou Pension invalid!!!";

    } */
}
?>