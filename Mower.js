'use strict' ;

console.log('Loading Mower.js');

function Mower (direction,initX,initY,lawnX,lawnY) {
    this.direction = direction;
    this.X = initX;
    this.Y = initY;
    this.XLimit = lawnX;
    this.YLimit = lawnY;
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
			if(mower.Y<mower.YLimit){
				mower.Y += 1;
			}
		//mower.X = 1;
		//console.log('moving North');
		break;

		case 'E' :
			if(mower.X<mower.XLimit){
				mower.X += 1;
			}
		//mower.X = 1;
		//console.log('moving East');
		break;

		case 'W' :
			if(mower.X>0){
				mower.X -= 1;
			}
		//mower.X = 1;
		//console.log('moving West');
		break;

		case 'S' :
			if(mower.Y>0){
				mower.Y -= 1;
			}
		//mower.X = 1;
		//console.log('moving South');
		break;
	}

};

Mower.prototype.process = function (sequence) {
	var mower = this;
	var sequenceTab = sequence.split(" ");
	for(var i=0;i<sequenceTab.length;i++){
		if(sequenceTab[i] == 'A') {
			mower.move();
		}else{ //CASE G OR D
			mower.rotate(sequenceTab[i]);
		}
	}
}


function unitaryRotationTests() {
	//Check If Rotation OK:
	var mower = new Mower('N',0,0,5,5);
	mower.getInfo();
	mower.rotate('G');
	mower.rotate('G');
	mower.rotate('G');
	mower.rotate('G');

	if(mower.direction != 'N'){
		console.log('test-1 KO on Rotation');
	}

	var mower = new Mower('N',0,0);
	mower.rotate('G');
	mower.rotate('G');

	if(mower.direction != 'S'){
		console.log('test-2 KO on Rotation');
	}

	var mower = new Mower('N',0,0);
	mower.rotate('D');
	mower.rotate('D');

	if(mower.direction != 'S'){
		console.log('test-3 KO on Rotation');
	}

	var mower = new Mower('N',0,0);
	mower.rotate('D');
	mower.rotate('D');
	mower.rotate('D');
	mower.rotate('D');

	if(mower.direction != 'N'){
		console.log('test-4 KO on Rotation');
	}
}

function unitaryMovingTests() {
	var mower = new Mower('N',0,0,5,5);
	mower.getInfo();

	mower.rotate('G');
	mower.move();
	mower.move();

	if(mower.X != 0){
		console.log('test-5 KO on Rotation');
	}

	mower.rotate('G');
	mower.move();

	mower.rotate('D');
	mower.move();

	mower.rotate('D');
	mower.move();
	mower.move();
	mower.move();
	mower.move();
	mower.move();
	mower.move();
	mower.move();
	mower.move();
	mower.move();
	console.log(mower.getInfo());
}


function specificationValidation() {
	var mower1 = new Mower('N',1,2,5,5);
	mower1.process('G A G A G A G A A');

	if(mower1.X != 1 || mower1.Y != 3 || mower1.direction !='N'){
		console.log('mainTest-1 KO');
	}else{
		console.log(mower1.getInfo());
	}

	var mower2 = new Mower('E',3,3,5,5);
	mower2.process('A A D A A D A D D A');

	if(mower2.X != 5 || mower2.Y != 1 || mower2.direction !='E'){
		console.log('mainTest-2 KO');
	}else{
		console.log(mower2.getInfo());
	}
}

	unitaryRotationTests();
	unitaryMovingTests();

	specificationValidation();