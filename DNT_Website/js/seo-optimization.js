/**
 * SEO Optimization Manager
 * - Dynamic meta tags
 * - Structured data (JSON-LD)
 * - Analytics integration
 * - Performance monitoring
 * - Social media optimization
 */

class SEOOptimization {
    constructor() {
        this.init();
        this.setupDynamicMetaTags();
        this.setupStructuredData();
        this.setupAnalytics();
        this.setupSocialMediaOptimization();
        this.setupPerformanceMonitoring();
    }

    init() {
        this.siteData = {
            name: 'Digital Nomads Taiwan',
            description: 'Join the vibrant community of digital nomads in Taiwan. Discover co-working spaces, networking events, and resources for remote workers.',
            url: window.location.origin,
            logo: `${window.location.origin}/asset/Logo.png`,
            social: {
                facebook: 'https://facebook.com/digitalnomadstaiwan',
                instagram: 'https://instagram.com/digitalnomadstaiwan',
                linkedin: 'https://linkedin.com/company/digitalnomadstaiwan'
            }
        };

        this.currentPage = this.detectCurrentPage();
    }

    detectCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        
        const pageMap = {
            'preview.html': 'home',
            'index.html': 'home',
            'join-us.html': 'join',
            'growth-journey.html': 'growth',
            'team-roadmap.html': 'roadmap',
            'application-form.html': 'application',
            'faq-section.html': 'faq'
        };

        return pageMap[filename] || 'home';
    }

    setupDynamicMetaTags() {
        const pageConfigs = {
            home: {
                title: 'Digital Nomads Taiwan - Remote Work Community',
                description: 'Join Taiwan\'s premier digital nomad community. Connect with remote workers, find co-working spaces, and build your network in beautiful Taiwan.',
                keywords: 'digital nomads, Taiwan, remote work, co-working, community, networking',
                image: `${this.siteData.url}/asset/hero-image.jpg`
            },
            join: {
                title: 'Join Digital Nomads Taiwan - Become a Member',
                description: 'Become part of Taiwan\'s growing digital nomad community. Access exclusive events, resources, and networking opportunities.',
                keywords: 'join, membership, digital nomads Taiwan, community',
                image: `${this.siteData.url}/asset/join-us-hero.jpg`
            },
            growth: {
                title: 'Growth Journey - Digital Nomads Taiwan',
                description: 'Discover your growth journey with Digital Nomads Taiwan. Learn, network, and thrive in our supportive community.',
                keywords: 'growth, journey, development, digital nomads',
                image: `${this.siteData.url}/asset/growth-journey.jpg`
            },
            roadmap: {
                title: 'Team Roadmap - Digital Nomads Taiwan',
                description: 'Explore our team roadmap and future plans for the Digital Nomads Taiwan community.',
                keywords: 'roadmap, team, future, plans',
                image: `${this.siteData.url}/asset/roadmap.jpg`
            },
            application: {
                title: 'Application Form - Digital Nomads Taiwan',
                description: 'Apply to join Digital Nomads Taiwan. Fill out our application form to become part of our community.',
                keywords: 'application, form, join, membership',
                image: `${this.siteData.url}/asset/application.jpg`
            },
            faq: {
                title: 'FAQ - Digital Nomads Taiwan',
                description: 'Frequently asked questions about Digital Nomads Taiwan. Find answers to common questions about our community.',
                keywords: 'FAQ, questions, answers, help',
                image: `${this.siteData.url}/asset/faq.jpg`
            }
        };

        const config = pageConfigs[this.currentPage] || pageConfigs.home;
        this.updateMetaTags(config);
    }

    updateMetaTags(config) {
        // Update title
        document.title = config.title;

        // Update or create meta tags
        this.setMetaTag('description', config.description);
        this.setMetaTag('keywords', config.keywords);
        this.setMetaTag('author', 'Digital Nomads Taiwan');
        this.setMetaTag('robots', 'index, follow');
        this.setMetaTag('language', 'en-US');

        // Open Graph tags
        this.setMetaTag('og:title', config.title, 'property');
        this.setMetaTag('og:description', config.description, 'property');
        this.setMetaTag('og:image', config.image, 'property');
        this.setMetaTag('og:url', window.location.href, 'property');
        this.setMetaTag('og:type', 'website', 'property');
        this.setMetaTag('og:site_name', this.siteData.name, 'property');

        // Twitter Card tags
        this.setMetaTag('twitter:card', 'summary_large_image', 'name');
        this.setMetaTag('twitter:title', config.title, 'name');
        this.setMetaTag('twitter:description', config.description, 'name');
        this.setMetaTag('twitter:image', config.image, 'name');

        // Additional SEO tags
        this.setMetaTag('theme-color', '#3B82F6', 'name');
        this.setMetaTag('msapplication-TileColor', '#3B82F6', 'name');
    }

    setMetaTag(name, content, attribute = 'name') {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
        }
        
        meta.setAttribute('content', content);
    }

    setupStructuredData() {
        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': this.siteData.name,
            'description': this.siteData.description,
            'url': this.siteData.url,
            'logo': this.siteData.logo,
            'sameAs': [
                this.siteData.social.facebook,
                this.siteData.social.instagram,
                this.siteData.social.linkedin
            ],
            'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'customer service',
                'availableLanguage': ['English', 'Chinese']
            }
        };

        // Add page-specific structured data
        if (this.currentPage === 'home') {
            structuredData['@type'] = 'Organization';
            structuredData.additionalType = 'Community';
        } else if (this.currentPage === 'faq') {
            this.addFAQStructuredData();
        }

        this.insertStructuredData(structuredData);
    }

    addFAQStructuredData() {
        // Extract FAQ data from the page
        const faqItems = document.querySelectorAll('.faq-item, [data-faq]');
        
        if (faqItems.length > 0) {
            const faqStructuredData = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': []
            };

            faqItems.forEach(item => {
                const question = item.querySelector('h3, .question, [data-question]')?.textContent?.trim();
                const answer = item.querySelector('p, .answer, [data-answer]')?.textContent?.trim();

                if (question && answer) {
                    faqStructuredData.mainEntity.push({
                        '@type': 'Question',
                        'name': question,
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': answer
                        }
                    });
                }
            });

            this.insertStructuredData(faqStructuredData, 'faq-structured-data');
        }
    }

    insertStructuredData(data, id = 'structured-data') {
        let script = document.getElementById(id);
        
        if (!script) {
            script = document.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        
        script.textContent = JSON.stringify(data);
    }

    setupAnalytics() {
        // Google Analytics 4
        this.setupGA4();
        
        // Custom analytics for performance tracking
        this.setupCustomAnalytics();
    }

    setupGA4() {
        // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 measurement ID
        const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
        
        // Load Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            page_title: document.title,
            page_location: window.location.href
        });

        // Make gtag available globally
        window.gtag = gtag;

        // Track custom events
        this.trackCustomEvents();
    }

    setupCustomAnalytics() {
        // Track page performance
        this.trackPagePerformance();
        
        // Track user interactions
        this.trackUserInteractions();
        
        // Track scroll depth
        this.trackScrollDepth();
    }

    trackCustomEvents() {
        // Track form submissions
        document.addEventListener('submit', (e) => {
            if (window.gtag) {
                gtag('event', 'form_submit', {
                    form_id: e.target.id || 'unknown',
                    page_location: window.location.href
                });
            }
        });

        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, [role="button"]')) {
                if (window.gtag) {
                    gtag('event', 'button_click', {
                        button_text: e.target.textContent?.trim() || 'unknown',
                        button_id: e.target.id || 'unknown',
                        page_location: window.location.href
                    });
                }
            }
        });

        // Track external link clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="http"]') && !e.target.href.includes(window.location.hostname)) {
                if (window.gtag) {
                    gtag('event', 'external_link_click', {
                        link_url: e.target.href,
                        link_text: e.target.textContent?.trim() || 'unknown',
                        page_location: window.location.href
                    });
                }
            }
        });
    }

    trackPagePerformance() {
        // Track Core Web Vitals
        if ('web-vital' in window) {
            import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(this.sendToAnalytics.bind(this));
                getFID(this.sendToAnalytics.bind(this));
                getFCP(this.sendToAnalytics.bind(this));
                getLCP(this.sendToAnalytics.bind(this));
                getTTFB(this.sendToAnalytics.bind(this));
            });
        }

        // Track page load time
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && window.gtag) {
                    gtag('event', 'page_load_time', {
                        value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                        page_location: window.location.href
                    });
                }
            }, 0);
        });
    }

    sendToAnalytics(metric) {
        if (window.gtag) {
            gtag('event', metric.name, {
                value: Math.round(metric.value),
                metric_id: metric.id,
                metric_delta: metric.delta,
                page_location: window.location.href
            });
        }
    }

    trackUserInteractions() {
        // Track time on page
        let startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Date.now() - startTime;
            if (window.gtag) {
                gtag('event', 'time_on_page', {
                    value: Math.round(timeOnPage / 1000),
                    page_location: window.location.href
                });
            }
        });

        // Track viewport size
        if (window.gtag) {
            gtag('event', 'viewport_size', {
                width: window.innerWidth,
                height: window.innerHeight,
                page_location: window.location.href
            });
        }
    }

    trackScrollDepth() {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 100];
        const tracked = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            maxScroll = Math.max(maxScroll, scrollPercent);

            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !tracked.has(milestone)) {
                    tracked.add(milestone);
                    if (window.gtag) {
                        gtag('event', 'scroll_depth', {
                            value: milestone,
                            page_location: window.location.href
                        });
                    }
                }
            });
        }, { passive: true });
    }

    setupSocialMediaOptimization() {
        // Add social media sharing functionality
        this.addSocialShareButtons();
        
        // Optimize for social media crawlers
        this.optimizeForSocialCrawlers();
    }

    addSocialShareButtons() {
        const shareData = {
            title: document.title,
            text: document.querySelector('meta[name="description"]')?.content || '',
            url: window.location.href
        };

        // Add native sharing if available
        if (navigator.share) {
            const shareButtons = document.querySelectorAll('.share-button, [data-share]');
            shareButtons.forEach(button => {
                button.addEventListener('click', async () => {
                    try {
                        await navigator.share(shareData);
                    } catch (err) {
                        console.log('Error sharing:', err);
                    }
                });
            });
        }
    }

    optimizeForSocialCrawlers() {
        // Ensure all images have alt text
        const images = document.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            img.alt = img.title || 'Digital Nomads Taiwan';
        });

        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.href;
            document.head.appendChild(canonical);
        }
    }

    setupPerformanceMonitoring() {
        // Monitor and report performance issues
        this.monitorErrors();
        this.monitorPerformance();
    }

    monitorErrors() {
        window.addEventListener('error', (e) => {
            if (window.gtag) {
                gtag('event', 'javascript_error', {
                    error_message: e.message,
                    error_filename: e.filename,
                    error_lineno: e.lineno,
                    page_location: window.location.href
                });
            }
        });

        window.addEventListener('unhandledrejection', (e) => {
            if (window.gtag) {
                gtag('event', 'promise_rejection', {
                    error_message: e.reason?.message || 'Unknown promise rejection',
                    page_location: window.location.href
                });
            }
        });
    }

    monitorPerformance() {
        // Monitor resource loading
        window.addEventListener('load', () => {
            const resources = performance.getEntriesByType('resource');
            const slowResources = resources.filter(resource => resource.duration > 1000);
            
            if (slowResources.length > 0 && window.gtag) {
                gtag('event', 'slow_resources', {
                    count: slowResources.length,
                    page_location: window.location.href
                });
            }
        });
    }

    // Utility methods for SEO
    generateSitemap() {
        // Generate a basic sitemap structure
        const pages = [
            { url: '/', priority: 1.0, changefreq: 'weekly' },
            { url: '/join-us.html', priority: 0.8, changefreq: 'monthly' },
            { url: '/growth-journey.html', priority: 0.7, changefreq: 'monthly' },
            { url: '/team-roadmap.html', priority: 0.6, changefreq: 'monthly' },
            { url: '/application-form.html', priority: 0.9, changefreq: 'weekly' },
            { url: '/faq-section.html', priority: 0.5, changefreq: 'monthly' }
        ];

        return pages.map(page => ({
            ...page,
            url: `${this.siteData.url}${page.url}`,
            lastmod: new Date().toISOString().split('T')[0]
        }));
    }

    optimizeImages() {
        // Add loading="lazy" to images below the fold
        const images = document.querySelectorAll('img');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.loading = 'lazy';
                }
            });
        }, { rootMargin: '50px' });

        images.forEach(img => observer.observe(img));
    }
}

// Initialize SEO optimization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SEOOptimization();
});

// Export for use in other scripts
window.SEOOptimization = SEOOptimization; 