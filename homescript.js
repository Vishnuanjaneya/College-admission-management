document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the section
        });
    });
});
