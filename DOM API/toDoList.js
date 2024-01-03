/* eslint-disable no-param-reassign */
// @ts-check

import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

async function toDoApp() {
  const response = await axios.get(routes.tasksPath());
  const state = { tasks: response.data.items };
  const form = document.querySelector('form');
  const input = form.children[0];

  function render(param) {
    const taskList = document.querySelector('#tasks');
    state.tasks.forEach((task) => {
      const el = document.createElement('li');
      el.classList.add('list-group-item');
      el.textContent = task.name;
      param === 'append' ? taskList.appendChild(el) : taskList.prepend(el);
    });
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task = formData.get('name');

    try {
      const response = await axios.post(routes.tasksPath(), { name: task });
      state.tasks = [{ name: task }];
      render('prepend');
      input.value = '';
    } catch { }
  }

  render('append');
  form.addEventListener('submit', handlerSubmit);
}

export default toDoApp;
// END
