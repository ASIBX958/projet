<?php
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if(isset($_POST['mail']) && !empty($_POST['mail'])){
    $mailUser = $_POST['mail'];
    $nomUser  = $_POST['nom'];      // optionnel pour personnaliser le mail
    $prenomUser = $_POST['prenom']; // optionnel

    $mail = new PHPMailer(true);

    try {
        // Configuration serveur SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'sheickthetyga@gmail.com'; // ton email
        $mail->Password   = 'zzmkkjiyuzbbyvio';            // mot de passe d’application Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Destinataire
        $mail->setFrom('sheickthetyga@gmail.com', 'Votre Service Bancaire');
        $mail->addAddress($mailUser, "$nomUser $prenomUser");

        // Contenu du mail
        $mail->isHTML(true);
        $mail->Subject = 'Confirmation de virement';
        $mail->Body    = "Bonjour $nomUser $prenomUser,<br>Votre virement a bien été pris en compte.";
        $mail->AltBody = "Bonjour $nomUser $prenomUser, Votre virement a bien été pris en compte.";

        $mail->send();
        echo "Email envoyé avec succès à $mailUser !";
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi : {$mail->ErrorInfo}";
    }
} else {
    echo "Aucun email fourni.";
}
