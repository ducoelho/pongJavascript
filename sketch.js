// variaveis tamanho bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//variaveis velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;


//placares
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada; 
let ponto;
let trilha; 
  
  function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound('ponto.mp3');
    raquetada = loadSound('raquetada.mp3');
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteoponente();
  incluiPlacar();  
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
 }

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha; 
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if(xBolinha + raio > 600 || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    ponto.play();
  }
    
    if(yBolinha + raio > 400 || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
    
    }

}
function mostraRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function mostraRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}



function verificaColisaoRaquete(x, y){
      colidiu = 
      collideRectCircle(x, y, larguraRaquete,       alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}

function movimentaRaqueteoponente() {
    if (keyIsDown(87)){
    yRaqueteOponente -= 10;
    }
  if (keyIsDown(83)){
    yRaqueteOponente +=10;
  }
  }

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20 )
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
  
}

function marcaPonto(){
    if(xBolinha > 590) {
  meusPontos++ ; }
  if(xBolinha < 10) {
    
  pontosDoOponente++ ; 
}}
  
