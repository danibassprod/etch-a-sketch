const html = document.querySelector('html')
html.style.width = '100%'
html.style.height = '100%'
const body = document.querySelector('body')
body.style.margin = '0'
body.style.width = '100%'
body.style.height = '100%'
body.style.display = 'flex'
body.style.flexGrow = '1'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

const button = document.createElement('button')
button.textContent = 'Grid'
button.style.padding = '10px'
button.style.borderWidth = '0'
button.style.borderRadius = '5px'
button.style.marginBottom = '30px'
body.appendChild(button)

// const clearButton = document.createElement('button')
// clearButton.textContent = 'Clear grid'
// clearButton.style.padding = '10px'
// clearButton.style.borderWidth = '0'
// clearButton.style.borderRadius = '5px'
// clearButton.style.marginBottom = '30px'
// body.appendChild(clearButton)

// button.addEventListener('click', function() {
//     document.querySelectorAll('.child').forEach(function(){
//         this.style.backgroundColor = 'white'
//     })
// })

button.addEventListener('click', () => grid = prompt('Enter a number bellow 100', 16))
button.addEventListener('click', function() {
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

const container = document.createElement('div')
container.classList.add('container')
container.style.width = '400px'
container.style.height = '400px'
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.flex = '0 0 auto'
container.style.border = '1px solid black'
body.appendChild(container)

let divChild;

let grid = 16;

function userGrid() {
    document.querySelectorAll('.child').forEach(div => div.remove())
    
    for (let i = 1; i <= grid * grid; i++) {
        divChild = document.createElement('div')
        divChild.classList.add('child', i)
        divChild.style.flex = '0 0 auto'
        divChild.style.boxSizing = 'boder-box'
        divChild.style.width = `${container.clientWidth / grid}px`
        divChild.style.height = `${container.clientWidth / grid}px`
        container.appendChild(divChild)
    }
    const newChilds = document.querySelectorAll('.child')
    newChilds.forEach(div => div.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black'
        console.log(this.className)
    }))
}

for (let i = 1; i <= grid * grid; i++) {
    divChild = document.createElement('div')
    divChild.classList.add('child', i)
    divChild.style.flex = '0 0 auto'
    divChild.style.boxSizing = 'boder-box'
    divChild.style.width = '25px'
    divChild.style.height = '25px'
    container.appendChild(divChild)
}

const allChilds = document.querySelectorAll('.child')
allChilds.forEach(div => div.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black'
    console.log(this.className)
}))