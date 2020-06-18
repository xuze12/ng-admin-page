(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-system-dictionary-dictionary-list-dictionary-list-module"],{

/***/ "./src/app/pages/system/dictionary/dictionary-list/dictionary-list-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/system/dictionary/dictionary-list/dictionary-list-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DictionaryListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryListRoutingModule", function() { return DictionaryListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dictionary_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary-list.component */ "./src/app/pages/system/dictionary/dictionary-list/dictionary-list.component.ts");





const routes = [
    { path: '', component: _dictionary_list_component__WEBPACK_IMPORTED_MODULE_2__["DictionaryListComponent"] },
];
class DictionaryListRoutingModule {
}
DictionaryListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DictionaryListRoutingModule });
DictionaryListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DictionaryListRoutingModule_Factory(t) { return new (t || DictionaryListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DictionaryListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/system/dictionary/dictionary-list/dictionary-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/system/dictionary/dictionary-list/dictionary-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DictionaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryListComponent", function() { return DictionaryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/page-header/page-header.component */ "./src/app/components/page-header/page-header.component.ts");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function DictionaryListComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u7F16\u8F91");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.des);
} }
class DictionaryListComponent {
    constructor() {
        this.listOfData = [
            {
                key: '1',
                name: '机构属性',
                des: '组织机构属性，可在组织管理出进行配置',
            },
            {
                key: '2',
                name: '机构属性',
                des: '组织机构属性，可在组织管理出进行配置',
            },
            {
                key: '3',
                name: '机构属性',
                des: '组织机构属性，可在组织管理出进行配置',
            }
        ];
    }
    ngOnInit() {
    }
}
DictionaryListComponent.ɵfac = function DictionaryListComponent_Factory(t) { return new (t || DictionaryListComponent)(); };
DictionaryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DictionaryListComponent, selectors: [["app-dictionary-list"]], decls: 13, vars: 2, consts: [[3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["routerLink", "/admin/system/dictionary-attr"]], template: function DictionaryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u5B57\u5178\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DictionaryListComponent_tr_12_Template, 8, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5c3RlbS9kaWN0aW9uYXJ5L2RpY3Rpb25hcnktbGlzdC9kaWN0aW9uYXJ5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dictionary-list',
                templateUrl: './dictionary-list.component.html',
                styleUrls: ['./dictionary-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/system/dictionary/dictionary-list/dictionary-list.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/system/dictionary/dictionary-list/dictionary-list.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DictionaryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryListModule", function() { return DictionaryListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dictionary_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary-list-routing.module */ "./src/app/pages/system/dictionary/dictionary-list/dictionary-list-routing.module.ts");
/* harmony import */ var _dictionary_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary-list.component */ "./src/app/pages/system/dictionary/dictionary-list/dictionary-list.component.ts");
/* harmony import */ var _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/page-header/page-header.module */ "./src/app/components/page-header/page-header.module.ts");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");





// import { NzButtonModule } from 'ng-zorro-antd/button';



// import { NzModalModule } from 'ng-zorro-antd/modal';
class DictionaryListModule {
}
DictionaryListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DictionaryListModule });
DictionaryListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DictionaryListModule_Factory(t) { return new (t || DictionaryListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dictionary_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["DictionaryListRoutingModule"],
            _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
            // NzButtonModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DictionaryListModule, { declarations: [_dictionary_list_component__WEBPACK_IMPORTED_MODULE_3__["DictionaryListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dictionary_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["DictionaryListRoutingModule"],
        _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
        // NzButtonModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"]], exports: [_dictionary_list_component__WEBPACK_IMPORTED_MODULE_3__["DictionaryListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dictionary_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["DictionaryListRoutingModule"],
                    _components_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                    // NzButtonModule,
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_6__["NzDividerModule"],
                ],
                declarations: [_dictionary_list_component__WEBPACK_IMPORTED_MODULE_3__["DictionaryListComponent"]],
                exports: [_dictionary_list_component__WEBPACK_IMPORTED_MODULE_3__["DictionaryListComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-system-dictionary-dictionary-list-dictionary-list-module-es2015.js.map