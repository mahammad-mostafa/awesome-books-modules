import Books from './modules/list.js';
import Display from './modules/display.js';

const books = new Books();
const pages = ['#list', '#add', '#contact'];
const menu = document.querySelector('.header-menu');
const links = document.querySelectorAll('.header-menu a');
const contents = document.querySelectorAll('.content');
const list = document.querySelector('.content-list');
const form = document.querySelector('.content-form');

function displayBooks() {
  if (books.list.length === 0) {
    list.innerHTML = '<h2>No available books</h2>';
  } else {
    list.innerHTML = '';
    list.appendChild(Display.list(books.list));
  }
}
function contentEvent(event) {
  event.preventDefault();
  if (event.target.hash !== '') {
    Display.page(event.target.hash);
  }
}
function addEvent(event) {
  event.preventDefault();
  books.add(form.title.value, form.author.value);
  displayBooks();
  form.reset();
}
function removeEvent(event) {
  if (event.target.id !== '') {
    books.remove(event.target.id);
    displayBooks();
  }
}
menu.addEventListener('click', contentEvent);
list.addEventListener('click', removeEvent);
form.addEventListener('submit', addEvent);
Display.setup(pages, links, contents);
Display.page('#list');
displayBooks();