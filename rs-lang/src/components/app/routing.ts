import { headerNavLinkActive } from './animation';
import { AudioGame } from '../pages/audiogame/audiogame';
import { Sprint } from '../pages/sprint/sprint';
import { disableMain, enableMain } from './main';
import { TextBook } from '../pages/textBook/textBook';
export function setRouting() {
  const headerLinkActive = new headerNavLinkActive();

  const headerNavList = document.getElementById('header-nav-links');

  const moduleWrapper = document.getElementById('module-wrapper'),
    headerContent = document.querySelector('.header__content');

  const mainpageLink = document.getElementById('main-page');

  window.onload = () => {
    headerLinkActive.setActivePosition(
      mainpageLink.offsetLeft,
      mainpageLink.offsetWidth,
      mainpageLink.offsetHeight
    );

  };

  localStorage.setItem('currentModule', '.header__content')

  headerNavList.addEventListener('click', (e) => {
    updateCurrentModule(e.target);
  });
}

export function updateCurrentModule(target, fromTextBook?) {
  const currentModule = document.querySelector(
    localStorage.getItem('currentModule')
  );

  const audiogameLink = document.getElementById('audiogame'),
    sprintLink = document.getElementById('sprint'),
    mainpageLink = document.getElementById('main-page'),
    textbookLink = document.getElementById('textbook'),
    statsLink = document.getElementById('stats');

  const headerLinkActive = new headerNavLinkActive();
  const headerContent = document.querySelector('.header__content');
  const moduleWrapper = document.getElementById('module-wrapper');

  if (target === audiogameLink) {
    if (currentModule && currentModule != headerContent) {
      currentModule.remove();
    }
    headerContent.classList.add('element-disabled');

    disableMain();
    const audiogameObject = new AudioGame('audio__game'),
      audiogameRendered = audiogameObject.render();

    moduleWrapper.appendChild(audiogameRendered);

    if (!fromTextBook) {
      console.log('dwdwadawdad');
      
      localStorage.setItem('group', '-1');
      localStorage.setItem('page', '-1');
    }

    localStorage.setItem('currentModule', '#audio__game');

    headerLinkActive.setActivePosition(
      audiogameLink.offsetLeft,
      audiogameLink.offsetWidth,
      audiogameLink.offsetHeight
    );
  } else if (target === sprintLink) {
    console.log(currentModule);

    if (currentModule && currentModule != headerContent) {
      currentModule.remove();
    }

    headerContent.classList.add('element-disabled');

    disableMain();

    if (!fromTextBook) {
      console.log('dwdwadawdad2');
      localStorage.setItem('group', '-1');
      localStorage.setItem('page', '-1');
    }

    const sprintBlock = new Sprint('sprint');
    moduleWrapper.append(sprintBlock.generateStartPage());

    localStorage.setItem('currentModule', '.sprint');

    headerLinkActive.setActivePosition(
      sprintLink.offsetLeft,
      sprintLink.offsetWidth,
      sprintLink.offsetHeight
    );
  } else if (target === mainpageLink) {
    headerContent.classList.remove('element-disabled');

    if (currentModule && currentModule != headerContent) {
      currentModule.remove();
    }
    enableMain();
    headerLinkActive.setActivePosition(
      mainpageLink.offsetLeft,
      mainpageLink.offsetWidth,
      mainpageLink.offsetHeight
    );
  } else if (target === textbookLink) {
    if (currentModule && currentModule != headerContent) {
      currentModule.remove();
    }

    localStorage.setItem('currentModule', '.word-section-main');

    headerContent.classList.add('element-disabled');
    disableMain();

    const textBook = new TextBook(document.getElementById('module-wrapper'));

    headerLinkActive.setActivePosition(
      textbookLink.offsetLeft,
      textbookLink.offsetWidth,
      textbookLink.offsetHeight
    );
  } else if (target === statsLink) {
    if (currentModule && currentModule != headerContent) {
      currentModule.remove();
    }

    headerLinkActive.setActivePosition(
      statsLink.offsetLeft,
      statsLink.offsetWidth,
      statsLink.offsetHeight
    );
  }
}
