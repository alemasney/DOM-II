// Your code goes here

document.querySelector('body').addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'grey';
    event.target.style.transition = '2s';
})

window.addEventListener('load', function() {
    alert("Page is loaded!");
})

const mouseOverHandler = function(event) {
    event.stopPropagation();
     event.target.style.background = 'yellow';
     event.target.style.cursor = 'not-allowed';
 }

const mouseOffHandler = function (event) {
    event.target.style.background = 'none';
}

const section = document.querySelector('section .text-content');

section.addEventListener('mouseover', mouseOverHandler);
section.addEventListener('mouseout', mouseOffHandler);

let section_h4 = document.querySelectorAll('section h4');

section_h4[0].addEventListener('dblclick', function(event) {
    let h4InnerText = event.target.innerText.toUpperCase();
    event.target.innerText = h4InnerText;
})

section_h4[1].addEventListener('mouseenter', function(event) {
    event.target.style.fontSize = '1.5rem';
})

section_h4[1].addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '2.5rem';
})

section_h4[2].addEventListener('click', function(event) {
    event.target.style.color = 'white';
})

const imgHandler = function(event) {
    event.target.style.border = "10px solid white";
    event.preventDefault();
}

let imgBorder = document.querySelectorAll('img');

imgBorder[0].addEventListener('mouseover', imgHandler);
imgBorder[1].addEventListener('mouseover', imgHandler);
imgBorder[2].addEventListener('mouseover', imgHandler);
imgBorder[3].addEventListener('mouseover', imgHandler);

const btn = document.querySelectorAll('.btn');

const btnHandler = function(event) {
    event.target.style.display = "none";
    alert('This is no longer available, please try again soon.');
}

btn[0].addEventListener('dblclick', btnHandler);
btn[1].addEventListener('dblclick', btnHandler);
btn[2].addEventListener('dblclick', btnHandler);

document.querySelector('header').addEventListener('click', function(e) {
    e.stopPropagation();
})

document.querySelector('nav').addEventListener('click', function(event) {
    event.preventDefault();
})