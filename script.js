 /*----------------------- Animation typewriter ----------------------*/
 const textAnim = document.querySelector("h6");

 new Typewriter (textAnim, {
     deleteSpeed: 40
 })
 .changeDelay(50)
 .typeString('Web Developer')
 .pauseFor(300)
 .typeString(', Dev full stack !')
 .pause(1000)
 .deleteChars(13)
 .typeString('<span style="color: #D84923"> HTML!')
 .pause(1000)
 .deleteChars(6)
 .typeString('<span style="color: #2091EB"> CSS !')
 .pause(1000)
 .deleteChars(5)
 .typeString('<span style="color: #3EAF7C"> Vue !')
 .pause(1000)
 .deleteChars(5)
 .typeString('<span style="color: #89BB3C"> Node !')
 .pause(1000)
 .deleteChars(6)
 .typeString('<span style="color: #EAD41C"> JavaScript !')
 .pause(1000)
 .deleteChars(12)
 .typeString('<span style="color: #E3A652"> MySQL, MongoDb !')
 .pause(1000)
 .deleteChars(16)
 .typeString('<span style="color: #f7043d"> Pentest, Osint !')
 .pause(1000)
 .deleteChars(16)
 .typeString('<span style="color: #2091EB"> Application M.E.V.N !')
 .pause(1000)
 .deleteChars(21)
 .typeString('<span style="color: #3586ff"> Application S.E.V.N !')
 .pause(1000)
 .deleteChars(21)
 .typeString('<span style="color: #d60c3e"> Full Stack !')
 .start()
 
  /*----------------------- Clock ----------------------*/
 const deg = 6;
 const hr = document.querySelector('#hr');
 const mn = document.querySelector('#mn');
 const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})


 
 
 /*----------------------- Menu, Scroll, dark/light ----------------------*/

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
 
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}