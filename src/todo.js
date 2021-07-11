import {CLASS_NAME, STORAGE_KEY} from "./config.js";

export default class Todo {
    $target = null
    $button = null
    $content = null
    $list = null
    $form = null
    $input = null

    todoList = undefined

    createTodoItemEl = (item) => {
        const {text, id} = item;
        const li = document.createElement("li");
        li.innerText = text;
        li.id = id;
        const btn = document.createElement("button");
        btn.innerText = 'X'
        btn.className = CLASS_NAME.DELETE_BTN;
        btn.addEventListener("click", this.deleteItem)

        li.appendChild(btn);
        this.$list.appendChild(li);
    }
    initTodoList = async () => {
        if (!this.todoList) {
            const saved = localStorage.getItem(STORAGE_KEY.TODO_LIST);
            this.todoList = JSON.parse(saved) || [];
            await this.todoList.forEach(item => {
                this.createTodoItemEl(item);
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
        const newItem = {
            text: this.$input.value,
            id: Date.now().toString()
        }
        this.todoList.push(newItem);
        localStorage.setItem(STORAGE_KEY.TODO_LIST, JSON.stringify(this.todoList));
        this.createTodoItemEl(newItem);
        this.$input.value = null;
    }
    deleteItem = async (e) => {
        e.preventDefault();
        const li = e.target.parentElement;
        this.todoList = await this.todoList.filter(item => item.id !== li.id);
        localStorage.setItem(STORAGE_KEY.TODO_LIST, JSON.stringify(this.todoList));
        li.parentElement.removeChild(li);
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