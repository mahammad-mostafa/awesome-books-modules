import Book from './book.js';

export default class List {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('List')) || [];
  }

  add = (title, author) => {
    const book = new Book(title, author);
    this.list.push(book);
    this.store();
  }

  remove = (id) => {
    this.list = this.list.filter((book) => book.id !== id);
    this.store();
  }

  store = () => {
    localStorage.setItem('List', JSON.stringify(this.list));
  }
}