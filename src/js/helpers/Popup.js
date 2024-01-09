class Popup {
  constructor() {
    this.html = document.documentElement;
    this.body = document.body;
    this.pageWrapper = document.querySelector('.page');
    this.lockPaddingElements = document.querySelectorAll('[data-lp]');
  }

  toggleBodyLock(isLock) {
    const lockPaddingValue = window.innerWidth - this.pageWrapper.offsetWidth;

    if (this.lockPaddingElements) {
      this.lockPaddingElements.forEach((element) => {
        element.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px';
      });
    }

    this.body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px';
    this.html.classList.toggle('lock', isLock);
  }
}

export default Popup;
