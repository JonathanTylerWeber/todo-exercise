const form = document.querySelector('#new-text');
const input = document.querySelector('#list-item');
const todoList = document.querySelector('#todo-list');
let storage = [];

if(localStorage.getItem('todoList')){
    storage = JSON.parse(localStorage.getItem('todoList'));
    for (item of storage){
        const newTodo = document.createElement('li');
        newTodo.innerText = item;
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'X';
        newTodo.append(removeBtn);
        todoList.append(newTodo);
    }
};

todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        const todoText = e.target.parentElement.innerText;
        const index = storage.indexOf(todoText);
        if (index !== -1){
            storage.splice(index, 1);
            updateLocalStorage();
        }
    }
    else if (e.target.tagName === 'LI'){
        e.target.classList.toggle('done');
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    input.value = '';
    storage.push(newTodo.innerText);
    updateLocalStorage();
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    newTodo.append(removeBtn);
    todoList.append(newTodo);
});

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(storage));
}

