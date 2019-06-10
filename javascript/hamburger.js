(function() {
    const menu = document.querySelector('.menu-list');
    const menuIcon = document.querySelector('.mobile-menu--icon');

     menuIcon.addEventListener("click", function () {
        console.log(menu);
        if (menu.classList.contains('visible')) {
            menu.classList.remove('visible');
        } else {
            menu.classList.add('visible');
        }
    });
})();