/**
 * This function constructs the necessary HTML that's gonna be used
 */

import render from './render';

export default (list) => {
  let html = '';
  
  list.forEach((movie) => {
    html += `
    <div class="movie">
      <div class="image-container">
        <img src="${movie.Poster}" alt="Image" class="poster" />
      </div>
      <div class="data-container">
        <div class="title">${movie.Title}</div>
        <div class="year">Year: ${movie.Year}</div>
      </div>
    </div>
    `
  });

  render(html);
}
