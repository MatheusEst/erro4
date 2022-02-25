class link {
    constructor(corp1,corp2){
        var ult = corp1.body.bodies.length - 2
        this.zelda = Constraint.create({
            bodyA:corp1.body.bodies[ult],
            pointA:{x:0,y:0},
            bodyB:corp2,
            pointB:{x:0,y:0},
            length:-20,
            stiffness:0.01
        }
            
            );
            World.add(engine.world,this.zelda)
            console.log(ult)
            console.log(corp1)
    }

    remove(){
        World.remove(engine.world,this.zelda)
    }
}