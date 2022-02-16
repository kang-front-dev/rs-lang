export class Sprint {
  private wrapper;
  constructor(id: string) {
    this.wrapper = document.createElement('div');
    this.wrapper.id = id;
    this.wrapper.className = id;
  }
  generateStartPage() {
    const sprintTitle = document.createElement('h2');
    sprintTitle.className = 'sprint__title';
    sprintTitle.textContent = 'Спринт';
    this.wrapper.append(sprintTitle);

    const sprintDescr = document.createElement('p');
    sprintDescr.className = 'sprint__descr';
    sprintDescr.innerHTML = `Мини-игра "Спринт" - тренировка на скорость. <br> Ваша цель - ответить на наибольшее количество вопросов за 30 секунд.`;
    this.wrapper.append(sprintDescr);

    const sprintLevels = document.createElement('div');
    sprintLevels.className = 'sprint__levels';
    this.wrapper.append(sprintLevels);

    const sprintLevelsTitle = document.createElement('h3');
    sprintLevelsTitle.className = 'sprint__levels_title';
    sprintLevelsTitle.textContent = 'Выберите уровень:';
    sprintLevels.append(sprintLevelsTitle);

    const sprintLevelsWrapper = document.createElement('div');
    sprintLevelsWrapper.className = 'sprint__levels_wrapper';
    sprintLevels.append(sprintLevelsWrapper);

    const levelsArr = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    levelsArr.forEach((item) => {
      const sprintLevelsItem = document.createElement('div');
      sprintLevelsItem.className = 'sprint__levels_item';
      sprintLevelsItem.textContent = item;
      sprintLevelsItem.setAttribute('data-filter', item)

      sprintLevelsItem.addEventListener('click', () => {
        const allLevelsItems = document.querySelectorAll(
          '.sprint__levels_item'
        );

        allLevelsItems.forEach((item) => {
          item.classList.remove('sprint__levels_item-active');
        });

        sprintLevelsItem.classList.add('sprint__levels_item-active');
      });

      sprintLevelsWrapper.append(sprintLevelsItem);
    });

    const sprintStartBtn = document.createElement('div');
    sprintStartBtn.className = 'sprint__btn-start';
    sprintStartBtn.textContent = 'Начать';
    sprintLevels.append(sprintStartBtn);

    return this.wrapper
  }
  generateGame() {}

}
