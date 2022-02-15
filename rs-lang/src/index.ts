

import './assets/fonts/FontAwesome/stylesheet.css';
import './assets/fonts/Gilroy/stylesheet.css';


import './styles/font.css';
import './styles/style.scss';
import './styles/header.scss';
import './styles/header-bg.scss';
import './styles/about.scss';
import './styles/footer.scss';
import "./components/pages/textBook/textBook"
import "./components/pages/textBook/groupWords/groupWords"
import "./components/pages/textBook/componentsTextBook/componentsTextBook"
import './components/pages/audiogame/audiogame.css';

import {
  setAppearAnimation,
  setSlideFromRightAnimation,
} from './components/app/animation';
import {
  MainCard,
  deleteMain,
  generateFooter,
  generateMain,
  generateSection,
} from './components/app/main';
import {App} from "./components/pages/textBook/textBook"
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.body;
  const app = new App(rootElement);
  app.init();
});

const sashaInfo: object = {
  avatarLink: 'assets/img/avatar-2.png',
  name: 'Саша',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/alexanderson0708',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Авторизация', 'Аудиовызов'],
};
const kostyaInfo: object = {
  avatarLink: 'assets/img/avatar-1.png',
  name: 'Костя',
  role: 'Team Lead | Frontend Dev',
  ghLink: 'https://github.com/na1led',
  comment: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Consequuntur est, voluptas eaque facere dignissimos architecto
  nisi veritatis mollitia. Nihil, odio!`,
  goals: ['Главная страница', 'Спринт'],
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

const loginRegList: HTMLElement = document.querySelector('#login-reg-list')

const loginLink: HTMLElement = document.querySelector('.header__nav_link-login'),
  regLink: HTMLElement = document.querySelector('.header__nav_link-reg')

  loginRegList.addEventListener('click', (e) => {
    if(e.target === loginLink){

      const loginObject = new User('user'),
      loginRendered = loginObject.render();
      
      document.body.appendChild(loginRendered)
    }
  })