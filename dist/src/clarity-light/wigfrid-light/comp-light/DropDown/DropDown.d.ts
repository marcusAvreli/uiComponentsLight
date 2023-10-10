import { Control } from '../Control';
/**
 * DropDown control (abstract).
 *
 * Contains an input element and a button used to show or hide the drop-down.
 *
 * Derived classes must override the _createDropDown method to create whatever
 * editor they want to show in the drop down area (a list of items, a calendar,
 * a color editor, etc).
 */
export declare class DropDown extends Control {
    _tbx: HTMLInputElement;
    _elRef: HTMLElement;
    _btn: HTMLElement;
    _dropDown: HTMLElement;
    _showBtn: boolean;
    _autoExpand: boolean;
    _oldText: string;
    /**
     * Gets or sets the template used to instantiate @see:DropDown controls.
     */
    static controlTemplate: string;
    /**
     * Initializes a new instance of a @see:DropDown control.
     *
     * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param options The JavaScript object containing initialization data for the control.
     */
    constructor(element: any, options?: any);
}
