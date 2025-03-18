// Animations and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize parallax effects
    initParallax();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize interactive SVG elements
    initSvgInteractions();

    // Initialize smooth scrolling
    initSmoothScrolling();
});

// Parallax effect for background elements
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-speed]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        // Get scroll position
        const scrollY = window.scrollY;

        // Update each parallax element
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed) || 0.1;
            const yPos = scrollY * speed;

            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Elements that animate as they enter viewport
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');

    if (animatedElements.length === 0) return;

    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animated class to trigger animation
                entry.target.style.animationPlayState = 'running';

                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // 10% of element must be visible
        rootMargin: '0px 0px -100px 0px' // Offset trigger point up 100px
    });

    // Start observing each element
    animatedElements.forEach(element => {
        // Pause animation initially
        element.style.animationPlayState = 'paused';

        // Start observing
        observer.observe(element);
    });

    // Animate section backgrounds based on scroll
    animateSectionBackgrounds();
}

// Change background color subtly as user scrolls
function animateSectionBackgrounds() {
    const sections = document.querySelectorAll('section');
    if (sections.length <= 1) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Calculate how far through the section we are
            const sectionProgress = (scrollY - sectionTop + windowHeight / 2) / sectionHeight;

            // Only affect the section when it's in view
            if (sectionProgress > 0 && sectionProgress < 1) {
                // Calculate subtle hue shift
                const hueShift = Math.floor(sectionProgress * 20);

                // Apply subtle background color change
                section.style.backgroundColor = `hsl(265, 15%, ${Math.max(7, Math.min(12, 7 + sectionProgress * 5))}%)`;
            }
        });
    });
}

// SVG animations and interactions
function initSvgInteractions() {
    // Animate SVG nodes on hover
    const nodes = document.querySelectorAll('.node');
    if (nodes.length === 0) return;

    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            // Pulse effect on hover
            node.setAttribute('r', '6');
            setTimeout(() => {
                node.setAttribute('r', '4');
            }, 300);

            // Get connected nodes based on position and animate
            const cx = parseFloat(node.getAttribute('cx'));
            const cy = parseFloat(node.getAttribute('cy'));

            // Find connections to this node
            const connections = document.querySelectorAll('.connection');
            connections.forEach(connection => {
                const x1 = parseFloat(connection.getAttribute('x1'));
                const y1 = parseFloat(connection.getAttribute('y1'));
                const x2 = parseFloat(connection.getAttribute('x2'));
                const y2 = parseFloat(connection.getAttribute('y2'));

                // If this connection connects to the hovered node
                if ((Math.abs(x1 - cx) < 1 && Math.abs(y1 - cy) < 1) ||
                    (Math.abs(x2 - cx) < 1 && Math.abs(y2 - cy) < 1)) {
                    // Highlight this connection
                    connection.setAttribute('stroke-width', '2');
                    connection.setAttribute('opacity', '1');

                    // Reset after short delay
                    setTimeout(() => {
                        connection.setAttribute('stroke-width', '1');
                        connection.setAttribute('opacity', '0.5');
                    }, 500);
                }
            });
        });
    });
}

// Implement enhanced smooth scrolling
function initSmoothScrolling() {
    // All anchor links that point to an ID
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            // Enhanced smooth scroll with easing
            smoothScrollTo(targetElement);

            // Update URL
            history.pushState(null, '', targetId);
        });
    });

    // Add scroll to top button functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        smoothScrollTo(document.body);
    });
}

// Enhanced smooth scroll function
function smoothScrollTo(element, duration = 1000) {
    const startPosition = window.pageYOffset;
    const targetPosition = element === document.body
        ? 0
        : element.getBoundingClientRect().top + window.scrollY - 100;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }

    requestAnimationFrame(animation);
}
