<?php
    
    include_once("connect.php");
    error_reporting(E_ERROR);
    $admin = [];
    $sql = "SELECT * FROM adminstratif";

    if ($result = mysqli_query($con, $sql)) {
        $cr = 0;
        while ($row = mysqli_fetch_assoc($result)) {
           // $admin[$cr]['id_matiere'] = $row['id_matiere'];
            $admin[$cr]['name'] = $row['name'];
            $admin[$cr]['tel'] = $row['tel'];
            $admin[$cr]['password'] = $row['password'];
            $admin[$cr]['image']= $row['image'];
            $cr++;
            # code...
        } 
        
        //print_r($admin);
        echo json_encode($admin);
        # code...
    }
    else {
        http_response_code(404);
    }
    
    echo "tokoss";

?>
