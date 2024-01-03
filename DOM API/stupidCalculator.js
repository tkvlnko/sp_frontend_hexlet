/* eslint-disable no-param-reassign */
// @ts-check

// BEGIN (write your solution here)
const app = () => {
    const form = document.querySelector('form');
    const result = document.getElementById('result');
    const inpText = form.children[0];
    const resetButton = form.children[2];
  
    const handlerInc = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const number = formData.get('number');
      result.textContent = parseInt(number, 10) + parseInt(result.textContent, 10);
      form.reset();
      inpText.focus();
    };
  
    const handlerReset = () => {
      result.textContent = 0;
      inpText.focus();
    };
  
    inpText.focus();
    form.addEventListener('submit', handlerInc);
    resetButton.addEventListener('click', handlerReset);
  };
  
  export default app;
  // END
  