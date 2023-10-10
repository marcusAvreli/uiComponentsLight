
//import {Color} from '../../core';
import {Control} from '../Control';
//import {FormatItemEventArgs} from './../FormatItemEventArgs';
import {asCollectionView} from '../../core';
//import {asFunction} from '../../core';
//import {asString} from '../../core';
//import {hasItems} from '../../core';
//import {asNumber} from '../../core';
import {toggleClass} from '../../core';
import {contains} from '../../core';
//import {isObject} from '../../core';
//import {asArray} from '../../core';
//import {EventArgs} from "../../eventArgs/EventArgs";
//import {escapeHtml} from '../../core';
import {hasClass} from '../../core';
//import {Key} from "../../enum/Key";
//import {tryCast} from '../../core';
//import {Event} from "../../event/Event";
//import {asBoolean} from '../../core';
//import { Subscription } from 'rxjs';
//import {ICollectionView} from "../../collections-light/interface/ICollectionView";
import {CollectionView} from "../../collections-light/CollectionView";
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
	_cv: CollectionView;
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
		const host = this.hostElement;
		this.addEventListener(host, 'click', this._click.bind(this));
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
private _click(e: MouseEvent) {
		console.log("click on list box");
		// select the item that was clicked
		const children = this.hostElement.children;
		for (let index = 0; index < children.length; index++) {
			if (contains(children[index], e.target)) {
				this.selectedIndex = index;
				console.log("list_box_selected_index_set");
				break;
			}
		}

		// handle checkboxes
		/*if (this.checkedMemberPath && this.selectedIndex > -1) {
			const cb = this._getCheckbox(this.selectedIndex);
			if (cb == e.target) {
				this.setItemChecked(this.selectedIndex, cb.checked);
			}
		}*/
	}
	/**
	 * Refreshes the list.
	 */
	refresh() {
		//super.refresh();
		//this._populateList();
	}
	//#endregion
get selectedIndex(): number {
		//return this._cv ? this._cv.currentPosition : -1;
		return 1;
	}
	set selectedIndex(value: number) {
		if (this._cv) {
			//this._cv.moveCurrentToPosition(asNumber(value));
		}
	}
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
			this._items = value;
			this._cv = asCollectionView(value);
			// update the list
			this._populateList();
		//	this.onItemsChanged();
		//	this.onSelectedIndexChanged();
		}
	}
	// populate the list from the current itemsSource
	private _populateList() {

		// get ready to populate
		const host = this.hostElement;
		if (host) {

			// remember if we have focus
			//const focus = this.containsFocus();

			// fire event so user can clean up any current items
		//	this.onLoadingItems();

			// populate
			host.innerHTML = '';
			if (this._cv) {
				for (let i = 0; i < this._cv.items.length; i++) {

					// get item text
					///let text = this.getDisplayValue(i);
					let text = this._cv.items[i].name;
					if (this._html != true) {
					//	text = escapeHtml(text);
					}

					// add checkbox (without tabindex attribute: TFS 135857)
					//if (this.checkedMemberPath) {
						//const checked = this._cv.items[i][this.checkedMemberPath];
						//text          = '<label><input type="checkbox"' + (checked ? ' checked' : '') + '> ' + text + '</label>';
					//}

					// build item
					const item = document.createElement('div');
					item.innerHTML = text;
					item.className = 'wj-listbox-item';
					if (hasClass(<HTMLElement>item.firstChild, 'wj-separator')) {
						item.className += ' wj-separator';
					}

					// allow custom formatting
					//if (this.formatItem.hasHandlers) {
					//	const e = new FormatItemEventArgs(i, this._cv.items[i], item);
						//this.onFormatItem(e);
					//}

					// add item to list
					host.appendChild(item);
				}
			}

			// make sure the list is not totally empty
			// or min-height/max-height won't work properly in IE/Edge
			if (host.children.length == 0) {
				host.appendChild(document.createElement('div'));
			}

			// restore focus
			//if (focus && !this.containsFocus()) {
			//	this.focus();
			//}

			// scroll selection into view
			this.showSelection();

			// fire event so user can hook up to items
			//this.onLoadedItems();
		}
	}
	/**
	 * Highlights the selected item and scrolls it into view.
	 */
	showSelection() {
	console.log("show selection _started");
		const index    = this.selectedIndex,
              host     = this.hostElement,
              children = host.children;
        let e: HTMLElement;

		// highlight
		for (let i = 0; i < children.length; i++) {
			e = <HTMLElement>children[i];
			toggleClass(e, 'wj-state-selected', i == index);
		}

		// scroll into view
		if (index > -1 && index < children.length) {
			e = <HTMLElement>children[index];
			const rco = e.getBoundingClientRect();
			const rcc = this.hostElement.getBoundingClientRect();
			if (rco.bottom > rcc.bottom) {
				host.scrollTop += rco.bottom - rcc.bottom;
			} else if (rco.top < rcc.top) {
				host.scrollTop -= rcc.top - rco.top;
			}
		}

		// make sure the focus is within the selected element (TFS 135278)
		if (index > -1 && this.containsFocus()) {
			e = <HTMLElement>children[index];
			if (e instanceof HTMLElement && !contains(e, document.activeElement)) {
				e.focus();
			}
		}
		console.log("show selection _finished");
	}
}
