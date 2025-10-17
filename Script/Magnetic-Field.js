const links = document.querySelectorAll('.Link-Linked, .Link-Twitter, .Link-instagram, .Link-Github');

links.forEach(link => {
    const particlesField = link.querySelector('.particles-field');
    
    link.addEventListener('mouseenter', () => {
       
        const backgroundColor = window.getComputedStyle(link).backgroundColor;

        let particleColor = backgroundColor;
        
        if (link.classList.contains('Link-instagram')) {

            particleColor = 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)';
        }
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            
            particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
            particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            particle.style.background = particleColor;
            
            particlesField.appendChild(particle);
        }
    });

    link.addEventListener('mouseleave', () => {
        particlesField.innerHTML = '';
    });
});
