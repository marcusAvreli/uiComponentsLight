import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [],
                exports: []
            },] },
];
/**
 * @nocollapse
 */
ClarityModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ClarityModule };
//# sourceMappingURL=ui-components-light.es5.js.map
