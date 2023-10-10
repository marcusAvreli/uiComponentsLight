(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/forms', '@angular/core'], factory) :
	(factory((global['ui-components-light'] = {}),global.ng.common,global.ng.forms,global.ng.core));
}(this, (function (exports,common,forms,core) { 'use strict';

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var ClarityModule = (function () {
    function ClarityModule() {
    }
    /**
     * @return {?}
     */
    ClarityModule.forChild = function () {
        return {
            ngModule: ClarityModule,
            providers: []
        };
    };
    return ClarityModule;
}());
ClarityModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                declarations: [],
                exports: []
            },] },
];
/**
 * @nocollapse
 */
ClarityModule.ctorParameters = function () { return []; };

exports.ClarityModule = ClarityModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-components-light.umd.js.map
