export default class Display {
  static setup(pages, links, contents) {
    this.pages = pages;
    this.links = links;
    this.contents = contents;
  }

  static page(hash) {
    this.pages.forEach((page) => {
      const link = this.links[this.pages.indexOf(page)];
      const content = this.contents[this.pages.indexOf(page)];
      if (page === hash && content.classList.contains('visible') === false) {
        link.classList.add('active');
        content.classList.add('visible');
        setTimeout(() => content.classList.add('rotate'), 1);
      } else if (content.classList.contains('visible')) {
        link.classList.remove('active');
        content.classList.remove('visible');
        content.classList.remove('rotate');
      }
    });
  }

  static list(array) {
    const fragment = new DocumentFragment();
    array.forEach((book) => {
      const item = document.createElement('li');
      let itemHTML = `<p>"${book.title}" by ${book.author}</p>`;
      itemHTML += `<button id="${book.id}">Remove</button>`;
      item.innerHTML = itemHTML;
      fragment.appendChild(item);
    });
    return fragment;
  }
}