<?php

    // include_once("connect.php");
     require 'connect.php';

    $postdata = file_get_contents("php://input");
   

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        if(trim($request->data->name) === '' || (int)$request->data->tel < 1 || trim($request->data->password ||trim($request->data->image)) )
        {
          return http_response_code(400);
        }

        $name = mysqli_real_escape_string($con, trim($request->name));
        $tel = mysqli_real_escape_string($con, trim($request->tel));
        $password = mysqli_real_escape_string($con, trim($request->password));
       $image = mysqli_real_escape_string($con, trim($request->image));

        $sql = "INSERT INTO `adminstratif`(`id_admin`,`name`,`tel`,`password`,`image`) VALUES(null,'{$name}',  '{$tel}'  '{$password}','{$image}' )";

        if (mysqli_query($con, $sql)) {
            http_response_code(201);
            $authdata = [
                     'name' => $name,
                	  'password' => $password,
                	  'tel' => $tel,
                      'image'=> $image,
                      'Id'    => mysqli_insert_id($con)
                    ];
                    echo json_encode($authdata);
        }
        else{
            http_response_code(422);
        }

// if ($mysqli->query($sql) === TRUE) {
 
 
//     $authdata = [
//       'name' => $name,
// 	  'password' => $password,
// 	  'tel' => $tel,

//       'Id'    => mysqli_insert_id($mysqli)
//     ];
//     echo json_encode($authdata);
 
// }
    }

?>