var numSquares = 6;
var allButtons = document.querySelectorAll('button');
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var rgb = document.querySelector("#rgb");
var pickedColor = pickColor();
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var score = 0;
var pokusaji = 0;
rgb.textContent = pickedColor;



easyButton.addEventListener("click", function(){
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgb.textContent = pickedColor;
	message.textContent = "";
	h1.style.background = "steelblue";
	easyButton.classList.toggle('selected');
	hardButton.classList.toggle('selected');
	for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgb.textContent = pickedColor;
	message.textContent = "";
	h1.style.background = "steelblue";
	easyButton.classList.toggle('selected');
	hardButton.classList.toggle('selected');
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('mouseover', function () {
		this.style.opacity = '0.5';
	})
}
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('mouseout', function () {
		this.style.opacity = '1';
	})
}


for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		disableButtons();
		pokusaji++;
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			for (var w = 0; w< squares.length; w++) {
				squares[w].style.pointerEvents = 'none';
			}
			changeColors(clickedColor);
			message.textContent = "Correct!";
			h1.style.background = pickedColor;
			if(numSquares === 3){
				if(pokusaji === 2){
					score++;
				} else if(pokusaji === 1) {
					score = score + 2;
				} else if(pokusaji === 3) {
					score = 0;
					enableButtons();
				}
				countDown();
			} else {
				if (pokusaji === 1) {
					score = score + 5;
				} else if(pokusaji === 2){
					score = score + 4;
				} else if(pokusaji === 3){
					score = score + 3;
				} else if(pokusaji === 4){
					score = score + 2;
				} else if(pokusaji === 5){
					score++;
				} else if(pokusaji === 6){
					score = 0;
					enableButtons();
				}
				countDown();
			}
			var scoreDisplay = document.querySelector("#scoreInput");
			var scoreDisplayNum = document.querySelector("#scoreNum");
			scoreDisplay.setAttribute("value", score);
			scoreDisplayNum.textContent = score;
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	});
}
resetButton.addEventListener("click", reset);

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function pickColor(){
	var random = Math.floor(Math.random() * numSquares);
	return colors[random];
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgb.textContent = pickedColor;
	h1.style.background = "steelblue";
	message.textContent = "";
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	pokusaji = 0;
	}
}

function countDown(){
	var i = 3;
	var myInterval = setInterval(function(){
		document.getElementById("timer").innerHTML =  i;
		if(i === 0){
			clearInterval(myInterval);
			for (var d = 0; d < squares.length; d++) {
				squares[d].style.pointerEvents = 'auto';
			}
			reset();
		} else {
			i--;
		}
	}, 1000);
}

function disableButtons(){
	resetButton.classList.add('disabledButtons');
	easyButton.classList.add('disabledButtons');
	hardButton.classList.add('disabledButtons');
	resetButton.disabled = true;
	easyButton.disabled = true;
	hardButton.disabled = true;
}
function enableButtons(){
	resetButton.classList.remove('disabledButtons');
	easyButton.classList.remove('disabledButtons');
	hardButton.classList.remove('disabledButtons');
	resetButton.disabled = false;
	easyButton.disabled = false;
	hardButton.disabled = false;
}

// $(document).ready(function(e){
// 	$('#submit').click(function(){
// 		var score = $('#scoreInput').val();
//
// 		$.ajax({
// 			type: 'POST',
// 			data:{hiddenindex:score},
// 			url: "index.php",
// 			success: function(result){
//
// 				$('#alert').show();
//
// 				$('#show').html(result);
// 			}
// 		})
// 	});
// });

$(document).ready(function(e){
	$('#submit').click(function(){
		var score = $('#scoreInput').val();
		window.score = 0;
		var scoreDisplayNum2 = document.querySelector("#scoreNum");
		scoreDisplayNum2.textContent = window.score;
		$.ajax({
			type: 'POST',
			url: "index.php",
			data:{hiddenindex:score},
			success: function(result){

				$('#alert').fadeIn(3000);
				$('#show').html('Submit succesful');
				$('#alert').fadeOut(3000);
			}
		})
	});
});
