document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    window.setTimeout(function() {
        document.body.style.opacity = 1;
        document.body.style.transition = 'opacity 2s';
    }, 10);

    const phoneButtons = document.querySelectorAll('.phone-button');
    
    phoneButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#f0f0f0';
            button.style.transform = 'translateY(-5px)';
            button.style.transition = 'background-color 0.2s, transform 0.2s';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
            button.style.transform = '';
        });
    });
});