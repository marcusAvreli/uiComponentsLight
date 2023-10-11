import { EventArgs } from "../eventArgs/EventArgs";
import { CancelEventArgs } from "../eventArgs/CancelEventArgs";
import { EventEmitter } from "@angular/core";
/**
 * Class that implements the @see:ICollectionView interface to expose data in
 * regular JavaScript arrays.
 *
 * The @see:CollectionView class implements the following interfaces:
 * <ul>
 *   <li>@see:ICollectionView: provides current record management,
 *       custom sorting, filtering, and grouping.</li>
 *   <li>@see:IEditableCollectionView: provides methods for editing,
 *       adding, and removing items.</li>
 *   <li>@see:IPagedCollectionView: provides paging.</li>
 * </ul>
 *
 * To use the @see:CollectionView class, start by declaring it and passing a
 * regular array as a data source. Then configure the view using the
 * @see:filter, @see:sortDescriptions, @see:groupDescriptions, and
 * @see:pageSize properties. Finally, access the view using the @see:items
 * property. For example:
 *
 * <pre>
 *   // create a new CollectionView
 *   var cv = new wijmo.collections.CollectionView(myArray);
 *   // sort items by amount in descending order
 *   var sd = new wijmo.collections.SortDescription('amount', false);
 *   cv.sortDescriptions.push(sd);
 *   // show only items with amounts greater than 100
 *   cv.filter = function(item) { return item.amount > 100 };
 *   // show the sorted, filtered result on the console
 *   for (var i = 0; i &lt; cv.items.length; i++) {
     *     var item = cv.items[i];
     *     console.log(i + ': ' + item.name + ' ' + item.amount);
     *   }
 * </pre>
 * @deprecated
 */
export declare class CollectionView {
    _src: any[];
    _view: any[];
    _pgView: any[];
    _digest: string;
    _idx: number;
    _newItem: any;
    _edtItem: any;
    _edtClone: any;
    _pgSz: number;
    _pgIdx: number;
    _updating: number;
    _itemCreator: Function;
    _canFilter: boolean;
    _canGroup: boolean;
    _canSort: boolean;
    _canAddNew: boolean;
    _canCancelEdit: boolean;
    _canRemove: boolean;
    _canChangePage: boolean;
    _trackChanges: boolean;
    _srtCvt: Function;
    /**
     * Initializes a new instance of a @see:CollectionView.
     *
     * @param sourceCollection Array that serves as a source for this
     * @see:CollectionView.
     */
    constructor(sourceCollection?: any);
    /**
     * Gets or sets a function that creates new items for the collection.
     *
     * If the creator function is not supplied, the @see:CollectionView
     * will try to create an uninitilized item of the appropriate type.
     *
     * If the creator function is supplied, it should be a function that
     * takes no parameters and returns an initialized object of the proper
     * type for the collection.
     */
    readonly newItemCreator: Function;
    /**
     * Gets or sets a function used to convert values when sorting.
     *
     * If provided, the function should take as parameters a
     * @see:SortDescription, a data item, and a value to convert,
     * and should return the converted value.
     *
     * This property provides a way to customize sorting. For example,
     * the @see:FlexGrid control uses it to sort mapped columns by
     * display value instead of by raw value.
     *
     * For example, the code below causes a @see:CollectionView to
     * sort the 'country' property, which contains country code integers,
     * using the corresponding country names:
     *
     * <pre>var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
     * collectionView.sortConverter = function (sd, item, value) {
         *   if (sd.property == 'countryMapped') {
         *     value = countries[value]; // convert country id into name
         *   }
         *   return value;
         * }</pre>
     */
    sortConverter: Function;
    /**
     * Returns true if the caller queries for a supported interface.
     *
     * @param interfaceName Name of the interface to look for.
     */
    implementsInterface(interfaceName: string): boolean;
    readonly items: any[];
    /**
     * Gets or sets a value that determines whether the control should
     * track changes to the data.
     *
     * If @see:trackChanges is set to true, the @see:CollectionView keeps
     * track of changes to the data and exposes them through the
     * @see:itemsAdded, @see:itemsRemoved, and @see:itemsEdited collections.
     *
     * Tracking changes is useful in situations where you need to to update
     * the server after the user has confirmed that the modifications are
     * valid.
     *
     * After committing or cancelling changes, use the @see:clearChanges method
     * to clear the @see:itemsAdded, @see:itemsRemoved, and @see:itemsEdited
     * collections.
     *
     * The @see:CollectionView only tracks changes made when the proper
     * @see:CollectionView methods are used (@see:editItem/@see:commitEdit,
     * @see:addNew/@see:commitNew, and @see:remove).
     * Changes made directly to the data are not tracked.
     */
    trackChanges: boolean;
    /**
     * Sets the specified item to be the current item in the view.
     *
     * @param item Item that will become current.
     */
    moveCurrentTo(item: any): boolean;
    /**
     * Sets the first item in the view as the current item.
     */
    moveCurrentToFirst(): boolean;
    /**
     * Sets the last item in the view as the current item.
     */
    moveCurrentToLast(): boolean;
    /**
     * Sets the item after the current item in the view as the current item.
     */
    moveCurrentToNext(): boolean;
    moveCurrentToPosition(index: number): boolean;
    /**
       * Occurs after the current item changes.
       */
    currentChanged: EventEmitter<{}>;
    /**
     * Raises the @see:currentChanged event.
     */
    onCurrentChanged(e?: EventArgs): void;
    currentChanging: EventEmitter<{}>;
    /**
     * Raises the @see:currentChanging event.
     *
     * @param e @see:CancelEventArgs that contains the event data.
     */
    onCurrentChanging(e: CancelEventArgs): boolean;
    /**
        * Gets or sets the current item in the view.
        */
    currentItem: any;
    /**
     * Gets the ordinal position of the current item in the view.
     */
    readonly currentPosition: number;
    /**
   * Removes the item at the specified index from the collection.
   *
   * @param index Index of the item to be removed from the collection.
   * The index is relative to the view, not to the source collection.
   */
    removeAt(index: number): void;
    remove(item: any): void;
    sourceCollection: any;
    refresh(): void;
    _performRefresh(): void;
    /**
   * Occurs when the collection changes.
   */
    collectionChanged: EventEmitter<{}>;
    /**
     * Raises the @see:collectionChanged event.
     *
     * @param e Contains a description of the change.
     */
    onCollectionChanged(): void;
}
