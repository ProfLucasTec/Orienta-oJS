let palavra;
function palavraAleatoria(){
  let palavras = ["tecnologia", "JavaScript", "Programação", "Alura", "Escola", "Robótica", "P5JS"];
  return random(palavras);
}
function setup() {
  createCanvas(800,600);
  palavra = palavraAleatoria();
}
function inicializaCores(){
  background("#0CC1F1");
  fill(random(0,255), random(0,255), random(0,255));
  textSize(64);
  textAlign(CENTER, CENTER);
  textFont('Algerian');
}
function draw(){
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map (mouseX, 0, width, 0, palavra.length)
  if(quantidade < 1){
    palavra = palavraAleatoria();
  }
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 300, 200);
}