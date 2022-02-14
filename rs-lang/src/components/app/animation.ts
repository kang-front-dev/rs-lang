export function setAppearAnimation(targetSelector) {
  const targets = document.querySelectorAll(`${targetSelector}`);
  targetSelector = targetSelector.split('');
  targetSelector.splice(0, 1);
  targetSelector = targetSelector.join('');
  console.log(targetSelector);
  
  targets.forEach(item => {
    window.addEventListener('scroll', (e) => {
      if (Math.round(item.getBoundingClientRect().top) < window.innerHeight + 50) {
        item.classList.add(`${targetSelector}-appear-active`);
      }
    });
  })

}

export function setSlideFromRightAnimation(
  targetSelector,
  target?: Element,
  timeout?: number
) {
  if(!target){
    const target: HTMLElement = document.querySelector(`${targetSelector}`);

    targetSelector = targetSelector.split('');
    targetSelector.splice(0, 1);
    targetSelector = targetSelector.join('');
    console.log(targetSelector);
    
  }else{
    targetSelector = target.classList[0]
  }
  window.addEventListener('scroll', (e) => {

    if (target.getBoundingClientRect().top < window.innerHeight + 50) {
      target.classList.add(`${targetSelector}-slideLeft-active`);
      if (timeout) {
        target.style.animationDelay = `${timeout}s`;
        setTimeout(() => {
          target.style.opacity = 1;
        }, timeout * 1000);
      }else{
        target.style.opacity = 1;
      }
    }
  });
}
