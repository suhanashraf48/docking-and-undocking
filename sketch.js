var iss, spacecraft
var hasDocked=false
var invisible
function preload (){
  bg=loadImage ("spacebg.jpg")
  issimg=loadImage('iss.png')
  spacecraftimg=loadAnimation('spacecraft1.png','spacecraft2.png','spacecraft3.png','spacecraft4.png')
spaceImg2=loadAnimation ('spacecraft1.png')}

function setup() {
  createCanvas(1000,800);
  iss=createSprite(500, 300);
  iss. addImage(issimg)
  iss.scale=1.5
  spaceCraft=createSprite(500,700)
  spaceCraft.addAnimation("launch",spacecraftimg)
  spaceCraft.addAnimation("attached",spaceImg2)
  spaceCraft.scale=0.3
  //spaceCraft.debug=true
  spaceCraft.setCollider("rectangle",0,0,300,300)
  invisible=createSprite(410,330,50,50)
  invisible.visible=false
  //invisible.debug=true
}

function draw() {
  background(bg); 
  iss.depth+=2
 
  if(! hasDocked){
  
  if(keyDown("left")) {
    spaceCraft.x-=10
  }
  if(keyDown("right")) {
    spaceCraft.x+=10
  }
  if(keyDown("up")) {
    spaceCraft.y-=10
  }
  if(keyDown("down")) {
    spaceCraft.y+=10}
    if (spaceCraft.isTouching(invisible)){
      hasDocked=true
    }
  }
if(hasDocked==true){
  fill("white")
  textSize(20)
  text("docking successful!!!",500,500)
  spaceCraft.changeAnimation("attached",spaceImg2)
}
  drawSprites();
}