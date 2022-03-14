import './assets/fonts/FontAwesome/stylesheet.css';
import './assets/fonts/Gilroy/stylesheet.css';


import './styles/root.scss';

import './styles/style.scss';
import './styles/header.scss';
import './styles/header-bg.scss';
import './styles/about.scss';
import './styles/footer.scss';


import "./components/pages/textBook/textBook"
import "./components/pages/textBook/groupWords/groupWords"
import "./components/pages/statistics/statistics"
import "./components/pages/statistics/containerStatistics/statisticsPage"
import './components/pages/sprint/sprint.scss';
import './components/pages/audiogame/audiogame.css';

import {
  setAppearAnimation,
  setSlideFromRightAnimation,
} from './components/app/animation';
import {
  MainCard,
  disableMain,
  enableMain,
  generateFooter,
  generateMain,
  generateSection,
} from './components/app/main';



import { generateBubbles } from './components/app/animation';

generateBubbles(60);

const sashaInfo: object = {
  avatarLink: 'assets/img/avatar-2.png',
  name: 'Саша',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/alexanderson0708',
  comment: `Проект был очень интересен для меня, он принёс много опыта.
  Хотелось бы отдельно отметить опыт в команде, который показал все мои отрицательные стороны,
  к чему мне стоит стремится в дальнейшем развитии в сфере front-end.`,
  goals: ['Авторизация', 'Аудиовызов и Спринт'],
};
const kostyaInfo: object = {
  avatarLink: 'assets/img/avatar-1.png',
  name: 'Костя',
  role: 'Team Lead | Frontend Dev',
  ghLink: 'https://github.com/na1led',
  comment: `Так как это мой первый совместный проект с другими разработчиками,
  я почти сразу познал сложность кооперации,
  но несмотря на это мы смогли реализовать большую часть функционала`,
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

import { setRouting } from './components/app/routing';
import { getNewToken } from './components/api/api';

setRouting();

const exitBtn = document.querySelector('.header__nav_profile_btn-exit');
exitBtn.addEventListener('click', leaveProfile);

const userProfile = document.querySelector('.header__nav_profile'),
  userProfileAvatar = document.querySelector('.header__nav_link-profile'),
  userProfileExitBtn = document.querySelector('.header__nav_profile_cross-icon')

userProfileAvatar.addEventListener('click', ()=>{
  userProfile.classList.remove('element-disabled')
})
userProfileExitBtn.addEventListener('click', ()=>{
  userProfile.classList.add('element-disabled')
})

export function checkOnProfile() {
  const userProfileLink = document.querySelector('.header__nav_link-profile'),
  userLogin = document.querySelector('.header__nav_link-login'),
  userReg = document.querySelector('.header__nav_link-reg');

  if (localStorage.getItem('userRegistration') || localStorage.getItem('SignInUser')) {
    userProfileLink.classList.remove('element-disabled');
    userLogin.classList.add('element-disabled');
    userReg.classList.add('element-disabled');
  }
}
checkOnProfile();

function leaveProfile() {
  localStorage.removeItem('userRegistration');
  localStorage.removeItem('SignInUser');
  location.reload();
}
async function refreshToken(){
  if (localStorage.SignInUser !== undefined){
    console.log(JSON.parse(localStorage.SignInUser).userId);
    console.log(JSON.parse(localStorage.NewToken).refreshToken)
    const func = await getNewToken()
    console.log(func)
    localStorage.setItem('NewToken', JSON.stringify(func))
  }else{
    console.log(localStorage.SignInUser)
  }
}
refreshToken()

