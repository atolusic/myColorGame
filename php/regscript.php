<?php

session_Start();

include'dbconn.php';

if (isset($_POST['submitreg']) && !empty($_POST['username']) && !empty($_POST['password'])) {

    $query = "insert into users (username, password) values ('" . $_POST['username'] . "', '" . $_POST['password'] . "')";
    $result = mysqli_query($conn, $query);
    if ($result) {

        header('Location: ../index.php');
    } //end if result
    else {

        header('Location: ../regindex.php');
    }
} //end if isset
?>
