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
var core_1 = require("@angular/core");
var mock_places_1 = require("./mock-places");
var PlaceService = (function () {
    function PlaceService() {
        this.places = mock_places_1.PLACES;
    }
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    PlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlaceService);
    return PlaceService;
}());
exports.PlaceService = PlaceService;
