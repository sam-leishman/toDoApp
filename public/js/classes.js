class ToDoItem {
    constructor(text) {
        this.text = text;
        this.id = getNewId();
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
    removeItem(taskId) {
        this.listItems = this.listItems.filter(item => item.id != taskId);
    }
}

class ToDoList {
    constructor() {
        this.todos = [];
    }
    addTodoList(todo) {
        this.todos.push(todo);
    }
    getTodoList(listId) {
        return this.todos.find(list => list.id == listId);
    }
    removeTodoList(todoId) {
        this.todos = this.todos.filter(todo => todo.id != todoId);
    }
}