import { AudioGame } from "../../audiogame/audiogame"
import { Component } from "../addition/addComponents"
import { Sprint } from "../../sprint/sprint"

export class createGames extends Component{
  private title:Component
  private btnsContainer:Component
    private btnGame1:HTMLButtonElement | Component
    private btnGame2:HTMLButtonElement|Component
  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["games__part"]); 

    const moduleWrapper = document.querySelector('#module-wrapper'),
      textbook = document.querySelector('.word-section-main')

    this.title = new Component( 
        this.element,
        "div",
        ["games__title"],
        "Игры"
      );
      this.btnsContainer = new Component(this.element, "div", ["games-btn__container"],'')
      this.btnGame1 = new Component(this.btnsContainer.element, "button", ["game__btn-1"],'Аудиовызов')
      this.btnGame2 = new Component(this.btnsContainer.element, "button", ["game__btn-2"],'Спринт')
      this.btnGame1.element.onclick = () =>{
          const audioGame = new AudioGame('audio__game'),
          audiogameRendered = audioGame.render();

          moduleWrapper.appendChild(audiogameRendered);
          textbook.remove()
      }
      this.btnGame2.element.onclick = () =>{
          const sprintGame = new Sprint('sprint')
          moduleWrapper.appendChild(sprintGame.generateStartPage());
          textbook.remove()
      }
    }
}