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



function getNewId() {
    return (Math.random() + Math.random()) * 1000;
}



const lists = new ToDoList();
let currentList = new List('List 1');

// currentList.addItem(new ToDoItem('Test Item')); // TEST ITEM
// lists.addTodoList(new List('Test List')); // TEST LIST
// printList();
// printLists();

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
        <div id="${toDoItem.id}">
            <div class="list-item">
                <span contenteditable="true">
                    ${toDoItem.text}
                </span>
                <div class="check-and-x">
                    <div id="todoItemCheck">
                        <input id="${toDoItem.id}" type="checkbox"/>
                        <label for="${toDoItem.id}" class="tick js-tick"></label>
                    </div>
                    <div id="todoItemRemove">
                        <button type="button" class="close" aria-label="Close" onclick="removeTask(${toDoItem.id})">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById("todoItems").innerHTML = listHtml;
}

function printLists() {
    let listsHtml = '';

    lists.todos.forEach(list => {
        listsHtml += `
        <div class="list" onclick="selectList(${list.id})">
            <span contenteditable="true">
                ${list.name}
            </span>
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
            document.getElementById('windowListName').innerHTML = `
            <h2>${listName}</h2>
            `;
            printList();
            printLists();
        }
    }
}

function addItem(event) {
    if (event.key == 'Enter' || event.type == 'click') {
        let text = document.getElementById('newListItem').value;
        if (text) {
            currentList.addItem(new ToDoItem(text));
            document.getElementById('newListItem').value = '';
            printList();
            printLists();
        }
    }
}

function removeTask(taskId) {
    document.getElementById(taskId).innerHTML = '';
}

function removeCompleted() {
    if (document.getElementsByClassName('js-tick').checked = true) {
        // ASDFHJSHL
    }
}

function selectList(listId) {
    currentList = lists.getTodoList(listId);
    printList();
    printLists();
}