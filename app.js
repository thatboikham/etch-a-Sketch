const page_body = document.querySelector('body')
const container = document.createElement('div')
const btn = document.createElement('button')
const box_div = document.createElement('div')
page_body.appendChild(box_div)

btn.classList.add('prompt')
container.classList.add('main')
box_div.classList.add('box')
btn.innerHTML = 'button'

function promptNumSquares(){
    var squares = prompt("entere number of squares you want")
    console.log(squares)
    let max = 100;
    if(isNaN(squares) === true) alert(`${squares} is not a number`)
    else if(squares > max){
        alert(`number ${squares} is more than 100`)
    }else{
        return squares;
    }
    
}
    for(let i = 0; i < 120; i++){
        let smallDivs = document.createElement('div');
        smallDivs.classList.add('card');
        container.appendChild(smallDivs);
    }


box_div.appendChild(btn)
box_div.appendChild(container)

const card_div = Array.from(document.querySelectorAll('.card'))

function hoveringEffect(e){
    this.classList.add('red')
}
card_div.forEach((card) => card.addEventListener('mouseover', hoveringEffect));

btn.addEventListener('click', promptNumSquares)