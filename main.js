// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide cursor elements if they exist
    const cursorTrailer = document.querySelector('.cursor-trailer');
    const cursorTrail = document.querySelector('.cursor-trail');

    if (cursorTrailer) cursorTrailer.style.display = 'none';
    if (cursorTrail) cursorTrail.style.display = 'none';

    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    // Scroll Progress Bar - Updated to track overall site exploration
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    // Initialize progress data
    let siteProgress = {
        home: 0,
        about: 0,
        gallery: 0,
        diary: 0,
        socials: 0
    };

    // Determine which page we're on
    const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    const pageKey = currentPage === 'index' ? 'home' : currentPage;

    // Track scroll progress for the current page
    function updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = Math.min((winScroll / height) * 100, 100);

        // Update progress for current page
        siteProgress[pageKey] = Math.max(scrolled, siteProgress[pageKey] || 0);

        // Calculate overall site progress
        // Weight each page differently based on content amount
        const weights = {
            home: 0.15,
            about: 0.2,
            gallery: 0.3,
            diary: 0.2,
            socials: 0.15
        };

        let totalProgress = 0;
        for (const page in siteProgress) {
            totalProgress += (siteProgress[page] * weights[page]);
        }

        // Ensure progress is between 0-100
        totalProgress = Math.min(Math.max(totalProgress, 0), 100);

        // Save progress to localStorage with session expiration
        localStorage.setItem('siteProgress', JSON.stringify(siteProgress));

        // Set or update the session timestamp
        localStorage.setItem('progressSessionTimestamp', Date.now());

        if (progressBar) {
            progressBar.style.width = totalProgress + '%';

            // Change color when 100% is reached
            if (totalProgress >= 100) {
                progressBar.style.background = 'linear-gradient(45deg, var(--accent-teal), var(--accent-purple))';
            }
        }

        if (progressText) {
            const progressPercentage = document.getElementById('progress-percentage');
            if (progressPercentage) {
                progressPercentage.textContent = Math.round(totalProgress);
            } else {
                // Legacy text update for pages that don't have the span structure
                progressText.textContent = Math.round(totalProgress) + '% viewed';
            }
        }
    }

    // Check if we should reset progress based on session expiration (24 hours)
    const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const lastSession = localStorage.getItem('progressSessionTimestamp');

    if (lastSession) {
        const sessionTimestamp = parseInt(lastSession, 10);
        const currentTime = Date.now();

        // If it's been more than SESSION_DURATION since the last visit, reset progress
        if (currentTime - sessionTimestamp > SESSION_DURATION) {
            localStorage.removeItem('siteProgress');
            localStorage.removeItem('progressSessionTimestamp');
            siteProgress = {
                home: 0,
                about: 0,
                gallery: 0,
                diary: 0,
                socials: 0
            };
        }
    } else {
        // First visit, set the timestamp
        localStorage.setItem('progressSessionTimestamp', Date.now());
    }

    // Load saved progress from localStorage (if not expired)
    const savedProgress = localStorage.getItem('siteProgress');
    if (savedProgress) {
        try {
            siteProgress = JSON.parse(savedProgress);
        } catch (e) {
            console.error('Error loading saved progress');
        }
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Run once on page load

    // Initialize Particles.js
    function initParticles() {
        if (document.getElementById('particles-container') && window.particlesJS) {
            particlesJS('particles-container', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4a9fff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#8e6bef",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }

    // Load particles.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = initParticles;
    document.head.appendChild(script);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile nav if open
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    if (burger) burger.classList.remove('toggle');

                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
            }
        });
    });

    // Add animation class to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Add the BOBI logo animation
    const bobi = document.querySelector('.bobi-logo');
    if (bobi) {
        bobi.addEventListener('mouseenter', () => {
            bobi.classList.add('pulse');
        });

        bobi.addEventListener('mouseleave', () => {
            setTimeout(() => {
                bobi.classList.remove('pulse');
            }, 300);
        });
    }

    // Filter gallery items (for Gallery page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update gallery progress when interacting with filters
                if (pageKey === 'gallery') {
                    siteProgress[pageKey] = Math.min(siteProgress[pageKey] + 5, 100);
                    updateProgress();
                }

                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                // Show all items if "all" filter is selected, otherwise filter
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Track card interactions on socials page
    const socialCards = document.querySelectorAll('.social-card');
    if (socialCards.length > 0 && pageKey === 'socials') {
        socialCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Increase progress when hovering over social cards
                siteProgress[pageKey] = Math.min(siteProgress[pageKey] + 3, 100);
                updateProgress();
            });
        });
    }

    // Track diary post interactions
    const diaryPosts = document.querySelectorAll('.diary-post');
    if (diaryPosts.length > 0 && pageKey === 'diary') {
        diaryPosts.forEach(post => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Increase progress when a diary post is viewed
                        siteProgress[pageKey] = Math.min(siteProgress[pageKey] + 10, 100);
                        updateProgress();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.7 });

            observer.observe(post);
        });
    }
});
