// Задача этого упражнения — реализовать автозаполнение.

// На странице присутствуют элементы input с атрибутами data-autocomplete и data-autocomplete-name, 
// к которым нужно привязаться. Атрибут data-autocomplete содержит путь, по которому нужно сделать 
// запрос на получение данных. Атрибут data-autocomplete-name содержит имя, по которому необходимо 
// найти на странице список ul с точно таким же атрибутом и значением. В этом списке выводятся данные.

import 'whatwg-fetch';

function autoFill() {
  const allInputs = document.querySelectorAll('input');
  allInputs.forEach((el) => {
    el.addEventListener('input', async (e) => {
      const attrib = e.target.getAttribute('data-autocomplete');
      const nam = e.target.getAttribute('data-autocomplete-name');

      const url = new URL(attrib, window.location.href);
      url.searchParams.append('search', e.target.value);

      const response = await fetch(url);
      const res = await response.json();

      const t = document.querySelector(`ul[data-autocomplete-name="${nam}"]`);
      if (res.length === 0) {
        t.innerHTML = '<li>Nothing</li>';
      } else {
        t.innerHTML = '';
        res.forEach((r) => {
          const l = document.createElement('li');
          l.textContent = r;
          t.append(l);
        });
      }
    });
  });
}

export default autoFill;
