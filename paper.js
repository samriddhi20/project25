class Paper{
    constructor(x,y,radius){
    var options={
    isStatic:false,
    restitution:0,
    friction:10,
    density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.paper = loadImage("paper.png");
    World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        image(this.paper,0, 0,100,100)
        pop();
    }
     }