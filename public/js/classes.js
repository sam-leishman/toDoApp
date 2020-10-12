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
    removeItem(listId) {
        this.listItems = this.listItems.filter(list => list.id != listId);
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
    getTodoList(todoId) {
        return this.todos.find(todo => todo.id == todoId);
    }
    removeTodoList(todoId) {
        this.todos = this.todos.filter(todo => todo.id != todoId);
    }
}