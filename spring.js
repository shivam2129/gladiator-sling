class Spring{
    constructor(bodyA,bodyB){
     var options = {
      bodyA : bodyA,
      bodyB : bodyB,
      stiffness : 0.07,
      length : 10

     }
    this.spring = Constraint.create(options);
    World.add(world,this.spring);
    }

   display(){
    var posA = this.spring.bodyA.position;
    var posB = this.spring.bodyB.position;
   push()
   stroke("coral")
   strokeWeight(3)
   line(posA.x,posA.y,posB.x,posB.y)
   pop()
   }



}