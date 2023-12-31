// @ts-check
import { htmlEscape } from 'escape-goat';

const screenContent = () => {
  const form = document.querySelector('.feedback-form');
  form.addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const nam = formData.get('name');
    const comment = formData.get('comment');

    form.outerHTML = `<div>
        <p>Feedback has been sent</p>
        <div>Email: ${htmlEscape(email)}</div>
        <div>Name: ${htmlEscape(nam)}</div>
        <div>Comment: ${htmlEscape(comment)}</div>
      </div>`;
  });
};

export default screenContent;
// END
