
let stars = document.getElementById('star')
let front_planets = document.getElementById('front_planets')
let back_planets = document.getElementById('back_planets')
let text = document.getElementById('text')
let btn = document.getElementById('btn')

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.top = -value * 0.5 + 'px';
    front_planets.style.top = value * 1.02 + 'px';
    back_planets.style.top = -value * 0.09 + 'px';
})
