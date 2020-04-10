//declare canvas
var myCanvas = document.getElementById('myCanvas');
var myC = myCanvas.getContext('2d');
var canWidth = myCanvas.clientWidth;
var canHeight = myCanvas.clientHeight;

//constructor for the creation of map zones
function mapZone(xDim, yDim){
	this.xDim = xDim * 32;
	this.yDim = yDim * 32;
}

//declaring the map zones and map variables
var zone = [];
var cZ = 0;
zone[0] = new mapZone(60, 35);
zone[1] = new mapZone(90, 55);
zone[2] = new mapZone(90, 55);
zone[3] = new mapZone(60, 45);
zone[4] = new mapZone(60, 45);
zone[5] = new mapZone(30, 25);
zone[6] = new mapZone(60, 25);
zone[7] = new mapZone(30, 25);
var map = {x: 58 * 32, y: 1 * 32};

//creating background image and variables
var bgImg = new Image();
bgImg.src = "images/bg" + cZ + ".png";
var bg = {x: -960, y: 0};

//creating character image
var char = new Image();
//char.src = "images/"+playerClass+".png";

//creating variable for animating the character sprite
var spriteFrame = 0;

//creating character variables
var player = {x: 28 * 32, y: 1 * 32, xDim: 1 * 32, yDim: 1 * 32};
var playerName = "";
var canMove = false;
var dir = {left: false, up: false, right: false, down: false};
var facing = {left: false, up: false, right: false, down: true};
var interactKey = false;

//constructor for all the collision objects
function collisionObj(name, x, y, xDim, yDim, interactable, interactType, signText1, signText2, func){
	this.name = name;
	this.x = x * 32;
	this.y = y * 32;
	this.xDim = xDim * 32;
	this.yDim = yDim * 32;
	this.interactable = interactable;
  this.interactType = interactType;
  this.signText1 = signText1;
	this.signText2 = signText2;
	this.func = func;
}

//declaring an array to hold the collision objects, and defining them all
var collisions = [];
collisions[0] = [];
collisions[0][0] = new collisionObj("villageTopWall", 0, 0, 60, 1, false, "none");
collisions[0][1] = new collisionObj("villageLeftWall", 0, 0, 1, 29, false, "none");
collisions[0][2] = new collisionObj("villageRightWall", 59, 0, 1, 29, false, "none");
collisions[0][3] = new collisionObj("villageBottomWallLeft", 0, 28, 9, 2, false, "none");
collisions[0][4] = new collisionObj("villageBottomWallRight", 13, 28, 47, 2, false, "none");
collisions[0][5] = new collisionObj("villageHouse1", 20, 12, 5.75, 5, false, "none");
collisions[0][6] = new collisionObj("villageHouse2", 33, 12, 5.5, 5, false, "none");
collisions[0][7] = new collisionObj("villageChest", 28, 1, 1, 1, true, "chest", "", "", chestFunction);
collisions[0][8] = new collisionObj("villageLeftFence", 8, 25, 1, 3, false, "none");
collisions[0][9] = new collisionObj("villageRightFence", 13, 25, 1, 3, false, "none");
collisions[0][10] = new collisionObj("villageTopLeftFence", 1, 8, 9, 1, false, "none");
collisions[0][11] = new collisionObj("villageTopRightFence", 12, 0, 1, 9, false, "none");
collisions[0][12] = new collisionObj("villageGransTopRightFence", 50, 1, 1, 4, false, "none");
collisions[0][13] = new collisionObj("villageGransMiddleLeftFence", 50, 7, 1, 5, false, "none");
collisions[0][14] = new collisionObj("villageGransMiddleFence", 51, 9, 7, 1, false, "none");
collisions[0][15] = new collisionObj("villageGransBottomFence", 50, 14, 9, 1, false, "none");
collisions[0][16] = new collisionObj("villageGrave1", 2, 2, 1, 1, false, "none");
collisions[0][17] = new collisionObj("villageGrave2", 4, 2, 1, 1, false, "none");
collisions[0][18] = new collisionObj("villageGrave3", 6, 2, 1, 1, false, "none");
collisions[0][19] = new collisionObj("villageGransGrave", 9, 2, 1, 1, true, "sign", "The grave reads:", "RIP Grandma");
collisions[0][20] = new collisionObj("villageHomeRightWall", 58, 2, 1, 10, false, "none");
collisions[0][21] = new collisionObj("villageHomeBed", 55, 1, 1.5, 2, false, "none");
collisions[0][22] = new collisionObj("villageHomeBottomWall", 54, 5.5, 10, 9, false, "none");
collisions[0][23] = new collisionObj("villageHomeLeftWall", 54, 1, 1, 3, false, "none");
collisions[0][24] = new collisionObj("villageDog", 8, 5, 1, 1, true, "quest", "*Woof woof*", "I think it's telling me to leave...", dogFunction);
collisions[1] = [];
collisions[1][0] = new collisionObj("fieldLeftFencePath", 8, 0, 0.5, 34, false, "none");
collisions[1][1] = new collisionObj("fieldRightFencePath", 13, 0, 1, 6, false, "none");
collisions[1][2] = new collisionObj("fieldBottomFencePath", 9, 10, 9, 1, false, "none");
collisions[1][3] = new collisionObj("fieldFenceSign", 14, 5, 4, 1, true, "sign");
collisions[1][4] = new collisionObj("fieldVillageSign", 18, 5, 1, 1, true, "sign", "The sign reads:", "To the Village");
collisions[1][5] = new collisionObj("fieldCaveEntrance", 1, 30, 7, 1, false, "none");
collisions[1][6] = new collisionObj("fieldTopWall", 14, 0, 89, 1, false, "none");
collisions[1][7] = new collisionObj("fieldCaveSign", 4, 34, 1, 1, true, "sign", "The sign reads:", "To the Cave");
collisions[1][8] = new collisionObj("fieldCaveLeftFence", 0, 31, 1, 6, false, "none");
collisions[1][9] = new collisionObj("fieldLeftMoat", 0, 37, 39, 13, false, "none");
collisions[1][10] = new collisionObj("fieldRightMoat", 44, 37, 46, 13, false, "none");
collisions[1][11] = new collisionObj("fieldCastleSign", 38, 34, 1, 1, true, "sign", "The sign reads:", "To Castletown");
collisions[1][12] = new collisionObj("fieldTopField", 48, 3, 23, 12, false, "none");
collisions[1][13] = new collisionObj("fieldBottomField", 48, 20, 23, 12, false, "none");
collisions[1][14] = new collisionObj("fieldTopRightHedge", 89, 1, 1, 15, false, "none");
collisions[1][15] = new collisionObj("fieldTopRightHedge", 89, 20, 1, 17, false, "none");
collisions[1][16] = new collisionObj("fieldCampSign", 78, 17, 1, 1, true, "sign", "The sign reads:", "To the Goblin Camp");
collisions[1][17] = new collisionObj("fieldTopTents", 83, 13, 6, 3, false, "none");
collisions[1][18] = new collisionObj("fieldBottomTents", 83, 20, 6, 3, false, "none");
collisions[2] = [];
collisions[2][0] = new collisionObj("townTopLeftWall", 0, 0, 39, 2, false, "none");
collisions[2][1] = new collisionObj("townTopCourtYard", 0, 0, 32, 17, false, "none");
collisions[2][2] = new collisionObj("townLeftWall", 0, 0, 2, 50, false, "none");
collisions[2][3] = new collisionObj("townBuyStall", 9, 25, 2, 2, true, "buyShop");
collisions[2][4] = new collisionObj("townSellStall", 13, 25, 2, 2, true, "sellShop");
collisions[2][5] = new collisionObj("townHatsStall", 9, 29, 2, 2, true, "hatShop");
collisions[2][6] = new collisionObj("townArmourStall", 13, 29, 2, 2, true, "equipShop");
collisions[2][7] = new collisionObj("townMarketSign", 19, 27, 1, 1, true, "sign", "The sign reads:", "The Market");
collisions[2][8] = new collisionObj("townBottomLeftCourtYard", 0, 38, 32, 11, false, "none");
collisions[2][9] = new collisionObj("townBottomLeftWall", 0, 48, 39, 2, false, "none");
collisions[2][10] = new collisionObj("townCastleSign", 38, 45, 1, 1, true, "sign", "The sign reads:", "To the Castle");
collisions[2][11] = new collisionObj("townTopRightWall", 44, 0, 7, 2, false, "none");
collisions[2][12] = new collisionObj("townLake", 34, 25, 15, 8, false, "none");
collisions[2][13] = new collisionObj("townTopRightCourtYard", 51, 0, 31, 12, false, "none");
collisions[2][14] = new collisionObj("townCasino", 82, 4, 6, 1, false, "none");
collisions[2][15] = new collisionObj("townRightWall", 88, 0, 2, 50, false, "none");
collisions[2][16] = new collisionObj("townChest", 82, 10, 1, 1, true, "chest", "", "", chestFunction);
collisions[2][17] = new collisionObj("townCasinoLeftFence", 82, 11, 3, 1, false, "none");
collisions[2][18] = new collisionObj("townCasinoRightFence", 87, 11, 1, 1, false, "none");
collisions[2][19] = new collisionObj("townBottomRightHouses", 52, 30, 38, 19, false, "none");
collisions[2][20] = new collisionObj("townBottomLeftHouses", 46, 38, 6, 10, false, "none");
collisions[2][21] = new collisionObj("townBottomRightWall", 44, 48, 2, 2, false, "none");
collisions[2][22] = new collisionObj("townTopRightHouses", 54, 13, 30, 15, false, "none");
collisions[3] = [];
collisions[3][0] = new collisionObj("castleTopLeftWall", 0, 0, 39, 19, false, "none");
collisions[3][1] = new collisionObj("castleLeftWall", 0, 0, 10, 45, false, "none");
collisions[3][2] = new collisionObj("castleTopThrone", 14, 25, 1, 2, true, "quest", "I was informed of the incident.", "Talk to the wizard over yonder.", kingFunctions);
collisions[3][3] = new collisionObj("castleBottomThrone", 14, 28, 1, 2, false, "none");
collisions[3][4] = new collisionObj("castleBottomWall", 0, 37, 60, 1, false, "none");
collisions[3][5] = new collisionObj("castleBedrooms", 44, 0, 9, 25, false, "none");
collisions[3][6] = new collisionObj("castleBedroomOutcrop", 44, 25, 2, 1, false, "none");
collisions[3][7] = new collisionObj("castleWizardWall", 44, 30, 2, 8, false, "none");
collisions[3][8] = new collisionObj("castleWizard", 55, 32, 1, 2, true, "quest", "Who are you? I'm in the middle of ", "important work, leave please.", wizFunction);
collisions[3][9] = new collisionObj("castleRightWall", 58, 0, 1, 40, false, "none");
collisions[3][10] = new collisionObj("castlePrincessWall", 55, 24, 2, 1, true, "sign", "Looks like she's sleeping...", "I shouldn't disturb her.");
collisions[3][11] = new collisionObj("castleRightWallOutcrop", 57, 24, 1, 1, false, "none");
collisions[3][12] = new collisionObj("castleLeftWallOutcrop", 53, 24, 2, 1, false, "none");
collisions[3][13] = new collisionObj("castleTopBedroomWall", 52, 18, 10, 1, false, "none");
collisions[3][14] = new collisionObj("castlePrincessBed", 55, 19, 2, 2, true, "sign", "I just need to get that necklace.", "I'm sure she won't miss it.");
collisions[4] = [];
collisions[4][0] = new collisionObj("1,1Tent", 10, 16, 3, 3, false, "none");
collisions[4][1] = new collisionObj("2,1Tent", 13, 9, 3, 3, false, "none");
collisions[4][2] = new collisionObj("2,2Tent", 13, 24, 3, 3, false, "none");
collisions[4][3] = new collisionObj("leftWall", 0, 0, 1, 35, false, "none");
collisions[4][4] = new collisionObj("topWall", 0, 0, 59, 1, false, "none");
collisions[4][5] = new collisionObj("rightWall", 59, 0, 1, 39, false, "none");
collisions[4][6] = new collisionObj("bottomWall", 0, 39, 59, 39, false, "none");
collisions[4][7] = new collisionObj("3,1Tent", 20, 3, 3, 3, false, "none");
collisions[4][8] = new collisionObj("4,1Tent", 24, 28, 3, 3, false, "none");
collisions[4][9] = new collisionObj("goblinNursery", 27, 2, 8, 4, false, "none");
collisions[4][10] = new collisionObj("5,1Tent", 37, 30, 3, 3, false, "none");
collisions[4][11] = new collisionObj("6,1Tent", 39, 3, 3, 3, false, "none");
collisions[4][12] = new collisionObj("7,1Tent", 41, 36, 3, 3, false, "none");
collisions[4][13] = new collisionObj("8,1Tent", 43, 15, 3, 3, false, "none");
collisions[4][14] = new collisionObj("8,2Tent", 43, 25, 3, 3, false, "none");
collisions[4][15] = new collisionObj("9,1Tent", 50, 6, 3, 3, false, "none");
collisions[4][16] = new collisionObj("9,2Tent", 50, 15, 3, 3, false, "none");
collisions[4][17] = new collisionObj("9,3Tent", 50, 25, 3, 3, false, "none");
collisions[4][18] = new collisionObj("10,1Tent", 53, 31, 3, 3, false, "none");
collisions[4][19] = new collisionObj("goblinChest", 48, 33, 1, 1, true, "quest", "You try to take the goblin staff", "But a goblin appears and stops you", campChestFunc);
collisions[5] = [];
collisions[5][0] = new collisionObj("nursaryLeftWall", 0, 0, 10, 19, false, "none");
collisions[5][1] = new collisionObj("nursaryLeftOutcrop", 9, 20, 5, 1, false, "none");
collisions[5][2] = new collisionObj("nursaryTopWall", 10, 13, 12, 1, false, "none");
collisions[5][3] = new collisionObj("nursaryChest", 10, 14, 1, 1, true, "chest", "", "", chestFunction);
collisions[5][4] = new collisionObj("nursaryRightOutcrop", 16, 20, 10, 1, false, "none");
collisions[5][5] = new collisionObj("nursaryRightWall", 20, 14, 1, 10, false, "none");
collisions[5][6] = new collisionObj("nursaryTopLeftCot", 10, 15, 2, 1, false, "none");
collisions[5][7] = new collisionObj("nursaryMiddleLeftCot", 10, 17, 2, 1, false, "none");
collisions[5][8] = new collisionObj("nursaryBottomLeftCot", 10, 19, 2, 1, false, "none");
collisions[5][9] = new collisionObj("nursaryTopRightCot", 18, 15, 2, 1, false, "none");
collisions[5][10] = new collisionObj("nursaryMiddleRightCot", 18, 17, 2, 1, false, "none");
collisions[5][11] = new collisionObj("nursaryBottomRightCot", 18, 19, 2, 1, false, "none");
collisions[6] = [];
collisions[6][0] = new collisionObj("caveTopLeftWall", 0, 0, 41, 8, false, "none");
collisions[6][1] = new collisionObj("caveTopBridge", 8, 8, 33, 1, false, "none");
collisions[6][2] = new collisionObj("caveTopRightWall", 41, 0, 20, 1, false, "none");
collisions[6][3] = new collisionObj("caveTopRightWall", 59, 0, 1, 19, false, "none");
collisions[6][4] = new collisionObj("caveBottomRightOutcrop", 58, 19, 1, 1, false, "none");
collisions[6][5] = new collisionObj("caveBottom", 8, 11, 33, 20, false, "none");
collisions[6][6] = new collisionObj("caveBottomRightOutcrop", 41, 19, 14, 1, false, "none");
collisions[6][7] = new collisionObj("caveLeftWall", 0, 6, 2, 20, false, "none");
collisions[6][8] = new collisionObj("caveBottomLeftWall", 1, 18, 15, 1, false, "none");
collisions[6][9] = new collisionObj("caveChest", 3, 16, 1, 1, true, "quest", "You try to take the orb", "But the spider protecting it appears", caveChestFunc);
collisions[7] = [];
collisions[7][0] = new collisionObj("casinoLeftWall", 0, 0, 1, 20, false, "none");
collisions[7][1] = new collisionObj("casinoBottomLeftOutcrop", 0, 19, 3, 1, false, "none");
collisions[7][2] = new collisionObj("casinoBottomRightWall", 5, 19, 29, 1, false, "none");
collisions[7][3] = new collisionObj("casinoTopWall", 0, 0, 29, 3, false, "none");
collisions[7][4] = new collisionObj("casinoBar", 12, 3, 9, 1, false, "none");
collisions[7][5] = new collisionObj("casinoRightWall", 29, 0, 1, 18, false, "none");
collisions[7][6] = new collisionObj("casinoWheelSpinner", 4, 3, 5, 5, false, "none");
collisions[7][7] = new collisionObj("casinoTopFruits", 23, 5, 6, 2, false, "none");
collisions[7][8] = new collisionObj("casinoBottomFruits", 23, 9, 6, 2, false, "none");
collisions[7][9] = new collisionObj("casinoLeftTable", 8, 15, 3, 2, false, "none");
collisions[7][10] = new collisionObj("casinoMiddleTable", 16, 15, 3, 2, false, "none");
collisions[7][11] = new collisionObj("casinoRightTable", 24, 15, 3, 2, false, "none");

//declaring variables for centering on the canvas
var canXC = (canWidth - player.xDim) / 2;
var canYC = (canHeight - player.yDim) / 2;

//other variables
var backspace = false;
var keyPressed = false;
var buffer = 60;
var activeControls = 0;
var gameOver = false;

//main draw function
function drawCanvas(){
	//clear the canvas
	myC.clearRect(0, 0, canWidth, canHeight);

	myC.textBaseline = "alphabetic";

	//find the current quest
	findQuest();

	//if the player's position is to the left of the center of the canvas
	if (player.x < canXC){
		//then the background must be as far left as possible
		bg.x = 0;
	}
	//if the player's position is to the right of the center of the canvas
	else if (player.x > canXC){
		//then the background must be as far right as possible
		bg.x = canWidth - zone[cZ].xDim;
	}
	//otherwise
	else{
		//the background needs to be as far across as the player is on the map
		bg.x = canXC - map.x;
	}

	//if the player's position is above the center of the canvas
	if (player.y < canYC){
		//then the background must be as far up as possible
		bg.y = 0;
	}
	//if the player's position is below the center of the canvas
	else if (player.y > canYC){
		//then the background must be as far down as possible
		bg.y = canHeight - zone[cZ].yDim + 160;
	}
	//otherwise
	else{
		//the background needs to be as far up/down as the player is on the map
		bg.y = canYC - map.y;
	}

	//load the image that relates to the current map zone then draw it
	bgImg.src = "images/bg" + cZ + ".png";
	myC.drawImage(bgImg, bg.x, bg.y);

    if ((cZ === 0 && currentQuest === 0 && currentQuestPoint < 2) || (cZ === 0 && currentQuest === 7)){
		var woofer = new Image();
		woofer.src = "images/woof.png";
		myC.drawImage(woofer, bg.x + (8 * 32), bg.y + (5 * 32));
    collisions[0][24].x = 8 * 32;
    collisions[0][24].y = 5 * 32;
    collisions[0][24].xDim = 1 * 32;
    collisions[0][24].yDim = 1 * 32;
    collisions[0][24].interactable = true;
	}
	else if (currentQuestPoint >= 2){
    collisions[0][24].x = 0;
    collisions[0][24].y = 0;
    collisions[0][24].xDim = 0;
    collisions[0][24].yDim = 0;
    collisions[0][24].interactable = false;
	}

  if (cZ === 3 && currentQuest < 6){
  var wizzy = new Image();
  wizzy.src = "images/overworldWizard.png";
  myC.drawImage(wizzy, bg.x + (55 * 32), bg.y + (32 * 32));
}
else if (currentQuest >= 6){
  collisions[3][8] = new collisionObj("castleWizard", 0, 0, 0, 0, false, "none");
}

if (cZ === 0 && currentQuest === 6){
  var wizzy = new Image();
  wizzy.src = "images/overworldWizard.png";
myC.drawImage(wizzy, bg.x + (9 * 32), bg.y + (5 * 32));
if (collisions[0].length = 25)
collisions[0][25] = new collisionObj("villageWizard", 9, 5, 1, 2, true, "quest", "Prepare to die", "lol", wizFunction);
}
else if (currentQuest > 6){
collisions[0][25] = new collisionObj("villageWizard", 0, 0, 0, 0, false, "none");
}

	//animating the character sprite
	if (!dir.left && !dir.up && !dir.right && !dir.down){
        if (facing.left){
            myC.drawImage(char, 2 * 32, 0 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else if (facing.up){
            myC.drawImage(char, 0 * 32, 2 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else if (facing.right){
            myC.drawImage(char, 0 * 32, 0 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else if (facing.down){
            myC.drawImage(char, 1 * 32, 1 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
  }
  else if(dir.left){
        if (spriteFrame < 15){
            myC.drawImage(char, 2 * 32, 0 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else{
            myC.drawImage(char, 0 * 32, 1 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
            if (spriteFrame > 30){
                spriteFrame = 0;
            }
        }
  }
  else if(dir.up){
        if (spriteFrame < 15){
            myC.drawImage(char, 0 * 32, 2 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else{
            myC.drawImage(char, 1 * 32, 2 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
            if (spriteFrame > 30){
                spriteFrame = 0;
            }
        }
  }
  else if(dir.right){
        if (spriteFrame < 15){
            myC.drawImage(char, 0 * 32, 0 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else{
            myC.drawImage(char, 1 * 32, 0 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
            if (spriteFrame > 30){
                spriteFrame = 0;
            }
        }
  }
  else{
        if (spriteFrame < 15){
            myC.drawImage(char, 1 * 32, 1 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
        }
        else{
            myC.drawImage(char, 2 * 32, 1 * 32, player.xDim, player.yDim, player.x, player.y, player.xDim, player.yDim);
            if (spriteFrame > 30){
                spriteFrame = 0;
            }
        }
  }

	//draw some variables to the canvas for debug/testing purposes
	myC.textAlign = "start";

	//if the player can't move (initially can't), then ask for the player's name
	if (!canMove && activeControls === 0 && currentQuest === 0 && currentQuestPoint === 0 && cZ === 0 && !invStop){
		setTextMessage("Enter your name:", name);
		drawTextMessage();
		showTextMessage = false;
		getName();
	}

	//process player movement
	if (canMove && !invStop){
		movement();
	}

	//if the player is in the field and is moving then...
  if ((cZ === 1 || cZ === 4  || cZ === 6) && ((dir.left === true) || (dir.right === true) || (dir.up === true) || (dir.down === true)) && (buffer > 120)){
		//if the randomly generated number is 1 (1/200 chance)
    if(getRandomInt(1, 200) == 1){
			//stop the player from moving and call the battle function
    	canMove = false;
      dir.left = false;
      dir.right = false;
      dir.up = false;
      dir.down = false;
			playMusic(8);
      turnBasedBattle(cZ);
      console.info(buffer);
      buffer = 0;
      canMove = true;
    }
  }

	//if the player presses the interaction key then call the interact function
	if (interactKey === true){
		interaction();
	}

	//if the player is in the field then increase the batttle buffer (to stop battles from occurring too frequently)
  if (cZ === 1 || cZ === 3 || cZ === 4 || cZ === 6){
      buffer++;
  }

	//increment the sprite buffer for animating the character sprite
  spriteFrame++;

	//if a message is ready to be shown
	if (showTextMessage && canMove && !(activeControls == 11 || activeControls == 12 || activeControls == 13 || activeControls == 14|| activeControls == 15|| activeControls == 16|| activeControls == 17)){
			//show the message
	    drawTextMessage();
			//stop the player from moving
			activeControls = 10;
	}

	if (activeControls == 11){
		drawBuyShop();
    canMove = false;
	} else if(activeControls == 12){
		drawSellShop();
		canMove = false;
	}	else if(activeControls == 13){
		playWheelOfFortune();
		canMove = false;
	}	else if(activeControls == 14){
		playFruitMachineMenu();
		canMove = false;
	}	else if(activeControls == 15){
		playRouletteTable();
		canMove = false;
	}	else if(activeControls == 16){
		drawHatShop();
		canMove = false;
	}	else if(activeControls == 17){
		drawArmouryShop();
		canMove = false;
	}

	//if the player isn't in a battle or reading a popup message then draw the next frame
	if ((activeControls === 0 || activeControls === 11 || activeControls === 12  || activeControls === 13 || activeControls === 14|| activeControls === 15|| activeControls === 16|| activeControls === 17) && !gameOver){
		window.requestAnimationFrame(drawCanvas);
	}
  else if(gameOver){
    myC.clearRect(0, 0, canWidth, canHeight);
    myC.fillStyle = "#000";
    myC.fillRect(0, 0, canWidth, canHeight);
    myC.fillStyle = "#FFF";
    myC.textAlign = "center";
    myC.textBaseline = "middle";
    myC.fillText("Game Over", canWidth / 2, canHeight / 2);
  }
}

//detect key presses
document.addEventListener("keydown", function(ev){

    if(canMove ){
		var key = ev.which;
		switch (key){
			case 65:
			dir.left = true;
			facing.left = true;
			if (facing.right){
				facing.right = false;
			}
			if (!dir.up){
				facing.up = false;
			}
			if (!dir.down){
				facing.down = false;
			}
			break;
			case 87:
			dir.up = true;
			facing.up = true;
			if (facing.down){
				facing.down = false;
			}
			if (!dir.left){
				facing.left = false;
			}
			if (!dir.right){
				facing.right = false;
			}
			break;
			case 68:
			dir.right = true;
			facing.right = true;
			if (facing.left){
				facing.left = false;
			}
			if (!dir.up){
				facing.up = false;
			}
			if (!dir.down){
				facing.down = false;
			}
			break;
			case 83:
			dir.down = true;
			facing.down = true;
			if (facing.up){
				facing.up = false;
			}
			if (!dir.left){
				facing.left = false;
			}
			if (!dir.right){
				facing.right = false;
			}
			break;
			case 27:
				settingsOrigin = 2;
				settings();
			break;
			case 69:
			if ((showTextMessage) && (activeControls === 10)){
				updateTextMessage();
				drawCanvas();
	    }
			else{
					interactKey = true;
			}
			break;
			case 81:
				Inventory();
			break;
		}
	}
});

//detect key releases
document.addEventListener("keyup", function(ev){
	if (canMove){
		var key = ev.which;
		switch (key){
			case 65:
			dir.left = false;
			break;
			case 87:
			dir.up = false;
			break;
			case 68:
			dir.right = false;
			break;
			case 83:
			dir.down = false;
			break;
			case 69:
			interactKey = false;
			break;
		}
	}
});

//process player movement
function movement(){
	var collision = {left: false, up: false, right: false, down: false};

	if(dir.left === true){
		for (var i = 0; i < collisions[cZ].length; i++){
			if (map.x == collisions[cZ][i].x + collisions[cZ][i].xDim && map.y < collisions[cZ][i].y + collisions[cZ][i].yDim && map.y + player.yDim > collisions[cZ][i].y){
				collision.left = true;
			}
		}

		if(!collision.left){
			if(player.x > canXC){
				player.x -= 4;
				map.x -= 4;
			}
			else if(map.x > canXC){
				map.x -= 4;
			}
			else if(map.x <= canXC & player.x > 0){
				player.x -= 4;
				map.x -= 4;
			}
			else{
				dir.left = false;
			}
		}

	}

	if(dir.up === true){
		for (var i = 0; i < collisions[cZ].length; i++){
			if (map.y == collisions[cZ][i].y + collisions[cZ][i].yDim && map.x < collisions[cZ][i].x + collisions[cZ][i].xDim && map.x + player.xDim > collisions[cZ][i].x){
				collision.up = true;
			}
		}

		if(!collision.up){
			if(player.y > canYC){
				player.y -= 4;
				map.y -= 4;
			}
			else if(map.y > canYC){
				map.y -= 4;
			}
			else if(map.y <= canYC & player.y > 0){
				player.y -= 4;
				map.y -= 4;
			}
			else{
				dir.up = false;
			}
		}
	}

	if(dir.right === true){
		for (var i = 0; i < collisions[cZ].length; i++){
			if (map.x + player.xDim == collisions[cZ][i].x && map.y < collisions[cZ][i].y + collisions[cZ][i].yDim && map.y + player.yDim > collisions[cZ][i].y){
				collision.right = true;
			}
		}

		if(!collision.right){
			if(player.x < canXC){
				player.x += 4;
				map.x += 4;
			}
			else if(map.x < (zone[cZ].xDim - (canWidth / 2) - (player.xDim / 2))){
				map.x += 4;
			}
			else if(map.x >= (zone[cZ].xDim - (canWidth / 2) - (player.xDim / 2)) & player.x < (canWidth - player.xDim)){
				player.x += 4;
				map.x += 4;
			}
			else{
				dir.right = false;
			}
		}
	}

	if(dir.down === true){
		for (var i = 0; i < collisions[cZ].length; i++){
			if (map.y + player.yDim == collisions[cZ][i].y && map.x < collisions[cZ][i].x + collisions[cZ][i].xDim && map.x + player.xDim > collisions[cZ][i].x){
				collision.down = true;
			}
		}

		if(!collision.down){
			if(player.y < canYC){
				player.y += 4;
				map.y += 4;
			}
			else if(map.y < (zone[cZ].yDim - (canWidth / 2) - (player.yDim / 2))){
				map.y += 4;
			}
			else if(map.y >= (zone[cZ].yDim - (canWidth / 2) - (player.yDim / 2)) & player.y < (canHeight - player.yDim)){
				player.y += 4;
				map.y += 4;
			}
			else{
				dir.down = false;
			}
		}
	}

		//moving between zones
		if (cZ === 0 && map.y == 29 * 32 && map.x >= 9 * 32 && map.x <= 12 * 32 && player.y == 19 * 32){
				cZ = 1;
				map.y = 1 * 32;
				bg.x = 0 * 32;
				bg.y = 0 * 32;
				player.y = 1 * 32;
				playMusic(cZ);
		}
		else if(cZ === 1 && map.y <= 0 && map.x >= 9 * 32 && map.x <= 12 * 32 && player.y === 0){
				if (currentQuest === 6 && currentQuestPoint === 0){
					canProgress();
					incrementQuest();
				}
				cZ = 0;
				map.y = 28 * 32;
				bg.x = 0 * 32;
				bg.y = -10 * 32;
				player.y = 18 * 32;
				playMusic(cZ);
		}
    else if(cZ == 1 && map.y == 49 * 32 && map.x >= 39 * 32 && map.x <= 44 * 32){
				cZ = 2;
				map.y = 1 * 32;
				bg.x = 0 * 32;
				bg.y = 0 * 32;
				player.y = 1 * 32;
				playMusic(cZ);
    }
    else if(cZ == 2 && map.y <= 0 && map.x >= 39 * 32 && map.x <= 44 * 32){
				cZ = 1;
				map.y = 48 * 32;
				bg.x = 0 * 32;
				bg.y = -10 * 32;
				player.y = 18 * 32;
				playMusic(cZ);
    }
    else if(cZ == 2 && map.y == 49 * 32 && map.x >= 39 * 32 && map.x <= 44 * 32){
				cZ = 3;
				map.y = 1 * 32;
				bg.x = 0 * 32;
				bg.y = -10 * 32;
				player.y = 1 * 32;
				playMusic(cZ);
    }
    else if(cZ == 3 && map.y <= 0 && map.x >= 39 * 32 && map.x <= 44 * 32){
				cZ = 2;
				map.y = 48 * 32;
				bg.x = 0 * 32;
				bg.y = -10 * 32;
				player.y = 18 * 32;
				playMusic(cZ);
    }
    else if(cZ == 1 && map.x == 89 * 32 && map.y >= 16 * 32 && map.y <= 19 * 32){
				if (currentQuest === 2 && currentQuestPoint === 0){
					canProgress();
					incrementQuest();
				}
				cZ = 4;
      	map.x = 1 * 32;
      	map.y += 19 * 32;
      	bg.x = 0 * 32;
				bg.y = -20 * 32;
      	player.x = 1 * 32;
      	player.y = map.y - 20 * 32;
				playMusic(cZ);
    }
    else if(cZ == 4 && map.x === 0 && map.y >= 35 * 32 && map.y <= 39 * 32){
				cZ = 1;
        map.x = 88 * 32;
        map.y -= 19 * 32;
        bg.x = -60 * 32;
				bg.y = 6.5 * 32;
        player.x = 28 * 32;
        player.y = 9.5 * 32;
				playMusic(cZ);
    }
		else if(cZ == 4 && map.x >= 31 * 32 && map.x <= 32 * 32 && map.y >= 5 * 32 && map.y <= 6 * 32){
        cZ = 5;
        map.x -= 16.5 * 32;
        map.y = 19 * 32;
        bg.x = 0;
        bg.y = 0;
        player.x = map.x;
        player.y = 18 * 32;
        playMusic(cZ);
    }
    else if(cZ == 5 && map.x >= 14 * 32 && map.x <= 15 * 32 && map.y == 20 * 32) {
        cZ = 4;
        map.x += 16.5 * 32;
        map.y = 7 * 32;
        bg.x = 17 * 32;
        bg.y = 0;
        player.x = 14.5 * 32;
        player.y = 7 * 32;
        playMusic(cZ);
		}
  	else if(cZ == 1 && map.x >= 3 * 32 && map.x <= 5 * 32 && map.y == 31 * 32) {
		 		if (currentQuest === 1 && currentQuestPoint === 1){
			 		collisions[3][8].signText1 = "got that staff yet?";
			 		collisions[3][8].signText2 = "lazy bastard";
			 		canProgress();
			 		incrementQuest();
		 		}
		 		else if(currentQuest === 4 && currentQuestPoint === 0){
			 		canProgress();
			 		incrementQuest();
		 		}
        cZ = 6;
        player.y = 18 * 32;
        player.x = 25 * 32 + (player.x - 3 * 32);
        bg.x = -30 * 32;
        bg.y = 0;
        map.x = 55 * 32 + (map.x - 3 * 32);
        map.y = 18 * 32;
        playMusic(cZ);
    }
    else if (cZ == 6 && map.x >= 55 * 32 && map.x <= 57 * 32 && map.y >= 604){
        cZ = 1;
        player.x = 3 * 32 + (player.x - 25 * 32);
        player.y = 9.5 * 32;
        bg.x = 0;
        bg.y = -21.875 * 32;
        map.x = 3 * 32 + (map.x - 55 * 32);
        map.y = 31.375 * 32;
        playMusic(cZ);
    }
    else if (cZ == 2 && map.x >= 84 * 32 && map.x <= 86 * 32 && map.y == 5 * 32){
        cZ = 7;
        player.x = 3 * 32 + (player.x - 24 * 32);
        player.y = 18.5 * 32;
        bg.x = 0;
        bg.y = 0;
        map.x = 3 * 32 + (map.x - 84 * 32);
        map.y = 18.5 * 32;
        playMusic(cZ);
    }
    else if (cZ == 7 && map.x >= 3 * 32 && map.x <= 5 * 32 && map.y == 19 * 32){
         cZ = 2;
        player.x = 24 * 32 + (player.x - 3 * 32);
        player.y = 5.625 * 32;
        bg.x = -60 * 32;
        bg.y = 0;
        map.x = 84 * 32 + (map.x - 3 * 32);
        map.y = 5.625 * 32;
        playMusic(cZ);
    }

}

//handling interaction with objects
function interaction(){
	var interact = false;
  var chest = false;
	var quest = false;
  var sign = false;
	var buyingShop = false;
	var sellingShop = false;
	var hatsShop = false;
	var equipsShop = false;
  var signText1;
	var signText2;
	var questFunc;
  var chestFunc;
  var whichChest;

	for (var i = 0; i < collisions[cZ].length; i++){
		if (map.x == collisions[cZ][i].x + collisions[cZ][i].xDim && map.y < collisions[cZ][i].y + collisions[cZ][i].yDim && map.y + player.yDim > collisions[cZ][i].y && facing.left && collisions[cZ][i].interactable === true){
			interact = true;
            if (collisions[cZ][i].interactType == "chest"){
              chest = true;
              signText1 = collisions[cZ][i].signText1;
              signText2 = collisions[cZ][i].signText2;
              chestFunc = collisions[cZ][i].func;
              whichChest = i;
            }
            else if (collisions[cZ][i].interactType == "sign"){
                sign = true;
                signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
            }
						else if (collisions[cZ][i].interactType == "quest"){
								quest = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
								questFunc = collisions[cZ][i].func;
						}
						else if (collisions[cZ][i].interactType == "buyShop"){
								buyingShop = true;
						}
						else if (collisions[cZ][i].interactType == "sellShop"){
								sellingShop = true;
						}
						else if (collisions[cZ][i].interactType == "hatShop"){
							hatsShop = true;
						}
						else if (collisions[cZ][i].interactType == "equipShop"){
							equipsShop = true;
						}
		}
	}

	for (var i = 0; i < collisions[cZ].length; i++){
		if (map.y == collisions[cZ][i].y + collisions[cZ][i].yDim && map.x < collisions[cZ][i].x + collisions[cZ][i].xDim && map.x + player.xDim > collisions[cZ][i].x && facing.up && collisions[cZ][i].interactable === true && collisions[cZ][i].interactable === true){
			interact = true;
            if (collisions[cZ][i].interactType == "chest"){
                chest = true;
                signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
                chestFunc = collisions[cZ][i].func;
                whichChest = i;
            }
            else if (collisions[cZ][i].interactType == "sign"){
                sign = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
						}
						else if (collisions[cZ][i].interactType == "quest"){
								quest = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
								questFunc = collisions[cZ][i].func;
						}
						else if (collisions[cZ][i].interactType == "buyShop"){
								buyingShop = true;
						}
						else if (collisions[cZ][i].interactType == "sellShop"){
								sellingShop = true;
						}
						else if (collisions[cZ][i].interactType == "hatShop"){
							hatsShop = true;
						}
						else if (collisions[cZ][i].interactType == "equipShop"){
							equipsShop = true;
						}
		}
	}

	for (var i = 0; i < collisions[cZ].length; i++){
		if (map.x + player.xDim == collisions[cZ][i].x && map.y < collisions[cZ][i].y + collisions[cZ][i].yDim && map.y + player.yDim > collisions[cZ][i].y && facing.right && collisions[cZ][i].interactable === true){
			interact = true;
            if (collisions[cZ][i].interactType == "chest"){
              chest = true;
              signText1 = collisions[cZ][i].signText1;
              signText2 = collisions[cZ][i].signText2;
              chestFunc = collisions[cZ][i].func;
              whichChest = i;
            }
            else if (collisions[cZ][i].interactType == "sign"){
                sign = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
						}
						else if (collisions[cZ][i].interactType == "quest"){
								quest = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
								questFunc = collisions[cZ][i].func;
						}
						else if (collisions[cZ][i].interactType == "buyShop"){
								buyingShop = true;
						}
						else if (collisions[cZ][i].interactType == "sellShop"){
								sellingShop = true;
						}
						else if (collisions[cZ][i].interactType == "hatShop"){
							hatsShop = true;
						}
						else if (collisions[cZ][i].interactType == "equipShop"){
							equipsShop = true;
						}
		}
	}

	for (var i = 0; i < collisions[cZ].length; i++){
		if (map.y + player.yDim == collisions[cZ][i].y && map.x < collisions[cZ][i].x + collisions[cZ][i].xDim && map.x + player.xDim > collisions[cZ][i].x && facing.down && collisions[cZ][i].interactable === true){
			interact = true;
            if (collisions[cZ][i].interactType == "chest"){
              chest = true;
              signText1 = collisions[cZ][i].signText1;
              signText2 = collisions[cZ][i].signText2;
              chestFunc = collisions[cZ][i].func;
              whichChest = i;
            }
            else if (collisions[cZ][i].interactType == "sign"){
                sign = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
						}
						else if (collisions[cZ][i].interactType == "quest"){
								quest = true;
								signText1 = collisions[cZ][i].signText1;
								signText2 = collisions[cZ][i].signText2;
								questFunc = collisions[cZ][i].func;
						}
						else if (collisions[cZ][i].interactType == "buyShop"){
								buyingShop = true;
						}
						else if (collisions[cZ][i].interactType == "sellShop"){
								sellingShop = true;
						}
						else if (collisions[cZ][i].interactType == "hatShop"){
							hatsShop = true;
						}
						else if (collisions[cZ][i].interactType == "equipShop"){
							equipsShop = true;
						}
		}
	}

	if(interact){
        if (chest === true){
						chestFunc();
            setTextMessage("You found " + foundGold + " gold", "and " + foundPotionAmount + " " + inventoryNames[foundPotion]);
            collisions[cZ][whichChest].interactable = false;
        }
        else if (sign === true){
	          setTextMessage(signText1, signText2);
        }
				else if (quest === true){
					setTextMessage(signText1, signText2);
					questFunc();
				}
				else if (buyingShop === true){
						buyShop();
				}
				else if (sellingShop === true){
						sellShop();
				}
				else if (hatsShop === true){
            hatShop();
				}
				else if (equipsShop === true){
            armouryShop();
				}
		dir.left = false;
		dir.up = false;
		dir.right = false;
		dir.down = false;
	}

	interactKey = false;
}

//gets the player's name
function getName(){
	var input = "";
	var key = null;
	keyPressed = false;
	document.addEventListener("keypress", function(ev){
	key = ev.which;
	if(!keyPressed){switch (key){
		case 65:
		input = "A";
		keyPressed = true;
		break;
		case 66:
		input = "B";
		keyPressed = true;
		break;
		case 67:
		input = "C";
		keyPressed = true;
		break;
		case 68:
		input = "D";
		keyPressed = true;
		break;
		case 69:
		input = "E";
		keyPressed = true;
		break;
		case 70:
		input = "F";
		keyPressed = true;
		break;
		case 71:
		input = "G";
		keyPressed = true;
		break;
		case 72:
		input = "H";
		keyPressed = true;
		break;
		case 73:
		input = "I";
		keyPressed = true;
		break;
		case 74:
		input = "J";
		keyPressed = true;
		break;
		case 75:
		input = "K";
		keyPressed = true;
		break;
		case 76:
		input = "L";
		keyPressed = true;
		break;
		case 77:
		input = "M";
		keyPressed = true;
		break;
		case 78:
		input = "N";
		keyPressed = true;
		break;
		case 79:
		input = "O";
		keyPressed = true;
		break;
		case 80:
		input = "P";
		keyPressed = true;
		break;
		case 81:
		input = "Q";
		keyPressed = true;
		break;
		case 82:
		input = "R";
		keyPressed = true;
		break;
		case 83:
		input = "S";
		keyPressed = true;
		break;
		case 84:
		input = "T";
		keyPressed = true;
		break;
		case 85:
		input = "U";
		keyPressed = true;
		break;
		case 86:
		input = "V";
		keyPressed = true;
		break;
		case 87:
		input = "W";
		keyPressed = true;
		break;
		case 88:
		input = "X";
		keyPressed = true;
		break;
		case 89:
		input = "Y";
		keyPressed = true;
		break;
		case 90:
		input = "Z";
		keyPressed = true;
		break;
		case 97:
		input = "a";
		keyPressed = true;
		break;
		case 98:
		input = "b";
		keyPressed = true;
		break;
		case 99:
		input = "c";
		keyPressed = true;
		break;
		case 100:
		input = "d";
		keyPressed = true;
		break;
		case 101:
		input = "e";
		keyPressed = true;
		break;
		case 102:
		input = "f";
		keyPressed = true;
		break;
		case 103:
		input = "g";
		keyPressed = true;
		break;
		case 104:
		input = "h";
		keyPressed = true;
		break;
		case 105:
		input = "i";
		keyPressed = true;
		break;
		case 106:
		input = "j";
		keyPressed = true;
		break;
		case 107:
		input = "k";
		keyPressed = true;
		break;
		case 108:
		input = "l";
		keyPressed = true;
		break;
		case 109:
		input = "m";
		keyPressed = true;
		break;
		case 110:
		input = "n";
		keyPressed = true;
		break;
		case 111:
		input = "o";
		keyPressed = true;
		break;
		case 112:
		input = "p";
		keyPressed = true;
		break;
		case 113:
		input = "q";
		keyPressed = true;
		break;
		case 114:
		input = "r";
		keyPressed = true;
		break;
		case 115:
		input = "s";
		keyPressed = true;
		break;
		case 116:
		input = "t";
		keyPressed = true;
		break;
		case 117:
		input = "u";
		keyPressed = true;
		break;
		case 118:
		input = "v";
		keyPressed = true;
		break;
		case 119:
		input = "w";
		keyPressed = true;
		break;
		case 120:
		input = "x";
		keyPressed = true;
		break;
		case 121:
		input = "y";
		keyPressed = true;
		break;
		case 122:
		input = "z";
		keyPressed = true;
		break;
		case null:
		keyPressed = false;
		break;
	}
	if(!canMove && name.length < 20){
		name = name + input;
	}
	key = null;
	}});
	document.addEventListener("keydown", function(ev){
		key = ev.which;
		if (!keyPressed){
		switch (key){
			case 13:
			if (name != ""){
				canMove = true;
				showTextMessage = false;
				activeControls = 0;
				keyPressed = true;
			}
			break;
			case 8:
			backspace = true;
			keyPressed = true;
			input = "";
			break;
		}}
		if(backspace){
			name = name.slice(0, -1);
			backspace = false;
			key = null;
		}
	});
	keyPressed = false;
}
