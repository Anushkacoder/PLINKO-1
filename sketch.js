var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
var world, engine;

function preload(){
  bkIMG = loadImage("b1.png");
}

function setup() {
  createCanvas(480,800);
  engine = Matter.Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);

  // plinko1 = new Plinko(20,50,10);
  // plinko2 = new Plinko(60,50,10);
  // plinko3 = new Plinko(100,50,10);
  // plinko4 = new Plinko(140,50,10);
  plinko5 = new Plinko(180,50,10);
  plinko6 = new Plinko(220,50,10);
  plinko7 = new Plinko(260,50,10);
  plinko8 = new Plinko(300,50,10);
  // plinko9 = new Plinko(340,50,10);
  // plinko10 = new Plinko(380,50,10);
  // plinko11 = new Plinko(420,50,10);
  // plinko12 = new Plinko(460,50,10);

  // plinko13 = new Plinko(20,160,10);
  // plinko14 = new Plinko(60,160,10);
  // plinko15 = new Plinko(100,160,10);
  plinko16 = new Plinko(140,160,10);
  plinko17 = new Plinko(180,160,10);
  plinko18 = new Plinko(220,160,10);
  plinko19 = new Plinko(260,160,10);
  plinko20 = new Plinko(300,160,10);
  plinko21 = new Plinko(340,160,10);
  // plinko22 = new Plinko(380,160,10);
  // plinko23 = new Plinko(420,160,10);
  // plinko24 = new Plinko(460,160,10);

  // plinko25 = new Plinko(20,250,10);
  // plinko26 = new Plinko(60,250,10);
  plinko27 = new Plinko(100,250,10);
  plinko28 = new Plinko(140,250,10);
  plinko29 = new Plinko(180,250,10);
  plinko30 = new Plinko(220,250,10);
  plinko31 = new Plinko(260,250,10);
  plinko32 = new Plinko(300,250,10);
  plinko33 = new Plinko(340,250,10);
  plinko34 = new Plinko(380,250,10);
  // plinko35 = new Plinko(420,250,10);
  // plinko36 = new Plinko(460,250,10);

  // plinko37 = new Plinko(20,350,10);
  plinko38 = new Plinko(60,350,10);
  plinko39 = new Plinko(100,350,10);
  plinko40 = new Plinko(140,350,10);
  plinko41 = new Plinko(180,350,10);
  plinko42 = new Plinko(220,350,10);
  plinko43 = new Plinko(260,350,10);
  plinko44 = new Plinko(300,350,10);
  plinko45 = new Plinko(340,350,10);
  plinko46 = new Plinko(380,350,10);
  plinko47 = new Plinko(420,350,10);
  // plinko48 = new Plinko(460,350,10);

  plinko49 = new Plinko(20,440,10);
  plinko50 = new Plinko(60,440,10);
  plinko51 = new Plinko(100,440,10);
  plinko52 = new Plinko(140,440,10);
  plinko53 = new Plinko(180,440,10);
  plinko54 = new Plinko(220,440,10);
  plinko55 = new Plinko(260,440,10);
  plinko56 = new Plinko(300,440,10);
  plinko57 = new Plinko(340,440,10);
  plinko58 = new Plinko(380,440,10);
  plinko59 = new Plinko(420,440,10);
  plinko60 = new Plinko(460,440,10);

  division1 = new Division(8,630,15,300);
  division2 = new Division(80,630,15,300);
  division3 = new Division(160,630,15,300);
  division4 = new Division(240,630,15,300);
  division5 = new Division(320,630,15,300);
  division6 = new Division(400,630,15,300);
  division7 = new Division(472,630,15,300);
}
var particles = [];
var obstacles = [];

function draw() {
  // background("purple");  
  image(bkIMG,0,0,width,height);
  Engine.update(engine);
  if(frameCount%80 == 0){
    var r = random(50,440);
   particles.push(new Particlez(r,0,10));
  }
  for(j = 0; j < particles.length; j++){
    particles[j].display();
  }
  ground.display();
  // plinko1.display();
  // plinko2.display();
  // plinko3.display();
  // plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  // plinko9.display();
  // plinko10.display();
  // plinko11.display();
  // plinko12.display();

  // plinko13.display();
  // plinko14.display();
  // plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  // plinko22.display();
  // plinko23.display();
  // plinko24.display();

  // plinko25.display();
  // plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  // plinko35.display();
  // plinko36.display();

  // plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display(); 
  plinko42.display();
  plinko43.display(); 
  plinko44.display(); 
  plinko45.display(); 
  plinko46.display(); 
  plinko47.display(); 
  // plinko48.display();

  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  plinko53.display();
  plinko54.display();
  plinko55.display();
  plinko56.display();
  plinko57.display();
  plinko58.display();
  plinko59.display();
  plinko60.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
}