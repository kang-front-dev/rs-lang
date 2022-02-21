import "./textBook.scss";
import { Connection } from "./serverConnection";
import { Component } from "./addition/addComponents";
import { disableMain } from "../../app/main";
export class TextBook {

  private wordSectionMain;
  private router; 

  constructor(private rootElement: HTMLElement) {
    const textBookLink = document.querySelector(".textBook-link") as HTMLElement;
    const headerContent = document.querySelector(".header__content") as HTMLElement;
    // const circles = document.querySelector(".circles") as HTMLElement
    const moduleWrapper = document.getElementById('module-wrapper') as HTMLElement
    function deleteHeaderContent() {
      headerContent.style.display = "none";
      // circles.style.display = "none";
    }
    textBookLink.addEventListener("click", (event) => {
      event.preventDefault();

      disableMain()
      deleteHedaerContent();
      this.wordSectionMain = new Component(this.rootElement, "div", ["word-section-main"]);
        this.router = new Connection(this.wordSectionMain.element);
        // this.wordSectionMain.element.append(circles)
    });
   
  }

  init(): void {
    this.router.initRouter();
  }
}
