'use strict' ;

console.log('Loading Mower.js');

function Mower (direction,initX,initY) {
    this.direction = direction;
    this.X = initX;
    this.Y = initY;
}
 
Mower.prototype.getInfo = function() {
    return this.direction + ' {' + this.X +';'+ this.Y + '}';
};

// Mower.prototype.rotate = function(way) {
//     this.direction = null;
// };

Mower.prototype.move = function() {
	var mower=this;
	switch (this.direction) { //N,E,W,S
		case 'N' :
			mower.Y += 1;
		//mower.X = 1;
		console.log('moving North');
		break;

		case 'E' :
			mower.X += 1;
		//mower.X = 1;
		console.log('moving East');
		break;

		case 'W' :
			mower.X -= 1;
		//mower.X = 1;
		console.log('moving West');
		break;

		case 'S' :
			mower.Y -= 1;
		//mower.X = 1;
		console.log('moving South');
		break;
	}

};

var mower1 = new Mower('N',0,0);

mower1.move();
console.log(mower1.getInfo());