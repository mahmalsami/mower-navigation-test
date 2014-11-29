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


Mower.prototype.rotate = function(way) {
	var mower = this;
	var currentDirection = this.direction;
	
	var directions = ['N','E','S','W'];

	function getFutureDirection(i) {
		//Case Moving from North to West
		if(i==-1) {
			i = 3;
		}
		//Case Moving from West to North
		if(i==4){
			i = 0;
		}
		return i;
	}

	var i = 0;

	//Find current direction
	while (directions[i] != currentDirection){
		i+=1;
	}

	//Update direction
	if(way=='G'){
		this.direction = directions[getFutureDirection(i-1)];
	}else{//right
		this.direction = directions[getFutureDirection(i+1)];
	}
};


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

//Initating a Mower
var mower1 = new Mower('N',0,0);

//Moving a Mower
mower1.move();
mower1.rotate('G');
mower1.rotate('R');
mower1.rotate('R');
mower1.rotate('G');

console.log(mower1.getInfo());