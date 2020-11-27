/**
 * The data handler orders the movies depending on their release year and sends the necessary components to the renderer
 */

import constructor from './constructor';

export default (movies) => {
  let list = movies.sort((a, b) => (a.Year > b.Year) ? 1 : (a.Year < b.Year) ? -1 : 0);

  constructor(list);
}
