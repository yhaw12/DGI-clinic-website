<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Do something with the data, such as sending an email
  $dbhost = '10.123.0.222';
  $dbuser = 'clinicwebsite';
  $dbpass = 'Success@2022';
  $dbname = 'divineg_';
  $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
  if (!$conn) {
    die('Could not connect: ' . mysqli_error());
  }
  $sql = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";
  if (mysqli_query($conn, $sql)) {
    echo 'Thank you for your message!';
  } else {
    echo 'Oops! There was a problem.';
  }
  mysqli_close($conn);
}
?>
