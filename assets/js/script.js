const buyButton = document.getElementById("buy"); // Obtém o botão de compra pelo ID
let clickCount = 0; // Variável para rastrear o número de cliques no botão

buyButton.addEventListener("click", function () {
  clickCount++; // Incrementa o contador de cliques

  // Atualiza o texto do botão com a mensagem de "Comprado"
  buyButton.textContent = `Comprado (${clickCount}x)`;
  buyButton.style.backgroundColor = "#15AE1B"; // Define a cor de fundo do botão para verde
  buyButton.style.color = "#fff"; // Define a cor do texto do botão para branco
  buyButton.disabled = true; // Desabilita o botão após o clique

  // Define um timeout para restaurar o estado original do botão após 3 segundos (3000 milissegundos)
  setTimeout(function () {
    buyButton.textContent = "Compre Agora"; // Restaura o texto original do botão
    buyButton.style.backgroundColor = "#fff"; // Restaura a cor de fundo original do botão para branco
    buyButton.style.color = "#000"; // Restaura a cor do texto original do botão para preto
    buyButton.disabled = false; // Habilita o botão novamente
  }, 3000); // 3000 milissegundos = 3 segundos
});

// Função para mudar o estilo para azul
function Blue() {
  document.getElementById("main").style.backgroundColor = "#7191FF"; // Define o fundo da seção principal para azul
  document.getElementById("span").style.backgroundColor = "#144C9F"; // Define o fundo do elemento com ID "span" para azul escuro
  document.getElementById("img").src = "assets/img/tênis-azul.png"; // Atualiza o caminho da imagem para o tênis azul
  document.querySelector("p").innerHTML =
    `Tênis esportivo têm conforto e estilo em um <br />` +
    `só calçado. Ideal para atividades físicas, <br />` +
    `oferecendo suporte e durabilidade para <br />` +
    `o seu melhor desempenho da cor azul.`; // Atualiza o texto descritivo
}

// Função para mudar o estilo para rosa
function Pink() {
  document.getElementById("main").style.backgroundColor = "#C3487E"; // Define o fundo da seção principal para rosa
  document.getElementById("span").style.backgroundColor = "#9F1488"; // Define o fundo do elemento com ID "span" para rosa escuro
  document.getElementById("img").src = "assets/img/tênis-rosa.png"; // Atualiza o caminho da imagem para o tênis rosa
  document.querySelector("p").innerHTML =
    `Tênis esportivo têm conforto e estilo em um <br />` +
    `só calçado. Ideal para atividades físicas, <br />` +
    `oferecendo suporte e durabilidade para <br />` +
    `o seu melhor desempenho da cor rosa.`; // Atualiza o texto descritivo
}
