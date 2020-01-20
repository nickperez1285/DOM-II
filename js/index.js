// Your code goes here\




let select = document.querySelectorAll('p')
select[0].addEventListener('mouseover', (event)=>{ event.target.style.color = 'blue'})
select[1].addEventListener('keydown', (event)=>{event.target.style.color = 'green'})
select[2].addEventListener('dblclick',()=> console.log("you double clicked there"))
document.addEventListener('scroll', ()=>{console.log('scroll')})
document.addEventListener('wheel',()=>{console.log('wheel')})
document.querySelectorAll('h1')[0].addEventListener('mouseup',(event)=>{event.target.style.color = 'pink'})
document.getElementsByClassName('img-fluid rounded')[0].addEventListener('mousedown',(event)=>{event.target.style.height = "2rem"})
document.getElementsByTagName('img')[0].addEventListener('contextmenu' () => console.log('ta da!'))
document.getElementsByTagName('img')[1].addEventListener('mousemove' () => console.log('bang bang '))
document.addEventListener('resize',()=> console.log('im shrinking!!!!'))
document.getElementsByClassName('btn')[0].addEventListener('mouseenter', (event) => event.target.style.color = "white")


// event.stopPropagation()


document.getElementsByClassName('nav-link')[0].addEventListener('click', (event) => {event.stopPropagation();console.log('Home was clicked')})	
document.getElementsByClassName('nav')[0].addEventListener('click', () => console.log('nav  bar was clicked'))	

// preventDefault()

document.getElementsByClassName('nav')[0].addEventListener('click', (event) => {event.preventDefault()})
