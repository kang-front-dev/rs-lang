import { Component } from "../addition/addComponents";
import { Button } from "../../../UI/Button/button";
import "./style.scss";

export class Pages extends Component {
  updatePage: (page: number) => void = () => {};
  private page = 1;
  private group = 0;
  private title: Component;
  nextButton: Button;
  prevButton: Button;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", ["pages"]);
    this.title = new Component(
      this.element,
      "h3",
      ["pages__title"],
      `Page #${this.page}`
    );

    this.prevButton = new Button(this.element, ["btn-prev"], "Prev", true);
    this.prevButton.onClickButton = () => this.switchPage("prev");

    this.nextButton = new Button(this.element, ["btn-next"], "Next");
    this.nextButton.onClickButton = () => this.switchPage("next");
  }

  updateNextButton(page: number, group:number, totalCount: number, limit: number): void {
    if (page > totalCount / limit) {
      this.nextButton.setDisabled(false);
    } else {
      this.nextButton.setDisabled(true);
    }
  }

  private updatePrevButton(): void {
    if (this.page === 1) {
      this.prevButton.setDisabled(true);
    } else {
      this.prevButton.setDisabled(false);
    }
  }

  private switchPage(type: string) {
    if (type === "prev") {
      if (this.page > 1) this.page--;
    }

    if (type === "next") this.page++;

    this.title.element.innerHTML = `Page #${this.page}`;
    this.updatePage(this.page);
    this.updatePrevButton();
  }
}
