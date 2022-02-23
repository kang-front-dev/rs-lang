
import "./textBook.scss";
import { Connection } from "./serverConnection";
import { Component } from "./addition/addComponents";
import { disableMain } from "../../app/main";
export class TextBook {
  private wordSectionMain;
  private router;

  constructor(private rootElement: HTMLElement) {
    disableMain();
    this.wordSectionMain = new Component(this.rootElement, 'div', [
      'word-section-main'
    ]);
    this.router = new Connection(this.wordSectionMain.element);
  }

  init(): void {
    this.router.initRouter();
  }
}
