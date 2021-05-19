class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            friction:0,
            restitution:0.3,
            density: 1.2 
        }
    
    this.body=Bodies.circle(x,y,radius,options)
    this.x=x;
    this.radius=radius;
    World.add(world, this.body);
}
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius, this.radius);
        pop();
    }


}