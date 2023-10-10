import { EventArgs } from "../eventArgs/EventArgs";
import { Event } from "../event/Event";
/**
 * Base class for all Wijmo controls.
 *
 * The @see:Control class handles the association between DOM elements and the
 * actual control. Use the @see:hostElement property to get the DOM element
 * that is hosting a control, or the @see:getControl method to get the control
 * hosted in a given DOM element.
 *
 * The @see:Control class also provides a common pattern for invalidating and
 * refreshing controls, for updating the control layout when its size changes,
 * and for handling the HTML templates that define the control structure.
 */
export declare class Control {
    private static _DATA_KEY;
    private static _REFRESH_INTERVAL;
    private static _wme;
    static _touching: boolean;
    private _focus;
    private _updating;
    private _fullUpdate;
    private _toInv;
    private _szCtl;
    private _e;
    private _orgOuter;
    private _orgInner;
    private _listeners;
    _orgTag: string;
    _orgAtts: NamedNodeMap;
    /**
     * Initializes a new instance of a @see:Control and attaches it to a DOM element.
     *
     * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
     * @param options JavaScript object containing initialization data for the control.
     * @param invalidateOnResize Whether the control should be invalidated when it is resized.
     */
    constructor(element: any, options?: any, invalidateOnResize?: boolean);
    private _handleDisabled(e);
    /**
    * Gets or sets whether the control is disabled.
    *
    * Disabled controls cannot get mouse or keyboard events.
    */
    disabled: boolean;
    addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean): void;
    /**
     * Applies the template to a new instance of a control, and returns the root element.
     *
     * This method should be called by constructors of templated controls.
     * It is responsible for binding the template parts to the
     * corresponding control members.
     *
     * For example, the code below applies a template to an instance
     * of an @see:InputNumber control. The template must contain elements
     * with the 'wj-part' attribute set to 'input', 'btn-inc', and 'btn-dec'.
     * The control members '_tbx', '_btnUp', and '_btnDn' will be assigned
     * references to these elements.
     *
     * <pre>this.applyTemplate('wj-control wj-inputnumber', template, {
         *   _tbx: 'input',
         *   _btnUp: 'btn-inc',
         *   _btnDn: 'btn-dec'
         * }, 'input');</pre>
     *
     * @param classNames Names of classes to add to the control's host element.
     * @param template An HTML string that defines the control template.
     * @param parts A dictionary of part variables and their names.
     * @param namePart Name of the part to be named after the host element. This
     * determines how the control submits data when used in forms.
     */
    applyTemplate(classNames: string, template: string, parts: Object, namePart?: string): HTMLElement;
    /**
     * Gets the HTML template used to create instances of the control.
     *
     * This method traverses up the class hierarchy to find the nearest ancestor that
     * specifies a control template. For example, if you specify a prototype for the
     * @see:ComboBox control, it will override the template defined by the @see:DropDown
     * base class.
     */
    getTemplate(): string;
    static getControl(element: any): Control;
    initialize(options: any): void;
    readonly hostElement: HTMLElement;
    readonly isTouching: boolean;
    _updateFocusState(): void;
    containsFocus(): boolean;
    /**
    * Occurs when the control gets the focus.
    */
    gotFocus: Event;
    /**
     * Raises the @see:gotFocus event.
     */
    onGotFocus(e?: EventArgs): void;
    /**
     * Occurs when the control loses the focus.
     */
    lostFocus: Event;
    /**
     * Raises the @see:lostFocus event.
     */
    onLostFocus(e?: EventArgs): void;
}
