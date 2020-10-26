<?php
    // hi pan. Feel free to change this however you like
    // this is just a placeholder file

    if(isset($_POST["email"])) {
        echo json_encode(["message" => "this is a test message. Your name is " . $_POST["firstname"] ." and your email is " . $_POST["email"]]);
    } else {
        echo json_encode(["message" => "form submission failed"]);
    }
    