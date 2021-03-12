class Chain {

constructor(bodyA,bodyB,offsetX,offsetY){

this.offsetX = offsetX;
this.offsetY = offsetY;

var option = {

    bodyA:bodyA,
    bodyB:bodyB,
    stiffness : 0.05,
    length : 500
  //  PointB :{x:this.offsetX,y:this.offsetY}

}

this.chain = Constraint.create(option);
World.add(world,this.chain);


}
display(){

var PointA = this.chain.bodyA.position;
var PointB = this.chain.bodyB.position;

//var Anchor1X = PointA.x;
//var Anchor1Y = PointA.y;

var Anchor2X = PointA.x + this.offsetX;
var Anchor2Y = PointA.y + this.offsetY;

strokeWeight(2);

line(Anchor2X,Anchor2Y,PointB.x,PointB.y);



}





}

