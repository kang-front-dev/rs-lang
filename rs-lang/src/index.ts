import './assets/fonts/FontAwesome/stylesheet.css';
import './assets/fonts/Gilroy/stylesheet.css';

import './styles/font.css';
import './styles/style.scss';
import './styles/header.scss';
import './styles/header-bg.scss';
import './styles/about.scss';
import './styles/footer.scss';

import './components/pages/audiogame/audiogame.css';

import {
  setAppearAnimation,
  setSlideFromRightAnimation,
} from './components/app/animation';
import {
  MainCard,
  disableMain,
  enableMainMain,
  generateFooter,
  generateMain,
  generateSection,
  enableMain,
} from './components/app/main';

import { generateBubbles } from './components/app/animation';

generateBubbles(60);

const sashaInfo: object = {
  avatarLink: 'assets/img/avatar-2.png',
  name: 'Саша',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/alexanderson0708',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Авторизация', 'Аудиовызов и Спринт'],
};
const kostyaInfo: object = {
  avatarLink: 'assets/img/avatar-1.png',
  name: 'Костя',
  role: 'Team Lead | Frontend Dev',
  ghLink: 'https://github.com/na1led',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Дизайн', 'Верстка'],
};
const lizaInfo: object = {
  avatarLink: 'assets/img/avatar-3.png',
  name: 'Лиза',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/elizavetachizh',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Электронный учебник', 'Статистика'],
};

function buildMain() {
  const elementMain: HTMLElement = generateMain(),
    sectionAbout: HTMLElement = generateSection('about', 'Наша команда');

  elementMain.appendChild(sectionAbout);

  document.body.appendChild(elementMain);
}
buildMain();
generateFooter();

const sashaCard = new MainCard(sashaInfo),
  kostyaCard = new MainCard(kostyaInfo),
  lizaCard = new MainCard(lizaInfo);

sashaCard.createCard();
kostyaCard.createCard();
lizaCard.createCard();

setAppearAnimation('.section__title');
setAppearAnimation('.section__underline');
setAppearAnimation('.about__wrapper');

const aboutCards = document.querySelectorAll('.about__card');
setSlideFromRightAnimation('#about__card', aboutCards[0]);
setSlideFromRightAnimation('#about-card-1', aboutCards[1], 0.2);
setSlideFromRightAnimation('#about-card-2', aboutCards[2], 0.4);

import './components/pages/user/user.css';
import './components/pages/register/register.css';
import { User } from './components/pages/user/user';
import { Register } from './components/pages/register/register';

const loginRegList: HTMLElement = document.querySelector('#login-reg-list');

const loginLink: HTMLElement = document.querySelector(
    '.header__nav_link-login'
  ),
  regLink: HTMLElement = document.querySelector('.header__nav_link-reg');

loginRegList.addEventListener('click', (e) => {
  if (e.target === loginLink) {
    const loginObject = new User('user'),
      loginRendered = loginObject.render();

    document.body.appendChild(loginRendered);
  } else if (e.target === regLink) {
    const regObject = new Register('user'),
      regRendered = regObject.render();

    document.body.appendChild(regRendered);
  }
});

import { AudioGame } from './components/pages/audiogame/audiogame';

import { headerNavLinkActive } from './components/app/animation';

const headerLinkActive = new headerNavLinkActive();

const headerNavList = document.getElementById('header-nav-links');

const audiogameLink = document.getElementById('audiogame'),
  sprintLink = document.getElementById('sprint'),
  mainpageLink = document.getElementById('main-page'),
  textbookLink = document.getElementById('textbook'),
  statsLink = document.getElementById('stats');

const moduleWrapper = document.getElementById('module-wrapper'),
  headerContent = document.querySelector('.header__content');

window.onload = () => {
  headerLinkActive.setActivePosition(
    mainpageLink.offsetLeft,
    mainpageLink.offsetWidth,
    mainpageLink.offsetHeight
  );
  console.log('wdwadwd');
  
}


headerNavList.addEventListener('click', (e) => {
  if (e.target === audiogameLink) {
    headerContent.classList.add('element-animated-out');
    headerLinkActive.setActivePosition(
      audiogameLink.offsetLeft,
      audiogameLink.offsetWidth,
      audiogameLink.offsetHeight
    );
    setTimeout(() => {
      headerContent.classList.add('element-disabled');
      headerContent.classList.remove('element-animated-out');
      disableMain();

      const audiogameObject = new AudioGame('audio__game'),
        audiogameRendered = audiogameObject.render();

      moduleWrapper.appendChild(audiogameRendered);
    }, 300);
  } else if (e.target === sprintLink) {
    headerLinkActive.setActivePosition(
      sprintLink.offsetLeft,
      sprintLink.offsetWidth,
      sprintLink.offsetHeight
    );
  } else if (e.target === mainpageLink) {
    headerLinkActive.setActivePosition(
      mainpageLink.offsetLeft,
      mainpageLink.offsetWidth,
      mainpageLink.offsetHeight
    );
  } else if (e.target === textbookLink) {
    headerLinkActive.setActivePosition(
      textbookLink.offsetLeft,
      textbookLink.offsetWidth,
      textbookLink.offsetHeight
    );
  } else if (e.target === statsLink) {
    headerLinkActive.setActivePosition(
      statsLink.offsetLeft,
      statsLink.offsetWidth,
      statsLink.offsetHeight
    );
  }
});

const headerLogo = document.querySelector('.header__nav_logo');

headerLogo.addEventListener('click', () => {
  if (
    headerContent.classList.contains('element-disabled') &&
    document.querySelector('.main').classList.contains('element-disabled')
  ) {
    console.log('232332323');

    headerContent.classList.remove('element-disabled');
    enableMain();

    const audioGame = document.getElementById('audio__game');
    audioGame.remove();

    headerLinkActive.setActivePosition(
      mainpageLink.offsetLeft,
      mainpageLink.offsetWidth,
      mainpageLink.offsetHeight
    );
  }
});
