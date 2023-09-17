    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');
    
        mobileMenuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
        });
    });
  
    document.addEventListener('DOMContentLoaded', function () {
        const aboutLink = document.getElementById('about-link');
        const weddingsLink = document.getElementById('weddings-link');
        // ... Add more link elements as needed
    
        aboutLink.addEventListener('click', function () {
        window.location.href = 'pages/about.html';
        });
    
        weddingsLink.addEventListener('click', function () {
        window.location.href = 'pages/weddings.html';
        });
    
        // ... Add more event listeners as needed
    });
    