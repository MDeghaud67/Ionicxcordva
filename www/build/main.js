webpackJsonp([0],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConnexionPage = /** @class */ (function () {
    function ConnexionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConnexionPage.prototype.valider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { login: this.login, password: this.password });
        this.login = "";
        this.password = "";
    };
    ConnexionPage.prototype.inscription = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inscription_inscription__["a" /* InscriptionPage */]);
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"/Users/mdeghaud/ionicxcordva/src/pages/connexion/connexion.html"*/'<!-- <ion-header>\n   <ion-navbar>\n      <ion-title>\n      </ion-title>\n   </ion-navbar>\n</ion-header> -->\n\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col>\n      <img src="http://www.ac-strasbourg.fr/fileadmin/site_www_v2/public/assets/img/logo_standard.svg"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <div class="login-box">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n         <ion-item>\n            <ion-input type="text" placeholder="Login" [(ngModel)]="login"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="Mot de passe" [(ngModel)]="password"  required></ion-input>\n          </ion-item>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n         <ion-col class="submit-col">\n          <button ion-button class="submit-btn" full (click)="valider()">Valider</button>\n        </ion-col>\n   </ion-row>\n  </div>\n</ion-content>  \n\n<div class="footer-box">\n  <ion-footer>\n    <p> Phase de développement par AE. </p>\n  </ion-footer>\n</div>'/*ion-inline-end:"/Users/mdeghaud/ionicxcordva/src/pages/connexion/connexion.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], ConnexionPage);
    return ConnexionPage;
    var _a;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, navParams, keyboard) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.keyboard = keyboard;
    }
    HomePage.prototype.ngOnInit = function () {
        this.login = this.navParams.get('login');
        this.password = this.navParams.get('password');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.loadXML(this.login, this.password);
    };
    HomePage.prototype.loadXML = function (login, password) {
        var _this = this;
        this.http.get('/assets/data/users.xml', {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('Content-Type', 'text/xml')
                .append('Access-Control-Allow-Methods', 'GET')
                .append('Access-Control-Allow-Origin', '*')
                .append('Access-Control-Allow-Headers', "Access-Control"),
            responseType: 'text'
        })
            .subscribe(function (data) {
            _this.parseXML(data, login, password)
                .then(function (data) {
                _this.xmlItems = data;
            });
        });
    };
    HomePage.prototype.parseXML = function (data, login, password) {
        return new Promise(function (resolve) {
            var k, arr = [], parser = new __WEBPACK_IMPORTED_MODULE_4_xml2js___default.a.Parser({
                trim: true,
                explicitArray: true
            });
            parser.parseString(data, function (err, result) {
                var obj = result.USERS;
                arr = [];
                for (k in obj.USER) {
                    var item = obj.USER[k];
                    if (item.LOGIN == login && item.PASSWORD == password) {
                        arr.push({
                            ine: item.INE[0],
                            nom: item.NOM[0],
                            prenom: item.PRENOM[0],
                            date: item.DATE_NAISS[0],
                            login: item.LOGIN[0],
                            password: item.PASSWORD[0],
                            tel: item.TEL[0]
                        });
                    }
                }
                resolve(arr);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mdeghaud/ionicxcordva/src/pages/home/home.html"*/'<ion-header>\n   <ion-navbar>\n      <ion-title>\n        Informations\n      </ion-title> \n   </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <ion-content class="home-content" padding>\n  <ion-row class="logo-row">\n\n    <ion-col>\n      <img src="http://www.ac-strasbourg.fr/fileadmin/site_www_v2/public/assets/img/logo_standard.svg"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n   <div class="home-box">\n      <div *ngIf=" xmlItems != 0">\n         <ion-item-group>\n            <ion-item-divider color="light">Numéro INE</ion-item-divider>\n            <ion-item *ngFor="let item of xmlItems">\n               {{ item.ine }}\n            </ion-item>\n         </ion-item-group>\n\n         <ion-item-group>\n            <ion-item-divider color="light">Nom</ion-item-divider>\n            <ion-item *ngFor="let item of xmlItems">\n               {{ item.nom }}\n            </ion-item>\n         </ion-item-group>\n\n         <ion-item-group>\n            <ion-item-divider color="light">Prénom</ion-item-divider>\n            <ion-item *ngFor="let item of xmlItems">\n               {{ item.prenom }}\n            </ion-item>\n         </ion-item-group>\n\n         <ion-item-group>\n            <ion-item-divider color="light">Date de naissance</ion-item-divider>\n            <ion-item *ngFor="let item of xmlItems">\n               {{ item.date }}\n            </ion-item>\n         </ion-item-group>\n\n         <ion-item-group>\n            <ion-item-divider color="light">Numéro de téléphone</ion-item-divider>\n            <ion-item *ngFor="let item of xmlItems">\n               {{ item.tel }}\n            </ion-item>\n         </ion-item-group>\n      </div>\n      <div class="alert" *ngIf=" xmlItems == 0" >\n         <strong>Pas de compte avec ce login et mot de passe !\n          Veuillez réessayer.</strong>\n      </div>\n   </div> \n</ion-content>'/*ion-inline-end:"/Users/mdeghaud/ionicxcordva/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Keyboard */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { InscriptionPage } from '../pages/inscription/inscription';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__["a" /* ConnexionPage */]
                //InscriptionPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { backButtonText: 'Retour' }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__["a" /* ConnexionPage */]
                //InscriptionPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */];
        this.showSplash = true; // <-- show animation
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mdeghaud/ionicxcordva/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n	<div class="spinner"></div>\n</div>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/mdeghaud/ionicxcordva/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InscriptionPage = /** @class */ (function () {
    function InscriptionPage() {
    }
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"/Users/mdeghaud/ionicxcordva/src/pages/inscription/inscription.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="inscription-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col>\n      <img src="http://www.ac-strasbourg.fr/fileadmin/site_www_v2/public/assets/img/logo_standard.svg"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <div class="inscription-box">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Numéro INE" name="ine" [(ngModel)]="ine"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Nom" name="nom" [(ngModel)]="nom"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Prénom" name="prenom" [(ngModel)]="prenom"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="date" placeholder="Date de naissance" name="date_naiss" [(ngModel)]="date_naiss"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="tel" placeholder="Numéro de téléphone" name="tel" [(ngModel)]="tel"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Login" name="login" [(ngModel)]="login"  required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" placeholder="Mot de passe" name="password" [(ngModel)]="password"  required></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>      \n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn" full (click)="valider()">Valider</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<div class="footer-box">\n  <ion-footer>\n    <p> Phase de développement par AE. </p>\n  </ion-footer>\n</div>'/*ion-inline-end:"/Users/mdeghaud/ionicxcordva/src/pages/inscription/inscription.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map