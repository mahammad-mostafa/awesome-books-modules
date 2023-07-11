import { DateTime } from './modules/luxon.min.js';
import Display from './modules/display.js';
import Books from './modules/list.js';

const books = new Books();
const pages = ['#list', '#add', '#contact'];
const menu = document.querySelector('.header-menu');
const time = document.querySelector('.header time');
const links = document.querySelectorAll('.header-menu a');
const contents = document.querySelectorAll('.content');
const list = document.querySelector('.content-list');
const form = document.querySelector('.content-form');

const displayBooks = () => {
  if (books.list.length === 0) {
    list.innerHTML = '<h2>No available books</h2>';
  } else {
    list.innerHTML = '';
    list.appendChild(Display.list(books.list));
  }
};
const contentEvent = (event) => {
  event.preventDefault();
  if (event.target.hash !== undefined) {
    Display.page(event.target.hash);
  }
};
const addEvent = (event) => {
  event.preventDefault();
  books.add(form.title.value, form.author.value);
  displayBooks();
  form.reset();
};
const removeEvent = (event) => {
  if (event.target.id !== '') {
    books.remove(event.target.id);
    displayBooks();
  }
};

setInterval(() => { time.textContent = DateTime.now().toFormat('LLL dd y, hh:mm:ss a'); }, 1000);
time.textContent = DateTime.now().toFormat('LLL dd y, hh:mm:ss a');
menu.addEventListener('click', contentEvent);
list.addEventListener('click', removeEvent);
form.addEventListener('submit', addEvent);
Display.setup(pages, links, contents);
Display.page('#list');
displayBooks();