// @ts-check

import onChange from 'on-change';

// BEGIN (write your solution here)
export default function () {
  const state = {
    list2: [
      { name: "JavaScript", id: "secondary-javascript-list",  active: true },
      { name: "Python", id: "secondary-python-list", active: false },
      { name: "Ruby", id: "secondary-ruby-list", active: false }
      ],
    list1: [
      { name: "JavaScript", id: "list-javascript-list", active: true },
      { name: "Python", id: "list-python-list", active: false },
      { name: "Ruby", id: "list-ruby-list", active: false }
    ]
  }

  const render = () => {
    watchedState.list1.forEach((item) => {
      const divItem = document.getElementById(`${item.id}`)
      const href = divItem.getAttribute("href")
      const divContentItem = document.querySelector(href)

      if (item.active) {
        divItem.classList.add('active')
        divContentItem.classList.add("active", "show")

      } else {
        divItem.classList.remove('active')
        divContentItem.classList.remove("active", "show")
      }
    })

    watchedState.list2.forEach((item) => {
      const divItem = document.getElementById(`${item.id}`)
      const href = divItem.getAttribute("href")
      const divContentItem = document.querySelector(href)

      if (item.active) {
        divItem.classList.add('active')
        divContentItem.classList.add("active", "show")

      } else {
        divItem.classList.remove('active')
        divContentItem.classList.remove("active", "show")
      }
    })
  }

  const watchedState = onChange(state, render)


  const listgroup1 = document.getElementById('main-content-list')
  const listgroup2 = document.getElementById('secondary-content-list')


  listgroup1.addEventListener("click", (e) => {
    watchedState.list1.forEach((item) => {
      if (e.target.textContent.trim() === item.name) {
        item.active = true;
      } else {
        item.active = false;
      }
    })
  })

  listgroup2.addEventListener("click", (e) => {
    watchedState.list2.forEach((item) => {
      if (e.target.textContent.trim() === item.name) {
        item.active = true;
      } else {
        item.active = false;
      }
    })
  })


}
// END
