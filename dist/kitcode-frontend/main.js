(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../raw-loader!../../postcss-loader/lib??embedded!./font-awesome.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/font-awesome/css/font-awesome.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/font-awesome/css/font-awesome.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/font-awesome/css/font-awesome.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('fontawesome-webfont.eot?v=4.7.0');\n  src: url('fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_images_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/images/images.component */ "./src/app/views/images/images.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "./src/app/router.ts");
/* harmony import */ var _views_root_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/root.component */ "./src/app/views/root.component.ts");
/* harmony import */ var _services_auth_authservice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth/authservice.service */ "./src/app/services/auth/authservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_images_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"],
                _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _views_root_component__WEBPACK_IMPORTED_MODULE_10__["RootComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _router__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_13__["AngularFontAwesomeModule"],
                ng2_ace_editor__WEBPACK_IMPORTED_MODULE_14__["AceEditorModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_15__["SimpleNotificationsModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastNoAnimationModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({
                    toastComponent: ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastNoAnimation"],
                })
            ],
            providers: [_services_auth_authservice_service__WEBPACK_IMPORTED_MODULE_11__["AuthserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*===============general css=========================*/\n@font-face{\n\tfont-family:'Montserrat';\n\tsrc:url('Montserrat-Medium.ttf');\n}\nhtml,body{\n\twidth:100%;\n\theight:100%;\n\tfont-family:'Montserrat',san-serif;\n\t-webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n}\na,a:hover,a:focus,a:active{\n\tcolor: #3399cc;\n\ttext-decoration:none;\n}\nbutton{\n\tbackground-color:#3399cc;\n\tcolor:#ffffff;\n}\n::-moz-selection{\n\n}\n::selection{\n\n}\n/*============ login css =====================*/\n.login-img-grid{\n\tbackground:url('login.png');\n\twidth:100%;\n\theight:678px;\n\tbackground-position-y:-30px; \n}\n.register-container{\n\tdisplay:none;\n}\n.login-tc-container{\n\tfont-size:12px;\n}\n.login-register-container{\n\tfont-size:14px;\n}\n.login-btn-container{\n\tborder-radius:4px;\n\tpadding-top:2px;\n\tpadding-bottom:2px;\n}\n.md-input {\n    position: relative;\n    margin-bottom: 15px;\n}\n.login-email-input{\n    position: relative;\n\tmargin-bottom: 50px;\t\n}\n.md-input .md-form-control {\n    font-size: 16px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    border: none;\n    border-bottom: 1px solid #CACACA;\n    box-shadow: none;\n    width: 100%;\n}\n.md-form-control:focus{\n\toutline:none;\n}\n.md-input label {\n        color: rgba(0, 0, 0, 0.5);\n        font-size: 14px;\n        font-weight: normal;\n        position: absolute;\n        pointer-events: none;\n        left: 5px;\n        top: 10px;\n        transition: 0.2s ease all;\n        -moz-transition: 0.2s ease all;\n        -webkit-transition: 0.2s ease all;\n    }\n.md-input .bar:before {\n        left: 50%;\n    }\n.md-input .bar:after {\n        right: 50%;\n    }\n.md-input .highlight {\n        position: absolute;\n        height: 60%;\n        width: 100px;\n        top: 25%;\n        left: 0;\n        pointer-events: none;\n        opacity: 0.5;\n    }\n.md-input .md-form-control:focus ~ label, .md-input .md-form-control:valid ~ label {\n    top: -15px;\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.5);\n    outline:none;\n}\n.md-input .bar:before, .md-input .bar:after {\n    content: '';\n    height: 1px;\n    width: 0;\n    bottom: 0px;\n    position: absolute;\n    background: #03A9F4;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n}\n.md-input .md-form-control:focus ~ .bar:before, .md-input .md-form-control:focus ~ .bar:after {\n    width: 50%;\n    outline:none;\n}\n/*=============custom checkbox====================*/\n.pure-checkbox *,\n.pure-radiobutton * {\n  box-sizing: border-box;\n}\n.pure-checkbox *:before,\n.pure-radiobutton *:before,\n.pure-checkbox *:after,\n.pure-radiobutton *:after {\n  box-sizing: border-box;\n}\n.pure-checkbox input[type=\"checkbox\"],\n.pure-radiobutton input[type=\"checkbox\"],\n.pure-checkbox input[type=\"radio\"],\n.pure-radiobutton input[type=\"radio\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.pure-checkbox input[type=\"checkbox\"]:focus + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:focus + label:before,\n.pure-checkbox input[type=\"radio\"]:focus + label:before,\n.pure-radiobutton input[type=\"radio\"]:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:hover + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:hover + label:before,\n.pure-checkbox input[type=\"radio\"]:hover + label:before,\n.pure-radiobutton input[type=\"radio\"]:hover + label:before {\n  border-color: #3399cc;\n  background-color: #f2f2f2;\n}\n.pure-checkbox input[type=\"checkbox\"]:active + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:active + label:before,\n.pure-checkbox input[type=\"radio\"]:active + label:before,\n.pure-radiobutton input[type=\"radio\"]:active + label:before {\n  transition-duration: 0s;\n}\n.pure-checkbox input[type=\"checkbox\"] + label,\n.pure-radiobutton input[type=\"checkbox\"] + label,\n.pure-checkbox input[type=\"radio\"] + label,\n.pure-radiobutton input[type=\"radio\"] + label {\n  position: relative;\n  padding: 5px 5px 5px 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.pure-checkbox input[type=\"checkbox\"] + label:before,\n.pure-radiobutton input[type=\"checkbox\"] + label:before,\n.pure-checkbox input[type=\"radio\"] + label:before,\n.pure-radiobutton input[type=\"radio\"] + label:before {\n  box-sizing: content-box;\n  content: '';\n  color:#3399cc;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  margin-top: -9px;\n  border: 2px solid #3399cc;\n  text-align: center;\n  transition: all 0.4s ease;\n}\n.pure-checkbox input[type=\"checkbox\"] + label:after,\n.pure-radiobutton input[type=\"checkbox\"] + label:after,\n.pure-checkbox input[type=\"radio\"] + label:after,\n.pure-radiobutton input[type=\"radio\"] + label:after {\n  box-sizing: content-box;\n  content: '';\n  background-color: #3399cc;\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n}\n.pure-checkbox input[type=\"checkbox\"]:disabled + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled + label:before {\n  border-color: #cccccc;\n}\n.pure-checkbox input[type=\"checkbox\"]:disabled:focus + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled:focus + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled:focus + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:disabled:hover + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled:hover + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled:hover + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled:hover + label:before {\n  background-color: inherit;\n}\n.pure-checkbox input[type=\"checkbox\"]:disabled:checked + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled:checked + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled:checked + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled:checked + label:before {\n  background-color: #cccccc;\n}\n.pure-checkbox input[type=\"checkbox\"] + label:after,\n.pure-radiobutton input[type=\"checkbox\"] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 3px;\n  width: 8px;\n  height: 3px;\n  margin-top: -5px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 0 0 3px 3px;\n  -o-border-image: none;\n     border-image: none;\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0);\n}\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after,\n.pure-radiobutton input[type=\"checkbox\"]:checked + label:after {\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n}\n.pure-checkbox input[type=\"radio\"]:checked + label:before,\n.pure-radiobutton input[type=\"radio\"]:checked + label:before {\n  -webkit-animation: borderscale 300ms ease-in;\n          animation: borderscale 300ms ease-in;\n  background-color: white;\n}\n.pure-checkbox input[type=\"radio\"]:checked + label:after,\n.pure-radiobutton input[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.pure-checkbox input[type=\"radio\"] + label:before,\n.pure-radiobutton input[type=\"radio\"] + label:before,\n.pure-checkbox input[type=\"radio\"] + label:after,\n.pure-radiobutton input[type=\"radio\"] + label:after {\n  border-radius: 50%;\n}\n.pure-checkbox input[type=\"checkbox\"]:checked + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:checked + label:before {\n  -webkit-animation: borderscale 200ms ease-in;\n          animation: borderscale 200ms ease-in;\n  background: #3399cc;\n}\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after,\n.pure-radiobutton input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n}\n.pure-checkbox.pure-checkbox-inline,\n.pure-radiobutton.pure-checkbox-inline,\n.pure-checkbox.pure-radiobutton-inline,\n.pure-radiobutton.pure-radiobutton-inline {\n  display: inline-block;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] + label {\n  position: relative;\n  padding: 5px 5px 5px 40px;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: block;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] + label:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  left: 0;\n  content: '';\n  color: #3399cc;\n  width: 35px;\n  height: 20px;\n  border-radius: 50px;\n  text-align: center;\n  transition: all 0.4s;\n  background-color: #d6d6d6;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] + label:after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  left: 0;\n  content: '';\n  background-color: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #d6d6d6;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:checked + label:before {\n  box-shadow: inset 0 0 0 10px #3399cc;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:checked + label:after {\n  left: 15px;\n  border-color: #3399cc;\n  background-color: #ffffff;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled + label {\n  cursor: default;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled + label:before {\n  box-shadow: inset 0 0 0 10px #e3e3e3;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled + label:after {\n  border-color: #e3e3e3;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled:checked + label:before {\n  box-shadow: inset 0 0 0 10px #999999;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled:checked + label:after {\n  border-color: #999999;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"] + label {\n  padding: 5px 40px 5px 5px;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"] + label:before {\n  left: auto;\n  right: 0;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"] + label:after {\n  left: auto;\n  right: 15px;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"]:checked + label:after {\n  left: auto;\n  right: 0;\n}\n/*===============register css==============================================*/\n.register-input{\n\tmargin-bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<section>\n\t<div class=\"row no-gutters\">\n\t\t<div class=\"col-lg-6 col-md-6 col-sm-6\">\n\t\t\t<div class=\"login-img-grid\"></div>\n\t\t</div>\n\t\t<div class=\"col-lg-6 col-md-6 col-sm-6\">\n\t\t\t<div class=\"login-container p-5\">\n\t\t\t\t<div class=\"mb-5\">\n\t\t\t\t\t<h2 class=\"text-center\">Sign In</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"login-form-container ml-5 mr-5 pt-5\">\n\t\t\t\t\t<form>\n\t\t              <div class=\"md-input login-email-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"email\" [(ngModel)]=\"emailLogin\" name=\"email\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Email ID</label>\n\t\t              </div>\n\t\t              <div class=\"md-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"password\" [(ngModel)]=\"passwordLogin\" name=\"password\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Password</label>\n\t\t              </div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn login-btn-container pr-4 pl-4\" (click)=\"login();\">Sign In</button>\n\t\t\t\t\t\t<span class=\"login-register-container\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New User? <a class=\"login-register-button\" href=\"#\">Create account</a></span>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"register-container p-5\">\n\t\t\t\t<div class=\"mb-4\">\n\t\t\t\t\t<h2 class=\"text-center\">Register</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"login-form-container ml-5 mr-5 pt-5\">\n\t\t\t\t\t<form>\n\t\t              <div class=\"md-input register-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"text\" [(ngModel)]=\"company\" name=\"company\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Full name</label>\n                      </div>\n                      <!-- <div class=\"md-input register-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"text\" [(ngModel)]=\"contact\" name=\"contact\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Point of contact</label>\n\t\t              </div> -->\n\t\t              <div class=\"md-input register-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"email\" [(ngModel)]=\"emailReg\" name=\"email\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Email ID</label>\n\t\t              </div>\n\t\t              <div class=\"md-input register-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"password\" [(ngModel)]=\"passwordReg\" name=\"password\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Password</label>\n\t\t              </div>\n\t\t              <div class=\"md-input\">\n\t\t                <input class=\"md-form-control\" required=\"\" type=\"password\" [(ngModel)]=\"passwordCon\" name=\"password\">\n\t\t                <span class=\"highlight\"></span>\n\t\t                <span class=\"bar\"></span>\n\t\t                <label>Confirm password</label>\n\t\t              </div>\n\t\t\t\t\t  <div class=\"pure-checkbox form-group form-check mb-4 pl-0\">\n\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\">\n\t\t\t\t\t    <label class=\"form-check-label login-tc-container\" for=\"exampleCheck2\">&nbsp;&nbsp;&nbsp;I agree all statement in <a href=\"#\">Terms & Conditions</a></label>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <button type=\"submit\" class=\"btn login-btn-container pr-4 pl-4\" (click)=\"register();\">Sign Up</button>\n\t\t\t\t\t  <span class=\"login-register-container\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an account? <a class=\"login-sign-button\" href=\"#\">Sign In</a></span>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\t\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/authservice.service */ "./src/app/services/auth/authservice.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService, route, toastrService) {
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.toastrService = toastrService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('click', '.login-register-button', function (e) {
                e.preventDefault();
                jquery__WEBPACK_IMPORTED_MODULE_3__('.login-container').fadeOut(200, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.register-container').fadeIn(200);
                });
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('click', '.login-sign-button', function (e) {
                e.preventDefault();
                jquery__WEBPACK_IMPORTED_MODULE_3__('.register-container').fadeOut(200, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('.login-container').fadeIn(200);
                });
            });
        });
        if (!this.authService.isTokenExpired()) {
            this.router.navigate(['/app/dashboard']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.emailLogin && this.passwordLogin) {
            if (this.emailLogin.indexOf('@') !== -1 && this.emailLogin.indexOf('.')) {
                this.authService.login(this.emailLogin, this.passwordLogin)
                    .subscribe(function (response) {
                    if (response) {
                        if (response.error) {
                            _this.toastrService.error('incorrect password', 'Error', { positionClass: 'toast-bottom-right' });
                        }
                        else {
                            _this.authService.setToken(response.token);
                            window.location.reload();
                            //this.router.navigate(['/app/dashboard']);
                        }
                    }
                    else {
                        _this.error = response.error;
                    }
                });
            }
            else {
                this.toastrService.error('Please enter valid email', 'Error', { positionClass: 'toast-bottom-right' });
            }
        }
        else {
            this.toastrService.error('Please enter all fields', 'Error', { positionClass: 'toast-bottom-right' });
        }
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.passwordCon == this.passwordReg) {
            if (this.emailReg && this.company && this.passwordReg && this.passwordCon) {
                this.authService.register(this.company, this.emailReg, this.passwordReg)
                    .subscribe(function (response) {
                    if (!response.error) {
                        _this.authService.setToken(response.token);
                        window.location.reload();
                        //this.router.navigate(['/app/dashboard']);
                    }
                    else {
                        _this.error = response.error;
                        _this.toastrService.error(response.error, 'Error', { positionClass: 'toast-bottom-right' });
                    }
                });
            }
            else {
                this.toastrService.error('Please enter all feild', 'Error', { positionClass: 'toast-bottom-right' });
            }
        }
        else {
            this.toastrService.error('Password does not match', 'Error', { positionClass: 'toast-bottom-right' });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_images_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/images/images.component */ "./src/app/views/images/images.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/profile/profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _views_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/root.component */ "./src/app/views/root.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/app/dashboard', pathMatch: 'full', canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'app', component: _views_root_component__WEBPACK_IMPORTED_MODULE_7__["RootComponent"], canActivate: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'dashboard', component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'image', component: _views_images_images_component__WEBPACK_IMPORTED_MODULE_4__["ImagesComponent"] },
            { path: 'profile/:index', component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authservice.service */ "./src/app/services/auth/authservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route) {
        if (!this.authService.isTokenExpired()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth/authservice.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth/authservice.service.ts ***!
  \******************************************************/
/*! exports provided: AuthserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthserviceService", function() { return AuthserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthserviceService = /** @class */ (function () {
    function AuthserviceService(http) {
        this.http = http;
    }
    AuthserviceService.prototype.login = function (email, password) {
        return this.http.post('http://kitcode.io/login', {
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    };
    AuthserviceService.prototype.register = function (name, email, password) {
        return this.http.post('http://kitcode.io/register', {
            name: name,
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err.error);
        }));
    };
    AuthserviceService.prototype.getToken = function () {
        return localStorage.getItem('jwt_token');
    };
    AuthserviceService.prototype.setToken = function (token) {
        localStorage.setItem('jwt_token', token);
    };
    AuthserviceService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthserviceService.prototype.isTokenExpired = function (token) {
        token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthserviceService.prototype.getUserData = function () {
        var token = this.getToken();
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        return decoded;
    };
    AuthserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthserviceService);
    return AuthserviceService;
}());



/***/ }),

/***/ "./src/app/services/custom-http/custom-http.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/custom-http/custom-http.service.ts ***!
  \*************************************************************/
/*! exports provided: CustomHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpService", function() { return CustomHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomHttpService = /** @class */ (function () {
    function CustomHttpService(http) {
        this.http = http;
        this.token = localStorage.getItem('jwt_token');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token })
        };
    }
    CustomHttpService.prototype.refreshToken = function () {
        this.token = localStorage.getItem('jwt_token');
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token })
        };
    };
    CustomHttpService.prototype.get = function (url) {
        this.refreshToken();
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    };
    CustomHttpService.prototype.post = function (url, data) {
        this.refreshToken();
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    };
    CustomHttpService.prototype.delete = function (url) {
        this.refreshToken();
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    };
    CustomHttpService.prototype.put = function (url, data) {
        this.refreshToken();
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
        }));
    };
    CustomHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomHttpService);
    return CustomHttpService;
}());



/***/ }),

/***/ "./src/app/services/http/http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http/http.service.ts ***!
  \***********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-http/custom-http.service */ "./src/app/services/custom-http/custom-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = 'http://kitcode.io/';
    }
    HttpService.prototype.getData = function (model) {
        return this.http.get(this.baseUrl + 'read/' + model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
    };
    HttpService.prototype.deleteData = function (model, id) {
        return this.http.delete(this.baseUrl + 'delete/' + model + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
    };
    HttpService.prototype.postData = function (model, data) {
        return this.http.post(this.baseUrl + 'create/' + model, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
    };
    HttpService.prototype.putData = function (model, data) {
        return this.http.put(this.baseUrl + 'update/' + model, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
    };
    HttpService.prototype.getDataFromOne = function (model, id) {
        return this.http.get(this.baseUrl + 'read/' + model + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
    };
    HttpService.prototype.getCourse = function (model) {
        return this.http.get(this.baseUrl + 'read/' + model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error); }));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_custom_http_custom_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomHttpService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1031;\n    padding: 48px 0 0;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    width: 64px;\n    background-color:#28447f;\n}\n.float-right crud-menu\n\n.sidebar-icons{\n\tcolor:#ffffff;\n\tpadding-bottom:15px;\n\tfont-size:30px;\n}\n.form-control:focus{\n\tbox-shadow:none;\n\tborder-color:#ced4da;\n}\n.content-section{\n\tmargin-left: 100px;\n    margin-top: 100px;\n}\n.create-image-button{\n\tbackground: transparent;\n    color: #3399cc;\n    border: 1px solid #3399cc;\n    border-radius: 5px;\n    padding-right: 25px;\n    padding-left: 25px;\n}\n.profile-image-container{\n\twidth:40px;\n\theight:40px;\n\tborder-radius:30px;\n}\n.image-container{\n\twidth: 270px;\n\tborder-radius: 10px;\n\tbox-shadow: -1px 3px 14px 2px #cccccc7a;\n    border:none;\n}\n.image-desc-container{\n\tfont-size:14px;\n\tcolor:#cccccc;\n}\n.image-running-info{\n\tcolor:#e86d32;\n}\n.image-idle-info{\n\tborder-right: 1px solid #afa6a6;border-left: 1px solid #afa6a6;color:#047afe;\n}\n.image-stop-info{\n\tcolor:#63a20f;\t\n}\n.card-img-top{\n\tborder-top-left-radius: 10px;border-top-right-radius: 10px;\n}\n.image-stats-container{\n\tborder-bottom-left-radius: 10px;border-bottom-right-radius: 10px;\n}\n.getKeyInfo{\n\tfont-size:14px;\n}\n.fa-bell{\n\tfont-size:20px;\n}\n.badge{\n\tposition: absolute;\n    top: 23px;\n    right:83px;\n    border-radius:10px;\n    text-align: center;\n    font-size: 9px;\n    padding: 2px 3px;\n    line-height: .9;\n    background-color:#3399cc;\n    color:#ffffff;\n}\n.search-container{\n\twidth:40%;\n\tmargin-right: auto;\n}\n.search-input{\n\tborder-bottom-right-radius:20px;\n\tborder-top-right-radius:20px;\n\tborder-left:0;\n}\n.search-input::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color:#cccccc;\n}\n.search-input::-ms-input-placeholder { /* Microsoft Edge */\n    color:#cccccc;\n}\n.search-icon-container{\n\tborder-bottom-left-radius:20px;\n\tborder-top-left-radius:20px;\n\tborder-right:0;\n\tbackground-color:#ffffff;\n\tcolor:#cccccc;\n}\n.crud-menu{\n\tcolor:#cccccc;\n}\n.crud-menu-delete:hover{\n\tcolor:#e03939;\n}"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body *ngIf=\"!sizeFlag\">\n  <section class=\"content-section\">\n      <div class=\"row no-gutters\">\n        <!--\n\t  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n\t  <div class=\"create-image-container\">\n            <button class=\"btn create-image-button\" (click)=\"createImage();\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Create</button>\n\t  </div>\n\t  </div>-->\n      </div>\n      <div class=\"mt-4\"></div>\n      <div class=\"row no-gutters\">\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngFor=\"let image of allImages; let i=index\">\n          <div class=\"card image-container\">\n            <!-- <img class=\"card-img-top\" src=\"../../../assets/images/image.png\" alt=\"Card image cap\"> -->\n            <div class=\"card-body\"><!--\n              <a href=\"#\" class=\"float-right crud-menu\" (click)=\"deleteImage(image.id);\">\n                <i class=\"crud-menu-delete fa fa-trash\" aria-hidden=\"true\"></i>\n\t      </a>-->\n              <h5 class=\"card-title\" #ref>{{image.label}}</h5>\n              <p class=\"image-desc-container card-text\">It is a long established fact that a reader will be distracted by the end of it.</p>\n              <a (click)=\"getVideos(i);\">&nbsp;&nbsp;&nbsp;Get started</a><br/>\n              <!-- <a [routerLink]=\"/app/profile\" data-target=\"#getKeyInfo\" data-toggle=\"modal\" class=\"text-uppercase getKeyInfo\" (click)=\"change(image);\"><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i>&nbsp;&nbsp;&nbsp;Get started</a><br/> -->\n            </div> \n            <!-- <div class=\"row bg-light no-gutters image-stats-container\">\n              <div class=\"col-lg-4 col-md-4 col-lg-4\">\n                <div class=\"text-center p-2\">\n                  <div class=\"image-running-info\">Running<br/>5</div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-lg-4\">\n                <div class=\"text-center p-2\">\n                  <div class=\"image-idle-info\">Idle<br/>12</div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-lg-4\">\n                <div class=\"text-center p-2\">\n                  <div class=\"image-stop-info\">Stopped<br/>10</div>\n                </div>\n              </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n  </section>\n\n  <!--modal for get key information-->\n  <div class=\"modal fade\" id=\"getKeyInfo\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{selected?.label}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Image Id:  {{selected?.id}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n  <script type=\"text/javascript\">\n    $(function(){\n    });\n  </script>\t\n  </body>\n\n  <h1 style=\"margin-top: 100px; margin-left: 100px;\" *ngIf=\"sizeFlag\">Device note suppoted</h1>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/bootstrap/dist/js/bootstrap.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, http, elementRef, toastrService) {
        this.router = router;
        this.http = http;
        this.elementRef = elementRef;
        this.toastrService = toastrService;
        this.allImages = [];
        this.flag = false;
        console.log('height', window.innerHeight);
        console.log('width', window.innerWidth);
    }
    DashboardComponent.prototype.change = function (image) {
        this.selected = image;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.sizeFlag = true;
        }
        this.populateCourses();
        //this.populateImage();
        jquery__WEBPACK_IMPORTED_MODULE_1__(function () {
        });
    };
    // populateImage(){
    //   this.http.getData('Image')
    //   .subscribe((res) => {
    //     this.allImages=res.entity;
    //     if(this.allImages.length==0){
    //       this.emptyMessage='you do not have any image';
    //       this.flag=true;
    //     }
    //   })
    // }
    //Delete image
    DashboardComponent.prototype.deleteImage = function (imageId) {
        var _this = this;
        this.http.deleteData('Image', imageId)
            .subscribe(function (res) {
            //this.populateImage();
            if (res.error) {
                _this.toastrService.error(res.error);
            }
            else {
                _this.toastrService.success(res.message);
            }
        });
    };
    DashboardComponent.prototype.createImage = function () {
        this.router.navigate(['/app/image']);
    };
    DashboardComponent.prototype.getVideos = function (index) {
        this.router.navigate(['/app/profile/' + index]);
    };
    DashboardComponent.prototype.populateCourses = function () {
        var _this = this;
        this.http.getCourse('Course')
            .subscribe(function (res) {
            _this.allImages = res.entity;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DashboardComponent.prototype, "lable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ref'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "ref", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/images/images.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/images/images.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*===============general css=========================*/\n@font-face{\n\tfont-family:'Montserrat';\n\tsrc:url('Montserrat-Medium.ttf');\n}\nhtml,body{\n\twidth:100%;\n\theight:100%;\n\tfont-family:'Montserrat',san-serif;\n\t-webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n}\na,a:hover,a:focus,a:active{\n\tcolor: #3399cc;\n\ttext-decoration:none;\n\toutline:none;\n}\n.navbar-brand:focus, .navbar-brand:hover{\ncolor: #ffffff;\n}\np,li,label,span{\n\tfont-size:13px;\n}\nbutton{\n\tbackground-color:#3399cc;\n\tcolor:#ffffff;\n\tfont-size:13px !important;\n}\n::-moz-selection{\n\tbackground-color:#3399cc7a;\n\tcolor:#ffffff;\n}\n::selection{\n\tbackground-color:#3399cc7a;\n\tcolor:#ffffff;\n}\n.form-control:focus{\n\tbox-shadow:none;\n\tborder-color:#ced4da;\n}\n.profile-menu{\n\tposition: absolute !important;\n}\n.profile-menu::before {\n   position: absolute;\n   top: -7px;\n   right: 25px;\n   display: inline-block;\n   border-right: 7px solid transparent;\n   border-bottom: 7px solid #CCC;\n   border-left: 7px solid transparent;\n   border-bottom-color: rgba(0, 0, 0, 0.2);\n   content: '';\n }\n.profile-menu::after {\n    position: absolute;\n    top: -6px;\n    right: 25px;\n    display: inline-block;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid white;\n    border-left: 6px solid transparent;\n    content: '';\n  }\n.md-input {\n    position: relative;\n    margin-bottom: 15px;\n}\n.md-input .md-form-control {\n    font-size: 16px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    border: none;\n    border-bottom: 1px solid #CACACA;\n    box-shadow: none;\n    width: 100%;\n}\n.md-form-control:focus{\n\toutline:none;\n}\n.md-input label {\n    color: rgba(0, 0, 0, 0.5);\n    font-size: 14px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n}\n.md-input .bar:before {\n    left: 50%;\n}\n.md-input .bar:after {\n    right: 50%;\n}\n.md-input .highlight {\n    position: absolute;\n    height: 60%;\n    width: 100px;\n    top: 25%;\n    left: 0;\n    pointer-events: none;\n    opacity: 0.5;\n}\n.md-input .md-form-control:focus ~ label, .md-input .md-form-control:valid ~ label {\n\ttop: -15px;\n\tfont-size: 14px;\n\tcolor: rgba(0, 0, 0, 0.5);\n\toutline:none;\n}\n.md-input .bar:before, .md-input .bar:after {\n    content: '';\n    height: 1px;\n    width: 0;\n    bottom: 0px;\n    position: absolute;\n    background: #03A9F4;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n}\n.md-input .md-form-control:focus ~ .bar:before, .md-input .md-form-control:focus ~ .bar:after {\n    width: 50%;\n    outline:none;\n}\n.navbar{\n\tbackground-color: #3399cc;\n}\n.navbar-brand{\n\tcolor:#ffffff;\n}\n/*=============custom checkbox====================*/\n.pure-checkbox *,\n.pure-radiobutton * {\n  box-sizing: border-box;\n}\n.pure-checkbox *:before,\n.pure-radiobutton *:before,\n.pure-checkbox *:after,\n.pure-radiobutton *:after {\n  box-sizing: border-box;\n}\n.pure-checkbox input[type=\"checkbox\"],\n.pure-radiobutton input[type=\"checkbox\"],\n.pure-checkbox input[type=\"radio\"],\n.pure-radiobutton input[type=\"radio\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.pure-checkbox input[type=\"checkbox\"]:focus + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:focus + label:before,\n.pure-checkbox input[type=\"radio\"]:focus + label:before,\n.pure-radiobutton input[type=\"radio\"]:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:hover + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:hover + label:before,\n.pure-checkbox input[type=\"radio\"]:hover + label:before,\n.pure-radiobutton input[type=\"radio\"]:hover + label:before {\n  border-color: #3399cc;\n  background-color: #f2f2f2;\n}\n.pure-checkbox input[type=\"checkbox\"]:active + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:active + label:before,\n.pure-checkbox input[type=\"radio\"]:active + label:before,\n.pure-radiobutton input[type=\"radio\"]:active + label:before {\n  transition-duration: 0s;\n}\n.pure-checkbox input[type=\"checkbox\"] + label,\n.pure-radiobutton input[type=\"checkbox\"] + label,\n.pure-checkbox input[type=\"radio\"] + label,\n.pure-radiobutton input[type=\"radio\"] + label {\n  position: relative;\n  padding: 5px 5px 5px 2em;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.pure-checkbox input[type=\"checkbox\"] + label:before,\n.pure-radiobutton input[type=\"checkbox\"] + label:before,\n.pure-checkbox input[type=\"radio\"] + label:before,\n.pure-radiobutton input[type=\"radio\"] + label:before {\n  box-sizing: content-box;\n  content: '';\n  color:#3399cc;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 12px;\n  height: 12px;\n  margin-top: -9px;\n  border: 2px solid #3399cc;\n  text-align: center;\n  transition: all 0.4s ease;\n}\n.pure-checkbox input[type=\"checkbox\"] + label:after,\n.pure-radiobutton input[type=\"checkbox\"] + label:after,\n.pure-checkbox input[type=\"radio\"] + label:after,\n.pure-radiobutton input[type=\"radio\"] + label:after {\n  box-sizing: content-box;\n  content: '';\n  background-color: #3399cc;\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 50%;\n          transform-origin: 50%;\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n}\n.pure-checkbox input[type=\"checkbox\"]:disabled + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled + label:before {\n  border-color: #cccccc;\n}\n.pure-checkbox input[type=\"checkbox\"]:disabled:focus + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled:focus + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled:focus + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled:focus + label:before,\n.pure-checkbox input[type=\"checkbox\"]:disabled:hover + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled:hover + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled:hover + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled:hover + label:before {\n  background-color: inherit;\n}\n.pure-checkbox input[type=\"checkbox\"]:disabled:checked + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:disabled:checked + label:before,\n.pure-checkbox input[type=\"radio\"]:disabled:checked + label:before,\n.pure-radiobutton input[type=\"radio\"]:disabled:checked + label:before {\n  background-color: #cccccc;\n}\n.pure-checkbox input[type=\"checkbox\"] + label:after,\n.pure-radiobutton input[type=\"checkbox\"] + label:after {\n  background-color: transparent;\n  top: 50%;\n  left: 3px;\n  width: 8px;\n  height: 3px;\n  margin-top: -5px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 0 0 3px 3px;\n  -o-border-image: none;\n     border-image: none;\n  -webkit-transform: rotate(-45deg) scale(0);\n          transform: rotate(-45deg) scale(0);\n}\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after,\n.pure-radiobutton input[type=\"checkbox\"]:checked + label:after {\n  content: '';\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n  transition: -webkit-transform 200ms ease-out;\n  transition: transform 200ms ease-out;\n  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;\n}\n.pure-checkbox input[type=\"radio\"]:checked + label:before,\n.pure-radiobutton input[type=\"radio\"]:checked + label:before {\n  -webkit-animation: borderscale 300ms ease-in;\n          animation: borderscale 300ms ease-in;\n  background-color: white;\n}\n.pure-checkbox input[type=\"radio\"]:checked + label:after,\n.pure-radiobutton input[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.pure-checkbox input[type=\"radio\"] + label:before,\n.pure-radiobutton input[type=\"radio\"] + label:before,\n.pure-checkbox input[type=\"radio\"] + label:after,\n.pure-radiobutton input[type=\"radio\"] + label:after {\n  border-radius: 50%;\n}\n.pure-checkbox input[type=\"checkbox\"]:checked + label:before,\n.pure-radiobutton input[type=\"checkbox\"]:checked + label:before {\n  -webkit-animation: borderscale 200ms ease-in;\n          animation: borderscale 200ms ease-in;\n  background: #3399cc;\n}\n.pure-checkbox input[type=\"checkbox\"]:checked + label:after,\n.pure-radiobutton input[type=\"checkbox\"]:checked + label:after {\n  -webkit-transform: rotate(-45deg) scale(1);\n          transform: rotate(-45deg) scale(1);\n}\n.pure-checkbox.pure-checkbox-inline,\n.pure-radiobutton.pure-checkbox-inline,\n.pure-checkbox.pure-radiobutton-inline,\n.pure-radiobutton.pure-radiobutton-inline {\n  display: inline-block;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] + label {\n  position: relative;\n  padding: 5px 5px 5px 40px;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: block;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] + label:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  left: 0;\n  content: '';\n  color: #3399cc;\n  width: 35px;\n  height: 20px;\n  border-radius: 50px;\n  text-align: center;\n  transition: all 0.4s;\n  background-color: #d6d6d6;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"] + label:after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  left: 0;\n  content: '';\n  background-color: #ffffff;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #d6d6d6;\n  transition: all 0.2s;\n  box-sizing: border-box;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:checked + label:before {\n  box-shadow: inset 0 0 0 10px #3399cc;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:checked + label:after {\n  left: 15px;\n  border-color: #3399cc;\n  background-color: #ffffff;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled + label {\n  cursor: default;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled + label:before {\n  box-shadow: inset 0 0 0 10px #e3e3e3;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled + label:after {\n  border-color: #e3e3e3;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled:checked + label:before {\n  box-shadow: inset 0 0 0 10px #999999;\n}\n.pure-checkbox-toggle input[type=\"checkbox\"]:disabled:checked + label:after {\n  border-color: #999999;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"] + label {\n  padding: 5px 40px 5px 5px;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"] + label:before {\n  left: auto;\n  right: 0;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"] + label:after {\n  left: auto;\n  right: 15px;\n}\n.pure-checkbox-toggle--right input[type=\"checkbox\"]:checked + label:after {\n  left: auto;\n  right: 0;\n}\n/*============ login css =====================*/\n.login-img-grid{\n\tbackground:url('login.png');\n\twidth:100%;\n\theight:678px;\n\tbackground-position-y:-30px; \n}\n.register-container{\n\tdisplay:none;\n}\n.login-tc-container{\n\tfont-size:12px;\n}\n.login-register-container{\n\tfont-size:14px;\n}\n.login-btn-container{\n\tborder-radius:4px;\n\tpadding-top:2px;\n\tpadding-bottom:2px;\n}\n.login-email-input{\n    position: relative;\n\tmargin-bottom: 50px;\t\n}\n/*===============register css==============================================*/\n.register-input{\n\tmargin-bottom: 30px;\n}\n/*===============dashboard.css============================================*/\n/*.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1031;\n    padding: 48px 0 0;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    width: 64px;\n    background-color:#002c42;\n}*/\n.nav-text{\n \tfont-size:14px;\n }\n.sidebar-icons{\n\tcolor:#ffffffa1;\n\tpadding:0rem 2.5rem;\n\tfont-size:25px;\n}\n.sidebar-icons.active{\n\tcolor:#ffffff;\n}\n.sidebar-icons:hover,.sidebar-icons:focus,.sidebar-icons:active{\n\tcolor:#ffffff;\n}\n.sidebar-icons.active:hover,.sidebar-icons.active:focus,.sidebar-icons.active:active{\n\tcolor:#ffffff;\n}\n.content-section{\n    margin-top: 100px;\n    margin-left: 100px;\n}\n.create-image-button{\n\tbackground: transparent;\n    color: #3399cc;\n    border: 2px solid #3399cc;\n    border-radius: 4px;\n    padding-right: 25px;\n    padding-left: 25px;\n    padding-top:4px;\n    font-size:13px;\n    padding-bottom:4px;\n}\n.create-image-button:focus{\n\tbox-shadow:none;\n}\n.profile-image-container{\n\twidth:40px;\n\theight:40px;\n\tborder-radius:30px;\n}\n.image-container{\n    border-radius: 10px;\n    box-shadow: 0px 3px 13px 1px #cccccc7a;\n    border:none;\n}\n.image-desc-container{\n\tfont-size:14px;\n\tcolor:#cccccc;\n}\n.image-running-info{\n\tcolor:#e86d32;\n}\n.image-running-info>span,.image-idle-info>span,.image-stop-info>span{\n\tfont-size:12px;\n}\n.image-idle-info{\n\tborder-right: 1px solid #afa6a62e;border-left: 1px solid #afa6a62e;color:#3399cc;\n}\n.image-stop-info{\n\tcolor:#63a20f;\t\n}\n.card-img-top{\n\tborder-top-left-radius: 10px;border-top-right-radius: 10px;\n}\n.image-stats-container{\n\tborder-bottom-left-radius: 10px;border-bottom-right-radius: 10px;\n}\n.getKeyInfo{\n\tfont-size:14px;\n}\n.fa-bell{\n\tfont-size:20px;\n\tcolor:#cccccc;\n}\n.badge{\n\tposition: absolute;\n    top: 23px;\n    right:83px;\n    border-radius:10px;\n    text-align: center;\n    font-size: 9px;\n    padding: 2px 3px;\n    line-height: .9;\n    background-color:#3399cc;\n    color:#ffffff;\n}\n.search-container{\n\twidth:25%;\n\tmargin-left: auto;\n}\n.search-input{\n\tborder-bottom-right-radius:20px;\n\tborder-top-right-radius:20px;\n\tborder-left:0;\n}\n.search-input::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n.search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color:#cccccc;\n}\n.search-input::-ms-input-placeholder { /* Microsoft Edge */\n    color:#cccccc;\n}\n.search-icon-container{\n\tborder-bottom-left-radius:20px;\n\tborder-top-left-radius:20px;\n\tborder-right:0;\n\tbackground-color:#ffffff;\n\tcolor:#cccccc;\n}\n.crud-menu{\n\tcolor:#cccccc;\n}\n.keyModal{\n\tmargin: 12.75rem auto;\n}\n/*=================create.css====================================*/\n.add-component-button{\n\tbackground: #3399cc;\n  color: #ffffff;\n  border: 2px solid #3399cc;\n  border-radius: 4px;\n  padding-right: 25px;\n  padding-left: 25px;\n  padding-top:4px;\n  font-size:13px;\n  padding-bottom:4px;\t\n}\n.component-list-container{\n\toverflow:auto;\n\toverflow-x: auto;\n}\n.remove-list-component{\n\tcursor:pointer;\n}\n.select-os{\n\tbackground: transparent;\n    color: #3399cc;\n    border: 2px solid #3399cc;\n    border-radius: 4px;\n    padding-right: 10px;\n    padding-left: 16px;\n    padding-top: 4px;\n    font-size:13px;\n    padding-bottom: 7px;\n}\n.component-list-item{\n\tdirection:ltr;\n}\n.version-select-item:not(:last-child){\n\tmargin-right:1.5rem;\n}\n.version-select-item:last-child{\n\tmargin-left:1.5rem;\n}\n.image-upload-container>div{\n\tborder:1px dashed;\n\tborder-radius:5px;\n}\n.col-form-label{\n\tfont-size:13px;\n}\n.generate-button{\n\tbackground: #3399cc;\n  color: #ffffff;\n  border: 2px solid #3399cc;\n  border-radius: 4px;\n  padding-right: 25px;\n  padding-left: 25px;\n  padding-top:4px;\n  font-size:13px;\n  padding-bottom:4px;\n}\n.save-image-button{\n\tbackground: #3399cc;\n  color: #ffffff;\n  border: 2px solid #3399cc;\n  border-radius: 4px;\n  padding-right: 25px;\n  padding-left: 25px;\n  padding-top:4px;\n  font-size:13px;\n  padding-bottom:4px;\n}\n.activatedImage{\n  border:2px solid #000000;\n}\n.popOverImage,.popOverLogo{\n  cursor:pointer;\n}\n.center-image{\n    width: 30px;\n    height:30px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.previewImageBlock{\n  position:relative;\n  text-align:center;\n  display:none;\n}\n.previewImage{\n  width:200px;\n  height:200px;\n}\n.center-image{\n  width: 30px;\n  height:30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*image name css*/\n.image-name-field{\n  border:1px solid #3399cc;\n  font-size:13px;\n}\n.image-name-field:focus,.image-name-field:hover,.image-name-field:active{\n  border:1px solid #3399cc;\n}\n.image-name-field::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #5c5b5b;\n    opacity: 1; /* Firefox */\n    font-size:12px;\n}\n.image-name-field:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #5c5b5b;\n    opacity: 1; /* Firefox */\n    font-size:12px;\n}\n.image-name-field::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #5c5b5b;\n    opacity: 1; /* Firefox */\n    font-size:12px;\n}\n.image-name-field::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #5c5b5b;\n    opacity: 1; /* Firefox */\n    font-size:12px;\n}\n.image-name-field:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color:#5c5b5b;\n    font-size:12px;\n}\n.image-name-field::-ms-input-placeholder { /* Microsoft Edge */\n    color:#5c5b5b;\n    font-size:12px;\n}\n.remove-list-icon{\n  background-color: transparent;\n  border: none;\n  color: #000000;\n}\n/*------------Toastr Notifications-------------*/\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px /*!important*/;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .toast:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/views/images/images.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/images/images.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<section class=\"content-section\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <div class=\"create-image-container\">\n          <h5>Creating Image</h5>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-lg-6 col-md-6\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"image-name-field form-control\" placeholder=\"Enter the Image Name\" [(ngModel)]=\"label\">\n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-6\"></div>\n          <div class=\"col-lg-3 col-md-3\">\n            <p class=\"mt-1\">OS&nbsp;Environment</p>\n          </div>\n          <div class=\"col-lg-9 col-md-9\">\n            <div class=\"form-group\">\n              <select class=\"select-os\" id=\"exampleFormControlSelect1\">\n                <option #linux>Ubuntu</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-lg-12 col-md-12 mt-5\">\n            <p>Components</p>\n          </div>\n          <div class=\"col-lg-12 col-md-12\">\n            <ul class=\"list-inline\">\n              <li class=\"version-select-item list-inline-item\">\n                  <select class=\"select-os\" id=\"exampleFormControlSelect1\"  #select (change)=\"uniqueV();\">\n                    <option value=\"\" selected=\"\" disabled=\"\" id=\"choose_loc\">Dependency</option>\n                    <option>Angular</option>\n                    <option>Node</option>\n                    <option>Python</option>\n                    <option>Jupyter</option>\n                    <option>Tensorflow</option>\n                  </select>\n              </li>\n              <li class=\"version-select-item list-inline-item\">\n                  <select class=\"select-os\" id=\"exampleFormControlSelect1\"  #version>\n                    <option value=\"\" selected=\"\" disabled=\"\" id=\"choose_loc\">Version</option>\n                    <option *ngFor=\"let tool of versionArray\">{{ tool }}</option>\n                  </select>\n              </li>\n              <li class=\"version-select-item list-inline-item\">\n                <button class=\"btn add-component-button\" (click)=\"addTools();\">Add</button>\n              </li>\n            </ul>\n            <div class=\"component-list-container\">\n              <ul class=\"list-group component-list\">\n                  <li class='component-list-item list-group-item d-flex justify-content-between align-items-center' *ngFor=\"let tool of allTools; let i = index\"> \n                    <span>{{tool.sTool}}{{tool.sVersion}}\n                  </span> \n                  <span class='remove-list-component'> \n                    <button class=\"remove-list-icon\" (click)=\"removeTools(i);\">\n                      <i class=\"fa fa-times-circle-o\" aria-hidden=\"true\"></i>\n                    </button>\n                    </span>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <br>\n          <div class=\"col-lg-12 col-md-12 mt-5\">\n            <button class=\"btn generate-button\" (click)=\"createDockerfile();\">Generate</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <div>\n          <ace-editor\n       [(text)]=\"text\"\n        #editor style=\"height:400px;\"></ace-editor>\n        </div>\n        <br/>\n          <button class=\"btn save-image-button mt-3\" (click)=\"createImage();\">Save</button>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--image upload and color change section modal section-->\n<div class=\"modal fade\" id=\"getKeyInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"border:none;\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n<div toastContainer ></div>"

/***/ }),

/***/ "./src/app/views/images/images.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/images/images.component.ts ***!
  \**************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/bootstrap/dist/js/bootstrap.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var _node_modules_bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var _node_modules_jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(router, http, eleRef, toastrService) {
        this.router = router;
        this.http = http;
        this.eleRef = eleRef;
        this.toastrService = toastrService;
        this.options = { maxLines: 1000, printMargin: false }; //For ace editor
        this.docker = {
            'stringOs': 'FROM ubuntu:latest\nRUN rm /bin/sh && ln -s /bin/bash /bin/sh\nRUN apt-get update\&& apt-get install -y curl\&& apt-get -y autoclean\n',
            'Node': '',
            'Angular': '',
            'Jupyter': '\nRUN pip3 install --upgrade pip\nRUN pip3 install numpy pandas sklearn matplotlib seaborn jupyter pyyaml h5py\nRUN pip3 install keras --no-deps\nRUN ["mkdir", "notebooks"]\nCOPY jupyter_notebook_config.py /root/.jupyter/\nCOPY run_jupyter.sh /\nEXPOSE 8888 6006\nVOLUME /notebooks\nCMD ["/run_jupyter.sh"]\n',
            'Tensorflow': 'RUN pip3 install tensorflow',
            'Python': '',
        };
        this.allVersion = {
            'Angular': [2, 3, 5, 6],
            'Node': [4, 6, 8],
            'Python': [2, 3]
        };
        this.versionArray = [];
        this.selectedVersion = [];
        this.text = ""; //For ace editor
        this.customPosition = {
            row: 0,
            column: 0
        };
        this.allTools = [];
        this.stringOfAllImages = [];
    }
    ImagesComponent.prototype.ngOnInit = function () {
        //Notifucations
        this.toastrService.overlayContainer = this.toastContainer;
        jquery__WEBPACK_IMPORTED_MODULE_2__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('[data-toggle="popover"]').popover();
            var popoverImage = "<ul class='list-inline'> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='f' checked='checked'><label class='activatedImage image-template-select mb-0' for='f'><img style='width:30px;height:30px;' src='../../../../assets/images/1.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='a'><label class='image-template-select mb-0' for='a'><img style='width:30px;height:30px;' src='../../../../assets/images/2.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='b'><label class='image-template-select mb-0' for='b'><img style='width:30px;height:30px;' src='../../../../assets/images/3.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='c'><label class='image-template-select mb-0' for='c'><img style='width:30px;height:30px;' src='../../../../assets/images/4.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='d'><label class='image-template-select mb-0' for='d'><img style='width:30px;height:30px;' src='../../../../assets/images/5.gif'></label></li> <li class='list-inline-item'><input type='radio' class='d-none' name='a' id='e'><label class='image-template-select mb-0' for='e'><img style='width:30px;height:30px;' src='../../../../assets/images/1.gif'></label></li> </ul>";
            var popoverLogo = "<ul class='list-inline'> <li class='list-inline-item'><i class='px-2 py-1' style='color:#3399cc;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#6033cc;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#cc3396;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#cc3333;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#ccb933;'>logo 1</i></li> <li class='list-inline-item'><i class='px-2 py-1' style='color:#43cc33;'>logo 1</i></li> </ul>";
            jquery__WEBPACK_IMPORTED_MODULE_2__('.popOverImage').popover({
                container: 'body',
                content: popoverImage,
                html: true
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).on('change', '.preview-check-container', function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__('#previewCheck')[0].checked) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.previewImageBlock').slideDown();
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.previewImageBlock').slideUp();
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(":file").change(function () {
                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    reader.onload = imageIsLoaded;
                    reader.readAsDataURL(this.files[0]);
                }
            });
            function imageIsLoaded(e) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#myImg').attr('src', e.target.result);
                jquery__WEBPACK_IMPORTED_MODULE_2__('.previewLogo').attr('src', e.target.result);
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).on('click', '.image-template-select', function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.image-template-select').removeClass('activatedImage');
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass('activatedImage');
                if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).hasClass('activatedImage')) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.popOverImage').children()[0].src = jquery__WEBPACK_IMPORTED_MODULE_2__(this).children()[0].src;
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.previewImage')[0].src = jquery__WEBPACK_IMPORTED_MODULE_2__(this).children()[0].src;
                }
            });
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(".sidebar-icons").click(function () {
                // remove classes from all
                jquery__WEBPACK_IMPORTED_MODULE_2__(".sidebar-icons").removeClass("active");
                // add class to the one we clicked
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass("active");
            });
            // $(document).on('click','.add-component-button',function(){
            //     $('.component-list').append("<li class='component-list-item list-group-item d-flex justify-content-between align-items-center'> <span #tools>Windows<br/>7</span> <span class='remove-list-component'> <i class='fa fa-times-circle-o' aria-hidden='true'></i></span> </li>");
            //     if($('.component-list-container').height()>150){
            //         $('.component-list-container').height(200);
            //     }
            // }); 
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).on('click', '.remove-list-component', function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_2__('.component-list-item').length < 3) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.component-list-container').css('height', '100%');
                }
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).parent().remove();
            });
        });
    };
    // Ace code Editor
    ImagesComponent.prototype.ngAfterViewInit = function () {
        this.editor.setTheme("eclipse");
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });
        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {
            }
        });
        this.editor.setOptions({
            fontFamily: "courier",
            fontSize: "10pt"
        });
    };
    //Create image
    ImagesComponent.prototype.createImage = function () {
        var _this = this;
        if (this.label) {
            this.http.postData('Image', {
                label: this.label,
                file: this.editor.value
            }).subscribe(function (res) {
                if (res.status == 200) {
                    _this.toastrService.success('Image creation started', 'Success', { positionClass: 'toast-bottom-right' });
                }
                else {
                    _this.toastrService.error('Dockerfile is not correct', 'Error', { positionClass: 'toast-bottom-right' });
                }
            });
        }
        else {
            this.toastrService.error('Image name is empty', 'Error', { positionClass: 'toast-bottom-right' });
        }
    };
    ImagesComponent.prototype.createDockerfile = function () {
        var _this = this;
        var finalString = '';
        this.allTools.forEach(function (tool) {
            finalString = finalString + _this.docker[tool.sTool];
        });
        this.editor.value = this.docker.stringOs + finalString;
    };
    //Popup model
    ImagesComponent.prototype.openModel1 = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#getKeyInfo').modal('show');
    };
    //Popup model
    ImagesComponent.prototype.openModel2 = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#getKeyInfo').modal('show');
    };
    ImagesComponent.prototype.addTools = function () {
        var _this = this;
        var flag = true;
        this.version = this.En_version.nativeElement.value;
        if (this.tool.nativeElement.value == "") {
            this.toastrService.warning('Please select component', 'Warning', { positionClass: 'toast-bottom-right' });
        }
        else {
            this.allTools.forEach(function (tool) {
                if (tool.sTool == _this.tool.nativeElement.value) {
                    _this.toastrService.warning(_this.tool.nativeElement.value + ' is already selected', 'Warning', { positionClass: 'toast-bottom-right' });
                    flag = false;
                }
            });
            if (flag) {
                if (this.tool.nativeElement.value == 'Node') {
                    this.docker.Node = '\nENV NVM_DIR /usr/local/nvm\nENV NODE_VERSION ' + this.En_version.nativeElement.value + '.0.0\nRUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash\nRUN source $NVM_DIR/nvm.sh\&& nvm install $NODE_VERSION\&& nvm alias default $NODE_VERSION\&& nvm use default\nENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules\nENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH';
                }
                else if (this.tool.nativeElement.value == 'Angular' && this.En_version.nativeElement.value != "") {
                    this.docker.Angular = '\nRUN npm install -g @angular/cli@' + this.En_version.nativeElement.value + '.0.0\n';
                }
                else if (this.tool.nativeElement.valsue == 'Python') {
                    this.docker.Python = 'RUN apt-get update && \ \napt-get install -y python' + this.En_version.nativeElement.value + '.0 python-dev python-pip python-virtualenv && \ \nrm -rf /var/lib/apt/lists/*\n';
                }
                this.allTools.push({ sTool: this.tool.nativeElement.value, sVersion: this.En_version.nativeElement.value });
                console.log('version', this.version);
            }
        }
    };
    ImagesComponent.prototype.removeTools = function (index) {
        var _this = this;
        this.allTools.splice(index, 1);
        var finalString = '';
        var alterAllTools = [];
        alterAllTools = this.allTools;
        alterAllTools.forEach(function (tool) {
            finalString = finalString + _this.docker[tool.sTool];
        });
        this.docker.Node = '';
        this.docker.Angular = '';
        this.docker.Python = '';
    };
    ImagesComponent.prototype.uniqueV = function () {
        if (this.tool.nativeElement.value == 'Node') {
            this.versionArray = this.allVersion.Node;
        }
        else if (this.tool.nativeElement.value == 'Angular') {
            this.versionArray = this.allVersion.Angular;
        }
        else if (this.tool.nativeElement.value == 'Python') {
            this.versionArray = this.allVersion.Python;
        }
        else if (this.tool.nativeElement.value == 'Jupyter') {
            this.versionArray = [];
        }
        else if (this.tool.nativeElement.value == 'Tensorflow') {
            this.versionArray = [];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('linux'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "linux", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('select'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "tool", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lools'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "tools", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('node'),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editor'),
        __metadata("design:type", Object)
    ], ImagesComponent.prototype, "editor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('version'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagesComponent.prototype, "En_version", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"]),
        __metadata("design:type", ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastContainerDirective"])
    ], ImagesComponent.prototype, "toastContainer", void 0);
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/views/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/views/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/profile/profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face{\n\tfont-family:'Montserrat';\n\tsrc:url('Montserrat-Medium.ttf');\n}\n\n.sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1031;\n    padding: 48px 0 0;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    width: 64px;\n    background-color:#28447f;\n}\n\n.float-right crud-menu\n\n.sidebar-icons{\n\tcolor:#ffffff;\n\tpadding-bottom:15px;\n\tfont-size:30px;\n}\n\n.form-control:focus{\n\tbox-shadow:none;\n\tborder-color:#ced4da;\n}\n\n.content-section{\n\tmargin-left: 80px;\n    margin-top: 90px;\n}\n\n.create-image-button{\n\tbackground: transparent;\n    color: #3399cc;\n    border: 1px solid #3399cc;\n    border-radius: 5px;\n    padding-right: 25px;\n    padding-left: 25px;\n}\n\n.profile-image-container{\n\twidth:40px;\n\theight:40px;\n\tborder-radius:30px;\n}\n\n.image-container{\n\twidth: 270px;\n\tborder-radius: 10px;\n\tbox-shadow: -1px 3px 14px 2px #cccccc7a;\n    border:none;\n}\n\n.image-desc-container{\n\tfont-size:14px;\n\tcolor:#cccccc;\n}\n\n.image-running-info{\n\tcolor:#e86d32;\n}\n\n.image-idle-info{\n\tborder-right: 1px solid #afa6a6;border-left: 1px solid #afa6a6;color:#047afe;\n}\n\n.image-stop-info{\n\tcolor:#63a20f;\t\n}\n\n.card-img-top{\n\tborder-top-left-radius: 10px;border-top-right-radius: 10px;\n}\n\n.image-stats-container{\n\tborder-bottom-left-radius: 10px;border-bottom-right-radius: 10px;\n}\n\n.getKeyInfo{\n\tfont-size:14px;\n}\n\n.fa-bell{\n\tfont-size:20px;\n}\n\n.badge{\n\tposition: absolute;\n    top: 23px;\n    right:83px;\n    border-radius:10px;\n    text-align: center;\n    font-size: 9px;\n    padding: 2px 3px;\n    line-height: .9;\n    background-color:#3399cc;\n    color:#ffffff;\n}\n\n.search-container{\n\twidth:40%;\n\tmargin-right: auto;\n}\n\n.search-input{\n\tborder-bottom-right-radius:20px;\n\tborder-top-right-radius:20px;\n\tborder-left:0;\n}\n\n.search-input::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color:#cccccc;\n}\n\n.search-input::-ms-input-placeholder { /* Microsoft Edge */\n    color:#cccccc;\n}\n\n.search-icon-container{\n\tborder-bottom-left-radius:20px;\n\tborder-top-left-radius:20px;\n\tborder-right:0;\n\tbackground-color:#ffffff;\n\tcolor:#cccccc;\n}\n\n.crud-menu{\n\tcolor:#cccccc;\n}\n\n.crud-menu-delete:hover{\n\tcolor:#e03939;\n}\n\n.playlist-item{\n    padding:10px;\n\tbox-shadow: -1px 3px 14px 2px #cccccc7a;\n}\n\n.playlist-container{\n    list-style-type:none;\n\tpadding-left:0;\n\toverflow-y: auto;\n\theight: 150px;\n\twidth: 500px;\n}"

/***/ }),

/***/ "./src/app/views/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <div class=\"row\" style=\"margin-top: 20px;\">\n             <section class=\"content-section\"> -->\n                  <!-- <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                    <div class=\"create-image-container\" id=\"stage\">\n                        <iframe height = \"400\" style=\"width:100%;height:400px;\" [src]=\"youtubeUrl\" frameborder=\"0\" allowfullscreen></iframe>\n                         <ul class=\"playlist-container\">\n                                  <li class=\"playlist-item\" *ngFor=\"let video of videos; let i = index\" style=\" font-size: 12px;\">\n                                      <a (click)=\"play(i);\">\n                                  <i style=\"color:#0606a4;\" class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>\n                                 &nbsp;&nbsp;&nbsp;<span>{{video.title}}</span>\n                              </a>\n                           </li>\n                         </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                      <iframe height = \"600\" style=\"width:100%;height:600px;\" [src]=\"ide\" frameborder=\"0\"></iframe>\n                    </div> --> \n\n        <!-- <div class=\"column\">\n            <div style=\"height:100%;right:0;width:55%;top:63px;\">\n              <iframe height = \"600\" width = \"630\" [src]=\"ide\" frameborder=\"0\"></iframe>\n            </div>\n        </div> -->\n    <!-- </div>\n</div> -->\n\n\n\n\n    <section class=\"content-section\" *ngIf=\"!sizeFlag\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5 col-sm-5\">\n              <iframe height = \"400\" style=\"width:100%;height:400px;\" [src]=\"youtubeUrl\" frameborder=\"0\" allowfullscreen></iframe>\n              <ul class=\"playlist-container\">\n                       <li class=\"playlist-item\" *ngFor=\"let video of videos; let i = index\" style=\" font-size: 12px;\">\n                           <a (click)=\"play(i);\">\n                       <i style=\"color:#0606a4;\" class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>\n                      &nbsp;&nbsp;&nbsp;<span>{{video.title}}</span>\n                   </a>\n                </li>\n              </ul>\n          </div>\n          <div class=\"col-lg-7 col-md-7 col-sm-7\">\n              <iframe style=\"width:100%;height:550px;\" [src]=\"ide\" frameborder=\"0\"></iframe>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <h1 style=\"margin-top: 100px; margin-left: 100px;\" *ngIf=\"sizeFlag\">Device note suppoted</h1>"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_auth_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/authservice.service */ "./src/app/services/auth/authservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(domSanitizer, route, http, authService) {
        this.domSanitizer = domSanitizer;
        this.route = route;
        this.http = http;
        this.authService = authService;
        var actualHeight = window.innerHeight;
        var actualWidth = window.innerWidth;
        console.log(actualHeight, actualWidth);
    }
    ProfileComponent.prototype.play = function (index) {
        this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videos[index].link);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth <= 768) {
            this.sizeFlag = true;
        }
        this.route.params.subscribe(function (params) {
            _this.http.getCourse('Course').subscribe(function (res) {
                _this.courseDetail = res.entity[params.index];
                _this.courseDetail.CourseLinks = _this.courseDetail.CourseLinks.sort(function (a, b) { return (a.index > b.index) ? 1 : ((b.index > a.index) ? -1 : 0); });
                _this.videos = _this.courseDetail.CourseLinks;
                _this.youtubeUrl = _this.domSanitizer.bypassSecurityTrustResourceUrl(_this.courseDetail.CourseLinks[0].link);
            });
        });
        this.user = this.authService.getUserData();
        var regex = new RegExp('[^@]+');
        var url = 'http://' + regex.exec(this.user.email)[0] + '-kide.kitcode.io';
        this.ide = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_auth_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/root.component.css":
/*!******************************************!*\
  !*** ./src/app/views/root.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1031;\n    padding: 48px 0 0;\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\n    width: 64px;\n    background-color:#3399cc;\n}\n\n.sidebar-icons{\n\tcolor:#ffffff;\n\tpadding-bottom:15px;\n\tfont-size:30px;\n}\n\n.form-control:focus{\n\tbox-shadow:none;\n\tborder-color:#ced4da;\n}\n\n.content-section{\n\tmargin-left: 100px;\n    margin-top: 100px;\n}\n\n.create-image-button{\n\tbackground: transparent;\n    color: #29447f;\n    border: 1px solid #29447f;\n    border-radius: 50px;\n    padding-right: 25px;\n    padding-left: 25px;\n}\n\n.profile-image-container{\n\twidth:40px;\n\theight:40px;\n\tborder-radius:30px;\n}\n\n.image-container{\n\twidth: 270px;\n    border-radius: 10px;\n    box-shadow: 0px 3px 13px 1px #cccccc7a;\n    border:none;\n}\n\n.image-desc-container{\n\tfont-size:14px;\n\tcolor:#cccccc;\n}\n\n.image-running-info{\n\tcolor:#e86d32;\n}\n\n.image-idle-info{\n\tborder-right: 1px solid #afa6a6;border-left: 1px solid #afa6a6;color:#047afe;\n}\n\n.image-stop-info{\n\tcolor:#63a20f;\t\n}\n\n.card-img-top{\n\tborder-top-left-radius: 10px;border-top-right-radius: 10px;\n}\n\n.image-stats-container{\n\tborder-bottom-left-radius: 10px;border-bottom-right-radius: 10px;\n}\n\n.getKeyInfo{\n\tfont-size:14px;\n}\n\n.fa-bell{\n\tfont-size:20px;\n}\n\n.badge{\n\tposition: absolute;\n    top: 23px;\n    right:83px;\n    border-radius:10px;\n    text-align: center;\n    font-size: 9px;\n    padding: 2px 3px;\n    line-height: .9;\n    background-color:#3399cc;\n    color:#ffffff;\n}\n\n.search-container{\n\twidth:40%;\n\tmargin-right: auto;\n}\n\n.search-input{\n\tborder-bottom-right-radius:20px;\n\tborder-top-right-radius:20px;\n\tborder-left:0;\n}\n\n.search-input::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #cccccc;\n    opacity: 1; /* Firefox */\n}\n\n.search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n    color:#cccccc;\n}\n\n.search-input::-ms-input-placeholder { /* Microsoft Edge */\n    color:#cccccc;\n}\n\n.search-icon-container{\n\tborder-bottom-left-radius:20px;\n\tborder-top-left-radius:20px;\n\tborder-right:0;\n\tbackground-color:#ffffff;\n\tcolor:#cccccc;\n}\n\n.crud-menu{\n\tcolor:#cccccc;\n}"

/***/ }),

/***/ "./src/app/views/root.component.html":
/*!*******************************************!*\
  !*** ./src/app/views/root.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body *ngIf=\"!sizeFlag\">\n  <section>\n    <div class=\"row no-gutters\">\n      <nav class=\"d-none col-md-2 d-md-block sidebar\">\n            <div class=\"sidebar-sticky\">\n              <ul class=\"nav flex-column\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active invisible\" href=\"#\">\n                    <span data-feather=\"home\"></span>\n                    Das <span class=\"sr-only\">(current)</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active invisible\" href=\"#\">\n                    <span data-feather=\"home\"></span>\n                    Das <span class=\"sr-only\">(current)</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"sidebar-icons nav-link active\" [routerLink]=\"['/app/dashboard']\">\n                    <span data-feather=\"home\"></span>\n                    <i class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                  </a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                  <a class=\"sidebar-icons nav-link\" href=\"#\">\n                    <span data-feather=\"file\"></span>\n                    <i class=\"fa fa-database\" aria-hidden=\"true\"></i>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"sidebar-icons nav-link\" href=\"#\">\n                    <span data-feather=\"shopping-cart\"></span>\n                    <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n                  </a>\n                </li> -->\n              </ul>\n              <ul class=\"nav flex-column\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link invisible\" href=\"#\">\n                    <span data-feather=\"file\"></span>\n                    o\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link invisible\" href=\"#\">\n                    <span data-feather=\"shopping-cart\"></span>\n                    Pro\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link invisible\" href=\"#\">\n                    <span data-feather=\"shopping-cart\"></span>\n                    Pro\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </nav>\n      <nav class=\"navbar col-md-12 fixed-top bg-white flex-md-nowrap shadow\">\n        <a class=\"navbar-brand\" style=\"width:80px;\" href=\"#\"></a>\n        <div class=\"search-container input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text search-icon-container\" id=\"basic-addon1\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n          </div>\n          <input type=\"text\" class=\"search-input form-control\" placeholder=\"Search\">\n        </div>\n        <!-- <ul class=\"navbar-nav px-3\">\n          <li class=\"nav-item text-nowrap\">\n            <a class=\"nav-link\" href=\"#\">\n              <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n               <span class=\"label label-success badge\">4</span>\n            </a>\n          </li>\n        </ul> -->\n        <ul class=\"navbar-nav px-3\">\n            <li class=\"nav-item text-nowrap\">\n              <a class=\"nav-link\" href=\"#\"><p style=\"font-size:20px\">{{userName}}</p></a>\n            </li>\n          </ul>\n        <ul class=\"navbar-nav px-3\">\n          <li class=\"nav-item text-nowrap\">\n              <button (click)=\"logout();\" style=\"border: none; background-color: transparent;\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</button>\n              <!-- <div class=\"dropdown\">\n                <a class=\"nav-link\" href=\"#\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"><img src=\"../../../assets/images/kcprofile.jpg\" class=\"profile-image-container\"></a>\n                  <div class=\"profile-menu dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> My Profile</a>\n                  <a class=\"dropdown-item\" href=\"#\" (click)=\"logout();\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log Out</a>\n              </div>\n            </div> -->\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </section>\n  </body>\n<router-outlet *ngIf=\"!sizeFlag\"></router-outlet>\n<ng-template *ngIf=\"sizeFlag\">\n  <h1 style=\"margin-top: 100px; margin-left: 100px;\">Device note suppoted</h1>\n</ng-template>"

/***/ }),

/***/ "./src/app/views/root.component.ts":
/*!*****************************************!*\
  !*** ./src/app/views/root.component.ts ***!
  \*****************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//npm install  @types/youtube
var RootComponent = /** @class */ (function () {
    function RootComponent(router) {
        this.router = router;
    }
    RootComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.sizeFlag = true;
        }
    };
    RootComponent.prototype.logout = function () {
        localStorage.removeItem('jwt_token');
        this.router.navigate(['/login']);
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/views/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/views/root.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sachin/workstation/kitcode/kitcode-frontend-fork/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map