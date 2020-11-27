/**
 * This main JS file contains all the variables grabbed from the document, as well as
 * the event listener assignation
 */

import connection from './connection';

const search_input = document.getElementById('search');
const search_button = document.getElementById('submit');
const loading_text = document.getElementById('loading-text');

let movies = [];

const dataSearch = () => {
  const query = search_input.value;

  search_input.value = '';
  loading_text.className = 'loading';

  connection(query, movies);

  loading_text.className = 'loading hidden';
}

search_button.addEventListener('click', () => {
  dataSearch();
});

search_input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    dataSearch();
  }
})
