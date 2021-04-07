var canvas;
var music;
var rect1;
var rect2;
var rect3;
var rect4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
createCanvas(800,600);

    rect1 = createSprite(40,590,130,30);
    rect1.shapeColor = 'red'
    rect2 = createSprite(250,590,130,30);
    rect2.shapeColor = 'blue'
    rect3 = createSprite(480,590,130,30);
    rect3.shapeColor = 'purple'
    rect4 = createSprite(735,590,130,30);
    rect4.shapeColor = 'yellow'
    box = createSprite(random(20,750),20,20,20);
    box.shapeColor = 'white'
    box.velocityX = 3;
    box.velocityY = 4;
    





}

function draw() {
    background("aqua");
    if(rect1.isTouching(box)&& box.bounceOff(rect1)){
        box.shapeColor = 'red';
    }
    if(rect2.isTouching(box)&& box.bounceOff(rect2)){
        box.shapeColor = 'blue';
    }
    if(rect3.isTouching(box)&& box.bounceOff(rect3)){
        box.shapeColor = 'purple';
    }
    if(rect4.isTouching(box)&& box.bounceOff(rect4)){
        box.shapeColor = 'yellow';
    }
    
    edges = createEdgeSprites();
    box.bounceOff(edges)
    drawSprites();
}
    

