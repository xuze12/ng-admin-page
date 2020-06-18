function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-person-info-update-person-info-update-module~pages-account-person-person-module"], {
  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-badge.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-badge.js ***!
    \*********************************************************************************/

  /*! exports provided: NzBadgeComponent, NzBadgeModule */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdBadgeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzBadgeComponent", function () {
      return NzBadgeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzBadgeModule", function () {
      return NzBadgeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: preset-colors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /** @type {?} */


    var _c0 = ["contentElement"];

    function NzBadgeComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 4);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-badge-status-dot ant-badge-status-", ctx_r1.nzStatus || ctx_r1.presetColor, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", !ctx_r1.presetColor && ctx_r1.nzColor, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.nzStyle);
      }
    }

    function NzBadgeComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.nzText);
      }
    }

    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r12 = ctx.$implicit;

        var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("current", p_r12 === ctx_r11.countArray[i_r8]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", p_r12, " ");
      }
    }

    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.countSingleArray);
      }
    }

    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform", "translateY(" + (0 - ctx_r9.countArray[i_r8]) * 100 + "%)");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r9.nzDot && ctx_r9.countArray[i_r8] !== undefined);
      }
    }

    function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.count <= ctx_r5.nzOverflowCount);
      }
    }

    function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r6.nzOverflowCount, "+");
      }
    }

    function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "sup", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("right", ctx_r4.nzOffset && ctx_r4.nzOffset[0] ? 0 - ctx_r4.nzOffset[0] : null, "px")("margin-top", ctx_r4.nzOffset && ctx_r4.nzOffset[1] ? ctx_r4.nzOffset[1] : null, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-badge-count", !ctx_r4.nzDot)("ant-badge-dot", ctx_r4.nzDot)("ant-badge-multiple-words", ctx_r4.countArray.length >= 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@.disabled", ctx_r4.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r4.nzStyle);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx_r4.nzTitle === null ? "" : ctx_r4.nzTitle || ctx_r4.nzCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.maxNumberArray);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.count > ctx_r4.nzOverflowCount);
      }
    }

    function NzBadgeComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 16, "sup", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.showSup && ctx_r3.viewInit);
      }
    }

    var _c1 = ["*"];
    var badgePresetColors = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];
    /**
     * @fileoverview added by tsickle
     * Generated from: badge.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NZ_CONFIG_COMPONENT_NAME = 'backTop';

    var NzBadgeComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzConfigService
       * @param {?} renderer
       * @param {?} elementRef
       * @param {?} contentObserver
       * @param {?} cdr
       * @param {?} ngZone
       */
      function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        _classCallCheck(this, NzBadgeComponent);

        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.presetColor = null;
        this.count = 0;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.nzColor = undefined;
        this.nzStyle = null;
      }
      /**
       * @return {?}
       */


      _createClass(NzBadgeComponent, [{
        key: "checkContent",
        value: function checkContent() {
          var _a;

          this.notWrapper = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])((_a = this.contentElement) === null || _a === void 0 ? void 0 : _a.nativeElement);

          if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
          } else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "generateMaxNumberArray",

        /**
         * @return {?}
         */
        value: function generateMaxNumberArray() {
          this.maxNumberArray = this.nzOverflowCount.toString().split('');
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.generateMaxNumberArray();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.viewInit = true;

            _this.cdr.markForCheck();
          });
          this.contentObserver.observe(
          /** @type {?} */
          this.contentElement).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this.checkContent();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzOverflowCount = changes.nzOverflowCount,
              nzCount = changes.nzCount,
              nzColor = changes.nzColor;

          if (nzCount && !(nzCount.currentValue instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count.toString().split('').map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return +item;
            });
          }

          if (nzOverflowCount) {
            this.generateMaxNumberArray();
          }

          if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "showSup",
        get: function get() {
          return this.nzShowDot && this.nzDot || this.count > 0 || this.count === 0 && this.nzShowZero;
        }
      }]);

      return NzBadgeComponent;
    }();

    NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) {
      return new (t || NzBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
    };

    NzBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzBadgeComponent,
      selectors: [["nz-badge"]],
      viewQuery: function NzBadgeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentElement = _t.first);
        }
      },
      hostAttrs: [1, "ant-badge"],
      hostVars: 2,
      hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-badge-status", ctx.nzStatus);
        }
      },
      inputs: {
        nzShowZero: "nzShowZero",
        nzShowDot: "nzShowDot",
        nzDot: "nzDot",
        nzOverflowCount: "nzOverflowCount",
        nzColor: "nzColor",
        nzStyle: "nzStyle",
        nzText: "nzText",
        nzTitle: "nzTitle",
        nzStatus: "nzStatus",
        nzCount: "nzCount",
        nzOffset: "nzOffset"
      },
      exportAs: ["nzBadge"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 6,
      vars: 3,
      consts: [["contentElement", ""], [3, "class", "background", "ngStyle", 4, "ngIf"], ["class", "ant-badge-status-text", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], ["class", "ant-scroll-number", 3, "ngStyle", "right", "marginTop", "ant-badge-count", "ant-badge-dot", "ant-badge-multiple-words", 4, "ngIf"], [1, "ant-scroll-number", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ant-scroll-number-only", 3, "transform", 4, "ngIf"], [1, "ant-scroll-number-only"], ["class", "ant-scroll-number-only-unit", 3, "current", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only-unit"]],
      template: function NzBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzBadgeComponent_span_3_Template, 1, 6, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzBadgeComponent_span_4_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzBadgeComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzStatus || ctx.nzColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzStatus || ctx.nzColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzCount);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
      encapsulation: 2,
      data: {
        animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_3__["zoomBadgeMotion"]]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    NzBadgeComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ContentObserver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }];
    };

    NzBadgeComponent.propDecorators = {
      contentElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['contentElement', {
          "static": false
        }]
      }],
      nzShowZero: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowDot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOverflowCount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzStatus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOffset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], NzBadgeComponent.prototype, "nzShowZero", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzBadgeComponent.prototype, "nzShowDot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NzBadgeComponent.prototype, "nzDot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NzBadgeComponent.prototype, "nzColor", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-badge',
          exportAs: 'nzBadge',
          preserveWhitespaces: false,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_3__["zoomBadgeMotion"]],
          template: "\n    <span #contentElement><ng-content></ng-content></span>\n    <span\n      class=\"ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}\"\n      [style.background]=\"!presetColor && nzColor\"\n      *ngIf=\"nzStatus || nzColor\"\n      [ngStyle]=\"nzStyle\"\n    ></span>\n    <span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\n    <ng-container *nzStringTemplateOutlet=\"nzCount\">\n      <sup\n        class=\"ant-scroll-number\"\n        *ngIf=\"showSup && viewInit\"\n        [@.disabled]=\"notWrapper\"\n        [@zoomBadgeMotion]\n        [ngStyle]=\"nzStyle\"\n        [attr.title]=\"nzTitle === null ? '' : nzTitle || nzCount\"\n        [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\n        [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\n        [class.ant-badge-count]=\"!nzDot\"\n        [class.ant-badge-dot]=\"nzDot\"\n        [class.ant-badge-multiple-words]=\"countArray.length >= 2\"\n      >\n        <ng-container *ngFor=\"let n of maxNumberArray; let i = index\">\n          <span\n            class=\"ant-scroll-number-only\"\n            *ngIf=\"count <= nzOverflowCount\"\n            [style.transform]=\"'translateY(' + -countArray[i] * 100 + '%)'\"\n          >\n            <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n              <p *ngFor=\"let p of countSingleArray\" class=\"ant-scroll-number-only-unit\" [class.current]=\"p === countArray[i]\">\n                {{ p }}\n              </p>\n            </ng-container>\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\n      </sup>\n    </ng-container>\n  ",
          host: {
            "class": 'ant-badge',
            '[class.ant-badge-status]': 'nzStatus'
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ContentObserver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }];
      }, {
        nzShowZero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowDot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOverflowCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        contentElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['contentElement', {
            "static": false
          }]
        }],
        nzText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: badge.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzBadgeModule = function NzBadgeModule() {
      _classCallCheck(this, NzBadgeModule);
    };

    NzBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NzBadgeModule
    });
    NzBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NzBadgeModule_Factory(t) {
        return new (t || NzBadgeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzBadgeModule, {
        declarations: function declarations() {
          return [NzBadgeComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]];
        },
        exports: function exports() {
          return [NzBadgeComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzBadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [NzBadgeComponent],
          exports: [NzBadgeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-badge.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-badge.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js ***!
    \******************************************************************************************/

  /*! exports provided: NzHighlightModule, NzHighlightPipe */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCoreHighlightJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzHighlightModule", function () {
      return NzHighlightModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzHighlightPipe", function () {
      return NzHighlightPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: highlight.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Regular Expressions for parsing tags and attributes

    /** @type {?} */


    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; // ! to ~ is the ASCII range.

    /** @type {?} */

    var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
    /**
     * Escapes all potentially dangerous characters, so that the
     * resulting string can be safely inserted into attribute or
     * element text.
     * @param {?} value
     * @return {?}
     */

    function encodeEntities(value) {
      return value.replace(/&/g, '&amp;').replace(SURROGATE_PAIR_REGEXP,
      /**
      * @param {?} match
      * @return {?}
      */
      function (match) {
        /** @type {?} */
        var hi = match.charCodeAt(0);
        /** @type {?} */

        var low = match.charCodeAt(1);
        return "&#".concat((hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000, ";");
      }).replace(NON_ALPHANUMERIC_REGEXP,
      /**
      * @param {?} match
      * @return {?}
      */
      function (match) {
        return "&#".concat(match.charCodeAt(0), ";");
      }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    var NzHighlightPipe = /*#__PURE__*/function () {
      function NzHighlightPipe() {
        _classCallCheck(this, NzHighlightPipe);

        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
      }
      /**
       * @param {?} value
       * @param {?} highlightValue
       * @param {?=} flags
       * @param {?=} klass
       * @return {?}
       */


      _createClass(NzHighlightPipe, [{
        key: "transform",
        value: function transform(value, highlightValue, flags, klass) {
          if (!highlightValue) {
            return value;
          } // Escapes regex keyword to interpret these characters literally

          /** @type {?} */


          var searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
          /** @type {?} */

          var wrapValue = value.replace(searchValue, "".concat(this.UNIQUE_WRAPPERS[0], "$&").concat(this.UNIQUE_WRAPPERS[1]));
          return encodeEntities(wrapValue).replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? "<span class=\"".concat(klass, "\">") : '<span>').replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
        }
      }]);

      return NzHighlightPipe;
    }();

    NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) {
      return new (t || NzHighlightPipe)();
    };

    NzHighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "nzHighlight",
      type: NzHighlightPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'nzHighlight',
          pure: true
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: highlight.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzHighlightModule = function NzHighlightModule() {
      _classCallCheck(this, NzHighlightModule);
    };

    NzHighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NzHighlightModule
    });
    NzHighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NzHighlightModule_Factory(t) {
        return new (t || NzHighlightModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzHighlightModule, {
        declarations: function declarations() {
          return [NzHighlightPipe];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [NzHighlightPipe];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [NzHighlightPipe],
          declarations: [NzHighlightPipe]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-core-highlight.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-core-highlight.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-tree.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-tree.js ***!
    \*************************************************************************************/

  /*! exports provided: NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeNode, flattenTreeData, getKey, getPosition, isCheckDisabled, isInArray */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCoreTreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeBase", function () {
      return NzTreeBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeBaseService", function () {
      return NzTreeBaseService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeHigherOrderServiceToken", function () {
      return NzTreeHigherOrderServiceToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeNode", function () {
      return NzTreeNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flattenTreeData", function () {
      return _flattenTreeData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getKey", function () {
      return getKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPosition", function () {
      return getPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isCheckDisabled", function () {
      return isCheckDisabled;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isInArray", function () {
      return isInArray;
    });
    /* harmony import */


    var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ng-zorro-antd/core/logger */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-tree-base-node.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function FlattenNode() {}

    if (false) {}
    /**
     * @record
     */


    function NzTreeNodeOptions() {}

    if (false) {}

    var NzTreeNode = /*#__PURE__*/function () {
      /**
       * Init nzTreeNode
       * @param {?} option
       * @param {?=} parent
       * @param {?=} service
       */
      function NzTreeNode(option) {
        var _this2 = this;

        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var service = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, NzTreeNode);

        this._title = '';
        this.level = 0; // Parent Node

        this.parentNode = null;
        this._icon = '';
        this._children = [];
        this._isLeaf = false;
        this._isChecked = false;
        /**
         * @deprecated Maybe removed in next major version, use isChecked instead
         */

        this._isAllChecked = false;
        this._isSelectable = false;
        this._isDisabled = false;
        this._isDisableCheckbox = false;
        this._isExpanded = false;
        this._isHalfChecked = false;
        this._isSelected = false;
        this._isLoading = false;
        this.canHide = false;
        this.isMatched = false;
        this.service = null;

        if (option instanceof NzTreeNode) {
          return option;
        }

        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = []; // option params

        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = !option.disabled && option.selected || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */

        if (parent) {
          this.level = parent.level + 1;
        } else {
          this.level = 0;
        }

        if (typeof option.children !== 'undefined' && option.children !== null) {
          option.children.forEach(
          /**
          * @param {?} nodeOptions
          * @return {?}
          */
          function (nodeOptions) {
            /** @type {?} */
            var s = _this2.treeService;

            if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
              nodeOptions.checked = option.checked;
            }

            _this2._children.push(new NzTreeNode(nodeOptions, _this2));
          });
        }
      }
      /**
       * @return {?}
       */


      _createClass(NzTreeNode, [{
        key: "setSyncChecked",

        /**
         * @param {?=} checked
         * @param {?=} halfChecked
         * @return {?}
         */
        value: function setSyncChecked() {
          var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var halfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.setChecked(checked, halfChecked);

          if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
          }
        }
        /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         * @param {?=} checked
         * @param {?=} halfChecked
         * @return {?}
         */

      }, {
        key: "setChecked",
        value: function setChecked() {
          var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var halfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__["warnDeprecation"])("'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
          this.origin.checked = checked;
          this.isChecked = checked;
          this.isAllChecked = checked;
          this.isHalfChecked = halfChecked;
        }
        /**
         * \@not-deprecated Maybe removed in next major version, use `isExpanded` instead.
         * We need it until tree refactoring is finished
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setExpanded",
        value: function setExpanded(value) {
          this._isExpanded = value;
          this.origin.expanded = value;
          this.afterValueChange('isExpanded');
        }
        /**
         * @deprecated Maybe removed in next major version, use `isSelected` instead.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setSelected",
        value: function setSelected(value) {
          Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__["warnDeprecation"])("'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.");

          if (this.isDisabled) {
            return;
          }

          this.isSelected = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getParentNode",
        value: function getParentNode() {
          return this.parentNode;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getChildren",
        value: function getChildren() {
          return this.children;
        }
        /**
         * Support appending child nodes by position. Leaf node cannot be appended.
         * @param {?} children
         * @param {?=} childPos
         * @return {?}
         */

      }, {
        key: "addChildren",
        value: function addChildren(children) {
          var _this3 = this;

          var childPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

          if (!this.isLeaf) {
            children.forEach(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              /** @type {?} */
              var refreshLevel =
              /**
              * @param {?} n
              * @return {?}
              */
              function refreshLevel(n) {
                n.getChildren().forEach(
                /**
                * @param {?} c
                * @return {?}
                */
                function (c) {
                  c.level =
                  /** @type {?} */
                  c.getParentNode().level + 1; // flush origin

                  c.origin.level = c.level;
                  refreshLevel(c);
                });
              };
              /** @type {?} */


              var child = node;

              if (child instanceof NzTreeNode) {
                child.parentNode = _this3;
              } else {
                child = new NzTreeNode(node, _this3);
              }

              child.level = _this3.level + 1;
              child.origin.level = child.level;
              refreshLevel(child);

              try {
                childPos === -1 ? _this3.children.push(child) : _this3.children.splice(childPos, 0, child); // flush origin
              } catch (e) {}
            });
            this.origin.children = this.getChildren().map(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return v.origin;
            }); // remove loading state

            this.isLoading = false;
          }

          this.afterValueChange('addChildren');
          this.afterValueChange('reRender');
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearChildren",
        value: function clearChildren() {
          // refresh checked state
          this.afterValueChange('clearChildren');
          this.children = [];
          this.origin.children = [];
          this.afterValueChange('reRender');
        }
        /**
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          var _this4 = this;

          /** @type {?} */
          var parentNode = this.getParentNode();

          if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return v.key !== _this4.key;
            });
            parentNode.origin.children =
            /** @type {?} */
            parentNode.origin.children.filter(
            /**
            * @param {?} v
            * @return {?}
            */
            function (v) {
              return v.key !== _this4.key;
            });
            this.afterValueChange('remove');
            this.afterValueChange('reRender');
          }
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "afterValueChange",
        value: function afterValueChange(key) {
          if (this.treeService) {
            switch (key) {
              case 'isChecked':
                this.treeService.setCheckedNodeList(this);
                break;

              case 'isHalfChecked':
                this.treeService.setHalfCheckedNodeList(this);
                break;

              case 'isExpanded':
                this.treeService.setExpandedNodeList(this);
                break;

              case 'isSelected':
                this.treeService.setNodeActive(this);
                break;

              case 'clearChildren':
                this.treeService.afterRemove(this.getChildren());
                break;

              case 'remove':
                this.treeService.afterRemove([this]);
                break;

              case 'reRender':
                this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map(
                /**
                * @param {?} v
                * @return {?}
                */
                function (v) {
                  return (
                    /** @type {?} */
                    v.key
                  );
                }));
                break;
            }
          }

          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "update",
        value: function update() {
          if (this.component) {
            this.component.markForCheck();
          }
        }
      }, {
        key: "treeService",
        get: function get() {
          return this.service || this.parentNode && this.parentNode.treeService;
        }
        /**
         * auto generate
         * get
         * set
         * @return {?}
         */

      }, {
        key: "title",
        get: function get() {
          return this._title;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._title = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "icon",
        get: function get() {
          return this._icon;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._icon = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "children",
        get: function get() {
          return this._children;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._children = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLeaf",
        get: function get() {
          return this._isLeaf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isLeaf = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isChecked",
        get: function get() {
          return this._isChecked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isChecked = value;
          this._isAllChecked = value;
          this.origin.checked = value;
          this.afterValueChange('isChecked');
        }
        /**
         * @return {?}
         */

      }, {
        key: "isAllChecked",
        get: function get() {
          return this._isAllChecked;
        }
        /**
         * @deprecated Maybe removed in next major version, use `isChecked` instead.
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__["warnDeprecation"])("'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.");
          this._isAllChecked = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isHalfChecked",
        get: function get() {
          return this._isHalfChecked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isHalfChecked = value;
          this.afterValueChange('isHalfChecked');
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSelectable",
        get: function get() {
          return this._isSelectable;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isSelectable = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isDisabled",
        get: function get() {
          return this._isDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isDisabled = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isDisableCheckbox",
        get: function get() {
          return this._isDisableCheckbox;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isDisableCheckbox = value;
          this.update();
        }
        /**
         * @return {?}
         */

      }, {
        key: "isExpanded",
        get: function get() {
          return this._isExpanded;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isExpanded = value;
          this.origin.expanded = value;
          this.afterValueChange('isExpanded');
          this.afterValueChange('reRender');
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSelected",
        get: function get() {
          return this._isSelected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isSelected = value;
          this.origin.selected = value;
          this.afterValueChange('isSelected');
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLoading",
        get: function get() {
          return this._isLoading;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._isLoading = value;
          this.update();
        }
      }]);

      return NzTreeNode;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-tree-base.definitions.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * @record
     */


    function NzFormatEmitEvent() {}

    if (false) {}
    /**
     * @record
     */


    function NzFormatBeforeDropEvent() {}

    if (false) {}
    /**
     * @record
     */


    function NzTreeNodeBaseComponent() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-tree-base-util.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * @param {?} node
     * @return {?}
     */


    function isCheckDisabled(node) {
      var isDisabled = node.isDisabled,
          isDisableCheckbox = node.isDisableCheckbox;
      return !!(isDisabled || isDisableCheckbox);
    }
    /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */


    function isInArray(needle, haystack) {
      return haystack.length > 0 && haystack.indexOf(needle) > -1;
    }
    /**
     * @param {?} level
     * @param {?} index
     * @return {?}
     */


    function getPosition(level, index) {
      return "".concat(level, "-").concat(index);
    }
    /**
     * @param {?} key
     * @param {?} pos
     * @return {?}
     */


    function getKey(key, pos) {
      if (key !== null && key !== undefined) {
        return key;
      }

      return pos;
    }
    /**
     * Flat nest tree data into flatten list. This is used for virtual list render.
     * @param {?=} treeNodeList Origin data node list
     * @param {?=} expandedKeys
     * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
     * @return {?}
     */


    function _flattenTreeData() {
      var treeNodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var expandedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      /** @type {?} */
      var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
      /** @type {?} */

      var flattenList = [];
      /**
       * @param {?} list
       * @param {?=} parent
       * @return {?}
       */

      function dig(list) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return list.map(
        /**
        * @param {?} treeNode
        * @param {?} index
        * @return {?}
        */
        function (treeNode, index) {
          /** @type {?} */
          var pos = getPosition(parent ? parent.pos : '0', index);
          /** @type {?} */

          var mergedKey = getKey(treeNode.key, pos);
          treeNode.isStart = [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]);
          treeNode.isEnd = [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1]); // Add FlattenDataNode into list
          // TODO: only need data here.

          /** @type {?} */

          var flattenNode = {
            parent: parent,
            pos: pos,
            children: [],
            data: treeNode,
            isStart: [].concat(_toConsumableArray(parent ? parent.isStart : []), [index === 0]),
            isEnd: [].concat(_toConsumableArray(parent ? parent.isEnd : []), [index === list.length - 1])
          };
          flattenList.push(flattenNode); // Loop treeNode children

          if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
            flattenNode.children = dig(treeNode.children || [], flattenNode);
          } else {
            flattenNode.children = [];
          }

          return flattenNode;
        });
      }

      dig(treeNodeList);
      return flattenList;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-tree-base.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeBaseService = /*#__PURE__*/function () {
      function NzTreeBaseService() {
        _classCallCheck(this, NzTreeBaseService);

        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.flattenNodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
      }
      /**
       * reset tree nodes will clear default node list
       * @param {?} nzNodes
       * @return {?}
       */


      _createClass(NzTreeBaseService, [{
        key: "initTree",
        value: function initTree(nzNodes) {
          this.rootNodes = nzNodes;
          this.expandedNodeList = [];
          this.selectedNodeList = [];
          this.halfCheckedNodeList = [];
          this.checkedNodeList = [];
          this.matchedNodeList = [];
        }
        /**
         * @param {?} nzNodes
         * @param {?=} expandedKeys
         * @return {?}
         */

      }, {
        key: "flattenTreeData",
        value: function flattenTreeData(nzNodes) {
          var expandedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          this.flattenNodes$.next(_flattenTreeData(nzNodes, expandedKeys).map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.data;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getSelectedNode",
        value: function getSelectedNode() {
          return this.selectedNode;
        }
        /**
         * get some list
         * @return {?}
         */

      }, {
        key: "getSelectedNodeList",
        value: function getSelectedNodeList() {
          return this.conductNodeState('select');
        }
        /**
         * return checked nodes
         * @return {?}
         */

      }, {
        key: "getCheckedNodeList",
        value: function getCheckedNodeList() {
          return this.conductNodeState('check');
        }
        /**
         * @return {?}
         */

      }, {
        key: "getHalfCheckedNodeList",
        value: function getHalfCheckedNodeList() {
          return this.conductNodeState('halfCheck');
        }
        /**
         * return expanded nodes
         * @return {?}
         */

      }, {
        key: "getExpandedNodeList",
        value: function getExpandedNodeList() {
          return this.conductNodeState('expand');
        }
        /**
         * return search matched nodes
         * @return {?}
         */

      }, {
        key: "getMatchedNodeList",
        value: function getMatchedNodeList() {
          return this.conductNodeState('match');
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isArrayOfNzTreeNode",
        value: function isArrayOfNzTreeNode(value) {
          return value.every(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item instanceof NzTreeNode;
          });
        }
        /**
         * set drag node
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "setSelectedNode",
        value: function setSelectedNode(node) {
          this.selectedNode = node;
        }
        /**
         * set node selected status
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "setNodeActive",
        value: function setNodeActive(node) {
          if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              if (node.key !== n.key) {
                // reset other nodes
                n.isSelected = false;
              }
            }); // single mode: remove pre node

            this.selectedNodeList = [];
          }

          this.setSelectedNodeList(node, this.isMultiple);
        }
        /**
         * add or remove node to selectedNodeList
         * @param {?} node
         * @param {?=} isMultiple
         * @return {?}
         */

      }, {
        key: "setSelectedNodeList",
        value: function setSelectedNodeList(node) {
          var isMultiple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          /** @type {?} */
          var index = this.getIndexOfArray(this.selectedNodeList, node.key);

          if (isMultiple) {
            if (node.isSelected && index === -1) {
              this.selectedNodeList.push(node);
            }
          } else {
            if (node.isSelected && index === -1) {
              this.selectedNodeList = [node];
            }
          }

          if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return n.key !== node.key;
            });
          }
        }
        /**
         * merge checked nodes
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "setHalfCheckedNodeList",
        value: function setHalfCheckedNodeList(node) {
          /** @type {?} */
          var index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);

          if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
          } else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return node.key !== n.key;
            });
          }
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "setCheckedNodeList",
        value: function setCheckedNodeList(node) {
          /** @type {?} */
          var index = this.getIndexOfArray(this.checkedNodeList, node.key);

          if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
          } else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return node.key !== n.key;
            });
          }
        }
        /**
         * conduct checked/selected/expanded keys
         * @param {?=} type
         * @return {?}
         */

      }, {
        key: "conductNodeState",
        value: function conductNodeState() {
          var _this5 = this;

          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'check';

          /** @type {?} */
          var resultNodesList = [];

          switch (type) {
            case 'select':
              resultNodesList = this.selectedNodeList;
              break;

            case 'expand':
              resultNodesList = this.expandedNodeList;
              break;

            case 'match':
              resultNodesList = this.matchedNodeList;
              break;

            case 'check':
              resultNodesList = this.checkedNodeList;
              /** @type {?} */

              var isIgnore =
              /**
              * @param {?} node
              * @return {?}
              */
              function isIgnore(node) {
                /** @type {?} */
                var parentNode = node.getParentNode();

                if (parentNode) {
                  if (_this5.checkedNodeList.findIndex(
                  /**
                  * @param {?} n
                  * @return {?}
                  */
                  function (n) {
                    return n.key === parentNode.key;
                  }) > -1) {
                    return true;
                  } else {
                    return isIgnore(parentNode);
                  }
                }

                return false;
              }; // merge checked


              if (!this.isCheckStrictly) {
                resultNodesList = this.checkedNodeList.filter(
                /**
                * @param {?} n
                * @return {?}
                */
                function (n) {
                  return !isIgnore(n);
                });
              }

              break;

            case 'halfCheck':
              if (!this.isCheckStrictly) {
                resultNodesList = this.halfCheckedNodeList;
              }

              break;
          }

          return resultNodesList;
        }
        /**
         * set expanded nodes
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "setExpandedNodeList",
        value: function setExpandedNodeList(node) {
          if (node.isLeaf) {
            return;
          }
          /** @type {?} */


          var index = this.getIndexOfArray(this.expandedNodeList, node.key);

          if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
          } else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
          }
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "setMatchedNodeList",
        value: function setMatchedNodeList(node) {
          /** @type {?} */
          var index = this.getIndexOfArray(this.matchedNodeList, node.key);

          if (node.isMatched && index === -1) {
            this.matchedNodeList.push(node);
          } else if (!node.isMatched && index > -1) {
            this.matchedNodeList.splice(index, 1);
          }
        }
        /**
         * check state
         * @param {?=} isCheckStrictly
         * @return {?}
         */

      }, {
        key: "refreshCheckState",
        value: function refreshCheckState() {
          var _this6 = this;

          var isCheckStrictly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (isCheckStrictly) {
            return;
          }

          this.checkedNodeList.forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            _this6.conduct(node);
          });
        } // reset other node checked state based current node

        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "conduct",
        value: function conduct(node) {
          /** @type {?} */
          var isChecked = node.isChecked;

          if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
          }
        }
        /**
         * 1、children half checked
         * 2、children all checked, parent checked
         * 3、no children checked
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "conductUp",
        value: function conductUp(node) {
          /** @type {?} */
          var parentNode = node.getParentNode();

          if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
              if (parentNode.children.every(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                return isCheckDisabled(child) || !child.isHalfChecked && child.isChecked;
              })) {
                parentNode.isChecked = true;
                parentNode.isHalfChecked = false;
              } else if (parentNode.children.some(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                return child.isHalfChecked || child.isChecked;
              })) {
                parentNode.isChecked = false;
                parentNode.isHalfChecked = true;
              } else {
                parentNode.isChecked = false;
                parentNode.isHalfChecked = false;
              }
            }

            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
          }
        }
        /**
         * reset child check state
         * @param {?} node
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "conductDown",
        value: function conductDown(node, value) {
          var _this7 = this;

          if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              _this7.conductDown(n, value);
            });
          }
        }
        /**
         * flush after delete node
         * @param {?} nodes
         * @return {?}
         */

      }, {
        key: "afterRemove",
        value: function afterRemove(nodes) {
          var _this8 = this;

          // to reset selectedNodeList & expandedNodeList

          /** @type {?} */
          var loopNode =
          /**
          * @param {?} node
          * @return {?}
          */
          function loopNode(node) {
            // remove selected node
            _this8.selectedNodeList = _this8.selectedNodeList.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return n.key !== node.key;
            }); // remove expanded node

            _this8.expandedNodeList = _this8.expandedNodeList.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return n.key !== node.key;
            }); // remove checked node

            _this8.checkedNodeList = _this8.checkedNodeList.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return n.key !== node.key;
            });

            if (node.children) {
              node.children.forEach(
              /**
              * @param {?} child
              * @return {?}
              */
              function (child) {
                loopNode(child);
              });
            }
          };

          nodes.forEach(
          /**
          * @param {?} n
          * @return {?}
          */
          function (n) {
            loopNode(n);
          });
          this.refreshCheckState(this.isCheckStrictly);
        }
        /**
         * drag event
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "refreshDragNode",
        value: function refreshDragNode(node) {
          var _this9 = this;

          if (node.children.length === 0) {
            // until root
            this.conductUp(node);
          } else {
            node.children.forEach(
            /**
            * @param {?} child
            * @return {?}
            */
            function (child) {
              _this9.refreshDragNode(child);
            });
          }
        } // reset node level

        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "resetNodeLevel",
        value: function resetNodeLevel(node) {
          /** @type {?} */
          var parentNode = node.getParentNode();

          if (parentNode) {
            node.level = parentNode.level + 1;
          } else {
            node.level = 0;
          }

          var _iterator = _createForOfIteratorHelper(node.children),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;
              this.resetNodeLevel(child);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "calcDropPosition",
        value: function calcDropPosition(event) {
          var clientY = event.clientY; // to fix firefox undefined

          var _ref = event.srcElement ?
          /** @type {?} */
          event.srcElement.getBoundingClientRect() :
          /** @type {?} */
          event.target.getBoundingClientRect(),
              top = _ref.top,
              bottom = _ref.bottom,
              height = _ref.height;
          /** @type {?} */


          var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);

          if (clientY <= top + des) {
            return -1;
          } else if (clientY >= bottom - des) {
            return 1;
          }

          return 0;
        }
        /**
         * drop
         * 0: inner -1: pre 1: next
         * @param {?} targetNode
         * @param {?=} dragPos
         * @return {?}
         */

      }, {
        key: "dropAndApply",
        value: function dropAndApply(targetNode) {
          var _this10 = this;

          var dragPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

          if (!targetNode || dragPos > 1) {
            return;
          }
          /** @type {?} */


          var treeService = targetNode.treeService;
          /** @type {?} */

          var targetParent = targetNode.getParentNode();
          /** @type {?} */

          var isSelectedRootNode = this.selectedNode.getParentNode(); // remove the dragNode

          if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return n.key !== _this10.selectedNode.key;
            });
          } else {
            this.rootNodes = this.rootNodes.filter(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              return n.key !== _this10.selectedNode.key;
            });
          }

          switch (dragPos) {
            case 0:
              targetNode.addChildren([this.selectedNode]);
              this.resetNodeLevel(targetNode);
              break;

            case -1:
            case 1:
              /** @type {?} */
              var tIndex = dragPos === 1 ? 1 : 0;

              if (targetParent) {
                targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                /** @type {?} */

                var parentNode = this.selectedNode.getParentNode();

                if (parentNode) {
                  this.resetNodeLevel(parentNode);
                }
              } else {
                /** @type {?} */
                var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex; // Insert root node.

                this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                this.rootNodes[targetIndex].parentNode = null;
                this.resetNodeLevel(this.rootNodes[targetIndex]);
              }

              break;
          } // flush all nodes


          this.rootNodes.forEach(
          /**
          * @param {?} child
          * @return {?}
          */
          function (child) {
            if (!child.treeService) {
              child.service = treeService;
            }

            _this10.refreshDragNode(child);
          });
        }
        /**
         * emit Structure
         * eventName
         * node
         * event: MouseEvent / DragEvent
         * dragNode
         * @param {?} eventName
         * @param {?} node
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "formatEvent",
        value: function formatEvent(eventName, node, event) {
          /** @type {?} */
          var emitStructure = {
            eventName: eventName,
            node: node,
            event: event
          };

          switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
              Object.assign(emitStructure, {
                dragNode: this.getSelectedNode()
              });
              break;

            case 'click':
            case 'dblclick':
              Object.assign(emitStructure, {
                selectedKeys: this.selectedNodeList
              });
              Object.assign(emitStructure, {
                nodes: this.selectedNodeList
              });
              Object.assign(emitStructure, {
                keys: this.selectedNodeList.map(
                /**
                * @param {?} n
                * @return {?}
                */
                function (n) {
                  return n.key;
                })
              });
              break;

            case 'check':
              /** @type {?} */
              var checkedNodeList = this.getCheckedNodeList();
              Object.assign(emitStructure, {
                checkedKeys: checkedNodeList
              });
              Object.assign(emitStructure, {
                nodes: checkedNodeList
              });
              Object.assign(emitStructure, {
                keys: checkedNodeList.map(
                /**
                * @param {?} n
                * @return {?}
                */
                function (n) {
                  return n.key;
                })
              });
              break;

            case 'search':
              Object.assign(emitStructure, {
                matchedKeys: this.getMatchedNodeList()
              });
              Object.assign(emitStructure, {
                nodes: this.getMatchedNodeList()
              });
              Object.assign(emitStructure, {
                keys: this.getMatchedNodeList().map(
                /**
                * @param {?} n
                * @return {?}
                */
                function (n) {
                  return n.key;
                })
              });
              break;

            case 'expand':
              Object.assign(emitStructure, {
                nodes: this.expandedNodeList
              });
              Object.assign(emitStructure, {
                keys: this.expandedNodeList.map(
                /**
                * @param {?} n
                * @return {?}
                */
                function (n) {
                  return n.key;
                })
              });
              break;
          }

          return emitStructure;
        }
        /**
         * New functions for flatten nodes
         * @param {?} list
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getIndexOfArray",
        value: function getIndexOfArray(list, key) {
          return list.findIndex(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v.key === key;
          });
        }
        /**
         * Render by nzCheckedKeys
         * @param {?} keys
         * @param {?} checkStrictly
         * @return {?}
         */

      }, {
        key: "conductCheck",
        value: function conductCheck(keys, checkStrictly) {
          this.checkedNodeList = [];
          this.halfCheckedNodeList = [];
          /** @type {?} */

          var calc =
          /**
          * @param {?} nodes
          * @return {?}
          */
          function calc(nodes) {
            nodes.forEach(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              if (isInArray(node.key, keys)) {
                node.isChecked = true;
                node.isHalfChecked = false;
              } else {
                node.isChecked = false;
                node.isHalfChecked = false;
              }

              if (node.children.length > 0) {
                calc(node.children);
              }
            });
          };

          calc(this.rootNodes);
          this.refreshCheckState(checkStrictly);
        }
        /**
         * @param {?=} keys
         * @return {?}
         */

      }, {
        key: "conductExpandedKeys",
        value: function conductExpandedKeys() {
          var _this11 = this;

          var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          /** @type {?} */
          var expandedKeySet = new Set(keys === true ? [] : keys);
          this.expandedNodeList = [];
          /** @type {?} */

          var calc =
          /**
          * @param {?} nodes
          * @return {?}
          */
          function calc(nodes) {
            nodes.forEach(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);

              if (node.isExpanded) {
                _this11.setExpandedNodeList(node);
              }

              if (node.children.length > 0) {
                calc(node.children);
              }
            });
          };

          calc(this.rootNodes);
        }
        /**
         * @param {?} keys
         * @param {?} isMulti
         * @return {?}
         */

      }, {
        key: "conductSelectedKeys",
        value: function conductSelectedKeys(keys, isMulti) {
          var _this12 = this;

          this.selectedNodeList = [];
          /** @type {?} */

          var calc =
          /**
          * @param {?} nodes
          * @return {?}
          */
          function calc(nodes) {
            return nodes.every(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              if (isInArray(node.key, keys)) {
                node.isSelected = true;

                _this12.setSelectedNodeList(node);

                if (!isMulti) {
                  // if not support multi select
                  return false;
                }
              } else {
                node.isSelected = false;
              }

              if (node.children.length > 0) {
                // Recursion
                return calc(node.children);
              }

              return true;
            });
          };

          calc(this.rootNodes);
        }
        /**
         * Expand parent nodes by child node
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "expandNodeAllParentBySearch",
        value: function expandNodeAllParentBySearch(node) {
          var _this13 = this;

          /** @type {?} */
          var calc =
          /**
          * @param {?} n
          * @return {?}
          */
          function calc(n) {
            if (n) {
              n.canHide = false;
              n.setExpanded(true);

              _this13.setExpandedNodeList(n);

              if (n.getParentNode()) {
                return calc(n.getParentNode());
              }
            }
          };

          calc(node.getParentNode());
        }
      }]);

      return NzTreeBaseService;
    }();

    NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(t) {
      return new (t || NzTreeBaseService)();
    };

    NzTreeBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NzTreeBaseService,
      factory: NzTreeBaseService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-tree-service.resolver.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NzTreeHigherOrderServiceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NzTreeHigherOrder');
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-tree-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NzTreeBase = /*#__PURE__*/function () {
      /**
       * @param {?} nzTreeService
       */
      function NzTreeBase(nzTreeService) {
        _classCallCheck(this, NzTreeBase);

        this.nzTreeService = nzTreeService;
      }
      /**
       * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
       * @param {?} value
       * @return {?}
       */


      _createClass(NzTreeBase, [{
        key: "coerceTreeNodes",
        value: function coerceTreeNodes(value) {
          var _this14 = this;

          /** @type {?} */
          var nodes = [];

          if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return new NzTreeNode(item, null, _this14.nzTreeService);
            });
          } else {
            nodes = value.map(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              item.service = _this14.nzTreeService;
              return item;
            });
          }

          return nodes;
        }
        /**
         * Get all nodes({\@link NzTreeNode})
         * @return {?}
         */

      }, {
        key: "getTreeNodes",
        value: function getTreeNodes() {
          return this.nzTreeService.rootNodes;
        }
        /**
         * Get {\@link NzTreeNode} with key
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getTreeNodeByKey",
        value: function getTreeNodeByKey(key) {
          // flat tree nodes

          /** @type {?} */
          var nodes = [];
          /** @type {?} */

          var getNode =
          /**
          * @param {?} node
          * @return {?}
          */
          function getNode(node) {
            nodes.push(node);
            node.getChildren().forEach(
            /**
            * @param {?} n
            * @return {?}
            */
            function (n) {
              getNode(n);
            });
          };

          this.getTreeNodes().forEach(
          /**
          * @param {?} n
          * @return {?}
          */
          function (n) {
            getNode(n);
          });
          return nodes.find(
          /**
          * @param {?} n
          * @return {?}
          */
          function (n) {
            return n.key === key;
          }) || null;
        }
        /**
         * Get checked nodes(merged)
         * @return {?}
         */

      }, {
        key: "getCheckedNodeList",
        value: function getCheckedNodeList() {
          return this.nzTreeService.getCheckedNodeList();
        }
        /**
         * Get selected nodes
         * @return {?}
         */

      }, {
        key: "getSelectedNodeList",
        value: function getSelectedNodeList() {
          return this.nzTreeService.getSelectedNodeList();
        }
        /**
         * Get half checked nodes
         * @return {?}
         */

      }, {
        key: "getHalfCheckedNodeList",
        value: function getHalfCheckedNodeList() {
          return this.nzTreeService.getHalfCheckedNodeList();
        }
        /**
         * Get expanded nodes
         * @return {?}
         */

      }, {
        key: "getExpandedNodeList",
        value: function getExpandedNodeList() {
          return this.nzTreeService.getExpandedNodeList();
        }
        /**
         * Get matched nodes(if nzSearchValue is not null)
         * @return {?}
         */

      }, {
        key: "getMatchedNodeList",
        value: function getMatchedNodeList() {
          return this.nzTreeService.getMatchedNodeList();
        }
      }]);

      return NzTreeBase;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-core-tree.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-core-tree.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js ***!
    \********************************************************************************/

  /*! exports provided: NzTreeNode, NzTreeComponent, NzTreeIndentComponent, NzTreeModule, NzTreeNodeCheckboxComponent, NzTreeNodeComponent, NzTreeNodeSwitcherComponent, NzTreeNodeTitleComponent, NzTreeService, NzTreeServiceFactory */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdTreeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeComponent", function () {
      return NzTreeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeIndentComponent", function () {
      return NzTreeIndentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeModule", function () {
      return NzTreeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeNodeCheckboxComponent", function () {
      return NzTreeNodeCheckboxComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeNodeComponent", function () {
      return NzTreeNodeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeNodeSwitcherComponent", function () {
      return NzTreeNodeSwitcherComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeNodeTitleComponent", function () {
      return NzTreeNodeTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeService", function () {
      return NzTreeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTreeServiceFactory", function () {
      return NzTreeServiceFactory;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/highlight */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js");
    /* harmony import */


    var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/no-animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/tree */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-tree.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NzTreeNode", function () {
      return ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeNode"];
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/core/animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");

    function NzTreeIndentComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 1);
      }

      if (rf & 2) {
        var index_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.unitMapOfClass(index_r2));
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-switcher-icon", ctx_r5.nzSelectMode)("ant-tree-switcher-icon", !ctx_r5.nzSelectMode);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        $implicit: a0,
        origin: a1
      };
    };

    function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzExpandedIcon)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r4.context, ctx_r4.context.origin));
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template, 2, 5, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading)("ngIfElse", _r2);
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r8.isSwitcherOpen ? "minus-square" : "plus-square");
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_1_Template, 1, 1, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_2_Template, 1, 0, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.isShowLineIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.isShowLineIcon);
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r6.nzExpandedIcon)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r6.context, ctx_r6.context.origin));
      }
    }

    function NzTreeNodeSwitcherComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading)("ngIfElse", _r2);
      }
    }

    function NzTreeNodeSwitcherComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpin", true);
      }
    }

    function NzTreeNodeTitleComponent_ng_template_0_Template(rf, ctx) {}

    function NzTreeNodeTitleComponent_ng_container_1_span_1_i_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 5);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r3.icon);
      }
    }

    function NzTreeNodeTitleComponent_ng_container_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeTitleComponent_ng_container_1_span_1_i_2_Template, 1, 1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tree-icon__open", ctx_r2.isSwitcherOpen)("ant-tree-icon__close", ctx_r2.isSwitcherClose)("ant-tree-icon_loading", ctx_r2.isLoading)("ant-select-tree-iconEle", ctx_r2.selectMode)("ant-tree-iconEle", !ctx_r2.selectMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-iconEle", ctx_r2.selectMode)("ant-select-tree-icon__customize", ctx_r2.selectMode)("ant-tree-iconEle", !ctx_r2.selectMode)("ant-tree-icon__customize", !ctx_r2.selectMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.icon);
      }
    }

    function NzTreeNodeTitleComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeTitleComponent_ng_container_1_span_1_Template, 3, 19, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "nzHighlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.icon && ctx_r1.showIcon);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](3, 2, ctx_r1.title, ctx_r1.matchedValue, "i", "font-highlight"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function NzTreeNodeComponent_nz_tree_node_switcher_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tree-node-switcher", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTreeNodeComponent_nz_tree_node_switcher_1_Template_nz_tree_node_switcher_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r2.clickExpand($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzSelectMode", ctx_r0.nzSelectMode)("context", ctx_r0.nzTreeNode)("isLeaf", ctx_r0.isLeaf)("isExpanded", ctx_r0.isExpanded)("isLoading", ctx_r0.isLoading);
      }
    }

    function NzTreeNodeComponent_nz_tree_node_checkbox_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tree-node-checkbox", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTreeNodeComponent_nz_tree_node_checkbox_2_Template_nz_tree_node_checkbox_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r4.clickCheckBox($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelectMode", ctx_r1.nzSelectMode)("isChecked", ctx_r1.isChecked)("isHalfChecked", ctx_r1.isHalfChecked)("isDisabled", ctx_r1.isDisabled)("isDisableCheckbox", ctx_r1.isDisableCheckbox);
      }
    }

    var _c1 = ["nzTreeTemplate"];

    function NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_ng_template_1_Template(rf, ctx) {}

    var _c2 = function _c2(a0) {
      return {
        $implicit: a0
      };
    };

    function NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var node_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, node_r5));
      }
    }

    function NzTreeComponent_cdk_virtual_scroll_viewport_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_Template, 2, 4, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r0.nzVirtualHeight);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-list-holder-inner", ctx_r0.nzSelectMode)("ant-tree-list-holder-inner", ctx_r0.nzSelectMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemSize", ctx_r0.nzVirtualItemSize)("minBufferPx", ctx_r0.nzVirtualMinBufferPx)("maxBufferPx", ctx_r0.nzVirtualMaxBufferPx);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.nzFlattenNodes)("cdkVirtualForTrackBy", ctx_r0.trackByFlattenNode);
      }
    }

    function NzTreeComponent_div_5_ng_container_1_ng_template_1_Template(rf, ctx) {}

    function NzTreeComponent_div_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_div_5_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var node_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, node_r8));
      }
    }

    function NzTreeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_div_5_ng_container_1_Template, 2, 4, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-list-holder-inner", ctx_r1.nzSelectMode)("ant-tree-list-holder-inner", ctx_r1.nzSelectMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@.disabled", ctx_r1.beforeInit || (ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@treeCollapseMotion", ctx_r1.nzFlattenNodes.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.nzFlattenNodes)("ngForTrackBy", ctx_r1.trackByFlattenNode);
      }
    }

    function NzTreeComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tree-node", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzExpandChange", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzExpandChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r11.eventTriggerChanged($event);
        })("nzClick", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r13.eventTriggerChanged($event);
        })("nzDblClick", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzDblClick_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r14.eventTriggerChanged($event);
        })("nzContextMenu", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzContextMenu_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r15.eventTriggerChanged($event);
        })("nzCheckBoxChange", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzCheckBoxChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r16.eventTriggerChanged($event);
        })("nzOnDragStart", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragStart_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r17.eventTriggerChanged($event);
        })("nzOnDragEnter", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragEnter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r18.eventTriggerChanged($event);
        })("nzOnDragOver", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragOver_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r19.eventTriggerChanged($event);
        })("nzOnDragLeave", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragLeave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r20.eventTriggerChanged($event);
        })("nzOnDragEnd", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r21.eventTriggerChanged($event);
        })("nzOnDrop", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDrop_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r22.eventTriggerChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var treeNode_r10 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", treeNode_r10.icon)("title", treeNode_r10.title)("isLoading", treeNode_r10.isLoading)("isSelected", treeNode_r10.isSelected)("isDisabled", treeNode_r10.isDisabled)("isMatched", treeNode_r10.isMatched)("isExpanded", treeNode_r10.isExpanded)("isLeaf", treeNode_r10.isLeaf)("isStart", treeNode_r10.isStart)("isEnd", treeNode_r10.isEnd)("isChecked", treeNode_r10.isChecked)("isHalfChecked", treeNode_r10.isHalfChecked)("isDisableCheckbox", treeNode_r10.isDisableCheckbox)("isSelectable", treeNode_r10.isSelectable)("canHide", treeNode_r10.canHide)("nzTreeNode", treeNode_r10)("nzSelectMode", ctx_r3.nzSelectMode)("nzShowLine", ctx_r3.nzShowLine)("nzExpandedIcon", ctx_r3.nzExpandedIcon)("nzDraggable", ctx_r3.nzDraggable)("nzCheckable", ctx_r3.nzCheckable)("nzShowExpand", ctx_r3.nzShowExpand)("nzAsyncData", ctx_r3.nzAsyncData)("nzSearchValue", ctx_r3.nzSearchValue)("nzHideUnMatched", ctx_r3.nzHideUnMatched)("nzBeforeDrop", ctx_r3.nzBeforeDrop)("nzShowIcon", ctx_r3.nzShowIcon)("nzTreeTemplate", ctx_r3.nzTreeTemplate || ctx_r3.nzTreeTemplateChild);
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: tree-indent.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeIndentComponent = /*#__PURE__*/function () {
      function NzTreeIndentComponent() {
        _classCallCheck(this, NzTreeIndentComponent);

        this.nzSelectMode = false;
        this.listOfUnit = [];
      }
      /**
       * @param {?} index
       * @return {?}
       */


      _createClass(NzTreeIndentComponent, [{
        key: "unitMapOfClass",
        value: function unitMapOfClass(index) {
          var _ref2;

          return _ref2 = {}, _defineProperty(_ref2, "ant-tree-indent-unit", !this.nzSelectMode), _defineProperty(_ref2, "ant-tree-indent-unit-start", !this.nzSelectMode &&
          /** @type {?} */
          this.nzIsStart[index + 1]), _defineProperty(_ref2, "ant-tree-indent-unit-end", !this.nzSelectMode &&
          /** @type {?} */
          this.nzIsEnd[index + 1]), _defineProperty(_ref2, "ant-select-tree-indent-unit", this.nzSelectMode), _defineProperty(_ref2, "ant-select-tree-indent-unit-start", this.nzSelectMode &&
          /** @type {?} */
          this.nzIsStart[index + 1]), _defineProperty(_ref2, "ant-select-tree-indent-unit-end", this.nzSelectMode &&
          /** @type {?} */
          this.nzIsEnd[index + 1]), _ref2;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzTreeLevel = changes.nzTreeLevel;

          if (nzTreeLevel) {
            this.listOfUnit = _toConsumableArray(new Array(nzTreeLevel.currentValue || 0));
          }
        }
      }]);

      return NzTreeIndentComponent;
    }();

    NzTreeIndentComponent.ɵfac = function NzTreeIndentComponent_Factory(t) {
      return new (t || NzTreeIndentComponent)();
    };

    NzTreeIndentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzTreeIndentComponent,
      selectors: [["nz-tree-indent"]],
      hostVars: 5,
      hostBindings: function NzTreeIndentComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tree-indent", !ctx.nzSelectMode)("ant-select-tree-indent", ctx.nzSelectMode);
        }
      },
      inputs: {
        nzSelectMode: "nzSelectMode",
        nzTreeLevel: "nzTreeLevel",
        nzIsStart: "nzIsStart",
        nzIsEnd: "nzIsEnd"
      },
      exportAs: ["nzTreeIndent"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]],
      template: function NzTreeIndentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTreeIndentComponent_span_0_Template, 1, 1, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listOfUnit);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTreeIndentComponent.propDecorators = {
      nzTreeLevel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzIsStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzIsEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSelectMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tree-node-checkbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeNodeCheckboxComponent = function NzTreeNodeCheckboxComponent() {
      _classCallCheck(this, NzTreeNodeCheckboxComponent);

      this.nzSelectMode = false;
    };

    NzTreeNodeCheckboxComponent.ɵfac = function NzTreeNodeCheckboxComponent_Factory(t) {
      return new (t || NzTreeNodeCheckboxComponent)();
    };

    NzTreeNodeCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzTreeNodeCheckboxComponent,
      selectors: [["nz-tree-node-checkbox"]],
      hostVars: 16,
      hostBindings: function NzTreeNodeCheckboxComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-checkbox", ctx.nzSelectMode)("ant-select-tree-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-checkbox-disabled", ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox))("ant-tree-checkbox", !ctx.nzSelectMode)("ant-tree-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-checkbox-disabled", !ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox));
        }
      },
      inputs: {
        nzSelectMode: "nzSelectMode",
        isChecked: "isChecked",
        isHalfChecked: "isHalfChecked",
        isDisabled: "isDisabled",
        isDisableCheckbox: "isDisableCheckbox"
      },
      decls: 1,
      vars: 4,
      template: function NzTreeNodeCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tree-checkbox-inner", !ctx.nzSelectMode)("ant-select-tree-checkbox-inner", ctx.nzSelectMode);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    NzTreeNodeCheckboxComponent.propDecorators = {
      nzSelectMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isHalfChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isDisableCheckbox: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tree-node-switcher.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeNodeSwitcherComponent = /*#__PURE__*/function () {
      function NzTreeNodeSwitcherComponent() {
        _classCallCheck(this, NzTreeNodeSwitcherComponent);

        this.nzSelectMode = false;
      }
      /**
       * @return {?}
       */


      _createClass(NzTreeNodeSwitcherComponent, [{
        key: "isShowLineIcon",
        get: function get() {
          return !this.isLeaf && !!this.nzShowLine;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isShowSwitchIcon",
        get: function get() {
          return !this.isLeaf && !this.nzShowLine;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSwitcherOpen",
        get: function get() {
          return !!this.isExpanded && !this.isLeaf;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSwitcherClose",
        get: function get() {
          return !this.isExpanded && !this.isLeaf;
        }
      }]);

      return NzTreeNodeSwitcherComponent;
    }();

    NzTreeNodeSwitcherComponent.ɵfac = function NzTreeNodeSwitcherComponent_Factory(t) {
      return new (t || NzTreeNodeSwitcherComponent)();
    };

    NzTreeNodeSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzTreeNodeSwitcherComponent,
      selectors: [["nz-tree-node-switcher"]],
      hostVars: 16,
      hostBindings: function NzTreeNodeSwitcherComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-switcher", ctx.nzSelectMode)("ant-select-tree-switcher-noop", ctx.nzSelectMode && ctx.isLeaf)("ant-select-tree-switcher_open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-switcher_close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-switcher", !ctx.nzSelectMode)("ant-tree-switcher-noop", !ctx.nzSelectMode && ctx.isLeaf)("ant-tree-switcher_open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-switcher_close", !ctx.nzSelectMode && ctx.isSwitcherClose);
        }
      },
      inputs: {
        nzSelectMode: "nzSelectMode",
        nzShowExpand: "nzShowExpand",
        nzShowLine: "nzShowLine",
        nzExpandedIcon: "nzExpandedIcon",
        context: "context",
        isLeaf: "isLeaf",
        isLoading: "isLoading",
        isExpanded: "isExpanded"
      },
      decls: 4,
      vars: 2,
      consts: [[4, "ngIf"], ["loadingTemplate", ""], [4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"]],
      template: function NzTreeNodeSwitcherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTreeNodeSwitcherComponent_ng_container_0_Template, 2, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_Template, 2, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeSwitcherComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowSwitchIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzShowLine);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTreeNodeSwitcherComponent.propDecorators = {
      nzShowExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowLine: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzExpandedIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSelectMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      context: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isLeaf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isExpanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tree-node-title.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeNodeTitleComponent = /*#__PURE__*/function () {
      function NzTreeNodeTitleComponent() {
        _classCallCheck(this, NzTreeNodeTitleComponent);

        this.treeTemplate = null;
        this.selectMode = false;
      }
      /**
       * @return {?}
       */


      _createClass(NzTreeNodeTitleComponent, [{
        key: "canDraggable",
        get: function get() {
          return this.draggable && !this.isDisabled ? true : null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matchedValue",
        get: function get() {
          return this.isMatched ? this.searchValue : '';
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSwitcherOpen",
        get: function get() {
          return this.isExpanded && !this.isLeaf;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSwitcherClose",
        get: function get() {
          return !this.isExpanded && !this.isLeaf;
        }
      }]);

      return NzTreeNodeTitleComponent;
    }();

    NzTreeNodeTitleComponent.ɵfac = function NzTreeNodeTitleComponent_Factory(t) {
      return new (t || NzTreeNodeTitleComponent)();
    };

    NzTreeNodeTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzTreeNodeTitleComponent,
      selectors: [["nz-tree-node-title"]],
      hostVars: 21,
      hostBindings: function NzTreeNodeTitleComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.title)("draggable", ctx.canDraggable)("aria-grabbed", ctx.canDraggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("draggable", ctx.canDraggable)("ant-select-tree-node-content-wrapper", ctx.selectMode)("ant-select-tree-node-content-wrapper-open", ctx.selectMode && ctx.isSwitcherOpen)("ant-select-tree-node-content-wrapper-close", ctx.selectMode && ctx.isSwitcherClose)("ant-select-tree-node-selected", ctx.selectMode && ctx.isSelected)("ant-tree-node-content-wrapper", !ctx.selectMode)("ant-tree-node-content-wrapper-open", !ctx.selectMode && ctx.isSwitcherOpen)("ant-tree-node-content-wrapper-close", !ctx.selectMode && ctx.isSwitcherClose)("ant-tree-node-selected", !ctx.selectMode && ctx.isSelected);
        }
      },
      inputs: {
        treeTemplate: "treeTemplate",
        selectMode: "selectMode",
        searchValue: "searchValue",
        draggable: "draggable",
        showIcon: "showIcon",
        context: "context",
        icon: "icon",
        title: "title",
        isLoading: "isLoading",
        isSelected: "isSelected",
        isDisabled: "isDisabled",
        isMatched: "isMatched",
        isExpanded: "isExpanded",
        isLeaf: "isLeaf"
      },
      decls: 2,
      vars: 6,
      consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ant-select-tree-iconEle", "ant-tree-iconEle", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]],
      template: function NzTreeNodeTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTreeNodeTitleComponent_ng_template_0_Template, 0, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeTitleComponent_ng_container_1_Template, 4, 7, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.context, ctx.context.origin));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.treeTemplate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]],
      pipes: [ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });
    NzTreeNodeTitleComponent.propDecorators = {
      searchValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      treeTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      draggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      showIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      selectMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      context: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isMatched: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isExpanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isLeaf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tree-node.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeNodeComponent = /*#__PURE__*/function () {
      /**
       * @param {?} nzTreeService
       * @param {?} ngZone
       * @param {?} renderer
       * @param {?} elementRef
       * @param {?} cdr
       * @param {?=} noAnimation
       */
      function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
        _classCallCheck(this, NzTreeNodeComponent);

        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        /**
         * for global property
         */

        this.icon = '';
        this.title = '';
        this.isLoading = false;
        this.isSelected = false;
        this.isDisabled = false;
        this.isMatched = false;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzTreeTemplate = null;
        this.nzSearchValue = '';
        this.nzDraggable = false;
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * drag var
         */

        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dragPos = 2;
        this.dragPosClass = {
          '0': 'drag-over',
          '1': 'drag-over-gap-bottom',
          '-1': 'drag-over-gap-top'
        };
      }
      /**
       * default set
       * @return {?}
       */


      _createClass(NzTreeNodeComponent, [{
        key: "onMousedown",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function onMousedown(event) {
          if (this.nzSelectMode) {
            event.preventDefault();
          }
        }
        /**
         * collapse node
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "clickExpand",
        value: function clickExpand(event) {
          event.preventDefault();

          if (!this.isLoading && !this.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
              this.nzTreeNode.isLoading = true;
            }

            this.nzTreeNode.setExpanded(!this.isExpanded);
          }

          this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
          this.nzExpandChange.emit(eventNext);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "clickSelect",
        value: function clickSelect(event) {
          event.preventDefault();

          if (this.isSelectable && !this.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
          }

          this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
          this.nzClick.emit(eventNext);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "dblClick",
        value: function dblClick(event) {
          event.preventDefault();
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
          this.nzDblClick.emit(eventNext);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "contextMenu",
        value: function contextMenu(event) {
          event.preventDefault();
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
          this.nzContextMenu.emit(eventNext);
        }
        /**
         * check node
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "clickCheckBox",
        value: function clickCheckBox(event) {
          event.preventDefault(); // return if node is disabled

          if (this.isDisabled || this.isDisableCheckbox) {
            return;
          }

          this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
          this.nzTreeNode.isHalfChecked = false;
          this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
          this.nzCheckBoxChange.emit(eventNext);
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearDragClass",
        value: function clearDragClass() {
          var _this15 = this;

          /** @type {?} */
          var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
          dragClass.forEach(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this15.renderer.removeClass(_this15.elementRef.nativeElement, e);
          });
        }
        /**
         * drag event
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleDragStart",
        value: function handleDragStart(e) {
          try {
            // ie throw error
            // firefox-need-it

            /** @type {?} */
            e.dataTransfer.setData('text/plain',
            /** @type {?} */
            this.nzTreeNode.key);
          } catch (error) {// empty
          }

          this.nzTreeService.setSelectedNode(this.nzTreeNode);
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
          this.nzOnDragStart.emit(eventNext);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleDragEnter",
        value: function handleDragEnter(e) {
          var _this16 = this;

          e.preventDefault(); // reset position

          this.dragPos = 2;
          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var eventNext = _this16.nzTreeService.formatEvent('dragenter', _this16.nzTreeNode, e);

            _this16.nzOnDragEnter.emit(eventNext);
          });
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleDragOver",
        value: function handleDragOver(e) {
          e.preventDefault();
          /** @type {?} */

          var dropPosition = this.nzTreeService.calcDropPosition(e);

          if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition; // leaf node will pass

            if (!(this.dragPos === 0 && this.isLeaf)) {
              this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
            }
          }
          /** @type {?} */


          var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
          this.nzOnDragOver.emit(eventNext);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleDragLeave",
        value: function handleDragLeave(e) {
          e.preventDefault();
          this.clearDragClass();
          /** @type {?} */

          var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
          this.nzOnDragLeave.emit(eventNext);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleDragDrop",
        value: function handleDragDrop(e) {
          var _this17 = this;

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            _this17.clearDragClass();
            /** @type {?} */


            var node = _this17.nzTreeService.getSelectedNode();

            if (!node || node && node.key === _this17.nzTreeNode.key || _this17.dragPos === 0 && _this17.isLeaf) {
              return;
            } // pass if node is leafNo

            /** @type {?} */


            var dropEvent = _this17.nzTreeService.formatEvent('drop', _this17.nzTreeNode, e);
            /** @type {?} */


            var dragEndEvent = _this17.nzTreeService.formatEvent('dragend', _this17.nzTreeNode, e);

            if (_this17.nzBeforeDrop) {
              _this17.nzBeforeDrop({
                dragNode:
                /** @type {?} */
                _this17.nzTreeService.getSelectedNode(),
                node: _this17.nzTreeNode,
                pos: _this17.dragPos
              }).subscribe(
              /**
              * @param {?} canDrop
              * @return {?}
              */
              function (canDrop) {
                if (canDrop) {
                  _this17.nzTreeService.dropAndApply(_this17.nzTreeNode, _this17.dragPos);
                }

                _this17.nzOnDrop.emit(dropEvent);

                _this17.nzOnDragEnd.emit(dragEndEvent);
              });
            } else if (_this17.nzTreeNode) {
              _this17.nzTreeService.dropAndApply(_this17.nzTreeNode, _this17.dragPos);

              _this17.nzOnDrop.emit(dropEvent);
            }
          });
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleDragEnd",
        value: function handleDragEnd(e) {
          var _this18 = this;

          e.preventDefault();
          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            // if user do not custom beforeDrop
            if (!_this18.nzBeforeDrop) {
              /** @type {?} */
              var eventNext = _this18.nzTreeService.formatEvent('dragend', _this18.nzTreeNode, e);

              _this18.nzOnDragEnd.emit(eventNext);
            }
          });
        }
        /**
         * Listening to dragging events.
         * @return {?}
         */

      }, {
        key: "handDragEvent",
        value: function handDragEvent() {
          var _this19 = this;

          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (_this19.nzDraggable) {
              /** @type {?} */
              var nativeElement = _this19.elementRef.nativeElement;
              _this19.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this19.destroy$)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this19.handleDragStart(e);
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this19.destroy$)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this19.handleDragEnter(e);
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragover').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this19.destroy$)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this19.handleDragOver(e);
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this19.destroy$)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this19.handleDragLeave(e);
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'drop').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this19.destroy$)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this19.handleDragDrop(e);
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this19.destroy$)).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return _this19.handleDragEnd(e);
              });
            } else {
              _this19.destroy$.next();

              _this19.destroy$.complete();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "markForCheck",
        value: function markForCheck() {
          this.cdr.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nzTreeNode.component = this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzDraggable = changes.nzDraggable;

          if (nzDraggable) {
            this.handDragEvent();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "displayStyle",
        get: function get() {
          // to hide unmatched nodes
          return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSwitcherOpen",
        get: function get() {
          return this.isExpanded && !this.isLeaf;
        }
        /**
         * @return {?}
         */

      }, {
        key: "isSwitcherClose",
        get: function get() {
          return !this.isExpanded && !this.isLeaf;
        }
      }]);

      return NzTreeNodeComponent;
    }();

    NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) {
      return new (t || NzTreeNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], 9));
    };

    NzTreeNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzTreeNodeComponent,
      selectors: [["nz-tree-node"]],
      hostVars: 34,
      hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzTreeNodeComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-treenode", ctx.nzSelectMode)("ant-select-tree-treenode-disabled", ctx.nzSelectMode && ctx.isDisabled)("ant-select-tree-treenode-switcher-open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-treenode-switcher-close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-select-tree-treenode-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-treenode-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-treenode-selected", ctx.nzSelectMode && ctx.isSelected)("ant-select-tree-treenode-loading", ctx.nzSelectMode && ctx.isLoading)("ant-tree-treenode", !ctx.nzSelectMode)("ant-tree-treenode-disabled", !ctx.nzSelectMode && ctx.isDisabled)("ant-tree-treenode-switcher-open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-treenode-switcher-close", !ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-treenode-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-treenode-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-treenode-selected", !ctx.nzSelectMode && ctx.isSelected)("ant-tree-treenode-loading", !ctx.nzSelectMode && ctx.isLoading);
        }
      },
      inputs: {
        icon: "icon",
        title: "title",
        isLoading: "isLoading",
        isSelected: "isSelected",
        isDisabled: "isDisabled",
        isMatched: "isMatched",
        nzHideUnMatched: "nzHideUnMatched",
        nzNoAnimation: "nzNoAnimation",
        nzSelectMode: "nzSelectMode",
        nzShowIcon: "nzShowIcon",
        nzTreeTemplate: "nzTreeTemplate",
        nzSearchValue: "nzSearchValue",
        nzDraggable: "nzDraggable",
        isExpanded: "isExpanded",
        isLeaf: "isLeaf",
        isChecked: "isChecked",
        isHalfChecked: "isHalfChecked",
        isDisableCheckbox: "isDisableCheckbox",
        isSelectable: "isSelectable",
        canHide: "canHide",
        isStart: "isStart",
        isEnd: "isEnd",
        nzTreeNode: "nzTreeNode",
        nzShowLine: "nzShowLine",
        nzShowExpand: "nzShowExpand",
        nzCheckable: "nzCheckable",
        nzAsyncData: "nzAsyncData",
        nzExpandedIcon: "nzExpandedIcon",
        nzBeforeDrop: "nzBeforeDrop"
      },
      outputs: {
        nzClick: "nzClick",
        nzDblClick: "nzDblClick",
        nzContextMenu: "nzContextMenu",
        nzCheckBoxChange: "nzCheckBoxChange",
        nzExpandChange: "nzExpandChange",
        nzOnDragStart: "nzOnDragStart",
        nzOnDragEnter: "nzOnDragEnter",
        nzOnDragOver: "nzOnDragOver",
        nzOnDragLeave: "nzOnDragLeave",
        nzOnDrop: "nzOnDrop",
        nzOnDragEnd: "nzOnDragEnd"
      },
      exportAs: ["nzTreeNode"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 20,
      consts: [[3, "nzTreeLevel", "nzSelectMode", "nzIsStart", "nzIsEnd"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click", 4, "ngIf"], [3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click", 4, "ngIf"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "searchValue", "treeTemplate", "draggable", "showIcon", "selectMode", "context", "dblclick", "click", "contextmenu"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click"], [3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click"]],
      template: function NzTreeNodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-tree-indent", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeComponent_nz_tree_node_switcher_1_Template, 1, 8, "nz-tree-node-switcher", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeComponent_nz_tree_node_checkbox_2_Template, 1, 5, "nz-tree-node-checkbox", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-tree-node-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function NzTreeNodeComponent_Template_nz_tree_node_title_dblclick_3_listener($event) {
            return ctx.dblClick($event);
          })("click", function NzTreeNodeComponent_Template_nz_tree_node_title_click_3_listener($event) {
            return ctx.clickSelect($event);
          })("contextmenu", function NzTreeNodeComponent_Template_nz_tree_node_title_contextmenu_3_listener($event) {
            return ctx.contextMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTreeLevel", ctx.nzTreeNode.level)("nzSelectMode", ctx.nzSelectMode)("nzIsStart", ctx.isStart)("nzIsEnd", ctx.isEnd);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzShowExpand);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzCheckable);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.icon)("title", ctx.title)("isLoading", ctx.isLoading)("isSelected", ctx.isSelected)("isDisabled", ctx.isDisabled)("isMatched", ctx.isMatched)("isExpanded", ctx.isExpanded)("isLeaf", ctx.isLeaf)("searchValue", ctx.nzSearchValue)("treeTemplate", ctx.nzTreeTemplate)("draggable", ctx.nzDraggable)("showIcon", ctx.nzShowIcon)("selectMode", ctx.nzSelectMode)("context", ctx.nzTreeNode);
        }
      },
      directives: [NzTreeIndentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NzTreeNodeTitleComponent, NzTreeNodeSwitcherComponent, NzTreeNodeCheckboxComponent],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzTreeNodeComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }];
    };

    NzTreeNodeComponent.propDecorators = {
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isMatched: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isExpanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isLeaf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isHalfChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isDisableCheckbox: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isSelectable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      canHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      isEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTreeNode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowLine: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCheckable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAsyncData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzHideUnMatched: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzNoAnimation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSelectMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzExpandedIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTreeTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzBeforeDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSearchValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDraggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzContextMenu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzCheckBoxChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzExpandChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tree.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeService = /*#__PURE__*/function (_ng_zorro_antd_core_t) {
      _inherits(NzTreeService, _ng_zorro_antd_core_t);

      var _super = _createSuper(NzTreeService);

      function NzTreeService() {
        _classCallCheck(this, NzTreeService);

        return _super.call(this);
      }

      return NzTreeService;
    }(ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]);

    NzTreeService.ɵfac = function NzTreeService_Factory(t) {
      return new (t || NzTreeService)();
    };

    NzTreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NzTreeService,
      factory: NzTreeService.ɵfac
    });
    /** @nocollapse */

    NzTreeService.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: tree.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} higherOrderService
     * @param {?} treeService
     * @return {?}
     */


    function NzTreeServiceFactory(higherOrderService, treeService) {
      return higherOrderService ? higherOrderService : treeService;
    }
    /** @type {?} */


    var NZ_CONFIG_COMPONENT_NAME = 'tree';

    var NzTreeComponent = /*#__PURE__*/function (_ng_zorro_antd_core_t2) {
      _inherits(NzTreeComponent, _ng_zorro_antd_core_t2);

      var _super2 = _createSuper(NzTreeComponent);

      // Handle emit event end

      /**
       * @param {?} nzTreeService
       * @param {?} nzConfigService
       * @param {?} cdr
       * @param {?=} noAnimation
       */
      function NzTreeComponent(nzTreeService, nzConfigService, cdr, noAnimation) {
        var _this20;

        _classCallCheck(this, NzTreeComponent);

        _this20 = _super2.call(this, nzTreeService);
        _this20.nzConfigService = nzConfigService;
        _this20.cdr = cdr;
        _this20.noAnimation = noAnimation;
        _this20.nzShowIcon = false;
        _this20.nzHideUnMatched = false;
        _this20.nzBlockNode = false;
        _this20.nzExpandAll = false;
        _this20.nzSelectMode = false;
        _this20.nzCheckStrictly = false;
        _this20.nzShowExpand = true;
        _this20.nzShowLine = false;
        _this20.nzCheckable = false;
        _this20.nzAsyncData = false;
        _this20.nzDraggable = false;
        _this20.nzMultiple = false;
        _this20.nzVirtualItemSize = 28;
        _this20.nzVirtualMaxBufferPx = 500;
        _this20.nzVirtualMinBufferPx = 28;
        _this20.nzVirtualHeight = null;
        _this20.nzData = [];
        _this20.nzExpandedKeys = [];
        _this20.nzSelectedKeys = [];
        _this20.nzCheckedKeys = [];
        _this20.nzFlattenNodes = [];
        _this20.beforeInit = true;
        _this20.nzExpandedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzSelectedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzCheckedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzSearchValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzOnDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzOnDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzOnDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzOnDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzOnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.nzOnDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this20.HIDDEN_STYLE = {
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0,
          border: 0,
          padding: 0,
          margin: 0
        };
        _this20.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();

        _this20.onChange =
        /**
        * @return {?}
        */
        function () {
          return null;
        };

        _this20.onTouched =
        /**
        * @return {?}
        */
        function () {
          return null;
        };

        return _this20;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzTreeComponent, [{
        key: "writeValue",
        value: function writeValue(value) {
          this.handleNzData(value);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Render all properties of nzTree
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "renderTreeProperties",
        value: function renderTreeProperties(changes) {
          /** @type {?} */
          var useDefaultExpandedKeys = false;
          /** @type {?} */

          var expandAll = false;
          var nzData = changes.nzData,
              nzExpandedKeys = changes.nzExpandedKeys,
              nzSelectedKeys = changes.nzSelectedKeys,
              nzCheckedKeys = changes.nzCheckedKeys,
              nzCheckStrictly = changes.nzCheckStrictly,
              nzExpandAll = changes.nzExpandAll,
              nzMultiple = changes.nzMultiple,
              nzSearchValue = changes.nzSearchValue;

          if (nzExpandAll) {
            useDefaultExpandedKeys = true;
            expandAll = this.nzExpandAll;
          }

          if (nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
          }

          if (nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
          }

          if (nzData) {
            this.handleNzData(this.nzData);
          }

          if (nzCheckedKeys || nzCheckStrictly) {
            this.handleCheckedKeys(this.nzCheckedKeys);
          }

          if (nzExpandedKeys || nzExpandAll) {
            useDefaultExpandedKeys = true;
            this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
          }

          if (nzSelectedKeys) {
            this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
          }

          if (nzSearchValue) {
            if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
              useDefaultExpandedKeys = false;
              this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
              this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            }
          } // flatten data

          /** @type {?} */


          var currentExpandedKeys = this.getExpandedNodeList().map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v.key;
          });
          /** @type {?} */

          var newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
          this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
        }
        /**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "trackByFlattenNode",
        value: function trackByFlattenNode(_, node) {
          return node.key;
        } // Deal with properties

        /**
         * nzData
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "handleNzData",
        value: function handleNzData(value) {
          if (Array.isArray(value)) {
            /** @type {?} */
            var data = this.coerceTreeNodes(value);
            this.nzTreeService.initTree(data);
          }
        }
        /**
         * @param {?} data
         * @param {?=} expandKeys
         * @return {?}
         */

      }, {
        key: "handleFlattenNodes",
        value: function handleFlattenNodes(data) {
          var expandKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          this.nzTreeService.flattenTreeData(data, expandKeys);
        }
        /**
         * @param {?} keys
         * @return {?}
         */

      }, {
        key: "handleCheckedKeys",
        value: function handleCheckedKeys(keys) {
          this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
        }
        /**
         * @param {?=} keys
         * @return {?}
         */

      }, {
        key: "handleExpandedKeys",
        value: function handleExpandedKeys() {
          var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.nzTreeService.conductExpandedKeys(keys);
        }
        /**
         * @param {?} keys
         * @param {?} isMulti
         * @return {?}
         */

      }, {
        key: "handleSelectedKeys",
        value: function handleSelectedKeys(keys, isMulti) {
          this.nzTreeService.conductSelectedKeys(keys, isMulti);
        }
        /**
         * @param {?} value
         * @param {?=} searchFunc
         * @return {?}
         */

      }, {
        key: "handleSearchValue",
        value: function handleSearchValue(value, searchFunc) {
          var _this21 = this;

          /** @type {?} */
          var dataList = Object(ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["flattenTreeData"])(this.nzTreeService.rootNodes, true).map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v.data;
          });
          /** @type {?} */

          var checkIfMatched =
          /**
          * @param {?} node
          * @return {?}
          */
          function checkIfMatched(node) {
            if (searchFunc) {
              return searchFunc(node.origin);
            }

            return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
          };

          dataList.forEach(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            v.isMatched = checkIfMatched(v);
            v.canHide = !v.isMatched;

            if (!v.isMatched) {
              v.setExpanded(false);

              _this21.nzTreeService.setExpandedNodeList(v);
            } else {
              // expand
              _this21.nzTreeService.expandNodeAllParentBySearch(v);
            }

            _this21.nzTreeService.setMatchedNodeList(v);
          });
        }
        /**
         * Handle emit event
         * @param {?} event
         * handle each event
         * @return {?}
         */

      }, {
        key: "eventTriggerChanged",
        value: function eventTriggerChanged(event) {
          /** @type {?} */
          var node =
          /** @type {?} */
          event.node;

          switch (event.eventName) {
            case 'expand':
              this.renderTree();
              this.nzExpandChange.emit(event);
              break;

            case 'click':
              this.nzClick.emit(event);
              break;

            case 'dblclick':
              this.nzDblClick.emit(event);
              break;

            case 'contextmenu':
              this.nzContextMenu.emit(event);
              break;

            case 'check':
              // Render checked state with nodes' property `isChecked`
              this.nzTreeService.setCheckedNodeList(node);

              if (!this.nzCheckStrictly) {
                this.nzTreeService.conduct(node);
              } // Cause check method will rerender list, so we need recover it and next the new event to user

              /** @type {?} */


              var eventNext = this.nzTreeService.formatEvent('check', node,
              /** @type {?} */
              event.event);
              this.nzCheckBoxChange.emit(eventNext);
              break;

            case 'dragstart':
              // if node is expanded
              if (node.isExpanded) {
                node.setExpanded(!node.isExpanded);
                this.renderTree();
              }

              this.nzOnDragStart.emit(event);
              break;

            case 'dragenter':
              /** @type {?} */
              var selectedNode = this.nzTreeService.getSelectedNode();

              if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
                node.setExpanded(true);
                this.renderTree();
              }

              this.nzOnDragEnter.emit(event);
              break;

            case 'dragover':
              this.nzOnDragOver.emit(event);
              break;

            case 'dragleave':
              this.nzOnDragLeave.emit(event);
              break;

            case 'dragend':
              this.nzOnDragEnd.emit(event);
              break;

            case 'drop':
              this.renderTree();
              this.nzOnDrop.emit(event);
              break;
          }
        }
        /**
         * Click expand icon
         * @return {?}
         */

      }, {
        key: "renderTree",
        value: function renderTree() {
          this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v.key;
          }));
          this.cdr.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.nzTreeService.flattenNodes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this22.nzFlattenNodes = data;

            _this22.cdr.markForCheck();
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.renderTreeProperties(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.beforeInit = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }]);

      return NzTreeComponent;
    }(ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBase"]);

    NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) {
      return new (t || NzTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], 9));
    };

    NzTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzTreeComponent,
      selectors: [["nz-tree"]],
      contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, _c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzTreeTemplateChild = _t.first);
        }
      },
      viewQuery: function NzTreeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], true, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
        }
      },
      hostVars: 18,
      hostBindings: function NzTreeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree", ctx.nzSelectMode)("ant-select-tree-show-line", ctx.nzSelectMode && ctx.nzShowLine)("ant-select-tree-icon-hide", ctx.nzSelectMode && !ctx.nzShowIcon)("ant-select-tree-block-node", ctx.nzSelectMode && ctx.nzBlockNode)("ant-tree", !ctx.nzSelectMode)("ant-tree-show-line", !ctx.nzSelectMode && ctx.nzShowLine)("ant-tree-icon-hide", !ctx.nzSelectMode && !ctx.nzShowIcon)("ant-tree-block-node", !ctx.nzSelectMode && ctx.nzBlockNode)("draggable-tree", ctx.nzDraggable);
        }
      },
      inputs: {
        nzShowIcon: "nzShowIcon",
        nzHideUnMatched: "nzHideUnMatched",
        nzBlockNode: "nzBlockNode",
        nzExpandAll: "nzExpandAll",
        nzSelectMode: "nzSelectMode",
        nzCheckStrictly: "nzCheckStrictly",
        nzShowExpand: "nzShowExpand",
        nzShowLine: "nzShowLine",
        nzCheckable: "nzCheckable",
        nzAsyncData: "nzAsyncData",
        nzDraggable: "nzDraggable",
        nzMultiple: "nzMultiple",
        nzVirtualItemSize: "nzVirtualItemSize",
        nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
        nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
        nzVirtualHeight: "nzVirtualHeight",
        nzData: "nzData",
        nzExpandedKeys: "nzExpandedKeys",
        nzSelectedKeys: "nzSelectedKeys",
        nzCheckedKeys: "nzCheckedKeys",
        nzExpandedIcon: "nzExpandedIcon",
        nzTreeTemplate: "nzTreeTemplate",
        nzBeforeDrop: "nzBeforeDrop",
        nzSearchValue: "nzSearchValue",
        nzSearchFunc: "nzSearchFunc"
      },
      outputs: {
        nzExpandedKeysChange: "nzExpandedKeysChange",
        nzSelectedKeysChange: "nzSelectedKeysChange",
        nzCheckedKeysChange: "nzCheckedKeysChange",
        nzSearchValueChange: "nzSearchValueChange",
        nzClick: "nzClick",
        nzDblClick: "nzDblClick",
        nzContextMenu: "nzContextMenu",
        nzCheckBoxChange: "nzCheckBoxChange",
        nzExpandChange: "nzExpandChange",
        nzOnDragStart: "nzOnDragStart",
        nzOnDragEnter: "nzOnDragEnter",
        nzOnDragOver: "nzOnDragOver",
        nzOnDragLeave: "nzOnDragLeave",
        nzOnDrop: "nzOnDrop",
        nzOnDragEnd: "nzOnDragEnd"
      },
      exportAs: ["nzTree"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([NzTreeService, {
        provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"],
        useFactory: NzTreeServiceFactory,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeHigherOrderServiceToken"]], NzTreeService]
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NzTreeComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 8,
      vars: 7,
      consts: [["role", "tree"], [3, "ngStyle"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "itemSize", "minBufferPx", "maxBufferPx", "height", 4, "ngIf"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "nzNoAnimation", 4, "ngIf"], ["nodeTemplate", ""], [3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoAnimation"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "isStart", "isEnd", "isChecked", "isHalfChecked", "isDisableCheckbox", "isSelectable", "canHide", "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzShowIcon", "nzTreeTemplate", "nzExpandChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDragEnd", "nzOnDrop"]],
      template: function NzTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzTreeComponent_cdk_virtual_scroll_viewport_4_Template, 2, 11, "cdk-virtual-scroll-viewport", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzTreeComponent_div_5_Template, 2, 9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzTreeComponent_ng_template_6_Template, 1, 28, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.HIDDEN_STYLE);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-list", ctx.nzSelectMode)("ant-tree-list", ctx.nzSelectMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzVirtualHeight);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzVirtualHeight);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NzTreeNodeComponent],
      encapsulation: 2,
      data: {
        animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__["treeCollapseMotion"]]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    NzTreeComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]
      }, {
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }];
    };

    NzTreeComponent.propDecorators = {
      nzShowIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzHideUnMatched: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzBlockNode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzExpandAll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSelectMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCheckStrictly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzShowLine: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCheckable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzAsyncData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzDraggable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzMultiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzExpandedIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzVirtualItemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzVirtualMaxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzVirtualMinBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzVirtualHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTreeTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzBeforeDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzExpandedKeys: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSelectedKeys: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCheckedKeys: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSearchValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzSearchFunc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTreeTemplateChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: ['nzTreeTemplate', {
          "static": true
        }]
      }],
      cdkVirtualScrollViewport: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], {
          read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]
        }]
      }],
      nzExpandedKeysChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzSelectedKeysChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzCheckedKeysChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzSearchValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzContextMenu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzCheckBoxChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzExpandChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeComponent.prototype, "nzShowIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeComponent.prototype, "nzBlockNode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzExpandAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzSelectMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeComponent.prototype, "nzShowExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzShowLine", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzCheckable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzAsyncData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)], NzTreeComponent.prototype, "nzDraggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)], NzTreeComponent.prototype, "nzMultiple", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeIndentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-tree-indent',
          exportAs: 'nzTreeIndent',
          template: " <span *ngFor=\"let i of listOfUnit; let index = index\" [ngClass]=\"unitMapOfClass(index)\"></span> ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          host: {
            '[attr.aria-hidden]': 'true',
            '[class.ant-tree-indent]': '!nzSelectMode',
            '[class.ant-select-tree-indent]': 'nzSelectMode'
          }
        }]
      }], function () {
        return [];
      }, {
        nzSelectMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTreeLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzIsStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzIsEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-tree-node-checkbox',
          template: " <span [class.ant-tree-checkbox-inner]=\"!nzSelectMode\" [class.ant-select-tree-checkbox-inner]=\"nzSelectMode\"></span> ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          host: {
            '[class.ant-select-tree-checkbox]': "nzSelectMode",
            '[class.ant-select-tree-checkbox-checked]': "nzSelectMode && isChecked",
            '[class.ant-select-tree-checkbox-indeterminate]': "nzSelectMode && isHalfChecked",
            '[class.ant-select-tree-checkbox-disabled]': "nzSelectMode && (isDisabled || isDisableCheckbox)",
            '[class.ant-tree-checkbox]': "!nzSelectMode",
            '[class.ant-tree-checkbox-checked]': "!nzSelectMode && isChecked",
            '[class.ant-tree-checkbox-indeterminate]': "!nzSelectMode && isHalfChecked",
            '[class.ant-tree-checkbox-disabled]': "!nzSelectMode && (isDisabled || isDisableCheckbox)"
          }
        }]
      }], function () {
        return [];
      }, {
        nzSelectMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isHalfChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isDisableCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-tree-node-switcher',
          template: "\n    <ng-container *ngIf=\"isShowSwitchIcon\">\n      <ng-container *ngIf=\"!isLoading; else loadingTemplate\">\n        <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon; context: { $implicit: context, origin: context.origin }\">\n          <i\n            nz-icon\n            nzType=\"caret-down\"\n            [class.ant-select-tree-switcher-icon]=\"nzSelectMode\"\n            [class.ant-tree-switcher-icon]=\"!nzSelectMode\"\n          ></i>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"nzShowLine\">\n      <ng-container *ngIf=\"!isLoading; else loadingTemplate\">\n        <ng-container *nzStringTemplateOutlet=\"nzExpandedIcon; context: { $implicit: context, origin: context.origin }\">\n          <i\n            *ngIf=\"isShowLineIcon\"\n            nz-icon\n            [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\"\n            class=\"ant-tree-switcher-line-icon\"\n          ></i>\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #loadingTemplate>\n      <i nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\n    </ng-template>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          host: {
            '[class.ant-select-tree-switcher]': 'nzSelectMode',
            '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
            '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
            '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
            '[class.ant-tree-switcher]': '!nzSelectMode',
            '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
            '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
            '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
          }
        }]
      }], function () {
        return [];
      }, {
        nzSelectMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzExpandedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        context: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLeaf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-tree-node-title',
          template: " <ng-template [ngTemplateOutlet]=\"treeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: context, origin: context.origin }\">\n    </ng-template>\n    <ng-container *ngIf=\"!treeTemplate\">\n      <span\n        *ngIf=\"icon && showIcon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"isLoading\"\n        [class.ant-select-tree-iconEle]=\"selectMode\"\n        [class.ant-tree-iconEle]=\"!selectMode\"\n      >\n        <span\n          [class.ant-select-tree-iconEle]=\"selectMode\"\n          [class.ant-select-tree-icon__customize]=\"selectMode\"\n          [class.ant-tree-iconEle]=\"!selectMode\"\n          [class.ant-tree-icon__customize]=\"!selectMode\"\n        >\n          <i nz-icon *ngIf=\"icon\" [nzType]=\"icon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\" [innerHTML]=\"title | nzHighlight: matchedValue:'i':'font-highlight'\"> </span>\n    </ng-container>",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          host: {
            '[attr.title]': 'title',
            '[attr.draggable]': 'canDraggable',
            '[attr.aria-grabbed]': 'canDraggable',
            '[class.draggable]': 'canDraggable',
            '[class.ant-select-tree-node-content-wrapper]': "selectMode",
            '[class.ant-select-tree-node-content-wrapper-open]': "selectMode && isSwitcherOpen",
            '[class.ant-select-tree-node-content-wrapper-close]': "selectMode && isSwitcherClose",
            '[class.ant-select-tree-node-selected]': "selectMode && isSelected",
            '[class.ant-tree-node-content-wrapper]': "!selectMode",
            '[class.ant-tree-node-content-wrapper-open]': "!selectMode && isSwitcherOpen",
            '[class.ant-tree-node-content-wrapper-close]': "!selectMode && isSwitcherClose",
            '[class.ant-tree-node-selected]': "!selectMode && isSelected"
          }
        }]
      }], function () {
        return [];
      }, {
        treeTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        searchValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        draggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        context: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isMatched: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLeaf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-tree-node',
          exportAs: 'nzTreeNode',
          template: "\n    <nz-tree-indent [nzTreeLevel]=\"nzTreeNode.level\" [nzSelectMode]=\"nzSelectMode\" [nzIsStart]=\"isStart\" [nzIsEnd]=\"isEnd\"></nz-tree-indent>\n    <nz-tree-node-switcher\n      *ngIf=\"nzShowExpand\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandedIcon]=\"nzExpandedIcon\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [context]=\"nzTreeNode\"\n      [isLeaf]=\"isLeaf\"\n      [isExpanded]=\"isExpanded\"\n      [isLoading]=\"isLoading\"\n      (click)=\"clickExpand($event)\"\n    ></nz-tree-node-switcher>\n    <nz-tree-node-checkbox\n      *ngIf=\"nzCheckable\"\n      (click)=\"clickCheckBox($event)\"\n      [nzSelectMode]=\"nzSelectMode\"\n      [isChecked]=\"isChecked\"\n      [isHalfChecked]=\"isHalfChecked\"\n      [isDisabled]=\"isDisabled\"\n      [isDisableCheckbox]=\"isDisableCheckbox\"\n    ></nz-tree-node-checkbox>\n    <nz-tree-node-title\n      [icon]=\"icon\"\n      [title]=\"title\"\n      [isLoading]=\"isLoading\"\n      [isSelected]=\"isSelected\"\n      [isDisabled]=\"isDisabled\"\n      [isMatched]=\"isMatched\"\n      [isExpanded]=\"isExpanded\"\n      [isLeaf]=\"isLeaf\"\n      [searchValue]=\"nzSearchValue\"\n      [treeTemplate]=\"nzTreeTemplate\"\n      [draggable]=\"nzDraggable\"\n      [showIcon]=\"nzShowIcon\"\n      [selectMode]=\"nzSelectMode\"\n      [context]=\"nzTreeNode\"\n      (dblclick)=\"dblClick($event)\"\n      (click)=\"clickSelect($event)\"\n      (contextmenu)=\"contextMenu($event)\"\n    ></nz-tree-node-title>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          preserveWhitespaces: false,
          host: {
            '[class.ant-select-tree-treenode]': "nzSelectMode",
            '[class.ant-select-tree-treenode-disabled]': "nzSelectMode && isDisabled",
            '[class.ant-select-tree-treenode-switcher-open]': "nzSelectMode && isSwitcherOpen",
            '[class.ant-select-tree-treenode-switcher-close]': "nzSelectMode && isSwitcherClose",
            '[class.ant-select-tree-treenode-checkbox-checked]': "nzSelectMode && isChecked",
            '[class.ant-select-tree-treenode-checkbox-indeterminate]': "nzSelectMode && isHalfChecked",
            '[class.ant-select-tree-treenode-selected]': "nzSelectMode && isSelected",
            '[class.ant-select-tree-treenode-loading]': "nzSelectMode && isLoading",
            '[class.ant-tree-treenode]': "!nzSelectMode",
            '[class.ant-tree-treenode-disabled]': "!nzSelectMode && isDisabled",
            '[class.ant-tree-treenode-switcher-open]': "!nzSelectMode && isSwitcherOpen",
            '[class.ant-tree-treenode-switcher-close]': "!nzSelectMode && isSwitcherClose",
            '[class.ant-tree-treenode-checkbox-checked]': "!nzSelectMode && isChecked",
            '[class.ant-tree-treenode-checkbox-indeterminate]': "!nzSelectMode && isHalfChecked",
            '[class.ant-tree-treenode-selected]': "!nzSelectMode && isSelected",
            '[class.ant-tree-treenode-loading]': "!nzSelectMode && isLoading",
            '[style.display]': 'displayStyle',
            '(mousedown)': 'onMousedown($event)'
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isMatched: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzHideUnMatched: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzNoAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSelectMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTreeTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSearchValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDraggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzCheckBoxChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzExpandChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        isExpanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isLeaf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isHalfChecked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isDisableCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isSelectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        canHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTreeNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCheckable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAsyncData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzExpandedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBeforeDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-tree',
          exportAs: 'nzTree',
          animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__["treeCollapseMotion"]],
          template: "\n    <div role=\"tree\">\n      <input [ngStyle]=\"HIDDEN_STYLE\" />\n    </div>\n    <div [class.ant-select-tree-list]=\"nzSelectMode\" [class.ant-tree-list]=\"nzSelectMode\">\n      <div>\n        <cdk-virtual-scroll-viewport\n          *ngIf=\"nzVirtualHeight\"\n          [class.ant-select-tree-list-holder-inner]=\"nzSelectMode\"\n          [class.ant-tree-list-holder-inner]=\"nzSelectMode\"\n          [itemSize]=\"nzVirtualItemSize\"\n          [minBufferPx]=\"nzVirtualMinBufferPx\"\n          [maxBufferPx]=\"nzVirtualMaxBufferPx\"\n          [style.height]=\"nzVirtualHeight\"\n        >\n          <ng-container *cdkVirtualFor=\"let node of nzFlattenNodes; trackBy: trackByFlattenNode\">\n            <ng-template [ngTemplateOutlet]=\"nodeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: node }\"></ng-template>\n          </ng-container>\n        </cdk-virtual-scroll-viewport>\n\n        <div\n          *ngIf=\"!nzVirtualHeight\"\n          [class.ant-select-tree-list-holder-inner]=\"nzSelectMode\"\n          [class.ant-tree-list-holder-inner]=\"nzSelectMode\"\n          [@.disabled]=\"beforeInit || noAnimation?.nzNoAnimation\"\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n          [@treeCollapseMotion]=\"nzFlattenNodes.length\"\n        >\n          <ng-container *ngFor=\"let node of nzFlattenNodes; trackBy: trackByFlattenNode\">\n            <ng-template [ngTemplateOutlet]=\"nodeTemplate\" [ngTemplateOutletContext]=\"{ $implicit: node }\"></ng-template>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-template #nodeTemplate let-treeNode>\n      <nz-tree-node\n        [icon]=\"treeNode.icon\"\n        [title]=\"treeNode.title\"\n        [isLoading]=\"treeNode.isLoading\"\n        [isSelected]=\"treeNode.isSelected\"\n        [isDisabled]=\"treeNode.isDisabled\"\n        [isMatched]=\"treeNode.isMatched\"\n        [isExpanded]=\"treeNode.isExpanded\"\n        [isLeaf]=\"treeNode.isLeaf\"\n        [isStart]=\"treeNode.isStart\"\n        [isEnd]=\"treeNode.isEnd\"\n        [isChecked]=\"treeNode.isChecked\"\n        [isHalfChecked]=\"treeNode.isHalfChecked\"\n        [isDisableCheckbox]=\"treeNode.isDisableCheckbox\"\n        [isSelectable]=\"treeNode.isSelectable\"\n        [canHide]=\"treeNode.canHide\"\n        [nzTreeNode]=\"treeNode\"\n        [nzSelectMode]=\"nzSelectMode\"\n        [nzShowLine]=\"nzShowLine\"\n        [nzExpandedIcon]=\"nzExpandedIcon\"\n        [nzDraggable]=\"nzDraggable\"\n        [nzCheckable]=\"nzCheckable\"\n        [nzShowExpand]=\"nzShowExpand\"\n        [nzAsyncData]=\"nzAsyncData\"\n        [nzSearchValue]=\"nzSearchValue\"\n        [nzHideUnMatched]=\"nzHideUnMatched\"\n        [nzBeforeDrop]=\"nzBeforeDrop\"\n        [nzShowIcon]=\"nzShowIcon\"\n        [nzTreeTemplate]=\"nzTreeTemplate || nzTreeTemplateChild\"\n        (nzExpandChange)=\"eventTriggerChanged($event)\"\n        (nzClick)=\"eventTriggerChanged($event)\"\n        (nzDblClick)=\"eventTriggerChanged($event)\"\n        (nzContextMenu)=\"eventTriggerChanged($event)\"\n        (nzCheckBoxChange)=\"eventTriggerChanged($event)\"\n        (nzOnDragStart)=\"eventTriggerChanged($event)\"\n        (nzOnDragEnter)=\"eventTriggerChanged($event)\"\n        (nzOnDragOver)=\"eventTriggerChanged($event)\"\n        (nzOnDragLeave)=\"eventTriggerChanged($event)\"\n        (nzOnDragEnd)=\"eventTriggerChanged($event)\"\n        (nzOnDrop)=\"eventTriggerChanged($event)\"\n      >\n      </nz-tree-node>\n    </ng-template>\n  ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          providers: [NzTreeService, {
            provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"],
            useFactory: NzTreeServiceFactory,
            deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeHigherOrderServiceToken"]], NzTreeService]
          }, {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return NzTreeComponent;
            }),
            multi: true
          }],
          host: {
            '[class.ant-select-tree]': "nzSelectMode",
            '[class.ant-select-tree-show-line]': "nzSelectMode && nzShowLine",
            '[class.ant-select-tree-icon-hide]': "nzSelectMode && !nzShowIcon",
            '[class.ant-select-tree-block-node]': "nzSelectMode && nzBlockNode",
            '[class.ant-tree]': "!nzSelectMode",
            '[class.ant-tree-show-line]': "!nzSelectMode && nzShowLine",
            '[class.ant-tree-icon-hide]': "!nzSelectMode && !nzShowIcon",
            '[class.ant-tree-block-node]': "!nzSelectMode && nzBlockNode",
            '[class.draggable-tree]': "nzDraggable"
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      }, {
        nzShowIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzHideUnMatched: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBlockNode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzExpandAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSelectMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCheckStrictly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzShowLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCheckable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzAsyncData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzDraggable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzMultiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzVirtualItemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzVirtualMaxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzVirtualMinBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzVirtualHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzExpandedKeys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSelectedKeys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCheckedKeys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzExpandedKeysChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzSelectedKeysChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzCheckedKeysChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzSearchValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzDblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzCheckBoxChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzExpandChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzExpandedIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTreeTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBeforeDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSearchValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzSearchFunc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTreeTemplateChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: ['nzTreeTemplate', {
            "static": true
          }]
        }],
        cdkVirtualScrollViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], {
            read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: tree.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTreeModule = function NzTreeModule() {
      _classCallCheck(this, NzTreeModule);
    };

    NzTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NzTreeModule
    });
    NzTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NzTreeModule_Factory(t) {
        return new (t || NzTreeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"], ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzTreeModule, {
        declarations: function declarations() {
          return [NzTreeComponent, NzTreeNodeComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeCheckboxComponent, NzTreeNodeTitleComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"], ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        },
        exports: function exports() {
          return [NzTreeComponent, NzTreeNodeComponent, NzTreeIndentComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"], ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [NzTreeComponent, NzTreeNodeComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeCheckboxComponent, NzTreeNodeTitleComponent],
          exports: [NzTreeComponent, NzTreeNodeComponent, NzTreeIndentComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-tree.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-tree.js.map

    /***/

  },

  /***/
  "./src/app/pages/account/person-right-content/person-right-content.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/account/person-right-content/person-right-content.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PersonRightContentComponent */

  /***/
  function srcAppPagesAccountPersonRightContentPersonRightContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonRightContentComponent", function () {
      return PersonRightContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/modal */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/table */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-zorro-antd/badge */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-badge.js");

    function PersonRightContentComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function PersonRightContentComponent_tr_57_Template_td_nzCheckedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var data_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onItemChecked(data_r2.id, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-badge", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r1.setOfCheckedId.has(data_r2.id))("nzDisabled", data_r2.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.account);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.phoneNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.organization);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", data_r2.status ? "success" : "error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r2.status ? "\u6B63\u5E38" : "\u7981\u7528", " ");
      }
    }

    var PersonRightContentComponent = /*#__PURE__*/function () {
      function PersonRightContentComponent(fb, modal, router) {
        _classCallCheck(this, PersonRightContentComponent);

        this.fb = fb;
        this.modal = modal;
        this.router = router;
        this.isResetVisible = false;
        this.checked = false;
        this.loading = false;
        this.indeterminate = false;
        this.listOfData = [];
        this.listOfCurrentPageData = [];
        this.setOfCheckedId = new Set();
      }

      _createClass(PersonRightContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listOfData = new Array(5).fill(0).map(function (_, index) {
            return {
              id: index,
              account: "123456_".concat(index),
              name: "\u80E1\u6C49\u4E09-".concat(index),
              phoneNumber: 13592835212,
              gender: '男',
              organization: "\u9526\u7EE3\u82B1\u56ED\u2014\u2014".concat(index),
              role: 'admin',
              status: index % 2 == 0,
              disabled: index % 2 == 0
            };
          }); // 初始化表单

          this.validateForm = this.fb.group({
            superAdminPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            curAdminPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "updateCheckedSet",
        value: function updateCheckedSet(id, checked) {
          if (checked) {
            this.setOfCheckedId.add(id);
          } else {
            this.setOfCheckedId["delete"](id);
          }
        }
      }, {
        key: "onCurrentPageDataChange",
        value: function onCurrentPageDataChange(listOfCurrentPageData) {
          this.listOfCurrentPageData = listOfCurrentPageData;
          this.refreshCheckedStatus();
        }
      }, {
        key: "refreshCheckedStatus",
        value: function refreshCheckedStatus() {
          var _this23 = this;

          var listOfEnabledData = this.listOfCurrentPageData.filter(function (_ref3) {
            var disabled = _ref3.disabled;
            return !disabled;
          });
          this.checked = listOfEnabledData.every(function (_ref4) {
            var id = _ref4.id;
            return _this23.setOfCheckedId.has(id);
          });
          this.indeterminate = listOfEnabledData.some(function (_ref5) {
            var id = _ref5.id;
            return _this23.setOfCheckedId.has(id);
          }) && !this.checked;
        }
      }, {
        key: "onItemChecked",
        value: function onItemChecked(id, checked) {
          this.updateCheckedSet(id, checked);
          this.refreshCheckedStatus();
        }
      }, {
        key: "onAllChecked",
        value: function onAllChecked(checked) {
          var _this24 = this;

          this.listOfCurrentPageData.filter(function (_ref6) {
            var disabled = _ref6.disabled;
            return !disabled;
          }).forEach(function (_ref7) {
            var id = _ref7.id;
            return _this24.updateCheckedSet(id, checked);
          });
          this.refreshCheckedStatus();
        }
      }, {
        key: "sendRequest",
        value: function sendRequest() {
          var _this25 = this;

          this.loading = true;
          var requestData = this.listOfData.filter(function (data) {
            return _this25.setOfCheckedId.has(data.id);
          });
          console.log(requestData);
          setTimeout(function () {
            _this25.setOfCheckedId.clear();

            _this25.refreshCheckedStatus();

            _this25.loading = false;
          }, 1000);
        } // btns

      }, {
        key: "add",
        value: function add() {
          console.log('add');
          this.router.navigate(['/admin/person/infoUpdate/', 'add']);
        }
      }, {
        key: "prohibit",
        value: function prohibit() {
          console.log('prohibit');
          this.modal.confirm({
            nzTitle: '提示',
            nzContent: '<b>禁用管理员后，管理员将不可登录，确定禁用管理员：<i style="color:red;">胡彦斌(123456)</i>？</b>',
            nzOkText: '禁用',
            nzCancelText: '取消',
            nzOnOk: function nzOnOk() {
              return console.log('OK');
            }
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          console.log('edit');
          this.router.navigate(['/admin/person/infoUpdate/', 'edit']);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.isResetVisible = true;
        }
      }, {
        key: "resetHandleOk",
        value: function resetHandleOk() {
          console.log('Button ok clicked!');

          for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
          }

          console.log('formdata', this.validateForm.controls);
          this.isResetVisible = false;
        }
      }, {
        key: "resetHandleCancel",
        value: function resetHandleCancel() {
          console.log('Button cancel clicked!'); // e.preventDefault();

          this.validateForm.reset();
          this.isResetVisible = false;
        }
      }, {
        key: "delete",
        value: function _delete() {
          console.log('delete');
          this.modal.confirm({
            nzTitle: '提示',
            nzContent: '<b style="color: red">你正在删除管理员，删除后不可恢复，确定删除？</b>',
            nzOkType: 'danger',
            nzOkText: '删除',
            nzOnOk: function nzOnOk() {
              return console.log('OK');
            }
          });
        }
      }]);

      return PersonRightContentComponent;
    }();

    PersonRightContentComponent.ɵfac = function PersonRightContentComponent_Factory(t) {
      return new (t || PersonRightContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PersonRightContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonRightContentComponent,
      selectors: [["app-person-right-content"]],
      decls: 58,
      vars: 18,
      consts: [["nz-typography", "", 1, "regionTitle", 2, "font-weight", "bold"], [1, "or-header"], [1, "organization-search"], ["nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u673A\u6784\u540D\u79F0", 1, "search-ipt", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "primary", 1, "or-search-btn"], ["nz-button", "", "nzType", "default"], [1, "btns"], [3, "click"], ["nzTitle", "\u91CD\u7F6E\u5BC6\u7801", 3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzFor", "superAdminPassword", "nzRequired", "", 3, "nzSpan", "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u8F93\u5165\u8D85\u7EA7\u7BA1\u7406\u5458\u5BC6\u7801", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "superAdminPassword", "placeholder", "\u8BF7\u8F93\u5165\u8D85\u7EA7\u7BA1\u7406\u5458\u5BC6\u7801", "id", "superAdminPassword"], ["nzFor", "curAdminPassword", "nzRequired", "", 3, "nzSpan", "nzSm", "nzXs"], ["nzErrorTip", "\u8BF7\u8F93\u51658-16\u4F4D\u6570\u5B57\u3001\u5B57\u6BCD\u7EC4\u5408\u7684\u5BC6\u7801", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "curAdminPassword", "placeholder", "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801", "id", "curAdminPassword"], [1, "modalBtns"], ["nz-button", "", "nzType", "primary", 1, "submit"], ["nz-button", "", 1, "cancel", 3, "click"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzData", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], [3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], [4, "ngFor", "ngForOf"], [3, "nzChecked", "nzDisabled", "nzCheckedChange"], [3, "nzStatus"]],
      template: function PersonRightContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5E7F\u5DDE\u519B\u533A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonRightContentComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u67E5\u8BE2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u91CD\u7F6E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonRightContentComponent_Template_a_click_10_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u65B0\u589E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonRightContentComponent_Template_a_click_12_listener() {
            return ctx.prohibit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u7981\u7528\u7528\u6237");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonRightContentComponent_Template_a_click_14_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u91CD\u7F6E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonRightContentComponent_Template_a_click_16_listener() {
            return ctx.edit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u7F16\u8F91");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonRightContentComponent_Template_a_click_18_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5220\u9664");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-modal", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PersonRightContentComponent_Template_nz_modal_nzVisibleChange_20_listener($event) {
            return ctx.isResetVisible = $event;
          })("nzOnCancel", function PersonRightContentComponent_Template_nz_modal_nzOnCancel_20_listener() {
            return ctx.resetHandleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PersonRightContentComponent_Template_form_ngSubmit_21_listener() {
            return ctx.resetHandleOk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-form-label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u8D85\u7EA7\u7BA1\u7406\u5458\u5BC6\u7801");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-form-control", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u5F53\u524D\u7BA1\u7406\u5458\u65B0\u5BC6\u7801");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-form-control", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u63D0\u4EA4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonRightContentComponent_Template_button_click_35_listener() {
            return ctx.resetHandleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u53D6\u6D88");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-table", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function PersonRightContentComponent_Template_nz_table_nzCurrentPageDataChange_37_listener($event) {
            return ctx.onCurrentPageDataChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function PersonRightContentComponent_Template_th_nzCheckedChange_41_listener($event) {
            return ctx.onAllChecked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u8D26\u53F7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u6635\u79F0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u624B\u673A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u59D3\u540D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u6240\u5C5E\u673A\u6784");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u89D2\u8272");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u8D26\u53F7\u72B6\u6001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PersonRightContentComponent_tr_57_Template, 17, 10, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isResetVisible)("nzFooter", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5)("nzSm", 8)("nzXs", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 5)("nzSm", 8)("nzXs", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 12)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        }
      },
      directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzThSelectionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_10__["NzTdAddOnComponent"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_12__["NzBadgeComponent"]],
      styles: [".or-header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n}\n.or-header[_ngcontent-%COMP%]   .organization-search[_ngcontent-%COMP%] {\n  display: flex;\n}\n.or-header[_ngcontent-%COMP%]   .organization-search[_ngcontent-%COMP%]   .search-ipt[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.or-header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.or-header[_ngcontent-%COMP%]   .or-search-btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.modalBtns[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.modalBtns[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  margin: 0 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nL1B1YmxpYy9uZy9uZy1hZG1pbi9zcmMvYXBwL3BhZ2VzL2FjY291bnQvcGVyc29uLXJpZ2h0LWNvbnRlbnQvcGVyc29uLXJpZ2h0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcGVyc29uLXJpZ2h0LWNvbnRlbnQvcGVyc29uLXJpZ2h0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FER0k7RUFDRSxZQUFBO0FDRE47QURLRTtFQUNFLGNBQUE7QUNISjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0xGO0FETUU7RUFDRSxjQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L3BlcnNvbi1yaWdodC1jb250ZW50L3BlcnNvbi1yaWdodC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAub3JnYW5pemF0aW9uLXNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnNlYXJjaC1pcHQge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRucyB7XHJcbiAgICBhIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9yLXNlYXJjaC1idG4ge1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1vZGFsQnRuc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgLnN1Ym1pdCB7XHJcbiAgICBtYXJnaW46IDAgMjRweDtcclxuICB9XHJcbn0iLCIub3ItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3ItaGVhZGVyIC5vcmdhbml6YXRpb24tc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vci1oZWFkZXIgLm9yZ2FuaXphdGlvbi1zZWFyY2ggLnNlYXJjaC1pcHQge1xuICB3aWR0aDogMjUwcHg7XG59XG4ub3ItaGVhZGVyIC5idG5zIGEge1xuICBwYWRkaW5nOiA1cHg7XG59XG4ub3ItaGVhZGVyIC5vci1zZWFyY2gtYnRuIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5tb2RhbEJ0bnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tb2RhbEJ0bnMgLnN1Ym1pdCB7XG4gIG1hcmdpbjogMCAyNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonRightContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-person-right-content',
          templateUrl: './person-right-content.component.html',
          styleUrls: ['./person-right-content.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/account/person-right-content/person-right-content.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/account/person-right-content/person-right-content.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PersonRightContentModule */

  /***/
  function srcAppPagesAccountPersonRightContentPersonRightContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonRightContentModule", function () {
      return PersonRightContentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _person_right_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./person-right-content.component */
    "./src/app/pages/account/person-right-content/person-right-content.component.ts");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/table */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
    /* harmony import */


    var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/divider */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/modal */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/badge */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-badge.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");

    var PersonRightContentModule = function PersonRightContentModule() {
      _classCallCheck(this, PersonRightContentModule);
    };

    PersonRightContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PersonRightContentModule
    });
    PersonRightContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PersonRightContentModule_Factory(t) {
        return new (t || PersonRightContentModule)();
      },
      providers: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__["NzBadgeModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonRightContentModule, {
        declarations: [_person_right_content_component__WEBPACK_IMPORTED_MODULE_2__["PersonRightContentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__["NzBadgeModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"]],
        exports: [_person_right_content_component__WEBPACK_IMPORTED_MODULE_2__["PersonRightContentComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonRightContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__["NzBadgeModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__["NzGridModule"]],
          declarations: [_person_right_content_component__WEBPACK_IMPORTED_MODULE_2__["PersonRightContentComponent"]],
          exports: [_person_right_content_component__WEBPACK_IMPORTED_MODULE_2__["PersonRightContentComponent"]],
          providers: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/account/region-tree/region-tree.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/account/region-tree/region-tree.component.ts ***!
    \********************************************************************/

  /*! exports provided: RegionTreeComponent */

  /***/
  function srcAppPagesAccountRegionTreeRegionTreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionTreeComponent", function () {
      return RegionTreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/tree */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js");

    function RegionTreeComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
      }
    }

    var RegionTreeComponent = /*#__PURE__*/function () {
      function RegionTreeComponent() {
        _classCallCheck(this, RegionTreeComponent);

        this.searchValue = '';
        this.nodes = [{
          title: '广州军区',
          key: '0-0',
          children: [{
            title: '广州营区',
            key: '0-0-0',
            children: [{
              title: '海军战队',
              key: '0-0-0-0',
              isLeaf: true
            }, {
              title: '炮兵连',
              key: '0-0-0-1',
              isLeaf: true
            }]
          }]
        }, {
          title: '北京军区',
          key: '0-1',
          children: [{
            title: '炮兵连',
            key: '0-1-0-0',
            isLeaf: true
          }]
        }, {
          title: '兰州军区',
          key: '0-2',
          children: [{
            title: '特战旅',
            key: '0-1-0-0',
            isLeaf: true
          }]
        }];
      }

      _createClass(RegionTreeComponent, [{
        key: "nzEvent",
        value: function nzEvent(event) {
          console.log(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegionTreeComponent;
    }();

    RegionTreeComponent.ɵfac = function RegionTreeComponent_Factory(t) {
      return new (t || RegionTreeComponent)();
    };

    RegionTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegionTreeComponent,
      selectors: [["app-region-tree"]],
      decls: 7,
      vars: 4,
      consts: [["nz-typography", "", 1, "regionTitle"], [3, "nzSuffix"], ["type", "text", "nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelChange"], ["suffixIcon", ""], [3, "nzData", "nzSearchValue", "nzClick", "nzExpandChange", "nzSearchValueChange"], ["nz-icon", "", "nzType", "search"]],
      template: function RegionTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u4E2D\u56FD\u4EBA\u6C11\u89E3\u653E\u519B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-input-group", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegionTreeComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.searchValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegionTreeComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tree", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function RegionTreeComponent_Template_nz_tree_nzClick_6_listener($event) {
            return ctx.nzEvent($event);
          })("nzExpandChange", function RegionTreeComponent_Template_nz_tree_nzExpandChange_6_listener($event) {
            return ctx.nzEvent($event);
          })("nzSearchValueChange", function RegionTreeComponent_Template_nz_tree_nzSearchValueChange_6_listener($event) {
            return ctx.nzEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzSearchValue", ctx.searchValue);
        }
      },
      directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_3__["NzTreeComponent"]],
      styles: [".regionTitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nL1B1YmxpYy9uZy9uZy1hZG1pbi9zcmMvYXBwL3BhZ2VzL2FjY291bnQvcmVnaW9uLXRyZWUvcmVnaW9uLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcmVnaW9uLXRyZWUvcmVnaW9uLXRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L3JlZ2lvbi10cmVlL3JlZ2lvbi10cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lvblRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCIucmVnaW9uVGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-region-tree',
          templateUrl: './region-tree.component.html',
          styleUrls: ['./region-tree.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/account/region-tree/region-tree.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/account/region-tree/region-tree.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RegionTreeModule */

  /***/
  function srcAppPagesAccountRegionTreeRegionTreeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegionTreeModule", function () {
      return RegionTreeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _region_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./region-tree.component */
    "./src/app/pages/account/region-tree/region-tree.component.ts");
    /* harmony import */


    var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/page-header */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-page-header.js");
    /* harmony import */


    var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/breadcrumb */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js");
    /* harmony import */


    var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/divider */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
    /* harmony import */


    var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/tree */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegionTreeModule = function RegionTreeModule() {
      _classCallCheck(this, RegionTreeModule);
    };

    RegionTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegionTreeModule
    });
    RegionTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegionTreeModule_Factory(t) {
        return new (t || RegionTreeModule)();
      },
      imports: [[ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__["NzDividerModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_5__["NzTreeModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegionTreeModule, {
        declarations: [_region_tree_component__WEBPACK_IMPORTED_MODULE_1__["RegionTreeComponent"]],
        imports: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__["NzDividerModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_5__["NzTreeModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        exports: [_region_tree_component__WEBPACK_IMPORTED_MODULE_1__["RegionTreeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_2__["NzPageHeaderModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["NzBreadCrumbModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_4__["NzDividerModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_5__["NzTreeModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
          declarations: [_region_tree_component__WEBPACK_IMPORTED_MODULE_1__["RegionTreeComponent"]],
          exports: [_region_tree_component__WEBPACK_IMPORTED_MODULE_1__["RegionTreeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~pages-account-person-info-update-person-info-update-module~pages-account-person-person-module-es5.js.map