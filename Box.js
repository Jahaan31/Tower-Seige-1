class Box{
    constructor(x,y){
        var options={
            restitution:0.4,
            friction:1,
            density:0.1
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.w = 40
        this.h = 40
        World.add(myworld, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}