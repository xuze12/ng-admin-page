(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-person-person-module"],{

/***/ "./src/app/pages/account/person/person-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/account/person/person-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return PersonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.component */ "./src/app/pages/account/person/person.component.ts");





const routes = [
    { path: '', component: _person_component__WEBPACK_IMPORTED_MODULE_2__["PersonComponent"] },
];
class PersonRoutingModule {
}
PersonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonRoutingModule });
PersonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonRoutingModule_Factory(t) { return new (t || PersonRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/account/person/person.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/account/person/person.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/page-header/page-header.component */ "./src/app/components/page-header/page-header.component.ts");
/* harmony import */ var _region_tree_region_tree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../region-tree/region-tree.component */ "./src/app/pages/account/region-tree/region-tree.component.ts");
/* harmony import */ var _person_right_content_person_right_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../person-right-content/person-right-content.component */ "./src/app/pages/account/person-right-content/person-right-content.component.ts");






class PersonComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        console.log(this.router);
        this.route.params.subscribe(data => {
            console.log(data, '-----------route params');
        });
    }
}
PersonComponent.ɵfac = function PersonComponent_Factory(t) { return new (t || PersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonComponent, selectors: [["app-person"]], decls: 6, vars: 0, consts: [[1, "person-content"], [1, "leftSide"], [1, "rightSide"]], template: function PersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-region-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-person-right-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _region_tree_region_tree_component__WEBPACK_IMPORTED_MODULE_3__["RegionTreeComponent"], _person_right_content_person_right_content_component__WEBPACK_IMPORTED_MODULE_4__["PersonRightContentComponent"]], styles: [".person-content[_ngcontent-%COMP%] {\n  padding: 15px 24px;\n  display: flex;\n}\n.person-content[_ngcontent-%COMP%]   .leftSide[_ngcontent-%COMP%] {\n  width: 200px;\n  border-right: 1px solid #eee;\n  margin-right: 24px;\n  padding-right: 24px;\n}\n.person-content[_ngcontent-%COMP%]   .rightSide[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nL1B1YmxpYy9uZy9uZy1hZG1pbi9zcmMvYXBwL3BhZ2VzL2FjY291bnQvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREFFO0VBQ0UsT0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNXB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAubGVmdFNpZGUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIC5yaWdodFNpZGUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn0iLCIucGVyc29uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGVyc29uLWNvbnRlbnQgLmxlZnRTaWRlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG59XG4ucGVyc29uLWNvbnRlbnQgLnJpZ2h0U2lkZSB7XG4gIGZsZXg6IDE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person',
                templateUrl: './person.component.html',
                styleUrls: ['./person.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/account/person/person.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/account/person/person.module.ts ***!
  \*******************************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/pages/account/person/person-routing.module.ts");
/* harmony import */ var _person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.component */ "./src/app/pages/account/person/person.component.ts");
/* harmony import */ var _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/page-header/page-header.module */ "./src/app/components/page-header/page-header.module.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var _region_tree_region_tree_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../region-tree/region-tree.module */ "./src/app/pages/account/region-tree/region-tree.module.ts");
/* harmony import */ var _person_right_content_person_right_content_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../person-right-content/person-right-content.module */ "./src/app/pages/account/person-right-content/person-right-content.module.ts");











class PersonModule {
}
PersonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonModule });
PersonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonModule_Factory(t) { return new (t || PersonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _person_routing_module__WEBPACK_IMPORTED_MODULE_2__["PersonRoutingModule"],
            _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
            _region_tree_region_tree_module__WEBPACK_IMPORTED_MODULE_8__["RegionTreeModule"],
            _person_right_content_person_right_content_module__WEBPACK_IMPORTED_MODULE_9__["PersonRightContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonModule, { declarations: [_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _person_routing_module__WEBPACK_IMPORTED_MODULE_2__["PersonRoutingModule"],
        _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
        _region_tree_region_tree_module__WEBPACK_IMPORTED_MODULE_8__["RegionTreeModule"],
        _person_right_content_person_right_content_module__WEBPACK_IMPORTED_MODULE_9__["PersonRightContentModule"]], exports: [_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _person_routing_module__WEBPACK_IMPORTED_MODULE_2__["PersonRoutingModule"],
                    _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerModule"],
                    _region_tree_region_tree_module__WEBPACK_IMPORTED_MODULE_8__["RegionTreeModule"],
                    _person_right_content_person_right_content_module__WEBPACK_IMPORTED_MODULE_9__["PersonRightContentModule"]
                ],
                declarations: [_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]],
                exports: [_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-account-person-person-module-es2015.js.map