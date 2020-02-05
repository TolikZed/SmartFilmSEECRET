<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$note = $_POST['user_note'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.seecret.ch';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sale@seecret.ch'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'roman.seecret'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sale@seecret.ch'); // от кого будет уходить письмо?
$mail->addAddress('seecretwindow@yahoo.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Application from the website Seecret.ch';
$mail->Body    = '' .$name . ' left a request<br> Telephone ' .$phone. '<br>Email: ' .$email. '<br> Note: ' .$note;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo "<script type='text/javascript'>alert('Merci pour votre Demande/Thank you for your Request'); document.location.replace('https://www.seecret.ch');
    </script>";
}
?>