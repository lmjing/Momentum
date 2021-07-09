const images = [
    "images/0.jpg",
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
]

const background = document.querySelector("body img");
const random = Math.floor(Math.random() * images.length);
background.src = images[random];