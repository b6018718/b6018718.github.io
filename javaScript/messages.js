var showTextMessage = false;
var textLine1=" ";
var textLine2=" ";
var messageBox = new Image();
messageBox.src = "images/messageBox.png";
var text1Queue = [];
var text2Queue = [];
var textQueueCount = 0;


//sets the message to be drawn
function setTextMessage(line1, line2){
  text1Queue.push(line1);
	text2Queue.push(line2);
	if (!showTextMessage){
  	showTextMessage = true;
  	textLine1 = text1Queue.shift();
		textLine2 = text2Queue.shift();
		activeControls = 0;
	}
	else{
		textQueueCount ++;
	}
}

function updateTextMessage(){
	if(textQueueCount > 0){
		textLine1 = text1Queue.shift();
		textLine2 = text2Queue.shift();
		textQueueCount --;
	}
  else{
		showTextMessage = false;
		activeControls = 0;
	}
}

//draws message box with transparent background
function drawTextMessage(){
    context.drawImage(messageBox,0,0);
    context.font = "24px gameFont";
    context.fillStyle = '#FFF';
    context.fillText(textLine1,48,528);
    context.fillText(textLine2,48,600);
}
