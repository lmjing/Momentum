const images = [
    "images/0.jpg",
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
]

export default class Background {

    $target = null

    constructor($target) {
        this.$target = $target;

        const random = Math.floor(Math.random() * images.length);
        $target.style.backgroundImage = `url(${images[random]})`;
    }
}