// Load todo list from localStorage if available, otherwise, initialize an empty array
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = 
            `
            <div class="name-todo-list">${name}</div>
            <div class="duedate-todo-list">${dueDate}</div>
            <button onclick="deleteToDo(${i})" class="delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function deleteToDo(i) {
    todoList.splice(i, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList)); // Save updated todo list to localStorage
    renderTodoList();
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const name = inputElement.value.trim();
    const dueDate = dateInputElement.value.trim();

    if (name && dueDate) { // Ensure name and due date are not empty
        todoList.push({
            name,
            dueDate
        });

        inputElement.value = '';
        dateInputElement.value = '';

        localStorage.setItem('todoList', JSON.stringify(todoList)); // Save updated todo list to localStorage
        renderTodoList();
    } else {
        alert("Both name and due date are required.");
    }
}

// Initial rendering of the todo list
renderTodoList();
