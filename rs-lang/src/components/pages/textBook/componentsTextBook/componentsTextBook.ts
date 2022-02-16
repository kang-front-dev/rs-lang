import { Component } from "../addition/addComponents";
import { Button } from "../../../UI/Button/button";
import { baseUrl, IWords, getWords } from "../../../api/api";
import "../groupWords/groupWordsStyle.scss"


export class MainTextContent extends Component {
  getGroup: (group: number) => void = () => {};
  private title:Component
  public word: IWords;
  private group = 0;
  private page = 1;
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

    // this.twoButton = new Button(this.element, ["level-card"], "Easy")
    // this.twoButton.onClickButton=()=> {
    //   this.switchGroup("EasyA2")
    //   console.log("two")
    //   console.log(this.group)
    // }

    // this.threeButton=new Button(this.element, ["level-card"], "Medium")
    // this.threeButton.onClickButton=()=> {
    //   this.switchGroup("MediumB1")
    //   console.log("three")
    //   console.log(this.group)
    //   // console.log(this.word.group[2])
    // }

    // this.fourButton=new Button(this.element, ["level-card"], "Medium")
    // this.fourButton.onClickButton=()=> {
    //   this.switchGroup("MediumB2")
    //   console.log("four")
    //   console.log(this.group)
    //   // console.log(this.word.group[3])
    // }

    // this.fiveButton=new Button(this.element, ["level-card"], "Hard")
    // this.fiveButton.onClickButton=()=> {
    //   this.switchGroup("HardC1")
    //   console.log("five")
    //   // console.log(this.word.group[4])
    // }

    // this.sixButton=new Button(this.element, ["level-card"], "Hard")
    // this.sixButton.onClickButton=()=> {
    //   this.switchGroup("HardC2")
    //   console.log("six")
    //   console.log(this.group)
    //   // console.log(this.word.group[5])
    // }
 
  }

  // updateGroupButton(page: number, group: number, totalCount: number, limit: number): void {
   
    // if (group = totalCount / limit) {
     
    //     this.oneButton.setDisabled(false)
    
    //   // console.log("group > totalCount / limit")
    //   if(this.group===1) {
    //     this.twoButton.setDisabled(false) 
    //   }
    //   if(this.group===2) {
    //     this.threeButton.setDisabled(false) 
    //   }
    //   if(this.group===3) {
    //     this.fourButton.setDisabled(false) 
    //   }
    //   if(this.group===4) {
    //     this.fiveButton.setDisabled(false) 
    //   }
    //   if(this.group===5) {
    //     this.sixButton.setDisabled(false) 
    //   }
    // }
    // console.log(group, totalCount)
  // }

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
