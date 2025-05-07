document.querySelector('.form-pesquisa').addEventListener('submit', function(event) {
    // Impede o envio do formulário
    event.preventDefault();

    // Verifica se todos os campos obrigatórios foram preenchidos
    let isFormValid = true;
    const requiredFields = document.querySelectorAll('.form-pesquisa select[required], .form-pesquisa textarea[required]');

    requiredFields.forEach(function(field) {
        if (!field.value) {
            isFormValid = false;
            field.classList.add('field-error');  // Adiciona uma classe de erro (opcional)
        } else {
            field.classList.remove('field-error');  // Remove a classe de erro se estiver preenchido
        }
    });

    if (isFormValid) {
        // Exibe a mensagem de sucesso
        alert('Suas respostas foram enviadas com sucesso!');

        // Reseta o formulário após o envio
        event.target.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
