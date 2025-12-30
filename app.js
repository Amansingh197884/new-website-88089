
   
    function animateCounters() {
        const counters = document.querySelectorAll('.counter-value');
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; 
            const increment = target / (duration / 16); 

            const updateCount = () => {
                const current = +counter.innerText;
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCount, 16);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

  
    const observerOptions = {
        threshold: 0.3 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const targetSection = document.querySelector('#counter-section');
    observer.observe(targetSection);
