import "./textBook.scss";
import { Connection } from "./serverConnection";
import { Component } from "./addition/addComponents";
import { deleteMain } from "../../app/main";
export class TextBook {

  private wordSectionMain;
  private router;

  constructor(private rootElement: HTMLElement) {
    const textBookLink = document.querySelector(".textBook-link") as HTMLElement;
    const headerContent = document.querySelector(".header__content") as HTMLElement;
    const circles = document.querySelector(".circles") as HTMLElement
    function deleteHedaerContent() {
      headerContent.style.display = "none";
      circles.style.display="none"
    }
    textBookLink.addEventListener("click", (event) => {
      event.preventDefault();
      deleteMain()
      deleteHedaerContent();
      this.wordSectionMain = new Component(this.rootElement, "div", ["word-section-main"]);
        this.router = new Connection(this.wordSectionMain.element);
    });
   
  }

  init(): void {
    this.router.initRouter();
  }
}
