import {CLASS_NAME, STORAGE_KEY} from "./config.js";

export default class Todo {
    $target = null
    $button = null
    $content = null
    $list = null
    $form = null
    $input = null

    todoList = undefined

    createTodoItemEl = (text) => {
        const li = document.createElement("li");
        li.innerText = text.toString();
        this.$list.appendChild(li);
    }
    initTodoList = () => {
        if (!this.todoList) {
            const saved = localStorage.getItem(STORAGE_KEY.TODO_LIST);
            this.todoList = JSON.parse(saved) || [];
            this.todoList.forEach(text => {
                this.createTodoItemEl(text);
            })
        }
    }
    buttonClicked = e => {
        e.preventDefault();
        this.$button.classList.add(CLASS_NAME.HIDDEN);
        this.$content.classList.remove(CLASS_NAME.HIDDEN);
        this.initTodoList();
    }
    addNewItem = e => {
        e.preventDefault();
        const text = this.$input.value;
        this.todoList.push(text);
        localStorage.setItem(STORAGE_KEY.TODO_LIST, JSON.stringify(this.todoList));
        this.createTodoItemEl(text);
        this.$input.value = null;
    }
    constructor($target) {
        this.$target = $target;

        this.$button = $target.querySelector("#todo-button");
        this.$content = $target.querySelector("#todo-content");
        this.$list = $target.querySelector("ul");
        this.$form = $target.querySelector("form");
        this.$input = $target.querySelector("#todo-input");

        this.$button.addEventListener("click", this.buttonClicked);
        this.$form.addEventListener("submit", this.addNewItem);
    }
}