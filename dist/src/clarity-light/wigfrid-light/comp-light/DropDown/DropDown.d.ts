import { Control } from '../Control';
import { CancelEventArgs } from "../../eventArgs/CancelEventArgs";
import { EventArgs } from "../../eventArgs/EventArgs";
import { Event } from "../../event/Event";
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
    _createDropDown(): void;
    /**
    * Gets the drop down element shown when the @see:isDroppedDown
    * property is set to true.
    */
    readonly dropDown: HTMLElement;
    _updateBtn(): void;
    _getCharType(text: string, pos: number): 0 | 1 | -1;
    _expandSelection(): void;
    _btnclick(e: MouseEvent): void;
    isDroppedDown: boolean;
    /**
    * Occurs after the drop down is shown or hidden.
    */
    isDroppedDownChanged: Event;
    /**
     * Raises the @see:isDroppedDownChanged event.
     */
    onIsDroppedDownChanged(e?: EventArgs): void;
    _updateDropDown(): void;
    showDropDownButton: boolean;
    containsFocus(): boolean;
    /**
       * Occurs before the drop down is shown or hidden.
       */
    isDroppedDownChanging: Event;
    /**
     * Raises the @see:isDroppedDownChanging event.
     */
    onIsDroppedDownChanging(e: CancelEventArgs): boolean;
    onLostFocus(e?: EventArgs): void;
    _commitText(): void;
    onGotFocus(e?: EventArgs): void;
    /**
    * Sets the focus to the control and selects all its content.
    */
    selectAll(): void;
    /**
        * Gets or sets the text shown on the control.
        */
    text: string;
    _setText(text: string, fullMatch: boolean): void;
    /**
       * Occurs when the value of the @see:text property changes.
       */
    textChanged: Event;
    /**
     * Raises the @see:textChanged event.
     */
    onTextChanged(e?: EventArgs): void;
}
