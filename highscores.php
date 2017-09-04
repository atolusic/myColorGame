<?php session_Start(); ?>

<!DOCTYPE html>
<html>
    <head>
        <?php include 'head.php'; ?>
    </head>
    <body>
        <?php
        if (isset($_SESSION['username'])) {

            include 'loginbanner.php';
            include 'logo.php';
            include 'highscorescontent.php';
        } else {

            include 'login.php';
        }
        ?>
    </body>
</html>