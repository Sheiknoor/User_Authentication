<?php


use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

require 'config.php';



if ($_SERVER["REQUEST_METHOD"]=="POST"){
    $Name = $_POST["Name"];
    $Email = $_POST["Email"];
    $Password = $_POST["Password"];

    try{
        require_once"dbh.inc.php";
        $query = "INSERT INTO users (Name, Email, Password) VALUES 
        (?,?,?);";

        $stmt = $pdo->prepare($query);
        $stmt->execute([$Name,$Email,$Password]);
        $pdo = null;
        $stmt = null;

        $subject="Registration successfull";
        $message= "Dear $Name,<br><br> Thank you for Registering in our website.<br><br>Best regards,<br>Team Citizens";
        $mail_sent=sendMail($Email,$subject,$message);
        
        if ($mail_sent === true) {
            header("location:../Otp.html");
            exit();
        } else {
            die("Failed to send email: " . $mail_sent);
        }

    }catch(PDOException $e) {
        die("Query failed:".$e->getMessage());
    }


} else {
    header("location:../failed.html");
}

function sendMail($email, $subject, $message) {
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = MAILHOST;
        $mail->Username = USERNAME;
        $mail->Password = PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Sender and recipient
        $mail->setFrom(SEND_FROM, SEND_FROM_NAME);
        $mail->addAddress($email);
        $mail->addReplyTo(REPLY_TO, REPLY_TO_NAME);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Sending email
        if ($mail->send()) {
            return true;
        } else {
            return $mail->ErrorInfo; // Return error message
        }
    } catch (Exception $e) {
        return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
