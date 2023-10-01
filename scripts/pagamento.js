// Obtém referências para os elementos dos formulários
const pixForm = document.getElementById("pixForm");
const cartaoCreditoForm = document.getElementById("cartaoCreditoForm");
const cartaoDebitoForm = document.getElementById("cartaoDebitoForm");

// Função para alternar entre os formulários com base no tipo de pagamento selecionado
function alternarFormulario(tipoPagamento) {
    pixForm.style.display = tipoPagamento === "pix" ? "block" : "none";
    cartaoCreditoForm.style.display = tipoPagamento === "cartaoCredito" ? "block" : "none";
    cartaoDebitoForm.style.display = tipoPagamento === "cartaoDebito" ? "block" : "none";
    }

// Adicione um evento de clique aos rótulos dos métodos de pagamento
document.querySelector("label[for=pix]").addEventListener("click", () => alternarFormulario("pix"));
document.querySelector("label[for=cartaoCredito]").addEventListener("click", () => alternarFormulario("cartaoCredito"));
document.querySelector("label[for=cartaoDebito]").addEventListener("click", () => alternarFormulario("cartaoDebito"));
