import { Component } from "../../textBook/addition/addComponents";
import { IWords } from "../../../api/api";
import { getAllWords } from "../../../api/api";
import { StatisticsItem } from "./statisticsItems";
import { ContainerStatistics } from "./containerStatistic";
import "../../../../styles/style.scss"
import "./containerStatistics.scss"
export class StatisticsPage extends Component {
    private title: Component;
    private containerStatistics: ContainerStatistics
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistics_wrapper"]); 
        this.title = new Component( 
            this.element,
            "h1",
            ["statistic_title"],
            "Статистика"
          );
      
    this.containerStatistics=new ContainerStatistics(this.element)
        }
}