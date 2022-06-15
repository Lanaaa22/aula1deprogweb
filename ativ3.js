let tamanho = 32;
function mudaFonte() {
  document.querySelector("h1, h2, h3, h4, h5, h6").style.fontSize=tamanho+"px";
}

function diminuirFonte(){  
  if (tamanho > 2) {
    tamanho-=2;
  }
  mudaFonte()
}

function aumentarFonte(){
  tamanho+=2;  
  mudaFonte()
}



