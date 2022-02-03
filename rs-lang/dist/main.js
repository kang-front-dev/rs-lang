/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/main.ts":
/*!****************************!*\
  !*** ./components/main.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMain": function() { return /* binding */ generateMain; },
/* harmony export */   "generateSection": function() { return /* binding */ generateSection; },
/* harmony export */   "generateContainer": function() { return /* binding */ generateContainer; },
/* harmony export */   "MainCard": function() { return /* binding */ MainCard; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function generateMain() {
  var main = document.createElement('main');
  main.className = 'main';
  return main;
}
function generateSection(sectionSelector, titleText) {
  var section = document.createElement('section');
  section.className = sectionSelector;
  var sectionContainer = generateContainer();
  section.appendChild(sectionContainer);
  var sectionTitle = document.createElement('h2');
  sectionTitle.className = "".concat(sectionSelector, "__title");
  sectionTitle.textContent = titleText;
  sectionContainer.appendChild(sectionTitle);
  var sectionUnderline = document.createElement('div');
  sectionUnderline.className = 'section__underline';
  sectionContainer.appendChild(sectionUnderline);
  var sectionWrapper = document.createElement('div');
  sectionWrapper.className = "".concat(sectionSelector, "__wrapper");
  sectionContainer.appendChild(sectionWrapper);
  return section;
}
function generateContainer() {
  var container = document.createElement('div');
  container.className = 'container';
  return container;
}
var MainCard = /*#__PURE__*/function () {
  function MainCard(options) {
    _classCallCheck(this, MainCard);

    this.avatarLink = options.avatarLink;
    this.name = options.name;
    this.role = options.role;
    this.ghLink = options.ghLink;
    this.comment = options.comment;
    this.goals = options.goals;
  }

  _createClass(MainCard, [{
    key: "createCard",
    value: function createCard() {
      var aboutWrapper = document.querySelector('.about__wrapper');
      var card = document.createElement('div');
      card.className = 'about__card';
      aboutWrapper.appendChild(card);
      var cardAvatar = document.createElement('img');
      cardAvatar.className = 'about__card_img';
      cardAvatar.src = this.avatarLink;
      card.appendChild(cardAvatar);
      var cardTitle = document.createElement('h3');
      cardTitle.className = 'about__card_title';
      cardTitle.textContent = this.name;
      card.appendChild(cardTitle);
      var cardSubtitle = document.createElement('h4');
      cardSubtitle.className = 'about__card_subtitle';
      cardSubtitle.textContent = this.role;
      card.appendChild(cardSubtitle);
      var cardDescr = document.createElement('p');
      cardDescr.className = 'about__card_descr';
      cardDescr.textContent = this.comment;
      card.appendChild(cardDescr);
      var cardGoals = document.createElement('div');
      cardGoals.className = 'about__card_goals';
      card.appendChild(cardGoals);
      var cardGoalsSpan1 = document.createElement('span');
      var cardGoalsIcon1 = document.createElement('i');
      cardGoalsIcon1.className = 'far fa-star';
      cardGoalsSpan1.appendChild(cardGoalsIcon1);
      cardGoalsSpan1.textContent = this.goals[0];
      cardGoals.appendChild(cardGoalsSpan1);
      var cardGoalsSpan2 = document.createElement('span');
      var cardGoalsIcon2 = document.createElement('i');
      cardGoalsIcon2.className = 'far fa-star';
      cardGoalsSpan2.appendChild(cardGoalsIcon2);
      cardGoalsSpan2.textContent = this.goals[1];
      cardGoals.appendChild(cardGoalsSpan2);
    }
  }]);

  return MainCard;
}();

/***/ }),

/***/ "./assets/fonts/FontAwesome/stylesheet.css":
/*!*************************************************!*\
  !*** ./assets/fonts/FontAwesome/stylesheet.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/fonts/Gilroy/stylesheet.css":
/*!********************************************!*\
  !*** ./assets/fonts/Gilroy/stylesheet.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/fonts/Montserrat/stylesheet.css":
/*!************************************************!*\
  !*** ./assets/fonts/Montserrat/stylesheet.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/fonts/Roboto/stylesheet.css":
/*!********************************************!*\
  !*** ./assets/fonts/Roboto/stylesheet.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/font.css":
/*!*************************!*\
  !*** ./styles/font.css ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/about.scss":
/*!***************************!*\
  !*** ./styles/about.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/header-bg.scss":
/*!*******************************!*\
  !*** ./styles/header-bg.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/header.scss":
/*!****************************!*\
  !*** ./styles/header.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_fonts_Roboto_stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fonts/Roboto/stylesheet.css */ "./assets/fonts/Roboto/stylesheet.css");
/* harmony import */ var _assets_fonts_Montserrat_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fonts/Montserrat/stylesheet.css */ "./assets/fonts/Montserrat/stylesheet.css");
/* harmony import */ var _assets_fonts_Gilroy_stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fonts/Gilroy/stylesheet.css */ "./assets/fonts/Gilroy/stylesheet.css");
/* harmony import */ var _assets_fonts_FontAwesome_stylesheet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/fonts/FontAwesome/stylesheet.css */ "./assets/fonts/FontAwesome/stylesheet.css");
/* harmony import */ var _styles_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/font.css */ "./styles/font.css");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/header.scss */ "./styles/header.scss");
/* harmony import */ var _styles_header_bg_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/header-bg.scss */ "./styles/header-bg.scss");
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/about.scss */ "./styles/about.scss");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main */ "./components/main.ts");










var sashaInfo = {
  avatarLink: 'assets/img/avatar-2.png',
  name: 'Саша',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/alexanderson0708',
  comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n  Consequuntur est, voluptas eaque facere dignissimos architecto\n  nisi veritatis mollitia. Nihil, odio!",
  goals: ['Авторизация', 'Аудиовызов']
};
var kostyaInfo = {
  avatarLink: 'assets/img/avatar-1.png',
  name: 'Костя',
  role: 'Team Lead | Frontend Dev',
  ghLink: 'https://github.com/na1led',
  comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n  Consequuntur est, voluptas eaque facere dignissimos architecto\n  nisi veritatis mollitia. Nihil, odio!",
  goals: ['Главная страница', 'Спринт']
};
var lizaInfo = {
  avatarLink: 'assets/img/avatar-3.png',
  name: 'Лиза',
  role: 'Frontend Dev',
  ghLink: 'https://github.com/elizavetachizh',
  comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n  Consequuntur est, voluptas eaque facere dignissimos architecto\n  nisi veritatis mollitia. Nihil, odio!",
  goals: ['Электронный учебник', 'Статистика']
};

function renderMain() {
  var elementMain = (0,_components_main__WEBPACK_IMPORTED_MODULE_9__.generateMain)(),
      sectionAbout = (0,_components_main__WEBPACK_IMPORTED_MODULE_9__.generateSection)('about', 'Наша команда');
  elementMain.appendChild(sectionAbout);
  document.body.appendChild(elementMain);
}

renderMain();
var sashaCard = new _components_main__WEBPACK_IMPORTED_MODULE_9__.MainCard(sashaInfo),
    kostyaCard = new _components_main__WEBPACK_IMPORTED_MODULE_9__.MainCard(kostyaInfo),
    lizaCard = new _components_main__WEBPACK_IMPORTED_MODULE_9__.MainCard(lizaInfo);
sashaCard.createCard();
kostyaCard.createCard();
lizaCard.createCard();
}();
/******/ })()
;