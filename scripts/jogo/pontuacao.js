class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(30);
    text(parseInt(this.pontos), width - 30, 50);    
  }  
  
  addPonto(){
   this.pontos = this.pontos + 0.2
  }
  
}