import { Component } from "../../textBook/addition/addComponents";
import { IWords } from "../../../api/api";
import { StatisticsItem } from "./statisticsItems";
import "./containerStatistics.scss"

export class ContainerStatistics extends Component {
    private container: Component;
    private statisticsItem: StatisticsItem
        constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistic-container"])
        this.statisticsItem=new StatisticsItem(this.element)
    }

}