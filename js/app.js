// Enemies our player must avoid
var Enemy = function(x, y, rate) {
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
var Player =function () {
    this.sprite='images/char-boy.png';
    this.x=200;
    this.y=425;
    this.height=50;
    this.width=40;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(0,60,125);
const enemy2 = new Enemy(0,140,80);
const enemy3 = new Enemy(0,225,200);
let allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
const player=


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
