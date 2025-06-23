
let indiceAtual = 0;
function mover(direcao) {
  const carrossel = document.getElementById('carrossel');
  const imagens = carrossel.getElementsByTagName('img');
  const total = imagens.length;

  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = total - 1;
  } else if (indiceAtual >= total) {
    indiceAtual = 0;
  }

  const larguraImagem = imagens[0].clientWidth;
  carrossel.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
}
