<?php
include_once 'connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize

    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $nom = mysqli_real_escape_string($con , trim ($request->Nom));
    $matricule = mysqli_real_escape_string($con , trim ($request->Matricule));
    $class_id = mysqli_real_escape_string($con , trim ($request->class_id));
    $id_pension = mysqli_real_escape_string($con , trim ($request->id_pension));

    $sql="INSERT INTO `pension` WHERE  `pension_id`='$id_pension' ";
    if(mysqli_query($con,$sql)){
        $sqleleve=
        "UPDATE `classe` 
        SET `Nom`='$nom',
        `id_pension`='$id_pension'
         where `Matricule`='$matricule'";
         if(mysqli_query($con,$sqleleve)){
            http_response_code(201);
        }
        else{
            http_response_code(422);
            echo "ERROR: Could not able to execute $sqleleve. " . mysqli_error($con);
        }
    }
    else{
        http_response_code(422);
        echo "pension doesn't exist"
            echo "ERROR: Could not able to execute $sql. " . mysqli_error($con);
    }
 
}

        
        
       /*  $num_rows = mysqli_num_rows($result);
        $num_rows1 = mysqli_num_rows($res);

    if($num_rows > 0 && $num_rows1 > 0){
        http_response_code(201);
        
        if(mysqli_query($con,$sql)){
            http_response_code(201);
        }
        else{
            http_response_code(422);
        }
    }else{
        http_response_code(422);
         echo "Eleve ou Pension ID invalid!!!";
    } */
    ?>