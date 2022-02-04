export function generateMain() {
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';

  return main
}

export function generateSection(sectionSelector: string, titleText: string) {
  const section: HTMLElement = document.createElement('section');
  section.className = sectionSelector;

  const sectionContainer: HTMLElement = generateContainer()
  section.appendChild(sectionContainer)

  const sectionTitle: HTMLElement = document.createElement('h2')
  sectionTitle.className = `${sectionSelector}__title`
  sectionTitle.textContent = titleText
  sectionContainer.appendChild(sectionTitle)

  const sectionUnderline:HTMLElement = document.createElement('div')
  sectionUnderline.className = 'section__underline'
  sectionContainer.appendChild(sectionUnderline)

  const sectionWrapper: HTMLElement = document.createElement('div')
  sectionWrapper.className = `${sectionSelector}__wrapper`
  sectionContainer.appendChild(sectionWrapper)

  return section
}

export function generateContainer() {
  const container: HTMLElement = document.createElement('div');
  container.className = 'container';

  return container
}

export class MainCard {
  
  avatarLink: string
  name: string;
  role: string;
  ghLink: string;
  comment: string;
  goals: Array<string>;

  constructor(options) {
    this.avatarLink = options.avatarLink
    this.name = options.name;
    this.role = options.role
    this.ghLink = options.ghLink;
    this.comment = options.comment;
    this.goals = options.goals;
  }

  createCard(){
    const aboutWrapper: HTMLElement = document.querySelector('.about__wrapper')

    const card:HTMLElement = document.createElement('div')
    card.className = 'about__card'
    aboutWrapper.appendChild(card)

    const cardAvatar: HTMLImageElement = document.createElement('img')
    cardAvatar.className = 'about__card_img'
    cardAvatar.src = this.avatarLink
    card.appendChild(cardAvatar)

    const cardTitleBlock:HTMLElement = document.createElement('div')
    cardTitleBlock.className = 'about__card_title_block'
    card.appendChild(cardTitleBlock)

    const cardTitle:HTMLElement = document.createElement('h3')
    cardTitle.className = 'about__card_title'
    cardTitle.textContent = this.name
    cardTitleBlock.appendChild(cardTitle)

    const cardTitleLink: HTMLLinkElement = document.createElement('a')
    cardTitleLink.href = this.ghLink
    cardTitleBlock.appendChild(cardTitleLink)
    
    const cardTitleLinkIcon: HTMLElement = document.createElement('i')
    cardTitleLinkIcon.className = 'fab fa-github'
    cardTitleLink.appendChild(cardTitleLinkIcon)

    const cardSubtitle:HTMLElement = document.createElement('h4')
    cardSubtitle.className = 'about__card_subtitle'
    cardSubtitle.textContent = this.role
    card.appendChild(cardSubtitle)

    const cardDescr:HTMLElement = document.createElement('p')
    cardDescr.className = 'about__card_descr'
    cardDescr.textContent = this.comment
    card.appendChild(cardDescr)

    const cardGoals:HTMLElement = document.createElement('div')
    cardGoals.className = 'about__card_goals'
    card.appendChild(cardGoals)
    
    const cardGoalsBlock1: HTMLElement = document.createElement('div')
    const cardGoalsSpan1:HTMLElement = document.createElement('span')
    const cardGoalsIcon1:HTMLElement = document.createElement('i')
    cardGoalsIcon1.className = 'far fa-star'
    cardGoalsBlock1.appendChild(cardGoalsIcon1)
    cardGoalsSpan1.textContent = this.goals[0]
    cardGoalsBlock1.appendChild(cardGoalsSpan1)
    cardGoals.appendChild(cardGoalsBlock1)

    const cardGoalsBlock2: HTMLElement = document.createElement('div')
    const cardGoalsSpan2:HTMLElement = document.createElement('span')
    const cardGoalsIcon2:HTMLElement = document.createElement('i')
    cardGoalsIcon2.className = 'far fa-star'
    cardGoalsBlock2.appendChild(cardGoalsIcon2)
    cardGoalsSpan2.textContent = this.goals[1]
    cardGoalsBlock2.appendChild(cardGoalsSpan2)
    cardGoals.appendChild(cardGoalsBlock2)

  }
}
