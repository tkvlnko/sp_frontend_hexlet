// @ts-check
/* eslint-disable no-param-reassign */


const render = (state, container) => {

}

const createForm = (state, container, filledText, type) => {
  container.innerHTML = '';
  const parentDiv = document.createElement('form');

  const lbl = document.createElement('label');
  lbl.classList.add('sr-only');
  lbl.setAttribute("for", `${type}`);
  parentDiv.appendChild(lbl);

  const inpText = document.createElement('input');
  inpText.classList.add('input-text')
  inpText.setAttribute("type", "text");
  inpText.setAttribute("id", `${type}`);
  inpText.setAttribute("name", `${type}`);
  inpText.setAttribute("value", `${filledText}`);
  parentDiv.appendChild(inpText);
  inpText.addEventListener('input' , (e) => {
    state.formInnerText = e.target.value
  })

  const inpButton = document.createElement('input');
  inpButton.setAttribute("type", "submit");
  inpButton.setAttribute("value", `Save ${type}`);
  parentDiv.appendChild(inpButton);
  inpButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newText = state.formInnerText
    container.innerHTML = newText;
    state.formState = 'submitted';
  })

  container.appendChild(parentDiv);


}

const editableForms = () => {
  const state1 = {
      formState: 'hidden',
      formInnerText: 'name',
  };
  const state2 = {
    formState: 'hidden',
    formInnerText: 'email',
  };

  const inputName = document.querySelector('[data-editable-target="name"]');
  const inputEmail = document.querySelector('[data-editable-target="email"]');

  inputName.addEventListener('click', (e) => {
    const filledText = e.target.textContent;

    if (state1.formState === 'hidden') {
      state1.formState = 'filling';
      createForm(state1, inputName, filledText, 'name');

    } else if (state1.formState = 'submitted') {
      state1.formState = 'hidden';

    }
  });

  inputEmail.addEventListener('click', (e) => {
    const filledText = e.target.textContent;

    if (state2.formState === 'hidden') {
      state2.formState = 'filling';
      createForm(state2, inputEmail, filledText, 'email');

    } else if (state1.formState = 'submitted') {
      state2.formState = 'hidden';

    }
  })
 


}

export default editableForms;
