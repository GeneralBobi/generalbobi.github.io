// Device detection script
function detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
}

// If mobile device, redirect to mobile version
if (detectMobile()) {
    // Check if we're not already on the mobile path
    if (window.location.pathname.indexOf('/mobile/') === -1) {
        // Get the current page filename or default to index.html
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        window.location.href = `mobile/${currentPage}`;
    }
} else {
    // If desktop and somehow on mobile path, redirect back to desktop
    if (window.location.pathname.indexOf('/mobile/') !== -1) {
        const currentPage = window.location.pathname.split('/').pop();
        window.location.href = `../${currentPage}`;
    }
}
