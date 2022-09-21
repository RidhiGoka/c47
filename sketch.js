var happyBoy, happyBoyimg, blueBallimg, shooter;
var canvas;
var input, playButton, titleImg, greeting;
var playerName;
var blueballs = [];
var greenballs = [];
var yellowballs = [];

function preload(){
happyBoyimg = loadImage("./Images/boy-happy.png");
blueBallimg = loadImage("./Images/blue-ball.png");
greenBallimg = loadImage("./Images/green-ball.png");
yellowBallimg = loadImage("./Images/yellow-ball.png");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
happyBoy = createSprite( 200, 500, 10, 10);
happyBoy.addImage("happyboy", happyBoyimg);

for(i = 0; i <= 6; i++){
blueballs[i] = createSprite(500 + i*25, 400, 10, 10);
blueballs[i].addImage("ball", blueBallimg);
blueballs[i].visible = false;
}
for(i = 0; i <= 5; i++){
    greenballs[i] = createSprite(515 + i*25, 420, 10, 10);
    greenballs[i].addImage("ball", greenBallimg);
    greenballs[i].visible = false;
    }
     for(i = 0; i <= 4; i++){
        yellowballs[i] = createSprite(530 + i*25, 440, 10, 10);
        yellowballs[i].addImage("ball", yellowBallimg);
        yellowballs[i].visible = false;
        }
shooter = createSprite(580, 650, 10, 10);
shooter.addImage("shooterBall", blueBallimg);
shooter.scale = 0.05;
displayBalls();


input = createInput("").attribute("placeholder", "Enter your name");
playButton = createButton("Play");
titleImg = createImg("./Images/bubble-shooter.png", "game title");
greeting = createElement("h2");

titleImg.position(120, 50);
input.position(width / 2 - 110, height / 2 - 80);
playButton.position(width / 2 - 90, height / 2 - 20);
greeting.position(width / 2 - 300, height / 2 - 100);

playButton.mousePressed(() => {
    input.hide();
    playButton.hide();
    playerName = input.value();
    greeting.html("Hello " + playerName + "!")
    greeting.position(0,0);
    greeting.style('color', 'black');
    greeting.style('font-size', '100px');
    titleImg.position(0,0);
    happyBoy.visible = false;
    displayBalls();
    


});




}


function draw(){
background("red");
drawSprites(); 

}

function displayBalls(){
    for(i = 0; i <= 6; i++){
    blueballs[i].visible = true;
    blueballs[i].scale = 0.05;
    }
    for(i = 0; i <= 5; i++){
        greenballs[i].visible = true;
        greenballs[i].scale = 0.1;
        }
        for(i = 0; i <= 4; i++){
            yellowballs[i].visible = true;
            yellowballs[i].scale = 0.05;
            }

}



