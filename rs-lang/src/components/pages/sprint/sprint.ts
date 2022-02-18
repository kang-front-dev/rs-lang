import { spawn } from "child_process";
import { getWords, IWords } from "../../api/api";
import { AudioGame } from "../audiogame/audiogame";

export class Sprint extends AudioGame {
  private questSprint: [] | [IWords] | IWords[]
  private time: number
  private multiply: number
  private score: number
  private winStreak: number
  constructor(id: string) {
    super (id)
    this.game = 'sprint'
    this.winStreak = 0
    this.multiply = 1
    this.score = 0
    this.time = 31
    this.questSprint = []
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = id;
  }
  generateStartPage() {
    const sprintStartPage = document.createElement('div')
    sprintStartPage.className = 'sprint__start-page'
    const sprintTitle = document.createElement('h2');
    sprintTitle.className = 'sprint__title';
    sprintTitle.textContent = 'Спринт';
    // this.container.append(sprintTitle);

    const sprintDescr = document.createElement('p');
    sprintDescr.className = 'sprint__descr';
    sprintDescr.innerHTML = `Мини-игра "Спринт" - тренировка на скорость. <br> Ваша цель - ответить на наибольшее количество вопросов за 30 секунд.`;
    // this.container.append(sprintDescr);

    const sprintLevels = document.createElement('div');
    sprintLevels.className = 'sprint__levels';
    // this.container.append(sprintLevels);

    const sprintLevelsTitle = document.createElement('h3');
    sprintLevelsTitle.className = 'sprint__levels_title';
    sprintLevelsTitle.textContent = 'Выберите уровень:';
    sprintLevels.append(sprintLevelsTitle);

    const sprintLevelsWrapper = document.createElement('div');
    sprintLevelsWrapper.className = 'sprint__levels_wrapper';
    sprintLevels.append(sprintLevelsWrapper);

    const levelsArr = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    levelsArr.forEach((item) => {
      const sprintLevelsItem = document.createElement('div');
      sprintLevelsItem.className = 'sprint__levels_item';
      sprintLevelsItem.textContent = item;
      sprintLevelsItem.setAttribute('data-filter', item)

      sprintLevelsItem.addEventListener('click', () => {
        const allLevelsItems = document.querySelectorAll(
          '.sprint__levels_item'
        );

        allLevelsItems.forEach((item) => {
          item.classList.remove('sprint__levels_item-active');
        });

        sprintLevelsItem.classList.add('sprint__levels_item-active');
      });

      sprintLevelsWrapper.append(sprintLevelsItem);
    });

    const sprintStartBtn = document.createElement('div');
    sprintStartBtn.className = 'sprint__btn-start';
    sprintStartBtn.textContent = 'Начать';
    sprintStartBtn.onclick = async() =>{
      for (let i=0; i<5; i++){
        const page = Math.floor(Math.random() * (30 - 0) + 0);
        const answer:IWords = await getWords(+localStorage.getItem('group'),page);
        (this.questSprint as [IWords]).push(answer as IWords)
      }

      console.log(this.questSprint.flat(1))
      this.questSprint = this.questSprint.flat(1) as IWords[]
      sprintStartPage.remove()
      this.generateGame()
    }
    sprintLevels.append(sprintStartBtn);

    sprintStartPage.append(sprintTitle, sprintDescr, sprintLevels)
    this.container.append(sprintStartPage)

    return this.container
  }
  generateGame() {
    const sprintContainer = document.createElement('div')
    sprintContainer.className = 'sprint__container'
    this.container.append(sprintContainer)

    const sprintTimeBox = document.createElement('div')
    sprintTimeBox.className = 'sprint__time-box'

    // const sprintTimeImg = document.createElement('img')
    // sprintTimeImg.alt = 'time__img'
    // sprintTimeImg.className = 'sprint__time-img'
    // sprintTimeImg.src = '../../../assets/img/clock.gif'

    const sprintTime = document.createElement('div')
    sprintTime.className = 'sprint__time'
    
    const timer = setInterval(()=>{
      this.time--
      if (this.time<=1){
        (this.questions as [IWords]).concat(this.rightAnswer as [IWords], this.wrongAnswer as [IWords])
        console.log(this.questions)
        sprintContainer.remove()
        this.audioStat()
        clearInterval(timer)
      }
      sprintTime.innerHTML = `${this.time}`
      console.log(this.time)
    },1000)

    


    sprintTimeBox.append(sprintTime)


    const scoreContainer = document.createElement('div')
    scoreContainer.className = 'score__container'

    const multBox = document.createElement('p')
    multBox.className = 'mult__box'
    multBox.innerHTML = `умножение: х${this.multiply} +${this.multiply*10}`

    const sprintScore = document.createElement('div')
    sprintScore.className = 'sprint__score'
    sprintScore.innerHTML = `очки: <b>${this.score}</b>`

    scoreContainer.append(multBox, sprintScore)

    const sprintQuestText = document.createElement('div')
    sprintQuestText.className = 'sprint__quest-text'
    
    const sprintQuest = document.createElement('span')
    sprintQuest.className = 'sprint__quest'
    sprintQuest.innerHTML = `<b>${this.questSprint[this.questNumber].word}</b> это - `

    const sprintAns = document.createElement('span')
    sprintAns.className = 'sprint__ans'
    sprintAns.innerHTML = `<u>${Math.random() < 0.5 ? this.questSprint[0].wordTranslate : this.questSprint[Math.floor(Math.random() * (99 - 0) + 0)].wordTranslate}</u> ?`

    sprintQuestText.append(sprintQuest, sprintAns)

    const sprintBtnBox = document.createElement('div')
    sprintBtnBox.className = 'sprint__btn-box'
    
    const trueAns = document.createElement('button')
    trueAns.className = 'true__ans'
    trueAns.innerHTML = 'правда'
    // Math.floor(Math.random() * (99 - 0) + 0)

    function asd(arr:IWords[], num:number, score:number, mult:number){ 
      sprintQuest.innerHTML = `${arr[num+1].word} это - `
      sprintAns.innerHTML = `${Math.random() < 0.5 ? arr[num+1].wordTranslate : arr[Math.floor(Math.random() * (99 - 0) + 0)].wordTranslate} ?`
      multBox.innerHTML = `умножение: х${mult} +${mult*10}`
      sprintScore.innerHTML = `очки: ${score}`
    }
    function multScore(winstreak:number){
      if (winstreak > 10){
        return 5
      }
      else if(winstreak > 5){
        return 3
      }
      else if(winstreak > 3){
        return 2
      }else{
        return 1
      }
    }

    trueAns.onclick = () =>{
      if(this.questSprint[this.questNumber].wordTranslate === sprintAns.textContent){
        (this.rightAnswer as [IWords]).push(this.questSprint[this.questNumber] as IWords)
        this.multiply = multScore(this.winStreak)
        this.score = this.score + this.multiply*10
        this.winStreak++
      }else{
        (this.wrongAnswer as [IWords]).push(this.questSprint[this.questNumber] as IWords)
        this.winStreak = 0
        this.multiply = 1
      }
      asd(this.questSprint, this.questNumber, this.score, this.multiply)
      this.questNumber++
    }

    

    const falseAns = document.createElement('button')
    falseAns.className = 'false__ans'
    falseAns.innerHTML = 'ложь'
    falseAns.onclick = () =>{
      if(this.questSprint[this.questNumber].wordTranslate !== sprintAns.textContent){
        (this.rightAnswer as [IWords]).push(this.questSprint[this.questNumber] as IWords)
        this.multiply = multScore(this.winStreak)
        this.score = this.score + this.multiply*10
        this.winStreak++
      }else{
        (this.wrongAnswer as [IWords]).push(this.questSprint[this.questNumber] as IWords)
        this.winStreak = 0
        this.multiply = 1
      }
      asd(this.questSprint, this.questNumber, this.score, this.multiply)
      this.questNumber++
    }



    sprintBtnBox.append(trueAns, falseAns)

    sprintContainer.append(sprintTimeBox,scoreContainer,sprintQuestText,sprintBtnBox)

  }

}
