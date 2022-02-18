import "./statistics.scss";
import { ConnectionStatistics } from "./serverConnection";
import { Component } from "../textBook/addition/addComponents";
import { deleteMain } from "../../app/main";
export class Statistics {
 
  private statisticsSectionMain;
  private router;

  constructor(private rootElement: HTMLElement) {
    const statisticsLink = document.querySelector(".statistics-link") as HTMLElement;
    const headerContent = document.querySelector(".header__content") as HTMLElement;
    function deleteHedaerContent() {
      headerContent.style.display = "none";
    }
    statisticsLink.addEventListener("click", (event) => {
      event.preventDefault();
      deleteMain()
      deleteHedaerContent();
      this.statisticsSectionMain = new Component(this.rootElement, "div", ["statistics-section-main"]);
      this.router = new ConnectionStatistics(this.statisticsSectionMain.element);
    });
  
  }

  init(): void {
    this.router.initRouter();
  }
}
