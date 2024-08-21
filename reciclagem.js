// Função para exibir o conteúdo correto baseado no clique da imagem
function showContent(type) {
    const containers = document.querySelectorAll('.info-container');
    containers.forEach(container => {
        container.style.display = 'none'; // Esconde todas as divs
    });
    const selectedContainer = document.getElementById(type);
    if (selectedContainer) {
        selectedContainer.style.display = 'block'; // Mostra a div correspondente
    }
    // Ocultar a mensagem de instrução ao clicar em uma lixeira
const clickMessage = document.querySelector('.click-message');
if (clickMessage) {
    clickMessage.style.display = 'none';
}
}
