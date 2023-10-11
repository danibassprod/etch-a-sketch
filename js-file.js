const html = document.querySelector('html')
html.style.width = '100%'
html.style.height = '100%'
const body = document.querySelector('body')
body.style.margin = '0'
body.style.width = '100%'
body.style.height = '100%'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

const container = document.createElement('div')
container.classList.add('container')
container.style.backgroundColor = '#ececec'
container.style.borderRadius = '30px'
container.style.display = 'flex'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.gap = '175px'
container.style.padding = '50px 180px 50px 180px'
body.appendChild(container)

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('button-container')
buttonContainer.style.display = 'flex'
buttonContainer.style.flexDirection = 'column'
buttonContainer.style.justifyContent = 'center'
container.appendChild(buttonContainer)

const easTitle = document.createElement('div')
easTitle.classList.add('title')
easTitle.textContent = 'Etch a Sketch!'
easTitle.style.fontSize = '25px'
easTitle.style.marginBottom = '45px'
buttonContainer.appendChild(easTitle)

const gridButton = document.createElement('button')
gridButton.classList.add('grid-button')
gridButton.textContent = 'Grid'
gridButton.style.padding = '10px'
gridButton.style.backgroundColor = 'white'
gridButton.style.borderWidth = '0'
gridButton.style.borderRadius = '5px'
gridButton.style.marginBottom = '15px'
buttonContainer.appendChild(gridButton)

gridButton.addEventListener('click', () => grid = prompt('Enter a number bellow 100', 16))
gridButton.addEventListener('click', function() {
    if (grid === null) {
        return
    } else {
        grid = parseInt(grid)
        if (Number.isInteger(grid) !== true) {
            alert('Please, enter numbers only!')
        } else if (Math.sign(grid) !== 1) {
            alert('Positive numbers only!')
        } else if (grid > 100) {
            alert('Please enter a number bellow 100!')
            return
        } else {
            userGrid()
        }
    }
})

const clearGridButton = document.createElement('button')
clearGridButton.classList.add('clear-grid-button')
clearGridButton.textContent = 'Clear Grid'
clearGridButton.style.padding = '10px'
clearGridButton.style.backgroundColor = 'white'
clearGridButton.style.borderWidth = '0'
clearGridButton.style.borderRadius = '5px'
clearGridButton.style.marginBottom = '15px'
buttonContainer.appendChild(clearGridButton)

clearGridButton.addEventListener('click', function(){
    let currentDivs = document.querySelectorAll('.child')
    currentDivs.forEach(div => div.style.backgroundColor = 'white')
})

function getRandomColor(){
    const RED = Math.random() * 255
    const GREEN = Math.random() * 255
    const BLUE = Math.random() * 255
    return randomColor = `rgb(${Math.round(RED)}, ${Math.round(GREEN)}, ${Math.round(BLUE)})`
}

const funnyButton = document.createElement('button')
funnyButton.classList.add('funny-button')
funnyButton.textContent = 'Want some fun?'
funnyButton.style.padding = '10px'
funnyButton.style.backgroundColor = 'white'
funnyButton.style.borderWidth = '0'
funnyButton.style.borderRadius = '5px'
buttonContainer.appendChild(funnyButton)

funnyButton.addEventListener('click', function(){
    const currentDivs = document.querySelectorAll('.child')
    currentDivs.forEach(div => div.addEventListener('mouseover', function(){
        this.style.backgroundColor = getRandomColor()
    })
)})

const gridContainer = document.createElement('div')
gridContainer.classList.add('gridContainer')
gridContainer.style.backgroundColor = 'white'
gridContainer.style.width = '400px'
gridContainer.style.height = '400px'
gridContainer.style.display = 'flex'
gridContainer.style.flexWrap = 'wrap'
gridContainer.style.flex = '0 0 auto'
gridContainer.style.border = '1px solid black'
container.appendChild(gridContainer)

let divChild;

let grid = 16;

function userGrid() {
    document.querySelectorAll('.child').forEach(div => div.remove())
    
    for (let i = 1; i <= grid * grid; i++) {
        divChild = document.createElement('div')
        divChild.classList.add('child', i)
        divChild.style.flex = '0 0 auto'
        divChild.style.boxSizing = 'boder-box'
        divChild.style.width = `${gridContainer.clientWidth / grid}px`
        divChild.style.height = `${gridContainer.clientWidth / grid}px`
        gridContainer.appendChild(divChild)
    }
    const newChilds = document.querySelectorAll('.child')
    newChilds.forEach(div => div.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black'
    }))
}

for (let i = 1; i <= grid * grid; i++) {
    divChild = document.createElement('div')
    divChild.classList.add('child', i)
    divChild.style.flex = '0 0 auto'
    divChild.style.boxSizing = 'boder-box'
    divChild.style.width = '25px'
    divChild.style.height = '25px'
    gridContainer.appendChild(divChild)
}

const allChilds = document.querySelectorAll('.child')
allChilds.forEach(div => div.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black'
    console.log(this.className)
}))