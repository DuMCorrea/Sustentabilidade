document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filtro-btn');
    const brasilList = document.querySelector('.noticias-lista.brasil');
    const mundoList = document.querySelector('.noticias-lista.mundo');

    // Mostrar notícias do Brasil por padrão
    brasilList.style.display = 'flex';
    mundoList.style.display = 'none';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            if (filter === 'brasil') {
                brasilList.style.display = 'flex';
                mundoList.style.display = 'none';
            } else if (filter === 'mundo') {
                brasilList.style.display = 'none';
                mundoList.style.display = 'flex';
            }
        });
    });
});