import {Component} from "../addition/addComponents"
import {IWords, base} from "../../../api/api"

import "./groupWordsStyle.scss";
import {Button} from "../../../UI/Button/button"

export class WordsItem extends Component {
  removeWord: (wordId: string) => void = () => {};
  updateWord: (wordId: string) => void = () => {};
  public word: IWords;
  private wordName: Component;
  private translateWord: Component;
  private transcriptionWord: Component;
  private wordImage: Component;
  private textMeaning: Component;
  private textExample: Component;
  private textExampleTranslate: Component;
  private soundWordImg: Component;
  private soundWordAudio: Component;
  private groupWord: Component
  private pageWord: Component
  private textMeaningTranslate: Component;
  constructor(parentNode: HTMLElement, word: IWords) {
    super(parentNode, "div", ["word-list"]);
    this.word = word;
    
    this.pageWord = new Component(this.element, "span", ["page-word"], word.page.toString())
    this.groupWord = new Component(this.element, "span", ["group-word"], word.group.toString())
    //главный див карточки
    const wordList = new Component(this.element, "div", ["card-word-list"]);

    //див со словом, звуком транскрипцией и переводом
    const transcriptAndMusicWord = new Component(wordList.element, "div", ["transcript-music-word"]);

    //див с доп информацией об слове
    const informationWord = new Component(wordList.element, "div", ["information-word"]);

    //первй див с информацией о слове первый пример
    const informationWordExampleone=new Component(informationWord.element, "div", ["informationWorde-exampleone"])


    //второй див с информацией о слове второй пример
    const informationWordExampletwo=new Component(informationWord.element, "div", ["informationWorde-exampletwo"])

    //див в transcriptAndMusicWord со словом и транскрипцией
    const transcriptAndWord=new Component(transcriptAndMusicWord.element, "div", ["transcript-and-word"])
    const transcriptAndWordOneBlock = new Component(transcriptAndWord.element, "div", ["transcript-and-wordOneBlock"])

    //див со звком 
    const soundWord=new Component(transcriptAndMusicWord.element, "div", ["sound-word__div"])
    this.soundWordImg =new Component(soundWord.element, "img", ["sound-word__svg"]) 
    this.soundWordImg.element.setAttribute("src", '../../assets/img/soundicon.png')
   
    // this.soundWordAudio=new Component(soundWord.element, "audio", ["sound-word__audio"])
    const soundWordAudio=document.createElement("audio") as HTMLAudioElement
    soundWord.element.appendChild(soundWordAudio)
    soundWordAudio.setAttribute("src", `${base}/${word.audio}`)
   
    this.soundWordImg.element.addEventListener("click", (e) => {
      soundWordAudio.play()
})
    
    this.wordImage = new Component(this.element, "img", ["image-word"]);

this.wordImage.element.setAttribute("src", `${base}/${word.image}`);
    this.wordName = new Component(
      transcriptAndWordOneBlock.element,
      "span",
      ["name-word"],
      word.word
    );
  
    this.translateWord = new Component(
      transcriptAndWord.element,
      "div",
      ["translate-word"],
      word.wordTranslate
    );
    this.transcriptionWord = new Component(
      transcriptAndWordOneBlock.element,
      "span",
      ["transcription-word"],
      word.transcription
    );
    this.textMeaning = new Component(
      informationWordExampleone.element,
      "div",
      ["textMeaning-word"],
      word.textMeaning
    );
    this.textMeaningTranslate=new Component(informationWordExampleone.element, "div", ["text-meaning-translate"], word.textMeaningTranslate)
    this.textExample = new Component(
      informationWordExampletwo.element,
      "div",
      ["textExample-word"],
      word.textExample
    );
    this.textExampleTranslate = new Component(
      informationWordExampletwo.element,
      "div",
      ["textExampleTranslate-word"],
      word.textExampleTranslate
    );

    const removeBtn = new Button(wordList.element, ["btn-small"], "remove");
    removeBtn.onClickButton = () => {
      if (word.id) this.removeWord(word.id);
      this.destroy();
    };
  }
}
