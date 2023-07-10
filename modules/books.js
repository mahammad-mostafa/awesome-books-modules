export default class Books {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('Books')) || [];
  }

  addBook(book) {
    this.bookList.push(book);
    this.storeList();
  }

  removeBook(id) {
    this.bookList = this.bookList.filter((book) => book.id !== id);
    this.storeList();
  }

  storeList() {
    localStorage.setItem('Books', JSON.stringify(this.bookList));
  }
}