var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var header = document.querySelector(".header");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT!";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "rgb(55, 62, 64)";
			messageDisplay.textContent = "TRY AGAIN!";
		}
	});
}

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")"
}