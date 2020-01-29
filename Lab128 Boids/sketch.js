//  Andrew Mills
// 	1/28/19
// Boids

var boids = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  loadBoids(100);
}
//  The draw function is called @ 30 fps
function draw() {
  background(255,255,255);
  runBoids();

}

function loadBoids(n){
    for(var i =0; i < n; i++){
      boids[i] = new Boid(random(width), random(height), random(-2, 2), random(-2, 2));
  }
}

function runBoids(){
    for(var i = 0; i < boids.length; i++){
      boids[i].run();
  }

}
