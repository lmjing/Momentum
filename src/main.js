import timer from "./timer.js";
const nameContent = document.getElementById("name-content");
const mainContent = document.getElementById("main-content");
const loginForm = document.getElementById("login");
const greetingMsg = document.querySelector("#main-content h3");
const nameInput = document.getElementById("name-input");

const KEY_USER_NAME = "userName";
const CLASS_HIDDEN = "hidden";

const initMainContent = () => {
    timer();
    greetingMsg.innerText = `Hello, ${localStorage.getItem(KEY_USER_NAME)}`;
}

if (!localStorage.getItem(KEY_USER_NAME)) {
    nameContent.className = "";
    mainContent.classList.add(CLASS_HIDDEN);
} else {
    initMainContent();
}

const click = function (event) {
    event.preventDefault();
    localStorage.setItem(KEY_USER_NAME, nameInput.value);
    nameContent.className = CLASS_HIDDEN;
    mainContent.classList.remove(CLASS_HIDDEN);
    initMainContent();
}

loginForm.addEventListener("submit", click);
