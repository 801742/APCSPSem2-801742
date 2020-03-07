//  Andrew Mills
// 	Data Representation Project
// Representing Salaries of Jordan, LeBron, Kobe
var graphType;
var updateStats=true;

var lebron$
var kobe$;
var jordan$;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  fill(200, 30, 150);
  textSize(25);
  fill(255,255,0);
  text('Lebron James', 120,50);
  fill(106,13,173);
  text('Kobe Bryant',320,50);
  fill(255,0,0);
  text('Michael Jordan', 520, 50);
}

function draw() {
  if(updateStats){
    textSize(50);
    fill(2,2,2)
    text('Salaries',300,750);
    textSize(25);
    lebron$=loadPlayerStat('Lebron James');
    fill(255,255,0);
    text(str('$'+lebron$),120,75);
    kobe$=loadPlayerStat('Kobe Bryant');
    fill(106,13,173);
    text('$'+str(kobe$),320,75);
    fill(255,0,0);
    jordan$=loadPlayerStat('Michael Jordan');
    text('$'+str(jordan$),520,75);
    updateStats=false;
  }

  fill(2, 2, 2)
  text('Bars', 60, 140)
  rect(60, 150, 50, 50)
  if(mouseIsPressed &&
      mouseX > 35 &&
      mouseX < 85 &&
      mouseY > 125 &&
      mouseY < 175){
        displayBars();
      }

  text('Pie', 66, 230)
  rect(60, 240, 50, 50)
  if(mouseIsPressed &&
      mouseX > 35 &&
      mouseX < 85 &&
      mouseY > 215 &&
      mouseY < 265){
      displayPie();
    }
}

function loadPlayerStat(player){
  salaries=load_salaries();
  salariesArray = salaries.findRows(player, 4);
  var career_salary=0;
  for (var i=0; i<salariesArray.length;i++){
    var value=salariesArray[i].get(3);
    var stringvalue=split(value,'$');
    career_salary+=int(stringvalue[1]);
  }
  return career_salary;
}

function displayPie(){
  var totalCareerSalary=(lebron$ + kobe$ + jordan$);
  var lebronPercentage=(lebron$/totalCareerSalary);
  var kobePercentage=(kobe$/totalCareerSalary);
  var jordanPercentage=(jordan$/totalCareerSalary);
  var angles=[(360*lebronPercentage),(360*kobePercentage),(360*jordanPercentage)];
  var lastAngle=0;
  var lebronColor=color(255,255,0);
  var kobeColor=color(106,13,173);
  var michaelColor=color(255,0,0);
  var colors=[lebronColor,kobeColor,michaelColor];
  for(var i=0;i<angles.length;i++){
    fill(colors[i]);
    arc(
      width/2,
      height/2,
      500,
      500,
      lastAngle,
      lastAngle+radians(angles[i])
    );
    lastAngle+=radians(angles[i]);
    }
    console.log('total');
    console.log(totalCareerSalary)
    console.log('james');
    console.log(lebronPercentage);
    console.log('kobe');
    console.log(kobePercentage);
    console.log('mike');
    console.log(jordanPercentage);

  }
function displayBars(){
clear()
updateStats = true;
setup();
var totalCareerSalary=(lebron$ + kobe$ + jordan$);
var lebronPercentage=(lebron$/totalCareerSalary);
var kobePercentage=(kobe$/totalCareerSalary);
var jordanPercentage=(jordan$/totalCareerSalary);
var angles=[(360*lebronPercentage),(360*kobePercentage),(360*jordanPercentage)];
var lastAngle=0;
var lebronColor=color(255,255,0);
var kobeColor=color(106,13,173);
var michaelColor=color(255,0,0);
var colors=[lebronColor,kobeColor,michaelColor];
line(175, 100, 175, 600)
line(175, 600, 700, 600)
fill(colors[0])
rect((170+((650*.166)/2)),(600-(lebronPercentage*1000)),((650*.333)/2),(lebronPercentage*1000))
fill(colors[1])
rect(((650/2)+60),(600-(kobePercentage*1000)),((650*.333)/2),(kobePercentage*1000))
fill(colors[2])
rect(((650*.8333)),(600-(jordanPercentage*1000)),((650*.333)/2),(jordanPercentage*1000))
}
