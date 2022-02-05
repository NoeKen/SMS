<?php

    require "C:\\wamp64\www\\tp301\\connect\\connect.php";

    $postdata = file_get_contents("php://input");

    print_r('Postdata : ',$postdata);
    echo json_encode($postdata);
    // $sql = "UPDATE `classe` SET `nom`=\'4e esp 2\',`niveau`= \'Premier cycle\',`id_pension`=33,`examen`=0 WHERE `class_id` = 17";
    $sql = "SELECT * FROM `classe";
    exec($sql);
    echo json_encode($sql);



    if (isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);

        //Sanitize

        // $id_admin = mysqli_real_escape_string($con , trim ($request->id_admin))
        $class_id = mysqli_real_escape_string($con , trim ($request->class_id));
        $nom = mysqli_real_escape_string($con , trim ($request->nom));
        $niveau = mysqli_real_escape_string($con , trim ($request->niveau));
        $examen = mysqli_real_escape_string($con , trim ($request->examen));    
        $id_pension = mysqli_real_escape_string($con , trim ($request->id_pension));    

        //update a pension

            $sqlClass ="UPDATE `classe` 
            SET `nom`='$nom',
            `niveau`='$niveau' ,
            `examen`='$examen',
            `id_pension`='$id_pension'
             where `class_id`='$class_id'";
            if (mysqli_query($con, $sqlClass)){
                http_response_code(201);
            }else{
                http_response_code(422);
                echo "ERROR: Could not able to execute $sqlClass. " . mysqli_error($con);

            }
        /* }else{
            http_response_code(422);
            echo "ERROR: Could not able to execute $sqlClass. " . mysqli_error($con);
        } */
    }


    
    // if (isset($postdata) && !empty($postdata))
    // {
    //     //Extract the data
    //     $request = json_decode($postdata);

    //     //Sanitize

    //     $class_id = mysqli_real_escape_string($con , (int)$_GET['class_id']);
    //     // $id_etablissement = mysqli_real_escape_string($con , trim ($request->id_etablissement));
    //     $nom = mysqli_real_escape_string($con , trim ($request->nom));
    //     $niveau = mysqli_real_escape_string($con , trim ($request->niveau));
    //     $examen = mysqli_real_escape_string($con , trim ($request->examen));    
    //     $id_pension = mysqli_real_escape_string($con , trim ($request->id_pension));    

    //     //Create a pension
    //     // $sqlPen = " INSERT INTO `pension` (`Inscription`, `scolarite`) VALUES (0,0) ";

    //     // echo json_encode($sqlPen);


    //     // if(mysqli_query($con,$sqlPen))
    //     // {
    //     //     http_response_code(201);

    //     //     $lastPenId = mysqli_insert_id($con);
    //     //     echo "Records inserted successfully. Last inserted ID is: " .$lastPenId;
    //         $sql = "UPDATE `classe` SET `nom`='4e esp 2',`niveau`= 'Second cycle',`id_pension`=33,`examen`=0 WHERE `class_id` = 17";

    //         // $sql = "UPDATE `classe` SET  `nom` = '$nom' ,`niveau` = '$niveau' ,`examen` = '$examen', `id_pension` = '$id_pension' WHERE `class_id` = 15 LIMIT 1";

    //         if (mysqli_query($con, $sql)){
    //             http_response_code(201);
    //         }else{
    //             http_response_code(422);
    //         }
    //     }else{
    //         http_response_code(422);
    //         echo "ERROR: Could not able to execute $sql".mysqli_error($con);
    //     }
    // }
