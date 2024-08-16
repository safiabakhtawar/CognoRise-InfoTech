document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555'; // Change color when scrolled
        } else {
            navbar.style.backgroundColor = '#333'; // Original color
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#fff';
            link.style.color = '#333';
        });

        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '';
            link.style.color = '#fff';
        });
    });
});
