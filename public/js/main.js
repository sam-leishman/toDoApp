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
    addItem(item) {
        this.listItems.push(item);
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
lists.addTodoList(new List('Test List')); // TEST LIST

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
    currentList.listItems.forEach(toDoItem => {
        listHtml += `
        <div class="list-item">
            <p>${toDoItem.text}</p>
        </div>
        `;
    });
    document.getElementById("listWindow").innerHTML = listHtml;
}

function printLists() {
    let listsHtml = '';

    lists.todos.forEach(list => {
        listsHtml += `
        <div class="list">
            ${list.name}
            <div id="todoListRemove">
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        `;
    });

    document.getElementById('todoLists').innerHTML = listsHtml;
}



function addTodoList(event) {
    if (event.key == 'Enter' || event.type == 'click') {
        const listName = document.getElementById('newListName').value;
        if (listName) {
            const newList = new List(listName);
            lists.addTodoList(newList);
            currentList = newList;
            document.getElementById('newListName').value = '';
            printList();
            printLists();
        }
    }
}