<?php
header("Access-Control-Allow-Origin: *");
<<<<<<< HEAD
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'ict301');

function connect(){
    $connect = mysqli_connect(DB_HOST, DB_USER , DB_PASS, DB_NAME );

    if(mysqli_connect_errno($connect)){
        die("Failed to connect:" . mysqli_connect_error());
    }
    mysqli_set_charset($connect, "utf8");
    
    return $connect;
}

$con = connect();
?>
=======
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
    //db credentials

    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASS', '');
    define('DB_NAME', 'ict301');

    //Connect with the database.

    function connect()
    {
        $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if (mysqli_connect_errno($connect)){
            die("Failed to connect:". mysqli_connect_error());
        }

        mysqli_set_charset($connect, "utf8");

        return $connect;
    }

    $con = connect();
?>
>>>>>>> 11f00fb5eadb578db6279c4bd9e99235d0914fd1
