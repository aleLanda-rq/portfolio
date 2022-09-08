let body = document.body
let introArea= document.querySelector('.IntroductionArea');
let menu = document.querySelector('.main-menu');
let button = document.querySelector('.contactmebttn');

document.addEventListener('mousemove', (e) =>{
 let element = document.createElement('div');
 element.setAttribute('class', 'trail')
 element.setAttribute('style', `left: ${e.clientX -10}px; top:${e.clientY -10}px;`);

 element.onanimationend=()=>{
    element.remove();
 }

 body.insertAdjacentElement('beforeend',element);
})

