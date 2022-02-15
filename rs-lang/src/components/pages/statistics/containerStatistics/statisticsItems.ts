import { Component } from "../../textBook/addition/addComponents";
import "./statistics.scss"

export class StatisticsItem extends Component {
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistics-list"])
    }
} 