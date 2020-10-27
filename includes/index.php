<?php
    // hi pan. Feel free to change this however you like
    // this is just a placeholder file

    if(empty($_POST["email"])) {
        header('HTTP/1.1 500 Internal Server Booboo');
        //header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(["message" => "form submission failed"]));
        //throw new Exception("email was not set");
        
    } else {
        echo json_encode(["message" => "this is a test message. Your name is " . $_POST["firstname"] ." and your email is " . $_POST["email"]]);
    }
    