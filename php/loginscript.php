<?php

session_Start();


include'dbconn.php';


if (isset($_POST['submit'])) {

    $query = "select * from users where username='" . $_POST['username'] . "' and binary password='" . $_POST['password'] . "'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    if ($row) {

        $user = $_POST['username'];
        $_SESSION['username'] = $user;
        header('Location: ../index.php');
    } else {

        header('Location: ../index.php');
    }
}