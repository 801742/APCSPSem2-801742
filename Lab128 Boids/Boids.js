
class Boid{
  constructor(x, y, dx, dy){
    this.w=15;
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
  //fill(this.clr)
  //ellipse(this.loc.x, this.loc.y, this.w, this.w);
  for(var i = 0; i < boids.length; i++){
    if(this.loc.dist(boids[i] < 200 )){
      line(this.loc.x,this.loc.y,boid[i].x, boid[i].y)
    }
  }
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
  //var distToMainBall
  //var distToMainBallrep
//  if(this.id >= 0){
//    distToMainBallrep = this.loc.dist(mainBallrep.loc);
//    distToMainBall = this.loc.dist(mainBall.loc);
//    if(distToMainBall < 800){
//      this.acc = p5.Vector.sub(mainBall.loc, this.loc);
//      this.acc.normalize();
//      this.acc.mult(.07);
//    }
//    if(distToMainBall < 150){
//      this.acc = p5.Vector.sub(mainBallrep.loc, this.loc);
//      this.acc.normalize();
//      this.acc.mult(.5);
//    }
//  }
  this.vel.limit(5);
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}//end of update

}//end of ball class
