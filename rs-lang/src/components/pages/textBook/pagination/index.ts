import { Component } from "../addition/addComponents";
import { Button } from "../../../UI/Button/button";
import "./style.scss";
import { IWords, getWords, getAllWords } from "../../../api/api";

export class Pages extends Component {
  updatePage: (page: number, group: number) => void = () => {};
  private page = 0;
  private group = 0;
  private title: Component;
  private titleGROUP: Component
  nextButton: Button;
  prevButton: Button;
  private startGameContainer: Component;
  private startGameChoose: Component;
  private startGameBtns: Component;
  private groupBtn: Component;
  private answerGroup: Component
  private startGameSubmit: Component
  questions: [[IWords]]|[]
  correctAnswer:number
  questNumber:number
  rightAnswer:[IWords]|[]
  wrongAnswer:[IWords]|[]
  audio:HTMLAudioElement;
  public container: HTMLElement;
  private buttonGroup :Component;
  private containerBtnPagination:Component

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["pages"]);

    // this.buttonGroup=new Component(this.element, "button", ["btn-group"], "BTN")
    // this.buttonGroup.element.onclick = ()=> {
    //   this.startGame()
    // }
    // this.title = new Component(
    //   this.element,
    //   "h3",
    //   ["pages__title"],
    //   `Page #${this.page}`
    // );
    // this.titleGROUP= new Component(this.element, "h3",["pages__title"], `GROUP #${this.group}`)

  
    
    this.startGameChoose=new Component(this.element, "p", ["textbook__subheading"], "Выберете уровень сложности слов")

    const arr: Array<string> = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    // const startGameBtns = document.createElement('div')
    // startGameBtns.className = 'start-game__btns'
    this.startGameBtns = new Component(this.element, "div", ["start-game__btns"])
    this.startGameBtns.innerHTML=arr;

    
    arr.forEach((elem:string)=>{
      // const startGameBtn = document.createElement('button')
      // startGameBtn.className = 'start-game__btn'
      this.groupBtn=new Component(this.startGameBtns.element, "button", ["group_btn"], `${elem}`)
      // startGameBtn.innerHTML = `${elem}`
      this.groupBtn.element.dataset.level = `${elem}`
      // startGameBtns.append(startGameBtn)
      this.groupBtn.element.onclick = async () =>{
        this.page=this.page;
          localStorage.setItem('group', String(arr.indexOf(elem)))
          const answer:IWords = await getWords(+localStorage.getItem('group'), this.page)
                for(let i=0; i < 20; i++){
            const subQuestion= []
            subQuestion.push(answer[i])
            console.log(`subQuestion ${subQuestion}`)
            const randomArr = [i];
            console.log(`randomArr ${randomArr}`)
            while (randomArr.length <= 3) {
                const randomnumber = 1;
                if (randomArr.indexOf(randomnumber) == -1) 
                randomArr.push(randomnumber);  
                     
            }
            for(let j = 0; j < 3; j++){
                subQuestion.push(answer[randomArr[j+1]])
                console.log(`subQuestion11 ${subQuestion}`)
            }
            (this.questions as [[IWords]]).push(subQuestion  as [IWords])
        }
        this.startGameContainer.element.remove()
        console.log( this.startGameContainer.element.remove())
             
    
          this.answerGroup=new Component(this.element, "div", ["answer-group"], answer.id)
          this.startGameBtns.element.childNodes.forEach((el)=>{
              (el as HTMLButtonElement).style.backgroundColor = 'white'
          })
          console.log( this.answerGroup)
          //  this.startGameBtn.element.style.backgroundColor = 'green'
          //  this.startGameSubmit.disabled = false 
      }
      this.groupBtn.element.addEventListener("click", ()=> {
        this.switchGroup()
      }) 
      
      
  })


    this.containerBtnPagination=new Component(this.element, "div", ["container__btn-pagination"])
    this.prevButton = new Button(this.containerBtnPagination.element, ["btn-prev"], "Prev", true);
    this.prevButton.onClickButton = () => this.switchPage("prev");

    this.nextButton = new Button(this.containerBtnPagination.element, ["btn-next"], "Next");
    this.nextButton.onClickButton = () => this.switchPage("next");

    
  }

  updateNextButton(page: number, group:number, totalCount: number, limit: number): void {
    if (page > totalCount / limit) {
      this.nextButton.setDisabled(false);
    } else {
      this.nextButton.setDisabled(false);
    }
    console.log(`page ${page}, group ${group}, totalCount ${totalCount}, limit ${limit}`)
  }

  private updatePrevButton(): void {
    if (this.page === 0) {
      this.prevButton.setDisabled(true);
    } else {
      this.prevButton.setDisabled(false);
    }
  }

  private switchPage(type: string) {
    if (type === "prev") {
      if (this.page > 0) this.page--;
    }

    if (type === "next") this.page++;

    // this.title.element.innerHTML = `Page #${this.page}`;
    this.updatePage(this.page, this.group);
    this.updatePrevButton();
  }



  private startGame(){
    this.questions = []
    this.correctAnswer = 0
    this.questNumber = 0
    this.wrongAnswer = []
    this.rightAnswer = []

    // this.startGameContainer = new Component(this.element, "div", ["start-game__container"])
    
    // this.startGameChoose=new Component(this.startGameContainer.element, "p", ["start-game__choose"], "ВЫберете Уровень")

    const arr: Array<string> = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    // const startGameBtns = document.createElement('div')
    // startGameBtns.className = 'start-game__btns'
    // this.startGameBtns = new Component(this.startGameContainer.element, "div", ["start-game__btns"])
    // this.startGameBtns.innerHTML=arr;

    

    // const startGameSubmit = document.createElement('button')
    // startGameSubmit.className = 'start-game__submit'
    // startGameSubmit.innerHTML = 'Начать'
    // this.startGameSubmit=new Component(this.startGameContainer.element, "button", ["start-game__submit"], "Начать")
    // this.startGameSubmit.disabled = true;

    // this.startGameSubmit.element.onclick = async() =>{
    //     const page = 1;
    //     console.log(`page ${page}`)
    //     const answer:IWords = await getWords(+localStorage.getItem('group'),page)
    //     console.log(`answer ${answer}`)
    //     for(let i=0; i < 20; i++){
    //         const subQuestion= []
    //         subQuestion.push(answer[i])
    //         console.log(`subQuestion ${subQuestion}`)
    //         const randomArr = [i];
    //         console.log(`randomArr ${randomArr}`)
    //         while (randomArr.length <= 3) {
    //             const randomnumber = 1;
    //             if (randomArr.indexOf(randomnumber) == -1) 
    //             randomArr.push(randomnumber);  
                     
    //         }
    //         for(let j = 0; j < 3; j++){
    //             subQuestion.push(answer[randomArr[j+1]])
    //             console.log(`subQuestion11 ${subQuestion}`)
    //         }
    //         (this.questions as [[IWords]]).push(subQuestion  as [IWords])
    //     }
    //     this.startGameContainer.element.remove()
    //     console.log( this.startGameContainer.element.remove())
             
    // }
 
}
public switchGroup() {
 
    if (this.group > 5) this.group--;
  

 else this.group++;
//  this.titleGROUP.element.innerHTML = `GROUP #${this.group}`;
  this.updatePage(this.page, this.group);
  // this.updateGroupButton();
}
render() {
  // this.audioGameHeader('header')
  this.startGame()
  return this.container
  
}
updateGroupButton(page: number, group: number, totalCount: number, limit: number): void {
  console.log(`page ${page}, group ${group}, totalCount ${totalCount}, limit ${limit}`)
  if (group < totalCount / limit) {
    this.groupBtn.disabled=false;
    console.log(this.groupBtn)
  } 
}
}
