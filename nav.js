function openmenu() {
    const sidemenu = document.getElementById('sidemenu');
    const navbar = document.querySelector('.navbar');
    
    // Add active class to menu
    sidemenu.classList.add('active');
    
    // Change navbar class to show correct icon
    navbar.classList.remove('menu-closed');
    navbar.classList.add('menu-open');
    
    document.body.style.overflow = 'hidden';
    
    // Create or show backdrop
    let backdrop = document.querySelector('.menu-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'menu-backdrop';
        document.body.appendChild(backdrop);
    }
    backdrop.classList.add('active');
    backdrop.addEventListener('click', closemenu);
}

function closemenu() {
    const sidemenu = document.getElementById('sidemenu');
    const navbar = document.querySelector('.navbar');
    
    // Remove active class from menu
    sidemenu.classList.remove('active');
    
    // Change navbar class to show correct icon
    navbar.classList.remove('menu-open');
    navbar.classList.add('menu-closed');
    
    document.body.style.overflow = 'auto';
    
    // Hide backdrop
    const backdrop = document.querySelector('.menu-backdrop');
    if (backdrop) {
        backdrop.classList.remove('active');
    }
}

// Initialize the menu state on page load
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('menu-closed'); // Start with menu closed
});

// Close menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', closemenu);
});