const todoCard = (todo) => {
  const todoWrapper = document.getElementById('todo-wrapper');

  const div = document.createElement('div');
  div.classList.add('todo-card');
  const title = document.createElement('h3');
  const time = document.createElement('h6');

  title.innerText = todo.task;
  time.innerText = todo.time;

  if (!todo.completed) {
    div.style.backgroundColor = '#FFCACA';
  } else {
    div.style.backgroundColor = '#2ECC71';
  }
  div.append(title, time);

  todoWrapper.append(div);
};

export { todoCard };
