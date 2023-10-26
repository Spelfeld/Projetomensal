// Função para exibir o modal
function exibirMensagemModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Função para fechar o modal
function fecharMensagemModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Adicionar evento ao botão "Fechar" do modal
var fecharModal = document.getElementById("fecharModal");
fecharModal.addEventListener("click", fecharMensagemModal);

// Adicionar evento de envio ao formulário
var meuFormulario = document.getElementById("meuFormulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio tradicional do formulário
  exibirMensagemModal(); // Exibe o modal com a mensagem
});
var botaoVoltar = document.getElementById("botaoVoltar");
botaoVoltar.addEventListener("click", function() {
  window.location.href = "../paginas/MainMenu.html"; // Redirecionar para a página desejada
});
