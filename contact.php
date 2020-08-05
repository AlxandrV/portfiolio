<?php    	   	
// Ma clé privée
$secret = "";
// Paramètre renvoyé par le recaptcha
$response = $_POST['g-recaptcha-response'];
// On récupère l'IP de l'utilisateur
$remoteip = $_SERVER['REMOTE_ADDR'];

$api_url = "https://www.google.com/recaptcha/api/siteverify?secret=" 
    . $secret
    . "&response=" . $response
    . "&remoteip=" . $remoteip ;

$decode = json_decode(file_get_contents($api_url), true);

if ($decode['success'] == true) {
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
}

else {
    // C'est un robot ou le code de vérification est incorrecte
}    