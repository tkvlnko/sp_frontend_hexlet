// @ts-check

const generateField = () => {
    const tableEl = document.createElement('table');
  
    tableEl.className = 'table-bordered';
    for (let i = 0; i < 3; i += 1) {
      const row = tableEl.insertRow();
      for (let j = 0; j < 3; j += 1) {
        const cell = row.insertCell();
        cell.className = 'py-2 px-3';
        cell.innerHTML = '<span class="invisible">s</span>';
      }
    }
    return tableEl;
  };
  
  // BEGIN (write your solution here)
  const fieldApp = () => {
    const field = generateField();
    const root = document.querySelector('.root');
    root.appendChild(field);
  
    const table = document.querySelector('.table-bordered');
    let count = 0;
    table.addEventListener('click', (e) => {
      const inner = e.target.textContent;
      if (inner === 's') {
        const turn = (count % 2 === 0) ? 'x' : 'o';
        e.target.textContent = turn;
        e.target.classList.remove('invisible');
        count += 1;
      } else {
        count += 1;
      }
    });
  };
  
  export default fieldApp;
  // END
  