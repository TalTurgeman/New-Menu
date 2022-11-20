

const images = [
    './images/001.jpg',
    './images/002.jpg',
    './images/003.jpg',
    './images/004.jpg',
    './images/005.jpg',
    './images/006.jpg',
]

const elMenu = document.querySelector('.b-code')

let strHTML = ''
images.map((img,index)=>{
    strHTML += `<img src="./images/00${index+1}.jpg" alt=""></img>`
})