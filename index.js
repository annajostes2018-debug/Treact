document.querySelector('.btn__menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    if (menu.style.visibility === 'hidden' || menu.style.visibility === '') {
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        menu.style.transform = 'translateX(0)';
    } else {
        menu.style.visibility = 'hidden';
        menu.style.opacity = '0';
        menu.style.transform = 'translateX(300%)';
    }
});
document.querySelector('.btn__menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('is-visible'); // Toggle a class
});
