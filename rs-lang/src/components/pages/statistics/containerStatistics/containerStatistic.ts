import { Component } from "../../textBook/addition/addComponents";
import { StatisticsItem } from "./statisticsItems";
import "./statistics.scss"

export class ContainerStatistics extends Component {
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistic-container"])
    }
}