var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["10e9bb69-a39b-4920-acbe-a98edfec7309"],"propsByKey":{"10e9bb69-a39b-4920-acbe-a98edfec7309":{"name":"kid_35_1","sourceUrl":"assets/api/v1/animation-library/gamelab/e64.1k67sT5Bzlx_SPChSi8X3Ru049bv/category_characters/kid_35.png","frameSize":{"x":180,"y":316},"frameCount":1,"looping":true,"frameDelay":5,"version":"e64.1k67sT5Bzlx_SPChSi8X3Ru049bv","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":316},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e64.1k67sT5Bzlx_SPChSi8X3Ru049bv/category_characters/kid_35.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 
var goal = createSprite(200,15,100,25);
var goal2 = createSprite(200,385,100,25);

goal.shapeColor="yellow";
goal2.shapeColor="yellow";

var ball = createSprite(200,200,12,12);
ball.shapeColor="white";

var player = createSprite(200,355,52,10);
var computer = createSprite(200,45,52,10);

player.shapeColor="black";
computer.shapeColor="black";

 var gameState = "serve" ;
 var playerscore = 0;
 var compscore = 0;


function draw() {
 background("green");
if (gameState === "serve") {
    text("press space to serve,150,180");
    
  }
  
  
  computer.x=ball.x ;        
  textSize(20); 
  createEdgeSprites();
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(player);
ball.bounceOff(computer);

if (keyDown(RIGHT_ARROW)) {
    player.velocityX=6; 
   }
if (keyDown(LEFT_ARROW)) {
     player.velocityX=-6;   
      }
            
player.bounce(rightEdge);
player.bounce(leftEdge);
   
   

for (var i = 0; i < 400; i=i+20) {
 line(i, 200, i+10, 200);
   
}
if (keyDown("space")) {
  
ball.velocityX=4;
ball.velocityY=4;



}
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
