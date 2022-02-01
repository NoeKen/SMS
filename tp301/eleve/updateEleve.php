<?php
include_once 'connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize

    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $nom = mysqli_real_escape_string($con , trim ($request->nom));
    $matricule = mysqli_real_escape_string($con , trim ($request->matricule));
    $class_id = mysqli_real_escape_string($con , trim ($request->class_id));
    $pension_id = mysqli_real_escape_string($con , trim ($request->pension_id));


        $qry="SELECT * FROM classe WHERE class_id=$class_id";
        $qry1="SELECT * FROM pension WHERE pension_id=$pension_id";
        $result = mysqli_query($qry);
        $res= mysqli_query($qry1);
        $num_rows = mysqli_num_rows($result);
        $num_rows1 = mysqli_num_rows($res);

    if($num_rows > 0 && $num_rows1 > 0){
        http_response_code(201);
        $sql="UPDATE eleve 
        set nom='$nom',
        Matricule='$matricule',
        class_id='$class_id', 
        id_pension='$pension_id'
        where class_id='$class_id'
        ";
        if(mysqli_query($con,$sql)){
            http_response_code(201);
        }
        else{
            http_response_code(422);
        }
    }else{
        http_response_code(422);
         echo "Eleve ou Pension ID invalid!!!";
    }
}

?>