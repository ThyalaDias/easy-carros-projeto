const pixForm = document.getElementById("pixForm");
const cartaoCreditoForm = document.getElementById("cartaoCreditoForm");
const cartaoDebitoForm = document.getElementById("cartaoDebitoForm");

function alternarFormulario(tipoPagamento) {
    pixForm.style.display = tipoPagamento === "pix" ? "block" : "none";
    cartaoCreditoForm.style.display = tipoPagamento === "cartaoCredito" ? "block" : "none";
    cartaoDebitoForm.style.display = tipoPagamento === "cartaoDebito" ? "block" : "none";
}

document.querySelector("label[for=pix]").addEventListener("click", () => alternarFormulario("pix"));
document.querySelector("label[for=cartaoCredito]").addEventListener("click", () => alternarFormulario("cartaoCredito"));
document.querySelector("label[for=cartaoDebito]").addEventListener("click", () => alternarFormulario("cartaoDebito"));
