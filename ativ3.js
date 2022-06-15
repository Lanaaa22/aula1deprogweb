let tamanho = 16;
function mudaFonte() {
  document.querySelector("h1, h2, h3, h4, h5, h6").style.fontSize=tamanho+"px";
}

function cria_botao(texto){
  const botao = document.createElement("button")
  botao.setAttribute('type', 'button')
  botao.setAttribute('name', 'bot')
  botao.innerHTML = texto
  return botao

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



