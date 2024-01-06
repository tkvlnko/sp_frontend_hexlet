/* eslint-disable no-param-reassign */
// @ts-check

// BEGIN (write your solution here) (write your solution here)
const displayCompanies = (companies) => {
    const state = {}
    state.companies = companies;
    const accordion = [
      { id: 1, visibility: 'hidden', clicks: 0 },
      { id: 2, visibility: 'hidden', clicks: 0 },
      { id: 3, visibility: 'hidden', clicks: 0 },
    ]
    state.uiState = accordion;
    state.clicksCount = 0;
  
    const parentDiv = document.querySelector('div');
  
    const renderTextContent = () => {
      const div = document.querySelector('.result')
      state.uiState.forEach((p) => {
        if (p.visibility === 'shown') {
          const id = p.id;
          const clicks = p.clicks;
  
          state.companies.forEach((company) => {
            if (company.id == id) {
              const text = clicks % 2 != 0 ? company.description : ''
              div.textContent = text;
            }
          })
  
        } else {
          p.clicks = 0;
        }
      })
  
    }
  
    state.companies.forEach((company) => {
      const btn = document.createElement('button');
      btn.textContent = company.name;
      btn.classList.add('btn', 'btn-primary');
      parentDiv.appendChild(btn);
  
      btn.addEventListener('click', (e) => {
  
        let id;
        state.companies.forEach((company) => {
          if (company.name == e.target.textContent) {
            id = company.id;
          }
        })
  
        state.uiState.forEach((p) => {
          if (p.id == id) {
            p.visibility = 'shown';
            p.clicks += 1;
          } else {
            p.visibility = 'hidden';
          }
          renderTextContent();
        })
      });
    })
  
    const newDiv = document.createElement('div')
    newDiv.classList.add('result')
    parentDiv.append(newDiv);
  }
  
  export default displayCompanies;
  // END
  