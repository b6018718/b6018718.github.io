function wheelOfFortune(goldBet){//doubles or lose gold betted
	gold = gold - goldBet;
	if (getRandomInt(0,100)<=50){
		goldBet = goldBet * 2;
		gold = gold + goldBet;
		setTextMessage("Lucky! You doubled ","the gold you bet!");		
	}
	else{
		goldBet = goldBet * 0;
		gold = gold + goldBet;
		setTextMessage("You lost the gold"," you bet!");
	}
}

function wheelOfFortuneMenu(cursor){
		switch(cursor){
			case 1:
				wheelOfFortune(50);
				break;
			case 2:
				wheelOfFortune(100);
				break;				
			case 3:
				wheelOfFortune(500);
				break;
			case 4:
				wheelOfFortune(1000);
				break;
			case 5:
				wheelOfFortune(2500);
				break;		
			case 6:
	            canMove = true;
				activeControls = 0;
				break;
	}
}

function rouletteTableMenu(cursor){
		switch(cursor){
			case 1:
				rouletteTable("red");
				break;
			case 2:
				rouletteTable("23");
				break;				
			case 3:
				rouletteTable("3rd 12");
				break;
			case 4:
				rouletteTable("black");
				break;
			case 5:
				rouletteTable("00");
				break;		
			case 6:
	            canMove = true;
				activeControls = 0;
				break;
	}
}

function fruitMachineMenu(cursor){
		switch(cursor){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			fruitMachine();
			break;		
		case 6:
            canMove = true;
			activeControls = 0;
			break;
	}
}

function drawRoulete(){
	myC.drawImage(messageMenu,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Bet on Red",70,520);
	myC.fillText("Bet on 23",370,520);	
	myC.fillText("Bet on 3rd 12",680,520);	
	myC.fillText("Bet on Black",70,585);
	myC.fillText("Bet on 00",370,585);
	myC.fillText("return",680,585);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
   myC.fillText("1 Bet is 100 Gold",30,433);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,520);
			break;
		case 2:
            context.fillText((">" ),346,520);
			break;
		case 3:
            context.fillText((">" ),656,520);
            break;
		case 4:
            context.fillText((">" ),46,585);
			break;
		case 5:
            context.fillText((">" ),346,585);
			break;
		case 6:
            context.fillText((">" ),656,585);
			break;
	}
}

function drawFruitMachine(){
	myC.drawImage(messageMenu,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Go for it!",70,520);
	myC.fillText("Believe in the slots",370,520);	
	myC.fillText("Pull the lever",680,520);	
	myC.fillText("Its only 100 gold",70,585);
	myC.fillText("Take a chance",370,585);
	myC.fillText("return",680,585);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
     myC.fillText("1 Bet is 100 Gold",30,433);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,520);
			break;
		case 2:
            context.fillText((">" ),346,520);
			break;
		case 3:
            context.fillText((">" ),656,520);
            break;
		case 4:
            context.fillText((">" ),46,585);
			break;
		case 5:
            context.fillText((">" ),346,585);
			break;
		case 6:
            context.fillText((">" ),656,585);
			break;
	}	
}

function drawWheelOfFunction(){
	myC.drawImage(messageMenu,0,0);
	myC.font = "20px gameFont";
	myC.fillStyle = '#FFF';
	myC.fillText("Bet 50 gold",70,520);
	myC.fillText("Bet 100 gold",370,520);	
	myC.fillText("Bet 500 gold",680,520);	
	myC.fillText("Bet 1000 gold",70,585);
	myC.fillText("Bet 2500 gold",370,585);
	myC.fillText("return",680,585);
	myC.textAlign="left";
    myC.font = "18px gameFont";
    myC.fillText("Your gold: " + gold, 30,393);
	switch(combatCursorPos){
		case 1:
            context.fillText(">" ,46,520);
            myC.fillText("Small bet eh?" ,30,433);
			break;
		case 2:
            context.fillText(">" ,346,520);
            myC.fillText("A little better" ,30,433);
			break;
		case 3:
            context.fillText(">" ,656,520);
            myC.fillText("Now we are talking!" ,30,433);
            break;
		case 4:
            context.fillText(">" ,46,585);
            myC.fillText("Big man bet here!",30,433);
			break;
		case 5:
            context.fillText(">" ,346,585);
            myC.fillText("Someone has a problem..." ,30,433);
			break;
		case 6:
            context.fillText((">" ),656,585);
			myC.fillText("Leaving with your head?" ,30,433);
			break;
	}
}

function playWheelOfFortune(){
	combatCursorPos = 1;
	activeControls = 13;
}

function playFruitMachineMenu(){//get random amounts
	combatCursorPos = 1;
	activeControls = 14;
}

function playRouletteTable(){
	combatCursorPos = 1;
	activeControls = 15;	
}

function rouletteTable(bet){
	var result = getRandomInt(0,36);
	var goldBet = 100;
	if (gold >= goldBet){	
		gold = gold - goldBet;
		switch(bet){
			case "red":
				if((result == 3)||(result == 9)||(result == 12)||(result == 21)||(result ==27)||(result == 30)||(result == 36)||(result == 5)||(result == 14)||(result == 23)||(result == 32)||(result == 1)||(result == 7)||(result == 16)||(result == 19)||(result == 25)||(result == 34)){
					setTextMessage("The result was " + result,"Which mean your bet on" + bet + " WINS!");
					setTextMessage("Congratulatios you DOUBLED","your monies!!!");
					gold = gold + (goldBet * 2);
				}
				else{
					setTextMessage("The result was " + result,"Unfortunately you lose!");
				}
				break;
			case "23":
				if(result == 23){
					setTextMessage("The result was " + result,"Which mean your bet on" + bet + " WINS!");
					setTextMessage("Congratulatios you multiplied ","your money by 36!!!");
					gold = gold + (goldBet * 36);
				}
				else{
					setTextMessage("The result was " + result,"Unfortunately you lose!");
				}		
				break;
			case "3rd 12":
				if((result == 27)||(result == 33)||(result == 30)||(result == 36)||(result == 26)||(result == 29)||(result == 32)||(result == 35)||(result == 25)||(result == 28)||(result == 31)||(result == 34)){
					setTextMessage("The result was " + result,"Which mean your bet on" + bet + " WINS!");
					setTextMessage("Congratulatios you TRIPLED","your money!!!");
					gold = gold + (goldBet * 3);
				}
				else{
					setTextMessage("The result was " + result,"Unfortunately you lose!");
				}			
				break;
			case "black":
				if(!((result == 3)||(result == 9)||(result == 12)||(result == 21)||(result ==27)||(result == 30)||(result == 36)||(result == 5)||(result == 14)||(result == 23)||(result == 32)||(result == 1)||(result == 7)||(result == 16)||(result == 19)||(result == 25)||(result == 34))){
					setTextMessage("The result was " + result,"Which mean your bet on" + bet + " WINS!");
					setTextMessage("Congratulatios you DOUBLED","your monies!!!");
					gold = gold + (goldBet * 2);
				}
				else{
					setTextMessage("The result was " + result,"Unfortunately you lose!");
				}			
				break;
			case "00":
				if(result==0){
					setTextMessage("The result was " + result,"Which mean your bet on" + bet + " WINS!");
					setTextMessage("Congratulatios you multiplied ","your money by 36!!!");
					gold = gold + (goldBet * 36);
				}
				else{
					setTextMessage("The result was " + result,"Unfortunately you lose!");
				}			
				break;												
		}
	}else{
		setTextMessage("You don't have enough gold","to play here! Get out!");
	}	
}

function fruitMachine(){
	var result = getRandomInt(1,10000);
	var goldBet = 100;
	if (goldBet <= gold){
		setTextMessage("You pull the lever", "Goooooooood luck!");
		gold = gold - goldBet;
		if (result = 1){
			setTextMessage("JACKPOT lucky 777s","Win 100,000 gold")
			gold = gold + 100000;
		}else{
			if(result <= 100){
				setTextMessage("BAR BAR BAR","Win 10,000 gold")
				gold = gold + 10000;				
			}else{
				if(result <= 500){
					setTextMessage("Melon Melon Melon","Win 5,000 gold")
					gold = gold + 5000;	
				}else{
					if(result <= 1000){
						setTextMessage("Lemon Lemon Lemon","Win 1,000 gold")
						gold = gold + 1000;	
					}
					else{
						if(result <= 2500){
							setTextMessage("Cherry Cherry Cherry","Win 500 gold")
							gold = gold + 500;	
						}
						else{
							setTextMessage("Unlucky, you lost","Beter luck next time");
						}
					}
				}
			}
		}
	}else{
		setTextMessage("You don't have enough gold","to play here! Get out!");		
	}		
}