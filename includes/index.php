<?php
    // hi pan. Feel free to change this however you like
    // this is just a placeholder file

    if (isset($POST['firstname'])) {
        echo json_encode(["message" => "this is a test message"]);
    } else {
        echo json_encode(["message" => "form submission failed"]);
    }
    