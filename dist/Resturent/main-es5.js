function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Resturent';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 301,
      vars: 0,
      consts: [[1, "container"], [1, "logo"], ["src", "../assets/img/Group 271.png", "alt", ""], ["href", ""], ["src", "../assets/img/Group 393.png", "alt", ""], [1, "header_post", "row"], [1, "header_post_content", "col-md-6"], [1, "get_started"], ["required", "", "placeholder", "Enter Your Address", "type", "email", "name", "", 1, "get_started_email"], ["type", "submit", 1, "get_started_button"], [1, "header_post_image", "col-md-6"], ["src", "../assets/img/Image.png", "alt", "pizza"], [1, "welcome_section", "row"], [1, "shape_img", "col-md-6"], ["src", "../assets/img/shape.png", "alt", "our shape image"], [1, "shape_content", "col-md-6"], ["type", "button"], [1, "reason_section"], [1, "reason_card", "row"], [1, "col-md-4"], [1, "card"], ["src", "../assets/img/Icon1.png", "alt", "Icon 1"], ["src", "../assets/img/Icon2.png", "alt", ""], ["src", "../assets/img/Icon3.png", "alt", ""], [1, "browse_section"], [1, "menu_content", "row"], [1, "col-md-3"], [1, "list"], [1, "col-md-9"], [1, "all_menu"], [1, "row"], [1, "menu_card"], ["src", "../assets/img/menu_img1.png", "alt", ""], [1, "ratting"], ["type", "radio", "name", "star", "id", "star1"], ["for", "star1"], ["type", "radio", "name", "star", "id", "star2"], ["for", "star2"], ["type", "radio", "name", "star", "id", "star3"], ["for", "star3"], ["type", "radio", "name", "star", "id", "star4"], ["for", "star4"], ["type", "radio", "name", "star", "id", "star5"], ["for", "star5"], ["src", "../assets/img/menu_img2.png", "alt", ""], ["src", "../assets/img/menu_img3.png", "alt", ""], [1, "history_section"], [1, "col-md-6"], [1, "history_content"], [1, "history_img"], ["src", "../assets/img/barger.png", "alt", ""], [1, "testmonial_section"], [1, "col-md-12"], [1, "feedback_img"], ["src", "../assets/img/Feedback.png", "alt", ""], [1, "news_sectoion"], [1, "news_card"], [1, "card_img"], ["src", "../assets/img/news_img1.png", "alt", ""], ["src", "../assets/img/news_img2.png", "alt", ""], ["src", "../assets/img/news_img3.png", "alt", ""], [1, "subscription_section"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-10"], [1, "sub_form"], ["type", "email", "placeholder", "Enter Your Email Address"], ["type", "submit"], ["src", "../assets/img/Component 1 \u2013 1.png", "alt", ""], [1, "container-fluid", "footer_bg"], [1, "intro_footer"], [1, "col-md-8", "col-12"], [1, "col-md-4", "col-4"], [1, "footer_links"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "All in Good Taste Food With Figo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Quickly predominate standard compliant architecture and may have prospective internal or organic sources. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Welcome to Figo Restaurant ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Quickly predominate standards compliants architectures and prospective internal or \"organic\" sources. Synergistically mesh quality quality vectors for one-to-one leadership.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Quickly predominate standards compliants architectures and prospective internal or \"organic\" sources. Synergistically mesh quality quality vectors for one-to-one leadership.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Explore Our Story");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Reason");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Why Choose Us?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Various Menus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipsum nec commodo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Pocket Friendly Delivery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipsum nec commodo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Best Offers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipsum nec commodo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Explore Our Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Breakfast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Lunch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Dinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Desert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Soups");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Drinks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Chicken Massala");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "$100 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Western Sunrise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "$100 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Sandwich Soup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "$100 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "del");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "section", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "History of Figo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "We Cook Tradition & Family Recipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Quickly predominate standards compliants architectures and prospective internal or \"organic\" sources. Synergistically mesh quality quality vectors for one-to-one leadership.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Quickly predominate standards compliants architectures and prospective internal or \"organic\" sources. Synergistically mesh quality quality vectors for one-to-one leadership.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Explore Our Story");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "section", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Food Lover's Say");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "section", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Latest News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Spain Appetizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Quickly of predominate and standards compliiants and an architectures.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Wine And Cheese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Quickly of predominate and standards compliiants and an architectures.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Cups Of Coffee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Quickly of predominate and standards compliiants and an architectures.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "section", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Subscription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Wants to Get Update?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "footer", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Don't miss to subscribe to our new feeds, Kindly fill the form bellow.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Our Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Lunch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Dinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Catering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Terms Of Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Contach");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "+8801950403624");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "info@resturent.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Rampura, Dhaka");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 60px;\n  width: 100%;\n  padding: 30px 0px;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: row-reverse;\n  padding-top: 15px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media (max-width: 576px) {\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n  }\n}\n.header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%] {\n  padding-top: 40px;\n}\n.header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4em;\n  line-height: normal;\n}\n@media (max-width: 576px) {\n  .header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n.header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-top: 40px;\n}\n.header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   .get_started[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 60px;\n}\n.header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   .get_started[_ngcontent-%COMP%]   .get_started_email[_ngcontent-%COMP%] {\n  width: 65%;\n  margin-right: 5%;\n  padding: 4%;\n  border-radius: 5px;\n  border: 1px solid #fff;\n  box-shadow: 0px 3px #0c0c0c1c;\n  color: #B7B7B7;\n}\n.header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   .get_started[_ngcontent-%COMP%]   .get_started_button[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 4%;\n  border-radius: 5px;\n  background: #8CB560;\n  border: #707070;\n  box-shadow: 0px 3px #0c0c0c1c;\n  color: #fff;\n  font-weight: bold;\n}\n@media (max-width: 576px) {\n  .header_post[_ngcontent-%COMP%]   .header_post_content[_ngcontent-%COMP%]   .get_started[_ngcontent-%COMP%]   .get_started_button[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.header_post[_ngcontent-%COMP%]   .header_post_image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.welcome_section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.welcome_section[_ngcontent-%COMP%]   .shape_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n}\n@media (max-width: 576px) {\n  .welcome_section[_ngcontent-%COMP%]   .shape_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n.welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n@media (max-width: 576px) {\n  .welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 20px;\n    margin-bottom: 30px;\n  }\n}\n.welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: normal;\n}\n.welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #8CB560;\n  border: #707070;\n  box-shadow: 0px 3px #0c0c0c1c;\n  color: #fff;\n  padding: 4%;\n  font-weight: bold;\n  margin-top: 30px;\n}\n@media (max-width: 576px) {\n  .welcome_section[_ngcontent-%COMP%]   .shape_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.reason_section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 80px;\n}\n@media (max-width: 576px) {\n  .reason_section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n.reason_section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n.reason_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n.reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 70px;\n}\n.reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 30px;\n  background: #e2e2e27a;\n  border: 1px solid #e2e2e27a;\n}\n@media (max-width: 576px) {\n  .reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 0px;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n.reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin-bottom: 20px;\n}\n.reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 20px;\n  margin-bottom: 15px;\n}\n.reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  line-height: normal;\n}\n.reason_section[_ngcontent-%COMP%]   .reason_card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  border-bottom: 5px solid #8CB560;\n}\n.browse_section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 70px;\n  text-align: center;\n}\n@media (max-width: 576px) {\n  .browse_section[_ngcontent-%COMP%] {\n    padding-top: 0px;\n    margin-bottom: 30px;\n  }\n}\n.browse_section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n.browse_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e2e2e27a;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: #afadad;\n  padding: 20px 30px;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FEBD00;\n  border-left: 3px solid #FEBD00;\n  text-decoration: none;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #FEBD00;\n  border-left: 3px solid #FEBD00;\n  text-decoration: none;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-shadow: 2px 2px 20px #3c38387a;\n}\n@media (max-width: 576px) {\n  .browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%] {\n    margin: 15px 0px;\n  }\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-bottom: 12px;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: black;\n  margin-bottom: 10px;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   .ratting[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   .ratting[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   .ratting[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n  width: 30px;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   .ratting[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  content: \"\u2605\";\n  font-size: 25px;\n  display: inline-block;\n  color: yellow;\n}\n.browse_section[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   .all_menu[_ngcontent-%COMP%]   .menu_card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n@media (max-width: 576px) {\n  .history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n.history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n.history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: normal;\n}\n.history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #8CB560;\n  border: #707070;\n  box-shadow: 0px 3px #0c0c0c1c;\n  color: #fff;\n  padding: 4%;\n  font-weight: bold;\n  margin-top: 30px;\n}\n@media (max-width: 576px) {\n  .history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media (max-width: 576px) {\n  .history_section[_ngcontent-%COMP%]   .history_content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n.history_section[_ngcontent-%COMP%]   .history_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.testmonial_section[_ngcontent-%COMP%] {\n  margin: 50px 0px;\n  text-align: center;\n}\n.testmonial_section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n.testmonial_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n.testmonial_section[_ngcontent-%COMP%]   .feedback_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.news_sectoion[_ngcontent-%COMP%] {\n  margin: 50px 0px;\n  text-align: center;\n}\n.news_sectoion[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n.news_sectoion[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n.news_sectoion[_ngcontent-%COMP%]   .news_card[_ngcontent-%COMP%] {\n  text-align: left;\n}\n@media (max-width: 576px) {\n  .news_sectoion[_ngcontent-%COMP%]   .news_card[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n.news_sectoion[_ngcontent-%COMP%]   .news_card[_ngcontent-%COMP%]   .card_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n}\n.news_sectoion[_ngcontent-%COMP%]   .news_card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: black;\n  margin-top: 15px;\n}\n.news_sectoion[_ngcontent-%COMP%]   .news_card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n  margin: 15px 0px;\n}\n.news_sectoion[_ngcontent-%COMP%]   .news_card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #FEBD00;\n}\n.subscription_section[_ngcontent-%COMP%] {\n  margin: 50px 0px;\n  text-align: center;\n}\n.subscription_section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: normal;\n  padding-top: 20px;\n  margin-bottom: 35px;\n}\n.subscription_section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FEBD00;\n  font-size: 28px;\n  text-transform: capitalize;\n}\n.subscription_section[_ngcontent-%COMP%]   .sub_form[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 25px;\n  box-shadow: 0px 0px 20px #cccaca;\n  position: relative;\n  min-height: 50px;\n}\n.subscription_section[_ngcontent-%COMP%]   .sub_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 15px;\n  border-radius: 25px;\n  position: absolute;\n  left: 5px;\n  top: 0;\n}\n.subscription_section[_ngcontent-%COMP%]   .sub_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  padding: 15px;\n  border-radius: 50%;\n  background: #8CB560;\n  position: absolute;\n  right: 5px;\n  top: 0;\n}\n.footer_bg[_ngcontent-%COMP%] {\n  background: rgba(236, 236, 236, 0.856);\n  padding: 50px 0px;\n}\n.footer_bg[_ngcontent-%COMP%]   .intro_footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.footer_bg[_ngcontent-%COMP%]   .intro_footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979797;\n  line-height: 2em;\n}\n.footer_bg[_ngcontent-%COMP%]   .intro_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n.footer_bg[_ngcontent-%COMP%]   .intro_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #37833b;\n}\n.footer_bg[_ngcontent-%COMP%]   .footer_links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  color: #979797;\n}\n.footer_bg[_ngcontent-%COMP%]   .footer_links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #979797;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9GOlxcTGFybmluZ1xceGRfdG9fYW5ndWxhclxcUmVzdHVyZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Y6XFxMYXJuaW5nXFx4ZF90b19hbmd1bGFyXFxSZXN0dXJlbnQvc3JjXFxtZWRpYVF1ZXJ5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDU2hCO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURQSjtBQ1dJO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FEVFI7QUNXWTtFQUNJLHFCQUFBO0FEVGhCO0FDVWdCO0VBQ0ksa0JBQUE7QURScEI7QUVqQlE7RUR3QlE7SUFHUSxpQkFBQTtFRE50QjtBQUNGO0FDZ0JJO0VBQ0ksaUJBQUE7QURiUjtBQ2NRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FEWlo7QUU5QlE7RUR3Q0E7SUFJUSxjQUFBO0VEVmQ7QUFDRjtBQ1lRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FEVlo7QUNZUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBRFZaO0FDV1k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQTFESztFQTJETCxjQUFBO0FEVGhCO0FDV1k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBbkVIO0VBb0VHLGVBbkVHO0VBb0VILDZCQW5FSztFQW9FTCxXQUFBO0VBQ0EsaUJBQUE7QURUaEI7QUU5RFE7RUQrREk7SUFVUSxlQUFBO0VEUGxCO0FBQ0Y7QUNhUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEWFo7QUNpQkE7RUFDSSxnQkFBQTtBRGRKO0FDZ0JRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FEZFo7QUUvRVE7RUQyRkE7SUFJUSxtQkFBQTtFRFpkO0FBQ0Y7QUNnQlE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEZFo7QUUxRlE7RURvR0E7SUFNUSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RURaZDtBQUNGO0FDY1E7RUFDSSxjQTVHSztFQTZHTCxlQUFBO0VBQ0EsMEJBQUE7QURaWjtBRXRHUTtFRCtHQTtJQUtRLGtCQUFBO0VEVmQ7QUFDRjtBQ1lRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FEVlo7QUNZUTtFQUNJLGtCQUFBO0VBQ0EsbUJBN0hDO0VBOEhELGVBN0hPO0VBOEhQLDZCQTdIUztFQThIVCxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBSUEsZ0JBQUE7QURiWjtBRXpIUTtFRDJIQTtJQVNRLGVBQUE7RURQZDtBQUNGO0FDZUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FEWko7QUVuSVE7RUQ2SVI7SUFJUSxnQkFBQTtFRFZOO0FBQ0Y7QUNXSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURUUjtBQ1dJO0VBQ0ksY0F0SlM7RUF1SlQsZUFBQTtFQUNBLDBCQUFBO0FEVFI7QUNXSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBRFRSO0FDVVE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FEUlo7QUU3SlE7RURpS0E7SUFNUSxXQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VETmQ7QUFDRjtBQ09ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRExoQjtBQ09ZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRExoQjtBQ09ZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURMaEI7QUNPWTtFQUNJLGdCQUFBO0VBQ0EsZ0NBQUE7QURMaEI7QUNZQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRFRKO0FFN0xRO0VEbU1SO0lBS1EsZ0JBQUE7SUFDQSxtQkFBQTtFRFBOO0FBQ0Y7QUNRSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUROUjtBQ1FJO0VBQ0ksY0E5TVM7RUErTVQsZUFBQTtFQUNBLDBCQUFBO0FETlI7QUNTUTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBRFBaO0FDUVk7RUFDSSxnQkFBQTtBRE5oQjtBQ1FvQjtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUROeEI7QUNRd0I7RUFDSSxjQS9OWDtFQWdPVyw4QkFBQTtFQUNBLHFCQUFBO0FETjVCO0FDUXdCO0VBQ0ksY0FwT1g7RUFxT1csOEJBQUE7RUFDQSxxQkFBQTtBRE41QjtBQ2FZO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0FEWGhCO0FFeE9RO0VEaVBJO0lBSVEsZ0JBQUE7RURUbEI7QUFDRjtBQ1VnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURScEI7QUNVZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEUnBCO0FDVWdCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FEUnBCO0FDU29CO0VBQ0ksYUFBQTtBRFB4QjtBQ1NvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRFB4QjtBQ1F3QjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FEUDVCO0FDa0JnQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURoQnBCO0FFOVFRO0VEdVNKO0lBRVEsa0JBQUE7RUR0QlY7QUFDRjtBQ3VCUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURyQlo7QUN1QlE7RUFDSSxjQTlTSztFQStTTCxlQUFBO0VBQ0EsMEJBQUE7QURyQlo7QUN1QlE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QURyQlo7QUN1QlE7RUFDSSxrQkFBQTtFQUNBLG1CQTVUQztFQTZURCxlQTVUTztFQTZUUCw2QkE1VFM7RUE2VFQsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUlBLGdCQUFBO0FEeEJaO0FFN1NRO0VEMFRBO0lBU1EsZUFBQTtFRGxCZDtBQUNGO0FFbFRRO0VEMFRBO0lBYVEsbUJBQUE7RURqQmQ7QUFDRjtBQ3FCUTtFQUNJLFdBQUE7QURuQlo7QUN5QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FEdEJKO0FDdUJJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRHJCUjtBQ3VCSTtFQUNJLGNBelZTO0VBMFZULGVBQUE7RUFDQSwwQkFBQTtBRHJCUjtBQ3dCUTtFQUNJLFdBQUE7QUR0Qlo7QUM0QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FEekJKO0FDMEJJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRHhCUjtBQzBCSTtFQUNJLGNBL1dTO0VBZ1hULGVBQUE7RUFDQSwwQkFBQTtBRHhCUjtBQzBCSTtFQUNJLGdCQUFBO0FEeEJSO0FFaFdRO0VEdVhKO0lBR1EsbUJBQUE7RUR0QlY7QUFDRjtBQ3dCWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBRHRCaEI7QUN5QlE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEdkJaO0FDeUJRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHZCWjtBQ3lCUTtFQUNJLGVBQUE7RUFDQSxjQTFZSztBRG1YakI7QUM4QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FEM0JKO0FDNEJJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRDFCUjtBQzRCSTtFQUNJLGNBM1pTO0VBNFpULGVBQUE7RUFDQSwwQkFBQTtBRDFCUjtBQzRCSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUQxQlI7QUM0Qlk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7QUQzQmhCO0FDNkJZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkExYkg7RUEyYkcsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBRDVCaEI7QUNrQ0E7RUFDSSxzQ0FBQTtFQUNBLGlCQUFBO0FEL0JKO0FDaUNRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FEL0JaO0FDaUNRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FEL0JaO0FDa0NZO0VBQ0ksZUFBQTtBRGhDaEI7QUNpQ2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRC9CcEI7QUN1Q1k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QURyQ2hCO0FDc0NnQjtFQUNJLGNBQUE7QURwQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIG5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gIH1cbn1cblxuLmhlYWRlcl9wb3N0IC5oZWFkZXJfcG9zdF9jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uaGVhZGVyX3Bvc3QgLmhlYWRlcl9wb3N0X2NvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDRlbTtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyX3Bvc3QgLmhlYWRlcl9wb3N0X2NvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG59XG4uaGVhZGVyX3Bvc3QgLmhlYWRlcl9wb3N0X2NvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5oZWFkZXJfcG9zdCAuaGVhZGVyX3Bvc3RfY29udGVudCAuZ2V0X3N0YXJ0ZWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5oZWFkZXJfcG9zdCAuaGVhZGVyX3Bvc3RfY29udGVudCAuZ2V0X3N0YXJ0ZWQgLmdldF9zdGFydGVkX2VtYWlsIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgcGFkZGluZzogNCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAjMGMwYzBjMWM7XG4gIGNvbG9yOiAjQjdCN0I3O1xufVxuLmhlYWRlcl9wb3N0IC5oZWFkZXJfcG9zdF9jb250ZW50IC5nZXRfc3RhcnRlZCAuZ2V0X3N0YXJ0ZWRfYnV0dG9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogNCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzhDQjU2MDtcbiAgYm9yZGVyOiAjNzA3MDcwO1xuICBib3gtc2hhZG93OiAwcHggM3B4ICMwYzBjMGMxYztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oZWFkZXJfcG9zdCAuaGVhZGVyX3Bvc3RfY29udGVudCAuZ2V0X3N0YXJ0ZWQgLmdldF9zdGFydGVkX2J1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4uaGVhZGVyX3Bvc3QgLmhlYWRlcl9wb3N0X2ltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi53ZWxjb21lX3NlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLndlbGNvbWVfc2VjdGlvbiAuc2hhcGVfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud2VsY29tZV9zZWN0aW9uIC5zaGFwZV9pbWcgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4ud2VsY29tZV9zZWN0aW9uIC5zaGFwZV9jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud2VsY29tZV9zZWN0aW9uIC5zaGFwZV9jb250ZW50IGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuLndlbGNvbWVfc2VjdGlvbiAuc2hhcGVfY29udGVudCBoMyB7XG4gIGNvbG9yOiAjRkVCRDAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53ZWxjb21lX3NlY3Rpb24gLnNoYXBlX2NvbnRlbnQgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLndlbGNvbWVfc2VjdGlvbiAuc2hhcGVfY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLndlbGNvbWVfc2VjdGlvbiAuc2hhcGVfY29udGVudCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM4Q0I1NjA7XG4gIGJvcmRlcjogIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAjMGMwYzBjMWM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLndlbGNvbWVfc2VjdGlvbiAuc2hhcGVfY29udGVudCBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4ucmVhc29uX3NlY3Rpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnJlYXNvbl9zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG4ucmVhc29uX3NlY3Rpb24gaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLnJlYXNvbl9zZWN0aW9uIGgzIHtcbiAgY29sb3I6ICNGRUJEMDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucmVhc29uX3NlY3Rpb24gLnJlYXNvbl9jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLnJlYXNvbl9zZWN0aW9uIC5yZWFzb25fY2FyZCAuY2FyZCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI3YTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjdhO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yZWFzb25fc2VjdGlvbiAucmVhc29uX2NhcmQgLmNhcmQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5yZWFzb25fc2VjdGlvbiAucmVhc29uX2NhcmQgLmNhcmQgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5yZWFzb25fc2VjdGlvbiAucmVhc29uX2NhcmQgLmNhcmQgaDMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5yZWFzb25fc2VjdGlvbiAucmVhc29uX2NhcmQgLmNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuLnJlYXNvbl9zZWN0aW9uIC5yZWFzb25fY2FyZCAuY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjOENCNTYwO1xufVxuXG4uYnJvd3NlX3NlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmJyb3dzZV9zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5icm93c2Vfc2VjdGlvbiBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4uYnJvd3NlX3NlY3Rpb24gaDMge1xuICBjb2xvcjogI0ZFQkQwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlMmUyZTI3YTtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5saXN0IHVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5saXN0IHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNhZmFkYWQ7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5saXN0IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0ZFQkQwMDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRkVCRDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnJvd3NlX3NlY3Rpb24gLm1lbnVfY29udGVudCAubGlzdCB1bCBsaSBhOmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkVCRDAwO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRUJEMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5hbGxfbWVudSAubWVudV9jYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAyMHB4ICMzYzM4Mzg3YTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYnJvd3NlX3NlY3Rpb24gLm1lbnVfY29udGVudCAuYWxsX21lbnUgLm1lbnVfY2FyZCB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgfVxufVxuLmJyb3dzZV9zZWN0aW9uIC5tZW51X2NvbnRlbnQgLmFsbF9tZW51IC5tZW51X2NhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5hbGxfbWVudSAubWVudV9jYXJkIGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYnJvd3NlX3NlY3Rpb24gLm1lbnVfY29udGVudCAuYWxsX21lbnUgLm1lbnVfY2FyZCAucmF0dGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJyb3dzZV9zZWN0aW9uIC5tZW51X2NvbnRlbnQgLmFsbF9tZW51IC5tZW51X2NhcmQgLnJhdHRpbmcgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJyb3dzZV9zZWN0aW9uIC5tZW51X2NvbnRlbnQgLmFsbF9tZW51IC5tZW51X2NhcmQgLnJhdHRpbmcgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5hbGxfbWVudSAubWVudV9jYXJkIC5yYXR0aW5nIGxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYhVwiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHllbGxvdztcbn1cbi5icm93c2Vfc2VjdGlvbiAubWVudV9jb250ZW50IC5hbGxfbWVudSAubWVudV9jYXJkIHAge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oaXN0b3J5X3NlY3Rpb24gLmhpc3RvcnlfY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGlzdG9yeV9zZWN0aW9uIC5oaXN0b3J5X2NvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLmhpc3Rvcnlfc2VjdGlvbiAuaGlzdG9yeV9jb250ZW50IGgzIHtcbiAgY29sb3I6ICNGRUJEMDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uaGlzdG9yeV9zZWN0aW9uIC5oaXN0b3J5X2NvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5oaXN0b3J5X3NlY3Rpb24gLmhpc3RvcnlfY29udGVudCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM4Q0I1NjA7XG4gIGJvcmRlcjogIzcwNzA3MDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAjMGMwYzBjMWM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhpc3Rvcnlfc2VjdGlvbiAuaGlzdG9yeV9jb250ZW50IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhpc3Rvcnlfc2VjdGlvbiAuaGlzdG9yeV9jb250ZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuLmhpc3Rvcnlfc2VjdGlvbiAuaGlzdG9yeV9pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXN0bW9uaWFsX3NlY3Rpb24ge1xuICBtYXJnaW46IDUwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGVzdG1vbmlhbF9zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi50ZXN0bW9uaWFsX3NlY3Rpb24gaDMge1xuICBjb2xvcjogI0ZFQkQwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi50ZXN0bW9uaWFsX3NlY3Rpb24gLmZlZWRiYWNrX2ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld3Nfc2VjdG9pb24ge1xuICBtYXJnaW46IDUwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmV3c19zZWN0b2lvbiBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4ubmV3c19zZWN0b2lvbiBoMyB7XG4gIGNvbG9yOiAjRkVCRDAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm5ld3Nfc2VjdG9pb24gLm5ld3NfY2FyZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm5ld3Nfc2VjdG9pb24gLm5ld3NfY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuLm5ld3Nfc2VjdG9pb24gLm5ld3NfY2FyZCAuY2FyZF9pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5uZXdzX3NlY3RvaW9uIC5uZXdzX2NhcmQgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5uZXdzX3NlY3RvaW9uIC5uZXdzX2NhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuLm5ld3Nfc2VjdG9pb24gLm5ld3NfY2FyZCBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0ZFQkQwMDtcbn1cblxuLnN1YnNjcmlwdGlvbl9zZWN0aW9uIHtcbiAgbWFyZ2luOiA1MHB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN1YnNjcmlwdGlvbl9zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5zdWJzY3JpcHRpb25fc2VjdGlvbiBoMyB7XG4gIGNvbG9yOiAjRkVCRDAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnN1YnNjcmlwdGlvbl9zZWN0aW9uIC5zdWJfZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjY2NjYWNhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG4uc3Vic2NyaXB0aW9uX3NlY3Rpb24gLnN1Yl9mb3JtIGZvcm0gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDA7XG59XG4uc3Vic2NyaXB0aW9uX3NlY3Rpb24gLnN1Yl9mb3JtIGZvcm0gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM4Q0I1NjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAwO1xufVxuXG4uZm9vdGVyX2JnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjg1Nik7XG4gIHBhZGRpbmc6IDUwcHggMHB4O1xufVxuLmZvb3Rlcl9iZyAuaW50cm9fZm9vdGVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvb3Rlcl9iZyAuaW50cm9fZm9vdGVyIHAge1xuICBjb2xvcjogIzk3OTc5NztcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cbi5mb290ZXJfYmcgLmludHJvX2Zvb3RlciB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5mb290ZXJfYmcgLmludHJvX2Zvb3RlciB1bCBsaSBhIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzM3ODMzYjtcbn1cbi5mb290ZXJfYmcgLmZvb3Rlcl9saW5rcyB1bCBsaSB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuLmZvb3Rlcl9iZyAuZm9vdGVyX2xpbmtzIHVsIGxpIGEge1xuICBjb2xvcjogIzk3OTc5Nztcbn0iLCJAaW1wb3J0ICcuLi9tZWRpYVF1ZXJ5LnNjc3MnO1xyXG5cclxuJGJ1dHRvbkNvbG9yOiM4Q0I1NjA7XHJcbiRidXR0b25Cb3JkZXJDb2xvcjojNzA3MDcwO1xyXG4kYnV0dG9uQm9yZGVyU2hhZG93OiAwcHggM3B4ICMwYzBjMGMxYztcclxuXHJcbiRzZWN0aW9uSGVhZGluZzogI0ZFQkQwMDtcclxuXHJcbi8vIGhlYWRlciBzZWN0aW9uIFxyXG5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDo2MHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGltZ3t9XHJcbiAgICB9XHJcbiAgICBuYXZ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShfcGhvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaGVkZXIgcG9zdCBzZWN0aW9uIFxyXG4uaGVhZGVyX3Bvc3R7XHJcbiAgICAgICAgXHJcbiAgICAuaGVhZGVyX3Bvc3RfY29udGVudHtcclxuICAgICAgICBwYWRkaW5nLXRvcDo0MHB4O1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShfcGhvbmUpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdldF9zdGFydGVke1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgICAgICAgIC5nZXRfc3RhcnRlZF9lbWFpbHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjY1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6JGJ1dHRvbkJvcmRlclNoYWRvdztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNCN0I3QjdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ2V0X3N0YXJ0ZWRfYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzo0JTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDokYnV0dG9uQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6JGJ1dHRvbkJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJGJ1dHRvbkJvcmRlclNoYWRvdztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUoX3Bob25lKXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX3Bvc3RfaW1hZ2V7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSA7XHJcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy93ZWxjb21lIHNlY3Rpb25cclxuLndlbGNvbWVfc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIC5zaGFwZV9pbWd7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjIwMHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25zaXZlKF9waG9uZSl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2hhcGVfY29udGVudHtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShfcGhvbmUpe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBjb2xvcjokc2VjdGlvbkhlYWRpbmc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUoX3Bob25lKXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDokYnV0dG9uQ29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjokYnV0dG9uQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICRidXR0b25Cb3JkZXJTaGFkb3c7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6NCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25zaXZlKF9waG9uZSl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyByZWFzb24gc2VjdGlvblxyXG4ucmVhc29uX3NlY3Rpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKF9waG9uZSl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGNvbG9yOiRzZWN0aW9uSGVhZGluZztcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICAucmVhc29uX2NhcmR7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTo3MHB4O1xyXG4gICAgICAgIC5jYXJke1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2UyZTJlMjdhO1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNlMmUyZTI3YTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShfcGhvbmUpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoM3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgJGJ1dHRvbkNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBicm93c2Ugc2VjdGlvblxyXG4uYnJvd3NlX3NlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBAaW5jbHVkZSByZXNwb25zaXZlKF9waG9uZSl7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGNvbG9yOiRzZWN0aW9uSGVhZGluZztcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICAubWVudV9jb250ZW50e1xyXG4gICAgICAgIC5saXN0e1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNlMmUyZTI3YTtcclxuICAgICAgICAgICAgdWx7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6I2FmYWRhZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6JHNlY3Rpb25IZWFkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkc2VjdGlvbkhlYWRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjokc2VjdGlvbkhlYWRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICRzZWN0aW9uSGVhZGluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxsX21lbnV7XHJcbiAgICAgICAgICAgIC5tZW51X2NhcmR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggIzNjMzgzODdhO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShfcGhvbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmF0dGluZ3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlxcMjYwNVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjp5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OlwiXFwyNjA1XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjp5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gaGlzdG9yeSBzZWN0aW9uXHJcbi5oaXN0b3J5X3NlY3Rpb257XHJcbiAgICAuaGlzdG9yeV9jb250ZW50e1xyXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUoX3Bob25lKXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGNvbG9yOiRzZWN0aW9uSGVhZGluZztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6JGJ1dHRvbkNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6JGJ1dHRvbkJvcmRlckNvbG9yO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAkYnV0dG9uQm9yZGVyU2hhZG93O1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjQlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uc2l2ZShfcGhvbmUpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25zaXZlKF9waG9uZSl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpc3RvcnlfaW1ne1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vdGVzdGltb25pYWxzXHJcbi50ZXN0bW9uaWFsX3NlY3Rpb257XHJcbiAgICBtYXJnaW46NTBweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgY29sb3I6JHNlY3Rpb25IZWFkaW5nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICAgIC5mZWVkYmFja19pbWd7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9uZXdzIFxyXG4ubmV3c19zZWN0b2lvbntcclxuICAgIG1hcmdpbjo1MHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjokc2VjdGlvbkhlYWRpbmc7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgLm5ld3NfY2FyZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbnNpdmUoX3Bob25lKXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfaW1ne1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY3Rpb25IZWFkaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vc3Vic2NyaXB0aW9uXHJcbi5zdWJzY3JpcHRpb25fc2VjdGlvbntcclxuICAgIG1hcmdpbjo1MHB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjokc2VjdGlvbkhlYWRpbmc7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gICAgLnN1Yl9mb3Jte1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjY2NjYWNhO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDoxJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjVweDtcclxuICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDoyOCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiRidXR0b25Db2xvcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OjVweDtcclxuICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyX2Jne1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDIzNiwgMjM2LCAyMzYsIDAuODU2KTtcclxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xyXG4gICAgLmludHJvX2Zvb3RlcntcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6cmdiKDE1MSwgMTUxLCAxNTEpO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYig1NSwgMTMxLCA1OSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX2xpbmtze1xyXG4gICAgICAgIGg0e31cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoMTUxLCAxNTEsIDE1MSk7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYigxNTEsIDE1MSwgMTUxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBtaXhpbiByZXNwb25zaXZlKCRicmVha3BvaW50KSB7XHJcbiAgICBAaWYoJGJyZWFrcG9pbnQgPT0gX3Bob25lKXtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHsgQGNvbnRlbnQgfTtcclxuICAgIH1cclxuICAgIEBpZigkYnJlYWtwb2ludCA9PSBfdGFiKXtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzg2cHgpIHsgQGNvbnRlbnQgfTtcclxuICAgIH1cclxuICAgIEBpZigkYnJlYWtwb2ludCA9PSBfbGFwdG9wKXtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTIycHgpIHsgQGNvbnRlbnQgfTtcclxuICAgIH1cclxuICAgIEBpZigkYnJlYWtwb2ludCA9PSBfbGFyZ2Upe1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQgfTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var materialcomponent = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[materialcomponent], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [materialcomponent],
          exports: [materialcomponent]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Larning\xd_to_angular\Resturent\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map