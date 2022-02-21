import { headerNavLinkActive } from "./animation";
import { AudioGame } from "../pages/audiogame/audiogame";
import { Sprint } from "../pages/sprint/sprint";
import { disableMain, enableMain } from "./main";
import { TextBook } from "../pages/textBook/textBook";
export function setRouting() {
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
    };

  let currentModule;

  headerNavList.addEventListener('click', (e) => {
    if (e.target === audiogameLink) {
      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }
      headerContent.classList.add('element-disabled');

      disableMain();
      localStorage.setItem('group', '-1')
      localStorage.setItem('page', '-1')
      const audiogameObject = new AudioGame('audio__game'),
        audiogameRendered = audiogameObject.render();

      moduleWrapper.appendChild(audiogameRendered);
      currentModule = audiogameRendered;


      headerLinkActive.setActivePosition(
        audiogameLink.offsetLeft,
        audiogameLink.offsetWidth,
        audiogameLink.offsetHeight
      );
    } else if (e.target === sprintLink) {
      console.log(currentModule);

      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }
      
      headerContent.classList.add('element-disabled');

      disableMain();

      localStorage.setItem('group', '-1')
      localStorage.setItem('page', '-1')
      const sprintBlock = new Sprint('sprint')
      moduleWrapper.append(sprintBlock.generateStartPage())

      currentModule = document.querySelector('.sprint');

      headerLinkActive.setActivePosition(
        sprintLink.offsetLeft,
        sprintLink.offsetWidth,
        sprintLink.offsetHeight
      );
    } else if (e.target === mainpageLink) {
      headerContent.classList.remove('element-disabled');

      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }
      enableMain()
      headerLinkActive.setActivePosition(
        mainpageLink.offsetLeft,
        mainpageLink.offsetWidth,
        mainpageLink.offsetHeight
      );
    } else if (e.target === textbookLink) {
      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }
      headerContent.classList.add('element-disabled');
      disableMain();

      const textBook = new TextBook(document.getElementById('module-wrapper'))

      currentModule = document.querySelector('.word-section-main')
      headerLinkActive.setActivePosition(
        textbookLink.offsetLeft,
        textbookLink.offsetWidth,
        textbookLink.offsetHeight
      );
    } else if (e.target === statsLink) {
      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }

      headerLinkActive.setActivePosition(
        statsLink.offsetLeft,
        statsLink.offsetWidth,
        statsLink.offsetHeight
      );
    }
  });
}
