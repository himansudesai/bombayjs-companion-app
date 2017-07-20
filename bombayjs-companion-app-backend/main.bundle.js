webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".albums-table {\n  display: table;\n  width: 100%;\n}\n\n.albums-row {\n  display: table-row;\n}\n\n.album-cell {\n  display: table-cell;\n  border: 1px solid #EFEFEF;\n  padding: 5px;\n  width: 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "#app {\n    margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<p><span class=\"album-name\">{{album.collectionName}}</span><span> ({{year(album.releaseDate)}}) </span></p>\n<img src=\"{{album.artworkUrl100}}\">\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<h1>Albums Component</h1>\n\n<h4>Svc Num Albums = {{aSvc.numAlbums}}</h4>\n<h4>Svc Num Rows = {{aSvc.numRows}}</h4>\n\n<div class=\"albums-table\">\n  <div *ngFor=\"let row of rows\" class=\"albums-row\">\n    <div *ngFor=\"let album of row\" class=\"album-cell\">\n        <album-comp [album]=\"album\"></album-comp>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<albums [numAlbums]=\"aSvc.numAlbums\" [numRows]=\"aSvc.numRows\"></albums>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <div id=\"top-nav\">\n        <ul class=\"nav nav-pills\">\n            <li class=\"active\"><a href=\"#/stocks\">Stocks</a></li>\n            <li><a href=\"#/albums\">Albums</a></li>\n        </ul>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div  style=\"margin-top: 3px; border: 1px solid oldlace\">\n  <h4>Stock Quotes   (NASDAQ only)</h4>\n  <input [(ngModel)]=\"symbol\" (keyup.enter)=\"makeRequest()\"><br/><br/>\n  <button type=\"button\" class=\"btn btn-danger\" id=\"get-stock-quote\" (click)=\"makeRequest()\">Make Request</button>\n  <div *ngIf=\"loaded\" id=\"quote-details\" style=\"color: blue;\" >\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Symbol:</label><span id=\"sym\">{{name}}</span><br/>\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Name:</label><span id=\"company-name\">{{name}}</span><br/>\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Last:</label>{{last}}<br/>\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Change:</label>{{change}}<br/>\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Percent Change:</label><span id=\"pct-change\">{{percentChange}}</span><br/>\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Last Trade:</label>{{lastTrade}}<br/><br/>\n    <label style=\"background-color: lightyellow; margin-right: 5px\">Raw</label>\n  </div>\n</div>\n<pre style=\"margin-top: 2px; color: indianred\">{{data | json}}</pre>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = (function () {
    function AlbumService(http) {
        var _this = this;
        this.http = http;
        this.numAlbums = 12;
        this.numRows = 4;
        setTimeout(function () {
            _this.numRows = 3;
        }, 3000);
    }
    AlbumService.prototype.getAlbums = function (num) {
        console.log('++hdd++ AlbumsService --> getAlbums');
        var ob = this.http.get("http://localhost:4200/albums?term=the+beatles&entity=album&limit=" + num);
        return ob.toPromise();
    };
    return AlbumService;
}());
AlbumService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AlbumService);

var _a;
//# sourceMappingURL=album.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlbumComponent = (function () {
    function AlbumComponent() {
    }
    AlbumComponent.prototype.year = function (date) {
        return (new Date(date)).getFullYear();
    };
    return AlbumComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AlbumComponent.prototype, "album", void 0);
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'album-comp',
        template: __webpack_require__(158),
        styles: [__webpack_require__(153)]
    })
], AlbumComponent);

//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumsComponent = (function () {
    function AlbumsComponent(http, aSvc, rr) {
        this.http = http;
        this.aSvc = aSvc;
        this.rr = rr;
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        console.log('++hdd++ AlbumsComponent ngOnInit');
    };
    AlbumsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('++hdd++ AlbumsComponent ngOnChanges');
        this.numAlbums = (this.numAlbums < 1) ? 1 : this.numAlbums;
        this.numRows = (this.numRows < 1) ? 1 : this.numRows;
        var p = this.http.get("/albums?term=the+beatles&entity=album&limit=" + this.numAlbums).toPromise();
        p.then(function (res) {
            var resJson = res.json();
            _this.albums = resJson.results;
            _this.sort();
            var perRow = Math.ceil(_this.albums.length / _this.numRows);
            var idx = 0;
            var curRow;
            _this.rows = [];
            for (var row = 0; row < _this.albums.length; row++) {
                curRow = [];
                for (var col = 0; col < perRow && idx < _this.albums.length; col++) {
                    curRow.push(_this.albums[idx++]);
                }
                _this.rows.push(curRow);
            }
        });
    };
    AlbumsComponent.prototype.sort = function () {
        this.albums = this.albums.sort(function (a, b) {
            return (new Date(a.releaseDate) < new Date(b.releaseDate) ? -1 : 1);
        }).reverse();
    };
    return AlbumsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], AlbumsComponent.prototype, "numRows", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], AlbumsComponent.prototype, "numAlbums", void 0);
AlbumsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(159),
        styles: [__webpack_require__(154)],
        selector: 'albums'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__album_service__["a" /* AlbumService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AlbumsComponent);

var _a, _b, _c;
//# sourceMappingURL=albums.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__album_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumsPageComponent = (function () {
    function AlbumsPageComponent(http, aSvc, rr) {
        this.http = http;
        this.aSvc = aSvc;
        this.rr = rr;
    }
    AlbumsPageComponent.prototype.ngOnInit = function () {
        console.log('++hdd++ AlbumsPageComponent ngOnInit');
    };
    AlbumsPageComponent.prototype.ngOnChanges = function () {
        console.log('++hdd++ AlbumsPageComponent ngOnChanges');
    };
    return AlbumsPageComponent;
}());
AlbumsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(160),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__album_service__["a" /* AlbumService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AlbumsPageComponent);

var _a, _b, _c;
//# sourceMappingURL=albumspage.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        //  router: Router;
        this.title = 'app works!';
        console.log('++hdd++ AppComponent constructor');
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('++hdd++ AppComponent ngOnInit');
        /*
        this.router.events.subscribe((something: any) => {
          (<any>console).log('++hdd++ something working?');
        })
        */
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stocks_stocks_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__albums_albumspage_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__albums_albums_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__albums_album_album_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__albums_album_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__stocks_stocks_component__["a" /* StocksComponent */],
            __WEBPACK_IMPORTED_MODULE_7__albums_albumspage_component__["a" /* AlbumsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__albums_albums_component__["a" /* AlbumsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__albums_album_album_component__["a" /* AlbumComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'stocks', component: __WEBPACK_IMPORTED_MODULE_6__stocks_stocks_component__["a" /* StocksComponent */] },
                { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_7__albums_albumspage_component__["a" /* AlbumsPageComponent */] },
                { path: '', redirectTo: 'stocks', pathMatch: 'full' }
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__albums_album_service__["a" /* AlbumService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
export class AppComponent {
  router: Router;
  constructor(router: Router) {
    (<any>console).log('\n\n++hdd++ constructor of app component');
*/
var StocksComponent = (function () {
    function StocksComponent(http) {
        this.http = http;
        console.log("++hdd++ StocksComponent constructor");
    }
    StocksComponent.prototype.ngOnInit = function () {
        console.log('\n\n++hdd++\n\n');
    };
    /*
    // [
    {
    "id": "12607212"
    ,"t" : "TSLA"
    ,"e" : "NASDAQ"
    ,"l" : "308.35"
    ,"l_fix" : "308.35"
    ,"l_cur" : "308.35"
    ,"s": "0"
    ,"ltt":"4:00PM EDT"
    ,"lt" : "May 5, 4:00PM EDT"
    ,"lt_dts" : "2017-05-05T16:00:02Z"
    ,"c" : "+12.89"
    ,"c_fix" : "12.89"
    ,"cp" : "4.36"
    ,"cp_fix" : "4.36"
    ,"ccol" : "chg"
    ,"pcls_fix" : "295.46"
    }
    ]
    */
    StocksComponent.prototype.makeRequest = function () {
        var _this = this;
        console.log('BUTTON!');
        if (this.symbol) {
            var endpoint = '/finance/info?client=ig&q=NASDAQ%3A';
            this.http.get(endpoint + this.symbol)
                .subscribe(function (res) {
                var rawText = res.text();
                var minusComments = rawText.substr(4);
                _this.data = (JSON.parse(minusComments))[0];
                _this.loading = false;
                _this.percentChange = _this.data.cp_fix;
                _this.name = _this.data.t;
                _this.last = _this.data.l;
                _this.change = _this.data.c;
                _this.lastTrade = _this.data.lt;
                _this.loaded = true;
            });
        }
    };
    return StocksComponent;
}());
StocksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'stocks',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StocksComponent);

var _a;
//# sourceMappingURL=stocks.component.js.map

/***/ }),

/***/ 99:
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

/***/ })

},[194]);
//# sourceMappingURL=main.bundle.js.map