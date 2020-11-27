/**
 * This function receives the HTML and renders it in the appropriate section
 */

const section = document.getElementById('main');

export default (html) => {
  section.innerHTML = html;
}
