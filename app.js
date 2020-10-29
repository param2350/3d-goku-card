const card = document.querySelector('.card');
const container = document.querySelector('.container');


const title = document.querySelector('.title');
const goku = document.querySelector('.goku img');
const kakarot = document.querySelector('.kakarot');
const description = document.querySelector('.info h3');
const powers = document.querySelector('.powers');


container.addEventListener('mousemove', (e) => {
    let xAxis = -(window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerWidth / 2 - e.pageY) /25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});



container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    
    title.style.transform = "translateZ(55px)";
    goku.style.transform = "translateZ(75px) translateY(-25px) rotatex(-20deg)";

    powers.style.transform = "translateZ(50px)";

    description.style.transform = "translateZ(50px)";

    kakarot.style.transform = "translateZ(50px)";


});

container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    

    title.style.transform = "translateZ(0px)";
    goku.style.transform = "translateZ(0px) rotateZ(0deg)";

    powers.style.transform = "translateZ(0px)";

    description.style.transform = "translateZ(0px)";

    kakarot.style.transform = "translateZ(0px)";

});
