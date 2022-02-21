export function setAppearAnimation(targetSelector) {
  const targets = document.querySelectorAll(`${targetSelector}`);
  targetSelector = targetSelector.split('');
  targetSelector.splice(0, 1);
  targetSelector = targetSelector.join('');
  console.log(targetSelector);

  targets.forEach((item) => {
    window.addEventListener('scroll', (e) => {
      if (
        Math.round(item.getBoundingClientRect().top) <
        window.innerHeight + 50
      ) {
        item.classList.add(`${targetSelector}-appear-active`);
      }
    });
  });
}

export function setSlideFromRightAnimation(
  targetSelector,
  target?: Element,
  timeout?: number
) {
  if (!target) {
    const target: HTMLElement = document.querySelector(`${targetSelector}`);

    targetSelector = targetSelector.split('');
    targetSelector.splice(0, 1);
    targetSelector = targetSelector.join('');
    console.log(targetSelector);
  } else {
    targetSelector = target.classList[0];
  }
  window.addEventListener('scroll', (e) => {
    if (target.getBoundingClientRect().top < window.innerHeight + 50) {
      target.classList.add(`${targetSelector}-slideLeft-active`);
      if (timeout) {
        (target as HTMLElement).style.animationDelay = `${timeout}s`;
        setTimeout(() => {
          (target as HTMLElement).style.opacity = '1';
        }, timeout * 1000);
      } else {
        (target as HTMLElement).style.opacity = '1';
      }
    }
  });
}

export function generateBubbles(amount: number) {
  if (amount > 0) {
    const bubble = document.createElement('li');
    const bubbleList = document.querySelector('.circles');
    bubbleList.appendChild(bubble);

    generateBubbles(amount - 1);
  } else {
    return;
  }
}

export class headerNavLinkActive {

  setActivePosition(left: number, width: number, height: number) {
    const active: HTMLElement = document.querySelector('.header__nav_link-active');

    active.style.left = left + 'px';
    active.style.width = width + 'px';
    active.style.height = height + 'px';

    
  }
}
