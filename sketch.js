


function setup() {
  createCanvas(700, 400);
  somDaTrilha.loop();
  
}

function draw() {
  
background(imagemDaEstrada);
  mostraAtor();
mostraCarro ();
  movimentaCarro();
  movimentaAtor(); 
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}





