import BaseHelpers from './helpers/BaseHelpers.js';
import './libs/jquery.maskedinput.min';
import * as modules from './modules/modules';
import PopupManager from './modules/PopupManager';
import './modules/sliders.js';
import './modules/scroll.js';
import './modules/select.js';
import './modules/range.js';
import './modules/range.js';

BaseHelpers.checkWebpSupport();

//modules
modules.spollers();
modules.tabs();
modules.menuInit();

//popup
new PopupManager();

//validation
jQuery(function ($) {
  $("#phone").mask("+38 (999) 999-9999");
  $("#phone__call").mask("+38 (999) 999-9999");
  $("#phone__cart").mask("+38 (999) 999-9999");
});
