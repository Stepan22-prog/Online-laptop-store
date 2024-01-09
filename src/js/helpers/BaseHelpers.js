import MobileChecker from './MobileChecker.js';

class BaseHelpers {
  static html = document.documentElement;
  static header = document.querySelector('.header');
  static firstScreen = document.querySelector('[data-observ]');

  static checkWebpSupport() {
    const testWebp = (callback) => {
      const webP = new Image();

      webP.onload = webP.onerror = () => callback(webP.height === 2);
      webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    testWebp((support) => {
      const className = support ? 'webp' : 'no-webp';
      this.html.classList.add(className);

    });
  }

  static addTouchClass() {
    if (MobileChecker.isAny) {
      this.html.classList.add('touch');
    }
  }

  static addLoadedClass() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.html.classList.add('loaded');
      }, 0);
    });
  }

  static get getHash() {
    return location.hash?.replace('#', '');
  }

  static setHash(hash) {
    hash = hash ? `#${hash}` : location.href.split('#')[0];
    history.pushState('', '', hash);
  }

  static headerFixed() {
    const headerStickyObserver = new IntersectionObserver(([entry]) => {
      this.html.classList.toggle('header-is-sticky', !entry.isIntersecting);
    });

    if (this.firstScreen) {
      headerStickyObserver.observe(this.firstScreen);
    }
  }
}

export default BaseHelpers;
