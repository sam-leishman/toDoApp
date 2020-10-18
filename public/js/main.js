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



/* OLD JAVASCRIPT
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
   /*
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
*/

const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')

const taskElement = document.importNode(taskTemplate.content, true)
const deleteTaskButton = taskElement.querySelector('[data-delete-task-button]')

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId;
        save();
        render();
    }
})

tasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = lists.find(list => list.id === selectedListId)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
    }
})

clearCompleteTasksButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    save();
    render();
})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId);
    selectedListId = null;
    save();
    render();
})

deleteTaskButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => task.id != e.target.id)
})

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null;
    lists.push(list)
    save();
    render();
})

newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    if (taskName == null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null;
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task)
    save();
    render();
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function createTask(name) {
    return { id: Date.now().toString(), name: name, complete: false }
}

function removeTask() {
    // const selectedList = lists.find(list => list.id === selectedListId)
    // selectedList.tasks = selectedList.tasks.filter(task => !task.)
    // document.getElementById(taskId).innerHTML = '';
    var thing = document.getElementById(taskId);
    if (thing == undefined || thing === '') {
        return;
    }
    thing.parentElement.parentElement.innerHTML = '';
    // document.getElementById(taskId).innerHTML = '';

    save();
    render(); // ?
}

function render() {
    clearElement(listsContainer)
    renderLists();
    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = '';
        listTitleElement.innerText = selectedList.name
        clearElement(tasksContainer);
        renderTasks(selectedList);
    }
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)

        // NEW STUFF =====
        // const containerForTask = taskElement.getElementsByClassName('containerForTask')[0];
        const containerForTask = taskElement.getElementById('containerForTask');
        // const containerForTask = taskElement.firstElementChild;
        // containerForTask.id = task.id;
        const removeTaskButton = taskElement.getElementById('removeTask')
        // removeTaskButton.onclick = task.delete = true;
        // removeTaskButton.onclick = removeTask(task.id);
        // ===============

        const divthing = taskElement.querySelector('div.task');
        // divthing.id = task.id;
        const button = taskElement.querySelector('button');
        button.addEventListener('click', e => {
            var divtask = e.currentTarget.parentElement;
            var inputelem = divtask.firstElementChild;
            var container = divtask.parentElement;
            // var thing = e.parentElement;
            container.innerHTML = '';
            const selectedList = lists.find(list => list.id === selectedListId)
            selectedList.tasks = selectedList.tasks.filter(t => t.id != inputelem.id)
            save();
            // var thing = document.getElementById(e.target.id);
            // if (thing == undefined || thing === '') {
            //     return;
            // }
            // thing.parentElement.parentElement.innerHTML = '';
        });
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.appendChild
        var nameSpan = document.createElement('span')
        nameSpan.innerHTML = task.name;
        nameSpan.contentEditable = true;
        nameSpan.addEventListener("input", e => {
            const id = e.currentTarget.parentElement.htmlFor;
            const selectedList = lists.find(list => list.id === selectedListId)
            const task = selectedList.tasks.filter(t => t.id === id)[0];
            task.name = e.currentTarget.innerText;
            save();
        }, false);
        label.appendChild(nameSpan)
        tasksContainer.appendChild(taskElement)
        // const parentThingy = document.getElementById(task.id)
        // const thingy = parentThingy.getElementsByTagName('button')
        // thingy.addEventListener('click', e => {
        //     var thing = e.parentElement.parentElement;
        //     thing.innerHTML = '';
        //     // var thing = document.getElementById(e.target.id);
        //     // if (thing == undefined || thing === '') {
        //     //     return;
        //     // }
        //     // thing.parentElement.parentElement.innerHTML = '';
        // });
    })
}

function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add('list-name')
        listElement.innerText = list.name;
        if (list.id === selectedListId) {
            listElement.classList.add('active-list')
        }
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render();