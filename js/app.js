// Enemies our player must avoid
const Enemy = function(x, y, rate) {
    // Variables applied to each of our instances go here,

    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.height=45;
    this.width=30;
    this.rate=rate;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x+=2;
  if(this.x>600){
    this.x=-100;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//create player class {
const Player =function () {
    this.sprite='images/char-boy.png';
    this.x=200;
    this.y=400;
    this.height=50;
    this.width=40;
}
//draw player in begining
Player.prototype.render=function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//if user gets to water
Player.prototype.update=function(){
  if(player.y == -25){
    alert("Congratulations!  You win!!! Wanna play again?")
    //reset game
    player.x=200;
    player.y=400;
  }
  //if user touches enemey
  for(i=0; i<allEnemies.length; i++){
    if((allEnemies[i].x+allEnemies[i].width>player.x)&&
    (allEnemies[i].x +allEnemies[i].width>player.x)&&
    (allEnemies[i].y< (player.y +player.height))&&
    ((allEnemies[i].height + allEnemies[i].y)> player.y)){
      player.x=200;
      player.y=400;
    }
  }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy1 = new Enemy(0,60,125);
let enemy2 = new Enemy(0,140,80);
let enemy3 = new Enemy(0,225,200);
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
let player= new Player();

//move player with keyboard input
Player.prototype.handleInput=function(keyPressed){
  if(keyPressed ==="left"){
    //if move is out of bounds
    if (player.x===25){
      return
    }
    player.x-=25;
  }else if(keyPressed==="right"){
    //out of bounds
    if(player.x===375){
      return
    }

  player.x+=25;
  }else if(keyPressed ==="up"){
    player.y-=25;
  }else if(keyPressed==="down"){
  //out of bounds
    if(player.y===425){
      return
    }
    player.y+=25;
  }
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
