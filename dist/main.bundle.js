webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		"../../../../../src/pages/about/about.module.ts",
		1
	],
	"../pages/home/home.module": [
		"../../../../../src/pages/home/home.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.0@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.0@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_page_home_page_component__ = __webpack_require__("../../../../../src/pages/home/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about_page_about_page_component__ = __webpack_require__("../../../../../src/pages/about/about-page/about-page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Lazyload模式路由，适合服务端渲染
var SSRroutes = [
    {
        path: '',
        children: []
    },
    { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
    { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
// SPA模式路由，适合客户端打包


var SPAroutes = [
    {
        path: '',
        children: []
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__pages_about_about_page_about_page_component__["a" /* AboutPageComponent */] },
];
// 配置路由模式
var routes = SSRroutes;
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a routerLink=\"home\">Home</a></h2>\n  </li>\n  <li>\n    <h2><a routerLink=\"about\">About</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.5@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.0@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ng Lazyload Starter';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@4.3.0@@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.0@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// 当打包部署静态包时，需要加载本Module，当使用服务端渲染时，请注释
// import { SPAModule } from '../pages/spa.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'ng-lazyload-starter' }),
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.0@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@4.3.0@@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/pages/about/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>777666777\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n  about-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/pages/about/about-page/about-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.5@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/about/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.0@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@4.3.0@@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPageComponent = (function () {
    function AboutPageComponent(meta, title) {
        title.setTitle('My About Page');
        meta.addTags([
            {
                name: 'author', content: 'anasit.com'
            },
            {
                name: 'keywords', content: 'angular 4 tutorial, angular seo'
            },
            {
                name: 'description', content: 'This is my great description.'
            },
        ]);
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about-page',
        template: __webpack_require__("../../../../../src/pages/about/about-page/about-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/about/about-page/about-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object])
], AboutPageComponent);

var _a, _b;
//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "../../../../../src/pages/home/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>777\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n  home-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/pages/home/home-page/home-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.5@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/home/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.0@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@4.3.0@@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(meta, title) {
        title.setTitle('My Home Page');
        meta.addTags([
            {
                name: 'author', content: 'anasit.com'
            },
            {
                name: 'keywords', content: 'angular 4 tutorial, angular seo'
            },
            {
                name: 'description', content: 'This is my great description.'
            },
        ]);
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/pages/home/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/pages/home/home-page/home-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map