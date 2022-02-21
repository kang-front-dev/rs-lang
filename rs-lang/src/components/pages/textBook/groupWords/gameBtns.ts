import { AudioGame } from '../../audiogame/audiogame';
import { Component } from '../addition/addComponents';
import { Sprint } from '../../sprint/sprint';
import { headerNavLinkActive } from '../../../app/animation';
import { updateCurrentModule } from '../../../app/routing';

export class createGames extends Component {
  private title: Component;
  private btnsContainer: Component;
  private btnGame1: HTMLButtonElement | Component;
  private btnGame2: HTMLButtonElement | Component;
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['games__part']);

    const moduleWrapper = document.querySelector('#module-wrapper'),
      textbook = document.querySelector('.word-section-main');
    const headerLinkActive = new headerNavLinkActive();

    const audiogameLink = document.getElementById('audiogame'),
      sprintLink = document.getElementById('sprint');

    const headerNavList = document.getElementById('header-nav-links');

    this.title = new Component(this.element, 'div', ['games__title'], 'Игры');
    this.btnsContainer = new Component(
      this.element,
      'div',
      ['games-btn__container'],
      ''
    );
    this.btnGame1 = new Component(
      this.btnsContainer.element,
      'button',
      ['game__btn-1'],
      'Аудиовызов'
    );
    this.btnGame2 = new Component(
      this.btnsContainer.element,
      'button',
      ['game__btn-2'],
      'Спринт'
    );
    this.btnGame1.element.onclick = () => {

      const audiogameLink = document.getElementById('audiogame');

      textbook.remove();
      localStorage.setItem('currentModule', '#audio__game')
      updateCurrentModule(audiogameLink, true);
      console.log(localStorage.group);
      console.log(localStorage.page);
      headerLinkActive.setActivePosition(
        audiogameLink.offsetLeft,
        audiogameLink.offsetWidth,
        audiogameLink.offsetHeight
      );
    };
    this.btnGame2.element.onclick = () => {
      const sprintLink = document.getElementById('sprint');

      textbook.remove();
      localStorage.setItem('currentModule', '.sprint');
      console.log(localStorage.group);
      console.log(localStorage.page);
      
      updateCurrentModule(sprintLink, true);
      headerLinkActive.setActivePosition(
        sprintLink.offsetLeft,
        sprintLink.offsetWidth,
        sprintLink.offsetHeight
      );
    };
  }
}
