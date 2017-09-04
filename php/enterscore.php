<?php

session_Start();

include 'dbconn.php';

$query = "select * from users where username='" . $_SESSION['username'] . "'";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);


if (isset($_POST['submitscore'])) {
    $query1 = "insert into score (user, score) values ('" . $row['userid'] . "', " . $_POST['hiddenindex'] . ")";
    $result1 = mysqli_query($conn, $query1);
    if ($result1) {

        header('Location:../index.php');
    }
}

