import { Component } from "../../textBook/addition/addComponents";
import { Button } from "../../../UI/Button/button";
import { IWords, baseUrl } from "../../../api/api";
import "./containerStatistics.scss"

export class StatisticsItem extends Component {
    private statisticToday:Component;
    private divWordsLearning: Component;
    private textWordsLearning: Component;
    private divPercentWordsLearning: Component;
    private textPercentWordsLearning: Component;
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistics-list"])
       this.statisticToday=new Component(this.element, "div", ["statistics-today"]);
       this.divWordsLearning =new Component(this.statisticToday.element, "div", ["words-lerning__div"])
       this.textWordsLearning=new Component(this.divWordsLearning.element, "h3", ['word-learning__text'])
       this.textWordsLearning.element.innerHTML=`${1} cлов изучено`;

       this.divPercentWordsLearning =new Component(this.statisticToday.element, "div", ["percent-words-lerning__div"])
       this.textPercentWordsLearning=new Component(this.divWordsLearning.element, "h3", ['percent-word-learning__text'])
       this.textWordsLearning.element.innerHTML=`${1} cлов изучено`
    }
} 