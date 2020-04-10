var battle = new Audio('./sub/battle.mp3');
var camp = new Audio('./sub/camp.mp3');
var casino = new Audio('./sub/casino.mp3');
var castletown = new Audio('./sub/castletown.mp3');
var castle = new Audio('./sub/castle.mp3');
var cave = new Audio('./sub/cave.mp3');
var field = new Audio('./sub/field.mp3');
var menu = new Audio('./sub/menu.mp3');
var village = new Audio('./sub/village.mp3');


function playBattle(){battle.play();}
function stopBattle(){
  battle.pause();
  battle.currentTime = 0;
}

function playCamp(){camp.play();}
function stopCamp(){
  camp.pause();
  camp.currentTime = 0;
}

function playCasino(){casino.play();}
function stopCasino(){
  casino.pause();
  casino.currentTime = 0;
}

function playCastletown(){castletown.play();}
function stopCastletown(){
  castletown.pause();
  castletown.currentTime = 0;
}

function playCastle(){castle.play();}
function stopCastle(){
  castle.pause();
  castle.currentTime = 0;
}

function playCave(){cave.play();}
function stopCave(){
  cave.pause();
  cave.currentTime = 0;
}

function playField(){field.play();}
function stopField(){
  field.pause();
  field.currentTime = 0;
}

function playMenu(){menu.play();}
function stopMenu(){
  menu.pause();
  menu.currentTime = 0;
}

function playVillage(){village.play();}
function stopVillage(){
  village.pause();
  village.currentTime = 0;
}

function stopAllSounds(){
  stopBattle();
  stopCamp();
  stopCasino();
  stopCastletown();
  stopCastle();
  stopCave();
  stopField();
  stopMenu();
  stopVillage();
}

function playMusic(zone){
  stopAllSounds();
  switch (zone){
    case 0:
    playVillage();
    break;
    case 1:
    playField();
    break;
    case 2:
    playCastletown();
    break;
    case 3:
    playCastle();
    break;
    case 4:
    playCamp();
    break;
    case 5:
    playCamp();
    break;
    case 6:
    playCave();
    break;
    case 7:
    playCasino();
    break;
    case 8:
    playBattle();
    break;
  }
}

function Volume(){
    battle.volume = volLevel;
    camp.volume = volLevel;
    casino.volume = volLevel;
    castle.volume = volLevel;
    castletown.volume = volLevel;
    cave.volume = volLevel;
    field.volume = volLevel;
    menu.volume = volLevel;
    village.volume = volLevel;

}

//playVillage();
