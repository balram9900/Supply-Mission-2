var helicopterIMG, helicopterSprite, packageSprite2,packageSprite,packageIMG,packageIMG2;
var packageBody,packageBody2,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite2=createSprite(width/2, 90, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody2);
Box1 = createSprite (width/2-100,610,20,100)
Box2 = createSprite (width/2,650,200,20)
Box3 = createSprite (width/2+100,610,20,100)
Box1.shapeColor = "red"
Box2.shapeColor = "red"
Box3.shapeColor = "red"
	RedBox1 =  Bodies.rectangle(width/2-80, 610, 20, 100 , {isStatic:true} );
	World.add(world, RedBox1);

	RedBox2 = Bodies.rectangle(width/2, 635, 200, 20 , {isStatic:true} );
	 World.add(world, RedBox2);
	 
	 RedBox3 = Bodies.rectangle(width/2+80, 610, 20, 100 , {isStatic:true} );
 	World.add(world, RedBox3);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody , false);
	Matter.Body.setStatic( packageBody2 , false);
    
  }
}



