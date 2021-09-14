class Jogo{
  constructor(){
    this.inimigoAtual = 0;
    
  }
  setup(){
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 8, 100);
    const InimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 8, 100);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 8, 100);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(InimigoVoador);
    //somDoJogo.loop();      
  }
  
  keyPressed(key){
     if (key === 'ArrowUp')  {
      personagem.pula();
      somDoPulo.play();
    }
  } 
  
  draw(){
    cenario.exibe();
    cenario.move();
    pontuacao.exibe();
    pontuacao.addPonto();
    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if(this.inimigoAtual > 2){
        this.inimigoAtual =0;
      }
      inimigo.velocidade = parseInt(random(10,30));
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, width / 2 - 200, height / 3);
      //noLoop();
    }
  }
  
}