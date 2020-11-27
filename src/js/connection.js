/**
 * It establishes the retrieval of data keys and makes the necessary connection to the API
 */

import dataHandler from './dataHandler';

export default (query, movies) => {
  query = query.replace(' ', '+');

  fetch('../../env.json')
    .then((response) => response.json())
    .then((keys) => {
      APICall(query, keys.OMDB_URL, keys.OMDB_KEY, movies);  
    })
    .catch((error) => {
      console.error('An error ocurred while fetching the keys');
      console.error(error);
    });
}

const APICall = (query, url, key, movies) => {
  const API_url = `${url}/?apikey=${key}&s=${query}&type=movie`;

  fetch(API_url)
    .then((response) => response.json())
    .then((content) => {
      content.Search.forEach((entry) => {
        movies.push(entry);
      });

      dataHandler(movies);
    })
    .catch((error) => {
      console.error('There was an error while communicating with the API');
      console.error(error);
    })
}
