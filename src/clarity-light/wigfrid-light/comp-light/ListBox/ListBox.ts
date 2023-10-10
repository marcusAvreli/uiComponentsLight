
//import {Color} from '../../core';
import {Control} from '../Control';
//import {FormatItemEventArgs} from './../FormatItemEventArgs';
//import {asCollectionView} from '../../core';
//import {asFunction} from '../../core';
//import {asString} from '../../core';
//import {hasItems} from '../../core';
//import {asNumber} from '../../core';
//import {toggleClass} from '../../core';
//import {contains} from '../../core';
//import {isObject} from '../../core';
//import {asArray} from '../../core';
//import {EventArgs} from "../../eventArgs/EventArgs";
//import {escapeHtml} from '../../core';
//import {hasClass} from '../../core';
//import {Key} from "../../enum/Key";
//import {tryCast} from '../../core';
//import {Event} from "../../event/Event";
//import {asBoolean} from '../../core';
//import { Subscription } from 'rxjs';
//import {ICollectionView} from "../../collections-light/interface/ICollectionView";
//import {IEditableCollectionView} from "../../collections/interface/IEditableCollectionView";
//import {NotifyCollectionChangedEventArgs}  from "../../collections/eventArgs/NotifyCollectionChangedEventArgs";


/**
 * The @see:ListBox control displays a list of items which may contain
 * plain text or HTML, and allows users to select items with the mouse or
 * the keyboard.
 *
 * Use the @see:selectedIndex property to determine which item is currently
 * selected.
 *
 * You can populate a @see:ListBox using an array of strings or you can use
 * an array of objects, in which case the @see:displayPath property determines
 * which object property is displayed on the list.
 *
 * To display HTML rather than plain text, set the @see:isContentHtml property
 * to true.
 *
 * The example below creates a @see:ListBox control and populates it using
 * a 'countries' array. The control updates its @see:selectedIndex and
 * @see:selectedItem properties as the user moves the selection.
 *
 * @fiddle:8HnLx
 */
export class ListBox extends Control {

	// property storage
	_items: any; // any[] or ICollectionView
	//_cv: ICollectionView;
	_itemFormatter: Function;
	_pathDisplay: string;
	_pathValue: string;
	_pathChecked: string;
	_html = false;

	// work variables
	_checking: boolean;
	_search = '';
	_toSearch: number;
//private subscription : Subscription;
	/**
	 * Initializes a new instance of a @see:ListBox.
	 *
	 * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
	 * @param options The JavaScript object containing initialization data for the control.
	 */
	constructor(element: any, options?) {
		super(element);

		// instantiate and apply template
		this.applyTemplate('wj-control wj-listbox wj-content', null, null);

		// initializing from <select> tag
		if (this._orgTag == 'SELECT') {
			//this._copyOriginalAttributes(this.hostElement);
			//this._populateSelectElement(this.hostElement);
		}

		// handle mouse and keyboard
		//const host = this.hostElement;
		//this.addEventListener(host, 'click', this._click.bind(this));
		//this.addEventListener(host, 'keydown', this._keydown.bind(this));
		//this.addEventListener(host, 'keypress', this._keypress.bind(this));

		// prevent wheel from propagating to parent elements
		/*this.addEventListener(host, 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll', (e: MouseWheelEvent) => {
			if (host.scrollHeight > host.clientHeight) {
				if ((e.wheelDelta > 0 && host.scrollTop == 0) ||
					(e.wheelDelta < 0 && host.scrollTop + host.clientHeight >= host.scrollHeight)) {
					e.preventDefault();
					e.stopPropagation();
				}
			}
		});
		*/

		// initialize control options
		//this.initialize(options);
	}

	//--------------------------------------------------------------------------
	//#region ** overrides

	/**
	 * Refreshes the list.
	 */
	refresh() {
		//super.refresh();
		//this._populateList();
	}
	//#endregion

	//--------------------------------------------------------------------------
	//#region ** object model

	/**
	 * Gets or sets the array or @see:ICollectionView object that contains the list items.
	 */
	get itemsSource(): any {
		return this._items;
	}
	set itemsSource(value: any) {
		if (this._items != value) {

			// unbind current collection view
			
			// update the list
		//	this._populateList();
		//	this.onItemsChanged();
		//	this.onSelectedIndexChanged();
		}
	}
	
}
