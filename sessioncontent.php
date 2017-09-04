<?php include 'loginbanner.php'; ?>

<h1 class="h1">The Great <br><span id="rgb">Rgb</span><br> Color Game</h1>

<div id="traka">
    <button id="reset">New colors</button>
    <span id="messageDisplay"></span>
    <button id="easyButton">Easy</button>
    <button id="hardButton" class="selected">Hard</button>
</div>

<div id="container">

    <div id="alert" class="text-center">

        <i class="glyphicon glyphicon-ok"><span id="show"></span></i>

    </div>

    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="clear-float"></div>

    <form method="POST" action="php/enterscore.php" class="forma">
        <h2 id="score">Score : 

            <span><input id="scoreInput" name="hiddenindex" type="hidden" value="0"><span id="scoreNum"></span></span>

        </h2>
        <div id="input">
            <input id="submit" type="submit" name="submitscore" value="Submit Score">
        </div>
    </form>
    <h2 id="timerPosition">New colors in : <span id="timer"></span> <span id="sec">sec</span></h2>
</div>

<script
    src="https://code.jquery.com/jquery-3.2.1.js"
    integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
crossorigin="anonymous"></script>

<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script type="text/javascript" src="js/script.js"></script>
