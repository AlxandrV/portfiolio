<?php
$from = $_POST['mail'];

$to      = 'test-dfq34jbmc@srv1.mail-tester.com';
$subject = $_POST['object'];
$message = '
    <html>
        <head>
            <title>Message de votre portfolio</title>
        </head>
        <body>
            <p> From: <' . $from . '></p>
            <p>' . $_POST['message'] . '
        </body>
    </html>
    ';

// Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';

// En-têtes additionnels
$headers[] = 'From: ' . $to;
var_dump($headers);

mail($to, $subject, $message, implode("\r\n", $headers));

echo json_encode(true);