function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-organization-organization-module~pages-account-person-info-update-person-info-~86bf2d2b"], {
  /***/
  "./node_modules/date-fns/esm/addDays/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/esm/addDays/index.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmAddDaysIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return addDays;
    });
    /* harmony import */


    var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../_lib/toInteger/index.js */
    "./node_modules/date-fns/esm/_lib/toInteger/index.js");
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name addDays
     * @category Day Helpers
     * @summary Add the specified number of days to the given date.
     *
     * @description
     * Add the specified number of days to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
     * @returns {Date} the new date with the days added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 10 days to 1 September 2014:
     * var result = addDays(new Date(2014, 8, 1), 10)
     * //=> Thu Sep 11 2014 00:00:00
     */


    function addDays(dirtyDate, dirtyAmount) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
      var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);

      if (isNaN(amount)) {
        return new Date(NaN);
      }

      if (!amount) {
        // If 0 days, no-op to avoid changing times in the hour before end of DST
        return date;
      }

      date.setDate(date.getDate() + amount);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/addMonths/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmAddMonthsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return addMonths;
    });
    /* harmony import */


    var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../_lib/toInteger/index.js */
    "./node_modules/date-fns/esm/_lib/toInteger/index.js");
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name addMonths
     * @category Month Helpers
     * @summary Add the specified number of months to the given date.
     *
     * @description
     * Add the specified number of months to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
     * @returns {Date} the new date with the months added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 5 months to 1 September 2014:
     * var result = addMonths(new Date(2014, 8, 1), 5)
     * //=> Sun Feb 01 2015 00:00:00
     */


    function addMonths(dirtyDate, dirtyAmount) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
      var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);

      if (isNaN(amount)) {
        return new Date(NaN);
      }

      if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return date;
      }

      var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
      // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
      // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
      // want except that dates will wrap around the end of a month, meaning that
      // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
      // we'll default to the end of the desired month by adding 1 to the desired
      // month and using a date of 0 to back up one day to the end of the desired
      // month.

      var endOfDesiredMonth = new Date(date.getTime());
      endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
      var daysInMonth = endOfDesiredMonth.getDate();

      if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
      } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return date;
      }
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/addYears/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/esm/addYears/index.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmAddYearsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return addYears;
    });
    /* harmony import */


    var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../_lib/toInteger/index.js */
    "./node_modules/date-fns/esm/_lib/toInteger/index.js");
    /* harmony import */


    var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../addMonths/index.js */
    "./node_modules/date-fns/esm/addMonths/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name addYears
     * @category Year Helpers
     * @summary Add the specified number of years to the given date.
     *
     * @description
     * Add the specified number of years to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
     * @returns {Date} the new date with the years added
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Add 5 years to 1 September 2014:
     * var result = addYears(new Date(2014, 8, 1), 5)
     * //=> Sun Sep 01 2019 00:00:00
     */


    function addYears(dirtyDate, dirtyAmount) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
      var amount = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyAmount);
      return Object(_addMonths_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, amount * 12);
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInCalendarDaysIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInCalendarDays;
    });
    /* harmony import */


    var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */
    "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
    /* harmony import */


    var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../startOfDay/index.js */
    "./node_modules/date-fns/esm/startOfDay/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

    var MILLISECONDS_IN_DAY = 86400000;
    /**
     * @name differenceInCalendarDays
     * @category Day Helpers
     * @summary Get the number of calendar days between the given dates.
     *
     * @description
     * Get the number of calendar days between the given dates. This means that the times are removed
     * from the dates and then the difference in days is calculated.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar days
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many calendar days are between
     * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
     * var result = differenceInCalendarDays(
     *   new Date(2012, 6, 2, 0, 0),
     *   new Date(2011, 6, 2, 23, 0)
     * )
     * //=> 366
     * // How many calendar days are between
     * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
     * var result = differenceInCalendarDays(
     *   new Date(2011, 6, 3, 0, 1),
     *   new Date(2011, 6, 2, 23, 59)
     * )
     * //=> 1
     */

    function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
      var startOfDayLeft = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
      var startOfDayRight = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
      var timestampLeft = startOfDayLeft.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(startOfDayLeft);
      var timestampRight = startOfDayRight.getTime() - Object(_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(startOfDayRight); // Round the number of days to the nearest integer
      // because the number of milliseconds in a day is not constant
      // (e.g. it's different in the day of the daylight saving time clock shift)

      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInCalendarMonthsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInCalendarMonths;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name differenceInCalendarMonths
     * @category Month Helpers
     * @summary Get the number of calendar months between the given dates.
     *
     * @description
     * Get the number of calendar months between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar months
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many calendar months are between 31 January 2014 and 1 September 2014?
     * var result = differenceInCalendarMonths(
     *   new Date(2014, 8, 1),
     *   new Date(2014, 0, 31)
     * )
     * //=> 8
     */


    function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
      return yearDiff * 12 + monthDiff;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInCalendarYearsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInCalendarYears;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name differenceInCalendarYears
     * @category Year Helpers
     * @summary Get the number of calendar years between the given dates.
     *
     * @description
     * Get the number of calendar years between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of calendar years
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many calendar years are between 31 December 2013 and 11 February 2015?
     * var result = differenceInCalendarYears(
     *   new Date(2015, 1, 11),
     *   new Date(2013, 11, 31)
     * )
     * //=> 2
     */


    function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeft.getFullYear() - dateRight.getFullYear();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInHours/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInHoursIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInHours;
    });
    /* harmony import */


    var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../differenceInMilliseconds/index.js */
    "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

    var MILLISECONDS_IN_HOUR = 3600000;
    /**
     * @name differenceInHours
     * @category Hour Helpers
     * @summary Get the number of hours between the given dates.
     *
     * @description
     * Get the number of hours between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of hours
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
     * var result = differenceInHours(
     *   new Date(2014, 6, 2, 19, 0),
     *   new Date(2014, 6, 2, 6, 50)
     * )
     * //=> 12
     */

    function differenceInHours(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var diff = Object(_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInMillisecondsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInMilliseconds;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name differenceInMilliseconds
     * @category Millisecond Helpers
     * @summary Get the number of milliseconds between the given dates.
     *
     * @description
     * Get the number of milliseconds between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of milliseconds
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many milliseconds are between
     * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
     * var result = differenceInMilliseconds(
     *   new Date(2014, 6, 2, 12, 30, 21, 700),
     *   new Date(2014, 6, 2, 12, 30, 20, 600)
     * )
     * //=> 1100
     */


    function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeft.getTime() - dateRight.getTime();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInMinutes/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInMinutesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInMinutes;
    });
    /* harmony import */


    var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../differenceInMilliseconds/index.js */
    "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

    var MILLISECONDS_IN_MINUTE = 60000;
    /**
     * @name differenceInMinutes
     * @category Minute Helpers
     * @summary Get the number of minutes between the given dates.
     *
     * @description
     * Get the signed number of full (rounded towards 0) minutes between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of minutes
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
     * var result = differenceInMinutes(
     *   new Date(2014, 6, 2, 12, 20, 0),
     *   new Date(2014, 6, 2, 12, 7, 59)
     * )
     * //=> 12
     *
     * @example
     * // How many minutes are from 10:01:59 to 10:00:00
     * var result = differenceInMinutes(
     *   new Date(2000, 0, 1, 10, 0, 0),
     *   new Date(2000, 0, 1, 10, 1, 59)
     * )
     * //=> -1
     */

    function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var diff = Object(_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/differenceInSeconds/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmDifferenceInSecondsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return differenceInSeconds;
    });
    /* harmony import */


    var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../differenceInMilliseconds/index.js */
    "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name differenceInSeconds
     * @category Second Helpers
     * @summary Get the number of seconds between the given dates.
     *
     * @description
     * Get the number of seconds between the given dates.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the later date
     * @param {Date|Number} dateRight - the earlier date
     * @returns {Number} the number of seconds
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // How many seconds are between
     * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
     * var result = differenceInSeconds(
     *   new Date(2014, 6, 2, 12, 30, 20, 0),
     *   new Date(2014, 6, 2, 12, 30, 7, 999)
     * )
     * //=> 12
     */


    function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var diff = Object(_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft, dirtyDateRight) / 1000;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/endOfDay/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmEndOfDayIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return endOfDay;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name endOfDay
     * @category Day Helpers
     * @summary Return the end of a day for the given date.
     *
     * @description
     * Return the end of a day for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the end of a day
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The end of a day for 2 September 2014 11:55:00:
     * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 02 2014 23:59:59.999
     */


    function endOfDay(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      date.setHours(23, 59, 59, 999);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/endOfMonth/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmEndOfMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return endOfMonth;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name endOfMonth
     * @category Month Helpers
     * @summary Return the end of a month for the given date.
     *
     * @description
     * Return the end of a month for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the end of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The end of a month for 2 September 2014 11:55:00:
     * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 30 2014 23:59:59.999
     */


    function endOfMonth(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(23, 59, 59, 999);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/getDaysInMonth/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmGetDaysInMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return getDaysInMonth;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name getDaysInMonth
     * @category Month Helpers
     * @summary Get the number of days in a month of the given date.
     *
     * @description
     * Get the number of days in a month of the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the given date
     * @returns {Number} the number of days in a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // How many days are in February 2000?
     * var result = getDaysInMonth(new Date(2000, 1))
     * //=> 29
     */


    function getDaysInMonth(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      var year = date.getFullYear();
      var monthIndex = date.getMonth();
      var lastDayOfMonth = new Date(0);
      lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
      lastDayOfMonth.setHours(0, 0, 0, 0);
      return lastDayOfMonth.getDate();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isFirstDayOfMonth/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/date-fns/esm/isFirstDayOfMonth/index.js ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsFirstDayOfMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isFirstDayOfMonth;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isFirstDayOfMonth
     * @category Month Helpers
     * @summary Is the given date the first day of a month?
     *
     * @description
     * Is the given date the first day of a month?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to check
     * @returns {Boolean} the date is the first day of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // Is 1 September 2014 the first day of a month?
     * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
     * //=> true
     */


    function isFirstDayOfMonth(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      return Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate).getDate() === 1;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsLastDayOfMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isLastDayOfMonth;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../endOfDay/index.js */
    "./node_modules/date-fns/esm/endOfDay/index.js");
    /* harmony import */


    var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../endOfMonth/index.js */
    "./node_modules/date-fns/esm/endOfMonth/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isLastDayOfMonth
     * @category Month Helpers
     * @summary Is the given date the last day of a month?
     *
     * @description
     * Is the given date the last day of a month?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to check
     * @returns {Boolean} the date is the last day of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // Is 28 February 2014 the last day of a month?
     * var result = isLastDayOfMonth(new Date(2014, 1, 28))
     * //=> true
     */


    function isLastDayOfMonth(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      return Object(_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date).getTime() === Object(_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isSameDay/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsSameDayIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isSameDay;
    });
    /* harmony import */


    var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../startOfDay/index.js */
    "./node_modules/date-fns/esm/startOfDay/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isSameDay
     * @category Day Helpers
     * @summary Are the given dates in the same day?
     *
     * @description
     * Are the given dates in the same day?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same day
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
     * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
     * //=> true
     */


    function isSameDay(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeftStartOfDay = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRightStartOfDay = Object(_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isSameHour/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/esm/isSameHour/index.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsSameHourIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isSameHour;
    });
    /* harmony import */


    var _startOfHour_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../startOfHour/index.js */
    "./node_modules/date-fns/esm/startOfHour/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isSameHour
     * @category Hour Helpers
     * @summary Are the given dates in the same hour?
     *
     * @description
     * Are the given dates in the same hour?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same hour
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
     * var result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
     * //=> true
     */


    function isSameHour(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeftStartOfHour = Object(_startOfHour_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRightStartOfHour = Object(_startOfHour_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isSameMinute/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/esm/isSameMinute/index.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsSameMinuteIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isSameMinute;
    });
    /* harmony import */


    var _startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../startOfMinute/index.js */
    "./node_modules/date-fns/esm/startOfMinute/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isSameMinute
     * @category Minute Helpers
     * @summary Are the given dates in the same minute?
     *
     * @description
     * Are the given dates in the same minute?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same minute
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
     * // in the same minute?
     * var result = isSameMinute(
     *   new Date(2014, 8, 4, 6, 30),
     *   new Date(2014, 8, 4, 6, 30, 15)
     * )
     * //=> true
     */


    function isSameMinute(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeftStartOfMinute = Object(_startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRightStartOfMinute = Object(_startOfMinute_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isSameMonth/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsSameMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isSameMonth;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isSameMonth
     * @category Month Helpers
     * @summary Are the given dates in the same month?
     *
     * @description
     * Are the given dates in the same month?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same month
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 2 September 2014 and 25 September 2014 in the same month?
     * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
     * //=> true
     */


    function isSameMonth(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isSameSecond/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/esm/isSameSecond/index.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsSameSecondIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isSameSecond;
    });
    /* harmony import */


    var _startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../startOfSecond/index.js */
    "./node_modules/date-fns/esm/startOfSecond/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isSameSecond
     * @category Second Helpers
     * @summary Are the given dates in the same second?
     *
     * @description
     * Are the given dates in the same second?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same second
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
     * // in the same second?
     * var result = isSameSecond(
     *   new Date(2014, 8, 4, 6, 30, 15),
     *   new Date(2014, 8, 4, 6, 30, 15, 500)
     * )
     * //=> true
     */


    function isSameSecond(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeftStartOfSecond = Object(_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRightStartOfSecond = Object(_startOfSecond_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isSameYear/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/esm/isSameYear/index.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsSameYearIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isSameYear;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isSameYear
     * @category Year Helpers
     * @summary Are the given dates in the same year?
     *
     * @description
     * Are the given dates in the same year?
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} dateLeft - the first date to check
     * @param {Date|Number} dateRight - the second date to check
     * @returns {Boolean} the dates are in the same year
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Are 2 September 2014 and 25 September 2014 in the same year?
     * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
     * //=> true
     */


    function isSameYear(dirtyDateLeft, dirtyDateRight) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
      var dateLeft = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateLeft);
      var dateRight = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDateRight);
      return dateLeft.getFullYear() === dateRight.getFullYear();
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/isToday/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/esm/isToday/index.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmIsTodayIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return isToday;
    });
    /* harmony import */


    var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../isSameDay/index.js */
    "./node_modules/date-fns/esm/isSameDay/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name isToday
     * @category Day Helpers
     * @summary Is the given date today?
     * @pure false
     *
     * @description
     * Is the given date today?
     *
     * > ⚠️ Please note that this function is not present in the FP submodule as
     * > it uses `Date.now()` internally hence impure and can't be safely curried.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to check
     * @returns {Boolean} the date is today
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // If today is 6 October 2014, is 6 October 14:00:00 today?
     * var result = isToday(new Date(2014, 9, 6, 14, 0))
     * //=> true
     */


    function isToday(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      return Object(_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate, Date.now());
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/setDay/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/date-fns/esm/setDay/index.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmSetDayIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setDay;
    });
    /* harmony import */


    var _addDays_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../addDays/index.js */
    "./node_modules/date-fns/esm/addDays/index.js");
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_lib/toInteger/index.js */
    "./node_modules/date-fns/esm/_lib/toInteger/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name setDay
     * @category Weekday Helpers
     * @summary Set the day of the week to the given date.
     *
     * @description
     * Set the day of the week to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} day - the day of the week of the new date
     * @param {Object} [options] - an object with options.
     * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
     * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
     * @returns {Date} the new date with the day of the week set
     * @throws {TypeError} 2 arguments required
     * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
     *
     * @example
     * // Set week day to Sunday, with the default weekStartsOn of Sunday:
     * var result = setDay(new Date(2014, 8, 1), 0)
     * //=> Sun Aug 31 2014 00:00:00
     *
     * @example
     * // Set week day to Sunday, with a weekStartsOn of Monday:
     * var result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
     * //=> Sun Sep 07 2014 00:00:00
     */


    function setDay(dirtyDate, dirtyDay, dirtyOptions) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
      var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
      var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
      }

      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, options);
      var day = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDay);
      var currentDay = date.getDay();
      var remainder = day % 7;
      var dayIndex = (remainder + 7) % 7;
      var delta = 7 - weekStartsOn;
      var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
      return Object(_addDays_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date, diff, options);
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/setMonth/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/date-fns/esm/setMonth/index.js ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmSetMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setMonth;
    });
    /* harmony import */


    var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../_lib/toInteger/index.js */
    "./node_modules/date-fns/esm/_lib/toInteger/index.js");
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../getDaysInMonth/index.js */
    "./node_modules/date-fns/esm/getDaysInMonth/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name setMonth
     * @category Month Helpers
     * @summary Set the month to the given date.
     *
     * @description
     * Set the month to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} month - the month of the new date
     * @returns {Date} the new date with the month set
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Set February to 1 September 2014:
     * var result = setMonth(new Date(2014, 8, 1), 1)
     * //=> Sat Feb 01 2014 00:00:00
     */


    function setMonth(dirtyDate, dirtyMonth) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(2, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
      var month = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyMonth);
      var year = date.getFullYear();
      var day = date.getDate();
      var dateWithDesiredMonth = new Date(0);
      dateWithDesiredMonth.setFullYear(year, month, 15);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = Object(_getDaysInMonth_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateWithDesiredMonth); // Set the last day of the new month
      // if the original date was the last day of the longer month

      date.setMonth(month, Math.min(day, daysInMonth));
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/setYear/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/date-fns/esm/setYear/index.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmSetYearIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setYear;
    });
    /* harmony import */


    var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../_lib/toInteger/index.js */
    "./node_modules/date-fns/esm/_lib/toInteger/index.js");
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name setYear
     * @category Year Helpers
     * @summary Set the year to the given date.
     *
     * @description
     * Set the year to the given date.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the date to be changed
     * @param {Number} year - the year of the new date
     * @returns {Date} the new date with the year set
     * @throws {TypeError} 2 arguments required
     *
     * @example
     * // Set year 2013 to 1 September 2014:
     * var result = setYear(new Date(2014, 8, 1), 2013)
     * //=> Sun Sep 01 2013 00:00:00
     */


    function setYear(dirtyDate, dirtyYear) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
      var year = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

      if (isNaN(date)) {
        return new Date(NaN);
      }

      date.setFullYear(year);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/startOfDay/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmStartOfDayIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return startOfDay;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name startOfDay
     * @category Day Helpers
     * @summary Return the start of a day for the given date.
     *
     * @description
     * Return the start of a day for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of a day
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of a day for 2 September 2014 11:55:00:
     * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Tue Sep 02 2014 00:00:00
     */


    function startOfDay(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/startOfHour/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/date-fns/esm/startOfHour/index.js ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmStartOfHourIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return startOfHour;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name startOfHour
     * @category Hour Helpers
     * @summary Return the start of an hour for the given date.
     *
     * @description
     * Return the start of an hour for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of an hour
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of an hour for 2 September 2014 11:55:00:
     * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
     * //=> Tue Sep 02 2014 11:00:00
     */


    function startOfHour(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      date.setMinutes(0, 0, 0);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/startOfMinute/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/esm/startOfMinute/index.js ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmStartOfMinuteIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return startOfMinute;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name startOfMinute
     * @category Minute Helpers
     * @summary Return the start of a minute for the given date.
     *
     * @description
     * Return the start of a minute for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of a minute
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of a minute for 1 December 2014 22:15:45.400:
     * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
     * //=> Mon Dec 01 2014 22:15:00
     */


    function startOfMinute(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      date.setSeconds(0, 0);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/startOfMonth/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmStartOfMonthIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return startOfMonth;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name startOfMonth
     * @category Month Helpers
     * @summary Return the start of a month for the given date.
     *
     * @description
     * Return the start of a month for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of a month
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of a month for 2 September 2014 11:55:00:
     * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
     * //=> Mon Sep 01 2014 00:00:00
     */


    function startOfMonth(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/date-fns/esm/startOfSecond/index.js":
  /*!**********************************************************!*\
    !*** ./node_modules/date-fns/esm/startOfSecond/index.js ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDateFnsEsmStartOfSecondIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return startOfSecond;
    });
    /* harmony import */


    var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../toDate/index.js */
    "./node_modules/date-fns/esm/toDate/index.js");
    /* harmony import */


    var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_lib/requiredArgs/index.js */
    "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
    /**
     * @name startOfSecond
     * @category Second Helpers
     * @summary Return the start of a second for the given date.
     *
     * @description
     * Return the start of a second for the given date.
     * The result will be in the local timezone.
     *
     * ### v2.0.0 breaking changes:
     *
     * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
     *
     * @param {Date|Number} date - the original date
     * @returns {Date} the start of a second
     * @throws {TypeError} 1 argument required
     *
     * @example
     * // The start of a second for 1 December 2014 22:15:45.400:
     * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
     * //=> Mon Dec 01 2014 22:15:45.000
     */


    function startOfSecond(dirtyDate) {
      Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
      var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyDate);
      date.setMilliseconds(0);
      return date;
    }
    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js ***!
    \*************************************************************************************/

  /*! exports provided: NzPipesModule, NzTimeRangePipe, NzToCssUnitPipe */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCorePipeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzPipesModule", function () {
      return NzPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzTimeRangePipe", function () {
      return NzTimeRangePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzToCssUnitPipe", function () {
      return NzToCssUnitPipe;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/core/time */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js");
    /* harmony import */


    var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/util */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-css-unit.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzToCssUnitPipe = /*#__PURE__*/function () {
      function NzToCssUnitPipe() {
        _classCallCheck(this, NzToCssUnitPipe);
      }

      _createClass(NzToCssUnitPipe, [{
        key: "transform",

        /**
         * @param {?} value
         * @param {?=} defaultUnit
         * @return {?}
         */
        value: function transform(value) {
          var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

          /** @type {?} */
          var formatted = +value;
          return isNaN(formatted) ? "".concat(value) : "".concat(formatted).concat(defaultUnit);
        }
      }]);

      return NzToCssUnitPipe;
    }();

    NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) {
      return new (t || NzToCssUnitPipe)();
    };

    NzToCssUnitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "nzToCssUnit",
      type: NzToCssUnitPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzToCssUnitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'nzToCssUnit'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: time-range.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzTimeRangePipe = /*#__PURE__*/function () {
      function NzTimeRangePipe() {
        _classCallCheck(this, NzTimeRangePipe);
      }

      _createClass(NzTimeRangePipe, [{
        key: "transform",

        /**
         * @param {?} value
         * @param {?=} format
         * @return {?}
         */
        value: function transform(value) {
          var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm:ss';

          /** @type {?} */
          var duration = Number(value || 0);
          return ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__["timeUnits"].reduce(
          /**
          * @param {?} current
          * @param {?} __1
          * @return {?}
          */
          function (current, _ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                name = _ref2[0],
                unit = _ref2[1];

            if (current.indexOf(name) !== -1) {
              /** @type {?} */
              var v = Math.floor(duration / unit);
              duration -= v * unit;
              return current.replace(new RegExp("".concat(name, "+"), 'g'),
              /**
              * @param {?} match
              * @return {?}
              */
              function (match) {
                return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["padStart"])(v.toString(), match.length, '0');
              });
            }

            return current;
          }, format);
        }
      }]);

      return NzTimeRangePipe;
    }();

    NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) {
      return new (t || NzTimeRangePipe)();
    };

    NzTimeRangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "nzTimeRange",
      type: NzTimeRangePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTimeRangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'nzTimeRange',
          pure: true
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: nz-pipe.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzPipesModule = function NzPipesModule() {
      _classCallCheck(this, NzPipesModule);
    };

    NzPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NzPipesModule
    });
    NzPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NzPipesModule_Factory(t) {
        return new (t || NzPipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPipesModule, {
        declarations: function declarations() {
          return [NzTimeRangePipe, NzToCssUnitPipe];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
        },
        exports: function exports() {
          return [NzTimeRangePipe, NzToCssUnitPipe];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [NzTimeRangePipe, NzToCssUnitPipe],
          declarations: [NzTimeRangePipe, NzToCssUnitPipe]
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
     * Generated from: ng-zorro-antd-core-pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-core-pipe.js.map

    /***/

  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js":
  /*!*************************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js ***!
    \*************************************************************************************/

  /*! exports provided: CandyDate, cloneDate, normalizeRangeValue, sortRangeValue, timeUnits */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdCoreTimeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandyDate", function () {
      return CandyDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cloneDate", function () {
      return cloneDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizeRangeValue", function () {
      return normalizeRangeValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortRangeValue", function () {
      return sortRangeValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timeUnits", function () {
      return timeUnits;
    });
    /* harmony import */


    var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! date-fns/addMonths */
    "./node_modules/date-fns/esm/addMonths/index.js");
    /* harmony import */


    var date_fns_addYears__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! date-fns/addYears */
    "./node_modules/date-fns/esm/addYears/index.js");
    /* harmony import */


    var date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! date-fns/differenceInCalendarDays */
    "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
    /* harmony import */


    var date_fns_differenceInCalendarMonths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! date-fns/differenceInCalendarMonths */
    "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
    /* harmony import */


    var date_fns_differenceInCalendarYears__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! date-fns/differenceInCalendarYears */
    "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
    /* harmony import */


    var date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! date-fns/differenceInHours */
    "./node_modules/date-fns/esm/differenceInHours/index.js");
    /* harmony import */


    var date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! date-fns/differenceInMinutes */
    "./node_modules/date-fns/esm/differenceInMinutes/index.js");
    /* harmony import */


    var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! date-fns/differenceInSeconds */
    "./node_modules/date-fns/esm/differenceInSeconds/index.js");
    /* harmony import */


    var date_fns_isFirstDayOfMonth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! date-fns/isFirstDayOfMonth */
    "./node_modules/date-fns/esm/isFirstDayOfMonth/index.js");
    /* harmony import */


    var date_fns_isLastDayOfMonth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! date-fns/isLastDayOfMonth */
    "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");
    /* harmony import */


    var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! date-fns/isSameDay */
    "./node_modules/date-fns/esm/isSameDay/index.js");
    /* harmony import */


    var date_fns_isSameHour__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! date-fns/isSameHour */
    "./node_modules/date-fns/esm/isSameHour/index.js");
    /* harmony import */


    var date_fns_isSameMinute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! date-fns/isSameMinute */
    "./node_modules/date-fns/esm/isSameMinute/index.js");
    /* harmony import */


    var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! date-fns/isSameMonth */
    "./node_modules/date-fns/esm/isSameMonth/index.js");
    /* harmony import */


    var date_fns_isSameSecond__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! date-fns/isSameSecond */
    "./node_modules/date-fns/esm/isSameSecond/index.js");
    /* harmony import */


    var date_fns_isSameYear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! date-fns/isSameYear */
    "./node_modules/date-fns/esm/isSameYear/index.js");
    /* harmony import */


    var date_fns_isToday__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! date-fns/isToday */
    "./node_modules/date-fns/esm/isToday/index.js");
    /* harmony import */


    var date_fns_isValid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! date-fns/isValid */
    "./node_modules/date-fns/esm/isValid/index.js");
    /* harmony import */


    var date_fns_setDay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! date-fns/setDay */
    "./node_modules/date-fns/esm/setDay/index.js");
    /* harmony import */


    var date_fns_setMonth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! date-fns/setMonth */
    "./node_modules/date-fns/esm/setMonth/index.js");
    /* harmony import */


    var date_fns_setYear__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! date-fns/setYear */
    "./node_modules/date-fns/esm/setYear/index.js");
    /* harmony import */


    var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! date-fns/startOfMonth */
    "./node_modules/date-fns/esm/startOfMonth/index.js");
    /* harmony import */


    var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! date-fns/startOfWeek */
    "./node_modules/date-fns/esm/startOfWeek/index.js");
    /* harmony import */


    var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng-zorro-antd/core/logger */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: candy-date.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} rangeValue
     * @return {?}
     */


    function sortRangeValue(rangeValue) {
      if (Array.isArray(rangeValue)) {
        var _rangeValue = _slicedToArray(rangeValue, 2),
            start = _rangeValue[0],
            end = _rangeValue[1];

        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
      }

      return rangeValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function normalizeRangeValue(value) {
      var _ref3 = value || [],
          _ref4 = _slicedToArray(_ref3, 2),
          start = _ref4[0],
          end = _ref4[1];
      /** @type {?} */


      var newStart = start || new CandyDate();
      /** @type {?} */

      var newEnd = (end === null || end === void 0 ? void 0 : end.isSameMonth(newStart)) ? end.addMonths(1) : end || newStart.addMonths(1);
      return [newStart, newEnd];
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function cloneDate(value) {
      if (Array.isArray(value)) {
        return value.map(
        /**
        * @param {?} v
        * @return {?}
        */
        function (v) {
          return v instanceof CandyDate ? v.clone() : null;
        });
      } else {
        return value instanceof CandyDate ? value.clone() : null;
      }
    }
    /**
     * Wrapping kind APIs for date operating and unify
     * NOTE: every new API return new CandyDate object without side effects to the former Date object
     * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
     * TODO: support format() against to angular's core API
     */


    var CandyDate = /*#__PURE__*/function () {
      // locale: string; // Custom specified locale ID

      /**
       * @param {?=} date
       */
      function CandyDate(date) {
        _classCallCheck(this, CandyDate);

        if (date) {
          if (date instanceof Date) {
            this.nativeDate = date;
          } else if (typeof date === 'string' || typeof date === 'number') {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_23__["warn"])('The string type is not recommended for date-picker, use "Date" type');
            this.nativeDate = new Date(date);
          } else {
            throw new Error('The input date type is not supported ("Date" is now recommended)');
          }
        } else {
          this.nativeDate = new Date();
        }
      } // getLocale(): string {
      //   return this.locale;
      // }
      // setLocale(locale: string): CandyDate {
      //   this.locale = locale;
      //   return this;
      // }

      /**
       * @param {?=} options
       * @return {?}
       */


      _createClass(CandyDate, [{
        key: "calendarStart",
        value: function calendarStart(options) {
          return new CandyDate(Object(date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_21__["default"])(this.nativeDate), options));
        } // ---------------------------------------------------------------------
        // | Native shortcuts
        // -----------------------------------------------------------------------------\

        /**
         * @return {?}
         */

      }, {
        key: "getYear",
        value: function getYear() {
          return this.nativeDate.getFullYear();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth() {
          return this.nativeDate.getMonth();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDay",
        value: function getDay() {
          return this.nativeDate.getDay();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getTime",
        value: function getTime() {
          return this.nativeDate.getTime();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate() {
          return this.nativeDate.getDate();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getHours",
        value: function getHours() {
          return this.nativeDate.getHours();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMinutes",
        value: function getMinutes() {
          return this.nativeDate.getMinutes();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getSeconds",
        value: function getSeconds() {
          return this.nativeDate.getSeconds();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMilliseconds",
        value: function getMilliseconds() {
          return this.nativeDate.getMilliseconds();
        } // ---------------------------------------------------------------------
        // | New implementing APIs
        // ---------------------------------------------------------------------

        /**
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone() {
          return new CandyDate(new Date(this.nativeDate));
        }
        /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} second
         * @return {?}
         */

      }, {
        key: "setHms",
        value: function setHms(hour, minute, second) {
          return new CandyDate(this.nativeDate.setHours(hour, minute, second));
        }
        /**
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "setYear",
        value: function setYear(year) {
          return new CandyDate(Object(date_fns_setYear__WEBPACK_IMPORTED_MODULE_20__["default"])(this.nativeDate, year));
        }
        /**
         * @param {?} amount
         * @return {?}
         */

      }, {
        key: "addYears",
        value: function addYears(amount) {
          return new CandyDate(Object(date_fns_addYears__WEBPACK_IMPORTED_MODULE_1__["default"])(this.nativeDate, amount));
        } // NOTE: month starts from 0
        // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28

        /**
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "setMonth",
        value: function setMonth(month) {
          return new CandyDate(Object(date_fns_setMonth__WEBPACK_IMPORTED_MODULE_19__["default"])(this.nativeDate, month));
        }
        /**
         * @param {?} amount
         * @return {?}
         */

      }, {
        key: "addMonths",
        value: function addMonths(amount) {
          return new CandyDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_0__["default"])(this.nativeDate, amount));
        }
        /**
         * @param {?} day
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "setDay",
        value: function setDay(day, options) {
          return new CandyDate(Object(date_fns_setDay__WEBPACK_IMPORTED_MODULE_18__["default"])(this.nativeDate, day, options));
        }
        /**
         * @param {?} amount
         * @return {?}
         */

      }, {
        key: "setDate",
        value: function setDate(amount) {
          /** @type {?} */
          var date = new Date(this.nativeDate);
          date.setDate(amount);
          return new CandyDate(date);
        }
        /**
         * @param {?} amount
         * @return {?}
         */

      }, {
        key: "addDays",
        value: function addDays(amount) {
          return this.setDate(this.getDate() + amount);
        }
        /**
         * @param {?} date
         * @param {?=} grain
         * @return {?}
         */

      }, {
        key: "isSame",
        value: function isSame(date) {
          var grain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'day';

          /** @type {?} */
          var fn;

          switch (grain) {
            case 'year':
              fn = date_fns_isSameYear__WEBPACK_IMPORTED_MODULE_15__["default"];
              break;

            case 'month':
              fn = date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_13__["default"];
              break;

            case 'day':
              fn = date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_10__["default"];
              break;

            case 'hour':
              fn = date_fns_isSameHour__WEBPACK_IMPORTED_MODULE_11__["default"];
              break;

            case 'minute':
              fn = date_fns_isSameMinute__WEBPACK_IMPORTED_MODULE_12__["default"];
              break;

            case 'second':
              fn = date_fns_isSameSecond__WEBPACK_IMPORTED_MODULE_14__["default"];
              break;

            default:
              fn = date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_10__["default"];
              break;
          }

          return fn(this.nativeDate, this.toNativeDate(date));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isSameYear",
        value: function isSameYear(date) {
          return this.isSame(date, 'year');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isSameMonth",
        value: function isSameMonth(date) {
          return this.isSame(date, 'month');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isSameDay",
        value: function isSameDay(date) {
          return this.isSame(date, 'day');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isSameHour",
        value: function isSameHour(date) {
          return this.isSame(date, 'hour');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isSameMinute",
        value: function isSameMinute(date) {
          return this.isSame(date, 'minute');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isSameSecond",
        value: function isSameSecond(date) {
          return this.isSame(date, 'second');
        }
        /**
         * @param {?} date
         * @param {?=} grain
         * @param {?=} isBefore
         * @return {?}
         */

      }, {
        key: "compare",
        value: function compare(date) {
          var grain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'day';
          var isBefore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (date === null) {
            return false;
          }
          /** @type {?} */


          var fn;

          switch (grain) {
            case 'year':
              fn = date_fns_differenceInCalendarYears__WEBPACK_IMPORTED_MODULE_4__["default"];
              break;

            case 'month':
              fn = date_fns_differenceInCalendarMonths__WEBPACK_IMPORTED_MODULE_3__["default"];
              break;

            case 'day':
              fn = date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_2__["default"];
              break;

            case 'hour':
              fn = date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_5__["default"];
              break;

            case 'minute':
              fn = date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_6__["default"];
              break;

            case 'second':
              fn = date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_7__["default"];
              break;

            default:
              fn = date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_2__["default"];
              break;
          }

          return isBefore ? fn(this.nativeDate, this.toNativeDate(date)) < 0 : fn(this.nativeDate, this.toNativeDate(date)) > 0;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isBeforeYear",
        value: function isBeforeYear(date) {
          return this.compare(date, 'year');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isBeforeMonth",
        value: function isBeforeMonth(date) {
          return this.compare(date, 'month');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isBeforeDay",
        value: function isBeforeDay(date) {
          return this.compare(date, 'day');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isBeforeHour",
        value: function isBeforeHour(date) {
          return this.compare(date, 'hour');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isBeforeMinute",
        value: function isBeforeMinute(date) {
          return this.compare(date, 'minute');
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isBeforeSecond",
        value: function isBeforeSecond(date) {
          return this.compare(date, 'second');
        } // TODO: isBefore

        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isAfterYear",
        value: function isAfterYear(date) {
          return this.compare(date, 'year', false);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isAfterMonth",
        value: function isAfterMonth(date) {
          return this.compare(date, 'month', false);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isAfterDay",
        value: function isAfterDay(date) {
          return this.compare(date, 'day', false);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isAfterHour",
        value: function isAfterHour(date) {
          return this.compare(date, 'hour', false);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isAfterMinute",
        value: function isAfterMinute(date) {
          return this.compare(date, 'minute', false);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isAfterSecond",
        value: function isAfterSecond(date) {
          return this.compare(date, 'second', false);
        } // Equal to today accurate to "day"

        /**
         * @return {?}
         */

      }, {
        key: "isToday",
        value: function isToday() {
          return Object(date_fns_isToday__WEBPACK_IMPORTED_MODULE_16__["default"])(this.nativeDate);
        }
        /**
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid() {
          return Object(date_fns_isValid__WEBPACK_IMPORTED_MODULE_17__["default"])(this.nativeDate);
        }
        /**
         * @return {?}
         */

      }, {
        key: "isFirstDayOfMonth",
        value: function isFirstDayOfMonth() {
          return Object(date_fns_isFirstDayOfMonth__WEBPACK_IMPORTED_MODULE_8__["default"])(this.nativeDate);
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLastDayOfMonth",
        value: function isLastDayOfMonth() {
          return Object(date_fns_isLastDayOfMonth__WEBPACK_IMPORTED_MODULE_9__["default"])(this.nativeDate);
        }
        /**
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toNativeDate",
        value: function toNativeDate(date) {
          return date instanceof CandyDate ? date.nativeDate : date;
        }
      }]);

      return CandyDate;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: time.ts
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


    var timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365], ['M', 1000 * 60 * 60 * 24 * 30], ['D', 1000 * 60 * 60 * 24], ['H', 1000 * 60 * 60], ['m', 1000 * 60], ['s', 1000], ['S', 1] // million seconds
    ];
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-core-time.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-core-time.js.map

    /***/
  },

  /***/
  "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js ***!
    \*********************************************************************************/

  /*! exports provided: BaseModalContainer, FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, ModalOptions, NZ_CONFIG_COMPONENT_NAME, NzModalCloseComponent, NzModalComponent, NzModalConfirmContainerComponent, NzModalContainerComponent, NzModalFooterComponent, NzModalFooterDirective, NzModalLegacyAPI, NzModalModule, NzModalRef, NzModalService, NzModalTitleComponent, ZOOM_CLASS_NAME_MAP, applyConfigDefaults, getConfigFromComponent, getValueWithConfig, nzModalAnimations, setContentInstanceParams, throwNzModalContentAlreadyAttachedError */

  /***/
  function node_modulesNgZorroAntd__ivy_ngcc__Fesm2015NgZorroAntdModalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseModalContainer", function () {
      return BaseModalContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FADE_CLASS_NAME_MAP", function () {
      return FADE_CLASS_NAME_MAP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MODAL_MASK_CLASS_NAME", function () {
      return MODAL_MASK_CLASS_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalOptions", function () {
      return ModalOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NZ_CONFIG_COMPONENT_NAME", function () {
      return NZ_CONFIG_COMPONENT_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalCloseComponent", function () {
      return NzModalCloseComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalComponent", function () {
      return NzModalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalConfirmContainerComponent", function () {
      return NzModalConfirmContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalContainerComponent", function () {
      return NzModalContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalFooterComponent", function () {
      return NzModalFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalFooterDirective", function () {
      return NzModalFooterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalLegacyAPI", function () {
      return NzModalLegacyAPI;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalModule", function () {
      return NzModalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalRef", function () {
      return NzModalRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalService", function () {
      return NzModalService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NzModalTitleComponent", function () {
      return NzModalTitleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZOOM_CLASS_NAME_MAP", function () {
      return ZOOM_CLASS_NAME_MAP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "applyConfigDefaults", function () {
      return applyConfigDefaults;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getConfigFromComponent", function () {
      return getConfigFromComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getValueWithConfig", function () {
      return getValueWithConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nzModalAnimations", function () {
      return nzModalAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setContentInstanceParams", function () {
      return setContentInstanceParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwNzModalContentAlreadyAttachedError", function () {
      return throwNzModalContentAlreadyAttachedError;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/core/logger */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-zorro-antd/core/no-animation */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
    /* harmony import */


    var ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-zorro-antd/core/pipe */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-types.ts
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


    var _c0 = ["modalElement"];

    function NzModalConfirmContainerComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r7.onCloseClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function NzModalConfirmContainerComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r2.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function NzModalConfirmContainerComponent_ng_template_12_Template(rf, ctx) {}

    function NzModalConfirmContainerComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 17);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.config.nzContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function NzModalConfirmContainerComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r9.onCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", !!ctx_r5.config.nzCancelLoading)("disabled", ctx_r5.config.nzCancelDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r5.config.nzAutofocus === "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.config.nzCancelText || ctx_r5.locale.cancelText, " ");
      }
    }

    function NzModalConfirmContainerComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r11.onOk();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r6.config.nzOkType)("nzLoading", !!ctx_r6.config.nzOkLoading)("disabled", ctx_r6.config.nzOkDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r6.config.nzAutofocus === "ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.config.nzOkText || ctx_r6.locale.okText, " ");
      }
    }

    function NzModalContainerComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalContainerComponent_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r6.onCloseClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function NzModalContainerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 10);
      }
    }

    function NzModalContainerComponent_ng_template_7_Template(rf, ctx) {}

    function NzModalContainerComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 11);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.config.nzContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function NzModalContainerComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cancelTriggered", function NzModalContainerComponent_div_9_Template_div_cancelTriggered_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r8.onCloseClick();
        })("okTriggered", function NzModalContainerComponent_div_9_Template_div_okTriggered_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r10.onOkClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modalRef", ctx_r5.modalRef);
      }
    }

    function NzModalComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    }

    var _c1 = ["*"];
    var _c2 = ["nz-modal-close", ""];

    function NzModalCloseComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var closeIcon_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", closeIcon_r1);
      }
    }

    var _c3 = ["nz-modal-footer", ""];

    function NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 5);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var button_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r8.onButtonClick(button_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var button_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r6.getButtonCallableProp(button_r7, "show"))("nzLoading", ctx_r6.getButtonCallableProp(button_r7, "loading"))("disabled", ctx_r6.getButtonCallableProp(button_r7, "disabled"))("nzType", button_r7.type)("nzShape", button_r7.shape)("nzSize", button_r7.size)("nzGhost", button_r7.ghost);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", button_r7.label, " ");
      }
    }

    function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template, 2, 8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.buttons);
      }
    }

    function NzModalFooterComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template, 1, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.buttonsFooter);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.buttonsFooter);
      }
    }

    function NzModalFooterComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.config.nzFooter);
      }
    }

    function NzModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r12.onCancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", !!ctx_r10.config.nzCancelLoading)("disabled", ctx_r10.config.nzCancelDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r10.config.nzAutofocus === "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.config.nzCancelText || ctx_r10.locale.cancelText, " ");
      }
    }

    function NzModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r14.onOk();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r11.config.nzOkType)("nzLoading", !!ctx_r11.config.nzOkLoading)("disabled", ctx_r11.config.nzOkDisabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r11.config.nzAutofocus === "ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.config.nzOkText || ctx_r11.locale.okText, " ");
      }
    }

    function NzModalFooterComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalFooterComponent_ng_template_1_button_0_Template, 2, 4, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_template_1_button_1_Template, 2, 5, "button", 9);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.config.nzCancelText !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.config.nzOkText !== null);
      }
    }

    var _c4 = ["nz-modal-title", ""];

    function NzModalTitleComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    }

    function StyleObjectLike() {}
    /** @type {?} */


    var noopFun =
    /**
    * @return {?}
    */
    function noopFun() {
      return void 0;
    };

    var ɵ0 = noopFun;
    /**
     * @template T, R
     */

    var ModalOptions = function ModalOptions() {
      _classCallCheck(this, ModalOptions);

      this.nzClosable = true;
      this.nzOkLoading = false;
      this.nzOkDisabled = false;
      this.nzCancelDisabled = false;
      this.nzCancelLoading = false;
      this.nzNoAnimation = false;
      this.nzAutofocus = 'auto';
      this.nzKeyboard = true;
      this.nzZIndex = 1000;
      this.nzWidth = 520;
      this.nzCloseIcon = 'close';
      this.nzOkType = 'primary';
      this.nzModalType = 'default';
      this.nzOnCancel = noopFun;
      this.nzOnOk = noopFun; // Confirm

      this.nzIconType = 'question-circle';
    };

    if (false) {}
    /**
     * @record
     * @template T
     */


    function ModalButtonOptions() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-config.ts
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


    var ZOOM_CLASS_NAME_MAP = {
      enter: 'zoom-enter',
      enterActive: 'zoom-enter-active',
      leave: 'zoom-leave',
      leaveActive: 'zoom-leave-active'
    };
    /** @type {?} */

    var FADE_CLASS_NAME_MAP = {
      enter: 'fade-enter',
      enterActive: 'fade-enter-active',
      leave: 'fade-leave',
      leaveActive: 'fade-leave-active'
    };
    /** @type {?} */

    var MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
    /** @type {?} */

    var NZ_CONFIG_COMPONENT_NAME = 'modal';
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nzModalAnimations = {
      modalContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('modalContainer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('.24s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({}))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({})))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: utils.ts
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
     * @param {?} config
     * @param {?} defaultOptions
     * @return {?}
     */

    function applyConfigDefaults(config, defaultOptions) {
      return Object.assign(Object.assign({}, defaultOptions), config);
    }
    /**
     * @template T
     * @param {?} userValue
     * @param {?} configValue
     * @param {?} defaultValue
     * @return {?}
     */


    function getValueWithConfig(userValue, configValue, defaultValue) {
      return typeof userValue === 'undefined' ? typeof configValue === 'undefined' ? defaultValue : configValue : userValue;
    }
    /**
     * Assign the params into the content component instance.
     * @deprecated Should use dependency injection to get the params for user
     * \@breaking-change 10.0.0
     * @template T
     * @param {?} instance
     * @param {?} params
     * @return {?}
     */


    function setContentInstanceParams(instance, params) {
      Object.assign(instance, params);
    }
    /**
     * @param {?} component
     * @return {?}
     */


    function getConfigFromComponent(component) {
      var nzMask = component.nzMask,
          nzMaskClosable = component.nzMaskClosable,
          nzClosable = component.nzClosable,
          nzOkLoading = component.nzOkLoading,
          nzOkDisabled = component.nzOkDisabled,
          nzCancelDisabled = component.nzCancelDisabled,
          nzCancelLoading = component.nzCancelLoading,
          nzKeyboard = component.nzKeyboard,
          nzNoAnimation = component.nzNoAnimation,
          nzContent = component.nzContent,
          nzComponentParams = component.nzComponentParams,
          nzFooter = component.nzFooter,
          nzGetContainer = component.nzGetContainer,
          nzZIndex = component.nzZIndex,
          nzWidth = component.nzWidth,
          nzWrapClassName = component.nzWrapClassName,
          nzClassName = component.nzClassName,
          nzStyle = component.nzStyle,
          nzTitle = component.nzTitle,
          nzCloseIcon = component.nzCloseIcon,
          nzMaskStyle = component.nzMaskStyle,
          nzBodyStyle = component.nzBodyStyle,
          nzOkText = component.nzOkText,
          nzCancelText = component.nzCancelText,
          nzOkType = component.nzOkType,
          nzIconType = component.nzIconType,
          nzModalType = component.nzModalType,
          nzOnOk = component.nzOnOk,
          nzOnCancel = component.nzOnCancel,
          nzAfterOpen = component.nzAfterOpen,
          nzAfterClose = component.nzAfterClose,
          nzCloseOnNavigation = component.nzCloseOnNavigation;
      return {
        nzMask: nzMask,
        nzMaskClosable: nzMaskClosable,
        nzClosable: nzClosable,
        nzOkLoading: nzOkLoading,
        nzOkDisabled: nzOkDisabled,
        nzCancelDisabled: nzCancelDisabled,
        nzCancelLoading: nzCancelLoading,
        nzKeyboard: nzKeyboard,
        nzNoAnimation: nzNoAnimation,
        nzContent: nzContent,
        nzComponentParams: nzComponentParams,
        nzFooter: nzFooter,
        nzGetContainer: nzGetContainer,
        nzZIndex: nzZIndex,
        nzWidth: nzWidth,
        nzWrapClassName: nzWrapClassName,
        nzClassName: nzClassName,
        nzStyle: nzStyle,
        nzTitle: nzTitle,
        nzCloseIcon: nzCloseIcon,
        nzMaskStyle: nzMaskStyle,
        nzBodyStyle: nzBodyStyle,
        nzOkText: nzOkText,
        nzCancelText: nzCancelText,
        nzOkType: nzOkType,
        nzIconType: nzIconType,
        nzModalType: nzModalType,
        nzOnOk: nzOnOk,
        nzOnCancel: nzOnCancel,
        nzAfterOpen: nzAfterOpen,
        nzAfterClose: nzAfterClose,
        nzCloseOnNavigation: nzCloseOnNavigation
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function throwNzModalContentAlreadyAttachedError() {
      throw Error('Attempting to attach modal content after content is already attached');
    }

    var BaseModalContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(BaseModalContainer, _angular_cdk_portal__);

      var _super = _createSuper(BaseModalContainer);

      /**
       * @param {?} elementRef
       * @param {?} focusTrapFactory
       * @param {?} cdr
       * @param {?} render
       * @param {?} zone
       * @param {?} overlayRef
       * @param {?} nzConfigService
       * @param {?} config
       * @param {?=} document
       * @param {?=} animationType
       */
      function BaseModalContainer(elementRef, focusTrapFactory, cdr, render, zone, overlayRef, nzConfigService, config, document, animationType) {
        var _this;

        _classCallCheck(this, BaseModalContainer);

        _this = _super.call(this);
        _this.elementRef = elementRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.cdr = cdr;
        _this.render = render;
        _this.zone = zone;
        _this.overlayRef = overlayRef;
        _this.nzConfigService = nzConfigService;
        _this.config = config;
        _this.animationType = animationType;
        _this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.containerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.onDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this.state = 'enter';
        _this.isStringContent = false;
        _this.elementFocusedBeforeModalWasOpened = null;
        _this.latestMousedownTarget = null;
        _this.oldMaskStyle = null;
        _this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        _this.document = document;
        _this.isStringContent = typeof config.nzContent === 'string';

        _this.setContainer();

        _this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this.destroy$)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this.updateMaskClassname();
        });

        return _this;
      }
      /**
       * @return {?}
       */


      _createClass(BaseModalContainer, [{
        key: "onMousedown",

        /**
         * @param {?} e
         * @return {?}
         */
        value: function onMousedown(e) {
          this.latestMousedownTarget =
          /** @type {?} */
          e.target || null;
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onMouseup",
        value: function onMouseup(e) {
          if (e.target === this.latestMousedownTarget && e.target === this.elementRef.nativeElement && this.showMask && this.maskClosable) {
            this.containerClick.emit();
          }

          this.latestMousedownTarget = null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCloseClick",
        value: function onCloseClick() {
          this.cancelTriggered.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onOkClick",
        value: function onOkClick() {
          this.okTriggered.emit();
        }
        /**
         * @template T
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
          }

          this.savePreviouslyFocusedElement();
          this.setModalTransformOrigin();
          return this.portalOutlet.attachComponentPortal(portal);
        }
        /**
         * @template C
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
          }

          this.savePreviouslyFocusedElement();
          return this.portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getNativeElement",
        value: function getNativeElement() {
          return this.elementRef.nativeElement;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "animationDisabled",
        value: function animationDisabled() {
          return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setModalTransformOrigin",
        value: function setModalTransformOrigin() {
          /** @type {?} */
          var modalElement = this.modalElementRef.nativeElement;

          if (
          /** @type {?} */
          this.elementFocusedBeforeModalWasOpened) {
            /** @type {?} */
            var previouslyDOMRect =
            /** @type {?} */
            this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
            /** @type {?} */

            var lastPosition = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getElementOffset"])(
            /** @type {?} */
            this.elementFocusedBeforeModalWasOpened);
            /** @type {?} */

            var x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */

            var y = lastPosition.top + previouslyDOMRect.height / 2;
            /** @type {?} */

            var transformOrigin = "".concat(x - modalElement.offsetLeft, "px ").concat(y - modalElement.offsetTop, "px 0px");
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "savePreviouslyFocusedElement",
        value: function savePreviouslyFocusedElement() {
          var _this2 = this;

          if (this.document) {
            this.elementFocusedBeforeModalWasOpened =
            /** @type {?} */
            this.document.activeElement;

            if (this.elementRef.nativeElement.focus) {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2.elementRef.nativeElement.focus();
              });
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "trapFocus",
        value: function trapFocus() {
          /** @type {?} */
          var element = this.elementRef.nativeElement;

          if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(element);
          }

          if (this.config.nzAutofocus) {
            this.focusTrap.focusInitialElementWhenReady().then();
          } else {
            /** @type {?} */
            var activeElement = this.document.activeElement;

            if (activeElement !== element && !element.contains(activeElement)) {
              element.focus();
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "restoreFocus",
        value: function restoreFocus() {
          /** @type {?} */
          var toFocus =
          /** @type {?} */
          this.elementFocusedBeforeModalWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            var activeElement =
            /** @type {?} */
            this.document.activeElement;
            /** @type {?} */

            var element = this.elementRef.nativeElement;

            if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
              toFocus.focus();
            }
          }

          if (this.focusTrap) {
            this.focusTrap.destroy();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setEnterAnimationClass",
        value: function setEnterAnimationClass() {
          var _this3 = this;

          if (this.animationDisabled()) {
            return;
          }

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            // Make sure to set the `TransformOrigin` style before set the modelElement's class names
            _this3.setModalTransformOrigin();
            /** @type {?} */


            var modalElement = _this3.modalElementRef.nativeElement;
            /** @type {?} */

            var backdropElement = _this3.overlayRef.backdropElement;

            _this3.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.enter);

            _this3.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.enterActive);

            _this3.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.enter);

            _this3.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.enterActive);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "setExitAnimationClass",
        value: function setExitAnimationClass() {
          var _this4 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var modalElement = _this4.modalElementRef.nativeElement;
            /** @type {?} */

            var backdropElement = _this4.overlayRef.backdropElement;

            if (_this4.animationDisabled()) {
              // https://github.com/angular/components/issues/18645
              _this4.render.removeClass(backdropElement, MODAL_MASK_CLASS_NAME);

              return;
            }

            _this4.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.leave);

            _this4.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.leaveActive);

            _this4.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.leave);

            _this4.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.leaveActive);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "cleanAnimationClass",
        value: function cleanAnimationClass() {
          var _this5 = this;

          if (this.animationDisabled()) {
            return;
          }

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var backdropElement = _this5.overlayRef.backdropElement;
            /** @type {?} */

            var modalElement = _this5.modalElementRef.nativeElement;

            _this5.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.enter);

            _this5.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.enterActive);

            _this5.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.leave);

            _this5.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.leaveActive);

            _this5.render.removeClass(backdropElement, FADE_CLASS_NAME_MAP.enter);

            _this5.render.removeClass(backdropElement, FADE_CLASS_NAME_MAP.enterActive);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "bindBackdropStyle",
        value: function bindBackdropStyle() {
          var _this6 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (_this6.oldMaskStyle) {
              /** @type {?} */
              var backdropElement = _this6.overlayRef.backdropElement;
              /** @type {?} */

              var styles =
              /** @type {?} */
              _this6.oldMaskStyle;
              Object.keys(styles).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                _this6.render.removeStyle(backdropElement, key);
              });
              _this6.oldMaskStyle = null;
            }

            if (typeof _this6.config.nzMaskStyle === 'object' && Object.keys(_this6.config.nzMaskStyle).length) {
              /** @type {?} */
              var _backdropElement = _this6.overlayRef.backdropElement;
              /** @type {?} */

              var _styles = Object.assign({}, _this6.config.nzMaskStyle);

              Object.keys(_styles).forEach(
              /**
              * @param {?} key
              * @return {?}
              */
              function (key) {
                _this6.render.setStyle(_backdropElement, key, _styles[key]);
              });
              _this6.oldMaskStyle = _styles;
            }
          });
        }
        /**
         * Set the container element.
         * @deprecated Not supported.
         * \@breaking-change 10.0.0
         * @private
         * @return {?}
         */

      }, {
        key: "setContainer",
        value: function setContainer() {
          /** @type {?} */
          var container = this.getContainer();

          if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
          }
        }
        /**
         * Reset the container element.
         * @deprecated Not supported.
         * \@breaking-change 10.0.0
         * @private
         * @return {?}
         */

      }, {
        key: "resetContainer",
        value: function resetContainer() {
          /** @type {?} */
          var container = this.getContainer();

          if (container) {
            this.render.appendChild(this.overlayRef.overlayElement, this.elementRef.nativeElement);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getContainer",
        value: function getContainer() {
          var nzGetContainer = this.config.nzGetContainer;
          /** @type {?} */

          var container = typeof nzGetContainer === 'function' ? nzGetContainer() : nzGetContainer;
          return container instanceof HTMLElement ? container : null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateMaskClassname",
        value: function updateMaskClassname() {
          /** @type {?} */
          var backdropElement = this.overlayRef.backdropElement;

          if (this.showMask) {
            this.render.addClass(backdropElement, MODAL_MASK_CLASS_NAME);
          } else {
            this.render.removeClass(backdropElement, MODAL_MASK_CLASS_NAME);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onAnimationDone",
        value: function onAnimationDone(event) {
          if (event.toState === 'void') {
            return;
          }

          if (event.toState === 'enter') {
            this.setContainer();
            this.trapFocus();
          } else if (event.toState === 'exit') {
            this.restoreFocus();
          }

          this.cleanAnimationClass();
          this.animationStateChanged.emit(event);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onAnimationStart",
        value: function onAnimationStart(event) {
          if (event.toState === 'enter') {
            this.setEnterAnimationClass();
            this.bindBackdropStyle();
          } else if (event.toState === 'exit') {
            this.resetContainer();
            this.setExitAnimationClass();
          }

          this.animationStateChanged.emit(event);
        }
        /**
         * @return {?}
         */

      }, {
        key: "startExitAnimation",
        value: function startExitAnimation() {
          this.state = 'exit';
          this.cdr.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.onDestroy.emit();
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "showMask",
        get: function get() {
          /** @type {?} */
          var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
          return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "maskClosable",
        get: function get() {
          /** @type {?} */
          var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
          return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
        }
      }]);

      return BaseModalContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

    BaseModalContainer.ɵfac = function BaseModalContainer_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinvalidFactory"]();
    };

    BaseModalContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: BaseModalContainer,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-confirm-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalConfirmContainerComponent = /*#__PURE__*/function (_BaseModalContainer) {
      _inherits(NzModalConfirmContainerComponent, _BaseModalContainer);

      var _super2 = _createSuper(NzModalConfirmContainerComponent);

      /**
       * @param {?} i18n
       * @param {?} elementRef
       * @param {?} focusTrapFactory
       * @param {?} cdr
       * @param {?} render
       * @param {?} zone
       * @param {?} overlayRef
       * @param {?} nzConfigService
       * @param {?} config
       * @param {?} document
       * @param {?} animationType
       */
      function NzModalConfirmContainerComponent(i18n, elementRef, focusTrapFactory, cdr, render, zone, overlayRef, nzConfigService, config, document, animationType) {
        var _this7;

        _classCallCheck(this, NzModalConfirmContainerComponent);

        _this7 = _super2.call(this, elementRef, focusTrapFactory, cdr, render, zone, overlayRef, nzConfigService, config, document, animationType);
        _this7.i18n = i18n;
        _this7.config = config;
        _this7.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this7.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        _this7.locale = {};

        _this7.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this7.destroy$)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this7.locale = _this7.i18n.getLocaleData('Modal');
        });

        return _this7;
      }
      /**
       * @return {?}
       */


      _createClass(NzModalConfirmContainerComponent, [{
        key: "onCancel",
        value: function onCancel() {
          this.cancelTriggered.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onOk",
        value: function onOk() {
          this.okTriggered.emit();
        }
      }]);

      return NzModalConfirmContainerComponent;
    }(BaseModalContainer);

    NzModalConfirmContainerComponent.ɵfac = function NzModalConfirmContainerComponent_Factory(t) {
      return new (t || NzModalConfirmContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    NzModalConfirmContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzModalConfirmContainerComponent,
      selectors: [["nz-modal-confirm-container"]],
      viewQuery: function NzModalConfirmContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalElementRef = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "role", "dialog"],
      hostVars: 6,
      hostBindings: function NzModalConfirmContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@modalContainer.start", function NzModalConfirmContainerComponent_animation_modalContainer_start_HostBindingHandler($event) {
            return ctx.onAnimationStart($event);
          })("@modalContainer.done", function NzModalConfirmContainerComponent_animation_modalContainer_done_HostBindingHandler($event) {
            return ctx.onAnimationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzModalConfirmContainerComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event);
          })("mouseup", function NzModalConfirmContainerComponent_mouseup_HostBindingHandler($event) {
            return ctx.onMouseup($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.config.nzZIndex);
        }
      },
      outputs: {
        cancelTriggered: "cancelTriggered",
        okTriggered: "okTriggered"
      },
      exportAs: ["nzModalConfirmContainer"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 17,
      vars: 13,
      consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [4, "nzStringTemplateOutlet"], [1, "ant-modal-confirm-content"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], [3, "innerHTML"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"]],
      template: function NzModalConfirmContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "nzToCssUnit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzModalConfirmContainerComponent_button_4_Template, 1, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NzModalConfirmContainerComponent_ng_container_10_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NzModalConfirmContainerComponent_ng_template_12_Template, 0, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NzModalConfirmContainerComponent_div_13_Template, 1, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NzModalConfirmContainerComponent_button_15_Template, 2, 4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NzModalConfirmContainerComponent_button_16_Template, 2, 5, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 11, ctx.config == null ? null : ctx.config.nzWidth));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzClosable);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.config.nzBodyStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.config.nzIconType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isStringContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzCancelText !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzOkText !== null);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], NzModalCloseComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"]];
      },
      pipes: function pipes() {
        return [ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzToCssUnitPipe"]];
      },
      encapsulation: 2,
      data: {
        animation: [nzModalAnimations.modalContainer]
      }
    });
    /** @nocollapse */

    NzModalConfirmContainerComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]
      }, {
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
      }, {
        type: ModalOptions
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    NzModalConfirmContainerComponent.propDecorators = {
      portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
          "static": true
        }]
      }],
      modalElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['modalElement', {
          "static": true
        }]
      }],
      cancelTriggered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      okTriggered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalContainerComponent = /*#__PURE__*/function (_BaseModalContainer2) {
      _inherits(NzModalContainerComponent, _BaseModalContainer2);

      var _super3 = _createSuper(NzModalContainerComponent);

      /**
       * @param {?} elementRef
       * @param {?} focusTrapFactory
       * @param {?} cdr
       * @param {?} render
       * @param {?} zone
       * @param {?} overlayRef
       * @param {?} nzConfigService
       * @param {?} config
       * @param {?} document
       * @param {?} animationType
       */
      function NzModalContainerComponent(elementRef, focusTrapFactory, cdr, render, zone, overlayRef, nzConfigService, config, document, animationType) {
        var _this8;

        _classCallCheck(this, NzModalContainerComponent);

        _this8 = _super3.call(this, elementRef, focusTrapFactory, cdr, render, zone, overlayRef, nzConfigService, config, document, animationType);
        _this8.config = config;
        return _this8;
      }

      return NzModalContainerComponent;
    }(BaseModalContainer);

    NzModalContainerComponent.ɵfac = function NzModalContainerComponent_Factory(t) {
      return new (t || NzModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
    };

    NzModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzModalContainerComponent,
      selectors: [["nz-modal-container"]],
      viewQuery: function NzModalContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalElementRef = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "role", "dialog"],
      hostVars: 6,
      hostBindings: function NzModalContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@modalContainer.start", function NzModalContainerComponent_animation_modalContainer_start_HostBindingHandler($event) {
            return ctx.onAnimationStart($event);
          })("@modalContainer.done", function NzModalContainerComponent_animation_modalContainer_done_HostBindingHandler($event) {
            return ctx.onAnimationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzModalContainerComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event);
          })("mouseup", function NzModalContainerComponent_mouseup_HostBindingHandler($event) {
            return ctx.onMouseup($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.config.nzZIndex);
        }
      },
      exportAs: ["nzModalContainer"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 11,
      consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], ["nz-modal-title", "", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], ["nz-modal-title", ""], [3, "innerHTML"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]],
      template: function NzModalContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "nzToCssUnit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzModalContainerComponent_button_4_Template, 1, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzModalContainerComponent_div_5_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzModalContainerComponent_ng_template_7_Template, 0, 0, "ng-template", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzModalContainerComponent_div_8_Template, 1, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzModalContainerComponent_div_9_Template, 1, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, ctx.config == null ? null : ctx.config.nzWidth));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzClosable);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.config.nzBodyStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isStringContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzFooter !== null);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], NzModalCloseComponent, NzModalTitleComponent, NzModalFooterComponent];
      },
      pipes: function pipes() {
        return [ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzToCssUnitPipe"]];
      },
      encapsulation: 2,
      data: {
        animation: [nzModalAnimations.modalContainer]
      }
    });
    /** @nocollapse */

    NzModalContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]
      }, {
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
      }, {
        type: ModalOptions
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    NzModalContainerComponent.propDecorators = {
      portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
          "static": true
        }]
      }],
      modalElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['modalElement', {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var NzModalState = {
      OPEN: 0,
      CLOSING: 1,
      CLOSED: 2
    };
    /** @enum {string} */

    var NzTriggerAction = {
      CANCEL: "cancel",
      OK: "ok"
    };
    /**
     * @template T, R
     */

    var NzModalRef = /*#__PURE__*/function () {
      /**
       * @param {?} overlayRef
       * @param {?} config
       * @param {?} containerInstance
       */
      function NzModalRef(overlayRef, config, containerInstance) {
        var _this9 = this;

        _classCallCheck(this, NzModalRef);

        this.overlayRef = overlayRef;
        this.config = config;
        this.containerInstance = containerInstance;
        this.componentInstance = null;
        this.state = 0
        /* OPEN */
        ;
        this.afterClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.afterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        containerInstance.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'enter';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this9.afterOpen.next();

          _this9.afterOpen.complete();

          if (config.nzAfterOpen instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
            config.nzAfterOpen.emit();
          }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(containerInstance.onDestroy, containerInstance.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'exit';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this9.closeTimeout);

          _this9.finishDialogClose();
        });
        containerInstance.containerClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var cancelable = !_this9.config.nzCancelLoading && !_this9.config.nzOkLoading;

          if (cancelable) {
            _this9.trigger("cancel"
            /* CANCEL */
            );
          }
        });
        overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return (
            /** @type {?} */
            _this9.config.nzKeyboard && !_this9.config.nzCancelLoading && !_this9.config.nzOkLoading && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["hasModifierKey"])(event)
          );
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          event.preventDefault();

          _this9.trigger("cancel"
          /* CANCEL */
          );
        });
        containerInstance.cancelTriggered.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this9.trigger("cancel"
          /* CANCEL */
          );
        });
        containerInstance.okTriggered.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this9.trigger("ok"
          /* OK */
          );
        });
        overlayRef.detachments().subscribe(
        /**
        * @return {?}
        */
        function () {
          _this9.afterClose.next(_this9.result);

          _this9.afterClose.complete();

          if (config.nzAfterClose instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
            config.nzAfterClose.emit(_this9.result);
          }

          _this9.componentInstance = null;

          _this9.overlayRef.dispose();
        });
      }
      /**
       * @return {?}
       */


      _createClass(NzModalRef, [{
        key: "getContentComponent",
        value: function getContentComponent() {
          return (
            /** @type {?} */
            this.componentInstance
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "getElement",
        value: function getElement() {
          return this.containerInstance.getNativeElement();
        }
        /**
         * @param {?=} result
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy(result) {
          this.close(result);
        }
        /**
         * @return {?}
         */

      }, {
        key: "triggerOk",
        value: function triggerOk() {
          this.trigger("ok"
          /* OK */
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "triggerCancel",
        value: function triggerCancel() {
          this.trigger("cancel"
          /* CANCEL */
          );
        }
        /**
         * Open the modal.
         * @deprecated Opened when create, this method is useless.
         * \@breaking-change 10.0.0
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {} // noop

        /**
         * @param {?=} result
         * @return {?}
         */

      }, {
        key: "close",
        value: function close(result) {
          var _this10 = this;

          this.result = result;
          this.containerInstance.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.phaseName === 'start';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this10.overlayRef.detachBackdrop();

            _this10.closeTimeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this10.finishDialogClose();
            }, event.totalTime + 100);
          });
          this.containerInstance.startExitAnimation();
          this.state = 1
          /* CLOSING */
          ;
        }
        /**
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "updateConfig",
        value: function updateConfig(config) {
          Object.assign(this.config, config);
          this.containerInstance.cdr.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getState",
        value: function getState() {
          return this.state;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this.config;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getBackdropElement",
        value: function getBackdropElement() {
          return this.overlayRef.backdropElement;
        }
        /**
         * @private
         * @param {?} action
         * @return {?}
         */

      }, {
        key: "trigger",
        value: function trigger(action) {
          var _this11 = this;

          /** @type {?} */
          var trigger = {
            ok: this.config.nzOnOk,
            cancel: this.config.nzOnCancel
          }[action];
          /** @type {?} */

          var loadingKey =
          /** @type {?} */
          {
            ok: 'nzOkLoading',
            cancel: 'nzCancelLoading'
          }[action];
          /** @type {?} */

          var loading = this.config[loadingKey];

          if (loading) {
            return;
          }

          if (trigger instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
            trigger.emit(this.getContentComponent());
          } else if (typeof trigger === 'function') {
            /** @type {?} */
            var result = trigger(this.getContentComponent());
            /** @type {?} */

            var caseClose =
            /**
            * @param {?} doClose
            * @return {?}
            */
            function caseClose(doClose) {
              return doClose !== false && _this11.close(
              /** @type {?} */
              doClose);
            };

            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
              this.config[loadingKey] = true;
              /** @type {?} */

              var handleThen =
              /**
              * @param {?} doClose
              * @return {?}
              */
              function handleThen(doClose) {
                _this11.config[loadingKey] = false;

                _this11.closeWhitResult(doClose);
              };

              result.then(handleThen)["catch"](handleThen);
            } else {
              caseClose(result);
            }
          }
        }
        /**
         * @private
         * @param {?} result
         * @return {?}
         */

      }, {
        key: "closeWhitResult",
        value: function closeWhitResult(result) {
          if (result !== false) {
            this.close(result);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "finishDialogClose",
        value: function finishDialogClose() {
          this.state = 2
          /* CLOSED */
          ;
          this.overlayRef.dispose();
        }
      }]);

      return NzModalRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalService = /*#__PURE__*/function () {
      /**
       * @param {?} overlay
       * @param {?} injector
       * @param {?} nzConfigService
       * @param {?} parentModal
       */
      function NzModalService(overlay, injector, nzConfigService, parentModal) {
        var _this12 = this;

        _classCallCheck(this, NzModalService);

        this.overlay = overlay;
        this.injector = injector;
        this.nzConfigService = nzConfigService;
        this.parentModal = parentModal;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.afterAllClose =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(
        /**
        * @return {?}
        */
        function () {
          return _this12.openModals.length ? _this12._afterAllClosed : _this12._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
        });
      }
      /**
       * @return {?}
       */


      _createClass(NzModalService, [{
        key: "create",

        /**
         * @template T, R
         * @param {?} config
         * @return {?}
         */
        value: function create(config) {
          return this.open(
          /** @type {?} */
          config.nzContent, config);
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this.closeModals(this.openModals);
        }
        /**
         * @template T
         * @param {?=} options
         * @param {?=} confirmType
         * @return {?}
         */

      }, {
        key: "confirm",
        value: function confirm() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var confirmType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'confirm';

          if ('nzFooter' in options) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["warn"])("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
          }

          if (!('nzWidth' in options)) {
            options.nzWidth = 416;
          }

          if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
          }

          options.nzModalType = 'confirm';
          options.nzClassName = "ant-modal-confirm ant-modal-confirm-".concat(confirmType, " ").concat(options.nzClassName || '');
          return this.create(options);
        }
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "info",
        value: function info() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return this.confirmFactory(options, 'info');
        }
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "success",
        value: function success() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return this.confirmFactory(options, 'success');
        }
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "error",
        value: function error() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return this.confirmFactory(options, 'error');
        }
        /**
         * @template T
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "warning",
        value: function warning() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return this.confirmFactory(options, 'warning');
        }
        /**
         * @private
         * @template T, R
         * @param {?} componentOrTemplateRef
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(componentOrTemplateRef, config) {
          var _this13 = this;

          /** @type {?} */
          var configMerged = applyConfigDefaults(config || {}, new ModalOptions());
          /** @type {?} */

          var overlayRef = this.createOverlay(configMerged);
          /** @type {?} */

          var modalContainer = this.attachModalContainer(overlayRef, configMerged);
          /** @type {?} */

          var modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
          modalContainer.modalRef = modalRef;
          this.openModals.push(modalRef);
          modalRef.afterClose.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this13.removeOpenModal(modalRef);
          });
          return modalRef;
        }
        /**
         * @private
         * @param {?} modalRef
         * @return {?}
         */

      }, {
        key: "removeOpenModal",
        value: function removeOpenModal(modalRef) {
          /** @type {?} */
          var index = this.openModals.indexOf(modalRef);

          if (index > -1) {
            this.openModals.splice(index, 1);

            if (!this.openModals.length) {
              this._afterAllClosed.next();
            }
          }
        }
        /**
         * @private
         * @param {?} dialogs
         * @return {?}
         */

      }, {
        key: "closeModals",
        value: function closeModals(dialogs) {
          /** @type {?} */
          var i = dialogs.length;

          while (i--) {
            dialogs[i].close();

            if (!this.openModals.length) {
              this._afterAllClosed.next();
            }
          }
        }
        /**
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "createOverlay",
        value: function createOverlay(config) {
          /** @type {?} */
          var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME) || {};
          /** @type {?} */

          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true)
          });

          if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
            overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
          }

          return this.overlay.create(overlayConfig);
        }
        /**
         * @private
         * @param {?} overlayRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "attachModalContainer",
        value: function attachModalContainer(overlayRef, config) {
          /** @type {?} */
          var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this.injector, new WeakMap([[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"], overlayRef], [ModalOptions, config]]));
          /** @type {?} */

          var ContainerComponent = config.nzModalType === 'confirm' ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
          NzModalConfirmContainerComponent : // If the mode is not `confirm`, use `NzModalContainerComponent`
          NzModalContainerComponent;
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](ContainerComponent, config.nzViewContainerRef, injector);
          /** @type {?} */

          var containerRef = overlayRef.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * @private
         * @template T, R
         * @param {?} componentOrTemplateRef
         * @param {?} modalContainer
         * @param {?} overlayRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "attachModalContent",
        value: function attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, config) {
          /** @type {?} */
          var modalRef = new NzModalRef(overlayRef, config, modalContainer);

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            modalContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.nzComponentParams,
              modalRef: modalRef
            }));
          } else if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isNotNil"])(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
            /** @type {?} */
            var injector = this.createInjector(modalRef, config);
            /** @type {?} */

            var contentRef = modalContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.nzViewContainerRef, injector));
            setContentInstanceParams(contentRef.instance, config.nzComponentParams);
            modalRef.componentInstance = contentRef.instance;
          }

          return modalRef;
        }
        /**
         * @private
         * @template T, R
         * @param {?} modalRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "createInjector",
        value: function createInjector(modalRef, config) {
          /** @type {?} */
          var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
          /** @type {?} */

          var injectionTokens = new WeakMap([[NzModalRef, modalRef]]);
          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this.injector, injectionTokens);
        }
        /**
         * @private
         * @template T
         * @param {?=} options
         * @param {?=} confirmType
         * @return {?}
         */

      }, {
        key: "confirmFactory",
        value: function confirmFactory() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var confirmType = arguments.length > 1 ? arguments[1] : undefined;

          /** @type {?} */
          var iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
          };

          if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
          }

          if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
          }

          return this.confirm(options, confirmType);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.closeModals(this.openModalsAtThisLevel);
          this.afterAllClosedAtThisLevel.complete();
        }
      }, {
        key: "openModals",
        get: function get() {
          return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_afterAllClosed",
        get: function get() {
          /** @type {?} */
          var parent = this.parentModal;
          return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
        }
      }]);

      return NzModalService;
    }();

    NzModalService.ɵfac = function NzModalService_Factory(t) {
      return new (t || NzModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NzModalService, 12));
    };

    NzModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NzModalService,
      factory: NzModalService.ɵfac
    });
    /** @nocollapse */

    NzModalService.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }, {
        type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
      }, {
        type: NzModalService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-footer.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalFooterDirective =
    /**
     * @param {?} nzModalRef
     * @param {?} templateRef
     */
    function NzModalFooterDirective(nzModalRef, templateRef) {
      _classCallCheck(this, NzModalFooterDirective);

      this.nzModalRef = nzModalRef;
      this.templateRef = templateRef;

      if (this.nzModalRef) {
        this.nzModalRef.updateConfig({
          nzFooter: this.templateRef
        });
      }
    };

    NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) {
      return new (t || NzModalFooterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzModalRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]));
    };

    NzModalFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: NzModalFooterDirective,
      selectors: [["", "nzModalFooter", ""]],
      exportAs: ["nzModalFooter"]
    });
    /** @nocollapse */

    NzModalFooterDirective.ctorParameters = function () {
      return [{
        type: NzModalRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T, R
     */


    var NzModalComponent = /*#__PURE__*/function () {
      /**
       * @param {?} cdr
       * @param {?} modal
       * @param {?} viewContainerRef
       */
      function NzModalComponent(cdr, modal, viewContainerRef) {
        _classCallCheck(this, NzModalComponent);

        this.cdr = cdr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        // Confirm Modal ONLY

        this.nzModalType = 'default'; // TODO(@hsuanxyz) Input will not be supported

        this.nzOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // TODO(@hsuanxyz) Input will not be supported

        this.nzOnCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.modalRef = null;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NzModalComponent, [{
        key: "open",

        /**
         * @return {?}
         */
        value: function open() {
          if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
          }

          if (!this.modalRef) {
            /** @type {?} */
            var config = this.getConfig();
            this.modalRef = this.modal.create(config);
          }
        }
        /**
         * @param {?=} result
         * @return {?}
         */

      }, {
        key: "close",
        value: function close(result) {
          if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
          }

          if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
          }
        }
        /**
         * @param {?=} result
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy(result) {
          this.close(result);
        }
        /**
         * @return {?}
         */

      }, {
        key: "triggerOk",
        value: function triggerOk() {
          var _a;

          (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
        }
        /**
         * @return {?}
         */

      }, {
        key: "triggerCancel",
        value: function triggerCancel() {
          var _a;

          (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getContentComponent",
        value: function getContentComponent() {
          var _a;

          return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getElement",
        value: function getElement() {
          var _a;

          return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getModalRef",
        value: function getModalRef() {
          return this.modalRef;
        }
        /**
         * @private
         * @param {?} templateRef
         * @return {?}
         */

      }, {
        key: "setFooterWithTemplate",
        value: function setFooterWithTemplate(templateRef) {
          var _this14 = this;

          this.nzFooter = templateRef;

          if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              _this14.modalRef.updateConfig({
                nzFooter: _this14.nzFooter
              });
            });
          }

          this.cdr.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          /** @type {?} */
          var componentConfig = getConfigFromComponent(this);
          componentConfig.nzViewContainerRef = this.viewContainerRef;

          if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
          }

          return componentConfig;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var nzVisible = changes.nzVisible,
              otherChanges = Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__rest"])(changes, ["nzVisible"]);

          if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
          }

          if (nzVisible) {
            if (this.nzVisible) {
              this.open();
            } else {
              this.close();
            }
          }
        }
      }, {
        key: "modalFooter",
        set: function set(value) {
          if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "afterOpen",
        get: function get() {
          // Observable alias for nzAfterOpen
          return this.nzAfterOpen.asObservable();
        }
        /**
         * @return {?}
         */

      }, {
        key: "afterClose",
        get: function get() {
          // Observable alias for nzAfterClose
          return this.nzAfterClose.asObservable();
        }
      }]);

      return NzModalComponent;
    }();

    NzModalComponent.ɵfac = function NzModalComponent_Factory(t) {
      return new (t || NzModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]));
    };

    NzModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzModalComponent,
      selectors: [["nz-modal"]],
      contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzModalFooterDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalFooter = _t.first);
        }
      },
      viewQuery: function NzModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentTemplateRef = _t.first);
        }
      },
      inputs: {
        nzVisible: "nzVisible",
        nzClosable: "nzClosable",
        nzOkLoading: "nzOkLoading",
        nzOkDisabled: "nzOkDisabled",
        nzCancelDisabled: "nzCancelDisabled",
        nzCancelLoading: "nzCancelLoading",
        nzKeyboard: "nzKeyboard",
        nzNoAnimation: "nzNoAnimation",
        nzZIndex: "nzZIndex",
        nzWidth: "nzWidth",
        nzCloseIcon: "nzCloseIcon",
        nzOkType: "nzOkType",
        nzIconType: "nzIconType",
        nzModalType: "nzModalType",
        nzOnOk: "nzOnOk",
        nzOnCancel: "nzOnCancel",
        nzFooter: "nzFooter",
        nzMask: "nzMask",
        nzMaskClosable: "nzMaskClosable",
        nzCloseOnNavigation: "nzCloseOnNavigation",
        nzContent: "nzContent",
        nzComponentParams: "nzComponentParams",
        nzGetContainer: "nzGetContainer",
        nzWrapClassName: "nzWrapClassName",
        nzClassName: "nzClassName",
        nzStyle: "nzStyle",
        nzTitle: "nzTitle",
        nzMaskStyle: "nzMaskStyle",
        nzBodyStyle: "nzBodyStyle",
        nzOkText: "nzOkText",
        nzCancelText: "nzCancelText"
      },
      outputs: {
        nzOnOk: "nzOnOk",
        nzOnCancel: "nzOnCancel",
        nzAfterOpen: "nzAfterOpen",
        nzAfterClose: "nzAfterClose",
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzModal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function NzModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzModalComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: NzModalService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }];
    };

    NzModalComponent.propDecorators = {
      nzMask: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzMaskClosable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCloseOnNavigation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzVisible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzClosable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOkLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOkDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCancelDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCancelLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzKeyboard: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzNoAnimation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzComponentParams: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzFooter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzGetContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzZIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzWrapClassName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzClassName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCloseIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzMaskStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzBodyStyle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOkText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzCancelText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOkType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzIconType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzModalType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      nzOnOk: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzOnCancel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzAfterClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      nzVisibleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      contentTemplateRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
          "static": true
        }]
      }],
      modalFooter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [NzModalFooterDirective]
      }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzMask", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzMaskClosable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzVisible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzClosable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzOkLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzOkDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzCancelDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzCancelLoading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)], NzModalComponent.prototype, "nzKeyboard", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Object)], NzModalComponent.prototype, "nzNoAnimation", void 0);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalConfirmContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-modal-confirm-container',
          exportAs: 'nzModalConfirmContainer',
          template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <div class=\"ant-modal-confirm-body-wrapper\">\n            <div class=\"ant-modal-confirm-body\">\n              <i nz-icon [nzType]=\"config.nzIconType!\"></i>\n              <span class=\"ant-modal-confirm-title\">\n                <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n                  <span [innerHTML]=\"config.nzTitle\"></span>\n                </ng-container>\n              </span>\n              <div class=\"ant-modal-confirm-content\">\n                <ng-template cdkPortalOutlet></ng-template>\n                <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n              </div>\n            </div>\n            <div class=\"ant-modal-confirm-btns\">\n              <button\n                *ngIf=\"config.nzCancelText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel'\"\n                nz-button\n                (click)=\"onCancel()\"\n                [nzLoading]=\"!!config.nzCancelLoading\"\n                [disabled]=\"config.nzCancelDisabled\"\n              >\n                {{ config.nzCancelText || locale.cancelText }}\n              </button>\n              <button\n                *ngIf=\"config.nzOkText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok'\"\n                nz-button\n                [nzType]=\"config.nzOkType!\"\n                (click)=\"onOk()\"\n                [nzLoading]=\"!!config.nzOkLoading\"\n                [disabled]=\"config.nzOkDisabled\"\n              >\n                {{ config.nzOkText || locale.okText }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
          animations: [nzModalAnimations.modalContainer],
          // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
          host: {
            tabindex: '-1',
            role: 'dialog',
            '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
            '[style.zIndex]': 'config.nzZIndex',
            '[@.disabled]': 'config.nzNoAnimation',
            '[@modalContainer]': 'state',
            '(@modalContainer.start)': 'onAnimationStart($event)',
            '(@modalContainer.done)': 'onAnimationDone($event)',
            '(mousedown)': 'onMousedown($event)',
            '(mouseup)': 'onMouseup($event)'
          }
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
        }, {
          type: ModalOptions
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        cancelTriggered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        okTriggered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }],
        modalElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['modalElement', {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-modal-container',
          exportAs: 'nzModalContainer',
          template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div *ngIf=\"config.nzTitle\" nz-modal-title></div>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <ng-template cdkPortalOutlet></ng-template>\n          <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n        </div>\n        <div\n          *ngIf=\"config.nzFooter !== null\"\n          nz-modal-footer\n          [modalRef]=\"modalRef\"\n          (cancelTriggered)=\"onCloseClick()\"\n          (okTriggered)=\"onOkClick()\"\n        ></div>\n      </div>\n    </div>\n  ",
          animations: [nzModalAnimations.modalContainer],
          // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
          host: {
            tabindex: '-1',
            role: 'dialog',
            '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
            '[style.zIndex]': 'config.nzZIndex',
            '[@.disabled]': 'config.nzNoAnimation',
            '[@modalContainer]': 'state',
            '(@modalContainer.start)': 'onAnimationStart($event)',
            '(@modalContainer.done)': 'onAnimationDone($event)',
            '(mousedown)': 'onMousedown($event)',
            '(mouseup)': 'onMouseup($event)'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
        }, {
          type: ModalOptions
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }],
        modalElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['modalElement', {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]
        }, {
          type: NzModalService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[nzModalFooter]',
          exportAs: 'nzModalFooter'
        }]
      }], function () {
        return [{
          type: NzModalRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'nz-modal',
          exportAs: 'nzModal',
          template: " <ng-template><ng-content></ng-content></ng-template> ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: NzModalService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }];
      }, {
        nzVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzClosable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOkLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOkDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCancelDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCancelLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzKeyboard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzNoAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzZIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCloseIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOkType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzIconType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzModalType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOnOk: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzOnCancel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzAfterClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        nzVisibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        modalFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [NzModalFooterDirective]
        }],
        nzFooter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzMask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzMaskClosable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCloseOnNavigation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzComponentParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzGetContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzWrapClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzClassName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzMaskStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzBodyStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzOkText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        nzCancelText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        contentTemplateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-close.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalCloseComponent =
    /**
     * @param {?} config
     */
    function NzModalCloseComponent(config) {
      _classCallCheck(this, NzModalCloseComponent);

      this.config = config;
    };

    NzModalCloseComponent.ɵfac = function NzModalCloseComponent_Factory(t) {
      return new (t || NzModalCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions));
    };

    NzModalCloseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzModalCloseComponent,
      selectors: [["button", "nz-modal-close", ""]],
      hostAttrs: ["aria-label", "Close", 1, "ant-modal-close"],
      exportAs: ["NzModalCloseBuiltin"],
      attrs: _c2,
      decls: 2,
      vars: 1,
      consts: [[1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"]],
      template: function NzModalCloseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalCloseComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzCloseIcon);
        }
      },
      directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzModalCloseComponent.ctorParameters = function () {
      return [{
        type: ModalOptions
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalCloseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'button[nz-modal-close]',
          exportAs: 'NzModalCloseBuiltin',
          template: "\n    <span class=\"ant-modal-close-x\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzCloseIcon; let closeIcon\">\n        <i nz-icon [nzType]=\"closeIcon\" class=\"ant-modal-close-icon\"></i>\n      </ng-container>\n    </span>\n  ",
          host: {
            "class": 'ant-modal-close',
            'aria-label': 'Close'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: ModalOptions
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalFooterComponent = /*#__PURE__*/function () {
      /**
       * @param {?} i18n
       * @param {?} config
       */
      function NzModalFooterComponent(i18n, config) {
        var _this15 = this;

        _classCallCheck(this, NzModalFooterComponent);

        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.locale = {};
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();

        if (Array.isArray(config.nzFooter)) {
          this.buttonsFooter = true;
          this.buttons =
          /** @type {?} */
          config.nzFooter.map(mergeDefaultOption);
        }

        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this15.locale = _this15.i18n.getLocaleData('Modal');
        });
      }
      /**
       * @return {?}
       */


      _createClass(NzModalFooterComponent, [{
        key: "onCancel",
        value: function onCancel() {
          this.cancelTriggered.emit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onOk",
        value: function onOk() {
          this.okTriggered.emit();
        }
        /**
         * Returns the value of the specified key.
         * If it is a function, run and return the return value of the function.
         * @deprecated Not support use function type.
         * \@breaking-change 10.0.0
         * @param {?} options
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "getButtonCallableProp",
        value: function getButtonCallableProp(options, prop) {
          /** @type {?} */
          var value = options[prop];
          /** @type {?} */

          var componentInstance = this.modalRef.getContentComponent();
          return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
        }
        /**
         * Run function based on the type and set its `loading` prop if needed.
         * @deprecated Should be set options' value by the user, not library.
         * \@breaking-change 10.0.0
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "onButtonClick",
        value: function onButtonClick(options) {
          /** @type {?} */
          var loading = this.getButtonCallableProp(options, 'loading');

          if (!loading) {
            /** @type {?} */
            var result = this.getButtonCallableProp(options, 'onClick');

            if (options.autoLoading && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
              options.loading = true;
              result.then(
              /**
              * @return {?}
              */
              function () {
                return options.loading = false;
              })["catch"](
              /**
              * @return {?}
              */
              function () {
                return options.loading = false;
              });
            }
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
      }]);

      return NzModalFooterComponent;
    }();

    NzModalFooterComponent.ɵfac = function NzModalFooterComponent_Factory(t) {
      return new (t || NzModalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions));
    };

    NzModalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzModalFooterComponent,
      selectors: [["div", "nz-modal-footer", ""]],
      hostAttrs: [1, "ant-modal-footer"],
      inputs: {
        modalRef: "modalRef"
      },
      outputs: {
        cancelTriggered: "cancelTriggered",
        okTriggered: "okTriggered"
      },
      exportAs: ["NzModalFooterBuiltin"],
      attrs: _c3,
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [4, "nzStringTemplateOutlet"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"]],
      template: function NzModalFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzFooter)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"]],
      encapsulation: 2
    });
    /** @nocollapse */

    NzModalFooterComponent.ctorParameters = function () {
      return [{
        type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
      }, {
        type: ModalOptions
      }];
    };

    NzModalFooterComponent.propDecorators = {
      cancelTriggered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      okTriggered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      modalRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'div[nz-modal-footer]',
          exportAs: 'NzModalFooterBuiltin',
          template: "\n    <ng-container *ngIf=\"config.nzFooter; else defaultFooterButtons\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzFooter\">\n        <div *ngIf=\"!buttonsFooter\" [innerHTML]=\"config.nzTitle\"></div>\n        <ng-container *ngIf=\"buttonsFooter\">\n          <button\n            *ngFor=\"let button of buttons\"\n            nz-button\n            (click)=\"onButtonClick(button)\"\n            [hidden]=\"!getButtonCallableProp(button, 'show')\"\n            [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n            [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n            [nzType]=\"button.type!\"\n            [nzShape]=\"button.shape!\"\n            [nzSize]=\"button.size!\"\n            [nzGhost]=\"button.ghost!\"\n          >\n            {{ button.label }}\n          </button>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #defaultFooterButtons>\n      <button\n        *ngIf=\"config.nzCancelText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel'\"\n        nz-button\n        (click)=\"onCancel()\"\n        [nzLoading]=\"!!config.nzCancelLoading\"\n        [disabled]=\"config.nzCancelDisabled\"\n      >\n        {{ config.nzCancelText || locale.cancelText }}\n      </button>\n      <button\n        *ngIf=\"config.nzOkText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok'\"\n        nz-button\n        [nzType]=\"config.nzOkType!\"\n        (click)=\"onOk()\"\n        [nzLoading]=\"!!config.nzOkLoading\"\n        [disabled]=\"config.nzOkDisabled\"\n      >\n        {{ config.nzOkText || locale.okText }}\n      </button>\n    </ng-template>\n  ",
          host: {
            "class": 'ant-modal-footer'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]
        }, {
          type: ModalOptions
        }];
      }, {
        cancelTriggered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        okTriggered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        modalRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @param {?} options
     * @return {?}
     */


    function mergeDefaultOption(options) {
      return Object.assign({
        type: null,
        size: 'default',
        autoLoading: true,
        show: true,
        loading: false,
        disabled: false
      }, options);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-title.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalTitleComponent =
    /**
     * @param {?} config
     */
    function NzModalTitleComponent(config) {
      _classCallCheck(this, NzModalTitleComponent);

      this.config = config;
    };

    NzModalTitleComponent.ɵfac = function NzModalTitleComponent_Factory(t) {
      return new (t || NzModalTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions));
    };

    NzModalTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzModalTitleComponent,
      selectors: [["div", "nz-modal-title", ""]],
      hostAttrs: [1, "ant-modal-header"],
      exportAs: ["NzModalTitleBuiltin"],
      attrs: _c4,
      decls: 2,
      vars: 1,
      consts: [[1, "ant-modal-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"]],
      template: function NzModalTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalTitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzTitle);
        }
      },
      directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    NzModalTitleComponent.ctorParameters = function () {
      return [{
        type: ModalOptions
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'div[nz-modal-title]',
          exportAs: 'NzModalTitleBuiltin',
          template: "\n    <div class=\"ant-modal-title\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n        <div [innerHTML]=\"config.nzTitle\"></div>\n      </ng-container>\n    </div>\n  ",
          host: {
            "class": 'ant-modal-header'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: ModalOptions
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: modal.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NzModalModule = function NzModalModule() {
      _classCallCheck(this, NzModalModule);
    };

    NzModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NzModalModule
    });
    NzModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NzModalModule_Factory(t) {
        return new (t || NzModalModule)();
      },
      providers: [NzModalService],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"], ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzPipesModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzModalModule, {
        declarations: function declarations() {
          return [NzModalComponent, NzModalFooterDirective, NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalContainerComponent, NzModalConfirmContainerComponent, NzModalComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"], ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzPipesModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"]];
        },
        exports: function exports() {
          return [NzModalComponent, NzModalFooterDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"], ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzPipesModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"]],
          exports: [NzModalComponent, NzModalFooterDirective],
          providers: [NzModalService],
          entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
          declarations: [NzModalComponent, NzModalFooterDirective, NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalContainerComponent, NzModalConfirmContainerComponent, NzModalComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: modal-legacy-api.ts
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
     * @abstract
     * @template T, R
     */


    var NzModalLegacyAPI = function NzModalLegacyAPI() {
      _classCallCheck(this, NzModalLegacyAPI);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ng-zorro-antd-modal.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-zorro-antd-modal.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~pages-account-organization-organization-module~pages-account-person-info-update-person-info-~86bf2d2b-es5.js.map