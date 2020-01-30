
class Boid{
  constructor(x, y, dx, dy, w, id){
    this.id = id;
    this.w = w;
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0)
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  var distance;
  ellipse(this.loc.x, this.loc.y, this.w, this.w)
//  for(var i = 0; i < boids.length; i++){
//    distance = this.loc.dist(boids[i].loc)
//    if(distance < 200){
//      stroke(this.clr)
//      line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
//    }
//  }
}
  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }

update(){
if(this.id === 1){
  this.loc.x = mainBoid.loc.x - 40;
  this.loc.y = mainBoid.loc.y - 40;
}else if(this.id === 2){
  this.loc.x = mainBoid.loc.x + 40;
  this.loc.y = mainBoid.loc.y + 40;
}else if(this.id === 0){
  this.loc.x = mainBoid.loc.x + 25;
  this.loc.y = mainBoid.loc.y - 50;
}


  this.vel.limit(5);
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}//end of update

}//end of ball class
