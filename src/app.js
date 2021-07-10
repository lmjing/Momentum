import timer from "./timer.js";
import Background from "./background.js";

const greetingContent = document.getElementById("greeting");
const mainContent = document.getElementById("main");
const loginForm = document.getElementById("login");
const greetingMsg = document.querySelector("#main h3");
const nameInput = document.getElementById("name-input");

const KEY_USER_NAME = "userName";
const CLASS_HIDDEN = "hidden";

const initMainContent = () => {
    timer();
    greetingMsg.innerText = `Hello, ${localStorage.getItem(KEY_USER_NAME)}`;
}

const click = function (event) {
    event.preventDefault();
    localStorage.setItem(KEY_USER_NAME, nameInput.value);
    greetingContent.classList.add(CLASS_HIDDEN);
    mainContent.classList.remove(CLASS_HIDDEN);
    initMainContent();
}

export default class App {

    $target = null

    constructor($target) {
        this.$target = $target;
        const background = new Background($target);

        if (!localStorage.getItem(KEY_USER_NAME)) {
            greetingContent.classList.remove(CLASS_HIDDEN);
            mainContent.classList.add(CLASS_HIDDEN);
        } else {
            initMainContent();
        }

        loginForm.addEventListener("submit", click);
    }
}