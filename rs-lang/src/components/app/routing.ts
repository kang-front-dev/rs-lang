import { headerNavLinkActive } from "./animation";
import { AudioGame } from "../pages/audiogame/audiogame";
import { disableMain } from "./main";

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
      headerContent.classList.add('element-animated-out');

      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }

      setTimeout(() => {
        headerContent.classList.add('element-disabled');
        headerContent.classList.remove('element-animated-out');
        disableMain();

        const audiogameObject = new AudioGame('audio__game'),
          audiogameRendered = audiogameObject.render();

        moduleWrapper.appendChild(audiogameRendered);
        currentModule = audiogameRendered;
      }, 300);

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

      setTimeout(() => {
        headerContent.classList.add('element-disabled');
        headerContent.classList.remove('element-animated-out');
        disableMain();

        const audiogameObject = new AudioGame('audio__game'),
          audiogameRendered = audiogameObject.render();

        moduleWrapper.appendChild(audiogameRendered);
        currentModule = audiogameRendered;
      }, 300);

      headerLinkActive.setActivePosition(
        sprintLink.offsetLeft,
        sprintLink.offsetWidth,
        sprintLink.offsetHeight
      );
    } else if (e.target === mainpageLink) {
      headerContent.classList.add('element-animated-out');

      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }

      headerLinkActive.setActivePosition(
        mainpageLink.offsetLeft,
        mainpageLink.offsetWidth,
        mainpageLink.offsetHeight
      );
    } else if (e.target === textbookLink) {
      if (currentModule && currentModule != headerContent) {
        currentModule.remove();
      }

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
