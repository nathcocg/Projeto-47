var w1, w2, w3, w4, w5, w6, w7, w8, w9, iw1, iw2, iw3, iw4, iw5, iw6, iw7, iw8, iw9, iw10, iw11, iw12, iw13, iw14, iw15;
var s, edges, spb1, spb3, spb3, spb4, spb5, r1, r2, e1, e2, e3, e4, e5, e6, e7, eM;
var bgImg, sImg, s2Img, spbImg, rImgL, rImgR, e1I, e2I, e3I, e4I, e5I, e6I, e7I;

function preload() {
  bgImg = loadImage("./assets/bg.png");
  sImg = loadImage("./assets/sonicdireita.png");
  s2Img = loadImage("./assets/sonicesquerda.png");
  spbImg = loadImage("./assets/spb.png");
  rImgL = loadImage("./assets/robotleft.png");
  rImgR = loadImage("./assets/robotright.png"); 
  e1I = loadImage("./assets/blue.png");
  e2I = loadImage("./assets/gold.png");
  e3I = loadImage("./assets/pink.png");
  e4I = loadImage("./assets/purple.png");
  e5I = loadImage("./assets/red.png");
  e6I = loadImage("./assets/silver.png");
  e7I = loadImage("./assets/green.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  s = createSprite(width/12*0.5, height-50);
  s.addImage("sonicdireita", sImg);
  s.addImage("sonicesquerda", s2Img);
  s.scale = 0.6;
  s.velocityY = 0;
  
  w1 = createSprite(width/4+50, height-90, width/4, height/35);
  w1.shapeColor = "lightBlue";
  w2 = createSprite(width/8*6, height-90, width/6, height/35);
  w2.shapeColor = "lightBlue";
  w3 = createSprite(width/2, height-220, width/2, height/35);
  w3.shapeColor = "lightBlue";
  w4 = createSprite(width/4*3.5, height-335, width/5, height/35);
  w4.shapeColor = "lightBlue";
  w5 = createSprite(width/4*1, height-335, width/5.5, height/35);
  w5.shapeColor = "lightBlue";
  w6 = createSprite(width/6.5*0.58, height-220, width/7, height/35);
  w6.shapeColor = "lightBlue";
  w7 = createSprite(width/6.5-0.5, height-285, width/70, height/7);
  w7.shapeColor = "lightBlue";
  w8 = createSprite(width/4*2.1, height-650, width/4*3, height/35);
  w8.shapeColor = "lightBlue";
  w9 = createSprite(width/5*2.8, height-430, width/5, height/35);
  w9.shapeColor = "lightBlue";
  
  iw1 = createSprite(width/4, height-270, width/70, height/7);
  //iw1.visible = false;
  iw2 = createSprite(width/2*1.5, height-270, width/70, height/7);
  //iw2.visible = false;
  iw3 = createSprite(width/4*1.5-150, height-700, width/70, height/7);
  //iw3.visible = false;
  iw4 = createSprite(width/4*1.5+450, height-700, width/70, height/7);
  //iw4.visible = false;
  iw5 = createSprite(width/4*2.1+100, height-540, width/4*3+200, height/35);
  //iw5.visible = false;
  iw6 = createSprite(width/12*0.5+130, height-45, width/70, height/10); // spb1 left
  //iw6.visible = false;
  iw7 = createSprite(width/12*0.5+500, height-50, width/70, height/5+20); // spb1 right/spb2 right/spb3 left
  //iw7.visible = false;
  iw8 = createSprite(width/12*0.5+850, height-45, width/70, height/10);  // spb3 right
  //iw8.visible = false;
  iw9 = createSprite(width/4*3.5-130, height-380, width/70, height/10); // spb4 left
  //iw9.visible = false;
  iw10 = createSprite(width/4*3.5+130, height-380, width/70, height/10); // spb4 right
  //iw10.visible = false;
  iw11 = createSprite(width/4*1-135, height-380, width/70, height/10); // spb5 left
  //iw11.visible = false;
  iw12 = createSprite(width/4*1+115, height-380, width/70, height/10); // spb5 right
  //iw12.visible = false;
  iw13 = createSprite(width/4-110, height-140, width/70, height/10); // spb2 left
  //iw13.visible = false;
  
  edges = createEdgeSprites();

  spb1 = createSprite(width/12*2, height-25);
  spb1.addImage(spbImg);
  spb1.scale = 0.2;
  spb1.velocityX = 2;
  spb2 = createSprite(width/4+150, height-115);
  spb2.addImage(spbImg);
  spb2.scale = 0.18;
  //spb2.velocityX = 2;
  spb3 = createSprite(width/4+405, height-35);
  spb3.addImage(spbImg);
  spb3.scale = 0.2;
  //spb3.velocityX = 2;
  spb4 = createSprite(width/4*3.5, height-370);
  spb4.addImage(spbImg);
  spb4.scale = 0.2;
  //spb4.velocityX = 2;
  spb5 = createSprite(width/4*1, height-370);
  spb5.addImage(spbImg);
  spb5.scale = 0.2;
  //spb5.velocityX = 2;

  r1 = createSprite(width/2, height-275);
  r1.addImage("left1", rImgL);
  r1.addImage("right1", rImgR);
  r1.scale = 0.25;
  r1.velocityX = -3;
  r2 = createSprite(width/4*2.1-70, height-705);
  r2.addImage("left2",rImgL);
  r2.addImage("right2", rImgR);
  r2.scale = 0.25;
  r2.velocityX = -3;
  
  e1 = createSprite(width/12*2.8, height-25);
  e1.addImage(e1I);
  e1.scale = 0.022;
  e2 = createSprite(width/4-50, height-120);
  e2.addImage(e2I);
  e2.scale = 0.03;
  e3 = createSprite(width/2-200, height-260);
  e3.addImage(e3I);
  e3.scale = 0.05;
  e4 = createSprite(width/5*2.8-5, height-465);
  e4.addImage(e4I);
  e4.scale = 0.02;
  e5 = createSprite(width/5*0.5-35, height-450);
  e5.addImage(e5I);
  e5.scale = 0.04;
  e6 = createSprite(width/4*2.5, height-685);
  e6.addImage(e6I);
  e6.scale = 0.07;
  e7 = createSprite(width/4*3.5+70, height-370);
  e7.addImage(e7I);
  e7.scale = 0.02;
  

  plataform = createSprite(width/6.5*0.5, height-250, width/14, height/25);
  plataform.shapeColor = "yellow";

}

function draw() {
  background(bgImg);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    s.x = s.x + 5;
    s.changeImage("sonicdireita");
  }
  if(keyIsDown(LEFT_ARROW)){
    s.x = s.x - 5;
    s.changeImage("sonicesquerda");
  }
  if(keyIsDown(UP_ARROW)){
    s.velocityY = - 5;
  }

  s.velocityY = s.velocityY + 0.8;
  
  if(r1.bounceOff(iw1)){
    r1.changeImage("right1");
  }
  if(r1.bounceOff(iw2)){
    r1.changeImage("left1");
  }
  if(r2.bounceOff(iw3)){
    r2.changeImage("right2");
  }
  if(r2.bounceOff(iw4)){
    r2.changeImage("left2");
  }

  if(s.isTouching(plataform)){
    s.velocityY = -25;
  }

  if(s.isTouching(e1)){
    e1.destroy();
  }
  if(s.isTouching(e2)){
    e2.destroy();
  }
  if(s.isTouching(e3)){
    e3.destroy();
  }
  if(s.isTouching(e4)){
    e4.destroy();
  }
  if(s.isTouching(e5)){
    e5.destroy();
  }
  if(s.isTouching(e6)){
    e6.destroy();
    eM = createSprite(width/4*2.5+200, height-685);
    eM.addImage(e7Img);
  }

  if(spb1.isTouching(iw7)){
    spb1.velocityX = -2;
  }
  if(spb1.isTouching(iw6)){
    spb1.velocityX = 2;
  }

  s.collide(w1); s.collide(w2); 
  s.collide(w3); s.collide(w4);
  s.collide(w5); s.collide(w6); 
  s.collide(w7); s.collide(w8);
  s.collide(w9); 
  s.collide(iw1); s.collide(iw5); 
  s.collide(edges); 
  s.collide(spb1); s.collide(spb2); 
  s.collide(spb3); s.collide(spb4); 
  s.collide(spb5);
  spb1.collide(iw6); spb1.collide(iw7);
  /*spb2.collide(iw13); spb2.collide(iw7);
  spb3.collide(iw7); spb3.collide(8);
  spb4.collide(iw9); spb4.collide(iw10);
  spb5.collide(iw11); spb5.collide(iw12);*/

}
