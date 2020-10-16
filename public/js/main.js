// =========================
// Today's Date
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



// =========================
// Create ID
function getNewId() {
    return (Math.random() + Math.random()) * 1000;
}
// =========================



const lists = new ToDoList();
let currentList = new List('List 1');

function printItem() {
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
            <input id="${toDoItem.id}" type="checkbox"/>
            <label for="${toDoItem.id}" class="tick js-tick">
                <div class="list-item">
                    <span contenteditable="true">
                        ${toDoItem.text}
                    </span>
                    <div id="todoItemRemove">
                        <button type="button" class="close" aria-label="Close" onclick="removeTask(${toDoItem.id})">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </label>
        </div>
        `;
    });
    document.getElementById("todoItems").innerHTML = listHtml;
}

function printLists() {
    let listsHtml = '';

    lists.todos.forEach(list => {
        listsHtml += `
        <div class="${list.id}">
            <div class="list" onclick="selectList(${list.id})">
                <span contenteditable="true">
                    ${list.name}
                </span>
                <div id="todoListRemove">
                    <button type="button" class="close" aria-label="Close" onclick="removeList(${list.id})">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
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
            printItem();
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
            printItem();
            printLists();
        }
    }
}

function removeTask(taskId) {
    document.getElementById(taskId).innerHTML = '';
}

function removeList(listId) {
    document.getElementById(listId).innerHTML = '';
}

function removeCompleted(taskId) {
    // if (document.getElementsByClassName('js-tick').checked = true) {
    //     ToDoItem.completed = true;
    //     if (ToDoItem.completed = true) {
    //         document.getElementById(taskId).innerHTML = '';
    //     }
    // }
}

function selectList(listId) {
    currentList = lists.getTodoList(listId);
    // windowListName = list.name;
    // document.getElementById('windowListName').innerHTML = `
    // <h2>${windowListName}</h2>
    // `;
    printItem();
    printLists();
}