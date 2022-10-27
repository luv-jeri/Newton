import { todoCard } from './UI.js';

const todo = JSON.parse(localStorage.getItem('todo')) || [];

for (let i = 0; i < todo.length; i++) {
  todoCard(todo[i]);
}

const D = document;

const addButton = D.getElementById('add-button'),
  taskInput = D.getElementById('task-input'),
  taskTime = D.getElementById('task-time'),
  todoWrapper = D.getElementById('todo-wrapper');

addButton.addEventListener('click', () => {
  const value = taskInput.value;
  const time = taskTime.value;

  // ! SCOPE OF IMPROVEMENT
  // ----------------------

  if (!value) {
    return alert('Please enter a task');
  }
  if (!time) {
    return alert('Please enter a time');
  }
  // const { value } = taskInput;
  const todoObject = {
    task: value,
    time: time,
    completed: false,
  };

  todoCard(todoObject);

  todo.push(todoObject);

  localStorage.setItem('todo', JSON.stringify(todo));
});
