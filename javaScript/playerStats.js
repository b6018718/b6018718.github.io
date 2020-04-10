console.info("Player Stats Loaded");     //Check Stats is linked correctly


//(global) characters stats
var level;		//characters leve
var expLevelUp;	//exp amount at which the character will level up next at
var currentExp	//current experience points of the character
var maxHP;		//max health is the total health the character can currently have
var currentHP;	//current health is health after the player takes damage
var maxMP;		//max magic points is the total magic the character can currently have
var currentMP;	//is the current magic point the players have left after casting magic spells
var phyAttack;	//physical attack strength used when calculating damage dealt to an enemy
var phyDefence;	//used when calculating physical damage taken
var magAttack;	//used when calculating magic damage dealt to an enemy
var magDefence;	//used when calculating magic damage taken
var luck;		//used to effect the outcome of random chances, such as dodging an enemy attack or missing when attacking an enemy and the crit chance of physical attacks
var gold; //currency of the game

var effectiveCurrentExp;
var effectiveExpLevelUp;

var playerClass = "warrior"; //the current class of the player that effects their stats and magic abilities

///current equipment
var equippedWeapon;
var equippedChestpiece;
var equippedHelmet;
var equippedGaunltet;
var equippedBoots;

function listStatsInConsole(){
	//for testing purposes, to display all of the player character stats in the console
	console.info("Hero name: " + name);
	console.info("Level: " + level + " Experience Points: " + currentExp + "/" +  expLevelUp );
	console.info("Health : " + currentHP + "/" + maxHP);
	console.info("Magic : "  + currentMP + "/" + maxMP); 
	console.info("Phsical  Attack/Defence: " + phyAttack + "/" +  phyDefence );
	console.info("Magic Attack/Defence: " + magAttack + "/" +  magDefence);
	console.info("Luck: " + luck);
}

function getRandomInt(min, max){
	//gets random integer value inclusive between the min and max parameters
	return Math.floor(Math.random()*(max-min+1)) + min
}

function initiatePlayerStats(){
	//sets the players stats at their base level, which are intended to vary slightly whenever the player starts a new game
	console.info("Player Character Stats After Being Initiated: ");
	level = 1;
	expLevelUp = 10;
	currentExp = 0;
	maxHP = getRandomInt(25,30)
	currentHP = maxHP;
	maxMP = getRandomInt(10,15);
	currentMP = maxMP;
	phyAttack = getRandomInt(8,10);
	phyDefence = getRandomInt(4,5);
	magAttack = getRandomInt(5,6);
	magDefence = getRandomInt(3,5);
	luck = getRandomInt(1,5);
	listStatsInConsole();
	gold = 100;
	equippedWeapon = "bone";
	equippedChestpiece = "basic";
	equippedHelmet = "basic";
	equippedGaunlet = "basic";
	equippedBoots = "basic";
	effectiveCurrentExp = currentExp;
	effectiveExpLevelUp = expLevelUp;
}


initiatePlayerStats(); //initiates the players stats

function levelUp(){
//levels up the player characters stats, adding to their current totals
//levelling up also heals the player fully
//the luck stat handles level scaling, as your luck goes up, the more your other stats go up
	console.info("Player Character Stats Before Level Up: ");
	listStatsInConsole();
	level = level + 1;
	setMessage("Congratulations!","You Levelled Up to level " + level +"!");
	setMessage(" HP:" + maxHP + " MP:" +maxMP + " phyAtt:" + phyAttack + " magAtt:" + magAttack ,  " phyDef:" + phyDefence +  " magDef:" + magDefence +" Luck:" + luck);
	effectiveExpLevelUp = expLevelUp;
	effectiveCurrentExp = currentExp - expLevelUp;
	if (expLevelUp >= 50000){
		expLevelUp = expLevelUp +  Math.floor(expLevelUp/7);
	}else{	
		if(expLevelUp >= 40000){
			expLevelUp = expLevelUp +  Math.floor(expLevelUp/6);
		}else{
			if(expLevelUp >= 30000){
				expLevelUp = expLevelUp +  Math.floor(expLevelUp/5);
			}else{
				if (expLevelUp >= 20000){190733
					expLevelUp = expLevelUp +  Math.floor(expLevelUp/4);	
				}else{
					if (expLevelUp >= 10000){
						expLevelUp = expLevelUp +  Math.floor(expLevelUp/3);	
					}else{
						if(expLevelUp >= 5000){
							expLevelUp = expLevelUp +  Math.floor(expLevelUp/2);	
						}else{
							expLevelUp = expLevelUp +  expLevelUp;	
						}
					}
				}
			}
		}
	}
	effectiveExpLevelUp = expLevelUp - effectiveExpLevelUp; 
	switch(playerClass){
	case "warrior": //growth focuses on physical stats
		maxHP = maxHP + getRandomInt(4+Math.ceil(luck/2),7+Math.ceil(luck/2));
		currentHP = maxHP;
		maxMP = maxMP + getRandomInt(3+Math.ceil(luck/2),7+Math.ceil(luck/2));
		currentMP = maxMP;
		phyAttack = phyAttack + getRandomInt(2+Math.ceil(luck/4),5+Math.ceil(luck/4));
		phyDefence = phyDefence + getRandomInt(2+Math.ceil(luck/4),4+Math.ceil(luck/4));
		magAttack = magAttack + getRandomInt(2+Math.ceil(luck/4),3+Math.ceil(luck/4));
		magDefence = magDefence + getRandomInt(1+Math.ceil(luck/4),2+Math.ceil(luck/4));
		luck = luck + getRandomInt(1,3);
		break;
	case "mage": //growth focuses on magic based stats
		maxHP = maxHP + getRandomInt(3+Math.ceil(luck/2),5+Math.ceil(luck/2));
		currentHP = maxHP;
		maxMP = maxMP + getRandomInt(8+Math.ceil(luck/2),11+Math.ceil(luck/2));
		currentMP = maxMP;
		phyAttack = phyAttack + getRandomInt(1+Math.ceil(luck/4),2+Math.ceil(luck/4));
		phyDefence = phyDefence + getRandomInt(1+Math.ceil(luck/4),2+Math.ceil(luck/4));
		magAttack = magAttack + getRandomInt(5+Math.ceil(luck/4),7+Math.ceil(luck/4));
		magDefence = magDefence + getRandomInt(2+Math.ceil(luck/4),4+Math.ceil(luck/4));
		luck = luck + getRandomInt(1,3);
		break;
	case "rogue"://growth focuses on luck and has balance magical and phyiscal stats
		maxHP = maxHP + getRandomInt(4+Math.ceil(luck/2),6+Math.ceil(luck/2));
		currentHP = maxHP;
		maxMP = maxMP + getRandomInt(4+Math.ceil(luck/2),8+Math.ceil(luck/2));
		currentMP = maxMP;
		phyAttack = phyAttack + getRandomInt(2+Math.ceil(luck/4),3+Math.ceil(luck/4));
		phyDefence = phyDefence + getRandomInt(2+Math.ceil(luck/4),3+Math.ceil(luck/4));
		magAttack = magAttack + getRandomInt(2+Math.ceil(luck/4),3+Math.ceil(luck/4));
		magDefence = magDefence + getRandomInt(2+Math.ceil(luck/4),3+Math.ceil(luck/4));
		luck = luck + getRandomInt(2,5);
		break;				
	}
	setMessage(" HP:" + maxHP + " MP:" +maxMP + " phyAtt:" + phyAttack + " magAtt:" + magAttack ,  " phyDef:" + phyDefence +  " magDef:" + magDefence +" Luck:" + luck);
	if (level == 25){ //message for when the player reaches the max possible level
		setMessage("Congratulations!","You have reached the max level!");
		setMessage("You are as strong as you can be!","Go forth and finish your quest!");
	}
	switch(playerClass){
		case "warrior":
			if (level == 2){  //flame slash
				setMessage("You learnt a new spell!","Burn foes with Flame Slash!");
				setMessage("Remember to cast a spell,","you need enough MP to cast it!");
			}
			if (level == 3){   //Sheer will
				setMessage("You learnt a new spell!","Heal yourself with Sheer Will!");
			}
			if (level == 5){   //tornado slash
				setMessage("You learnt a new spell!","Tear foes to shreds with tornado slash!");
			}
			if (level == 10){  //bulk up
				setMessage("You learnt a new spell!","Bulk Up to boost your stats!");
			}
			if (level == 15){  //nova slash
				setMessage("You learnt a new spell!","Unleash your full power Nova Slash!");
				setMessage("Congratulations!","You now have learnt every spell!");
				setMessage("Have fun using them","to defeat your foes!");
			}
			break;
		
		case "mage":
			if (level == 2){ //fire
				setMessage("You learnt a new spell!","Scorch your foes with Fire!");
				setMessage("Remember to cast a spell,","you need enough MP to cast it!");
			}
			if (level == 3){ //heal
				setMessage("You learnt a new spell!","Heal yourself with Heal!");
			}
			if (level == 5){ //thunder
				setMessage("You learnt a new spell!","Zap your foes with Thunder!");
			}
			if (level == 10){ //health drain
				setMessage("You learnt a new spell!","Steal health with Health Drain!");
			}
			if (level == 15){ //g nova
				setMessage("You learnt a new spell!","Unleash your full power with Grand Nova!");
				setMessage("Congratulations!","You now have learnt every spell!");
				setMessage("Have fun using them","to defeat your foes!");
			}
			break;
		
		case "rogue":
			if (level == 2){ //Steal
				setMessage("You learnt a new spell!","Plunder items with Steal!");
				setMessage("Remember to cast a spell,","you need enough MP to cast it!");
			}
			if (level == 3){//Life steal
				setMessage("You learnt a new spell!","Life Steal from your foes!");
			}
			if (level == 5){//Cash N Grab
				setMessage("You learnt a new spell!","Cash N Grab enemy gold!");
			}
			if (level == 10){ //Backstab
				setMessage("You learnt a new spell!","Hit weak points with Backstab!");
			}
			if (level == 15){ //Nova Blitz
				setMessage("You learnt a new spell!","Unleash your full power of Nova Blitz!");
				setMessage("Congratulations!","You now have learnt every spell!");
				setMessage("Have fun using them","to defeat your foes!");
			}
			break;						
	}
}

function playerGainExpereince(){
	//player gains exp after defeating an enemy, checks if player levels up their charecter
	console.info("Gain exp: " + currentExp + "+" + expDrop);
	currentExp = currentExp + expDrop;
	effectiveCurrentExp = effectiveCurrentExp + expDrop;
	console.info("New exp total: " + currentExp + "/" + expLevelUp);
	while ((currentExp >= expLevelUp) && (level < 25)){ //15 being the max level a character can be in this game
		console.info("Level up");
		levelUp();
	}
}

function getItemGoldDrops(){
	gold = gold + goldDrop;
	if (itemDrop != 0){
		if (getRandomInt(1,50)<=luck){
			inventory[itemDrop]++;
			setMessage("Enemy dropped an item!", "You got a " + inventoryNames[itemDrop] + "!")
		}
	}
}