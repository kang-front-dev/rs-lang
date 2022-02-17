import { Component } from "../addition/addComponents";
import { Button } from "../../../UI/Button/button";
import { baseUrl, IWords, getWords } from "../../../api/api";
import "../groupWords/groupWordsStyle.scss"


export class MainTextContent extends Component {
  getGroup: (group: number) => void = () => {};
  private title:Component
  public word: IWords;
  private group = 1;
  private page = 0;
  private groupWord: Component;
  private startGameContainer: Component;
  private startGameChoose: Component;
  private startGameBtns: Component;
  private startGameBtn: Component;
  private startGameSubmit: Component
  oneButton: Button;
  twoButton: Button;
  threeButton: Button;
  fourButton: Button;
  fiveButton: Button;
  sixButton: Button;
 
  currentAudio: string;
 
 
  constructor(parentNode: HTMLElement) {
    
    super(parentNode, "div", ["main_textBook"])
    // this.groupWord= new Component(this.element, "span", ["group-word"])
    this.title = new Component(
      this.element,
      "h3",
      ["group__title"],
      `Group #${this.group}`
    );
    this.oneButton=new Button(this.element, ["level-card"], "Easy")
    this.oneButton.onClickButton = () => {
      this.switchGroup("EasyA1")
    //  this.oneButton.setDisabled(false)
      console.log("one")
       console.log(this.group)
   
    }

  }

  private switchGroup(type: string) {
    if (type === "EasyA1") {
        if(this.group===0) {
          this.group;
        } else if(this.group>0) this.group--;
      this.oneButton.setDisabled(true)
      // this.twoButton.setDisabled(false)
      // this.threeButton.setDisabled(false)
      // this.fourButton.setDisabled(false)
      // this.fiveButton.setDisabled(false)
      // this.sixButton.setDisabled(false)
      console.log(this.group)
    }
    // if (type === "EasyA2") {
    //  if(this.group===1){
    //    this.group
    //  } else if(this.group<1) {
    //    this.group++;
    //  } else this.group--;
    //   this.twoButton.setDisabled(true)
    //   this.oneButton.setDisabled(false)
    //   this.threeButton.setDisabled(false)
    //   this.fourButton.setDisabled(false)
    //   this.fiveButton.setDisabled(false)
    //   this.sixButton.setDisabled(false)
    //   console.log(this.group)
    // }
    // if (type === "MediumB1") {
    //   if(this.group === 2) {
    //     this.group;
    //   }else if (this.group < 2) {
    //       this.group++
    //     }
    //   else this.group--
    //   this.threeButton.setDisabled(true)
    //   this.oneButton.setDisabled(false)
    //   this.twoButton.setDisabled(false)
    //   this.fourButton.setDisabled(false)
    //   this.fiveButton.setDisabled(false)
    //   this.sixButton.setDisabled(false)
    //   console.log(this.group)
    // }
    // if (type === "MediumB2") {
    //   if(this.group === 3){
    //     this.group
    //   } else if (this.group < 3 ) {
    //     this.group++;
    //   } else this.group--;
    //   this.fourButton.setDisabled(true)
    //   this.oneButton.setDisabled(false)
    //   this.twoButton.setDisabled(false)
    //   this.threeButton.setDisabled(false)
    //   this.fiveButton.setDisabled(false)
    //   this.sixButton.setDisabled(false)
    //   console.log(this.group)
    // }
    // if (type === "HardC1") {
    //   if(this.group === 4){
    //     this.group
    //   } else if (this.group < 4) {
    //     this.group++;
    //   } else this.group--;
    //   this.fiveButton.setDisabled(true)
    //   this.oneButton.setDisabled(false)
    //   this.twoButton.setDisabled(false)
    //   this.threeButton.setDisabled(false)
    //   this.fourButton.setDisabled(false)
    //   this.sixButton.setDisabled(false)
    //   console.log(this.group)
    // }
    // if (type === "HardC2") {
    //   if(this.group === 5){
    //     this.group
    //   } else if (this.group < 5) {
    //     this.group++;
    //   } else this.group--;
    //   this.sixButton.setDisabled(true)
    //   this.oneButton.setDisabled(false)
    //   this.twoButton.setDisabled(false)
    //   this.threeButton.setDisabled(false)
    //   this.fourButton.setDisabled(false)
    //   this.fiveButton.setDisabled(false)
    //   console.log(this.group)
    // }
    
   this.title.element.innerHTML = `Group #${this.group}`;
     this.getGroup(this.group);
    // this.updatePrevButton();
  }
  
}
