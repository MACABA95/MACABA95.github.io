var playing = false;
var looping = false;
var song;
var prev;
var play;
var next;
var loop1;
var stop;
var rand;
var value;
var sel;
var analyzer;
var i = 0;
var item;


function setup() {

  prev = createButton('<<');
  prev.mousePressed(togglePrev);
  prev.style('font-size','50px');

  play = createButton('Play');
  play.mousePressed(toggleAudio); 
  play.style('font-size','50px');

  next = createButton('>>');
  next.mousePressed(toggleNext);
  next.style('font-size','50px');

  loop1 = createButton('Loop');
  loop1.mousePressed(toggleLoop);
  loop1.style('font-size','50px');

  stop = createButton('Stop');
  stop.mousePressed(toggleStop);
  stop.style('font-size','50px');

  rand = createButton('Random');
  rand.mousePressed(toggleRandom);
  rand.style('font-size','50px');
  
  sel = createSelect();
  sel.option('Keep Your Eyes Peeled');
  sel.option('Santeria');
  sel.option("She's Lost Control");
  sel.changed(mySong);
  sel.style('font-size','50px');
  sel.position(790,8);

  createCanvas(windowWidth, windowHeight);
  
  song = createAudio(['KeepYourEyesPeeled.mp3']);
  analyzer = new p5.Amplitude();
 
} 

function draw(){

  analyzer.setInput(song);

  background(bgcolor="#2F4F4F");
  var amp = analyzer.getLevel();
  fill(127);
  stroke(0);
  ellipse(650, 300, 100+amp*200, 100+amp*200);
}



function mySong() {
      item = sel.value();
   
    switch(item) {
      case 'Keep Your Eyes Peeled':
      song.stop();
      i = 0;
      song = createAudio(['KeepYourEyesPeeled.mp3']);
      song.play();
      play.html('Pause');
      break;
      case 'Santeria':
      song.stop();
      i = 1;
      song = createAudio(['Santeria.mp3']);
      song.play();
      play.html('Pause');
      break;
      case "She's Lost Control":
      song.stop();
      i = 2;
      song = createAudio(['ShesLostControl.mp3']);
      song.play();
      play.html('Pause');
      break;
  }
}


function toggleAudio() {
  if (playing) {
    song.pause();
    play.html('Play');
  } else {
    song.play();
    play.html('Pause');
  }
  playing = !playing;
}

function toggleLoop() {
  if (looping) {
    song.loop();
    loop1.html('Unloop');
      if (playing){
         song.play();}
           else {
             song.pause();
                }

  } 
  else {
    song.noLoop();
    loop1.html('Loop');
    }
  
  looping = !looping;
}

function toggleStop() {
    song.stop();
    play.html('Play');  
}

function toggleNext(){ 
  song.stop(); 
  i = (i+1)%3;

  var a = 'KeepYourEyesPeeled.mp3';
  var b = 'Santeria.mp3';
  var c = 'ShesLostControl.mp3';

  var n = [a,b,c];

  song = createAudio([n[i]]);

  switch(i){
    case(0):
    sel.value('Keep Your Eyes Peeled');
    break;
    case(1):
    sel.value('Santeria');
    break;
    case(2):
    sel.value("She's Lost Control");
    break;
  }

  song.play();
  play.html('Pause');


}

function togglePrev(){

  song.stop();
  if(i>0)
  i = i-1%3;
  else{
    i = 2;
  }

  var a = 'KeepYourEyesPeeled.mp3';
  var b = 'Santeria.mp3';
  var c = 'ShesLostControl.mp3';

  var n = [a,b,c];

  song = createAudio([n[i]]);

  switch(i){
    case(0):
    sel.value('Keep Your Eyes Peeled');
    break;
    case(1):
    sel.value('Santeria');
    break;
    case(2):
    sel.value("She's Lost Control");
    break;
  }

  song.play();
  play.html('Pause');


}

function toggleRandom(){
  song.stop();
  var rn = Math.floor(Math.random() * 3);
  console.log(rn);

  switch(rn){
    case(0):
    sel.value('Keep Your Eyes Peeled');
    song = createAudio(['KeepYourEyesPeeled.mp3']);
    song.play();
    play.html('Pause');
    break;
    case(1):
    sel.value('Santeria');
    song = createAudio(['Santeria.mp3']);
    song.play();
    play.html('Pause');
    break;
    case(2):
    sel.value("She's Lost Control");
    song = createAudio(['ShesLostControl.mp3']);
    song.play();
    play.html('Pause');
    break;
    

  }

}

