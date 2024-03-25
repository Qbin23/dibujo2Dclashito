



function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(150, 190, 0); // fondo

  

  // caminos
  fill(255, 184, 77);    //-----------------------------------------> COLOR CAMINOS
  noStroke()
  rect(360, 480, 80, 80) //cuadrado inferior================
  
  rect(440,510,100,20)
  rect(270,510,100,20)
  rect(270,490,20,20)
  rect(520,490,20,20)

  rect(250,430,60,60)  //Cuad. inf. izq. princ.
  rect(500,430,60,60)  //Cuad. inf. der. princ.

 rect(360, 40, 80, 80)  //cuadrado superior==================

 rect(440,70,100,20) 
  rect(270,70,100,20)

  rect(250,110,60,60) //Cuad. sup. izq. princ.
  rect(500,110,60,60) //Cuad. sup. der. princ.

  rect(270,90,20,340) //Camino largo izq.
  rect(520,90,20,340) //Camino largo Der.

  //Sombras======================(
    fill(0,0,0,115)
    rect(350,65,70,70)
    rect(240,125,50,55)
    rect(490,125,50,55)

    rect(355,510,70,60)
    rect(245,455,50,45)
    rect(495,455,50,45)


  //Torres/\/\/\================
  stroke(1)
  fill(206, 198, 188)   //---------------------------------> GRIS
  rect(365, 485, 70,70)  //TORRE DEL REY INFERIOR
  rect(255,435,50,50)  //Torre inf. izq.
  rect(505,435,50,50)  //Torre inf. der.

  rect(365,45, 70, 70)  //TORRE DEL REY SUPERIOR
  rect(255,115,50,50)  //Torre sup. izq.
  rect(505,115,50,50)  //Torre sup. der.

  fill(179, 119, 0)     //-----------------------------> CAFÉ
  rect(375, 495, 50,50)
  rect(515,445,30,30)  //Madera inf. der.
  rect(265,445,30,30)  //Madera inf. izq

  rect(375,55,50,50)   //Madera REY sup.
  rect(515,125,30,30)  //Madera sup. der.
  rect(265,125,30,30)  //Madera sup. izq.
fill(50,100,255)
  stroke(1)
  rect(423,508,14,25)
  rect(363,508,14,25)
  
  rect(252,447,15,25)
  rect(292,447,15,25)

  rect(502,447,15,25)
  rect(542,447,15,25)
fill(255,50,50)
  rect(423,67,14,25)
  rect(363,67,14,25)
  
  rect(252,127,15,25)
  rect(292,127,15,25)

  rect(502,127,15,25)
  rect(542,127,15,25)
  
  //PERSONAJES=====================
  //REY AZUL
  fill(50,100,255)
  ellipse(400,515,30,30)
  rect(390,515,20,18)
  fill(239, 184, 16)
  ellipse(400,515,20,20)
  fill(0)
  ellipse(400,515,12,12)
  fill(255,240,201)
  ellipse(385,510,10,10)
  ellipse(415,510,10,10)

  //Princesas azules
  fill(50,100,255)
  ellipse(280,463,17,17)
  ellipse(530,463,17,17)
  fill(0)
  ellipse(280,460,17,17)
  ellipse(530,460,17,17)
  fill(239, 184, 16)
  ellipse(530,458,18,4)
  ellipse(280,458,18,4)


  //REY ROJO
  fill(255,50,50)
  ellipse(400,85,30,30)
  rect(390,65,20,20)
  fill(239, 184, 16)
  ellipse(400,85,20,20)
  fill(0)
  ellipse(400,85,12,12)
  fill(255,240,201)
  ellipse(385,93,10,10)
  ellipse(415,93,10,10)

  //princesas rojas
  fill(255,50,50)
  ellipse(280,137,17,17)
  ellipse(530,137,17,17)
  fill(0)
  ellipse(280,140,17,17)
  ellipse(530,140,17,17)
  fill(239, 184, 16)
  ellipse(530,141,18,4)
  ellipse(280,141,18,4)





  //río=========================
  stroke(1)
  fill(51, 187, 255)
  rect(200,280,400,40)//--------->río
  noStroke()
  fill(0, 153, 230)
  rect(201,295,399,8)//------------>Sombra río
  stroke(1)
  fill(172, 115, 57)
  rect(200,280,400,15)//------------->tierra

  //Puentes===============================
  fill(255, 153, 51)
  rect(260,270,40,60)
  rect(510,270,40,60)
  fill(0)
  line(272,270,272,330)
  line(287,270,287,330)

  line(522,270,522,330)
  line(537,270,537,330)
  //line(290,270,290,330)

 




  //bordes
  stroke(5)
  fill(180,180,180)
  rect(0,0,200,600)
  rect(600,0,200,600)
  

  // montañas


  // tierra


  // camino
  
}