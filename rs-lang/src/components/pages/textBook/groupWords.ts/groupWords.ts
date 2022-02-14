import { Component } from "../addition/addComponents";
import { IWord } from "../../interfaces/iword";
import "./style.scss";
import {getAllWords, getWord, deleteWord } from "../../api/api";
import { GroupWordsContainer } from "./groupWordsContainer";
import { MainTextContent } from "../Components/textBookMain";
export class GroupWordsClass extends Component {
  [x: string]: any;
  page = 1;
  group = 0;
  private groupWordsContainer: GroupWordsContainer;
  private title: Component;
  grouping: MainTextContent;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["textBook_wrapper"]);
    this.title = new Component( 
        this.element,
        "h1",
        ["textBook__title"],
        "Учебник"
      );
    this.textbookSubheading=new Component(this.element, "h3", ["textbook__subheading"], "Уровни сложности слов")
    // this.grouping=new MainTextContent(this.element)

    this.groupWordsContainer = new GroupWordsContainer(this.element);

    this.getAllWords(this.page, this.group);
   
    this.groupWordsContainer.removeWord = (wordId) => this.removeWord(wordId);
     this.groupWordsContainer.updateWord = (wordId) => this.getWord(wordId);
    this.groupWordsContainer.updatePage = (page) => {
      this.page = page;
      this.group = this.group
      this.getAllWords(page, this.group);
    };
    this.groupWordsContainer.getGroup = (group)=> {
      this.group = group;
      this.page = this.page
      this.getAllWords(this.page, group)
    }
  }
  private async getAllWords(page: number, group:number): Promise<void> {
    const data = await getAllWords(page, group);

    if (data) {
      const wordsArr: Array<IWord> = data.words;
      const wordLength: string = data.count;
      this.groupWordsContainer.addItems(wordsArr, wordLength);
      this.groupWordsContainer.pagination.updateNextButton(
        this.page,
        this.group,
        +wordLength,
        20
      );
      this.groupWordsContainer.grouping.updateGroupButton(
        this.page,
        this.group,
        +wordLength,
        600
      );
    }
  }
  private async getWord(wordId: string): Promise<void> {
    const word = await getWord(wordId);
    console.log(word);
    // if (word) this.garageOptions.updateState(word);
  }
  private async updateWord(word: IWord): Promise<void> {
    await this.updateWord(word);
    await this.getAllWords(this.page, this.group);
  }

  private async removeWord(wordId: string): Promise<void> {
    await deleteWord(wordId);
    await this.getAllWords(this.page, this.group);
  }

}

