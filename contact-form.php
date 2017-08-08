<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['fullName']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['company']) && isset($_POST['phone'])) {

    //check if any of the inputs are empty
    if (empty($_POST['fullName']) || empty($_POST['company']) || empty($_POST['phone']) || empty($_POST['email']) || empty($_POST['message'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['fullName'];
    $mail->AddAddress('youremal@gmail.com'); //recipient 
    $mail->Subject = $_POST['fullName'];
    $mail->Body = "Name: " . $_POST['fullName'] .  "\r\n\r\nCompany:" .$_POST['company'] .  "\r\n\r\nPhone:" .$_POST['phone']  ."\r\n\r\nMessage: " . stripslashes($_POST['message']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}