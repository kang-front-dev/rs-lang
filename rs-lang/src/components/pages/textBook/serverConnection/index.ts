import { Component } from "../addition/addComponents";
import { GroupWordsClass } from "../groupWords.ts/groupWords";

import { IConnection } from "../../../api/api";

export class Connection {
  private readonly routes: Array<IConnection>;
  private defaultRoute: IConnection;

  // Pages
  wordsGroupPage: Component;
  winnersPage: Component | undefined;

  constructor(private rootElement: HTMLElement) {
    this.wordsGroupPage = new GroupWordsClass(this.rootElement);

    this.routes = [
      {
        name: "/",
        component: () => {
          this.rootElement.append(this.wordsGroupPage.element);
        },
      },
    ];

    this.defaultRoute = {
      name: "Default router",
      component: () => {
        this.rootElement.innerHTML = "Default Page";
      },
    };
  }

  updateRouter(): void {
    this.rootElement.innerHTML = "";
    const currentRouteName = window.location.hash.slice(1);
    const currentRoute = this.routes.find(
      (page) => page.name === currentRouteName
    );

    (currentRoute || this.defaultRoute).component();
  }

  initRouter(): void {
    if (window.location.hash === "") {
      window.location.hash = "#/";
    }

    window.onpopstate = () => this.updateRouter();
    this.updateRouter();
  }
}
