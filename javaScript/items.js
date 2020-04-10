var inventory = [
	0,	//null item  index 0
	3,	//health potion index 1
	2, //mana potion index 2
    1,//smoke bomb index 3
    1,//iron skin potion index 4
    1,//berserk potion index 5
]

var inventoryNames = [
	"NULL",	//null item  index 0
	"Health potion",	//health potion index 1
	"Magic potion", //mana potion index 2
    "Smoke bomb",//smoke bomb index 3
    "Iron skin potion",//iron skin potion index 4
    "Berserk potion",//berserk potion index 5
]

var inventoryItemCost = [
	0,	//null item  index 0
	50,	//health potion index 1
	100, //mana potion index 2
    250,//smoke bomb index 3
    750,//iron skin potion index 4
    1250,//berserk potion index 5
]

//*************************ITEN FUNCTIONS***********************************
function itemHealthPotion(){
	var healPower = 50;
	inventory[1] = inventory[1]-1;
	return healPower

}

function itemMagicPotion(){
	var healPower = 30;
	inventory[2] --;
	return healPower;
}

function itemSmokeBomb(){
    smokeBombEffect = 0.5;
    inventory[3] --;
}

function itemIronSkinPoition(){
    if (ironPotionEffect <= 1){
    	ironPotionEffect = 2;
		inventory[4] --;
	}else if(ironPotionEffect == 2){
		ironPotionEffect = 4;
		inventory[4] --;
	}    
}

function itemBerserkPotion(){
    if (berserkPotionEffect <= 1){
    	berserkPotionEffect = 2;
		inventory[5] --;
	}else if(berserkPotionEffect == 2){
		berserkPotionEffect = 4;
		inventory[5] --;
	}
}


//*************************MENU CONTROLS****************************

function itemMenu(combatInput){
	switch (combatInput){ //items not implemented yet

	case 1: //keypress = h, use health potion
		if (inventory[1]>0){
			currentHP = currentHP + calculatedamageHealed(itemHealthPotion());
			setMessage("You used a " + inventoryNames[1],"Your health points were restored");
			wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
		}
		break;
	
	case 2: //keypress = h, use health potion
		if (inventory[4]>0){
			itemIronSkinPoition();
			setMessage("You used a " + inventoryNames[4],"Your defence doubled!");
			wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
		}
		break;	


	case 3: //keypress = h, use health potion
		if (inventory[5]>0){
			itemBerserkPotion();
			setMessage("You used a " + inventoryNames[5],"Your attack power doubled!");
			wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
		}
		break;

	case 4: // keypress = use mana potion
		if (inventory[2]>0){
			currentMP = currentMP + calculateMagicRecover(itemMagicPotion());
			setMessage("You used a " + inventoryNames[2],"Your magic points were restored!");
			wasEnemyDefeated();//although no damage dealt in this case, function switches turn
		}		
		break;	

	case 5: //keypress = h, use health potion
		if (inventory[3]>0){
			itemSmokeBomb();
			setMessage("You used a " + inventoryNames[3],"Enemy's hit chance was lowered!");
			wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
		}
		break;

	case 6: //keypress = r, returns to previous menu
		combatCursorPos = 0;
		activeControls = 1;
		//context.drawImage(combatMenu,0,0);
		break;
	}
}
