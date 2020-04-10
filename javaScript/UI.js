console.info("Video Game Demo Loaded");
var volLevel = 0.2;

var myCanvas = document.getElementById('myCanvas');
var context = myCanvas.getContext('2d');
var width = myCanvas.getAttribute('width');
var height = myCanvas.getAttribute('height');
var controls = new Image();
var plsStop;
var invStop;
var settingsScreen = new Image();
var invScreen = new Image();
var banner = new Image();


var press = false;
var buttonX = [480 - ((48 * 5)/2),480 - ((48 * 8)/2),480 - ((48 * 8)/2)];
var buttonY = [50,150,250];
var buttonWidth = [48 * 5,48 * 8,48 * 8];
var buttonHeight = [48,48,48];

var settingsOrigin;


function drawEXPBar(posX, posY, currentStat, maxStat, colour){
	var percentFill;
	percentFill = Math.floor(currentStat/maxStat*520);
	if (percentFill < 0){
		percentFill = 0;
	}
	context.fillStyle = "#FFF";
	context.fillRect(posX+4, posY, 520, 4 ); //top
	context.fillRect(posX+4, posY + 28, 520, 4 ); //bot
	context.fillRect(posX, posY+ 4, 4,24); //left
	context.fillRect(posX+524, posY + 4 , 4,24); //right
    context.fillStyle = colour;
	context.fillRect(posX+6, posY+6, percentFill,20); //how much the bar is filled
}


function help(){
Volume();
var stop = false
playMenu();
press = true;
var frames = 60;
var timerId = 1;
var backgroundX = 0;
timerId = setInterval(update, 1000/frames);

function update() {
    if(stop == false){
        clear();
        movebg();
        drawbg();
    }
}

function movebg(){
    backgroundX = backgroundX - 0.5;

    if(backgroundX == -960){
        backgroundX = 0;
    }
}

function drawbg(){

        context.drawImage(banner, backgroundX, 0);
      if (arrowVisible == true){
           context.font = '48px gameFont';
        context.textAlign = "center";
        context.textBaseline = "hanging";
        context.fillText(">", arrowX, arrowY + 12);
      }
    banner.src = "images/bg0.png";
    stuff();
}

function clear(){
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function stuff(){
       context.font = '48px gameFont';
        context.textAlign = "center";
        context.textBaseline = "hanging";
        context.fillText("Start", 480, buttonY[0] + 12);
    context.font = '48px gameFont';
    context.textAlign = "center";
    context.textBaseline = "hanging";
    context.fillText("Settings", 480, buttonY[1] + 12);
    context.font = '48px gameFont';
    context.textAlign = "center";
    context.textBaseline = "hanging";
    context.fillText("Controls", 480, buttonY[2] + 12);
}


////////////////////////////////////////MOUSE HOVER AND CLICK//////////////////////////
var mouseX;
var mouseY;
var arrowX = 0;
var arrowY = 0;
var arrowWidth = 48;
var arrowSize = arrowWidth;
var arrowHeight = 48;
var arrowVisible = false;  //arrow is the little pointer to the left of the button

myCanvas.addEventListener("mousemove", checkPos);

function checkPos(mouseEvent){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop; //gets the mouse pos X and Y
    for(i = 0; i < buttonX.length; i++){
    if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){        //if mouse is over the X and Y for the button the show the arrow to the left of the box
        if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){       //the items that you want to click/ hover over need to be defined in an array (SEE LINE 16 TO 19)
           arrowVisible = true;
            arrowX = buttonX[i] - (arrowWidth/2) - 22;
            arrowY = buttonY[i];
        }
    }else{
         arrowVisible = false;
    }
}
}

myCanvas.addEventListener("mouseup", checkClick);

function checkClick(mouseEvent){
    if(stop == false){
        for(i = 0; i < buttonX.length; i++){
        if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
            if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
                 switch(i){
                     case 0:
                         backgroundX = 0;
                         stop = true;
                         play();
                    break;
                     case 1:
                         stop = true;
                         clear();
                         settingsOrigin = 1;
                         settings();
                    break;
                    case 2:
                         stop = true;
                         instructions();
                    break;
                 }
            }
        }
    }
    }

}
//}
}
////////////////////////////////////////////////////////////////////////////////////////

function play(){

    var escEnabled = true;
    var backEnabled = true;
    var escOn = false;
    stopAllSounds();
    playVillage();
    clear();
    SelectClass();
}

function instructions(){
    clear();
    var backEnabled = true;
    document.addEventListener("keydown", function(ev){
    var key = ev.which;
    switch(key){
         case 8:
        if(backEnabled == true){
           backEnabled = false;
            help();
        }
    }
    });
    controls.onload = function() {
      context.drawImage(controls, 0, 0);
}
    controls.src = "images/controls.png";
}
function clear(){
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function pause(){
    var escEnabled = true;
    var escOn = false;
        if((escEnabled == true) && (escOn == false)){
            alert("OPEN pause menu");
                context.drawImage(pauseMenu, 0, 0);
            escOn = true;

        }else if((escEnabled == true) && (escOn == true)){
            clear();
            escOn = false;
        }
}
