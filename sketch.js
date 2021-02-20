var cat,catImg;
var mouse,mouseImg;
var background,backgroundImg;

function preload() {
catImg=loadImage("cat1.png","cat2.png","cat3.png","cat4.png",);
mouseImg=loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png",);
backgroundImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(200,100,50,50);
    cat.addAnimation("catImg");
    mouse=createSprite(100,150,50,50);
    mouse.addAnimation("mouseImg");

}

function draw() {

    background=addImage(backgroundImg);
    text(mouseX=','+mouseY,10,45);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2) {
        cat.addAnimation("catlastImage",catImg3);
        cat.changeAnimation("catlastImage");
        keyPressed();
    }
    drawSprites();
}


function keyPressed(){
if(keyPressed === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning"catImg2);
    cat.changeAnimation("catRunning");
}
  

}
