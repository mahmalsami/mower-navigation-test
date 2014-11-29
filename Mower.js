'use strict' ;

console.log('Loading Mower.js');

function Mower (direction,initX,initY) {
    this.direction = direction;
    this.X = initX;
    this.Y = initY;
}
 
Mower.prototype.getInfo = function() {
    return this.direction + ' {' + this.initX +';'+ this.initY + '}';
};

var mower1 = new Mower('weird');

console.log(mower1.getInfo());