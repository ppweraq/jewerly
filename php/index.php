<? 
// mb_internal_encoding("UTF-8");
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
use PHPMailer\PHPMailer\PHPMailer;
require_once('./config.php');


$name = $_POST['user_name'];
$phone = $_POST['user_number'];
$email = $_POST['user_mail'];


if ($_SERVER["REQUEST_METHOD"] == "POST") {

	
	}
	if(defined('HOST') && HOST != '') {
		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com';
		$mail->SMTPAuth = true;
		$mail->Username = '1234@gmail.com';
		$mail->Password = 'me qilw';
		$mail->SMTPSecure = 'ssl';
		$mail->Port = 465;
		$mail->AddReplyTo(SENDER);
	} else {
		$mail = new PHPMailer;
	}

		$mail->setFrom(SENDER);
    $mail->addAddress(CATCHER);
	
    $mail->CharSet = CHARSET;
    $mail->isHTML(true);
		$mail->Subject = SUBJECT; // Заголовок письма
		$mail->Body = "$name отправила заявку , номер- $number, почта - $mail";
		if(!$mail->send()) {
            echo 'attantion';
        } else {
            // echo '<p class="smartlid__respond-success">' . SUCCESSMSGS . '</p>';
            echo 'successmsgs';
        }


file_put_contents('log.txt', print_r($_POST, true), FILE_APPEND);}