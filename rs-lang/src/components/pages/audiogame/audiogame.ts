import { base, getWords, IWords } from "../../api/api";

export let Statistic = []
export class AudioGame {
    public container: HTMLElement;
    currentAudio: string;
    questions: [[IWords]]|[]
    correctAnswer:number
    questNumber:number
    rightAnswer:[IWords]|[]
    wrongAnswer:[IWords]|[]
    audio:HTMLAudioElement

    constructor(id:string){
        this.container = document.createElement('div')
        this.container.id = id;
        this.currentAudio = ''
        this.questions = []
        this.correctAnswer = 0
        this.questNumber = 0
        this.wrongAnswer = []
        this.rightAnswer = []
        this.audio = new Audio
    }

    audioGameHeader(className:string){
        const sidebar = document.createElement('aside')
        sidebar.className = 'sidebar'

        const headerNav = document.createElement('div')
        headerNav.className = 'header__nav-audio'
        const sidebarBtn = document.createElement('div')
        sidebarBtn.innerHTML = `
            <div id='top'></div>
            <div id='middle'></div>
            <div id='bottom'></div>`
        sidebarBtn.id = 'btn'

        sidebarBtn.onclick = () =>{
            sidebarBtn.classList.toggle('active');
            sidebarNav.classList.toggle('active')
        }

        const sidebarNav = document.createElement('nav')
        sidebarNav.id = "box" 
        sidebarNav.innerHTML = `
		    <ul id="items">
		    	<li class="item">Item 1</li>
		    	<li class="item">Item 2</li>
		    	<li class="item">Item 3</li>
		    	<li class="item">Item 4</li>
		    	<li class="item">Item 5</li>
		    </ul>`
        sidebar.append(sidebarBtn, sidebarNav)

        const headerGame = document.createElement('div')
        headerGame.className = `game__${className}`
        const headerText = document.createElement('h2')
        headerText.className = 'header__text'
        headerText.innerHTML = 'RS-Lang'

        headerGame.append(headerNav)
        headerNav.append(sidebar, headerText)

        const headerSet = document.createElement('div')
        headerSet.className = 'header__set'
        const headerCross = document.createElement('button')
        const headerVolume = document.createElement('button')
        const headerSize = document.createElement('button')

        headerCross.className = 'exit__game'
        headerVolume.className = 'game__volume'
        headerSize.className = 'game__size'


        headerCross.style.backgroundImage = 'url(../../../assets/svg/cross.svg)'
        headerVolume.style.backgroundImage = 'url(../../../assets/svg/vol.svg)'
        headerSize.style.backgroundImage = 'url(../../../assets/svg/size.svg)'

        headerCross.onclick = () => {
            this.container.remove()
        }
        headerVolume.onclick = () => {
            if(this.audio.volume === 0) {
                this.audio.volume = 1
                headerVolume.style.backgroundImage = 'url(../../../assets/svg/vol.svg)'
            }else{
                this.audio.volume = 0
                headerVolume.style.backgroundImage = 'url(../../../assets/svg/mute.svg)'
            }
        }
        headerSize.onclick = () => {
            document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
        }

        headerGame.append(headerSet)
        headerSet.append(headerSize, headerVolume, headerCross)

        this.container.append(headerGame)
    }
    private startGame(){
        this.questions = []
        this.correctAnswer = 0
        this.questNumber = 0
        this.wrongAnswer = []
        this.rightAnswer = []

        const startGameContainer = document.createElement('div')
        startGameContainer.className = 'start-game__container'

        this.container.append(startGameContainer)

        const startGameHeader = document.createElement('p')
        startGameHeader.className = 'start-game__header__text'
        startGameHeader.innerHTML = 'Аудиовызов'

        const startGameText = document.createElement('p')
        startGameText.className = 'start-game__text'
        startGameText.innerHTML = 'Тренировка Аудиовызова улучшает твое восприятие речи на слух'

        const startGameChoose = document.createElement('p')
        startGameChoose.className = 'start-game__choose'
        startGameChoose.innerHTML = 'Выберете уровень:'

        const arr: Array<string> = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
        const startGameBtns = document.createElement('div')
        startGameBtns.className = 'start-game__btns'

        arr.forEach((elem:string)=>{
            const startGameBtn = document.createElement('button')
            startGameBtn.className = 'start-game__btn'
            startGameBtn.innerHTML = `${elem}`
            startGameBtn.dataset.level = `${elem}`
            startGameBtns.append(startGameBtn)
            startGameBtn.onclick = () =>{
                localStorage.setItem('group', String(arr.indexOf(elem)))
                startGameBtns.childNodes.forEach((el)=>{
                    (el as HTMLButtonElement).style.backgroundColor = 'white'
                })
                startGameBtn.style.backgroundColor = 'green'
                startGameSubmit.disabled = false
            }
        })
        

        const startGameSubmit = document.createElement('button')
        startGameSubmit.className = 'start-game__submit'
        startGameSubmit.innerHTML = 'Начать'
        startGameSubmit.disabled = true

        startGameSubmit.onclick = async() =>{
            const page = Math.floor(Math.random()*(30-0)+0)
            const answer:IWords = await getWords(+localStorage.getItem('group'),page) 
            for(let i=0; i < 20; i++){
                const subQuestion= []
                subQuestion.push(answer[i])
                const randomArr = [i]
                while (randomArr.length <= 3) {
                    const randomnumber = Math.floor(Math.random() * 20);
                    if (randomArr.indexOf(randomnumber) == -1) 
                    randomArr.push(randomnumber);             
                }
                for(let j = 0; j < 3; j++){
                    subQuestion.push(answer[randomArr[j+1]])
                }
                (this.questions as [[IWords]]).push(subQuestion  as [IWords])
            }
            startGameContainer.remove()
            this.renderGame(this.questNumber)         
        }

        startGameContainer.append(startGameHeader, startGameText, startGameChoose, startGameBtns, startGameSubmit)
    }
    questionsShufle = (array:[string]) =>{
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]];
        }
      return array
    }
    createForShufle = (questionArr) =>{
        const forShufle = []
        questionArr.forEach((el)=>{
            (forShufle as [string]).push(el.wordTranslate as string)
        })
        return forShufle as [string]
    }
    
    renderGame(num:number) {
        const gameMainContainer = document.createElement('div')
        const questionArr = this.questions[num]
        const a = this.createForShufle(questionArr)
        const questionPage = this.questionsShufle(a)

        gameMainContainer.className = 'game-main__container'
        this.container.append(gameMainContainer)

        const countQuest = document.createElement('p')
        countQuest.className = 'count__quest'
        countQuest.innerHTML = `${num+1}/${this.questions.length}`

        const audioPlay = document.createElement('button')
        audioPlay.className = 'audio__play'
        audioPlay.style.backgroundImage = 'url(../../../assets/svg/vol.svg)'
        audioPlay.dataset.answer = `${questionArr[0].word}`
        this.audio.src = `${base}${questionArr[0].audio}`
        this.audio.play()

        audioPlay.onclick = () =>{
            this.audio.src = `${base}${questionArr[0].audio}`
            this.audio.play()
        }
        const audioImg = document.createElement('img')
        audioImg.className ='audio__img'
        audioImg.style.display = 'none'
        
        const audioDiscript = document.createElement(`p`)
        audioDiscript.className = 'audio__discription'
        audioDiscript.style.display = 'none'

        const audioQuestBox = document.createElement('div')
        audioQuestBox.className = 'audio_questions'
        function disabledBtn(){
            (document.querySelectorAll('.audio-quest__btn') as NodeListOf<HTMLButtonElement>).forEach((el: HTMLButtonElement)=>{
            el.disabled = true   
            if(el.textContent === questionArr[0].wordTranslate) el.style.background = 'green'
        })
        }

        questionPage.forEach(el => {
            const questBtn = document.createElement('button')
            questBtn.className = 'audio-quest__btn'
            questBtn.innerHTML = `${el}`
            // questBtn.dataset.answer = `${el}`
            audioQuestBox.append(questBtn)
            questBtn.onclick = (event:MouseEvent) =>{
                const target = event.target as HTMLButtonElement
                if(questionArr[0].wordTranslate === target.textContent){
                    target.style.background = 'green'
                    this.correctAnswer++
                    (this.rightAnswer as [IWords]).push(questionArr[0])
                    changeLastBtn()

                }else{
                    target.style.background = 'red';
                    (this.wrongAnswer as [IWords]).push(questionArr[0])
                    changeLastBtn()
                }

                
            }
        });
        function changeLastBtn() {
            nextQuestBtn.remove()
            disabledBtn()
            nextBtn.style.display = 'block' //<---возможно придется изменить
            audioImg.style.display = 'block'
            audioImg.src = `${base}${questionArr[0].image}`
            audioImg.alt = `${base}${questionArr[0].word} image`
            
            audioDiscript.innerHTML = `${questionArr[0].word} - ${questionArr[0].transcription}`
            audioDiscript.style.display = 'block'

        }
        const nextQuestBtn = document.createElement('button')
        nextQuestBtn.className = 'next-quest__btn'
        nextQuestBtn.innerHTML = 'Не знаю'
        nextQuestBtn.onclick = () => {
        changeLastBtn();
        (this.wrongAnswer as [IWords]).push(questionArr[0])
        }
        
        const nextBtn = document.createElement('button')
            nextBtn.className = 'next__btn'
            nextBtn.innerHTML = 'Дальше'
            nextBtn.style.display = 'none'
            
            nextBtn.onclick = () => {
                this.questNumber++
                gameMainContainer.remove()
                // this.renderGame(this.questNumber)
                if (this.questNumber === this.questions.length){
                    this.audioStat()
                }else{
                    this.renderGame(this.questNumber)
                }
            }
        
        gameMainContainer.append(countQuest, audioPlay, audioImg, audioDiscript, audioQuestBox, nextQuestBtn, nextBtn)
    }
    audioStat(){
        const persent = Math.ceil(this.rightAnswer.length/this.questions.length*100)
        const audioStatContainer = document.createElement('div')
        audioStatContainer.className = 'audio-stat__container'
        audioStatContainer.style.position = 'absolute'
        this.container.append(audioStatContainer)

        const audioStatHeader = document.createElement('div')
        audioStatHeader.className = 'audio-stat__header'
        
        const audioStatRes = document.createElement('button')
        audioStatRes.className = 'audio-stat__res'
        audioStatRes.innerHTML = 'Результат'
        audioStatRes.disabled = true
        audioStatRes.onclick = () =>{
            audioStatView.disabled = false
            audioStatRes.disabled = true
            audioStatResMain.classList.add('active')
            audioStatViewMain.classList.remove('active')
        }

        const audioStatView = document.createElement('button')
        audioStatView.className = 'audio-stat__view'
        audioStatView.innerHTML = 'Посмотреть мои слова'
        audioStatView.disabled = false
        audioStatView.onclick = () =>{
            audioStatView.disabled = true
            audioStatRes.disabled = false
            audioStatResMain.classList.remove('active')
            audioStatViewMain.classList.add('active')
        }

        audioStatHeader.append(audioStatRes, audioStatView)

        const audioStatToggle = document.createElement('div')
        audioStatToggle.className = 'audio-stat__toggle'

        const audioStatResMain = document.createElement('div')
        audioStatResMain.className = 'audio-stat__resContainer active'

        const audioStatResMainText = document.createElement('p')
        audioStatResMainText.className = 'audio-stat__resText'
        audioStatResMainText.innerHTML = `${persent !== 100 ? 'Ты можешь лучше! Повтори слова и возвращайся.' : 'Хорошая работа!'}`
        
        const audioStatResMainBtn = document.createElement('button')
        audioStatResMainBtn.className = 'audio-stat__resMainBtn'
        audioStatResMainBtn.innerHTML = `${this.rightAnswer.length} слов изучено, ${this.wrongAnswer.length} слов на изучении`
        audioStatResMainBtn.onclick = () =>{
            audioStatView.disabled = true
            audioStatRes.disabled = false
            audioStatResMain.classList.remove('active')
            audioStatViewMain.classList.add('active')
        }

        const audioStatPersentBox = document.createElement('div')
        audioStatPersentBox.className = 'audio-stat__persentBox'

        const audioStatPersent = document.createElement('p')
        audioStatPersent.className = 'audio-stat__persent'
        audioStatPersent.innerHTML = `${persent}%`
        const audioStatPersentText = document.createElement('p')
        audioStatPersentText.className = 'audio-stat__persentText'
        audioStatPersentText.innerHTML = 'изученных слов'

        audioStatPersentBox.append(audioStatPersent, audioStatPersentText)
        
        const audioStatBtnContainer = document.createElement('div')
        audioStatBtnContainer.className = 'audio-stat__btnContainer'

        const audioStatBtnRetry = document.createElement('button')
        audioStatBtnRetry.className = 'audio-stat__retry'
        audioStatBtnRetry.innerHTML = 'Сыграть еще раз'
        audioStatBtnRetry.onclick = () => {
            audioStatContainer.remove()
            this.startGame()
        }

        const audioStatBtnLearn = document.createElement('button')
        audioStatBtnLearn.className = 'audio-stat__learn'
        audioStatBtnLearn.innerHTML = 'Перейти в учебник'
        audioStatBtnLearn.onclick = () => {
            audioStatContainer.remove()
            //<--дописать код
        }

        audioStatBtnContainer.append(audioStatBtnRetry, audioStatBtnLearn)
        


        const audioStatViewMain = document.createElement('div')
        audioStatViewMain.className = 'audio-stat__viewContainer'

        const audioStatWrongText = document.createElement('p')
        audioStatWrongText.className = 'audio-stat__wrongText'
        audioStatWrongText.innerHTML = `Ошибок <span>${this.wrongAnswer.length}</span>`

        const audioStatWrongBox = document.createElement('div')
        audioStatWrongBox.className = 'audio-stat__wrongBox'

        this.wrongAnswer.forEach((el)=>{
            const wrongBox = document.createElement('div')
            wrongBox.className = 'audio__wrong-box'

            const wrongBtn = document.createElement('button')
            wrongBtn.className = 'audio-stat__wrong-btn'
            wrongBtn.style.backgroundImage = 'url(../../../assets/svg/vol.svg)'
            wrongBtn.dataset.src = `${base}${el.audio}`

            const wrongText = document.createElement('span')
            wrongText.className = 'wrong__text'
            wrongText.innerHTML = `${el.word} - ${el.wordTranslate}`
            wrongBox.append(wrongBtn, wrongText)
            audioStatWrongBox.append(wrongBox)

            wrongBtn.onclick=()=>{
            this.audio.src = `${wrongBtn.dataset.src}`  
            this.audio.play()
            }
        })


        const audioStatRightText = document.createElement('p')
        audioStatRightText.className = 'audio-stat__rightText'
        audioStatRightText.innerHTML = `Правильных ответов <span>${this.rightAnswer.length}</span>`

        
        const audioStatRightBox = document.createElement('div')
        audioStatRightBox.className = 'audio-stat__rightBox'

        this.rightAnswer.forEach((el)=>{
            const rightBox = document.createElement('div')
            rightBox.className = 'audio__right-box'

            const rightBtn = document.createElement('button')
            rightBtn.className = 'audio-stat__right-btn'
            rightBtn.style.backgroundImage = 'url(../../../assets/svg/vol.svg)'
            rightBtn.dataset.src = `${base}${el.audio}`

            const rightText = document.createElement('span')
            rightText.className = 'right__text'
            rightText.innerHTML = `${el.word} - ${el.wordTranslate}`
            rightBox.append(rightBtn, rightText)
            audioStatRightBox.append(rightBox)

            rightBtn.onclick=()=>{
            this.audio.src = `${rightBtn.dataset.src}`  
            this.audio.play()
            }
            Statistic.push(this.questions, this.rightAnswer, this.wrongAnswer)
        })
        audioStatResMain.append(audioStatResMainText, audioStatResMainBtn, audioStatPersentBox)
        audioStatViewMain.append(audioStatWrongText, audioStatWrongBox, audioStatRightText, audioStatRightBox)
        audioStatToggle.append(audioStatResMain, audioStatViewMain)
        audioStatContainer.append(audioStatHeader,audioStatToggle,audioStatBtnContainer)
    }
    render() {
        this.audioGameHeader('header')
        this.startGame()
        return this.container
    }
   
}


