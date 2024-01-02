// @ts-check

const modalWindows = () => {
    const btns = document.querySelectorAll('[data-toggle="modal"]');
    btns.forEach((btn) => {
      const windowId = btn.getAttribute('data-target');
      const window = document.querySelector(windowId);
      const closeBtn = window.querySelector('[data-dismiss="modal"]');
  
      btn.addEventListener('click', () => {
        window.classList.add('show');
        window.style.display = 'block';
      });
  
      closeBtn.addEventListener('click', () => {
        window.classList.remove('show');
        window.style.display = 'none';
      });
    });
  };
  
  export default modalWindows;
  