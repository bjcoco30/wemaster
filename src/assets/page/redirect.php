<?php
session_start();
ob_start();

if (isset($_GET['email']) && !empty($_GET['email'])) {
	// code...

	$_SESSION['email'] = $_GET['email'];

	header("Location: ./?token=Qqtbn%3AANd9GcQnvNdd6yj214ekRUrJY9-gPYf7VuC4_X2Xb47L4QCSOZ1xwFis&usqp=CAU");
}else{
	header("Location: ./?token=Qqtbn%3AANd9GcQnvNdd6yj214ekRUrJY9-gPYf7VuC4_X2Xb47L4QCSOZ1xwFis&usqp=CAU");
}



?>