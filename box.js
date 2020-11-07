class Box{
    constructor(x,y,w,h){
        var options = {
            
            restitution: 0.8,
            density: 0.04,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
        
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.w,this.h);
        pop();
    }
}