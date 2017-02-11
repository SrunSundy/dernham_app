"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var FiltersPage = (function () {
    function FiltersPage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.sorts = [
            {
                id: 1,
                icon: "ios-pin-outline",
                name: "Distance",
                active: "active",
                sortDirection: false,
                sortAsc: false
            },
            {
                id: 2,
                icon: "star-outline",
                name: "Rating",
                active: "",
                sortDirection: true,
                sortAsc: false
            },
            {
                id: 3,
                icon: "logo-usd",
                name: "Cost",
                active: "",
                sortDirection: true,
                sortAsc: true
            },
            {
                id: 4,
                icon: "md-heart-outline",
                name: "Popularity",
                active: "",
                sortDirection: false,
                sortAsc: false
            }
        ];
    }
    // choose sort by...
    FiltersPage.prototype.chooseSort = function (sort) {
        // if this sort already active
        if (sort.active === 'active') {
            // toggle sort direction
            sort.sortAsc = !sort.sortAsc;
        }
        else {
            for (var i = 0; i < this.sorts.length; i++) {
                if (this.sorts[i].id == sort.id) {
                    this.sorts[i].active = 'active';
                }
                else {
                    this.sorts[i].active = '';
                }
            }
        }
    };
    // hide modal
    FiltersPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FiltersPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/filters/filters.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ViewController])
    ], FiltersPage);
    return FiltersPage;
}());
exports.FiltersPage = FiltersPage;
