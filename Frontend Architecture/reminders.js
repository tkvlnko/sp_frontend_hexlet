// @ts-check
/* eslint-disable no-param-reassign */

import uniqueId from 'lodash/uniqueId.js';

const remainders = () => {
  const state = {
    numOfLists: 1,
    activeListId: 1,
    currentTaskList: 'empty',
    lists: [
      {
        id: 1,
        name: "General",
        active: true
      }
    ],
    tasks: []
  }

const render = (state, listsForm = {}, tasksForm = {}) => {
  const listsContainer = document.querySelector('[data-container="lists"]')
  listsContainer.innerHTML = ''
  const lstUlContainer = document.createElement('ul')
  listsContainer.append(lstUlContainer)

  state.lists.forEach((list) => {
    const li = document.createElement('li');
    if (!(list.active)) {
      const href = document.createElement('a');
      href.setAttribute('href', `#${[list.name.toLowerCase()].join()}`);
      href.textContent = list.name;
      li.append(href);
      lstUlContainer.append(li)
    } else {
      li.innerHTML = '<b>' + list.name + '</b>';
      lstUlContainer.append(li)
    }
    li.addEventListener('click', (e) => {
      state.lists.map((list) => {
        if (list.name == e.target.textContent) {
          list.active = true
          state.activeListId = list.id
        } else {
          list.active = false
        }
      })
      render(state)
      renderTasks(state)
    })
  })
}

const renderTasks = (state) => {
    state.currentTaskList = 'empty'
    const listsContainer = document.querySelector('[data-container="tasks"]');
    listsContainer.innerHTML = '';
    const lstUlContainer = document.createElement('ul')


    state.tasks.forEach((task) => {
      if (task.listId === state.activeListId) {
        const li = document.createElement('li');
        li.textContent = task.text;
        lstUlContainer.append(li);
        state.currentTaskList = 'filled'
      }
    })

  if (state.currentTaskList == 'filled') {
    listsContainer.append(lstUlContainer)
  }

}

  render(state)

  const listsForm = document.querySelector('[data-container="new-list-form"]')
  const tasksForm = document.querySelector('[data-container="new-task-form"]')

  listsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get data and add new list to the state
    const formData = new FormData(e.target);
    const newList = {};
    newList.name = formData.get("name");
    newList.id = state.numOfLists + 1;
    if (state.lists.every((list) => list.name != newList.name)) {
      state.lists.push(newList);
      // update state
      // state.activeListId = state.numOfLists + 1;
      state.numOfLists += 1;
    }
    listsForm.reset();

    render(state);
    renderTasks(state);
  })

  tasksForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTask = {};
    newTask.text = formData.get("name");
    newTask.listId = state.activeListId;
    state.tasks.push(newTask);
    tasksForm.reset();

    render(state);
    renderTasks(state);
  })
}

export default remainders;
