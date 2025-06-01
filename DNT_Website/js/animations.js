/**
 * Website Animations and Interactions
 * - Scroll-triggered animations
 * - Parallax effects
 * - Lazy loading
 * - Performance optimizations
 * - Mobile touch interactions
 */

class WebsiteAnimations {
    constructor() {
        this.init();
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupLazyLoading();
        this.setupCounterAnimations();
        this.setupMobileOptimizations();
        this.setupPerformanceOptimizations();
    }

    init() {
        // Check for reduced motion preference
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Initialize Intersection Observer for scroll animations
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.scrollObserver = new IntersectionObserver(
            this.handleScrollAnimation.bind(this),
            this.observerOptions
        );

        // Initialize lazy loading observer
        this.lazyObserver = new IntersectionObserver(
            this.handleLazyLoading.bind(this),
            { threshold: 0.1 }
        );

        // Track scroll position for parallax
        this.scrollY = 0;
        this.ticking = false;
    }

    setupScrollAnimations() {
        if (this.prefersReducedMotion) return;

        // Find all elements with scroll animation classes
        const animatedElements = document.querySelectorAll('.scroll-animate, .animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in');
        
        animatedElements.forEach(element => {
            this.scrollObserver.observe(element);
        });
    }

    handleScrollAnimation(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation class based on element's data attribute or default
                if (element.classList.contains('scroll-animate')) {
                    element.classList.add('in-view');
                }
                
                // Add stagger delay for grouped elements
                const staggerGroup = element.closest('[data-stagger]');
                if (staggerGroup) {
                    const siblings = staggerGroup.querySelectorAll('.scroll-animate');
                    siblings.forEach((sibling, index) => {
                        setTimeout(() => {
                            sibling.classList.add('in-view');
                        }, index * 100);
                    });
                }
                
                // Unobserve after animation to improve performance
                this.scrollObserver.unobserve(element);
            }
        });
    }

    setupParallaxEffects() {
        if (this.prefersReducedMotion) return;

        const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
        
        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', this.handleParallax.bind(this), { passive: true });
        }
    }

    handleParallax() {
        this.scrollY = window.pageYOffset;
        
        if (!this.ticking) {
            requestAnimationFrame(this.updateParallax.bind(this));
            this.ticking = true;
        }
    }

    updateParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = element.classList.contains('parallax-slow') ? 0.5 :
                         element.classList.contains('parallax-medium') ? 0.3 : 0.1;
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const yPos = -(this.scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        this.ticking = false;
    }

    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src], .lazy-image');
        
        lazyImages.forEach(img => {
            this.lazyObserver.observe(img);
        });
    }

    handleLazyLoading(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                img.classList.add('loaded');
                this.lazyObserver.unobserve(img);
            }
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(counter);
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }

    setupMobileOptimizations() {
        // Touch-friendly interactions
        const touchElements = document.querySelectorAll('.hover-lift, .hover-scale');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.classList.add('touch-active');
            }, { passive: true });
            
            element.addEventListener('touchend', () => {
                setTimeout(() => {
                    element.classList.remove('touch-active');
                }, 150);
            }, { passive: true });
        });

        // Optimize scroll performance on mobile
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            document.body.classList.add('scrolling');
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                document.body.classList.remove('scrolling');
            }, 150);
        }, { passive: true });
    }

    setupPerformanceOptimizations() {
        // Preload critical images
        this.preloadCriticalImages();
        
        // Optimize animations for performance
        this.optimizeAnimations();
        
        // Setup viewport meta tag for mobile
        this.setupViewportOptimization();
    }

    preloadCriticalImages() {
        const criticalImages = [
            'asset/Logo.png',
            // Add other critical images here
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    optimizeAnimations() {
        // Add GPU acceleration to animated elements
        const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .hover-lift, .hover-scale');
        
        animatedElements.forEach(element => {
            element.classList.add('gpu-accelerated');
        });
    }

    setupViewportOptimization() {
        // Ensure proper viewport settings for mobile
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
            document.head.appendChild(viewport);
        }
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Enhanced scroll animations with better performance
class ScrollAnimationManager {
    constructor() {
        this.elements = new Map();
        this.observer = null;
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            {
                threshold: [0, 0.1, 0.5, 1],
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        this.observeElements();
    }

    observeElements() {
        const elements = document.querySelectorAll('[data-animate]');
        
        elements.forEach(element => {
            const animationType = element.dataset.animate;
            const delay = element.dataset.delay || 0;
            const duration = element.dataset.duration || 600;
            
            this.elements.set(element, {
                type: animationType,
                delay: parseInt(delay),
                duration: parseInt(duration),
                animated: false
            });
            
            this.observer.observe(element);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                const element = entry.target;
                const config = this.elements.get(element);
                
                if (!config.animated) {
                    setTimeout(() => {
                        this.animateElement(element, config);
                    }, config.delay);
                    
                    config.animated = true;
                }
            }
        });
    }

    animateElement(element, config) {
        element.style.animationDuration = `${config.duration}ms`;
        element.classList.add(`animate-${config.type}`);
        
        // Remove animation class after completion to allow re-animation if needed
        element.addEventListener('animationend', () => {
            element.classList.remove(`animate-${config.type}`);
        }, { once: true });
    }
}

// Form enhancements for better mobile experience
class FormEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceForms();
        this.setupValidation();
        this.setupLoadingStates();
    }

    enhanceForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.classList.add('form-mobile-optimized');
            
            // Add floating labels
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                this.addFloatingLabel(input);
            });
        });
    }

    addFloatingLabel(input) {
        const wrapper = document.createElement('div');
        wrapper.className = 'floating-label-wrapper';
        
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        if (input.placeholder) {
            const label = document.createElement('label');
            label.textContent = input.placeholder;
            label.className = 'floating-label';
            wrapper.appendChild(label);
            
            input.placeholder = '';
        }
        
        input.addEventListener('focus', () => wrapper.classList.add('focused'));
        input.addEventListener('blur', () => {
            if (!input.value) wrapper.classList.remove('focused');
        });
        
        if (input.value) wrapper.classList.add('focused');
    }

    setupValidation() {
        const inputs = document.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateInput(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateInput(input);
                }
            });
        });
    }

    validateInput(input) {
        const isValid = input.checkValidity();
        
        if (isValid) {
            input.classList.remove('error');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('error');
        }
    }

    setupLoadingStates() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.classList.add('loading');
                    submitBtn.disabled = true;
                    
                    // Reset after 3 seconds (adjust based on your needs)
                    setTimeout(() => {
                        submitBtn.classList.remove('loading');
                        submitBtn.disabled = false;
                    }, 3000);
                }
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WebsiteAnimations();
    new ScrollAnimationManager();
    new FormEnhancements();
});

// Export for use in other scripts
window.WebsiteAnimations = WebsiteAnimations;
window.ScrollAnimationManager = ScrollAnimationManager;
window.FormEnhancements = FormEnhancements; 