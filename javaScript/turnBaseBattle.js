var myCanvas = document.getElementById('myCanvas');
var context = myCanvas.getContext('2d');

//*******************************************FUNCTIONS**********************************
function getRandomInt(min, max){
	//gets random integer value inclusive between the min and max parameters
	return Math.floor(Math.random()*(max-min+1)) + min
}

function initiateBattleStats(battleScenario){
	determineMonster(battleScenario);

	//player battle stats
	playerTotalPhyAttack = phyAttack + weaponPhysDamage[equippedWeapon]; //adds player stats to their current equipment stats
	playerTotalMagAttack = magAttack + weaponMagicDamage[equippedWeapon];
	hitChance = weaponAccuracy[equippedWeapon];
	playerTotalPhyDefence = phyDefence + chestPhysDef[equippedChestpiece] + helmetPhysDef[equippedHelmet] +  gauntletPhysDef[equippedGaunlet]  + bootPhysDef[equippedBoots];
	playerTotalMagDefence = magDefence + chestMagicDef[equippedChestpiece] + helmetMagicDef[equippedHelmet] +  gauntletMagicDef[equippedGaunlet]  + bootMagicDef[equippedBoots];

	ironPotionEffect = 1; //sets default mulitplyier
	berserkPotionEffect = 1; //sets default mulitplyier
	smokeBombEffect =	1;//sets default mulitplyier
}


//********************************PLAYER ACTIONS******************************************
function playerNormalAttack(){
	var attackStrength = playerTotalPhyAttack;
	if (getRandomInt(1+luck,50)>50){
		setMessage("Critical Hit!","Your attack deals extra damage!");
		attackStrength = attackStrength*2;
	}
	return attackStrength;
}

function runAway(){
	if((enemyName == "Rabid Dog")||(enemyName == "Goblin Boss")||(enemyName == "Spider Queen")||(enemyName == "Wizard")||(enemyName == "Demon Lord Grandma!!!")){
			phaseHolder = 0;
			setMessage("Escape Attempt Fail!", "You can't run from bosses");
	}
	else{
		if (getRandomInt(1+luck,50) > 30){
			phaseHolder = 0;
			setMessage("Escape Attempt Success!", " ");
		}
		else{
			phaseHolder = 4;
			setMessage("Escape Attempt Failed","Now its " + enemyName + "'s turn!");
		}
	}
}

//*********************CALCULATIONS*************************************
function calculateDamageDealt(attackPower,relevantDef){
	//calculates and returns damage after subtracting the defence stat of the oppenent
	var damageDealt = attackPower - relevantDef;
	if (damageDealt <= 0){  //prevents passing negative damage that would effectively heal the openent
		damageDealt = getRandomInt(1,2);	//applies chip damage if no damage would be dealt
	}

	return damageDealt;
}

function calculatedamageHealed(heal){
	var damageHealed = heal;
	if ((heal + currentHP) > maxHP){
		damageHealed = maxHP - currentHP;
			}
	return damageHealed;
}

function calculateEnemyHeal(heal){
	var damageHealed = heal;
	if ((heal + enemyHP) > enemyMaxHP){
		damageHealed = enemyMaxHP - enemyHP;
			}
	return damageHealed;
}

function calculateMagicRecover(heal){
	var magicRecover = heal;
	if ((heal + currentMP) > maxMP){
		magicRecover = maxMP - currentMP;
			}
	return magicRecover;
}

//*********************END BATTLE FUNCTIONS************************************


function wasEnemyDefeated(){
	//checks if the enemy was defeated, if defeated, game gives the play exp for winning and returns them to the main menu of the demo.
	if (enemyHP <= 0){
		phaseHolder = 0;
		setMessage("You defeated " + enemyName + "!","You gained " + expDrop + " exp and " + goldDrop + " gold");
		enemyDefeatMessage();
		playerGainExpereince();
		getItemGoldDrops();
		phaseHolder = 0;
		drawCanvas();
	}
	else{
		phaseHolder = 4;//enemies turn
	}
}


function didPlayerLose(){
	//checks if the enemy was defeated, if defeated, game gives the play exp for winning and returns them to the main menu of the demo.
	if (currentHP <= 0){
		phaseHolder = 0;
		setMessage("You lost in battle and lost half your gold!","Restart from the village!");
        gold = Math.floor(gold/2);
        player.x = 28 * 32
        player.y = 1 * 32
        bgX = -30 * 32
        bgY = 0
        map.x = 58 * 32
        map.y = 1 * 32
        cZ = 0;
        currentHP = maxHP;
        currentMP = maxMP;
				canMove = true;
				showTextMessage = false;
				activeControls = 0;
				drawCanvas();
	}
	else{
		phaseHolder = 1; //switches back to the player's turn
		setMessage("It is now your turn again"," ");
		combatCursorPos = 0;
	}
}


//**************************DRAW/GUI FUNCTIONs******************************
function drawHealthBar(posX, posY, currentStat, maxStat, colour){
	var percentFill;
	percentFill = Math.floor(currentStat/maxStat*100);
	if (percentFill < 0){
		percentFill = 0;
	}
	context.fillStyle = "#FFF";
	context.fillRect(posX+4, posY, 104, 4 ); //top
	context.fillRect(posX+4, posY + 28, 104, 4 ); //bot
	context.fillRect(posX, posY+ 4, 4,24); //left
	context.fillRect(posX+108, posY + 4 , 4,24); //right
    context.fillStyle = colour;
	context.fillRect(posX+6, posY+6, percentFill,20); //how much the bar is filled
}


function selectBattleBackground(){
	switch(cZ){
		case 1:
			battleBackground.src = "images/field.png";
			break;
		case 3:
			battleBackground.src = "images/castleBattle.png";
			break;
		case 4:
			battleBackground.src = "images/goblinCampBattle.png";
			break;
		case 5:
			battleBackground.src = "images/cave.png";
			break;
		case 6:
			battleBackground.src = "images/cave.png";
			break;
		default:
			battleBackground.src = "images/field.png";
			break;
	}
}

function drawBaseImage(){
	context.drawImage(battleBackground,0,0);
	context.drawImage(messageMenu,0,0);
	drawHealthBar(424, 50, enemyHP, enemyMaxHP, "#F00");
	context.drawImage(enemyImage,330,150);
	context.font = "24px gameFont";
	context.fillStyle = '#FFF';
	context.textAlign = "center";
	context.fillText(enemyName,480,130);
	context.fillStyle = '#FFF';

	//draw players HP and MP
	context.textAlign="left";
    context.font = "20px gameFont";
    context.fillText(currentHP + "|" + maxHP + "HP",143,393	);
	context.fillText(currentMP + "|" + maxMP + "MP",143,433);
	drawHealthBar(25, 365, currentHP, maxHP, "#0F0");
	drawHealthBar(25, 405, currentMP, maxMP, "#00F");

}

function drawCombatMenu(){

	drawBaseImage();
	context.font = "24px gameFont";
	context.fillStyle = '#FFF';
	context.fillText("Attack",420,528);
	context.fillText("Use Items",420,600);
	context.fillText("Magic",720,528);
	context.fillText("Run Away",720,600);
	switch(combatCursorPos){
		case 1:
			context.fillText((">"  ),396,528);
			break;
		case 2:
			context.fillText((">"  ),696,528);
			break;
		case 3:
			context.fillText((">"  ),396,600);
			break;
		case 4:
			context.fillText((">" ),696,600);
			break;
	}
}

function drawMagicMenu(){
	drawBaseImage();
	context.font = "20px gameFont";
	context.fillStyle = '#FFF';
	switch (playerClass){
				case "warrior":
				if (level >= 2){
					context.fillText("Flame S. 3MP",70,528);
				}
				if (level >= 3){
					context.fillText("Sheer W. 5MP",380,528);
				}
				if (level >= 5){
					context.fillText("Tornado S. 15MP",680,528);
				}
				if (level >= 10){
					context.fillText(("Bulk Up 30MP"),70,600);
				}
				if (level >= 15){
					context.fillText(("Nova S 50MP"),375,600);
				}
				break;

			case "mage":
				if (level >= 2){
					context.fillText("Fire 			3MP",70,528);
				}
				if (level >= 3){
					context.fillText("Heal		5MP",380,528);
				}
				if (level >= 5){
					context.fillText("Thunder 15MP",680,528);
				}
				if (level >= 10){
					context.fillText(("Drain H. 30MP"),70,600);
				}
				if (level >= 15){
					context.fillText(("G Nova 50MP"),375,600);
				}
				break;

			case "rogue":
				if (level >= 2){
					context.fillText("Steal		3MP",70,528);
				}
				if (level >= 3){
					context.fillText("Life Steal 5MP",380,528);
				}
				if (level >= 5){
					context.fillText("Cash N Grab 15MP",680,528);
				}
				if (level >= 10){
					context.fillText("Backstab 30MP",70,600);
				}
				if (level >= 15){
					context.fillText("Nova B 50MP",375,600);
				}
				break;

		}

	context.fillText("return",680,600);


	switch(combatCursorPos){
		case 1:
            context.fillText((">" ),24,528);
			break;
		case 2:
            context.fillText((">" ),346,528);
			break;
		case 3:
            context.fillText((">" ),656,528);
			break;
		case 4:
            context.fillText((">" ),24,600);
			break;
		case 5:
            context.fillText((">" ),346,600);
			break;
		case 6:
            context.fillText((">" ),656,600);
			break;
	}
}

function drawItemMenu(){
	drawBaseImage();
	context.font = "20px gameFont";
	context.fillStyle = '#FFF';
	context.fillText(("Health P.X" + inventory[1]),48,528);
	context.fillText(("Ironskin P.X" + inventory[4]),370,528);
	context.fillText(("Berserk P.X" + inventory[5]),680,528);
	context.fillText(("Magic P.X" + inventory[2]),48,600);
	context.fillText(("Smoke B.X" + inventory[3]),370,600);
	context.fillText("return",680,600);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,24,528);
			break;
		case 2:
            context.fillText((">" ),346,528);
			break;
		case 3:
            context.fillText((">" ),656,528);
            break;
		case 4:
            context.fillText((">" ),24,600);
			break;
		case 5:
            context.fillText((">" ),346,600);
			break;
		case 6:
            context.fillText((">" ),656,600);
			break;
	}
}

function displayMessage(line1, line2){
	drawBaseImage();
	context.font = "24px gameFont";
	context.fillStyle = '#FFF';
	context.fillText(line1,30,528);
	context.fillText(line2,30,600);
}

function drawMonsterMessage(){
	drawBaseImage();
	context.font = "24px gameFont";
	context.fillStyle = '#FFF';
	context.fillText("It is the enemy's turn,",30,528);
	context.fillText("press 'interact' to continue!",30,600);
}

function drawCombatCanvas(){
	context.clearRect(0,0,960,640);
	switch(activeControls){
		case 1: //main combat menu
			drawCombatMenu();
			break;
		case 2: //magic menu
			drawMagicMenu();
			break;
		case 3: //item menu
			drawItemMenu();
			break;
		case 4: //monster message
			drawMonsterMessage();
			break;
		case 5://displayMessage
			displayMessage(messageLine1,messageLine2);
			break;
	}

	if (activeControls != 0){
		window.requestAnimationFrame(drawCombatCanvas);
	}
	else{
		context.clearRect(0,0,960,640);
	}
}

//*******************************************MENUS**************************************

function combatMenu(combatInput){
	switch (combatInput){
		case 1:    //keypress = a  player attacks enemy with weapon
			setMessage("You attack with your equipped weapon!", " ");
			if(getRandomInt(1,100)>hitChance){
				setMessage("Attack Missed!", " ");
			}else{
				enemyHP = enemyHP - calculateDamageDealt(Math.floor(playerNormalAttack()*berserkPotionEffect),enemyPhyDefence);
			}
			wasEnemyDefeated();
			break;
		case 2:    //keypress = m  player opens magic menu
			//context.drawImage(magicMenu,0,0);
			combatCursorPos = 0;
			activeControls = 2;
			break;
		case 3:    //keypress = i  player opens item menu
			//.drawImage(itemMenu,0,0);
			combatCursorPos = 0;
			activeControls = 3;
			break;
		case 4:    //keypress = r  players attempts to run away from the fight
		runAway();
		break;
	}
}

function updateMessage(){
	messageLine1 = line1Queue.shift();
	messageLine2 = line2Queue.shift();
	if (queuePosition > 0){
		queuePosition = queuePosition - 1;
	}
	else{
		activeControls = phaseHolder;
		if (activeControls == 0){
			stopAllSounds();
			playField();
			drawCanvas(); //draws main game
		}
	}
}

function setMessage(line1, line2){
	line1Queue.push(line1);
	line2Queue.push(line2);
	queuePosition = queuePosition + 1;
	if ((activeControls != 5) && (queuePosition == 1)){
		updateMessage();
		activeControls = 5; //takes controls away from player
	}
}

//*******************************************MAIN PROGRAM**********************************

//******************************************DECLARED VARIABLES*********************************
//global variable declarations
var playerTotalPhyAttack;  		//players stats + equipment values for PhyAttack
var playerTotalMagAttack;		//players stats + equipment values for MagAttack
var playerTotalPhyDefence;     //players stats + equipment values for PhyDefence
var playerTotalMagDefence;    //players stats + equipment values for MagDefence
var hitChance;

var ironPotionEffect = 1;
var berserkPotionEffect = 1;
var smokeBombEffect =	1;

var enemyName;			//name of the enemy
var enemyMaxHP; 		//max health is the total health the enemy can currently have
var enemyHP; 			//current health is health after the enemy takes damage
var enemyPhyAttack 		//physical attack strength used when calculating damage dealt to an enemy
var enemyPhyDefence; 	//used when calculating physical damage taken
var enemyMagAttack;   	//used when calculating magic damage dealt to an enemy
var enemyMagDefence; 	//used when calculating magic damage taken
var expDrop;		//experience points the player gains for defeating an enemy
var itemDrop;		//determines the item the enemy will drop
var AI;				//determines enemy attack pattern
var enemyImage = new Image();
var goldDrop;

var messageMenu = new Image();
messageMenu.src = "images/messageHealth.png";

var battleBackground = new Image();


var combatCursorPos = 1;

var combatButtonHeight = 60;
var combatButtonWidth = 306;
var buttonXCombat = [19,327,636,19,327,636];
var buttonYCombat = [481,481,481,545,545,545];

var messageLine1;
var messageLine2;
var messageDisplayTime = 2; //display message for x secounds
var phaseHolder = 1;
var line1Queue = [];
var line2Queue = [];
var queuePosition;

//******************************************FUNCTION CALL*********************************

function turnBasedBattle(battleScenario){
	//the main function that will be called that handles turns and control of the battle
	activeControls = 1;
	combatCursorPos = 0;
	phaseHolder = 1;
	selectBattleBackground();
	initiateBattleStats(battleScenario);
	drawCombatCanvas();
	queuePosition = 0;
	setMessage("A " + enemyName + " appeared!", "Time to fight for your life!");
	enemyOpeningMessage();
	myCanvas.addEventListener("mouseup", function (ev){
		switch (activeControls){
			case 1: //Main Combat Menu
				combatMenu(combatCursorPos);
				break;

			case 2: //Magic Menu
				magicMenu(combatCursorPos);
				break;

			case 3: //Items Menu
				itemMenu(combatCursorPos);
				break;

			case 4: //Enemies turn
				enemyTurn(6);
				break;
			case 11:
				buyShopMenu(combatCursorPos);
				break;
			case 5:
				updateMessage();
				break;
			case 12:
				sellShopMenu(combatCursorPos);
				break;
			case 11:
				buyShopMenu(combatCursorPos);
				break;
			case 5:
				updateMessage();
				break;
			case 12:
				sellShopMenu(combatCursorPos);
				break;
			case 13:
				wheelOfFortuneMenu(combatCursorPos);
				break;
			case 14:
				fruitMachineMenu(combatCursorPos);
				break;
			case 15:
				rouletteTableMenu(combatCursorPos);
				break;
			case 16:
				hatShopMenu(combatCursorPos);
				break;
			case 17:
				armouryInteraction(combatCursorPos);
				break;
		}
	});
}


	myCanvas.addEventListener("mousemove", function (ev){
		mouseX = ev.pageX - this.offsetLeft;
    	mouseY = ev.pageY - this.offsetTop; //gets the mouse pos X and Y
    	for(i=0; i < buttonXCombat.length; i++){
    		if(((mouseX >= buttonXCombat[i]) && mouseX <= (buttonXCombat[i] + combatButtonWidth))&&((mouseY >= buttonYCombat[i]) && mouseY <= (buttonYCombat[i] + combatButtonHeight))){
	    		if (activeControls == 1){
	    			switch(i){
	    				case 1:
	    					combatCursorPos = 1;
	    					break;
	    				case 2:
	    					combatCursorPos = 2;
	    					break;
	    				case 4:
	    					combatCursorPos = 3;
	    					break;
	    				case 5:
	    					combatCursorPos = 4;
	    					break;
	    			}
	    		}
	    		else{
	    			if(activeControls != 0 || activeControls != 4 || activeControls != 10 || activeControls != 5){
	    				combatCursorPos = i + 1;
	    			}
	    		}
	    	}
    	}
	});

	document.addEventListener("keydown", function(ev){
		var keyCombat = ev.which;
		var passKey;
		switch (keyCombat){
			case 87: //w = up
				if(activeControls == 1){
					switch (combatCursorPos){
						case 3:
							combatCursorPos = 1;
							break;
						case 4:
							combatCursorPos = 2;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				else if(activeControls != 0 || activeControls != 4 || activeControls != 10 || activeControls != 5){
					switch (combatCursorPos){
						case 4:
							combatCursorPos = 1;
							break;
						case 5:
							combatCursorPos = 2;
							break;
						case 6:
							combatCursorPos = 3;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				break;

			case 65: //a = left
				if(activeControls == 1){
					switch (combatCursorPos){
						case 2:
							combatCursorPos = 1;
							break;
						case 4:
							combatCursorPos = 3;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				else if(activeControls != 0 || activeControls != 4 || activeControls != 10 || activeControls != 5){
					switch (combatCursorPos){
						case 2:
							combatCursorPos = 1;
							break;
						case 3:
							combatCursorPos = 2;
							break;
						case 5:
							combatCursorPos = 4;
							break;
						case 6:
							combatCursorPos = 5;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				break;

			case 83: //s = down
				if(activeControls == 1){
					switch (combatCursorPos){
						case 1:
							combatCursorPos = 3;
							break;
						case 2:
							combatCursorPos = 4;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				else if(activeControls != 0 || activeControls != 4 || activeControls != 10 || activeControls != 5){
					switch (combatCursorPos){
						case 1:
							combatCursorPos = 4;
							break;
						case 2:
							combatCursorPos = 5;
							break;
						case 3:
							combatCursorPos = 6;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				break;

			case 68: //d - right
				if(activeControls == 1){
					switch (combatCursorPos){
						case 1:
							combatCursorPos = 2;
							break;
						case 3:
							combatCursorPos = 4;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				else if(activeControls != 0 || activeControls != 4 || activeControls != 10 || activeControls != 5){
					switch (combatCursorPos){
						case 1:
							combatCursorPos = 2;
							break;
						case 2:
							combatCursorPos = 3;
							break;
						case 4:
							combatCursorPos = 5;
							break;
						case 5:
							combatCursorPos = 6;
							break;
						default:
							combatCursorPos = 1;
							break;
					}
				}
				break;

			case 69: //e = interact
				switch (activeControls){
					case 1: //Main Combat Menu
						passKey = combatCursorPos;
						combatCursorPos = 1;
						combatMenu(passKey);
					break;

					case 2: //Magic Menu
						passKey = combatCursorPos;
						combatCursorPos = 1;
						magicMenu(passKey);
					break;

					case 3: //Items Menu
						passKey = combatCursorPos;
						combatCursorPos = 1;
						itemMenu(passKey);
					break;

					case 4: //Enemies turn
						combatCursorPos = 1;
						enemyTurn(6);
					break;
					case 11:
						buyShopMenu(combatCursorPos);
						break;
					case 5:
						updateMessage();
						break;
					case 12:
							sellShopMenu(combatCursorPos);
							break;
					case 13:
						wheelOfFortuneMenu(combatCursorPos);
						break;
					case 14:
						fruitMachineMenu(combatCursorPos);
						break;
					case 15:
						rouletteTableMenu(combatCursorPos);
						break;
					case 16:
						hatShopMenu(combatCursorPos);
						break;
					case 17:
						armouryInteraction(combatCursorPos);
						break;
				}
			break;
		}
	});
