var ClassbuttonX = [20,326,632];
var ClassbuttonY = [120,120,120];
var ClassbuttonWidth = 300;
var ClassbuttonHeight = 480;
var ClassSelect = new Image();
var ClassScreen = new Image();
ClassSelect.src = "images/classSel.png";
var StopClass;
var ClassBoxVisible = false;
var ClassBoxX = 0;
var ClassBoxY = 0;
var ClassBoxWidth = 300;
var ClassBoxSize =ClassBoxWidth;
var ClassBoxHeight = 480;
var mouseX;
var mouseY;

var playerClass;

function SelectClass(){
StopClass = true;
drawClass();

}
 myCanvas.addEventListener("mousemove", checkPos);

function checkPos(mouseEvent){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop; //gets the mouse pos X and Y
    for(i = 0; i < ClassbuttonX.length; i++){
    if(mouseX > ClassbuttonX[i] && mouseX < ClassbuttonX[i] + ClassbuttonWidth){
            if(mouseY > ClassbuttonY[i] && mouseY < ClassbuttonY[i] + ClassbuttonHeight){      //the items that you want to click/ hover over need to be defined in an array (SEE LINE 16 TO 19)
           
            ClassBoxX = ClassbuttonX[i];
            ClassBoxY = ClassbuttonY[i];
            ClassBoxVisible = true;
        }
}
}
}
myCanvas.addEventListener("mousedown", checkClick);

function checkClick(mouseEvent){
    if(StopClass == true){
        for(i = 0; i < ClassbuttonX.length; i++){
        if(mouseX > ClassbuttonX[i] && mouseX < ClassbuttonX[i] + ClassbuttonWidth){
            if(mouseY > ClassbuttonY[i] && mouseY < ClassbuttonY[i] + ClassbuttonHeight){
                 switch(i){
                         
                    case 0:
                         StopClass = false;
                         playerClass = "warrior";
                         char.src = "images/"+playerClass+".png";
                    drawCanvas();
                    break;
                         
                    case 1:
                         StopClass = false;
                         playerClass = "mage";
                         char.src = "images/"+playerClass+".png";
                    drawCanvas();
                    break;
                         
                    case 2:
                         StopClass = false;
                         playerClass = "rogue";
                         char.src = "images/"+playerClass+".png";
                    drawCanvas();
                    break;
                         
                    
                 }
            }
        }
    }
    }

}  
    
    //settings menu
function drawClass(){
     context.drawImage(ClassScreen, 0, 0);
    ClassScreen.src = "images/ClassScreen.png";
    
    if (ClassBoxVisible == true){
          context.drawImage(ClassSelect, ClassBoxX, ClassBoxY);
      }
    if (StopClass == true){
    window.requestAnimationFrame(drawClass);
}
}
