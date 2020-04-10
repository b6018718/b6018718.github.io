/////////////////////////////MOBS///////////////////////////////

/////AREA 1/////////FIELD
var mobRat ={
  enemyName:"Rat",
  maxHP:15,
  physicalAttack:15,
  magicalAttack: 5,
  physicalDefence:15,
  magicDefence:3,
  expDrop: 17,
  itemDrop:1,
  AI: 1,
  imgSrc: "images/rat.png",
  goldDrop: 30
}


var mobBat = {
  enemyName:  "Bat",
  maxHP: 11,
  physicalAttack: 17,
  magicalAttack: 0,
  physicalDefence: 11,
  magicDefence: 3,
  expDrop: 16,
  itemDrop:  1,
  AI: 1,
  imgSrc: "images/bat.png",
  goldDrop: 35
}



///////AREA 4///////CAMP
var mobGoblin = {
 enemyName: "Goblin",
  maxHP:60,
  physicalAttack:35,
  magicalAttack:5,
  physicalDefence:50,
  magicDefence: 21,
  expDrop:  450,
  itemDrop:  3,
  AI: 7,
  imgSrc: "images/goblin.png",
  goldDrop: 200
  }

var mobGoblinMage = {
  enemyName: "Goblin Mage",
  maxHP: 40,
  physicalAttack: 9,
  magicalAttack: 30,
  physicalDefence: 25,
  magicDefence: 50,
  expDrop: 500,
  itemDrop: 2,
  AI:3,
  imgSrc:"images/goblinmage.png",
  goldDrop: 250
}



var mobYoungGoblin = {
  enemyName: "Goblin Younglings",
  maxHP: 10,
  physicalAttack: 5,
  magicalAttack: 5,
  physicalDefence: 5,
  magicDefence: 5,
  expDrop: -100,
  itemDrop: 2,
  AI:8,
  imgSrc:"images/younglings.png",
  goldDrop: 10
}


///////AREA 6///////SPIDER CAVE
var mobSpider = {
  enemyName:"Spider",
  maxHP:40,
  physicalAttack:40,
  magicalAttack:5,
  physicalDefence:30,
  magicDefence:45,
  expDrop:4000,
  itemDrop:4,
  AI:4,
  imgSrc:"images/spider.png",
  goldDrop: 500
}

var mobGiantSpider = {
  enemyName:"Giant Spider",
  maxHP:70,
  physicalAttack:60,
  magicalAttack:15,
  physicalDefence:70,
  magicDefence:50,
  expDrop:3500,
  itemDrop:5,
  AI:1,
  imgSrc:"images/gaintspider.png",
  goldDrop: 750
}


var mobCockroach = {
  enemyName:"Cockroach",
  maxHP:80,
  physicalAttack:60,
  magicalAttack:5,
  physicalDefence:80,
  magicDefence:45,
  expDrop:4000,
  itemDrop:4,
  AI:1,
  imgSrc:"images/cockroach.png",
  goldDrop: 650
}


var mobRatGroup = {
  enemyName:"A Group of Rats",
  maxHP:150,
  physicalAttack:50,
  magicalAttack:5,
  physicalDefence:30,
  magicDefence:35,
  expDrop:2569,
  itemDrop:1,
  AI:7,
  imgSrc:"images/ratGroup.png",
  goldDrop: 1000
}



///////AREA 3///////CASTLE ESCAPE
var mobGuard = {
  enemyName:"Guard",
  maxHP: 130,
  physicalAttack:75,
  magicalAttack:15,
  physicalDefence:70,
  magicDefence:22,
  expDrop:5500,
  itemDrop:5,
  AI: 2,
  imgSrc: "images/guard.png",
  goldDrop: 2500
}

var mobGuardMage = {
  enemyName:"Mage Knight",
  maxHP: 120,
  physicalAttack:20,
  magicalAttack:6,
  physicalDefence:35,
  magicDefence:70,
  expDrop:5000,
  itemDrop:2,
  AI: 3,
  imgSrc: "images/guardMage.png",
  goldDrop: 3000
}

////////////BOSSES/////////////

//FIRST RABID DOG
var mobRabidDog = {
  enemyName:"Rabid Dog",
  maxHP: 20,
  physicalAttack:8,
  magicalAttack:5,
  physicalDefence:10,
  magicDefence:5,
  expDrop:15,
  itemDrop:1,
  AI: 1,
  imgSrc: "images/rabiddog.png",
  goldDrop: 100
}


//SECOND GOBLIN BOSS
var mobGoblinBoss = {
  enemyName:"Goblin Boss",
  maxHP: 80,
  physicalAttack:30,
  magicalAttack:10,
  physicalDefence:35,
  magicDefence:35,
  expDrop:1500,
  itemDrop:5,
  AI: 2,
  imgSrc: "images/goblinboss.png",
  goldDrop: 2500
}

//THIRD SPIDER QUEEN
var mobSpiderQueen = {
  enemyName:"Spider Queen",
  maxHP: 160,
  physicalAttack:65,
  magicalAttack:50,
  physicalDefence:45,
  magicDefence:30,
  expDrop:5000,
  itemDrop:2,
  AI: 3,
  imgSrc: "images/queenspider.png",
  goldDrop: 3000
}

//FOURTH WIZARD
var mobWizard = {
  enemyName:"Wizard",
  maxHP: 500,
  physicalAttack:5,
  magicalAttack:65,
  physicalDefence:30,
  magicDefence:50,
  expDrop:10000,
  itemDrop:2,
  AI: 9,
  imgSrc: "images/wizard.png",
  goldDrop: 5000
}

//FIFTH AND FINAL DEMON LORD GRANDMA
var mobDemonLord = {
  enemyName:"Demon Lord Grandma!!!",
  maxHP: 700,
  physicalAttack:100,
  magicalAttack:100,
  physicalDefence:75,
  magicDefence:75,
  expDrop:20000,
  itemDrop:2,
  AI: 10,
  imgSrc: "images/demon.png",
  goldDrop: 7000
}


////////////////////////ENEMY CREATION FUNCTIONS
function generateEnemyStats(maxHealth,phyAtt,phyDef,magAtt,magDef,exp){
  //generate enemy stats based on passed in parameters
  enemyMaxHP = getRandomInt(maxHealth,maxHealth+5);
  enemyHP = enemyMaxHP;
  enemyPhyAttack = getRandomInt(phyAtt,phyAtt+3);
  enemyPhyDefence = getRandomInt(phyDef,phyDef+3);
  enemyMagAttack = getRandomInt(magAtt,magAtt+3);
  enemyMagDefence = getRandomInt(magDef,magDef+3);
  expDrop = exp;
}

function listEnemyStats(){
    //for testing purposes, to display all of the enemy character stats in the console
}

function determineMonster(battleScenario){
switch (battleScenario){
    case 1:  //field
      switch(getRandomInt(1,3)){
        case 1: //Rat
          enemyName = mobRat["enemyName"];
          generateEnemyStats(mobRat["maxHP"],mobRat["physicalAttack"],mobRat["magicalAttack"],mobRat["physicalDefence"],mobRat["magicDefence"],mobRat["expDrop"]);
          itemDrop = mobRat["itemDrop"];
          AI = mobRat["AI"];
          enemyImage.src = mobRat["imgSrc"];
          listEnemyStats();
          goldDrop = mobRat["goldDrop"];
          break;

        case 2://Bat
        case 3:
          enemyName = mobBat["enemyName"];
          generateEnemyStats(mobBat["maxHP"],mobBat["physicalAttack"],mobBat["magicalAttack"],mobBat["physicalDefence"],mobBat["magicDefence"],mobBat["expDrop"]);
          itemDrop = mobBat["itemDrop"];
          AI = mobBat["AI"];
          enemyImage.src = mobBat["imgSrc"];
          listEnemyStats();
          goldDrop = mobBat["goldDrop"];
          break;
    }
    break;

    case 4:  //goblin camp
      switch(getRandomInt(1,10)){
        case 1: //Goblin
        case 5:
        case 6:
        case 7:
        case 8:
          enemyName = mobGoblin["enemyName"];
          generateEnemyStats(mobGoblin["maxHP"],mobGoblin["physicalAttack"],mobGoblin["magicalAttack"],mobGoblin["physicalDefence"],mobGoblin["magicDefence"],mobGoblin["expDrop"]);
          itemDrop = mobGoblin["itemDrop"];
          AI = mobGoblin["AI"];
          enemyImage.src = mobGoblin["imgSrc"];
          listEnemyStats();
          goldDrop = mobGoblin["goldDrop"];
          break;

        case 2:// goblin mage
        case 4:
        case 9:
        case 10:
          enemyName = mobGoblinMage["enemyName"];
          generateEnemyStats(mobGoblinMage["maxHP"],mobGoblinMage["physicalAttack"],mobGoblinMage["magicalAttack"],mobGoblinMage["physicalDefence"],mobGoblinMage["magicDefence"],mobGoblinMage["expDrop"]);
          itemDrop = mobGoblinMage["itemDrop"];
          AI = mobGoblinMage["AI"];
          enemyImage.src = mobGoblinMage["imgSrc"];
          listEnemyStats();
          goldDrop = mobGoblinMage["goldDrop"];
          break;
      case 3:// goblin young
          enemyName = mobYoungGoblin["enemyName"];
          generateEnemyStats(mobYoungGoblin["maxHP"],mobYoungGoblin["physicalAttack"],mobYoungGoblin["magicalAttack"],mobYoungGoblin["physicalDefence"],mobYoungGoblin["magicDefence"],mobYoungGoblin["expDrop"]);
          itemDrop = mobYoungGoblin["itemDrop"];
          AI = mobYoungGoblin["AI"];
          enemyImage.src = mobYoungGoblin["imgSrc"];
          listEnemyStats();
          goldDrop = mobYoungGoblin["goldDrop"];
          break;
      }
    break;

    case 6:  //spider cave
      switch(getRandomInt(1,8)){
        case 1:
        case 4:
        case 5:
          enemyName = mobSpider["enemyName"];
          generateEnemyStats(mobSpider["maxHP"],mobSpider["physicalAttack"],mobSpider["magicalAttack"],mobSpider["physicalDefence"],mobSpider["magicDefence"],mobSpider["expDrop"]);
          itemDrop = mobSpider["itemDrop"];
          AI = mobSpider["AI"];
          enemyImage.src = mobSpider["imgSrc"];
          listEnemyStats();
          goldDrop = mobSpider["goldDrop"];
          break;
        case 2:
        case 3:
          enemyName = mobGiantSpider["enemyName"];
          generateEnemyStats(mobGiantSpider["maxHP"],mobGiantSpider["physicalAttack"],mobGiantSpider["magicalAttack"],mobGiantSpider["physicalDefence"],mobGiantSpider["magicDefence"],mobGiantSpider["expDrop"]);
          itemDrop = mobGiantSpider["itemDrop"];
          AI = mobGiantSpider["AI"];
          enemyImage.src = mobGiantSpider["imgSrc"];
          listEnemyStats();
          goldDrop = mobGiantSpider["goldDrop"];
          break;

        case 6:
        case 8:
          enemyName = mobCockroach["enemyName"];
          generateEnemyStats(mobCockroach["maxHP"],mobCockroach["physicalAttack"],mobCockroach["magicalAttack"],mobCockroach["physicalDefence"],mobCockroach["magicDefence"],mobCockroach["expDrop"]);
          itemDrop = mobCockroach["itemDrop"];
          AI = mobCockroach["AI"];
          enemyImage.src = mobCockroach["imgSrc"];
          listEnemyStats();
          goldDrop = mobCockroach["goldDrop"];
          break;

        case 7://Groupd of rats
          enemyName = mobRatGroup["enemyName"];
          generateEnemyStats(mobRatGroup["maxHP"],mobRatGroup["physicalAttack"],mobRatGroup["magicalAttack"],mobRatGroup["physicalDefence"],mobRatGroup["magicDefence"],mobRatGroup["expDrop"]);
          itemDrop = mobRatGroup["itemDrop"];
          AI = mobRatGroup["AI"];
          enemyImage.src = mobRatGroup["imgSrc"];
          listEnemyStats();
          goldDrop = mobRatGroup["goldDrop"];
          break;
    }
    break;

    case 3://castle gaurd
      switch(getRandomInt(1,6)){
        case 1:
        case 2:
        case 4:
          enemyName = mobGuard["enemyName"];
          generateEnemyStats(mobGuard["maxHP"],mobGuard["physicalAttack"],mobGuard["magicalAttack"],mobGuard["physicalDefence"],mobGuard["magicDefence"],mobGuard["expDrop"]);
          itemDrop = mobGuard["itemDrop"];
          AI = mobGuard["AI"];
          enemyImage.src = mobGuard["imgSrc"];
          listEnemyStats();
          goldDrop = mobGuard["goldDrop"];
          break;
        case 3:
        case 5:
          enemyName = mobGuardMage["enemyName"];
          generateEnemyStats(mobGuardMage["maxHP"],mobGuardMage["physicalAttack"],mobGuardMage["magicalAttack"],mobGuardMage["physicalDefence"],mobGuardMage["magicDefence"],mobGuardMage["expDrop"]);
          itemDrop = mobGuardMage["itemDrop"];
          AI = mobGuardMage["AI"];
          enemyImage.src = mobGuardMage["imgSrc"];
          listEnemyStats();
          goldDrop = mobGuardMage["goldDrop"];
          break;

        case 6://Groupd of rats
          enemyName = mobRatGroup["enemyName"];
          generateEnemyStats(mobRatGroup["maxHP"],mobRatGroup["physicalAttack"],mobRatGroup["magicalAttack"],mobRatGroup["physicalDefence"],mobRatGroup["magicDefence"],mobRatGroup["expDrop"]);
          itemDrop = mobRatGroup["itemDrop"];
          AI = mobRatGroup["AI"];
          enemyImage.src = mobRatGroup["imgSrc"];
          listEnemyStats();
          goldDrop = mobRatGroup["goldDrop"];
          break;
      }
    break;
 //bosses!!!!!!

	case 10:
		enemyName = mobRabidDog["enemyName"];
		generateEnemyStats(mobRabidDog["maxHP"],mobRabidDog["physicalAttack"],mobRabidDog["magicalAttack"],mobRabidDog["physicalDefence"],mobRabidDog["magicDefence"],mobRabidDog["expDrop"]);
			 itemDrop = mobRabidDog["itemDrop"];
		AI = mobRabidDog["AI"];
			enemyImage.src = mobRabidDog["imgSrc"];
		listEnemyStats();
		goldDrop = mobRabidDog["goldDrop"];
		break;


	case 11:
		enemyName = mobGoblinBoss["enemyName"];
		generateEnemyStats(mobGoblinBoss["maxHP"],mobGoblinBoss["physicalAttack"],mobGoblinBoss["magicalAttack"],mobGoblinBoss["physicalDefence"],mobGoblinBoss["magicDefence"],mobGoblinBoss["expDrop"]);
		itemDrop = mobGoblinBoss["itemDrop"];
		AI = mobGoblinBoss["AI"];
		enemyImage.src = mobGoblinBoss["imgSrc"];
		listEnemyStats();
		goldDrop = mobGoblinBoss["goldDrop"];
		break;

		case 12:
		enemyName = mobSpiderQueen["enemyName"];
		generateEnemyStats(mobSpiderQueen["maxHP"],mobSpiderQueen["physicalAttack"],mobSpiderQueen["magicalAttack"],mobSpiderQueen["physicalDefence"],mobSpiderQueen["magicDefence"],mobSpiderQueen["expDrop"]);
		itemDrop = mobSpiderQueen["itemDrop"];
		AI = mobSpiderQueen["AI"];
		enemyImage.src = mobSpiderQueen["imgSrc"];
		listEnemyStats();
		goldDrop = mobSpiderQueen["goldDrop"];
		break;


	case 13:
		enemyName = mobWizard["enemyName"];
		generateEnemyStats(mobWizard["maxHP"],mobWizard["physicalAttack"],mobWizard["magicalAttack"],mobWizard["physicalDefence"],mobWizard["magicDefence"],mobWizard["expDrop"]);
		itemDrop = mobWizard["itemDrop"];
		AI = mobWizard["AI"];
		enemyImage.src = mobWizard["imgSrc"];
		listEnemyStats();
		goldDrop = mobWizard["goldDrop"];
		break;


	case 14:
		enemyName = mobDemonLord["enemyName"];
		generateEnemyStats(mobDemonLord["maxHP"],mobDemonLord["physicalAttack"],mobDemonLord["magicalAttack"],mobDemonLord["physicalDefence"],mobDemonLord["magicDefence"],mobDemonLord["expDrop"]);
		itemDrop = mobDemonLord["itemDrop"];
		AI = mobDemonLord["AI"];
		enemyImage.src = mobDemonLord["imgSrc"];
		listEnemyStats();
		goldDrop = mobDemonLord["goldDrop"];
		break;

  }
}


//************************MONSTER ATTACKS************************************
function mobWeakAttack(){
  var movePower = 5;
  setMessage("The enemy prepares for", "a melee based attack!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyPhyAttack+movePower,Math.floor(playerTotalPhyDefence*ironPotionEffect));
    setMessage("The enemy attacks you","with a weak attack!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}


function mobStrongAttack(){
  var movePower = 20;
  setMessage("The enemy prepares for", "a melee based attack!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyPhyAttack+movePower,Math.floor(playerTotalPhyDefence*ironPotionEffect));
    setMessage("The enemy attacks you","with a strong attack!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobTackle(){
  var movePower = 10;
  setMessage("The enemy prepares for", "a melee based attack!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyPhyAttack+movePower,Math.floor(playerTotalPhyDefence*ironPotionEffect));
    setMessage("The enemy tackles you","with their full force!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobSwordSlash(){
  var movePower = 30;
  setMessage("The enemy prepares for", "a melee based attack!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyPhyAttack+movePower,Math.floor(playerTotalPhyDefence*ironPotionEffect));
    setMessage("The slashes their sword","fiercely!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobCastFreeze(){
  var movePower = 10;
  setMessage("The enemy starts chanting", "and tries to cast a spell!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyMagAttack+movePower,Math.floor(playerTotalMagDefence*ironPotionEffect));
    setMessage("The enemy freezes you","lowering your defence!");
    console.info("hit");
    if (ironPotionEffect > 0.5){
      ironPotionEffect = ironPotionEffect/2;
    }
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobCastFire(){
  var movePower = 15;
  setMessage("The enemy starts chanting", "and tries to cast a spell!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyMagAttack+movePower,Math.floor(playerTotalMagDefence*ironPotionEffect));
        console.info("hit");
      setMessage("The enemy cast fire burning","away your health!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobCastThunder(){
  var movePower = 25;
  setMessage("The enemy starts chanting", "and tries to cast a spell!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyMagAttack+movePower,Math.floor(playerTotalMagDefence*ironPotionEffect));
    setMessage("The enemy zaps you","with a thunderbolt!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobBreathFire(){
  var movePower = 30;
  setMessage("The enemy breathes in deeply", "and prepares to exhale!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyMagAttack+movePower,Math.floor(playerTotalMagDefence*ironPotionEffect));
    setMessage("The enemy breathes fire","which also lowers your attack!");
    if (berserkPotionEffect > 0.5){
      berserkPotionEffect = berserkPotionEffect/2;
    }
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobBegMercy(){
  setMessage("Please strong warrior, we are weak","Let us go, we pose no threat!");
}

function mobTryToRun(){
  setMessage("The younglings turn around","and try to run!");
}

function mobReason(){
  setMessage("Fighting doesn't solve anything","Please let us live!");
}


function  mobUltimateGNova(){
  var movePower = 50;
  setMessage("Demon Lord Grandma casts","Ultimate G Nova!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyMagAttack+movePower,Math.floor(playerTotalMagDefence*ironPotionEffect));
    setMessage("Its power is... ","OUT OF THIS WORLD!!!");
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}

function mobHeal(){
  enemyHP = enemyHP + calculateEnemyHeal(200);
  setMessage("The enemy casts a healing spell,","They recover some of their health!");
  if (smokeBombEffect != 1){
    smokeBombEffect == 1;
    setMessage("The spell also reset the effects"," of your smoke bomb!");
  }
}

function mobPotion(){
  enemyHP = enemyHP + calculateEnemyHeal(100);
  setMessage("The enemy drinks a potion,","They recover some of their health!");
}

function mobStickyWeb(){
  var movePower = 5;
  setMessage("The enemy eyes you up", "its web shooter ready!");
  if ((getRandomInt(1,100)) < (90*smokeBombEffect)){
    currentHP = currentHP - calculateDamageDealt(enemyMagAttack+movePower,Math.floor(playerTotalMagDefence*ironPotionEffect));
    setMessage("The enemy traps you in their web,","Lowering your attack!");
    if (berserkPotionEffect > 0.5){
      berserkPotionEffect = berserkPotionEffect/2;
    }
  }
  else{
    setMessage("You dodged then enemies attack!","You took no damage! GG!")
  }
  console.info("Player HP after attack: " + currentHP);
}


function selectMonsterMove(){
  switch (AI){

      case 1: //BASIC
        switch(getRandomInt(1,2)){
          case 1:
            mobWeakAttack();
            break;
          case 2:
            mobTackle();
            break;
        }
        break;

      case 2: //KNIGHT
        switch(getRandomInt(1,3)){
          case 1:
            mobStrongAttack();
            break;
          case 2:
            if (enemyHP < enemyMaxHP){
              mobPotion();
            }else{
              mobSwordSlash();
              }
            break;
          case 3:
            mobSwordSlash();
            break;
        }
        break;

      case 3: //MAGE
        switch(getRandomInt(1,3)){
          case 1:
            if (enemyHP < enemyMaxHP){
              mobHeal();
            }
            else{
              mobCastFire();
            }
            break;

          case 2:
            mobCastFreeze();
            break;
          case 3:
            mobCastFire();
            break;
        }
        break;

      case 4: //SPIDER
        switch(getRandomInt(1,2)){
          case 1:
            mobWeakAttack();
            break;
          case 2:
            mobStickyWeb();
            break;
        }
        break;

      case 5: //GIANT SPIDER
        switch(getRandomInt(1,3)){
          case 1:
            mobStrongAttack();
            break;
          case 2:
            mobTackle();
            break;
          case 3:
            mobStickyWeb();
            break;
        }
        break;

      case 6: //SPIDER QUEEN
        switch(getRandomInt(1,3)){
          case 1:
            mobBreathFire();
            break;
          case 2:
            mobStrongAttack();
            break;
          case 3:
            mobStickyWeb();
            break;
        }
        break;

      case 7: //STRONG ATTACKER
        switch(getRandomInt(1,2)){
          case 1:
            mobTackle();
            break;
          case 2:
            mobStrongAttack();
            break;
        }
        break;

      case 8: //YOUNGLIN
        switch(getRandomInt(1,3)){
          case 1:
            mobReason();
            break;
          case 2:
            mobTryToRun();
            break;
          case 3:
            mobBegMercy();
            break;
        }
        break;

      case 9: //WIZARD
        switch(getRandomInt(1,4)){
          case 1:
            mobCastFire();
            break;
          case 2:
            mobCastThunder();
            break;
          case 3:
            mobCastFreeze();
            break;
          case 4:
            if (enemyHP < enemyMaxHP){
              mobHeal();
            }
            else{
              mobCastFire();
            }
            break;
        }
        break;

      case 10: //FINAL BOSS
        switch(getRandomInt(1,10)){
          case 1:
            mobCastFire();
            break;
          case 2:
            if (enemyHP < enemyMaxHP){
              mobHeal();
            }
            else{
              mobCastFire();
            }
            break;
          case 3:
            mobCastFreeze();
            break;
          case 4:
            mobStrongAttack();
            break;
          case 5:
            mobBreathFire();
            break;
          case 6:
            mobCastThunder();
            break;
          case 7:
          case 8:
          case 9:
          case 10:
            mobUltimateGNova();
            break;
        }
        break;

  }
}

function enemyOpeningMessage(){//outputs an opening message based on specific enemies
  switch (enemyName){
    case "Rabid Dog":
      setMessage("Ruff Ruff!","(I am a rabid dog) BARK!");
      break;
    case "A Group of Rats":
      setMessage("As the Shepard, I won't","let you beat my Congregation");
      break;
    case "Goblin Younglings":
      setMessage("*They appear weak...*","*Maybe I should just walk away*");
      break;
    case "Goblin Boss":
      setMessage("You invade my camp,","kill my men and want my treasure?");
      setMessage("Prepare to die by my","sword arm!");
      break;
    case "Spider Queen":
      setMessage("(Err... do spiders)","(even make sounds?)");
      setMessage("(WHATEVER!!! Prepare to)","(die for trespassing into my cave!)");
      break;
    case "Wizard":
      setMessage("Finally, the Demon Lord","is reborn!");
      setMessage("You have served your","purpose "+ name +" now!");
      setMessage("So now I will offer your life","to my Lord!!!!");
      break;
     //case "Rat":
     //case "Bat":
    case "Demon Lord Grandma!!!":
      setMessage(name + " long time,","no see my grandchild");
      setMessage("Don't get full of yourself","just because you beat my puppet");
      setMessage("Why don't you join me?","No, we both know that cannot be");
      setMessage("Now raise your weapon","and prepare to be CRUSHED!");
      setMessage("By my demon might!!!!","Die now" + name + "!");
      break;
  }

}

function enemyDefeatMessage(){//outputs an opening message based on specific enemies
  switch (enemyName){
    case "Rabid Dog":
      setMessage("Ruff Ruff!","(I am a dead dog) BARK!");
      canProgress();
      incrementQuest();
      canMove = true;
      showTextMessage = false;
      phaseHolder = 0;
          activeControls = 0;
      //drawCanvas();
      break;
    case "Goblin Boss":
      setMessage("Fine, take our treasure...","Just know that...");
      setMessage("One day we shall rebuild","We have the technology!");
      canProgress();
      incrementQuest();
      canMove = true;
      showTextMessage = false;
      phaseHolder = 0;
          activeControls = 0;
      //drawCanvas();
      break;
    case "Spider Queen":
      setMessage("(We lost...)","(Congratulations Hero)");
      setMessage("(You killed a spider!)","(such strength, such wow, such heroics)");
      canProgress();
      incrementQuest();
      canMove = true;
      showTextMessage = false;
      phaseHolder = 0;
        activeControls = 0;
      //drawCanvas();
      break;
    case "Wizard":
      setMessage("Master...","Take my remaining magic...");
      setMessage("and my soul...","Avenge me!!!!");
      canProgress();
      incrementQuest();
      canMove = true;
      showTextMessage = false;
      phaseHolder = 0;
      //drawCanvas();
      break;
     //case "Rat":
     //case "Bat":
    case "Demon Lord Grandma!!!":
      setMessage("So killed by my own","Grandchild....?");
      setMessage("On the one hand","I am sad...");
      setMessage("But on another...","I now know that...");
      setMessage("You also carry the","demon lord's blood...");
      setMessage("Maybe some day","You will too will realise its power!");
      canProgress();
      incrementQuest();
      canMove = true;
      showTextMessage = false;
      phaseHolder = 0;
      //drawCanvas();
      break;
  }

}


//************************ENEMY TURN*********************
function enemyTurn(combatInput){
  switch (combatInput){
    case 6:
      console.info("Enemy Attack!");
      console.info("Attack, current player HP before attack Player HP: " + currentHP);
      selectMonsterMove();//selects different moves based on the enemy's AI set
      didPlayerLose();//checks to see if the player lost the fight
      break;
  }
}
