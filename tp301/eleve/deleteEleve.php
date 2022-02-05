<?php

    require "C:\\wamp64\www\\tp301\\connect\\connect.php";
    // $matricule = $_GET['matricule'];

    // $sql = "DELETE FROM `eleve` WHERE `Matricule` = '{$matricule}' LIMIT 1";

    // if (mysqli_query($con, $sql)) {
    //     http_response_code(204);
    //     # code...
    // }
    // else {
    //     return http_response_code(422);
    // }

  // $matricule = ($_GET['matricule'] !== null && (int)$_GET['matricule'] > 0 )? mysqli_real_escape_string($con, (int)$_GET['matricule']) : false ;

    $matricule=$_GET['matricule'];
    
    if(!$matricule)
    {
      return http_response_code(400);
    }

    // Delete student
    echo json_encode($matricule);

    $sql = "DELETE FROM `eleve` WHERE `Matricule` = '{$matricule}' LIMIT 1";

    if(mysqli_query($con, $sql))
    {
        echo "deleted";
      http_response_code(204);
    }
    else
    {
        echo "undeleted";
      return http_response_code(422);
    }

?>