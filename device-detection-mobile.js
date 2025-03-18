// Device detection for mobile logo click
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.header .logo');

    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();

            // Check if we should switch to desktop version
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
                window.innerWidth > 768) {
                // Redirect to desktop version
                window.location.href = '../index.html';
            } else {
                // Stay on mobile version
                window.location.href = 'index.html';
            }
        });
    }
});
