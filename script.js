const hamburger = document.getElementById('hamburger_icon');
const menu = document.getElementById('menu_nav');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('active');
});