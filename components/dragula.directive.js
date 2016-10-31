"use strict";
var core_1 = require('@angular/core');
var dragula_provider_1 = require('./dragula.provider');
var dragula_class_1 = require('./dragula.class');
var DragulaDirective = (function () {
    function DragulaDirective(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.container = el.nativeElement;
    }
    DragulaDirective.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.bag);
        var bag = this.dragulaService.find(this.bag);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = dragula_class_1.dragula({
                containers: [this.container]
            });
            checkModel();
            this.dragulaService.add(this.bag, this.drake);
        }
    };
    DragulaDirective.prototype.ngOnChanges = function (changes) {
        // console.log('dragula.directive: ngOnChanges');
        // console.log(changes);
        if (changes && changes['dragulaModel']) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes['dragulaModel'].previousValue);
                    this.drake.models.splice(modelIndex, 1, changes['dragulaModel'].currentValue);
                }
                else {
                    this.drake.models = [changes['dragulaModel'].currentValue];
                }
            }
        }
    };
    DragulaDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[dragula]'
                },] },
    ];
    /** @nocollapse */
    DragulaDirective.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: dragula_provider_1.DragulaService, },
    ];
    DragulaDirective.propDecorators = {
        'bag': [{ type: core_1.Input, args: ['dragula',] },],
        'dragulaModel': [{ type: core_1.Input },],
    };
    return DragulaDirective;
}());
exports.DragulaDirective = DragulaDirective;
