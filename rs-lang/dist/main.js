/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/animation.ts":
/*!*********************************!*\
  !*** ./components/animation.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAppearAnimation": function() { return /* binding */ setAppearAnimation; },
/* harmony export */   "setSlideFromRightAnimation": function() { return /* binding */ setSlideFromRightAnimation; }
/* harmony export */ });
function setAppearAnimation(targetSelector) {
  var targets = document.querySelectorAll("".concat(targetSelector));
  targetSelector = targetSelector.split('');
  targetSelector.splice(0, 1);
  targetSelector = targetSelector.join('');
  console.log(targetSelector);
  targets.forEach(function (item) {
    window.addEventListener('scroll', function (e) {
      console.log(targetSelector, Math.round(item.getBoundingClientRect().top), window.innerHeight + 50);

      if (Math.round(item.getBoundingClientRect().top) < window.innerHeight + 50) {
        item.classList.add("".concat(targetSelector, "-appear-active"));
      }
    });
  });
}
function setSlideFromRightAnimation(targetSelector, target, timeout) {
  if (!target) {
    var _target = document.querySelector("".concat(targetSelector));

    targetSelector = targetSelector.split('');
    targetSelector.splice(0, 1);
    targetSelector = targetSelector.join('');
    console.log(targetSelector);
  } else {
    targetSelector = target.classList[0];
  }

  window.addEventListener('scroll', function (e) {
    if (target.getBoundingClientRect().top < window.innerHeight + 50) {
      target.classList.add("".concat(targetSelector, "-slideLeft-active"));

      if (timeout) {
        target.style.animationDelay = "".concat(timeout, "s");
        setTimeout(function () {
          target.style.opacity = 1;
        }, timeout * 1000);
      } else {
        target.style.opacity = 1;
      }
    }
  });
}

/***/ }),

/***/ "./components/main.ts":
/*!****************************!*\
  !*** ./components/main.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMain": function() { return /* binding */ generateMain; },
/* harmony export */   "generateFooter": function() { return /* binding */ generateFooter; },
/* harmony export */   "deleteMain": function() { return /* binding */ deleteMain; },
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
function generateFooter() {
  var footer = document.createElement('footer');
  footer.className = 'footer';
  document.body.appendChild(footer);
  var footerContainer = document.createElement('div');
  footerContainer.className = 'container';
  footer.appendChild(footerContainer);
  var footerLogoBlock = document.createElement('div');
  footerLogoBlock.className = 'footer__logo_block';
  footerContainer.appendChild(footerLogoBlock);
  var footerLogo = document.createElement('img');
  footerLogo.className = 'footer__logo';
  footerLogo.src = 'assets/img/logo.png';
  footerLogoBlock.appendChild(footerLogo);
  var footerLogoDescr = document.createElement('p');
  footerLogoDescr.className = 'footer__logo_descr';
  footerLogoDescr.textContent = 'Сервис для изучения английского';
  footerLogoBlock.appendChild(footerLogoDescr);
  var footerNav = document.createElement('nav');
  footerNav.className = 'footer__nav';
  footerContainer.appendChild(footerNav);
  var footerNavList1 = document.createElement('ul');
  footerNavList1.className = 'footer__list';
  footerNav.appendChild(footerNavList1);
  var footerNavList1Li1 = document.createElement('li');
  footerNavList1.appendChild(footerNavList1Li1);
  var footerNavList1Link1 = document.createElement('a');
  footerNavList1Link1.className = 'footer__link';
  footerNavList1Link1.textContent = 'Спринт';
  footerNavList1Li1.appendChild(footerNavList1Link1);
  var footerNavList1Li2 = document.createElement('li');
  footerNavList1.appendChild(footerNavList1Li2);
  var footerNavList1Link2 = document.createElement('a');
  footerNavList1Link2.className = 'footer__link';
  footerNavList1Link2.textContent = 'Аудиовызов';
  footerNavList1Li2.appendChild(footerNavList1Link2);
  var footerNavList2 = document.createElement('ul');
  footerNavList2.className = 'footer__list';
  footerNav.appendChild(footerNavList2);
  var footerNavList2Li1 = document.createElement('li');
  footerNavList2.appendChild(footerNavList2Li1);
  var footerNavList2Link1 = document.createElement('a');
  footerNavList2Link1.className = 'footer__link';
  footerNavList2Link1.textContent = 'Учебник';
  footerNavList2Li1.appendChild(footerNavList2Link1);
  var footerNavList2Li2 = document.createElement('li');
  footerNavList2.appendChild(footerNavList2Li2);
  var footerNavList2Link2 = document.createElement('a');
  footerNavList2Link2.className = 'footer__link';
  footerNavList2Link2.textContent = 'Статистика';
  footerNavList2Li2.appendChild(footerNavList2Link2);
  var footerContacts = document.createElement('ul');
  footerContacts.className = 'footer__list footer__contacts';
  footerContainer.appendChild(footerContacts);
  var footerContactsLi1 = document.createElement('li');
  footerContacts.appendChild(footerContactsLi1);
  var footerContactsLink1 = document.createElement('a');
  footerContactsLink1.className = 'footer__link';
  footerContactsLink1.href = 'https://github.com/alexanderson0708';
  footerContactsLink1.textContent = 'alexanderson0708';
  footerContactsLi1.appendChild(footerContactsLink1);
  var footerContactsLi2 = document.createElement('li');
  footerContacts.appendChild(footerContactsLi2);
  var footerContactsLink2 = document.createElement('a');
  footerContactsLink2.className = 'footer__link';
  footerContactsLink2.href = 'https://github.com/na1led';
  footerContactsLink2.textContent = 'na1led';
  footerContactsLi2.appendChild(footerContactsLink2);
  var footerContactsLi3 = document.createElement('li');
  footerContacts.appendChild(footerContactsLi3);
  var footerContactsLink3 = document.createElement('a');
  footerContactsLink3.className = 'footer__link';
  footerContactsLink3.href = 'https://github.com/elizavetachizh';
  footerContactsLink3.textContent = 'elizavetachizh';
  footerContactsLi3.appendChild(footerContactsLink3);
}
function deleteMain() {
  var main = document.querySelector('.main');
  main.remove();
}
function generateSection(sectionSelector, titleText) {
  var section = document.createElement('section');
  section.className = sectionSelector;
  var sectionContainer = generateContainer();
  section.appendChild(sectionContainer);
  var sectionTitle = document.createElement('h2');
  sectionTitle.className = "section__title";
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
      var alreadyExistingCards = document.querySelectorAll('.about__card');
      var card = document.createElement('div');
      card.className = 'about__card';
      card.id = "about-card-".concat(alreadyExistingCards.length);
      aboutWrapper.appendChild(card);
      var cardAvatar = document.createElement('img');
      cardAvatar.className = 'about__card_img';
      cardAvatar.src = this.avatarLink;
      card.appendChild(cardAvatar);
      var cardTitleBlock = document.createElement('div');
      cardTitleBlock.className = 'about__card_title_block';
      card.appendChild(cardTitleBlock);
      var cardTitle = document.createElement('h3');
      cardTitle.className = 'about__card_title';
      cardTitle.textContent = this.name;
      cardTitleBlock.appendChild(cardTitle);
      var cardTitleLink = document.createElement('a');
      cardTitleLink.href = this.ghLink;
      cardTitleBlock.appendChild(cardTitleLink);
      var cardTitleLinkIcon = document.createElement('i');
      cardTitleLinkIcon.className = 'fab fa-github';
      cardTitleLink.appendChild(cardTitleLinkIcon);
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
      var cardGoalsBlock1 = document.createElement('div');
      var cardGoalsSpan1 = document.createElement('span');
      var cardGoalsIcon1 = document.createElement('i');
      cardGoalsIcon1.className = 'far fa-star';
      cardGoalsBlock1.appendChild(cardGoalsIcon1);
      cardGoalsSpan1.textContent = this.goals[0];
      cardGoalsBlock1.appendChild(cardGoalsSpan1);
      cardGoals.appendChild(cardGoalsBlock1);
      var cardGoalsBlock2 = document.createElement('div');
      var cardGoalsSpan2 = document.createElement('span');
      var cardGoalsIcon2 = document.createElement('i');
      cardGoalsIcon2.className = 'far fa-star';
      cardGoalsBlock2.appendChild(cardGoalsIcon2);
      cardGoalsSpan2.textContent = this.goals[1];
      cardGoalsBlock2.appendChild(cardGoalsSpan2);
      cardGoals.appendChild(cardGoalsBlock2);
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

/***/ "./styles/footer.scss":
/*!****************************!*\
  !*** ./styles/footer.scss ***!
  \****************************/
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
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/footer.scss */ "./styles/footer.scss");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main */ "./components/main.ts");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/animation */ "./components/animation.ts");












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

function buildMain() {
  var elementMain = (0,_components_main__WEBPACK_IMPORTED_MODULE_10__.generateMain)(),
      sectionAbout = (0,_components_main__WEBPACK_IMPORTED_MODULE_10__.generateSection)('about', 'Наша команда');
  elementMain.appendChild(sectionAbout);
  document.body.appendChild(elementMain);
}

buildMain();
(0,_components_main__WEBPACK_IMPORTED_MODULE_10__.generateFooter)();
var sashaCard = new _components_main__WEBPACK_IMPORTED_MODULE_10__.MainCard(sashaInfo),
    kostyaCard = new _components_main__WEBPACK_IMPORTED_MODULE_10__.MainCard(kostyaInfo),
    lizaCard = new _components_main__WEBPACK_IMPORTED_MODULE_10__.MainCard(lizaInfo);
sashaCard.createCard();
kostyaCard.createCard();
lizaCard.createCard();
(0,_components_animation__WEBPACK_IMPORTED_MODULE_11__.setAppearAnimation)('.section__title');
(0,_components_animation__WEBPACK_IMPORTED_MODULE_11__.setAppearAnimation)('.section__underline');
(0,_components_animation__WEBPACK_IMPORTED_MODULE_11__.setAppearAnimation)('.about__wrapper');
var aboutCards = document.querySelectorAll('.about__card');
(0,_components_animation__WEBPACK_IMPORTED_MODULE_11__.setSlideFromRightAnimation)('#about__card', aboutCards[0]);
(0,_components_animation__WEBPACK_IMPORTED_MODULE_11__.setSlideFromRightAnimation)('#about-card-1', aboutCards[1], 0.2);
(0,_components_animation__WEBPACK_IMPORTED_MODULE_11__.setSlideFromRightAnimation)('#about-card-2', aboutCards[2], 0.4); // const guideCards = document.querySelectorAll('.guide__card')
// setSlideFromRightAnimation('#about__card', aboutCards[0])
// setSlideFromRightAnimation('#about-card-1', aboutCards[1], 0.2)
// setSlideFromRightAnimation('#about-card-2', aboutCards[2], 0.4)
}();
/******/ })()
;