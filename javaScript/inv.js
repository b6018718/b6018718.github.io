var InvbuttonX = [665,750];
var InvbuttonY = [85,85];
var InvbuttonWidth = 64;
var InvbuttonHeight = 64;
var InvSelect = new Image();
InvSelect.src = "images/VOL.png";

var InvBoxVisible = false;
var InvBoxX = 0;
var InvBoxY = 0;
var InvBoxWidth = 64;
var InvBoxSize = settingsBoxWidth;
var InvBoxHeight = 32;
var mouseX;
var mouseY;
var backEnabled = true;

var Coin = new Image();
Coin.src = "images/coin.png";
var coinCount = 0;
var shift = 0;
var frameWidth = 60;
var frameHeight = 60;
var totalFrames = 12;
var currentFrame = 0;

var weponIcon = new Image();

function Inventory(){
    calculateStatTotals();
    backEnabled = true;
    invStop = true;
    drawInv();
}


myCanvas.addEventListener("mousemove", checkPos);

function checkPos(mouseEvent){
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop; //gets the mouse pos X and Y
    for(i = 0; i < InvbuttonX.length; i++){
    if(mouseX > InvbuttonX[i] && mouseX < InvbuttonX[i] + InvbuttonWidth){
            if(mouseY > InvbuttonY[i] && mouseY < InvbuttonY[i] + InvbuttonHeight){      //the items that you want to click/ hover over need to be defined in an array (SEE LINE 16 TO 19)

            InvBoxX = InvbuttonX[i];
            InvBoxY = InvbuttonY[i];
            InvBoxVisible = true;
        }
}
}
}
myCanvas.addEventListener("mousedown", checkClick);

function checkClick(mouseEvent){
    if(invStop == true){
        for(i = 0; i < InvbuttonX.length; i++){
        if(mouseX > InvbuttonX[i] && mouseX < InvbuttonX[i] + InvbuttonWidth){
            if(mouseY > InvbuttonY[i] && mouseY < InvbuttonY[i] + InvbuttonHeight){
                 switch(i){

                     case 0:
                        if (inventory[1]>0){
			                 currentHP = currentHP + calculatedamageHealed(itemHealthPotion());
                        }
                    break;

                    case 1:
                         if (inventory[2]>0){
			                 currentMP = currentMP + calculateMagicRecover(itemMagicPotion());
                         }
                    break;
                 }
            }
        }
    }
    }

}

function drawInv(){

     context.drawImage(invScreen, 0, 0);
    invScreen.src = "images/invScreen.png";

    if (coinCount <= 6){
        context.drawImage(invScreen, 0, 0);
        context.drawImage(Coin, shift, 0, frameWidth, frameHeight,
                    350, 330, frameWidth, frameHeight);
    }
    if (coinCount == 6){
        shift += frameWidth;
        coinCount = 0;
        currentFrame++;
    }
    if (currentFrame == totalFrames) {
    shift = 0;
    currentFrame = 0;
    }
 
    
    coinCount++;
    
    if (equippedWeapon == "bone"){
        weponIcon.src="images/bone.png";
    }
    
    if ((equippedWeapon == "stoneSword") || (equippedWeapon == "steelSword") || (equippedWeapon == "rubySword")){
        weponIcon.src="images/sword.png";
    }
    
    if ((equippedWeapon == "staff") || (equippedWeapon == "masterWand")){
        weponIcon.src="images/staff.png";
    }
    
    context.drawImage(weponIcon, 840, 280);
    
    if (InvBoxVisible == true){
          context.drawImage(VolSelect, InvBoxX, InvBoxY);
      }
    context.textAlign="left";
    context.font = "20px gameFont";

    drawHealthBar(25, 325, currentHP, maxHP, "#0F0");
	drawHealthBar(25, 365, currentMP, maxMP, "#00F");
    drawEXPBar(25, 405, effectiveCurrentExp, effectiveExpLevelUp , "#ffff00");
    drawInvText();
    if (invStop == true){
    window.requestAnimationFrame(drawInv);
    }
}

document.addEventListener("keydown", function(ev){
    var key = ev.which;

    switch(key){
       //mainMenu();

         case 8:
            invStop = false;
    }
    });

function drawInvText(){

    context.fillStyle = "#ffffff";
	context.textAlign="left";
    context.font = "20px gameFont";
    context.fillText(currentHP + "|" + maxHP + "HP",143,353);
	context.fillText(currentMP + "|" + maxMP + "MP",143,393);
    context.fillText("XP",560,433);
    
    context.fillStyle = "#ebff00";
    context.fillText(inventory[1], 700, 140);
    context.strokeStyle = "#050505";
    context.lineWidth = 1;
    context.strokeText(inventory[1], 700, 140);
    
    context.fillStyle = "#ebff00";
    context.fillText(inventory[2], 785, 140);
    context.strokeStyle = "#050505";
    context.lineWidth = 1;
    context.strokeText(inventory[2], 785, 140);
    
    context.fillStyle = "#ebff00";
    context.fillText(inventory[5], 870, 140);
    context.strokeStyle = "#050505";
    context.lineWidth = 1;
    context.strokeText(inventory[5], 870, 140);
    
    context.fillStyle = "#ebff00";
    context.fillText(inventory[4], 700, 220);
    context.strokeStyle = "#050505";
    context.lineWidth = 1;
    context.strokeText(inventory[4], 700, 220);
    
    context.fillStyle = "#ebff00";
    context.fillText(inventory[3], 785, 220);
    context.strokeStyle = "#050505";
    context.lineWidth = 1;
    context.strokeText(inventory[3], 785, 220);
    
    context.fillStyle = "#ffffff";
    context.font = "28px gameFont";
	context.fillText(gold, 420, 380);


    context.drawImage(messageBox,0,0);
    context.font = "24px gameFont";
    context.fillStyle = '#FFF';
    context.fillText("Current quest: "+currentQuestDesc1,48,528);
    context.fillText(currentQuestDesc2,48,600);
    
    context.font = "18px gameFont";
    context.fillText("Name: " + name, 25, 100);
    context.fillText("Physical Attack: " + playerTotalPhyAttack, 25, 130);
    context.fillText("Magic Attack: " + playerTotalMagAttack, 25, 160);
    context.fillText("Physical Defence: " + playerTotalPhyDefence, 25, 190);
    context.fillText("Magic Defence: " + playerTotalMagDefence, 25, 220);
    context.fillText("Luck: " + luck, 25, 250);
    context.fillText("Level: " + level, 25, 280);
    
    

}

function calculateStatTotals(){
    
    playerTotalPhyAttack = phyAttack + weaponPhysDamage[equippedWeapon]; //adds player stats to their current equipment stats
	playerTotalMagAttack = magAttack + weaponMagicDamage[equippedWeapon];
	playerTotalPhyDefence = phyDefence + chestPhysDef[equippedChestpiece] + helmetPhysDef[equippedHelmet] +  gauntletPhysDef[equippedGaunlet]  + bootPhysDef[equippedBoots];
	playerTotalMagDefence = magDefence + chestMagicDef[equippedChestpiece] + helmetMagicDef[equippedHelmet] +  gauntletMagicDef[equippedGaunlet]  + bootMagicDef[equippedBoots];
    //luck
    //level

}
