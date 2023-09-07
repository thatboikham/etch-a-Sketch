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
    if(isNaN(squares) === true) {
        alert(`${squares} is not a number`)
        return -1;
    } 
    else if(squares > max){
        alert(`number ${squares} is more than 100`)
        return -1;
    }else{
        return parseInt(squares);
    }
    
}

function getNumberofSquares(squares){
    for(let i = 0; i < squares; i++){
        smallDiv = document.createElement('div')
        smallDiv.classList.add('card')
        container.appendChild(smallDiv)
    }
}


box_div.appendChild(btn)
box_div.appendChild(container)

const card_div = Array.from(document.querySelectorAll('.card'))

function hoveringEffect(e){
    this.classList.add('red')
}
card_div.forEach((card) => card.addEventListener('mouseover', hoveringEffect));

btn.addEventListener('click', () => {
    const NoOfSquares = promptNumSquares();
    if(NoOfSquares !== -1){
        getNumberofSquares(NoOfSquares)
    }
})