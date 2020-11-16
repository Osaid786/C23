var helicopterIMG,helicopterSprite,packageSprite,packageIMG;
var packageBody,groundSprite,ground;
var boxPosition,boxY,boxleftSprite,boxleftBody, boxBase,boxbottomBody,boxRigtsprite,boxRigtbody;
	  

const Engine=Matter.Engine;
const Body=Matter.Body;
const World=Matter.World;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {
	createCanvas(800,700)
     rectMode(CENTER)

	 packageSprite=createSprite(width/2,80,10,10)
     packageSprite.addImage(packageIMG)

	 helicopterSprite=createSprite(width/2,200,10,10)
	 helicopterSprite.addImage(helicopterIMG)

	 groundSprite=createSprite(width/2,height-35,width,10)
	 groundSprite.shapeColor=color(225)



	 engine=Engine.create()
	 world=Engine.world
	  
	  var options={
		  restitution:0
		  isStatic:true
	  }
	 
	 packageBody=Bodies.circle(width/2,200,5,options)
     World.add(world,packageBody)
     

	ground=Bodies.rectangle(width/2,650,width,10,options)
       boxPosition=width/2-100
	   boxY=610
	
	boxleftSprite=createSprite(boxPosition,boxY,20,100)
	boxleftSprite.shapeColor=color(225,0,0)

	boxleftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic=true})
	World.add(world,boxleftBody)

	boxBase=createSprite(boxPosition+100,boxY+40,200,20)
	boxBase.shapeColor=color(225,0,0)

	boxbottomBody=Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{isStatic=true})
	World.add(world,boxleftBody)

	boxRigtsprite=createSprite(boxPosition+200,boxY,20,100)
	boxRigtsprite.shapeColor=color(225,0,0)


    Engine.run(engine);
	world=engine.world

	
}

function draw(){
   rectMode()
   background(0)
   
   packageSprite.x=packageBody.position.x
   packageSprite.y=packageBody.position.y

   drawSprites();

}
   
function keyPressed() {

	if (keyCode===LEFT_ARROW) {
		helicopterSprite.x=helicopterSprite.x-20;
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody,translation)

	}else if (keyCode===RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20
		translation={x:20,y:0}
	}else if (keyCode===DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false)
	}
	
	
}

