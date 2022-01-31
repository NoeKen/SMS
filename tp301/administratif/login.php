<?php
<<<<<<< HEAD
include_once("connect.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
	$password = mysqli_real_escape_string($mysqli, trim($request->password));
   $name = mysqli_real_escape_string($mysqli, trim($request->name));
	$sql = "SELECT * FROM adminstratif where name='$name' and password='$password'";
if($result = mysqli_query($con,$sql))
{
 $rows = array();
  while($row = mysqli_fetch_assoc($result))
  {
    $rows[] = $row;
  }
 
  echo json_encode($rows);
}
else
{
  http_response_code(404);
}
}
?>
=======

  include_once 'connect.php';
  $postdata = file_get_contents('php://input');
  $request = json_decode($postdata);

  if (isset($postdata) && !empty($postdata)) {
      $password = mysqli_real_escape_string($mysqli, trim($request->password));
      $tel = mysqli_real_escape_string($mysqli, trim($request->tel));
      
      $sql = "SELECT * FROM adminstratif where tel='$tel' and `password` ='$password'";
      
      if ($result = mysqli_query($con, $sql)) {
          $rows = [];
          while ($row = mysqli_fetch_assoc($result)) {
              $rows[] = $row;
          };
          echo json_encode($rows);
      } else {
          http_response_code(404);
      }
  }
?>
>>>>>>> 11f00fb5eadb578db6279c4bd9e99235d0914fd1
