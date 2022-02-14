export function generateMain() {
  const main: HTMLElement = document.createElement('main');
  main.className = 'main';

  return main
}
export function generateFooter() {
  const footer: HTMLElement = document.createElement('footer');
  footer.className = 'footer';
  document.body.appendChild(footer)

  const footerContainer: HTMLElement = document.createElement('div')
  footerContainer.className = 'container'
  footer.appendChild(footerContainer)

  const footerLogoBlock: HTMLElement = document.createElement('div')
  footerLogoBlock.className = 'footer__logo_block'
  footerContainer.appendChild(footerLogoBlock)

  const footerLogo: HTMLImageElement = document.createElement('img')
  footerLogo.className = 'footer__logo'
  footerLogo.src = 'assets/img/logo.png'
  footerLogoBlock.appendChild(footerLogo)

  const footerLogoDescr: HTMLElement = document.createElement('p')
  footerLogoDescr.className = 'footer__logo_descr'
  footerLogoDescr.textContent = 'Сервис для изучения английского'
  footerLogoBlock.appendChild(footerLogoDescr)

  const footerNav: HTMLElement = document.createElement('nav')
  footerNav.className = 'footer__nav'
  footerContainer.appendChild(footerNav)

  const footerNavList1: HTMLElement = document.createElement('ul')
  footerNavList1.className = 'footer__list'
  footerNav.appendChild(footerNavList1)

  const footerNavList1Li1: HTMLElement = document.createElement('li')
  footerNavList1.appendChild(footerNavList1Li1)
  const footerNavList1Link1: HTMLElement = document.createElement('a')
  footerNavList1Link1.className = 'footer__link'
  footerNavList1Link1.textContent = 'Спринт'
  footerNavList1Li1.appendChild(footerNavList1Link1)

  const footerNavList1Li2: HTMLElement = document.createElement('li')
  footerNavList1.appendChild(footerNavList1Li2)
  const footerNavList1Link2: HTMLElement = document.createElement('a')
  footerNavList1Link2.className = 'footer__link'
  footerNavList1Link2.textContent = 'Аудиовызов'
  footerNavList1Li2.appendChild(footerNavList1Link2)

  
  const footerNavList2: HTMLElement = document.createElement('ul')
  footerNavList2.className = 'footer__list'
  footerNav.appendChild(footerNavList2)

  const footerNavList2Li1: HTMLElement = document.createElement('li')
  footerNavList2.appendChild(footerNavList2Li1)
  const footerNavList2Link1: HTMLElement = document.createElement('a')
  footerNavList2Link1.className = 'footer__link'
  footerNavList2Link1.textContent = 'Учебник'
  footerNavList2Li1.appendChild(footerNavList2Link1)

  const footerNavList2Li2: HTMLElement = document.createElement('li')
  footerNavList2.appendChild(footerNavList2Li2)
  const footerNavList2Link2: HTMLElement = document.createElement('a')
  footerNavList2Link2.className = 'footer__link'
  footerNavList2Link2.textContent = 'Статистика'
  footerNavList2Li2.appendChild(footerNavList2Link2)


  const footerContacts: HTMLElement = document.createElement('ul')
  footerContacts.className = 'footer__list footer__contacts'
  footerContainer.appendChild(footerContacts)

  const footerContactsLi1: HTMLElement = document.createElement('li')
  footerContacts.appendChild(footerContactsLi1)
  const footerContactsLink1: HTMLElement = document.createElement('a')
  footerContactsLink1.className = 'footer__link'
  footerContactsLink1.href = 'https://github.com/alexanderson0708'
  footerContactsLink1.textContent = 'alexanderson0708'
  footerContactsLi1.appendChild(footerContactsLink1)

  const footerContactsLi2: HTMLElement = document.createElement('li')
  footerContacts.appendChild(footerContactsLi2)
  const footerContactsLink2: HTMLElement = document.createElement('a')
  footerContactsLink2.className = 'footer__link'
  footerContactsLink2.href = 'https://github.com/na1led'
  footerContactsLink2.textContent = 'na1led'
  footerContactsLi2.appendChild(footerContactsLink2)

  const footerContactsLi3: HTMLElement = document.createElement('li')
  footerContacts.appendChild(footerContactsLi3)
  const footerContactsLink3: HTMLElement = document.createElement('a')
  footerContactsLink3.className = 'footer__link'
  footerContactsLink3.href = 'https://github.com/elizavetachizh'
  footerContactsLink3.textContent = 'elizavetachizh'
  footerContactsLi3.appendChild(footerContactsLink3)



 
}

export function deleteMain(){
  const main: HTMLElement = document.querySelector('.main')
  main.remove()
}


export function generateSection(sectionSelector: string, titleText: string) {
  const section: HTMLElement = document.createElement('section');
  section.className = sectionSelector;

  const sectionContainer: HTMLElement = generateContainer()
  section.appendChild(sectionContainer)

  const sectionTitle: HTMLElement = document.createElement('h2')
  sectionTitle.className = `section__title`
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

    const alreadyExistingCards = document.querySelectorAll('.about__card')

    const card:HTMLElement = document.createElement('div')
    card.className = 'about__card'
    card.id = `about-card-${alreadyExistingCards.length}`
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
