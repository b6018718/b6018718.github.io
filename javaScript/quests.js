var currentQuest;
var currentQuestPoint;
var currentQuestDesc1;
var currentQuestDesc2;
var quests = [];
quests[0] = []; //get the bone from the dog
quests[0][0] = new questPoint(true, false, "Find the dog", "in the village", false);
quests[0][1] = new questPoint(false, false, "Defeat the dog", "in battle", false);
quests[0][2] = new questPoint(false, false, "Speak to the king", "in the castle in Castletown", false);
quests[0][3] = new questPoint(false, false, "Speak to the wizard", "in the castle in Castletown", false);
quests[1] = []; //get the sword from the cave
quests[1][0] = new questPoint(false, false, "Speak to the king", "in the castle in Castletown", false);
quests[1][1] = new questPoint(false, false, "Buy a sword", "from the market stall in Castletown", false);
quests[2] = []; //get the staff
quests[2][0] = new questPoint(false, false, "Go to the camp", "to the right of the field", false);
quests[2][1] = new questPoint(false, false, "Get the staff", "from the Goblin Camp", false);
quests[2][2] = new questPoint(false, false, "Return the staff", "to the wizard in the castle", false);
quests[3] = []; //get the hat
quests[3][0] = new questPoint(false, false, "Get the hat", "from the market stall", false);
quests[3][1] = new questPoint(false, false, "Return the hat", "to the wizard in the castle", false);
quests[4] = []; //get the orb
quests[4][0] = new questPoint(false, false, "Go to the cave", "to the left of the field", false);
quests[4][1] = new questPoint(false, false, "Get the orb", "from the cave", false);
quests[4][2] = new questPoint(false, false, "Return the orb", "to the wizard in the castle", false);
quests[5] = []; //get the necklace
quests[5][0] = new questPoint(false, false, "Break into the castle", "to get the necklace", false);
quests[5][1] = new questPoint(false, false, "Get the necklace", "from the Princess' room", false);
quests[5][2] = new questPoint(false, false, "Get out of the castle", "to avoid capture", false);
quests[5][3] = new questPoint(false, false, "Return the necklace", "to the wizard in the castle", false);
quests[6] = []; //fight the wizard
quests[6][0] = new questPoint(false, false, "Go to the village", "to find the wizard", false);
quests[6][1] = new questPoint(false, false, "Speak to the wizard", "to save the village", false);
quests[6][2] = new questPoint(false, false, "Fight the wizard", "because he summoned a demon", false);
quests[7] = []; //fight the demon
quests[7][0] = new questPoint(false, false, "Fight the demon", "to save the country from destruction", false);
quests[8] = []; //speak to the king / end game
quests[8][0] = new questPoint(false, false, "Speak to the king", "in the castle in Castletown", false);

//constructor for quest points
function questPoint(active, completed, description1, description2, canProgress){
  this.active = active;
  this.completed = completed;
  this.description1 = description1;
  this.description2 = description2;
  this.canProgress = canProgress;
}

//get the current quest, quest point and quest description
function findQuest(){
  var found;
  while (!found){
    for (var q = 0; q < quests.length; q++){
      for (var qP = 0; qP < quests[q].length; qP++){
        if (quests[q][qP].active === true){
          currentQuest = q;
          currentQuestPoint = qP;
          currentQuestDesc1 = quests[q][qP].description1;
          currentQuestDesc2 = quests[q][qP].description2;
          found = true;
        }
      }
    }
  }
}

//enable the user to progress from the current quest point
function canProgress(){
  quests[currentQuest][currentQuestPoint].canProgress = true;
}

//move on to the next quest point
function incrementQuest(){
  if (quests[currentQuest][currentQuestPoint].canProgress){
    if(currentQuestPoint < quests[currentQuest].length - 1){
      quests[currentQuest][currentQuestPoint].completed = true;
      quests[currentQuest][currentQuestPoint].active = false;
      currentQuestPoint++;
      quests[currentQuest][currentQuestPoint].active = true;
    }
    else{
      if (currentQuest != quests.length){
        quests[currentQuest][currentQuestPoint].completed = true;
        quests[currentQuest][currentQuestPoint].active = false;
        currentQuest++;
        currentQuestPoint = 0;
        quests[currentQuest][currentQuestPoint].active = true;
      }
    }
  }
}

//quest related things the dog needs to do
var dogFunction = function(){
	if (currentQuest === 0 && currentQuestPoint === 0){
		canProgress();
		incrementQuest();
	}
  else if (currentQuest === 0 && currentQuestPoint === 1){
    canMove = false;
    dir.left = false;
    dir.right = false;
    dir.up = false;
    dir.down = false;
    playMusic(8);
    turnBasedBattle(10);
  }
  else if (currentQuest === 7 && currentQuestPoint === 0){
    canMove = false;
    dir.left = false;
    dir.right = false;
    dir.up = false;
    dir.down = false;
    playMusic(8);
    turnBasedBattle(14);
  }
};

//quest related things the king needs to do
var kingFunctions = function(){
	if (currentQuest === 0 && currentQuestPoint === 2){
		collisions[3][8].signText1 = "You poor soul...";
		collisions[3][8].signText2 = "Don't lose hope young one.";
		canProgress();
		incrementQuest();
	}
	else if (currentQuest === 1 && currentQuestPoint === 0){
		canProgress();
		incrementQuest();
	}
  else if (currentQuest === 8 && currentQuestPoint === 0){
    gameOver = true;
  }
};

//quest related things the wizard needs to do
var wizFunction = function(){
	if (currentQuest === 0 && currentQuestPoint === 3){
		if (!quests[currentQuest][currentQuestPoint].canProgress){
			canProgress();
      collisions[3][8].signText1 = "I need you to gather some items.";
			collisions[3][8].signText2 = "First get yourself a proper sword.";
		}
		else{
      incrementQuest();
			collisions[3][8].signText1 = "The king should have one for you.";
			collisions[3][8].signText2 = "";
			collisions[3][2].signText1 = "Hmm, a sword...";
			collisions[3][2].signText2 = "Well perhaps the armor stall has one.";
		}
	}
	else if(currentQuest === 2 && currentQuestPoint === 2){
		if (true /*will be checking for staff*/){
      collisions[3][8].signText1 = "First buy me a hat, any will do.";
			collisions[3][8].signText2 = "Merci beaucoup!";
			canProgress();
			incrementQuest();
		}
	}
  else if(currentQuest === 3 && currentQuestPoint === 1){
      collisions[3][8].signText1 = "The goblins have been making mischief lately" , "teach them a lesson they won't soon forget.";
			collisions[3][8].signText2 = "The kingdom is grateful for your work.";
			canProgress();
			incrementQuest();
	}
  else if(currentQuest === 4 && currentQuestPoint === 2){
      collisions[3][8].signText1 = " The kingdom thanks you for your service.";
			collisions[3][8].signText2 = "Next I require the necklace of the princess.";
			canProgress();
			incrementQuest();
      canProgress();
			incrementQuest();
      canProgress();
			incrementQuest();
      canProgress();
			incrementQuest();
      canProgress();
			incrementQuest();
	}
  else if(currentQuest === 5 && currentQuestPoint === 3){
		if (true /*will be checking for necklace*/){
      collisions[3][8].signText1 = "The ressurection is almost complete";
      collisions[3][8].signText2 = "You fool.";
			canProgress();
			incrementQuest();
		}
	}
  else if(currentQuest === 6 && currentQuestPoint === 1){
    if (!quests[currentQuest][currentQuestPoint].canProgress){
      canProgress();
      collisions[0][25].signText1 = "*The dog transforms into a horrific beast!*";
      collisions[0][25].signText2 = "Prepare for the ultimate fight!";
    }
    incrementQuest();
    canMove = false;
    dir.left = false;
    dir.right = false;
    dir.up = false;
    dir.down = false;
    playMusic(8);
    turnBasedBattle(13);
	}
  else if(currentQuest === 6 && currentQuestPoint === 2){
    canMove = false;
    dir.left = false;
    dir.right = false;
    dir.up = false;
    dir.down = false;
    playMusic(8);
    turnBasedBattle(13);
  }
};

var campChestFunc = function(){
  if (currentQuest === 2 && currentQuestPoint === 1){
  canMove = false;
  dir.left = false;
  dir.right = false;
  dir.up = false;
  dir.down = false;
  playMusic(8);
  turnBasedBattle(11);
}
};

var caveChestFunc = function(){
  if (currentQuest === 4 && currentQuestPoint === 1){
  canMove = false;
  dir.left = false;
  dir.right = false;
  dir.up = false;
  dir.down = false;
  playMusic(8);
  turnBasedBattle(12);
}
};

var foundGold;
var foundPotion;
var foundPotionAmount;

var chestFunction = function(){
  foundGold = getRandomInt(5, 50);
  foundPotion = getRandomInt(1, 5);
  foundPotionAmount = getRandomInt(1, 3);
  gold += foundGold;
  inventory[foundPotion] += foundPotionAmount;
}
