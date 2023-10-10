
//import {Color} from '../../core';
import {DropDown} from './../DropDown/DropDown'
import {ListBox} from './../ListBox/ListBox'
//import {hasItems} from '../../core';
//import {setSelectionRange} from  '../../core';
//import {clamp} from  '../../core';
//import {ICollectionView} from "../../collections/interface/ICollectionView";
//import {asBoolean} from   '../../core';
//import {asFunction} from   '../../core';
//import {EventArgs} from "../../eventArgs/EventArgs";
//import {CancelEventArgs} from "../../eventArgs/CancelEventArgs";
//import {Key} from "../../enum/Key";
//import {asNumber} from   '../../core';
//import {asString} from   '../../core';
//import {Event} from "../../event/Event";


/**
 * The @see:ComboBox control allows users to pick strings from lists.
 *
 * The control automatically completes entries as the user types, and allows users
 * to show a drop-down list with the items available.
 *
 * Use the @see:selectedIndex or the @see:text properties to determine which
 * item is currently selected.
 *
 * The @see:isEditable property determines whether users can enter values that
 * are not present in the list.
 *
 * The example below creates a @see:ComboBox control and populates it with a list
 * of countries. The @see:ComboBox searches for the country as the user types.
 * The <b>isEditable</b> property is set to false, so the user is forced to
 * select one of the items in the list.
 *
 * The example also shows how to create and populate a @see:ComboBox using
 * an HTML <b>&lt;select;&gt</b> element with <b>&lt;option;&gt</b> child
 * elements.
 *
 * @fiddle:8HnLx
 */
export class ComboBox extends DropDown {

	// child elements
	_lbx: ListBox;

	// property storage
	_required = true;
	_editable = false;

	// private stuff
	_composing = false;
	_deleting = false;
	_settingText = false;
	_cvt: HTMLElement;
	_hdrPath: string;

	/**
	 * Initializes a new instance of a @see:ComboBox control.
	 *
	 * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
	 * @param options The JavaScript object containing initialization data for the control.
	 */
	constructor(element: any, options?) {
		super(element);
console.log("combo_constructor_start");
		this._lbx = new ListBox(this._dropDown);
		// handle IME
		this.addEventListener(this._tbx, 'compositionstart', () => {
			this._composing = true;
		});
		this.addEventListener(this._tbx, 'compositionend', () => {
			this._composing = false;
			this._setText(this.text, true);
		});
			// initialize control options
		this.initialize(options);
		console.log("combo_constructor_finish");
	}

	//--------------------------------------------------------------------------
	//#region ** object model

_setText(text: string, fullMatch: boolean) {
			console.log("combo_box_set_text_start");
		// not while composing IME text...
		if (this._composing) return;

		// prevent reentrant calls while moving CollectionView cursor
		if (this._settingText) return;
		this._settingText = true;

		// make sure we have a string
		if (text == null) text = '';
		text = text.toString();
		super._setText(text, fullMatch);
		console.log("combo_box_set_text_finish");

}
	/**
	 * Gets or sets the array or @see:ICollectionView object that contains the items to select from.
	 */
	get itemsSource(): any {
		return this._lbx.itemsSource;
	}
	set itemsSource(value: any) {
		this._lbx.itemsSource = value;
		this._updateBtn();
	}
	// create the drop-down element
	_createDropDown() {
		console.log("create drop down");
	}

}
