import { Control } from '../Control';
import { EventArgs } from "../../eventArgs/EventArgs";
import { Event } from "../../event/Event";
import { CollectionView } from "../../collections-light/CollectionView";
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
export declare class ListBox extends Control {
    _items: any;
    _cv: CollectionView;
    _itemFormatter: Function;
    _pathDisplay: string;
    _pathValue: string;
    _pathChecked: string;
    _html: boolean;
    _checking: boolean;
    _search: string;
    _toSearch: number;
    /**
     * Initializes a new instance of a @see:ListBox.
     *
     * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param options The JavaScript object containing initialization data for the control.
     */
    constructor(element: any, options?: any);
    isContentHtml: boolean;
    getDisplayText(index: number): string;
    private _click(e);
    /**
     * Refreshes the list.
     */
    refresh(): void;
    readonly collectionView: CollectionView;
    selectedIndex: number;
    /**
     * Gets or sets the array or @see:ICollectionView object that contains the list items.
     */
    itemsSource: any;
    private _cvCurrentChanged(sender, e);
    /**
     * Occurs when the list of items changes.
     */
    itemsChanged: Event;
    /**
     * Raises the @see:itemsChanged event.
     */
    onItemsChanged(e?: EventArgs): void;
    selectedItem: any;
    private _populateList();
    /**
 * Occurs when the value of the @see:selectedIndex property changes.
 */
    selectedIndexChanged: Event;
    /**
     * Raises the @see:selectedIndexChanged event.
     */
    onSelectedIndexChanged(e?: EventArgs): void;
    /**
     * Highlights the selected item and scrolls it into view.
     */
    showSelection(): void;
    selectedValue: any;
    /**
     * Gets or sets the name of the property used to get the @see:selectedValue
     * from the @see:selectedItem.
     */
    selectedValuePath: string;
}
