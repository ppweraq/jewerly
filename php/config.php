<?php
    // require_once($_SERVER['DOCUMENT_ROOT'] . '/testdva/php/phpmailer/phpmailer.php');
	require_once(__DIR__ . '/phpmailer/phpmailer.php');


		// *** SMTP *** //

		 // require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 // const HOST = '';
		 // const LOGIN = '';
		 // const PASS = '';
		 // const PORT = '';

		// *** /SMTP *** //
   
    const SENDER = '1234@gmail.com';
    const CATCHER = '1234@gmail.com';
    const SUBJECT = 'Заявка с сайта jewerly';
    const CHARSET = 'UTF-8';
    