<?php
$from = $_POST['mail'];

$to      = 'a.vigneaud@gmail.com';
$subject = $_POST['object'];
$message = $_POST['message'];
$headers = 'From: ' . $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

echo json_encode(true);