const card = document.querySelector('.card');
const container = document.querySelector('.container');


const title = document.querySelector('.title');
const goku = document.querySelector('.goku img');
const kakarot = document.querySelector('.kakarot');
const description = document.querySelector('.info h3');
const powers = document.querySelector('.powers');
const circle = document.querySelector('.circle');



container.addEventListener('mousemove', (e) => {
    let xAxis = -(window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerWidth / 2 - e.pageY) /25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    


});



container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    
    title.style.transform = "translateZ(55px)";;

    powers.style.transform = "translateZ(50px)";
    circle.style.transform = "translateY(35px) rotateX(40deg)";


    description.style.transform = "translateZ(50px)";
    goku.style.transform = "translateZ(75px) translateY(-25px)  rotateX(-30deg)";

    kakarot.style.transform = "translateZ(50px)";


});

container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    

    title.style.transform = "translateZ(0px)";
    goku.style.transform = "translateZ(0) translateY(0)  rotateX(0)";

    powers.style.transform = "translateZ(0px)";

    description.style.transform = "translateZ(0px)";

    kakarot.style.transform = "translateZ(0px)";
    circle.style.transform = "rotateX(0deg)";

    circle.style.transform = "translateY(0px)";



});
