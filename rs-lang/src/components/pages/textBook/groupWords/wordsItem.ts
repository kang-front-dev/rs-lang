import {Component} from "../addition/addComponents"
import {IWords, base, createUserWords} from "../../../api/api"

import "./groupWordsStyle.scss";
import {Button} from "../../../UI/Button/button"

export class WordsItem extends Component {
  removeWord: (id: string, wordId: string) => void = () => {};
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
  private textMeaningTranslate: Component;
  private wordList: Component;
 
  constructor(parentNode: HTMLElement, word: IWords) {
    super(parentNode, "div", ["word-list"]);
    this.word = word;
    //главный див карточки
    this.wordList = new Component(this.element, "div", ["card-word-list"]);

    //див со словом, звуком транскрипцией и переводом
    const transcriptAndMusicWord = new Component(this.wordList.element, "div", ["transcript-music-word"]);

    //див с доп информацией об слове
    const informationWord = new Component(this.wordList.element, "div", ["information-word"]);

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
    this.soundWordImg.element.setAttribute("src", '../../../../assets/png/soundicon.png')
   
    // this.soundWordAudio=new Component(soundWord.element, "audio", ["sound-word__audio"])
    const soundWordAudio=new Audio();
    const soundWordExample=new Audio();
    const soundWordMeaning=new Audio();
    soundWord.element.append(soundWordAudio, soundWordExample, soundWordMeaning);
    soundWordAudio.setAttribute("src", `${base}${word.audio}`)
    soundWordExample.setAttribute("src",  `${base}${word.audioExample}`)
    soundWordMeaning.setAttribute("src",  `${base}${word.audioMeaning}`)
    this.soundWordImg.element.addEventListener("click", ()=> soundWordAudio.play());
    soundWordAudio.addEventListener("ended", ()=>soundWordMeaning.play() )
    soundWordMeaning.addEventListener("ended", ()=>soundWordExample.play() )
    
    this.wordImage = new Component(this.element, "img", ["image-word"]);

  this.wordImage.element.setAttribute("src", `${base}${word.image}`);

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
      ["textMeaning-word"]
    );
    this.textMeaning.element.innerHTML= word.textMeaning
    
    this.textMeaningTranslate=new Component(informationWordExampleone.element, "div", ["text-meaning-translate"])
this.textMeaningTranslate.element.innerHTML=word.textMeaningTranslate

    this.textExample = new Component(
      informationWordExampletwo.element,
      "div",
      ["textExample-word"]);
    this.textExample.element.innerHTML= word.textExample

    this.textExampleTranslate = new Component(
      informationWordExampletwo.element,
      "div",
      ["textExampleTranslate-word"]);
    this.textExampleTranslate.element.innerHTML= word.textExampleTranslate



    // userPass.value = localStorage.getItem('UserPass');
    // userPass.oninput = () => {
    //   localStorage.setItem('UserPass', userPass.value)
    // };
    // userEmail.value = localStorage.getItem('UserEmail');
    // userEmail.oninput = () => {
    //   localStorage.setItem('UserEmail', userEmail.value)
    // };
  

      const divButtons=new Component(this.wordList.element, "div", ["div-buttons"])
    const removeBtn = new Button(divButtons.element, ["btn-small"], "delete");
    const localStoragekey=localStorage.SignInUser;
    removeBtn.element.title="Удалить слово"
    removeBtn.element.addEventListener("click", () => {
      if (word.id) {
        this.removeWord(JSON.parse(localStorage.SignInUser).userId, word.id);
      // this.destroy();
      } 
      // this.wordList.element.style.display="none" 
      // console.log(`removeBTN ${removeBtn}`)
      // console.log(`this.removeWord(word.id): ${this.removeWord(word.id)}`)
      // console.log(` this.destroy();: ${ this.destroy()}`)
    });
    let arrDifficultWords=[]
    const difficultBtn = new Button(divButtons.element, ["btn-small"], "difficult");
    difficultBtn.element.title="Добавить слово в сложные"
    difficultBtn.element.addEventListener("click", () => {
      arrDifficultWords.push(word.id)
      console.log(arrDifficultWords)
      this.wordList.element.classList.add("difficultWords_arr")
      const arrDifficultLocalStorage = createUserWords(JSON.parse(localStorage.SignInUser).userId, word.id, {
  difficulty: "hard",
  optional: []
})
console.log(arrDifficultLocalStorage)
    });

    const deleteTranslateBtn = new Button(divButtons.element, ["btn-small"], "translate")
    deleteTranslateBtn.element.title="Скрыть/Показать перевод предложений"
    deleteTranslateBtn.element.addEventListener("click", () => {
      this.translateWord.element.classList.toggle("delete-translate");
      this.textExampleTranslate.element.classList.toggle("delete-translate");
      this.textMeaningTranslate.element.classList.toggle("delete-translate");
    })
  }
}
