var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bucket1,bucket2,bucket3;
var carrier1,carrier2,carrierF;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	var packageBody_options = {
		isStatic: true
	}

	carrierF = new Carrier(400,650,200,20);
	//Body.setStatic(carrierF,true)
	World.add(world, carrierF);

	carrier1 = new Carrier(290,625,20,70);
World.add(world,carrier1);

	carrier2 = new Carrier(510,625,20,70);
	World.add(world,carrier2);

	bucket1 = Bodies.rectangle(400,640,200,20, {isStatic:true} );
	 World.add(world, bucket1);

	bucket2 = Bodies.rectangle(290,625,20,70, {isStatic:true} );
	 World.add(world, bucket1);

	bucket3 = Bodies.rectangle(510,625,20,70, {isStatic:true} );
	 World.add(world, bucket1);

	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  /* carrierF.x = bucket1.position.x;
  carrierF.y = bucket1.position.y; */
  carrierF.display();
	carrier1.display();
	carrier2.display();
	//carrierF.display();
  keyPressed();
  //stop();
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
		 Body.setStatic(packageBody,false);
}
}

/* function stop() {
	if(carrierF.y-packageBody.y === carrierF.width/2-packageBody.width/2) {
		packageBody.setStatic(packageBody,true)
	}
} */