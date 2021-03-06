// Your code goes here
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.2)'
    logo.style.transition - 'all 0.6s'
})

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1.0)'
})

logo.addEventListener('dblclick', () => {
    logo.style.color = 'orange'
})

const funBus = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    funBus.src = "https://images.unsplash.com/photo-1566577134624-6f6cc4bb272b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
})

funBus.addEventListener('click', () => {
    funBus.src = "img/fun-bus.jpg"
})

const letGo = document.querySelector('.text-content h2');
const body = document.querySelector('body');

letGo.addEventListener('contextmenu', () => {
    body.style.backgroundImage= "url('https://images.unsplash.com/photo-1566577134624-6f6cc4bb272b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')";
})

body.addEventListener('keydown', () => {
    body.style.backgroundImage= "url('none')"
})

const middleImgs = document.querySelectorAll('.img-content');

middleImgs[0].addEventListener('wheel', (event) => {
    event.target.style.transform = 'rotate(45deg)'
})

const bottomImg = document.querySelector('.content-destination img');

bottomImg.addEventListener('drag', () => {
    bottomImg.style.display = 'none'
})

const bottomContent = document.querySelectorAll('.content-pick div');


bottomContent.forEach((cb) => {
    cb.addEventListener('pointerleave', () => {
        cb.style.border = '5px solid red'

    } )
})

// part 2 of work
//stopping event propagation
body.addEventListener('click', () => {
    body.style.backgroundColor = 'orange'
})

const conHome = document.querySelector('.home')
console.log(conHome)

conHome.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue'
    event.stopPropagation()
})

//preventDefault

const navLinks = document.querySelectorAll('a');
console.log(navLinks)
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})