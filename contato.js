document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obter o valor do campo de email
        const emailInput = document.getElementById("email").value;

        // Verificação do email
        if (emailInput.length <= 3 || !emailInput.includes("@")) {
            alert("Por favor, insira um email válido com pelo menos 3 caracteres e que contenha '@'.");
            return; // Impede o envio do formulário
        }

        // Se passar na verificação, exibe a janela pop-up de sucesso
        alert("Suas respostas foram enviadas com sucesso!");

        // Agora você pode enviar o formulário (remova o preventDefault para envio real)
        form.submit();
    });
});

document.getElementById('telefone').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, ''); // Remove tudo que não for número
    
    if (input.length > 11) {
        input = input.substring(0, 11); // Limita a 11 caracteres
    }

    if (input.length > 2) {
        input = `(${input.substring(0, 2)}) ${input.substring(2)}`;
    }
    
    if (input.length > 9) {
        input = `${input.substring(0, 10)}-${input.substring(10)}`;
    }

    e.target.value = input;
});