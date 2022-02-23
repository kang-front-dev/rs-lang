import { Component } from "../addition/addComponents";
import { IWords } from "../../../api/api";
import { Pages } from "../pagination";
import "./groupWordsStyle.scss";
import { WordsItem } from "./wordsItem";
export class GroupWordsContainer extends Component {
  removeWord: (id: string, wordId: string) => void = () => {};
  updateWord: (wordId: string) => void = () => {};
  updatePage: (page: number, group: number) => void = () => {};
  getGroup:(group:number)=> void = () => {};
  public word: IWords;
  private container: Component;
  private title: Component;
  pagination: Pages;
  wordCart: Array<WordsItem>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["textBooks-container"]);
    this.wordCart = [];
    this.pagination = new Pages(this.element);
    this.container = new Component(this.element, "div", ["textBookGroup"]);
    this.pagination.updatePage = (page, group) => this.updatePage(page, group);
  }

  private clear() {
    this.container.element.innerHTML = "";
  }

  addItems(wordCart: Array<IWords>, wordLength: string): void {
    this.clear();
    this.wordCart = wordCart.map((word) => {
      const item = new WordsItem(this.container.element, word);
      item.removeWord = (id, wordId) => this.removeWord(id, wordId);
       item.updateWord = (wordId) => this.updateWord(wordId);
      return item;
    });
  }
}

