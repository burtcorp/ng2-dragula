"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var dragula_directive_1 = require('./components/dragula.directive');
var dragula_provider_1 = require('./components/dragula.provider');
__export(require('./components/dragula.provider'));
__export(require('./components/dragula.directive'));
var DragulaModule = (function () {
    function DragulaModule() {
    }
    DragulaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [dragula_directive_1.DragulaDirective],
                    declarations: [dragula_directive_1.DragulaDirective],
                    providers: [dragula_provider_1.DragulaService]
                },] },
    ];
    /** @nocollapse */
    DragulaModule.ctorParameters = [];
    return DragulaModule;
}());
exports.DragulaModule = DragulaModule;
