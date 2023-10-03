const html = document.querySelector('html')
html.style.width = '100%'
html.style.height = '100%'
const body = document.querySelector('body')
body.style.margin = '0'
body.style.width = '100%'
body.style.height = '100%'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

const container = document.createElement('div')
container.classList.add('container')
container.style.width = '500px'
container.style.height = '500px'
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.flex = '0 0 auto'
container.style.border = '1px solid black'
body.appendChild(container)

let divChild;

for (let i = 1; i <= 16 * 16; i++) {
    divChild = document.createElement('div')
    divChild.classList.add('child', i)
    divChild.style.flex = '0 0 auto'
    // divChild.style.outline = '1px solid black'
    divChild.style.boxSizing = 'boder-box'
    divChild.style.width = '31.25px'
    divChild.style.height = '31.25px'
    container.appendChild(divChild)
}

const allChilds = document.querySelectorAll('.child')
allChilds.forEach(div => div.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'black'
    console.log(this.className)
}))