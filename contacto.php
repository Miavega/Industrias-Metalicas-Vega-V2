<?php
$nombre = $_POST['fullname'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$respuesta = "Este mensaje fue enviado por " . $nombre . "\r\n";
$respuesta .= "Su e-mail es: " . $email . " \r\n";
$respuesta .= "Mensaje: " . $_POST['message'] . " \r\n";
$respuesta .= "Enviado el " . date('d/m/Y', time());

$para = 'miguel_9504@hotmail.com';
$asunto = 'Mensaje de mi sitio web';

mail($para, $asunto, utf8_decode($respuesta), $header);

header("Location:index.html");
?>