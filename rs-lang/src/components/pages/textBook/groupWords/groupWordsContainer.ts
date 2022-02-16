import { Component } from "../addition/addComponents";
import { IWords } from "../../../api/api";
import { Pages } from "../pagination";
import "./groupWordsStyle.scss";
import { WordsItem } from "./wordsItem";
export class GroupWordsContainer extends Component {
  removeWord: (wordId: string) => void = () => {};
   updateWord: (wordId: string) => void = () => {};
  updatePage: (page: number, group: number) => void = () => {};
  getGroup:(group:number)=> void = () => {};
  public word: IWords;
  private container: Component;
  private title: Component;
  pagination: Pages;
  // grouping: Pages;
  wordCart: Array<WordsItem>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["textBooks-container"]);
    this.wordCart = [];
    // this.grouping=new Pages(this.element)
    this.pagination = new Pages(this.element);
  
    this.container = new Component(this.element, "div", ["textBookGroup"]);
    this.pagination.updatePage = (page, group) => this.updatePage(page, group);
    // this.grouping.getGroup = (group) => this.getGroup(group)
  }

  private clear() {
    this.container.element.innerHTML = "";
  }
  // private updateTitle(wordLength: string) {
  //   this.title.element.innerHTML = `WordLength - (${wordLength} words)`;
  // }

  addItems(wordCart: Array<IWords>, wordLength: string): void {
    this.clear();
    // this.updateTitle(wordLength);
    this.wordCart = wordCart.map((word) => {
      const item = new WordsItem(this.container.element, word);
      item.removeWord = (wordId) => this.removeWord(wordId);
       item.updateWord = (wordId) => this.updateWord(wordId);
    
      return item;
    });
  }
}

