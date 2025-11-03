// script navbar section

  
        // تفعيل الأنيميشن عند السكرول
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
       
        document.querySelectorAll('.fade-in, .scale-in').forEach(el => {
            observer.observe(el);
        });
        
        
        window.addEventListener('load', () => {
            document.getElementById('heroContent').classList.add('visible');
        });
        
       
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
       
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
      
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.pointerEvents = 'none';
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
       
        
     
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
   







// seript hero section 
       
        document.addEventListener('DOMContentLoaded', function() {
            const floatingIcons = document.querySelector('.floating-icons');
            const icons = [
                'fa-bath', 'fa-shower', 'fa-toilet', 'fa-faucet', 
                'fa-tint', 'fa-wrench', 'fa-tools', 'fa-cog'
            ];
            
            for (let i = 0; i < 15; i++) {
                const icon = document.createElement('i');
                icon.className = `floating-icon fas ${icons[Math.floor(Math.random() * icons.length)]}`;
                icon.style.left = `${Math.random() * 100}%`;
                icon.style.animationDuration = `${Math.random() * 20 + 10}s`;
                icon.style.animationDelay = `${Math.random() * 5}s`;
                icon.style.fontSize = `${Math.random() * 20 + 30}px`;
                floatingIcons.appendChild(icon);
            }
        });
   

        // script products section
        
        document.addEventListener('DOMContentLoaded', function() {
            const floatingShapes = document.querySelector('.floating-shapes');
            
            for (let i = 0; i < 8; i++) {
                const shape = document.createElement('div');
                shape.className = 'floating-shape';
                shape.style.width = `${Math.random() * 100 + 50}px`;
                shape.style.height = shape.style.width;
                shape.style.left = `${Math.random() * 100}%`;
                shape.style.animationDuration = `${Math.random() * 20 + 15}s`;
                shape.style.animationDelay = `${Math.random() * 5}s`;
                floatingShapes.appendChild(shape);
            }
            
            // تأثيرات الظهور عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.scale-in, .fade-in').forEach(el => {
                observer.observe(el);
            });
        });
    

        // script services section
        document.addEventListener('DOMContentLoaded', function() {
            const floatingElements = document.querySelector('.floating-elements');
            const elements = [
                'fa-tools', 'fa-bath', 'fa-wrench', 'fa-tint', 
                'fa-home', 'fa-headset', 'fa-cog', 'fa-hammer',
                'fa-filter', 'fa-faucet', 'fa-toilet', 'fa-shower'
            ];
            
            for (let i = 0; i < 15; i++) {
                const element = document.createElement('i');
                element.className = `floating-element fas ${elements[Math.floor(Math.random() * elements.length)]}`;
                element.style.left = `${Math.random() * 100}%`;
                element.style.animationDuration = `${Math.random() * 20 + 15}s`;
                element.style.animationDelay = `${Math.random() * 5}s`;
                element.style.fontSize = `${Math.random() * 20 + 20}px`;
                floatingElements.appendChild(element);
            }
            
            // تأثيرات الظهور عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        });
 

        // script why-us
        document.addEventListener('DOMContentLoaded', function() {
            const floatingElements = document.querySelector('.floating-elements');
            const elements = [
                'fa-gem', 'fa-shield-alt', 'fa-bolt', 'fa-tag', 
                'fa-star', 'fa-check', 'fa-award', 'fa-medal'
            ];
            
            for (let i = 0; i < 10; i++) {
                const element = document.createElement('i');
                element.className = `floating-element fas ${elements[Math.floor(Math.random() * elements.length)]}`;
                element.style.left = `${Math.random() * 100}%`;
                element.style.animationDuration = `${Math.random() * 20 + 15}s`;
                element.style.animationDelay = `${Math.random() * 5}s`;
                element.style.fontSize = `${Math.random() * 20 + 20}px`;
                floatingElements.appendChild(element);
            }
            
            // تأثيرات الظهور عند التمرير
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        });
