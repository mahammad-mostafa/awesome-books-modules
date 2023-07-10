export default class Book {
  constructor(id, title, author) {
    this.id = `${Date.now()}`;
    this.title = title;
    this.author = author;
  }
}