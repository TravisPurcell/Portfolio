/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/vendor/bootstrap/modal.js":
/*!******************************************!*\
  !*** ./src/js/vendor/bootstrap/modal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap modal.js v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! ./util.js */ "./src/js/vendor/bootstrap/util.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! ./util.js */ "./src/js/vendor/bootstrap/util.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function ($, Util) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Util = Util && Object.prototype.hasOwnProperty.call(Util, 'default') ? Util['default'] : Util;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'modal';
  var VERSION = '4.5.2';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY;
  var EVENT_RESIZE = "resize" + EVENT_KEY;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._element).off(Util.TRANSITION_END);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $(_this3._element).one(Util.TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE) ? CLASS_NAME_FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _extends({}, Default, $(this).data(), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : _extends({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
});

/***/ }),

/***/ "./src/js/vendor/bootstrap/util.js":
/*!*****************************************!*\
  !*** ./src/js/vendor/bootstrap/util.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap util.js v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(/*! jquery */ "jquery")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function ($) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  return Util;
});

/***/ }),

/***/ "./src/js/vendor/vendor.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vendor.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/util */ "./src/js/vendor/bootstrap/util.js");
/* harmony import */ var _bootstrap_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap/modal */ "./src/js/vendor/bootstrap/modal.js");
/* harmony import */ var _bootstrap_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./src/js/vendor/vendor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/travispurcell/vvv-local/www/portfolio/public_html/wp-content/themes/portfolio/src/js/vendor/vendor.js */"./src/js/vendor/vendor.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvci9ib290c3RyYXAvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZlbmRvci9ib290c3RyYXAvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmVuZG9yL3ZlbmRvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCIkIiwiVXRpbCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9leHRlbmRzIiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsImFwcGx5IiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiTkFNRSIsIlZFUlNJT04iLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwiRVNDQVBFX0tFWUNPREUiLCJEZWZhdWx0IiwiYmFja2Ryb3AiLCJrZXlib2FyZCIsImZvY3VzIiwic2hvdyIsIkRlZmF1bHRUeXBlIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwiRVZFTlRfSElEREVOIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJFVkVOVF9NT1VTRVVQX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9TQ1JPTExBQkxFIiwiQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIiLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQ0xBU1NfTkFNRV9TVEFUSUMiLCJTRUxFQ1RPUl9ESUFMT0ciLCJTRUxFQ1RPUl9NT0RBTF9CT0RZIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJTRUxFQ1RPUl9EQVRBX0RJU01JU1MiLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJNb2RhbCIsImVsZW1lbnQiLCJjb25maWciLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl9lbGVtZW50IiwiX2RpYWxvZyIsInF1ZXJ5U2VsZWN0b3IiLCJfYmFja2Ryb3AiLCJfaXNTaG93biIsIl9pc0JvZHlPdmVyZmxvd2luZyIsIl9pZ25vcmVCYWNrZHJvcENsaWNrIiwiX2lzVHJhbnNpdGlvbmluZyIsIl9zY3JvbGxiYXJXaWR0aCIsIl9wcm90byIsInRvZ2dsZSIsInJlbGF0ZWRUYXJnZXQiLCJoaWRlIiwiX3RoaXMiLCJoYXNDbGFzcyIsInNob3dFdmVudCIsIkV2ZW50IiwidHJpZ2dlciIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9jaGVja1Njcm9sbGJhciIsIl9zZXRTY3JvbGxiYXIiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50Iiwib24iLCJldmVudCIsIm9uZSIsImlzIiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0IiwiaGlkZUV2ZW50IiwidHJhbnNpdGlvbiIsImRvY3VtZW50Iiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIlRSQU5TSVRJT05fRU5EIiwiX2hpZGVNb2RhbCIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZGlzcG9zZSIsIndpbmRvdyIsImZvckVhY2giLCJodG1sRWxlbWVudCIsInJlbW92ZURhdGEiLCJoYW5kbGVVcGRhdGUiLCJ0eXBlQ2hlY2tDb25maWciLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsIl90aGlzMyIsImhpZGVFdmVudFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsIm92ZXJmbG93WSIsImNsYXNzTGlzdCIsImFkZCIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwicmVtb3ZlIiwiX3RoaXM0IiwibW9kYWxCb2R5IiwicGFyZW50Tm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzY3JvbGxUb3AiLCJyZWZsb3ciLCJhZGRDbGFzcyIsIl9lbmZvcmNlRm9jdXMiLCJzaG93bkV2ZW50IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX3RoaXM1IiwiaGFzIiwiX3RoaXM2Iiwid2hpY2giLCJfdGhpczciLCJfdGhpczgiLCJfcmVzZXRBZGp1c3RtZW50cyIsIl9yZXNldFNjcm9sbGJhciIsIl9yZW1vdmVCYWNrZHJvcCIsImNhbGxiYWNrIiwiX3RoaXM5IiwiYW5pbWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRUbyIsImN1cnJlbnRUYXJnZXQiLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsImNhbGxiYWNrUmVtb3ZlIiwiX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiTWF0aCIsInJvdW5kIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsIl9nZXRTY3JvbGxiYXJXaWR0aCIsIl90aGlzMTAiLCJmaXhlZENvbnRlbnQiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGlja3lDb250ZW50IiwiZWFjaCIsImluZGV4IiwiYWN0dWFsUGFkZGluZyIsImNhbGN1bGF0ZWRQYWRkaW5nIiwiY3NzIiwiZGF0YSIsInBhcnNlRmxvYXQiLCJhY3R1YWxNYXJnaW4iLCJtYXJnaW5SaWdodCIsImNhbGN1bGF0ZWRNYXJnaW4iLCJwYWRkaW5nIiwiZWxlbWVudHMiLCJtYXJnaW4iLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDaGlsZCIsIl9qUXVlcnlJbnRlcmZhY2UiLCJUeXBlRXJyb3IiLCJnZXQiLCJfdGhpczExIiwic2VsZWN0b3IiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwidGFnTmFtZSIsIiR0YXJnZXQiLCJub0NvbmZsaWN0IiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwidG9UeXBlIiwib2JqIiwidG9TdHJpbmciLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsInVuZGVmaW5lZCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImR1cmF0aW9uIiwiY2FsbGVkIiwic2V0VGltZW91dCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJzcGVjaWFsIiwiZ2V0VUlEIiwicHJlZml4IiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsInRyaW0iLCJlcnIiLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJvZmZzZXRIZWlnaHQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJCb29sZWFuIiwiaXNFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImNvbmZpZ1R5cGVzIiwicHJvcGVydHkiLCJleHBlY3RlZFR5cGVzIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJSZWdFeHAiLCJ0ZXN0IiwiRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsImZpbmRTaGFkb3dSb290IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsImpRdWVyeURldGVjdGlvbiIsInZlcnNpb24iLCJqcXVlcnkiLCJtaW5NYWpvciIsImx0TWFqb3IiLCJtaW5NaW5vciIsIm1pblBhdGNoIiwibWF4TWFqb3IiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FD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c0RKLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYUssUUFBcEgsSUFBZ0lMLE9BQU8sQ0FBQyxDQUFELENBQVAsSUFBY00sUUFBbEosRUFBNEo7QUFDMUosY0FBTSxJQUFJZCxLQUFKLENBQVUsOEVBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUEzR1EsR0FBWDtBQTZHQS9QLE1BQUksQ0FBQ3NRLGVBQUw7QUFDQWpDLHlCQUF1QjtBQUV2QixTQUFPck8sSUFBUDtBQUVELENBMUxBLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJ2ZW5kb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvKiFcbiAgKiBCb290c3RyYXAgbW9kYWwuanMgdjQuNS4yIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICAqIENvcHlyaWdodCAyMDExLTIwMjAgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSwgcmVxdWlyZSgnLi91dGlsLmpzJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnanF1ZXJ5JywgJy4vdXRpbC5qcyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Nb2RhbCA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSwgZ2xvYmFsLlV0aWwpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgkLCBVdGlsKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoJCwgJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XG4gIFV0aWwgPSBVdGlsICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChVdGlsLCAnZGVmYXVsdCcpID8gVXRpbFsnZGVmYXVsdCddIDogVXRpbDtcblxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE5BTUUgPSAnbW9kYWwnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjUuMic7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5tb2RhbCc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgRVNDQVBFX0tFWUNPREUgPSAyNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIHZhciBEZWZhdWx0ID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIHNob3c6IHRydWVcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBmb2N1czogJ2Jvb2xlYW4nLFxuICAgIHNob3c6ICdib29sZWFuJ1xuICB9O1xuICB2YXIgRVZFTlRfSElERSA9IFwiaGlkZVwiICsgRVZFTlRfS0VZO1xuICB2YXIgRVZFTlRfSElERV9QUkVWRU5URUQgPSBcImhpZGVQcmV2ZW50ZWRcIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9TSE9XID0gXCJzaG93XCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9TSE9XTiA9IFwic2hvd25cIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX0ZPQ1VTSU4gPSBcImZvY3VzaW5cIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX1JFU0laRSA9IFwicmVzaXplXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9DTElDS19ESVNNSVNTID0gXCJjbGljay5kaXNtaXNzXCIgKyBFVkVOVF9LRVk7XG4gIHZhciBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBcImtleWRvd24uZGlzbWlzc1wiICsgRVZFTlRfS0VZO1xuICB2YXIgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gXCJtb3VzZXVwLmRpc21pc3NcIiArIEVWRU5UX0tFWTtcbiAgdmFyIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gXCJtb3VzZWRvd24uZGlzbWlzc1wiICsgRVZFTlRfS0VZO1xuICB2YXIgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVk7XG4gIHZhciBDTEFTU19OQU1FX1NDUk9MTEFCTEUgPSAnbW9kYWwtZGlhbG9nLXNjcm9sbGFibGUnO1xuICB2YXIgQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIgPSAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnO1xuICB2YXIgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCc7XG4gIHZhciBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3Blbic7XG4gIHZhciBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSc7XG4gIHZhciBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdyc7XG4gIHZhciBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnO1xuICB2YXIgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnO1xuICB2YXIgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXSc7XG4gIHZhciBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJztcbiAgdmFyIFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCc7XG4gIHZhciBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCc7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIE1vZGFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9kaWFsb2cgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfRElBTE9HKTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gMDtcbiAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IE1vZGFsLnByb3RvdHlwZTtcblxuICAgIC8vIFB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKTtcblxuICAgICAgdGhpcy5fc2V0U2Nyb2xsYmFyKCk7XG5cbiAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpO1xuXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpO1xuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgJCh0aGlzLl9kaWFsb2cpLm9uKEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLm9uZShFVkVOVF9NT1VTRVVQX0RJU01JU1MsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXMoX3RoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgICBfdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zaG93QmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShldmVudCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KTtcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpO1xuXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpO1xuXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfRk9DVVNJTik7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVyk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9DTElDS19ESVNNSVNTKTtcbiAgICAgICQodGhpcy5fZGlhbG9nKS5vZmYoRVZFTlRfTU9VU0VET1dOX0RJU01JU1MpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5faGlkZU1vZGFsKGV2ZW50KTtcbiAgICAgICAgfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RhbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBbd2luZG93LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9kaWFsb2ddLmZvckVhY2goZnVuY3Rpb24gKGh0bWxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAkKGh0bWxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKTtcbiAgICAgIH0pO1xuICAgICAgLyoqXG4gICAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRVZFTlRfRk9DVVNJTmAgYW5kIGBFVkVOVF9DTElDS19EQVRBX0FQSWBcbiAgICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICAgKi9cblxuICAgICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pO1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2RpYWxvZyA9IG51bGw7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1Nob3duID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsO1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhhbmRsZVVwZGF0ZSA9IGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpO1xuICAgIH0gLy8gUHJpdmF0ZVxuICAgIDtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9leHRlbmRzKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICB2YXIgaGlkZUV2ZW50UHJldmVudGVkID0gJC5FdmVudChFVkVOVF9ISURFX1BSRVZFTlRFRCk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnRQcmV2ZW50ZWQpO1xuXG4gICAgICAgIGlmIChoaWRlRXZlbnRQcmV2ZW50ZWQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKTtcblxuICAgICAgICB2YXIgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZyk7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKFV0aWwuVFJBTlNJVElPTl9FTkQpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpO1xuXG4gICAgICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICAgICQoX3RoaXMzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJyc7XG4gICAgICAgICAgICB9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChfdGhpczMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zaG93RWxlbWVudCA9IGZ1bmN0aW9uIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSk7XG4gICAgICB2YXIgbW9kYWxCb2R5ID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTU9EQUxfQk9EWSkgOiBudWxsO1xuXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuXG4gICAgICBpZiAoJCh0aGlzLl9kaWFsb2cpLmhhc0NsYXNzKENMQVNTX05BTUVfU0NST0xMQUJMRSkgJiYgbW9kYWxCb2R5KSB7XG4gICAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1cpO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2hvd25FdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiB0cmFuc2l0aW9uQ29tcGxldGUoKSB7XG4gICAgICAgIGlmIChfdGhpczQuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIF90aGlzNC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXM0Ll9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcbiAgICAgICAgJChfdGhpczQuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpO1xuICAgICAgICAkKHRoaXMuX2RpYWxvZykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEVWRU5UX0ZPQ1VTSU4sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiBfdGhpczUuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAkKF90aGlzNS5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgX3RoaXM1Ll9lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3NldEVzY2FwZUV2ZW50ID0gZnVuY3Rpb24gX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoX3RoaXM2Ll9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBfdGhpczYuaGlkZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIV90aGlzNi5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgICAgX3RoaXM2Ll90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZRE9XTl9ESVNNSVNTKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRSZXNpemVFdmVudCA9IGZ1bmN0aW9uIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHdpbmRvdykub24oRVZFTlRfUkVTSVpFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM3LmhhbmRsZVVwZGF0ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFVkVOVF9SRVNJWkUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2hpZGVNb2RhbCA9IGZ1bmN0aW9uIF9oaWRlTW9kYWwoKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKTtcblxuICAgICAgICBfdGhpczguX3Jlc2V0QWRqdXN0bWVudHMoKTtcblxuICAgICAgICBfdGhpczguX3Jlc2V0U2Nyb2xsYmFyKCk7XG5cbiAgICAgICAgJChfdGhpczguX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfSElEREVOKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3JlbW92ZUJhY2tkcm9wID0gZnVuY3Rpb24gX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2hvd0JhY2tkcm9wID0gZnVuY3Rpb24gX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIHZhciBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpID8gQ0xBU1NfTkFNRV9GQURFIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDTEFTU19OQU1FX0JBQ0tEUk9QO1xuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpczkuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICAgIF90aGlzOS5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczkuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhDTEFTU19OQU1FX1NIT1cpO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApO1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKTtcblxuICAgICAgICB2YXIgY2FsbGJhY2tSZW1vdmUgPSBmdW5jdGlvbiBjYWxsYmFja1JlbW92ZSgpIHtcbiAgICAgICAgICBfdGhpczkuX3JlbW92ZUJhY2tkcm9wKCk7XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgICB2YXIgX2JhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcCk7XG5cbiAgICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKF9iYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIDtcblxuICAgIF9wcm90by5fYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gX2FkanVzdERpYWxvZygpIHtcbiAgICAgIHZhciBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLl9zY3JvbGxiYXJXaWR0aCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9yZXNldEFkanVzdG1lbnRzID0gZnVuY3Rpb24gX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgICAgdmFyIHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3NldFNjcm9sbGJhcigpIHtcbiAgICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgICB2YXIgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQpKTtcbiAgICAgICAgdmFyIHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQpKTsgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuXG4gICAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICAgICAgdmFyIGNhbGN1bGF0ZWRQYWRkaW5nID0gJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIF90aGlzMTAuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgfSk7IC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cblxuICAgICAgICAkKHN0aWNreUNvbnRlbnQpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHQ7XG4gICAgICAgICAgdmFyIGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgICAgJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pLmNzcygnbWFyZ2luLXJpZ2h0JywgcGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIF90aGlzMTAuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiKTtcbiAgICAgICAgfSk7IC8vIEFkanVzdCBib2R5IHBhZGRpbmdcblxuICAgICAgICB2YXIgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgICB2YXIgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy1yaWdodCcpO1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX3Jlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgIHZhciBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRklYRURfQ09OVEVOVCkpO1xuICAgICAgJChmaXhlZENvbnRlbnQpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBwYWRkaW5nID0gJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJyc7XG4gICAgICB9KTsgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJcIiArIFNFTEVDVE9SX1NUSUNLWV9DT05URU5UKSk7XG4gICAgICAkKGVsZW1lbnRzKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKTtcblxuICAgICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG5cbiAgICAgIHZhciBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRTY3JvbGxiYXJXaWR0aCA9IGZ1bmN0aW9uIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgICAgIC8vIHRoeCBkLndhbHNoXG4gICAgICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gICAgfSAvLyBTdGF0aWNcbiAgICA7XG5cbiAgICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSBfZXh0ZW5kcyh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0O1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKSA/ICd0b2dnbGUnIDogX2V4dGVuZHMoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKTtcblxuICAgIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRVZFTlRfU0hPVywgZnVuY3Rpb24gKHNob3dFdmVudCkge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBPbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJHRhcmdldC5vbmUoRVZFTlRfSElEREVOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKF90aGlzMTEpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgX3RoaXMxMS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcyk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbDtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gTW9kYWw7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RhbC5qcy5tYXBcbiIsIi8qIVxuICAqIEJvb3RzdHJhcCB1dGlsLmpzIHY0LjUuMiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAgKiBDb3B5cmlnaHQgMjAxMS0yMDIwIFRoZSBCb290c3RyYXAgQXV0aG9ycyAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2dyYXBocy9jb250cmlidXRvcnMpXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlV0aWwgPSBmYWN0b3J5KGdsb2JhbC5qUXVlcnkpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgkKSB7ICd1c2Ugc3RyaWN0JztcblxuICAkID0gJCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoJCwgJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJvb3RzdHJhcCAodjQuNS4yKTogdXRpbC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJztcbiAgdmFyIE1BWF9VSUQgPSAxMDAwMDAwO1xuICB2YXIgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwOyAvLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5cbiAgZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBcIlwiICsgb2JqO1xuICAgIH1cblxuICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZChfdGhpcyk7XG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvcjtcbiAgICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCk7XG4gIH1cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gIHZhciBVdGlsID0ge1xuICAgIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcbiAgICBnZXRVSUQ6IGZ1bmN0aW9uIGdldFVJRChwcmVmaXgpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTsgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfSxcbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50OiBmdW5jdGlvbiBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgICAgdmFyIGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50OiBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG5cblxuICAgICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZGVsYXknKTtcbiAgICAgIHZhciBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIHZhciBmbG9hdFRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KTsgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuXG4gICAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuXG5cbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xuICAgICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF07XG4gICAgICByZXR1cm4gKHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUjtcbiAgICB9LFxuICAgIHJlZmxvdzogZnVuY3Rpb24gcmVmbG93KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9LFxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpO1xuICAgIH0sXG4gICAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORCk7XG4gICAgfSxcbiAgICBpc0VsZW1lbnQ6IGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGU7XG4gICAgfSxcbiAgICB0eXBlQ2hlY2tDb25maWc6IGZ1bmN0aW9uIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjb25maWdbcHJvcGVydHldO1xuICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpO1xuXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKSArIFwiOiBcIiArIChcIk9wdGlvbiBcXFwiXCIgKyBwcm9wZXJ0eSArIFwiXFxcIiBwcm92aWRlZCB0eXBlIFxcXCJcIiArIHZhbHVlVHlwZSArIFwiXFxcIiBcIikgKyAoXCJidXQgZXhwZWN0ZWQgdHlwZSBcXFwiXCIgKyBleHBlY3RlZFR5cGVzICsgXCJcXFwiLlwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBmaW5kU2hhZG93Um9vdDogZnVuY3Rpb24gZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcblxuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKCk7XG4gICAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9IC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG5cblxuICAgICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgfSxcbiAgICBqUXVlcnlEZXRlY3Rpb246IGZ1bmN0aW9uIGpRdWVyeURldGVjdGlvbigpIHtcbiAgICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgbWluTWFqb3IgPSAxO1xuICAgICAgdmFyIGx0TWFqb3IgPSAyO1xuICAgICAgdmFyIG1pbk1pbm9yID0gOTtcbiAgICAgIHZhciBtaW5QYXRjaCA9IDE7XG4gICAgICB2YXIgbWF4TWFqb3IgPSA0O1xuXG4gICAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIFV0aWwualF1ZXJ5RGV0ZWN0aW9uKCk7XG4gIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCk7XG5cbiAgcmV0dXJuIFV0aWw7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcFxuIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC91dGlsJztcbmltcG9ydCAnLi9ib290c3RyYXAvbW9kYWwnOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=