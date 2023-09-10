//Dom elelments 
const page_body = document.querySelector('body')
const container = document.createElement('div')
const btn = document.createElement('button')
const box_div = document.createElement('div')
content_div = document.createElement('div')
header_h1 = document.createElement('header')
content_p = document.createElement('p')
content_eraseP = document.createElement('p')
content_eraseBtn = document.createElement('button')
page_body.appendChild(box_div)

//add class list for the DOM elements
btn.classList.add('btn')
content_eraseBtn.classList.add('btn')
container.classList.add('main')
box_div.classList.add('box')
content_div.classList.add('content')
//add content to the Dom elements
btn.innerHTML = 'button'
content_eraseBtn.innerHTML = 'erase'
header_h1.innerHTML = 'Draw What on you mind Today'
content_p.innerHTML = 'click the the button below to set up your workspace and begin drawing'
content_eraseP.innerHTML = 'click erase to start over'

function promptNumSquares() {
    var squares = prompt("entere number of squares you want")
    console.log(squares)
    let max = 100;
    if (isNaN(squares) === true) {
        alert(`${squares} is not a number`)
        return -1;
    }
    else if (squares > max) {
        alert(`number ${squares} is more than 100`)
        return -1;
    } else {
        return parseInt(squares);
    }

}

function getNumberofSquares(squares) {
    for (let i = 0; i < squares; i++) {
        smallDiv = document.createElement('div')
        smallDiv.classList.add('card')
        container.appendChild(smallDiv)
    }
}
page_body.insertBefore(header_h1, box_div)
box_div.appendChild(content_div)
content_div.appendChild(btn)
box_div.appendChild(container)
content_div.insertBefore(content_p, btn)
content_div.appendChild(content_eraseP)
content_div.appendChild(content_eraseBtn)


function hoveringEffect(e) {
    this.classList.add('red')
}
function removeHoveringEffect(e) {
    console.log(e)
    this.classList.remove('red')
}
function deleteExistingDIvs() {
    container.innerHTML = "";
}
btn.addEventListener('click', () => {
    const NoOfSquares = promptNumSquares();
    if (NoOfSquares !== -1) {
        deleteExistingDIvs();
        getNumberofSquares(NoOfSquares * 2);
        const card_div = Array.from(document.querySelectorAll('.card'));
        card_div.forEach((card) => card.addEventListener('mouseover', hoveringEffect));

    }
})
content_eraseBtn.addEventListener('click', () => {
    const removeCLass = Array.from(document.querySelectorAll('.card'));
    removeCLass.forEach((card) => card.addEventListener('mouseover', removeHoveringEffect));
})
