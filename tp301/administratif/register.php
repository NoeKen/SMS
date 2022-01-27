<?php

include_once 'connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    //Sanitize

    // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
    $tel = mysqli_real_escape_string($con , trim ($request->tel));
    $name = mysqli_real_escape_string($con , trim ($request->name));
    $password = mysqli_real_escape_string($con , trim ($request->password));    
    $email = mysqli_real_escape_string($con , trim ($request->email));    

    //Store.
    $sql ="INSERT INTO `adminstratif` (
        -- `id_admin`,
        `tel`,
        `name`,
        `password`,
        `email`
        )VALUES(
            '{$tel}',
            '{$name}',
            '{$password}',
            '{$email}'
            )";
    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }else{
        http_response_code(422);
    }
}

