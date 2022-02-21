import { Component } from "../../textBook/addition/addComponents";
import { Button } from "../../../UI/Button/button";
import { IWords, baseUrl } from "../../../api/api";
import "./containerStatistics.scss"
import { Statistic } from "../../audiogame/audiogame";
export class StatisticsItem extends Component {
    private statisticToday:Component;
    private divWordsLearning: Component;
    private textWordsLearning: Component;
    private divPercentWordsLearning: Component;
    private textPercentWordsLearning: Component;
    private gamesStatisticWrapper: Component;
    private gameStatisticCardSprint: Component;
    private gameStatisticCardSavanna:Component;
    private textWordsLearningNumber: Component;
    private textPercentWordsLearningNumber: Component;
    private SprintH2:Component;
    private SavannaH2:Component;
    private SprintH3: Component;
    private SavannaH3: Component;
    constructor(parentNode: HTMLElement) {
        super(parentNode, "div", ["statistics-list"])
       this.statisticToday=new Component(this.element, "div", ["statistics-today"]);
       this.divWordsLearning =new Component(this.statisticToday.element, "div", ["words-lerning__div"])
       this.textWordsLearningNumber=new Component(this.divWordsLearning.element, "b", ["word-learning__number"]);
       this.textWordsLearningNumber.element.innerHTML="1"
       this.textWordsLearning=new Component(this.divWordsLearning.element, "h3", ['word-learning__text'])
       this.textWordsLearning.element.innerHTML=`cлов изучено`;

       this.divPercentWordsLearning =new Component(this.statisticToday.element, "div", ["percent-words-lerning__div"])
       this.textPercentWordsLearningNumber=new Component(this.divPercentWordsLearning.element, "b", ["percent-word-learning__number"]);
       this.textPercentWordsLearningNumber.element.innerHTML="1 %"
       this.textPercentWordsLearning=new Component(this.divPercentWordsLearning.element, "h3", ['percent-word-learning__text'])
       this.textPercentWordsLearning.element.innerHTML=`правильных ответов`;
       this.gamesStatisticWrapper=new Component(this.element, "div", ["games-statistic-wrapper"]);

       this.gameStatisticCardSprint=new Component(this.gamesStatisticWrapper.element, "div", ["game-statistic-card-sprint"]);
       this.gameStatisticCardSavanna=new Component(this.gamesStatisticWrapper.element, "div", ["game-statistic-card-savanna"]);


    this.SprintH2=new Component(this.gameStatisticCardSprint.element, "h2", ["sprint_h2"], "Спринт");
    this.SavannaH2=new Component(this.gameStatisticCardSavanna.element, "h2", ["savanna_h2"], "Саванна")

    this.SprintH3=new Component(this.gameStatisticCardSprint.element, "h3", ["sprint_h3"], `Изучено ${0} слов`)
    this.SprintH3=new Component(this.gameStatisticCardSprint.element, "h3", ["sprint_h3"], `Правильных ответов: ${0}%`)
    this.SprintH3=new Component(this.gameStatisticCardSprint.element, "h3", ["sprint_h3"], `Самая длинная серия ответов: ${0}`)

    this.SavannaH3=new Component(this.gameStatisticCardSavanna.element, "h3", ["savanna_h3"], `Изучено ${0} слов`)
    this.SavannaH3=new Component(this.gameStatisticCardSavanna.element, "h3", ["savanna_h3"], `Правильных ответов: ${0}%`)
    this.SavannaH3=new Component(this.gameStatisticCardSavanna.element, "h3", ["savanna_h3"], `Самая длинная серия ответов: ${0}`)
    console.log(Statistic)
    }
} 