//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio=diametro/2;

// velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raquetecomprimento = 10;
let raqueteAltura = 90;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

let colodiu = false;


//Variáveis do oponente
let xRaqueteoponente = 585;
let yRaqueteoponente = 150;
let velocidadeyoponente;


//placar do jogo 
let meuspontos = 0;
let pontosdooponente = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound(" ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}






function setup() {
  createCanvas(600, 400);
  trilha.loop();

}

function draw() {
  background(0);
  mostraBolinha(); 
 movimentaBolinha();
  verificacolisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  mostraRaqueteoponente();
  //verificacolisaoraquete();
  movimentaraqueteoponente();
  incluiplacar();
  marcarponto();
  verificacolisaominhaRaquete(xRaquete, yRaquete);
  verificacolisaominhaRaquete(xRaqueteoponente, yRaqueteoponente);
  
 } 
 


function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
  
}


function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha; 
  
}



function verificacolisaoBorda(){
   if (xBolinha + raio> width || xBolinha - raio < 0 ){
   velocidadexBolinha *= -1;
   } 
  if (yBolinha + raio> height || yBolinha - raio < 0 ){velocidadeyBolinha *= -1;}
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, raquetecomprimento,raqueteAltura );
  
}


function mostraRaqueteoponente(){
  rect(xRaqueteoponente, yRaqueteoponente, raquetecomprimento,raqueteAltura );
  
}





function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
}
  
  
  
   if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
  
}

function verificacolisaoraquete(){
  if (xBolinha - raio < xRaquete + raquetecomprimento&&yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
    velocidadexBolinha *= -1;
  
   
 }

   
function verificacolisaominhaRaquete(x,y){
  colidiu = 
  collideRectCircle(x,y ,raquetecomprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
  }
}




function movimentaraqueteoponente(){
  velocidadeyoponente = yBolinha -yRaqueteoponente-raquetecomprimento/ 2 - 30;
  yRaqueteoponente += velocidadeyoponente
}


function incluiplacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
    fill(255);
  text(meuspontos, 170, 26);
   fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
    fill(255);
  text(pontosdooponente,470, 26);
  
}

function marcarponto(){
  if (xBolinha > 590){
    meuspontos += 1; 
  }
if (xBolinha < 10){
  pontosdooponente += 1;
}

}


 