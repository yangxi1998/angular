var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import { ZhucePage } from '../zhuce/zhuce';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl /*导航*/) {
        this.navCtrl = navCtrl; /*导航*/
        this.icons = 'camera';
    }
    HomePage.prototype.goSub = function () {
        this.navCtrl.push(BPage, { id: 1 }); /*或'BPage'懒加载形式，就不需引入BPage 目前不使用懒加载模式*/
    };
    HomePage.prototype.go = function () {
        this.navCtrl.push(ZhucePage, { id: 1 });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.ac.get();
    };
    __decorate([
        ViewChild('ac'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "ac", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController /*导航*/])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map