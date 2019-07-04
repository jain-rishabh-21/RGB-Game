var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

var h1Display = document.querySelector("h1");
var chosenColor;
var messageDisplay = document.querySelector("#messageDisplay");

var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var numSquares = 6;

//console.log(colorDisplay);  
easyButton.addEventListener("click",function(){
    resetButton.textContent = "New Colors";
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");    
    messageDisplay.textContent = "";
    numSquares = 3;
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1Display.style.background = "steelblue";
});

hardButton.addEventListener("click",function(){
    resetButton.textContent = "New Colors";
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    messageDisplay.textContent = "";
    numSquares = 6;
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";

    }
    h1Display.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    h1Display.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }

});

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
         chosenColor =  this.style.background ;

    if(pickedColor === chosenColor){
         console.log("correct");
         messageDisplay.textContent = "Correct!";
         changeColor(chosenColor);
         h1Display.style.backgroundColor = pickedColor;
         resetButton.textContent = "Play Again?";
         
    }else{
            console.log("Wrong");
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }     
    });

function changeColor(color){
     for(var i = 0; i < squares.length; i++){
         squares[i].style.background = color;
     }
}
}



function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
       arr.push(generateColor()) ;
    }
return arr;
}


function generateColor(){

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")" ;
}

