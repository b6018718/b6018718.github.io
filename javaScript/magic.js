//*******************************************MAGIC SPELLS FUNCTIONS**********************************

function magicFlameSlash(){
	var magicCost = 3;//anount of magic required to cast the spell
	var magicDamage = 15;
	var attackStrength = Math.floor((playerTotalMagAttack+playerTotalPhyAttack)/2) + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;
}	


function magicSheerWill(){
	var magicCost = 5;//anount of magic required to cast the spell
	var healPower = 30 + Math.floor((magAttack/2));//amount magic heals the player
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{
		healPower = 0;
		console.info("Not enough MP to cast!");
	}
	return healPower;	
}

function magicTornadoSlash(){
	var magicCost = 15;  //anount of magic required to cast the spell
	var magicDamage = 50;
	var attackStrength = Math.floor((playerTotalMagAttack+playerTotalPhyAttack)/2) + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
    return attackStrength;
}

function magicBulkUp(){
	var magicCost = 30; 
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	    if (ironPotionEffect == 1){
	    	ironPotionEffect = 2;
		}else if(ironPotionEffect <= 2){
			ironPotionEffect = 4;
		}
	    if (berserkPotionEffect <= 1){
	    	berserkPotionEffect = 2;
		}else if(berserkPotionEffect == 2){
			berserkPotionEffect = 4;
		}		
	}
	else{	
		console.info("Not enough MP to cast!");
	}	
}

function magicNovaSlash(){
	var magicCost = 50;//anount of magic required to cast the spell
	var magicDamage = 100;
	var attackStrength = Math.floor((playerTotalMagAttack+playerTotalPhyAttack)/2) + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;	
}



function magicFire(){
	var magicCost = 3;//anount of magic required to cast the spell
	var magicDamage = 15;
	var attackStrength = playerTotalMagAttack  + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;
}

function magicHeal(){
	var magicCost = 5;//anount of magic required to cast the spell
	var healPower = 15 + Math.floor((magAttack/2));//amount magic heals the player
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;	
		if (berserkPotionEffect < 1){
	      berserkPotionEffect = 1;
	      setMessage("You heal spell also cures", "you lowered attack stat!");
	    }
	    if (ironPotionEffect < 1){
	      ironPotionEffect = 1;
	      setMessage("You heal spell also cures", "you lowered defence stat!");
	    }  
	}
	else{
		healPower = 0;
		console.info("Not enough MP to cast!");
	}
 
	return healPower;
}

function magicThunder(){
	var magicCost = 15;  //anount of magic required to cast the spell
	var magicDamage = 50;
	var attackStrength = playerTotalMagAttack + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;
}

function magicDrainHealth(){
var magicCost = 30;//anount of magic required to cast the spell
	var magicDamage = 30;
	var attackStrength = playerTotalMagAttack + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
		currentHP = currentHP + calculatedamageHealed(Math.floor(attackStrength/2*berserkPotionEffect));
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;
}

function magicNova(){
	var magicCost = 50;//anount of magic required to cast the spell
	var magicDamage = 100;
	var attackStrength = playerTotalMagAttack + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;	
}

function magicSteal(){
	var magicCost = 3;//anount of magic required to cast the spell
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
		if (luck+magAttack >= getRandomInt(1,50)){
			inventory[itemDrop]++;
			setMessage("You stole a" + inventoryNames[itemDrop], "from the enemy!");
		}else{
			setMessage("Your steal attempt", "failed!");
		}
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
}

function magicLifeSteal(){
	var magicCost = 5;//anount of magic required to cast the spell
	var magicDamage = 15;
	var attackStrength = Math.floor((playerTotalMagAttack+playerTotalPhyAttack)/2) + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
		currentHP = currentHP + calculatedamageHealed(Math.floor(attackStrength*berserkPotionEffect));
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;	
}

function magicCashNGrab(){
	var magicCost = 15;  //anount of magic required to cast the spell
	var magicDamage = 50;
	var attackStrength = playerTotalMagAttack + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
		gold = gold + Math.ceil(goldDrop/10);
		setMessage("You stole " + goldDrop/10 + " gold", "from the enemy" );
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;	
}

function magicBackstab(){
	var magicCost = 30;  //anount of magic required to cast the spell
	var magicDamage = 50;
	var attackStrength = Math.floor((playerTotalPhyAttack + luck)*1.2)+ magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;	
}

function magicNovaBlitz(){
	var magicCost = 50;  //anount of magic required to cast the spell
	var magicDamage = 100;
	var attackStrength = Math.floor((playerTotalMagAttack+playerTotalPhyAttack)/2) + luck + magicDamage;
	if (currentMP >= magicCost){
		currentMP = currentMP - magicCost;
	}
	else{	
		attackStrength = 0;
		console.info("Not enough MP to cast!");
	}
	return attackStrength;	
}


//**********************MENU CONTROLS***********************
function magicMenu(combatInput){
	switch(playerClass){

		case "warrior":
			switch (combatInput){ 
				case 1: //flame slash
					if ((level >= 2)&&(currentMP >= 3)){ // have to be level  or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicFlameSlash()*berserkPotionEffect),Math.floor((enemyMagDefence+enemyPhyDefence)/2));
						setMessage("You set your sword on fire,","You slash with volcanic fury");
						console.info("Enemy HP after attacak: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 2)&&(currentMP < 3)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;
				
				case 2: //sheer will
					if ((level >= 3)&&(currentMP >= 5)){ // have to be level 3 or highter to cast the spell
						console.info("Heal, current player HP before heal, Player HP: " + currentHP);
						setMessage("Your focus you mimd and body","to recover from your wounds!");
						currentHP = currentHP + calculatedamageHealed(magicSheerWill());
						console.info("Player HP after attack: " + currentHP);
						wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
					}
					else{
						if ((level >= 3)&&(currentMP < 5)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}				
					break;
				
				case 3: //tornado slash
					if ((level >= 5)&&(currentMP >= 15)){ // have to be level 5 or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicTornadoSlash()*berserkPotionEffect),Math.floor((enemyMagDefence+enemyPhyDefence)/2));
						setMessage("Your magic calls down thunder bolts!","To strike your foe!");
						console.info("Enemy HP after attack: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 5)&&(currentMP < 15)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;	

				case 4: //bulk up
					if ((level >= 10)&&(currentMP >= 30)){ // have to be level 5 or highter to cast the spell
						magicBulkUp();
						setMessage("You flex with all your might!","Attack and defence go up!");
						wasEnemyDefeated();
					}
					else{
						if ((level >= 10)&&(currentMP < 30)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;	

				case 5: //nova slash
					if ((level >= 15)&&(currentMP >= 50)){ // have to be level 5 or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicNovaSlash()*berserkPotionEffect),Math.floor((enemyMagDefence+enemyPhyDefence)/2));
						setMessage("You slash with the power of a demon!","But where did you get this power?!?!");
						console.info("Enemy HP after attack: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 15)&&(currentMP < 50)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;					

				case 6: //keypress = r, returns to previous menun
					console.info("returned to main combat window");
					combatCursorPos = 0;
					activeControls = 1;
					//context.drawImage(combatMenu,0,0);
				break;
			}
			break;

		case "mage":
			switch (combatInput){ 
				case 1: //fire
					console.info("attempt to cast fire");
					if ((level >= 2)&&(currentMP >= 3)){ // have to be level  or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicFire()*berserkPotionEffect),enemyMagDefence);
						setMessage("Through the arcane arts,","You summon a blaze that scorches the enemy");
						console.info("Enemy HP after attacak: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 2)&&(currentMP < 3)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;
				
				case 2: //heal
					console.info("attempt to cast heal");
					if ((level >= 3)&&(currentMP >= 5)){ // have to be level 3 or highter to cast the spell
						console.info("Heal, current player HP before heal, Player HP: " + currentHP);
						setMessage("Your magic fills your body with a calm sensation","You recover from your wounds!");
						currentHP = currentHP + calculatedamageHealed(magicHeal());
						console.info("Player HP after attack: " + currentHP);
						wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
					}
					else{
						if ((level >= 3)&&(currentMP < 5)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}				
					break;
				
				case 3: //thunder
					console.info("attempt to cast thunder");
					if ((level >= 5)&&(currentMP >= 15)){ // have to be level 5 or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicThunder()*berserkPotionEffect),enemyMagDefence);
						setMessage("Your magic calls down thunder bolts!","To strike your foe!");
						console.info("Enemy HP after attack: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 5)&&(currentMP < 15)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;	

				case 4: //drain health
					if ((level >= 10)&&(currentMP >= 30)){ // have to be level 5 or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicDrainHealth()*berserkPotionEffect),enemyMagDefence);
						setMessage("You sap " + enemyName + "'s vitality","And heal your own injuries");
						console.info("Enemy HP after attack: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 10)&&(currentMP < 30)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;	

				case 5: //G nova
					console.info("attempt to cast nova");
					if ((level >= 15)&&(currentMP >= 50)){ // have to be level 5 or highter to cast the spell
						console.info("Attack, current enemy HP before attack, Enemy HP: " + enemyHP);
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicNova()*berserkPotionEffect),enemyMagDefence);
						setMessage("Your arcane power rivals the power of a demon!","But where did you get this power?!?!");
						console.info("Enemy HP after attack: " + enemyHP);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 15)&&(currentMP < 50)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;					

				case 6: //keypress = r, returns to previous menun
					console.info("returned to main combat window");
					combatCursorPos = 0;
					activeControls = 1;
					//context.drawImage(combatMenu,0,0);
				break;
			}
			break;

		case "rogue":
			switch (combatInput){ 
				case 1: //Steal
						if ((level >= 2)&&(currentMP >= 3)){ // have to be level  or highter to cast the spell
						("You attempt to steal","an item from the enemy");
						magicSteal();
						wasEnemyDefeated();
					}
					else{
						if ((level >= 2)&&(currentMP < 3)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;
				
				case 2: //Life Steal
					if ((level >= 3)&&(currentMP >= 5)){ // have to be level 3 or highter to cast the spell
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicLifeSteal()*berserkPotionEffect),enemyMagDefence);
						setMessage("You stole some of","the enemy's life force!");
						wasEnemyDefeated();//although no damage dealt in this case, function switches turn	
					}
					else{
						if ((level >= 3)&&(currentMP < 5)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}				
					break;
				
				case 3: //Cash N Grab
					if ((level >= 5)&&(currentMP >= 15)){ // have to be level 5 or highter to cast the spell
						setMessage("You attack the enemy,","and attempt to steal gold!");
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicCashNGrab()*berserkPotionEffect),enemyMagDefence);
						wasEnemyDefeated();
					}
					else{
						if ((level >= 5)&&(currentMP < 15)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;	

				case 4: //Backstab
					if ((level >= 10)&&(currentMP >= 30)){ // have to be level 5 or highter to cast the spell
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicBackstab()*berserkPotionEffect),enemyPhyDefence);
						setMessage("You attack the enemy's","weakpoint for massive damage!");
						wasEnemyDefeated();
					}
					else{
						if ((level >= 10)&&(currentMP < 30)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;	

				case 5: //Nova Blitz
					if ((level >= 15)&&(currentMP >= 50)){ // have to be level 5 or highter to cast the spell
						enemyHP = enemyHP - calculateDamageDealt(Math.floor(magicNovaBlitz()*berserkPotionEffect),enemyMagDefence);
						setMessage("You attack with the","fury of a demon!");
						wasEnemyDefeated();
					}
					else{
						if ((level >= 15)&&(currentMP < 50)){
							setMessage("Not enough MP to cast the spell"," ");
						}
					}
					break;					

				case 6: //keypress = r, returns to previous menun
					console.info("returned to main combat window");
					combatCursorPos = 0;
					activeControls = 1;
					//context.drawImage(combatMenu,0,0);
				break;
			}
			break;

	}
}

