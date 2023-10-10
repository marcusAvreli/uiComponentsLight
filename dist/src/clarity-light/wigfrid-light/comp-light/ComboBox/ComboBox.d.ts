import { DropDown } from './../DropDown/DropDown';
import { ListBox } from './../ListBox/ListBox';
import { CollectionView } from "../../collections-light/CollectionView";
import { EventArgs } from "../../eventArgs/EventArgs";
import { Event } from "../../event/Event";
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
export declare class ComboBox extends DropDown {
    _lbx: ListBox;
    _required: boolean;
    _editable: boolean;
    _composing: boolean;
    _deleting: boolean;
    _settingText: boolean;
    _cvt: HTMLElement;
    _hdrPath: string;
    /**
     * Initializes a new instance of a @see:ComboBox control.
     *
     * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param options The JavaScript object containing initialization data for the control.
     */
    constructor(element: any, options?: any);
    _setText(text: string, fullMatch: boolean): void;
    /**
     * Gets or sets the array or @see:ICollectionView object that contains the items to select from.
     */
    itemsSource: any;
    _createDropDown(): void;
    headerPath: string;
    selectedIndexChanged: Event;
    /**
     * Raises the @see:selectedIndexChanged event.
     */
    onSelectedIndexChanged(e?: EventArgs): void;
    /**
     * Gets or sets the index of the currently selected item in the drop-down list.
     */
    selectedIndex: number;
    readonly collectionView: CollectionView;
    getDisplayText(index?: number): string;
    isContentHtml: boolean;
    /**
     * Gets or sets the item that is currently selected in the drop-down list.
     */
    selectedItem: any;
    /**
     * Gets or sets the value of the @see:selectedItem, obtained using the @see:selectedValuePath.
     */
    selectedValue: any;
}
