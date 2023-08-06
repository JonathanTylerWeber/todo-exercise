const form = document.querySelector('#new-text');
const input = document.querySelector('#list-item');
const todoList = document.querySelector('#todo-list');
let storage = [];

todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        updateLocalStorage();
    }
    else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('done');
        updateLocalStorage();
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    input.value = '';
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    newTodo.append(removeBtn);
    todoList.append(newTodo);
    updateLocalStorage()
});

function updateLocalStorage() {
    localStorage.setItem('todoList', todoList.innerHTML);
};

function showTask() {
    todoList.innerHTML = localStorage.getItem('todoList')
};

showTask()