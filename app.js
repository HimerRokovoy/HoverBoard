const board = document.querySelector(`#board`)
const SQUARES_NUMBER = 500
const colors = ['#FF0000', '#FF4500', '#FFFF00', '#008000', '#1E90FF', '#0000FF', '#4B0082']
let index = 0;


for(let i = 0; i < SQUARES_NUMBER; i++)
{
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))
}

function setColor(element)
{
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element)
{
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #0000`

}


function getColor()
{
    index++
console.log(index)
if(index === colors.length)
index = 0
   return colors[index]
}

