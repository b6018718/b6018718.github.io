var VolbuttonX = [300,500];
var VolbuttonY = [200,200];
var VolbuttonWidth = 64;
var VolbuttonHeight = 64;
var VolSelect = new Image();
VolSelect.src = "images/VOL.png";

var settingsBoxVisible = false;
var settingsBoxX = 0;
var settingsBoxY = 0;
var settingsBoxWidth = 64;
var settingsBoxSize = settingsBoxWidth;
var settingsBoxHeight = 32;
var mouseX;
var mouseY;

var BlurBg = new Image();

function settings(){
var backEnabled = true;
plsStop = true;
drawSettings();

    document.addEventListener("keydown", function(ev){
    var key = ev.which;

    switch(key){
         case 8:
        if(backEnabled == true){
           backEnabled = false;
            if (settingsOrigin == 1 ){
                plsStop = false;
                help();
            }
            if (settingsOrigin == 2 ){
                plsStop = false;
            }

        }
        break;
    }
    });
}
 myCanvas.addEventListener("mousemove", checkPos);

function checkPos(mouseEvent){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop; //gets the mouse pos X and Y
    for(i = 0; i < VolbuttonX.length; i++){
    if(mouseX > VolbuttonX[i] && mouseX < VolbuttonX[i] + VolbuttonWidth){
            if(mouseY > VolbuttonY[i] && mouseY < VolbuttonY[i] + VolbuttonHeight){      //the items that you want to click/ hover over need to be defined in an array (SEE LINE 16 TO 19)

            settingsBoxX = VolbuttonX[i];
            settingsBoxY = VolbuttonY[i];
            settingsBoxVisible = true;
        }
}
}
}
myCanvas.addEventListener("mousedown", checkClick);

function checkClick(mouseEvent){
    if(plsStop == true){
        for(i = 0; i < VolbuttonX.length; i++){
        if(mouseX > VolbuttonX[i] && mouseX < VolbuttonX[i] + VolbuttonWidth){
            if(mouseY > VolbuttonY[i] && mouseY < VolbuttonY[i] + VolbuttonHeight){
                 switch(i){
                     case 0:
                         if (volLevel >= 0.05){
                        volLevel -= 0.1;
                         Volume();
                         }
                    break;
                     case 1:
                         if (volLevel <= 0.95 ){
                         volLevel += 0.1;
                         Volume();
                         }
                    break;
                 }
            }
        }
    }
    }
}

    //settings menu
function drawSettings(){
      if(settingsOrigin == 2){
        BlurBg.src = "images/bg" + cZ + "B.png";
        myC.drawImage(BlurBg, bg.x, bg.y);
        settingsScreen.src = "images/settingsScreen1.png";
        context.drawImage(settingsScreen, 0, 0);
    }else{
        settingsScreen.src = "images/settingsScreenMenu.png";
        context.drawImage(settingsScreen, 0, 0);
    }

    if (settingsBoxVisible == true){
          context.drawImage(VolSelect, settingsBoxX, settingsBoxY);
      }
    drawVolText();
    if (plsStop == true){
    window.requestAnimationFrame(drawSettings);
}
}

function drawVolText(){
    context.fillStyle = "#000";
    context.font = '48px gameFont';
	var TempVOL = (Math.round( volLevel * 10 ) / 10) * 10;;
    if(settingsOrigin == 2){
        context.fillText(TempVOL, 410, 260);
    }else{
        context.fillText(TempVOL, 430, 220);
    }
}
