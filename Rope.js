class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 400
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world, this.rope)
    }

    // fly(){
    //     this.sling.bodyA=null;
    // }

display(){
    
     var pointA= this.rope.bodyA.position;
     var pointB= this.pointB;
    
        strokeWeight(4);
        stroke("white");
        line (pointA.x, pointA.y, pointB.x, pointB.y);
    
    
}

}