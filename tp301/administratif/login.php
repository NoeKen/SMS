<?php
require 'connect.php';
error_reporting(E_ERROR);

$postdata = file_get_contents('php://input');

// if (isset($postdata) && !empty($postdata)) {
//     $tel = mysqli_real_escape_string($con, trim($request->tel));
//     $email = mysqli_real_escape_string($con, trim($request->email));

$admin = [];
$sql = 'SELECT * FROM adminstratif ';

if ($result = mysqli_query($con, $sql)) {
    $inc = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $admin[$inc][Id] = $row['id_admin'];
        $admin[$inc][tel] = $row['tel'];
        $admin[$inc][name] = $row['name'];
        $admin[$inc][password] = $row['password'];
        $admin[$inc][email] = $row['email'];
        $admin[$inc][token] = $row['token'];
        $inc++;
    }
    // print_r($admin);
    echo json_encode($admin);
} else {
    http_response_code(404);
}
// }
?>
