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
// toDoItem
    // text
    // completed
    // setCompleted()
        // todo.completed = true;

class ToDoItem {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
    setCompleted() {
        todo.completed = true;
    }
}

class List {
    constructor(name) {
        this.name = name;
        this.id = getNewId();
        this.listItems = [];
    }
    addItem(list) {
        this.listItems.push(list);
    }
}

class ToDoList {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTodoList(todo) {
        this.todos.push(todo);
    }
    getTodoList(chatId) {
        return this.chats.find(chat => chat.id == chatId);
    }
    removeTodoList(todoId) {
        this.todos = this.todos.filter(todo => todo.id != todoId);
    }
}



function getNewId() {
    return (Math.random() + Math.random()) * 1000;
}



const lists = new ToDoList();
let currentList = new List('List 1');

currentList.addItem(new ToDoItem('asdfghjkl')); // TEST ITEM

printLists();
printLists();

function printList() {
    let listHtml = '';
    /*
    for (let i = 0; i < chat.length; i++) {
        chatHtml += 
        `
        <div>
            <p>${chat[i].text}</p>
            <p>${chat[i].username}</p>
        </div>
        `;
    }
    */
    currentList.listItems.forEach(listItem => {
        listHtml += `
        <div class="message">
            <p>${listItem.text}</p>
        </div>
        `;
    });
    document.getElementById("listWindow").innerHTML = listHtml;
}

function printLists() {
    let listsHtml = '';

    lists.lists.forEach(list => {
        listsHtml +=
        `
        <div class="border">${list.name}</div>
        `;
    });

    document.getElementById('todoLists').innerHTML = listsHtml;
}

printLists();