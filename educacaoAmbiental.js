document.querySelectorAll('.btn-saiba-mais').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card');
        card.classList.toggle('expandido');
    });
});