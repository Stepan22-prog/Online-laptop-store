
class MobileChecker {
  static userAgent = navigator.userAgent;

  static get isAndroid() {
    return Boolean(this.userAgent.match(/Android/i));
  }

  static get isBlackBerry() {
    return Boolean(this.userAgent.match(/BlackBerry/i));
  }

  static get isAppleOS() {
    return Boolean(this.userAgent.match(/iPhone|iPad|iPod/i));
  }

  static get isOpera() {
    return Boolean(this.userAgent.match(/Opera Mini/i));
  }

  static get isWindows() {
    return Boolean(this.userAgent.match(/IEMobile/i));
  }

  static get isAny() {
    return (
      this.isAndroid ||
      this.isBlackBerry ||
      this.isAppleOS ||
      this.isOpera ||
      this.isWindows
    );
  }
}

export default MobileChecker;
