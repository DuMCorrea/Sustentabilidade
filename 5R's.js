document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-rs button');
    const imagemGrande = document.getElementById('imagem-grande');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            imagemGrande.style.display = 'none';
        });
    });
});
document.querySelectorAll('.menu-rs button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.conteudo-r').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById('conteudo-' + this.getAttribute('data-r')).classList.add('active');
    });
});