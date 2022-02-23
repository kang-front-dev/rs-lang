import "./statistics.scss";
import { ConnectionStatistics } from "./serverConnection";
import { Component } from "../textBook/addition/addComponents";
import { disableMain } from "../../app/main";
export class Statistics {
 
  private statisticsSectionMain;
  private router;

  constructor(private rootElement: HTMLElement) {
         disableMain();
      this.statisticsSectionMain = new Component(this.rootElement, "div", ["statistics-section-main"]);
      this.router = new ConnectionStatistics(this.statisticsSectionMain.element);
  }

  init(): void {
    this.router.initRouter();
  }
}
