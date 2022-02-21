import { Component } from "../addition/addComponents";
import { IWords, getAllWords, getWord, deleteUserWord } from "../../../api/api";
import "./groupWordsStyle.scss";
import { GroupWordsContainer } from "./groupWordsContainer";

export class GroupWordsClass extends Component {
  [x: string]: any;
  page = 0;
  group = 0;
  private groupWordsContainer: GroupWordsContainer;
  private title: Component;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["textBook_wrapper"]); 
    
    this.title = new Component( 
        this.element,
        "h1",
        ["textBook__title"],
        "Учебник"
      );

    this.groupWordsContainer = new GroupWordsContainer(this.element);
    this.getAllWords(this.page, this.group);
    this.groupWordsContainer.removeWord = (id, wordId) => this.removeWord(id, wordId);
     this.groupWordsContainer.updateWord = (wordId) => this.getWord(wordId);
    this.groupWordsContainer.updatePage = (page, group) => {
      this.page = page;
      this.group = group;
      this.getAllWords(page, group);
      localStorage.setItem('group', `${this.group}`)
      localStorage.setItem('page', `${this.page}`)
    };

  }
  private async getAllWords(page: number, group:number): Promise<void> {
    const data = await getAllWords(page, group);
    if (data) {
      const wordsArr: Array<IWords> = data.words;
      const wordLength: string = data.count;
      this.groupWordsContainer.addItems(wordsArr, wordLength);
      this.groupWordsContainer.pagination.updateNextButton(
        this.page,
        this.group,
        +wordLength,
        20
      );
      this.groupWordsContainer.pagination.updateGroupButton(
        this.page,
        this.group,
        +wordLength,
        600
      )
    }
  } 
  private async getWord(wordId: string): Promise<void> {
    const word = await getWord(wordId);
    console.log(word);
    // if (word) this.garageOptions.updateState(word);
  }
  private async updateWord(word: IWords): Promise<void> {
    await this.updateWord(word);
    await this.getAllWords(this.page, this.group);
  }

  private async removeWord(id: string, wordId: string): Promise<void> {
    await deleteUserWord(id, wordId);
    // console.log(deleteWord(wordId))
    await this.getAllWords(this.page, this.group);
  }

}

