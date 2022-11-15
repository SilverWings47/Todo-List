const addTaskBtn = document.querySelector('.add-task-btn');
const todoList = document.querySelector('.todo-list');


addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const template = document.getElementsByTagName('template')[0];
    const taskInputText = document.querySelector('.task-input-text');

    const clone = template.content.cloneNode(true);

    let taskText = taskInputText.value; 

    if(!taskInputText.value) return;

    clone.children[0].children[0].textContent = taskText;
    taskInputText.value = '';
    todoList.appendChild(clone);

    attachEventListeners();
}

function attachEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const uncheckedButtons = document.querySelectorAll('.unchecked-btn');
    const checkedButtons = document.querySelectorAll('.checked-btn');
    
    deleteButtons.forEach(function(btn) {
        btn.addEventListener('click', deleteTask);
    });

    uncheckedButtons.forEach(function(btn) {
        btn.addEventListener('click', checkTask);
    });

    checkedButtons.forEach(function(btn) {
        btn.addEventListener('click', uncheckTask);
    });
}

function checkTask() {
    this.parentElement.parentElement.style.setProperty('--animation', 'loading 200ms linear forwards');
    this.classList.remove('visible');
    this.parentElement.children[2].classList.add('visible');
    this.parentElement.parentElement.children[0].classList.toggle('completed');
}

function uncheckTask() {
    this.classList.remove('visible');
    this.parentElement.children[1].classList.add('visible');
    this.parentElement.parentElement.style.removeProperty('--animation');
    this.parentElement.parentElement.children[0].classList.toggle('completed');
}

function deleteTask() {
    const parentTask = this.parentElement.parentElement;
    todoList.removeChild(parentTask);
}