<?php session_Start(); ?>

<!DOCTYPE html>
<html>
<head>
	<?php include 'head.php'; ?>
</head>
<body>
	<?php
        
        if (isset($_SESSION['username'])){
            
            include 'sessioncontent.php';
            
        }
        
        else {
            include 'logo.php';
            include 'login.php';
            
            
        }
        
        
        ?>
    <br>
    <br>
</body>
</html>