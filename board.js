let cout = (...s) => s.forEach(i => console.log(i + "\n"));

/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let fps = 60;

var particles = [];

function main() {

    ctx.fillStyle = "#ff0000";
    setInterval(update, 1000 / fps);

    for (let i = 0; i < 2000; i++) {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
        particles.push(new Particle(x, y, 4,4,0,0));
    }

}


function update() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
        // Could also set x/y to 0 or width/height to stop going to far out
        if (p.x < 0 || p.x > canvas.width) p.x_vel *= -1 
        if (p.y < 0 || p.y > canvas.height) p.y_vel *= -1

        p.x += p.x_vel;
        p.y += p.y_vel;
        
        //var randomColor = "#" + (Math.floor(Math.random()*16777215).toString(16));
        //p.color = randomColor;



        p.draw();
    })
}


class Particle {
    color = "#000000";
    constructor(x, y, w, h, x_vel = (Math.random())*10, y_vel = (Math.random())*10) {
        //this.pos = [x, y];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.x_vel = x_vel;
        this.y_vel = y_vel;
        // this.x_vel = Math.random()*10;
        // this.y_vel = Math.random()*10;
        // this.color = "#" + (Math.floor(Math.random()*16777215).toString(16));

    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}



main();