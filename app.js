//Dom elelments 
const page_body = document.querySelector('body')
const container = document.createElement('div')
const btn = document.createElement('button')
const box_div = document.createElement('div')
const content_div = document.createElement('div')
const promPt_div = document.createElement('div')
const erase_div = document.createElement('div')
const rainbow_div = document.createElement('div')
const main_div = document.createElement('div')
const header_h1 = document.createElement('header')
const content_eraseBtn = document.createElement('button')
const content_rainbowBtn = document.createElement('button')
page_body.appendChild(box_div)

//add class list for the DOM elements
btn.classList.add('btn')
content_eraseBtn.classList.add('btn')
content_rainbowBtn.classList.add('btn')
container.classList.add('grid')
main_div.classList.add('main')
box_div.classList.add('box')
content_div.classList.add('content')
rainbow_div.classList.add('rainbow')
erase_div.classList.add('erase')
promPt_div.classList.add('prompt')
//add content to the Dom elements
btn.innerHTML = 'click to get started'
content_eraseBtn.innerHTML = ' toggle erase'
content_rainbowBtn.innerHTML = 'toggole Rainbow'
header_h1.innerHTML = 'Etch-A-Sketch'

function getNumberofSquares() {
    for (let i = 0; i < 576; i++) {
        smallDiv = document.createElement('div')
        smallDiv.classList.add('card')
        container.appendChild(smallDiv)
    }
}
getNumberofSquares()

page_body.insertBefore(header_h1, box_div)
box_div.appendChild(content_div)
box_div.appendChild(main_div)
promPt_div.appendChild(btn)
content_div.appendChild(promPt_div)
content_div.appendChild(erase_div)
erase_div.appendChild(content_eraseBtn)
content_div.appendChild(rainbow_div)
rainbow_div.appendChild(content_rainbowBtn)
main_div.appendChild(container)

function rainbowEffect(e){
    const rainbow_colors = ['#e81416',' #ffa500','#faeb36','#79c314','#487de7','#4b369d','#70369d']
    const randomColor = rainbow_colors[Math.floor(Math.random() * rainbow_colors.length)]
    console.log(e.style)
}
function removeHoveringEffect(e) {
    console.log(e)
    this.classList.remove('red')
}
function deleteExistingDIvs() {
    container.innerHTML = "";
}


var flag = false;

const cells = Array.from(document.querySelectorAll('.card'));
var flag = false; //Here, I think it should be var, not let.

window.onmouseup = () => { flag = false; }

cells.forEach(cell => {
    cell.onmouseover = () => { if(flag) cell.style.backgroundColor="white"; }
    cell.onmousedown = () => { cell.style.backgroundColor="white"; flag = true; }                  
});