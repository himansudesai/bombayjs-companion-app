webpackJsonp([1,4],{

/***/ 100:
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".albums-table {\n  display: table;\n  width: 100%;\n}\n\n.albums-row {\n  display: table-row;\n}\n\n.album-cell {\n  display: table-cell;\n  border: 1px solid #EFEFEF;\n  padding: 5px;\n  width: 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "#band {\n  width: 15vw;\n  height: 30px;\n  display: inline-block;\n}\n.spacer {\n  margin-left: 6px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "#app {\n    margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "#jokes-page {\n  margin-top: 3px;\n  border: 1px solid oldlace;\n  margin-left: 5px;\n}\n.spacer {\n  margin-left: 6px;\n}\n#page-title {\n  padding-top: 20px;\n}\n#page-title img {\n  width: 150px;\n  margin: 10px;\n}\n#page-title span {\n  font-size: 32px;\n}\npre {\n  height: 200px;\n}\np {\n  font-style: italic;\n  color: grey;\n}\n#quote-details {\n  font-size: large;\n}\n#temp {\n  color: #C45953;\n}\npre {\n  margin-top: 2px;\n  margin-left: 5px;\n  color: #e9635f;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".band, .selected-band {\n  list-style: none;\n  font-size: initial;\n  cursor: pointer;\n}\n.selected-band {\n  color: #337ab7;\n  font-weight: bold;\n}\n.settings-table-column {\n  display: table-cell;\n  width: 25vw;\n  border: 1px solid #e0d9d9;\n}\n#settings-page-padding, #post-example {\n  padding: 5px;\n  padding-left: 15px;\n}\n#button-panel {\n  margin-top: 20px;\n}\n#bands-list {\n  padding-left: 10px;\n}\ninput {\n  width: 72%;\n}\nlabel {\n  width: 25%;\n}\n#settings-detail {\n  padding-left: 10px;\n  margin-top: 7px;\n}\n#button-panel {\n  padding: 4px;\n  font-size: initial\n}\n#post-example label {\n  width: 10%;\n}\n#post-example input {\n  width: 20%;\n}\n#post-example pre {\n  margin-top: 2px;\n  color: #e9635f;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<p><span class=\"album-name\">{{album.collectionName}}</span><span> ({{year(album.releaseDate)}}) </span></p>\n<img src=\"{{album.artworkUrl100}}\">\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<h4>Albums</h4>\n\n<pre>displaying {{band}} with {{numAlbums}} albums in {{numRows}} rows</pre>\n\n<div class=\"albums-table\">\n  <div *ngFor=\"let row of rows\" class=\"albums-row\">\n    <div *ngFor=\"let album of row\" class=\"album-cell\">\n        <album-comp [album]=\"album\"></album-comp>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"form-group\">\n  <label>Band</label>\n  <span class=\"spacer\"></span>\n  <select class=\"form-control\" id=\"band\" [(ngModel)]=\"selectedBand\" (change)=\"bandSelected($event.target)\">\n    <option *ngFor=\"let band of store.bands\" [ngValue]=\"band\">{{band}}</option>\n  </select>\n  <span class=\"spacer\"></span>\n  <span class=\"spacer\"></span>\n  <label>Albums</label>\n  <span class=\"spacer\"></span>\n  <input id=\"albums-inp\" [(ngModel)]=\"albums\">\n  <span class=\"spacer\"></span>\n  <span class=\"spacer\"></span>\n  <label>Rows</label>\n  <span class=\"spacer\"></span>\n  <input id=\"rows-inp\" [(ngModel)]=\"rows\">\n</div>\n\n<albums [band]=\"selectedBand\" [numAlbums]=\"albums\" [numRows]=\"rows\"></albums>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <div id=\"top-nav\">\n        <ul class=\"nav nav-pills\">\n            <li [ngClass]=\"{'active': store.links.jokes}\"><a href=\"#/jokes\">Jokes</a></li>\n            <li [ngClass]=\"{'active': store.links.albums}\"><a href=\"#/albums\">Albums</a></li>\n            <li [ngClass]=\"{'active': store.links.settings}\"><a href=\"#/settings\">Settings</a></li>\n        </ul>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<div  id=\"jokes-page\">  \n  <div id=\"page-title\"><span>Chuck</span><img src=\"assets/images/chuck_norris.jpg\"><span>Norris</span>\n  </div>\n  <br/>\n  <label>Category</label>\n  <span class=\"spacer\"></span>\n  <input [(ngModel)]=\"category\"><br/>\n  <div *ngIf=\"loaded\" id=\"joke\" style=\"color: #337ab7;\" >\n    {{joke}}\n    <!-- <img src=\"{{icon_url}}\" /> -->\n  </div>\n  <br/>\n  <button type=\"button\" class=\"btn btn-danger\" id=\"get-jokes\" (click)=\"makeRequest()\">Get Joke</button>\n  <br/>\n</div>\n<br/>\n<pre>{{rawData | json}}</pre>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div id=\"settings-page-padding\">\n  <h4>Settings</h4>\n  <div id=\"settings-table\">\n    <div class=\"settings-table-column\">\n      <ul id=\"bands-list\">\n        <li *ngFor=\"let band of bands; let i = index\" [ngClass]=\"{'selected-band': isSelected(band), 'band': !isSelected(band)}\" (click)=\"bandSelected(band)\">{{band}}</li>\n      </ul>\n    </div>\n    <div class=\"settings-table-column\">\n      <div *ngIf=\"selectedBand\" id=\"settings-detail\">\n        <label>Albums</label>\n        <input id=\"num-albums\" [(ngModel)]=\"settings[this.selectedBand].albums\">\n        <br/>\n        <label>Rows</label>\n        <input id=\"num-rows\" [(ngModel)]=\"settings[this.selectedBand].rows\">\n      </div>\n    </div>\n  </div>\n  <ul class=\"nav nav-pills\" id=\"button-panel\">\n    <button type=\"button\" id=\"update-button\" class=\"btn btn-danger\" (click)=\"applyNewSettings($event)\">Update</button>\n    <button type=\"button\" id=\"cancel-button\" class=\"btn btn-danger\" (click)=\"cancelChanges($event)\">Cancel</button>\n  </ul>\n</div>\n\n<br/><br/>\n<div id=\"post-example\">\n  <h4>Post Example</h4>\n  <label>greeting</label>\n  <input id=\"post-param\" [(ngModel)]=\"postParam\">&nbsp;&nbsp;\n  <button type=\"button\" id=\"post-button\" class=\"btn btn-danger\" (click)=\"doPost($event)\">Post</button><br/>\n  <pre>{{postResults | json}}</pre>\n</div>\n"

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Store = (function () {
    function Store() {
        this.numAlbums = 12;
        this.numRows = 4;
        this.bands = ['Beatles', 'Rolling Stones', 'Bangles', 'Pink Floyd', 'U2', 'Supremes', 'Destinys Child', 'Backstreet Boys', 'Police'];
        this.band = this.bands[0];
        this.settings = {};
        this.links = {
            jokes: true,
            albums: false,
            settings: false
        };
        for (var i = 0; i < this.bands.length; i++) {
            this.settings[this.bands[i]] = {
                albums: this.numAlbums,
                rows: this.numRows
            };
        }
    }
    Store.prototype.setBand = function (band) {
        this.band = band;
    };
    Store.prototype.setActivePage = function (page) {
        var ob = this.links;
        for (var page_1 in this.links) {
            this.links[page_1] = false;
        }
        this.links[page] = true;
    };
    return Store;
}());
Store = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Store);

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], AlbumComponent.prototype, "album", void 0);
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'album-comp',
        template: __webpack_require__(160),
        styles: [__webpack_require__(154)]
    })
], AlbumComponent);

//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__(17);
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
    function AlbumsComponent(http, store) {
        this.http = http;
    }
    AlbumsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.numAlbums = (this.numAlbums < 1) ? 1 : this.numAlbums;
        this.numRows = (this.numRows < 1) ? 1 : this.numRows;
        var p = this.http.get("/albums?term=" + this.band + "&entity=album&limit=" + this.numAlbums).toPromise();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], AlbumsComponent.prototype, "band", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], AlbumsComponent.prototype, "numRows", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], AlbumsComponent.prototype, "numAlbums", void 0);
AlbumsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(161),
        styles: [__webpack_require__(155)],
        selector: 'albums'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* Store */]) === "function" && _b || Object])
], AlbumsComponent);

var _a, _b;
//# sourceMappingURL=albums.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_service__ = __webpack_require__(17);
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
    function AlbumsPageComponent(http, store, rr) {
        this.http = http;
        this.store = store;
        this.rr = rr;
        this.selectedBand = '';
        this.selectedBand = this.store.band;
        this.fetchStoreSettings(this.selectedBand);
        this.store.setActivePage('albums');
    }
    AlbumsPageComponent.prototype.bandSelected = function (val) {
        this.store.setBand(this.selectedBand);
        this.fetchStoreSettings(this.selectedBand);
    };
    AlbumsPageComponent.prototype.fetchStoreSettings = function (band) {
        this.albums = this.store.settings[band].albums;
        this.rows = this.store.settings[band].rows;
    };
    return AlbumsPageComponent;
}());
AlbumsPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(162),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AlbumsPageComponent);

var _a, _b, _c;
//# sourceMappingURL=albumspage.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_store_service__ = __webpack_require__(17);
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
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(163),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_store_service__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_store_service__["a" /* Store */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jokes_jokes_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__albums_albumspage_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__albums_albums_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__albums_album_album_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_store_service__ = __webpack_require__(17);
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
            __WEBPACK_IMPORTED_MODULE_6__jokes_jokes_component__["a" /* JokesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__albums_albumspage_component__["a" /* AlbumsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__albums_albums_component__["a" /* AlbumsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__albums_album_album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'jokes', component: __WEBPACK_IMPORTED_MODULE_6__jokes_jokes_component__["a" /* JokesComponent */] },
                { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_7__albums_albumspage_component__["a" /* AlbumsPageComponent */] },
                { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__["a" /* SettingsComponent */] },
                { path: '', redirectTo: 'jokes', pathMatch: 'full' }
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_store_service__["a" /* Store */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JokesComponent = (function () {
    function JokesComponent(http, store) {
        this.http = http;
        this.store = store;
        this.loading = false;
        this.loaded = false;
        this.category = '';
        this.joke = '';
        this.icon_url = '';
        this.store.setActivePage('jokes');
    }
    JokesComponent.prototype.makeRequest = function () {
        var _this = this;
        // var endpoint = '/finance/info?q=';
        this.loading = true;
        this.loaded = false;
        // const endpoint = 'https://api.chucknorris.io/jokes/search?query=' + this.category;
        var endpoint = '/jokes?query=' + this.category;
        this.http.get(endpoint)
            .subscribe(function (res) {
            console.log('@@@@ got resonse ' + res);
            var rawText = res.text();
            console.log('@@@@ text = ' + rawText);
            _this.rawData = JSON.parse(rawText);
            if (_this.rawData && _this.rawData['total'] > 0) {
                _this.joke = _this.rawData['result'][0].value;
                _this.icon_url = _this.rawData['result'][0]['icon_url'];
            }
            _this.loading = false;
            _this.loaded = true;
        });
    };
    return JokesComponent;
}());
JokesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'stocks',
        template: __webpack_require__(164),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* Store */]) === "function" && _b || Object])
], JokesComponent);

var _a, _b;
//# sourceMappingURL=jokes.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(http, store, router) {
        this.http = http;
        this.store = store;
        this.router = router;
        this.bands = [];
        this.settings = {};
        this.selectedBand = undefined;
        this.store.setActivePage('settings');
        this.copySettingsFromStore();
        this.bands = Object.keys(this.store.settings);
    }
    SettingsComponent.prototype.copySettingsFromStore = function () {
        this.copySettings(this.store.settings, this.settings);
    };
    SettingsComponent.prototype.doPost = function () {
        var _this = this;
        this.http.post('/postit', { greeting: this.postParam })
            .subscribe(function (res) {
            var rawText = res.text();
            var respObj = JSON.parse(rawText);
            _this.postResults = {
                headers: {
                    Origin: respObj.headers.Origin,
                    "User-Agent": respObj.headers["User-Agent"]
                },
                json: respObj.json,
                origin: respObj.origin,
                url: respObj.url
            };
        });
    };
    SettingsComponent.prototype.applyNewSettings = function () {
        this.copySettings(this.settings, this.store.settings);
        this.router.navigate(['/albums']);
    };
    SettingsComponent.prototype.cancelChanges = function (event) {
        event.preventDefault();
        this.copySettingsFromStore();
    };
    SettingsComponent.prototype.bandSelected = function (band) {
        this.selectedBand = band;
    };
    SettingsComponent.prototype.copySettings = function (srcObject, tarObject) {
        var keys = Object.keys(srcObject);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            tarObject[key] = {
                albums: srcObject[key].albums,
                rows: srcObject[key].rows
            };
        }
    };
    SettingsComponent.prototype.isSelected = function (band) {
        return (band == this.selectedBand) ? true : false;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'settings',
        template: __webpack_require__(165),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.bundle.js.map