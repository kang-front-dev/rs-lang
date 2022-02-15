import { Component } from "../../textBook/addition/addComponents";
import { IWords } from "../../../api/api";
import { getAllWords } from "../../../api/api";
import { StatisticsItem } from "./statisticsItems";
import { ContainerStatistics } from "./containerStatistic";
import "./containerStatistics.scss"
export class StatisticsPage extends Component {
    private title: Component;
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistics_wrapper"]); 
        this.title = new Component( 
            this.element,
            "h1",
            ["statistics__title"],
            "Статистика"
          );
        }
}