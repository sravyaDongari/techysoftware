document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-menu');
    const navList = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('.nav-link');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
});
