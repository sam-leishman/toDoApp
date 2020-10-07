// ====================
// Make list from array
// ====================

// let fruits = ["🍉", "🍌", "🍓", "🍎", "🍍", "🍋", "🍇"];
// let fruitName = ["Watermelon", "Banana", "Strawberry", "Apple", "Pineapple", "Lemon", "Grape"];
// let stuff = "<ul>";

// for (let i = 0; i < fruits.length; i++) {
//     stuff += "<li>" + fruits[i] + " " + fruitName[i] + "</li>";
// }

// stuff += "</ul>"

// let fruitList = document.getElementById("fruit-list");
// fruitList.innerHTML = stuff;



// =========================
// Today's Date
// =========================

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();

// Weekday
var weekday = weekdays[today.getDay()];
document.getElementById("weekday").innerText = weekday;

// Date
document.getElementById("date").innerText = today.getDate();

// Month
var monthName = monthNames[today.getMonth()];
document.getElementById("month").innerText = monthName;

// =========================
// Data Model
// =========================

// user
    // id
    // lists
    // addList(list)
    // removeList(listId)
// toDoList
    // name
    // todos
    // addTodo(todo)
    // removeTodo(todoId)
// toDo
    // text
    // completed
    // setCompleted()
        // todo.completed = true;

class User {
    constructor(id) {
        this.id = id;
        this.lists = [];
    }
    addList(list) {
        this.lists.push(list);
    }
    removeList(listId) {
        this.lists = this.lists.filter(list => list.id != listId);
    }
}

class ToDoList {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id != todoId);
    }
}

class ToDo {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
    setCompleted() {
        todo.completed = true;
    }
}