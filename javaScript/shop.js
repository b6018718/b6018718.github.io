console.info("Shop loaded");

var messageLong = new Image();
messageLong.src = "images/messageLong.png";

//draws message box with transparent background, requires passing of two strings
function buyShop(){
	combatCursorPos = 1;
    activeControls = 11;
}


//draws message box with transparent ba0ckground,
function drawBuyShop(){
	myC.drawImage(messageMenu,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText(("Health P.X" + inventory[1]),70,528);
	myC.fillText(("Ironskin P.X" + inventory[4]),370,528);
	myC.fillText(("Berserk P.X" + inventory[5]),680,528);
	myC.fillText(("Magic P.X" + inventory[2]),70,600);
	myC.fillText(("Smoke B.X" + inventory[3]),370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Item cost: " + inventoryItemCost[1] ,30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Item cost: " + inventoryItemCost[4] ,30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Item cost: " +  inventoryItemCost[5] ,30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Item cost: " + inventoryItemCost[2] ,30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Item cost: " + inventoryItemCost[3] ,30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function buyItem(item){
	if (gold >= inventoryItemCost[item]){
		gold = gold - inventoryItemCost[item];
		inventory[item]++;
	}
}

function buyShopMenu(cursor){ //inside turn based battle controls
	switch(cursor){
		case 1:
			buyItem(1);
			break;
		case 2:
			buyItem(4);
			break;
		case 3:
			buyItem(5);
			break;
		case 4:
			buyItem(2);
			break;
		case 5:
			buyItem(3);
			break;
		case 6:
      canMove = true;
			activeControls = 0;
		break;
	}
}

function sellShop(){
	combatCursorPos = 1;
    activeControls = 12;
}

function sellItem(item){
	if (1 <= inventory[item]){
		gold = gold + Math.floor(inventoryItemCost[item]/4*3);
		inventory[item]--;
	}
}

function sellShopMenu(cursor){ //inside turn based battle controls
	switch(cursor){
		case 1:
			sellItem(1);
			break;
		case 2:
			sellItem(4);
			break;
		case 3:
			sellItem(5);
			break;
		case 4:
			sellItem(2);
			break;
		case 5:
			sellItem(3);
			break;
		case 6:
            canMove = true;
			activeControls = 0;
			break;
	}
}

function drawSellShop(){
	myC.drawImage(messageMenu,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText(("Health P.X" + inventory[1]),70,528);
	myC.fillText(("Ironskin P.X" + inventory[4]),370,528);
	myC.fillText(("Berserk P.X" + inventory[5]),680,528);
	myC.fillText(("Magic P.X" + inventory[2]),70,600);
	myC.fillText(("Smoke B.X" + inventory[3]),370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Sale price: " + Math.floor(inventoryItemCost[1]/4*3) ,30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Sale price: " + Math.floor(inventoryItemCost[4]/4*3) ,30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Sale price: " +  Math.floor(inventoryItemCost[5]/4*3) ,30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Sale price: " + Math.floor(inventoryItemCost[2]/4*3) ,30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Sale price: " + Math.floor(inventoryItemCost[3]/4*3) ,30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}


function hatShop(){
	combatCursorPos = 1;
	activeControls = 16;
}

function drawHatShop(){
	myC.drawImage(messageMenu,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Red",70,528);
	myC.fillText("Shadow",370,528);
	myC.fillText("Gold",680,528);
	myC.fillText("Cerulean",70,600);
	myC.fillText("Rainbow",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	myC.fillText("Item cost: 3000",30,433);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
			break;
		case 2:
            context.fillText(">" ,346,528);
			break;
		case 3:
            context.fillText(">" ,656,528);
            break;
		case 4:
            context.fillText(">" ,46,600);
			break;
		case 5:
            context.fillText(">" ,346,600);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function hatShopMenu(cursor){
	switch(cursor){
		case 1:
			buyHatShop("red");
			break;
		case 2:
			buyHatShop("shadow");
			break;
		case 3:
			buyHatShop("gold");
			break;
		case 4:
			buyHatShop("cerulean");
			break;
		case 5:
			buyHatShop("rainbow");
			break;
		case 6:
			canMove = true;
			activeControls = 0;
			break;

	}
}


function buyHatShop(colour){
	var hatCost = 3000;
	switch (colour){
		case "red":
			if(gold >= hatCost){
				canProgress();
				incrementQuest();
				setTextMessage("You bought the red","hat you needed!");
			}else {
				setTextMessage("Come back when you ", "have " + hatCost  + " gold");
				setTextMessage("And be quick, these", "hats sell like hot cakes");
			}
			break;
		case "shadow":
			if(gold >= hatCost){
				canProgress();
				incrementQuest();
				setTextMessage("You bought the shadow","hat you needed!");
			}else {
				setTextMessage("Come back when you ", "have " + hatCost  + " gold");
				setTextMessage("And be quick, these", "hats sell like hot cakes");
			}
			break;
		case "gold":
			if(gold >= hatCost){
				canProgress();
				incrementQuest();
				setTextMessage("You bought the gold","hat you needed!");
			}else {
				setTextMessage("Come back when you ", "have " + hatCost  + " gold");
				setTextMessage("And be quick, these", "hats sell like hot cakes");
			}
			break;
		case "cerulean":
			if(gold >= hatCost){
				canProgress();
				incrementQuest();
				setTextMessage("You bought the cerulean","hat you needed!");
			}else {
				setTextMessage("Come back when you ", "have " + hatCost  + " gold");
				setTextMessage("And be quick, these", "hats sell like hot cakes");
			}
			break;
		case "rainbow":
			if(gold >= hatCost){
				canProgress();
				incrementQuest();
				setTextMessage("You bought the rainbow","hat you needed!");
			}else
			{
				setTextMessage("Come back when you ", "have " + hatCost  + " gold");
				setTextMessage("And be quick, these", "hats sell like hot cakes");
			}
			break;
	}
    canMove = true;
}

var armouryPos = 1;

function armouryShop(){
	armouryPos = 1;
	activeControls =17;
	combatCursorPos = 1;
}

function armouryInteraction(cursor){
	switch(armouryPos){
		case 1:
			armouryMainMenu(cursor);
			break;
		case 2:
			armouryWeapon(cursor);
			break;
		case 3:
			armouryHelmet(cursor);
			break;
		case 4:
			armourGaunlets(cursor);
			break;
		case 5:
			armouryChestpiece(cursor);
			break;
		case 6:
			armouryBoots(cursor);
			break;
	}
}

function drawArmouryShop(){
	switch(armouryPos){
		case 1:
			drawArmouryMainMenu();
			break;
		case 2:
			drawArmouryWeapons();
			break;
		case 3:
			drawArmouryHelmet();
			break;
		case 4:
			drawArmouryGaunlets();
			break;
		case 5:
			drawArmouryChest();
			break;
		case 6:
			drawArmouryBoots();
			break;
	}
}



function drawArmouryMainMenu(){
	myC.drawImage(messageLong,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Weapons",70,528);
	myC.fillText("Helmets",370,528);
	myC.fillText("Gaunlets",680,528);
	myC.fillText("Chestpiece",70,600);
	myC.fillText("Boots",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
    //myC.fillText("Take a look" ,30,433);
	switch(combatCursorPos){
		case 1:
			myC.fillText("Equipped: " + weaponName[equippedWeapon]  ,30,433);
            context.fillText(">" ,46,528);
			break;
		case 2:
			myC.fillText("Equipped: " + helmetName[equippedHelmet]  ,30,433);
            context.fillText(">" ,346,528);
			break;
		case 3:
			myC.fillText("Equipped: " + gauntletName[equippedGaunlet]  ,30,433);
            context.fillText(">" ,656,528);
            break;
		case 4:
			myC.fillText("Equipped: " + chestName[equippedChestpiece]  ,30,433);
            context.fillText(">" ,46,600);
			break;
		case 5:
			myC.fillText("Equipped: " + bootName[equippedBoots]  ,30,433);
            context.fillText(">" ,346,600);
			break;
		case 6:
			myC.fillText("See you later" ,30,433);
            context.fillText(">" ,656,600);
			break;
	}
}

function armouryMainMenu(cursor){
	switch(cursor){
		case 1:
			armouryPos = 2;
			break;
		case 2:
			armouryPos = 3;
			break;
		case 3:
			armouryPos = 4;
			break;
		case 4:
			armouryPos = 5;
			break;
		case 5:
			armouryPos = 6;
			break;
		case 6:
			canMove = true;
			activeControls = 0;
			break;
	}
}


function drawArmouryWeapons(){
	myC.drawImage(messageLong,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Stone S.",70,528);
	myC.fillText("Steel S.",370,528);
	myC.fillText("Staff",680,528);
	myC.fillText("Ruby S.",70,600);
	myC.fillText("Master W.",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Item cost: " + weaponCost["stoneSword"] + " Stat change: phyAtt " + (weaponPhysDamage["stoneSword"] - weaponPhysDamage[equippedWeapon]) + " magAtt " + (weaponMagicDamage["stoneSword"] - weaponMagicDamage[equippedWeapon]) ,30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Item cost: " +  weaponCost["steelSword"] + " Stat change: phyAtt " + (weaponPhysDamage["steelSword"] - weaponPhysDamage[equippedWeapon]) + " magAtt " + (weaponMagicDamage["steelSword"] - weaponMagicDamage[equippedWeapon]),30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Item cost: " +  weaponCost["staff"]  + " Stat change: phyAtt " + (weaponPhysDamage["staff"] - weaponPhysDamage[equippedWeapon]) + " magAtt " + (weaponMagicDamage["staff"] - weaponMagicDamage[equippedWeapon]),30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Item cost: " + weaponCost["rubySword"] + " Stat change: phyAtt " + (weaponPhysDamage["rubySword"] - weaponPhysDamage[equippedWeapon]) + " magAtt " + (weaponMagicDamage["rubySword"] - weaponMagicDamage[equippedWeapon]) ,30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Item cost: " + weaponCost["masterWand"] + " Stat change: phyAtt " + (weaponPhysDamage["masterWand"] - weaponPhysDamage[equippedWeapon]) + " magAtt " + (weaponMagicDamage["masterWand"] - weaponMagicDamage[equippedWeapon]),30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function armouryWeapon(cursor){
	switch(cursor){
			case 1:
				if (gold >= weaponCost["stoneSword"]){
					equippedWeapon = "stoneSword";
					gold = gold - weaponCost["stoneSword"];
				}
				break;
			case 2:
				if (gold >= weaponCost["steelSword"]){
					equippedWeapon = "steelSword";
					gold = gold - weaponCost["steelSword"];
				}
				break;
			case 3:
				if (gold >= weaponCost["staff"]){
					equippedWeapon = "staff";
					gold = gold - weaponCost["staff"];
				}
				break;
			case 4:
				if (gold >= weaponCost["rubySword"]){
					equippedWeapon = "rubySword";
					gold = gold - weaponCost["rubySword"];
				}
				break;
			case 5:
				if (gold >= weaponCost["masterWand"]){
					equippedWeapon = "masterWand";
					gold = gold - weaponCost["masterWand"];
				}
				break;
			case 6:
				armouryPos = 1;
				break;
		}
    if (currentQuest === 1 && currentQuestPoint === 1){
        canProgress();
        incrementQuest();
    }
}


function drawArmouryHelmet(){
	myC.drawImage(messageLong,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Leather H.",70,528);
	myC.fillText("Chainmail H.",370,528);
	myC.fillText("King H.",680,528);
	myC.fillText("Apperentice H.",70,600);
	myC.fillText("Master H.",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Item cost: " + helmetCost["leather"] + " Stat change: phyDef " + (helmetPhysDef["leather"]-helmetPhysDef[equippedHelmet]) + " magDef "  +  (helmetMagicDef["leather"] - helmetMagicDef[equippedHelmet]),30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Item cost: " + helmetCost["chainmail"] + " Stat change: phyDef " + (helmetPhysDef["chainmail"]-helmetPhysDef[equippedHelmet]) + " magDef "  +  (helmetMagicDef["chainmail"] - helmetMagicDef[equippedHelmet]),30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Item cost: " +  helmetCost["king"] + " Stat change: phyDef " + (helmetPhysDef["king"]-helmetPhysDef[equippedHelmet]) + " magDef "  +  (helmetMagicDef["king"] - helmetMagicDef[equippedHelmet]),30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Item cost: " + helmetCost["apprentice"] + " Stat change: phyDef " + (helmetPhysDef["apprentice"]-helmetPhysDef[equippedHelmet]) + " magDef "  +  (helmetMagicDef["apprentice"] - helmetMagicDef[equippedHelmet]),30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Item cost: " + helmetCost["master"] + " Stat change: phyDef " + (helmetPhysDef["master"]-helmetPhysDef[equippedHelmet]) + " magDef "  +  (helmetMagicDef["master"] - helmetMagicDef[equippedHelmet]),30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function armouryHelmet(cursor){
	switch(cursor){
			case 1:
				if (gold >= helmetCost["leather"]){
					equippedHelmet = "leather";
					gold = gold - helmetCost["leather"];
				}
				break;
			case 2:
				if (gold >= helmetCost["chainmail"]){
					equippedHelmet = "chainmail";
					gold = gold - helmetCost["chainmail"];
				}
				break;
			case 3:
				if (gold >= helmetCost["king"]){
					equippedHelmet = "king";
					gold = gold - helmetCost["king"];
				}
				break;
			case 4:
				if (gold >= helmetCost["apprentice"]){
					equippedHelmet = "apprentice";
					gold = gold - helmetCost["apprentice"];
				}
				break;
			case 5:
				if (gold >= helmetCost["master"]){
					equippedHelmet = "master";
					gold = gold - helmetCost["master"];
				}
				break;
			case 6:
				armouryPos = 1;
				break;
		}
}


function drawArmouryGaunlets(){
	myC.drawImage(messageLong,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Leather G.",70,528);
	myC.fillText("Chainmail G.",370,528);
	myC.fillText("King G.",680,528);
	myC.fillText("Apperentice G.",70,600);
	myC.fillText("Master G.",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Item cost: " + gaunletCost["leather"]  + gaunletCost["leather"] + " Stat change: phyDef " + (gaunletPhysDef["leather"]-gaunletPhysDef[equippedGaunlet]) + " magDef "  +  (gaunletMagicDef["leather"] - gaunletMagicDef[equippedGaunlet]) ,30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Item cost: " + gaunletCost["chainmail"] + " Stat change: phyDef " + (gaunletPhysDef["chainmail"]-gaunletPhysDef[equippedGaunlet]) + " magDef "  +  (gaunletMagicDef["chainmail"] - gaunletMagicDef[equippedGaunlet]) ,30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Item cost: " +  gaunletCost["king"] + " Stat change: phyDef " + (gaunletPhysDef["king"]-gaunletPhysDef[equippedGaunlet]) + " magDef "  +  (gaunletMagicDef["king"] - gaunletMagicDef[equippedGaunlet]) ,30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Item cost: " + gaunletCost["apprentice"]  + " Stat change: phyDef " + (gaunletPhysDef["apprentice"]-gaunletPhysDef[equippedGaunlet]) + " magDef "  +  (gaunletMagicDef["apprentice"] - gaunletMagicDef[equippedGaunlet]),30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Item cost: " + gaunletCost["master"] + " Stat change: phyDef " + (gaunletPhysDef["master"]-gaunletPhysDef[equippedGaunlet]) + " magDef "  +  (gaunletMagicDef["master"] - gaunletMagicDef[equippedGaunlet]),30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function armourGaunlets(cursor){
	switch(cursor){
			case 1:
				if (gold >= gaunletCost["leather"]){
					equippedGaunlet = "leather";
					gold = gold - gaunletCost["leather"];
				}
				break;
			case 2:
				if (gold >= gaunletCost["chainmail"]){
					equippedGaunlet = "chainmail";
					gold = gold - gaunletCost["chainmail"];
				}
				break;
			case 3:
				if (gold >= gaunletCost["king"]){
					equippedGaunlet = "king";
					gold = gold - gaunletCost["king"];
				}
				break;
			case 4:
				if (gold >= gaunletCost["apprentice"]){
					equippedGaunlet = "apprentice";
					gold = gold - gaunletCost["apprentice"];
				}
				break;
			case 5:
				if (gold >= gaunletCost["master"]){
					equippedGaunlet = "master";
					gold = gold - gaunletCost["master"];
				}
				break;
			case 6:
				armouryPos = 1;
				break;
		}
}

function drawArmouryChest(){
	myC.drawImage(messageLong,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Leather C.",70,528);
	myC.fillText("Chainmail C.",370,528);
	myC.fillText("King C.",680,528);
	myC.fillText("Apperentice C.",70,600);
	myC.fillText("Master C.",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Item cost: " + chestCost["leather"]  + chestCost["leather"] + " Stat change: phyDef " + (chestPhysDef["leather"]-chestPhysDef[equippedChestpiece]) + " magDef "  +  (chestMagicDef["leather"] - chestMagicDef[equippedChestpiece]) ,30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Item cost: " + chestCost["chainmail"] + " Stat change: phyDef " + (chestPhysDef["chainmail"]-chestPhysDef[equippedChestpiece]) + " magDef "  +  (chestMagicDef["chainmail"] - chestMagicDef[equippedChestpiece]),30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Item cost: " +  chestCost["king"] + " Stat change: phyDef " + (chestPhysDef["king"]-chestPhysDef[equippedChestpiece]) + " magDef "  +  (chestMagicDef["king"] - chestMagicDef[equippedChestpiece]),30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Item cost: " + chestCost["apprentice"] + " Stat change: phyDef " + (chestPhysDef["apprentice"]-chestPhysDef[equippedChestpiece]) + " magDef "  +  (chestMagicDef["apprentice"] - chestMagicDef[equippedChestpiece]) ,30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Item cost: " + chestCost["master"] + " Stat change: phyDef " + (chestPhysDef["master"]-chestPhysDef[equippedChestpiece]) + " magDef "  +  (chestMagicDef["master"] - chestMagicDef[equippedChestpiece]) ,30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function armouryChestpiece(cursor){
	switch(cursor){
			case 1:
				if(gold >= chestCost["leather"]){
					equippedChestpiece = "leather";
					gold = gold - chestCost["leather"];
				}
				break;
			case 2:
				if(gold >= chestCost["chainmail"]){
					equippedChestpiece = "chainmail";
					gold = gold - chestCost["chainmail"];
				}
				break;
			case 3:
				if(gold >= chestCost["king"]){
					equippedChestpiece = "king";
					gold = gold - chestCost["king"];
				}
				break;
			case 4:
				if(gold >= chestCost["apprentice"]){
					equippedChestpiece = "apprentice";
					gold = gold - chestCost["apprentice"];
				}
				break;
			case 5:
				if(gold >= chestCost["master"]){
					equippedChestpiece = "master";
					gold = gold - chestCost["master"];
				}
				break;
			case 6:
				armouryPos = 1;
				break;
	}
}

function drawArmouryBoots(){
	myC.drawImage(messageLong,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Leather B.",70,528);
	myC.fillText("Chainmail B.",370,528);
	myC.fillText("King B.",680,528);
	myC.fillText("Apperentice B.",70,600);
	myC.fillText("Master B.",370,600);
	myC.fillText("return",680,600);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,528);
            myC.fillText("Item cost: " + bootCost["leather"]  + bootCost["leather"] + " Stat change: phyDef " + (bootPhysDef["leather"]-bootPhysDef[equippedBoot]) + " magDef "  +  (bootMagicDef["leather"] - bootMagicDef[equippedBoot]),30,433);
			break;
		case 2:
            context.fillText(">" ,346,528);
            myC.fillText("Item cost: " + bootCost["chainmail"] + " Stat change: phyDef " + (bootPhysDef["chainmail"]-bootPhysDef[equippedBoot]) + " magDef "  +  (bootMagicDef["chainmail"] - bootMagicDef[equippedBoot]) ,30,433);
			break;
		case 3:
            context.fillText(">" ,656,528);
            myC.fillText("Item cost: " +  bootCost["king"] + " Stat change: phyDef " + (bootPhysDef["king"]-bootPhysDef[equippedBoot]) + " magDef "  +  (bootMagicDef["king"] - bootMagicDef[equippedBoot]),30,433);
            break;
		case 4:
            context.fillText(">" ,46,600);
            myC.fillText("Item cost: " + bootCost["apprentice"] + " Stat change: phyDef " + (bootPhysDef["apprentice"]-bootPhysDef[equippedBoot]) + " magDef "  +  (bootMagicDef["apprentice"] - bootMagicDef[equippedBoot]) ,30,433);
			break;
		case 5:
            context.fillText(">" ,346,600);
            myC.fillText("Item cost: " + bootCost["master"] + " Stat change: phyDef " + (bootPhysDef["master"]-bootPhysDef[equippedBoot]) + " magDef "  +  (bootMagicDef["master"] - bootMagicDef[equippedBoot]) ,30,433);
			break;
		case 6:
            context.fillText(">" ,656,600);
			break;
	}
}

function armouryBoots(cursor){
	switch(cursor){
			case 1:
				if (gold >= bootCost["leather"]){
					 equippedBoots = "leather";
					 gold = gold - bootCost["leather"];
					}
				break;
			case 2:
				if (gold >= bootCost["chainmail"]){
					 equippedBoots = "chainmail";
					gold = gold - bootCost["chainmail"];
				}
				break;
			case 3:
				if (gold >= bootCost["king"]){
				 	equippedBoots = "king";
					gold = gold - bootCost["king"];
				}
				break;
			case 4:
				if (gold >= bootCost["apprentice"]){
					equippedBoots = "apprentice";
					gold = gold - bootCost["apprentice"];
				}
				break;
			case 5:
				if (gold >= bootCost["master"]){
					 equippedBoots = "master";
					gold = gold - bootCost["master"];
				}
				break;
			case 6:
				armouryPos = 1;
				break;
	}
}