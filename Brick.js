class Brick 
{
  constructor(x, y, w, h) 
  {
    var options = {
      isStatic:true,
      restitution:0.95,
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
}
