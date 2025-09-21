// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form Validation
if (document.querySelector('form')) {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent!');
    });
}