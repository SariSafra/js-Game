function start_fireworks() {
    const fireworks = [];
    const particles = [];
    class Firework {
        constructor() {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight-10;
    
            this.speed = 10;
            this.angle = (Math.random() * Math.PI /2) + Math.PI /4;
            this.vx = Math.cos(this.angle)*this.speed;
            this.vy = -Math.sin(this.angle)*this.speed;
            
            this.el = document.createElement('div');
            this.el.className = 'firework';
            this.el.style.left = this.x +'px';
            this.el.style.top = this.y+'px';
            document.body.appendChild(this.el);
    
            setTimeout( () => {
                this.el.remove();
                fireworks.splice(fireworks.indexOf(this),1);
                this.explode();
            } ,800)
        }
        explode() {
            for (let i = 0; i < 50; i++) {
                const particle = new Particle();
                particle.setPosition(this.x, this.y);    
                particles.push(particle);
            }        
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.el.style.left = this.x +'px';
            this.el.style.top = this.y+'px';
            this.vy += 0.15;
        }
    }
    class Particle {
    constructor() {
        const colors = ['red','yellow','green','pink','violet', 'orange', 'blue'];
        this.x = 0;
        this.y = 0;

        this.speed = Math.random() * 2 + 3;
        this.angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(this.angle)*this.speed;
        this.vy = -Math.sin(this.angle)*this.speed;
        
        this.el = document.createElement('div');
        this.el.className = 'particle';
        this.el.style.left = this.x +'px';
        this.el.style.top = this.y+'px';
        this.el.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
        document.body.appendChild(this.el);

        setTimeout( () => {
            this.el.remove();
            particles.splice(particles.indexOf(this),1);            
        } ,300)
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
        this.el.style.left = this.x +'px';
        this.el.style.top = this.y+'px';
    }
    update() {
        this.setPosition(this.vx + this.x, this.vy + this.y);
        this.vy += 0.15;
    }
}

setInterval( ()=> {
    fireworks.forEach(firework => firework.update());
    particles.forEach(particle => particle.update());
},10);

setInterval( () => {
    const firework = new Firework;
    fireworks.push(firework);
} ,300);
}


