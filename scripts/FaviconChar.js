export default class FaviconChar {
  constructor() {
    this.dom = {
      placeholder: document.querySelector('.penny-lane')
    }

    this.placeholderArr = ['img/a.svg', 'img/b.svg', 'img/c.svg', 'img/d.svg', 'img/e.svg', 'img/f.svg','img/g.svg'];
    this.charArr = ['@', '#', '!', '?', '$', '%', '&'];

    this.init();
  }

  init() {
    this.setPlaceholder();
  }

  setPlaceholder() {
    const index = Math.floor(Math.random() * this.placeholderArr.length);
    this.placeholder = this.placeholderArr[index];
    this.dom.placeholder.innerText = this.placeholder;
    this.char = this.charArr[index];
  }
}