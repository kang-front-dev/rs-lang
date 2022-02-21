import "./button.scss";
import { Component } from "../../pages/textBook/addition/addComponents";
import "../../pages/textBook/groupWords/groupWordsStyle.scss"

export class Button extends Component {
  onClickButton: () => void = () => {};
  constructor(
    parentNode: HTMLElement,
    styles: string[] = [],
    content: string,
    disabled = false
  ) {
    super(parentNode, "button", ["btn"], content);

    this.element.classList.add(...styles);
    this.element.addEventListener("click", () => this.onClickButton());

    if (disabled) {
      this.setDisabled(true);
    }
  }

  setDisabled(type = false): void {
    this.element.toggleAttribute("disabled", type);
  }

  removeDisabled(): void {
    this.element.removeAttribute("disabled");
  }

  
}
