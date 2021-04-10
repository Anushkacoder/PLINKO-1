class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic : true
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.color = color(random(0,255), random(0,255), random(0,255), random(0,255));
        Matter.World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}