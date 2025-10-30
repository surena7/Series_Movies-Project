// Wait for page to load
        window.addEventListener('load', function() {
            document.querySelector('.loading').classList.add('hidden');
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const backToTop = document.querySelector('.back-to-top');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                backToTop.classList.add('show');
            } else {
                header.classList.remove('scrolled');
                backToTop.classList.remove('show');
            }
        });

        // Initialize Owl Carousel
        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                },
                rtl: true
            });
        });

        // Animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in-up');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('active');
                    }
                });
            };
            
            // Initial check
            fadeInOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', fadeInOnScroll);
        });

        // Search functionality
        document.querySelector('.search-box input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('جستجو برای: ' + this.value);
                this.value = '';
            }
        });

        // Movie card hover effect enhancement
        const movieCards = document.querySelectorAll('.movie-card, .category-card, .subscription-card, .blog-card, .testimonial-card');
        movieCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Favorite button functionality
        const favoriteButtons = document.querySelectorAll('.movie-action-btn .fa-heart, .featured-actions .fa-heart');
        favoriteButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('far');
                this.classList.toggle('fas');
                this.classList.toggle('text-danger');
                
                if (this.classList.contains('fas')) {
                    // Add to favorites
                    showNotification('به لیست علاقه‌مندی‌ها اضافه شد');
                } else {
                    // Remove from favorites
                    showNotification('از لیست علاقه‌مندی‌ها حذف شد');
                }
            });
        });

        // Add to list button functionality
        const addToListButtons = document.querySelectorAll('.movie-action-btn .fa-plus, .featured-actions .fa-plus');
        addToListButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('به لیست تماشا اضافه شد');
            });
        });

        // Share button functionality
        const shareButtons = document.querySelectorAll('.movie-action-btn .fa-share-alt');
        shareButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('لینک اشتراک‌گذاری کپی شد');
            });
        });

        // Notification function
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'alert alert-success position-fixed';
            notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
            notification.textContent = message;
            
            // Add to page
            document.body.appendChild(notification);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            showNotification('ایمیل شما با موفقیت ثبت شد');
            this.reset();
        });

        // Subscription plan selection
        const subscriptionButtons = document.querySelectorAll('.subscription-card .btn');
        subscriptionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const plan = this.closest('.subscription-card').querySelector('.subscription-title').textContent;
                showNotification(`پلن ${plan} انتخاب شد. به صفحه پرداخت هدایت می‌شوید...`);
                
                // Simulate redirect to payment page
                setTimeout(() => {
                    // In a real scenario, this would redirect to payment page
                    // window.location.href = '/payment';
                }, 2000);
            });
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.navbar-toggler');
        const mobileMenu = document.querySelector('#offcanvasNavbar');
        
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });