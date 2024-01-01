// @ts-check
import axios from 'axios';

const routes = {
  randomQuotePath: () => '/api/quotes/random',
};

export default () => {
  const btn = document.querySelector('button')
  btn.addEventListener('click', async () => {
    const response = await axios.get(routes.randomQuotePath());
    document.querySelector('#result').innerHTML = response.data.quote
    console.log(response.data.quote);
  })
};
