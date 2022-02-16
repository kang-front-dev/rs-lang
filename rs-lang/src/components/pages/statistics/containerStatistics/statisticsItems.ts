import { Component } from "../../textBook/addition/addComponents";
import { Button } from "../../../UI/Button/button";
import { IWords, baseUrl } from "../../../api/api";
import "./containerStatistics.scss"

export class StatisticsItem extends Component {
    private statisticToday:Component
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistics-list"])
       this.statisticToday=new Component(this.element, "div", ["statistics-today"]);
       
    }
} 