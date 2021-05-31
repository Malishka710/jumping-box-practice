var canvas;
var music;
var block1, block2, block3, block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,200,30);
    block1.shapeColor="blue";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor="pink";
    block3 = createSprite(495,580,200,30);
    block3.shapeColor="white";
    block4 = createSprite(595,580,200 ,30);
    block4.shapeColor="purple";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    drawSprites();

    //add condition to check if box touching surface and make it box
}
