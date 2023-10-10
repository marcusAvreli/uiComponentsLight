
//import {Color} from '../../core';
import {DropDown} from './../DropDown/DropDown'
import {ListBox} from './../ListBox/ListBox'
import {hasItems} from '../../core';
//import {setSelectionRange} from  '../../core';
//import {clamp} from  '../../core';
import {CollectionView} from "../../collections-light/CollectionView";
import {asBoolean} from   '../../core';
//import {asFunction} from   '../../core';
import {EventArgs} from "../../eventArgs/EventArgs";
//import {CancelEventArgs} from "../../eventArgs/CancelEventArgs";
//import {Key} from "../../enum/Key";
//import {asNumber} from   '../../core';
import {asString} from   '../../core';
import {Event} from "../../event/Event";


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
		
		// handle IME
		/*
		this.addEventListener(this._tbx, 'compositionstart', () => {
			this._composing = true;
		});
		this.addEventListener(this._tbx, 'compositionend', () => {
			this._composing = false;
			this._setText(this.text, true);
		});
		*/
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
		
		this._settingText = false;

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
		this._lbx = new ListBox(this._dropDown);
			this._lbx.selectedIndexChanged.addHandler(() => {
			this._updateBtn();
			this.selectedIndex = this._lbx.selectedIndex;
			this.onSelectedIndexChanged();
		});

		// update button display when item list changes
		this._lbx.itemsChanged.addHandler(() => {
			this._updateBtn();
		});

		// close the drop-down when the user clicks to select an item
		this.addEventListener(this._dropDown, 'click', (e: MouseEvent) => {
			if (e.target != this._dropDown) { // an item, not the list itself...
				this.isDroppedDown = false;
			}
		});
	}
	get headerPath(): string {
		return this._hdrPath;
	}
	set headerPath(value: string) {
		this._hdrPath = asString(value);
		const text = this.getDisplayText();
		if (this.text != text) {
			this._setText(text, true);
		}
	}
		selectedIndexChanged = new Event();
	/**
	 * Raises the @see:selectedIndexChanged event.
	 */
	onSelectedIndexChanged(e?: EventArgs) {
		this._updateBtn();
		this.selectedIndexChanged.raise(this, e);
	}
	/**
	 * Gets or sets the index of the currently selected item in the drop-down list.
	 */
	get selectedIndex(): number {
		return this._lbx.selectedIndex;
	}
	set selectedIndex(value: number) {
		if (value != this.selectedIndex) {
			this._lbx.selectedIndex = value;
		}
		const text = this.getDisplayText(value);
		if (this.text != text) {
			this._setText(text, true);
		}
	}
	get collectionView(): CollectionView {
		return this._lbx.collectionView;
	}
	
	getDisplayText(index = this.selectedIndex): string {

		// get display text directly from the headerPath if that was specified
		if (this.headerPath && index > -1 && hasItems(this.collectionView)) {
			const item = this.collectionView.items[index][this.headerPath];
            let text   = item != null ? item.toString() : '';
			if (this.isContentHtml) {
				if (!this._cvt) {
					this._cvt = document.createElement('div');
				}
				this._cvt.innerHTML = text;
				text = this._cvt.textContent;
			}
			return text;
		}

		// headerPath not specified, get text straight from the ListBox
		return this._lbx.getDisplayText(index);
	}
	
	
	get isContentHtml(): boolean {
		return this._lbx.isContentHtml;
	}
	set isContentHtml(value: boolean) {
		if (value != this.isContentHtml) {
			this._lbx.isContentHtml = asBoolean(value);
			let text = this.getDisplayText();
			if (this.text != text) {
				this._setText(text, true);
			}
		}
	}
	/**
	 * Gets or sets the item that is currently selected in the drop-down list.
	 */
	get selectedItem(): any {
		return this._lbx.selectedItem;
	}
	set selectedItem(value: any) {
		this._lbx.selectedItem = value;
	}
	/**
	 * Gets or sets the value of the @see:selectedItem, obtained using the @see:selectedValuePath.
	 */
	get selectedValue(): any {
		return this._lbx.selectedValue;
	}
	set selectedValue(value: any) {
		this._lbx.selectedValue = value;
	}

}
