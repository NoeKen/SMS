<?php

define('DB_PASS', '');

function conn(){
    $conn = mysqli_connect('localhost', 'root', DB_PASS, 'myschool' );

    if(mysqli_connect_errno($conn)){
        die("Failed to connect:" . mysqli_connect_error());
    }
    mysqli_set_charset($conn, "utf8");
    
    return $conn;
}

$con = conn();

?>