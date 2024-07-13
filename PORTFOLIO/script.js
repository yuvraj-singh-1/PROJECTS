let hero = document.querySelector(".hero");
let canvas = document.querySelector(".dotsCanvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext("2d");

let dots = [];
let arrColors = ["#eee", "#545454", "#596d91", "#696541", "#bb5a68"];
for (let i = 0; i <= 50; i++) {
  dots.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    size: Math.random() * 3 + 5,
    color: arrColors[Math.floor(Math.random() * 5)],
  });
}
const drawDots = () => {
  dots.forEach((dot) => {
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fill();
  });
};
// drawDots();
hero.addEventListener("mousemove", (event) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let mouse = {
    x: event.pageX - hero.getBoundingClientRect().left,
    y: event.pageY - hero.getBoundingClientRect().top,
  };
  dots.forEach((dot) => {
    let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
    if (distance < 300) {
      ctx.strokeStyle = dot.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(dot.x, dot.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });
});

hero.addEventListener("mouseout", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const btn = document.querySelector('.enter');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contactUs = document.getElementById('contact-us');
const footer = document.getElementById('footer');
const nav = document.querySelector('.nav-section');
const scrl = document.querySelector('.more');
const down = document.querySelector('.down')

btn.addEventListener('click',()=>{
 about.classList.toggle('hide');
 skills.classList.toggle('hide1');
 projects.classList.toggle('hide2');
 contactUs.classList.toggle('hide3');
 footer.classList.toggle('hide4');
 nav.classList.toggle('hide5');
 scrl.classList.toggle('hide6')
 down.classList.toggle('hide7')
});
