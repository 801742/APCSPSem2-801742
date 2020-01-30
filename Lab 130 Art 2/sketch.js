//  Andrew Mills
// 	1/28/19
// Boids

var boids = []
var mainBoid;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  loadBoids(3);
}
//  The draw function is called @ 30 fps
function draw() {
  background(255,255,255);
  runBoids();

}

function loadBoids(n){
    for(var i =0; i < n; i++){
      boids[i] = new Boid(random(width), random(height), random(-2, 2), random(-2, 2), 25, i);
  }
      mainBoid = new Boid(random(width), random(height), random(-2, 2), random(-2, 2), 50, -1)
}

function runBoids(){
    for(var i = 0; i < boids.length; i++){
      boids[i].run();
  }
  mainBoid.run();

}
