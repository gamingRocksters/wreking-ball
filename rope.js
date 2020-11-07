class Rope{
    constructor(bodyA,pointB){
      var options={
          bodyA:bodyA,
          pointB: pointB,
          stiffness:1,
          lenght:250
      }
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world,this.rope);
    }
    show(){
        if(this.rope.bodyA){
     var pointA = this.rope.bodyA.position;
     var pointB = this.pointB;
     push();
     strokeWeight(2);
     stroke("red");
     line(pointB.x,pointB.y,pointA.x,pointA.y);
     pop();
        }
    }
}