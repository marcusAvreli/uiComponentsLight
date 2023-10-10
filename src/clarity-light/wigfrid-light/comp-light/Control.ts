import {Size} from "./../core/index";
//import {EventArgs} from "../eventArgs/EventArgs";
//import {Event} from "../event/Event";
import {CollectionView} from "../collections-light/CollectionView";
import {
    assert,
    getElement,
    addClass,
    createElement,
    asType,
    contains,
    asBoolean,
    enable,
    copy,
    toggleClass
} from "../core";
import {isPresent} from  '../core';


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
export class Control {
    private static _DATA_KEY = 'wj-Control';    // key used to store control reference in host element
    private static _REFRESH_INTERVAL = 10;      // interval between invalidation and refresh
    private static _wme: HTMLElement;           // watermark element
    static _touching: boolean;                  // the current event is a touch event

    private _focus = false;                     // whether the control currently contains the focus
    private _updating = 0;                      // update count (no refreshes while > 0)
    private _fullUpdate = false;                // in case there are multiple calls to invalidate(x)
    private _toInv: number;                     // invalidation timeOut
    private _szCtl: Size;                       // current control size
    private _e: HTMLElement;                    // host element
    private _orgOuter: string;                  // host element's original outerHTML
    private _orgInner: string;                  // host element's original innerHTML
    private _listeners;                         // list of event listeners attached to this control
    _orgTag: string;                            // host element's original tag (if not DIV)
    _orgAtts: NamedNodeMap;                     // host element's original attributes

    /**
     * Initializes a new instance of a @see:Control and attaches it to a DOM element.
     *
     * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
     * @param options JavaScript object containing initialization data for the control.
     * @param invalidateOnResize Whether the control should be invalidated when it is resized.
     */
    constructor(element: any, options = null, invalidateOnResize = false) {

       
    }

   
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
    applyTemplate(classNames: string, template: string, parts: Object, namePart?: string): HTMLElement {
        const host = this._e;

        // apply standard classes to host element
        if (classNames) {
            addClass(host, classNames);
        }

        // convert string into HTML template and append to host
        let tpl = null;
        if (template) {
            tpl = createElement(template);
            tpl = host.appendChild(tpl);
        }

        // make sure the control can get the focus
        // this is a little tricky:
        // - Chrome won't give divs the focus unless we set tabIndex to something > -1
        // - But if we do set it and the control contains input elements, the back-tab key won't work
        // so we set the tabIndex to -1 or zero depending on whether the control contains input elements.
        // http://wijmo.com/topic/shift-tab-not-working-for-input-controls-in-ff-and-chrome/, TFS 123457
        if (host && !host.getAttribute('tabindex')) {
            host.tabIndex = host.querySelector('input') ? -1 : 0;
        }

        // bind control variables to template parts
        if (parts) {
            for (let part in parts) {
                const wjPart = parts[part];
                this[part]   = tpl.querySelector('[wj-part="' + wjPart + '"]');

                // look in the root as well (querySelector doesn't...)
                if (this[part] == null && tpl.getAttribute('wj-part') == wjPart) {
                    this[part] = tpl;
                }

                // make sure we found the part
                if (this[part] == null) {
                    throw 'Missing template part: "' + wjPart + '"';
                }

                // copy/move attributes from host to input element
                if (wjPart == namePart) {

                    // copy parent element's name attribute to the namePart element
                    // (to send data when submitting forms).
                    let att = host.attributes['name'];
                    if (att && att.value) {
                        this[part].setAttribute('name', att.value);
                    }

                    // transfer access key
                    att = host.attributes['accesskey'];
                    if (att && att.value) {
                        this[part].setAttribute('accesskey', att.value);
                        host.removeAttribute('accesskey');
                    }
                }
            }
        }

        // return template
        return tpl;
    }
   
}
