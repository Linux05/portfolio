<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Establece las variables para el correo electrónico
    $to = "proyectolinux3@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $subject = $_POST['subject'];
    $message = "Name: " . $_POST['name'] . "\r\n";
    $message .= "Telephone: " . $_POST['phone'] . "\r\n";
    $message .= "E-mail: " . $_POST['email'] . "\r\n";
    $message .= "Message: " . $_POST['message'];
    $headers = "From: " . $_POST['email'];
    
    // Envía el correo electrónico
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Error sending email";
    }
} else {
    // Si se intenta acceder al archivo directamente, muestra un mensaje de error
    echo "Acceso denegado";
}
?>
