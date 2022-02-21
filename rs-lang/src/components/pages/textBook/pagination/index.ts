import { Component } from "../addition/addComponents";
import { Button } from "../../../UI/Button/button";
import "./style.scss";
import { IWords, getWords, getAllWords, createUserWords } from "../../../api/api";
import constants from "./1";
import { WordsItem } from "../groupWords/wordsItem";
import { getState, updateState } from './state';
export class Pages extends Component {
  updatePage: (page: number, group: number) => void = () => {};
  private page = 0;
  private group = 0;
  private title: Component;
  private titleGROUP: Component
  nextButton: Button;
  prevButton: Button;
  private groupChooseContainer: Component;
  private groupBtnChoose: Component;
  private groupBtns: Component;
  private groupBtn: Component;
  private answerGroup: Component
  private startGameSubmit: Component
  correctAnswer:number
  public container: HTMLElement;
  private buttonGroup :Component;
  private containerBtnPagination:Component;
  private selectorPaginaion:Component
  private updating = false;
  private newOption: Component;
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["pages"]);

    // this.title = new Component(
    //   this.element,
    //   "h3",
    //   ["pages__title"],
    //   `Page #${this.page}`
    // );
    // this.titleGROUP= new Component(this.element, "h3",["pages__title"], `GROUP #${this.group}`)
    
    this.groupBtnChoose=new Component(this.element, "p", ["textbook__subheading"], "Выберите уровень сложности слов")

    const arr: Array<string> = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    this.groupBtns = new Component(this.element, "div", ["start-game__btns"])
    this.groupBtns.innerHTML=arr;

    arr.forEach((elem:string)=>{
      this.groupBtn=new Component(this.groupBtns.element, "button", ["group_btn"])
      this.groupBtn.element.innerHTML=`${elem}`
      this.groupBtn.element.dataset.level = `${elem}`

      this.groupBtn.element.onclick = async () =>{       
          localStorage.setItem('group', String(arr.indexOf(elem)))
          const answer:IWords = await getWords(+localStorage.getItem('group'), this.page)
          this.answerGroup=new Component(this.element, "div", ["answer-group"], answer.id)
          this.groupBtns.element.childNodes.forEach((el)=>{
              (el as HTMLButtonElement).style.backgroundColor = 'white'
          })
      }
      this.groupBtn.element.addEventListener("click", ()=> { 
        if(elem === "A1") {
        if(this.group == 0) {
         this.group;
        } else if(this.group>0) this.group--;
      }
        if(elem==="A2") {
        if (this.group < 1){
            this.group++;
            } else if(this.group>1) this.group--
          }
          if(elem === "B1") {
          if(this.group<2) {
              this.group++;
            }else if (this.group>2) this.group--;
          }
          if(elem === "B2") {
           if(this.group<3) {
              this.group++;
            } else if(this.group>3) this.group--
          }
          if(elem === "C1") {
            if(this.group<4) {
              this.group++;
              } else if(this.group>4) {
                this.group--
              }
            }
          
              if(elem === "C2") {
                if(this.group < 5) {
                this.group++
              }
                else if(this.group == 5) {this.group}
                else if(this.group>5) this.group--;
              
            }   
         this.updatePage(this.page, this.group);
      })  
  })
const arrPage=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    this.containerBtnPagination=new Component(this.element, "div", ["container__btn-pagination"])
    this.prevButton = new Button(this.containerBtnPagination.element, ["btn-prev"], "Prev", true);
    this.prevButton.onClickButton = () => this.switchPage("prev");
  
    this.selectorPaginaion =new Component(this.containerBtnPagination.element, "ul", ["select__pagination"])

    arrPage.forEach((item)=> {
      this.newOption=new Component(this.selectorPaginaion.element, "li", ["selector-option"])
       this.newOption.element.textContent = `${item}`;

      this.newOption.element.addEventListener("click", async (event) => {
        localStorage.setItem("page", String(arrPage.indexOf(item)))
        const groupStorage:IWords = await getWords(this.page, this.group) 
        this.updatePage(this.page, this.group)
        
        // this.newOption.element.classList.toggle("selector-option_click")
        if(item < this.page-1) {
          this.page--
        } 
        else if(item > this.page-1)  this.page++;
        else item == this.page-1
      })
    })

    this.nextButton = new Button(this.containerBtnPagination.element, ["btn-next"], "Next");
    this.nextButton.onClickButton = async () => {
      this.switchPage("next");
    };
  }

  updateNextButton(page: number, group:number, totalCount: number, limit: number): void {
    if (page > totalCount / limit) {
      this.nextButton.setDisabled(false); 
    } else {
      this.nextButton.setDisabled(false);
    }
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
      if (this.page > 0) {this.page--};
    }
    if (type === "next") {this.page++;
      }

    // this.title.element.innerHTML = `Page #${this.page}`;
    this.updatePage(this.page, this.group);
    localStorage.setItem(this.page.toString(), this.group.toString());
    this.updatePrevButton();
  }

updateGroupButton(page: number, group: number, totalCount: number, limit: number): void {
  console.log(`page ${page}, group ${group}, totalCount ${totalCount}, limit ${limit}`)
  }
}


