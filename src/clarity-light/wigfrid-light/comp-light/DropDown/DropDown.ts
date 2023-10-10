//import {Color} from '../../core';
import {Control} from '../Control'
//import {showPopup, hidePopup} from '../../core/popup'
//import {setSelectionRange} from  '../../core';
//import {CancelEventArgs} from "../../eventArgs/CancelEventArgs";
//import {asBoolean} from  '../../core';
//import {EventArgs} from "../../eventArgs/EventArgs";
//import {contains} from '../../core';
//import {Key} from "../../enum/Key";
//import {Event} from "../../event/Event"


/**
 * DropDown control (abstract).
 *
 * Contains an input element and a button used to show or hide the drop-down.
 *
 * Derived classes must override the _createDropDown method to create whatever
 * editor they want to show in the drop down area (a list of items, a calendar,
 * a color editor, etc).
 */
export class DropDown extends Control {

    // child elements
    _tbx: HTMLInputElement;
    _elRef: HTMLElement;
    _btn: HTMLElement;
    _dropDown: HTMLElement;

    // property storage
    _showBtn    = true;
    _autoExpand = true;

    // private stuff
    _oldText: string;

    /**
     * Gets or sets the template used to instantiate @see:DropDown controls.
     */
    static controlTemplate = '<div style="position:relative" class="wj-template">' +
        '<div class="wj-input">' +
        '<div class="wj-input-group wj-input-btn-visible">' +
        '<input wj-part="input" type="text" class="wj-form-control" />' +
        '<span wj-part="btn" class="wj-input-group-btn" tabindex="-1">' +
        '<button class="wj-btn wj-btn-default" type="button" tabindex="-1">' +
        '<span class="wj-glyph-down"></span>' +
        '</button>' +
        '</span>' +
        '</div>' +
        '</div>' +
        '<div wj-part="dropdown" class="wj-content wj-dropdown-panel" ' +
        'style="display:none;position:absolute;z-index:100;width:auto">' +
        '</div>' +
        '</div>';

    /**
     * Initializes a new instance of a @see:DropDown control.
     *
     * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param options The JavaScript object containing initialization data for the control.
     */
    constructor(element: any, options?) {
        super(element, null, true);

        // instantiate and apply template
        //const tpl = this.getTemplate();
        this.applyTemplate(
            'wj-control wj-dropdown wj-content', null, {
                _tbx     : 'input',
                _btn     : 'btn',
                _dropDown: 'dropdown'
            }, 'input'
        );

        // set reference element (used for positioning the drop-down)
        this._elRef = this._tbx;

        // disable autocomplete (important for mobile browsers including Chrome/Android)
        this._tbx.autocomplete = 'off';

        // create drop-down element, update button display
        //this._createDropDown();
        //this._updateBtn();

        // update focus state when the drop-down loses focus
        

       
    }

   
}
