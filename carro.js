//Código do carro

let xCarros =[700,700,700,700,700,700];
let yCarros = [40, 100, 150, 210, 270, 318 ];
let velocidadeCarros = [5, 6, 7, 5, 4.2, 4.8 ];
let comprimentoCarro = 50;
let alturaCarro = 40;



function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++ ) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  
  }   
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++ ){ 
 xCarros[i] -= velocidadeCarros[i]; 
  }
  
}



function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  
  if(passouTodaATela(xCarros[i])){
    xCarros[i] = 700
      }  
  }
}



function passouTodaATela(xCarros){
  return xCarros < -50;
}



