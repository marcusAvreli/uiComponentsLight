//import {DateTime} from "../core/index";
import {Event} from "../event/Event";
import {EventArgs} from "../eventArgs/EventArgs";
import {CancelEventArgs} from "../eventArgs/CancelEventArgs";
import {assert, asFunction, asBoolean, clamp, isPrimitive, tryCast, asArray, asInt} from "../core";
//import {ObservableArray} from "./ObservableArray";
//import {IEditableCollectionView} from "../collections/interface/IEditableCollectionView";
//import {IPagedCollectionView} from "../collections/interface/IPagedCollectionView";
//import {INotifyCollectionChanged} from "../collections/interface/INotifyCollectionChanged";
//import {IPredicate} from "../collections/interface/IPredicate";
//import {ICollectionView} from "./interface/ICollectionView";
//import {GroupDescription} from "./GroupDescription";
//import {NotifyCollectionChangedEventArgs} from "./eventArgs/NotifyCollectionChangedEventArgs";
//import {PageChangingEventArgs} from "./eventArgs/PageChangingEventArgs";
//import {SortDescription} from "./SortDescription";
//import {NotifyCollectionChangedAction} from "../enum/collections/NotifyCollectionChangedAction";
//import {CollectionViewGroup} from "./CollectionViewGroup";
import {EventEmitter} from "@angular/core";
//import {$$observable} from "rxjs/symbol/observable";
import { of } from 'rxjs/observable/of';


//import {Observable, Subscriber} from "rxjs/Rx";

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
export class CollectionView  {
    _src: any[];
   // _ncc: INotifyCollectionChanged;
    _view: any[];
    _pgView: any[];
  //  _groups: CollectionViewGroup[];
  //  _fullGroups: CollectionViewGroup[];
    _digest: string;
    _idx           = -1;
   // _filter: IPredicate;
   // _srtDsc        = new ObservableArray();
   // _grpDesc       = new ObservableArray();
    _newItem       = null;
    _edtItem       = null;
    _edtClone: any;
    _pgSz          = 0;
    _pgIdx         = 0;
    _updating      = 0;
    _itemCreator: Function;
    _canFilter     = true;
    _canGroup      = true;
    _canSort       = true;
    _canAddNew     = true;
    _canCancelEdit = true;
    _canRemove     = true;
    _canChangePage = true;
    _trackChanges  = false;
   // _chgAdded      = new ObservableArray();
   // _chgRemoved    = new ObservableArray();
    //_chgEdited     = new ObservableArray();
    _srtCvt: Function;

    /**
     * Initializes a new instance of a @see:CollectionView.
     *
     * @param sourceCollection Array that serves as a source for this
     * @see:CollectionView.
     */
    constructor(sourceCollection?: any) {
		console.log("collection_view_constructor_started");
        // check that sortDescriptions contains SortDescriptions
       
		this._pgView = sourceCollection;
        // initialize the source collection
        this.sourceCollection = sourceCollection ;
		console.log("collection_view_constructor_finished");
    }

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
    get newItemCreator(): Function {
        return this._itemCreator;
    }
/*
    set newItemCreator(value: Function) {
        this._itemCreator = asFunction(value);
    }
*/
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
    get sortConverter(): Function {
        return this._srtCvt;
    }

    set sortConverter(value: Function) {
        if (value != this._srtCvt) {
           // this._srtCvt = asFunction(value, true);
        }
    }

    // ** IQueryInterface

    /**
     * Returns true if the caller queries for a supported interface.
     *
     * @param interfaceName Name of the interface to look for.
     */
    implementsInterface(interfaceName: string): boolean {
        switch (interfaceName) {
            case 'ICollectionView':
            case 'IEditableCollectionView':
            case 'IPagedCollectionView':
            case 'INotifyCollectionChanged':
                return true;
        }
        return false;
    }
get items(): any[] {
        return this._pgView;
    }
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
    get trackChanges(): boolean {
        return this._trackChanges;
    }

    set trackChanges(value: boolean) {
       // this._trackChanges = asBoolean(value);
    }

    /**
     * Sets the specified item to be the current item in the view.
     *
     * @param item Item that will become current.
     */
    moveCurrentTo(item: any): boolean {
		console.log("collection_view_1");
        return this.moveCurrentToPosition(this._pgView.indexOf(item));
    }

    /**
     * Sets the first item in the view as the current item.
     */
    moveCurrentToFirst(): boolean {
	console.log("collection_view_2");
        return this.moveCurrentToPosition(0);
    }

    /**
     * Sets the last item in the view as the current item.
     */
    moveCurrentToLast(): boolean {
		console.log("collection_view_3");
        return this.moveCurrentToPosition(this._pgView.length - 1);
    }

    /**
     * Sets the item after the current item in the view as the current item.
     */
    moveCurrentToNext(): boolean {
	console.log("collection_view_4");
        return this.moveCurrentToPosition(this._idx + 1);
    }
   moveCurrentToPosition(index: number): boolean {
        if (index >= -1 && index < this._pgView.length) {
            const e = new CancelEventArgs();
            if (this._idx != index && this.onCurrentChanging(e)) {

                // when moving away from current edit/new item, commit
                if (this._edtItem && this._pgView[index] != this._edtItem) {
                   // this.commitEdit();
                }
                if (this._newItem && this._pgView[index] != this._newItem) {
                   // this.commitNew();
                }

                // update currency
				console.log("collection_view_updating_index!!!!!");
                this._idx = index;
                this.onCurrentChanged();
            }
        }
        return this._idx == index;
    }
  /**
     * Occurs after the current item changes.
     */
    currentChanged = new EventEmitter();

    /**
     * Raises the @see:currentChanged event.
     */
    onCurrentChanged(e = EventArgs.empty) {
        this.currentChanged.emit(e);
    }
	
	currentChanging = new EventEmitter();

    /**
     * Raises the @see:currentChanging event.
     *
     * @param e @see:CancelEventArgs that contains the event data.
     */
    onCurrentChanging(e: CancelEventArgs): boolean {
        this.currentChanging.emit(e);
        return !e.cancel;
    }
 /**
     * Gets or sets the current item in the view.
     */
    get currentItem(): any {
        return this._pgView && this._idx > -1 && this._idx < this._pgView.length
            ? this._pgView[this._idx]
            : null;
    }

    set currentItem(value: any) {
        this.moveCurrentTo(value);
    }
	
	
    /**
     * Gets the ordinal position of the current item in the view.
     */
    get currentPosition(): number {
		console.log("collection_view_current_postion:"+this._idx);
        return this._idx;
    }
	
	  /**
     * Removes the item at the specified index from the collection.
     *
     * @param index Index of the item to be removed from the collection.
     * The index is relative to the view, not to the source collection.
     */
    removeAt(index: number) {
        index = asInt(index);
        this.remove(this._pgView[index]);
    }
	
	remove(item: any) {
		console.log("collection_view_remove_started");
        // handle cases where the user is adding or editing items
        let pendingNew = (item == this._newItem);
        if (pendingNew) {
            this._newItem = null;
        }
        if (item == this._edtItem) {
            //this.cancelEdit();
			console.log("collection_view_cancel_edit");
        }

        // honor canRemove
		/*
        if (!this.canRemove) {
            assert(false, 'cannot remove items (canRemove == false).');
            return;
        }
		*/
        // find item
        const index = this._src.indexOf(item);
        if (index > -1) {

            // get current item to notify later
            const current = this.currentItem;

            // remove item from source collection
            this._updating++;
            this._src.splice(index, 1); // **
            this._updating--;

            // refresh to update the edited item
            //var index = this._pgView.indexOf(item);
            const digest = this._digest;
			console.log("collection_view_preform_refresh_before_on_remove");
			this._performRefresh();
			console.log("collection_view_preform_refresh_after_on_remove");
            // track changes (before notifying)
            if (this._trackChanges == true) {

                // removing something that was added
				/*
                const idxAdded = this._chgAdded.indexOf(item);
                if (idxAdded > -1) {
                    this._chgAdded.removeAt(idxAdded);
                }
*/
                // removing something that was edited
				/*
                const idxEdited = this._chgEdited.indexOf(item);
                if (idxEdited > -1) {
                    this._chgEdited.removeAt(idxEdited);
                }
*/
                // add to removed list unless it was pending and not added in this session
				/*
                const idxRemoved = this._chgRemoved.indexOf(item);
                if (idxRemoved < 0 && !pendingNew && idxAdded < 0) {
                    //this._chgRemoved.push(item);
                }
				*/
            }

            // notify (item removed or full refresh) (TFS 85001)
			/*
            const paged = this.pageSize > 0 && this._pgIdx > -1;
            if (paged || digest != this._getGroupsDigest(this.groups)) {
                this._raiseCollectionChanged();
            } else {
                this._raiseCollectionChanged();
            }
			*/
			this.refresh(); // TODO: optimize
            // raise currentChanged if needed
            if (this.currentItem !== current) {
                this.onCurrentChanged();
            }
        }
		console.log("collection_view_remove_finished");
    }
	
	  get sourceCollection(): any {
        return this._src;
    }
	  refresh() {
		console.log("collection_view_refresh_started");
        // not while updating, adding, or editing
        /*if (this._updating > 0 || this._newItem || this._edtItem) {
            return;
        }
		*/

        // perform the refresh
        this._performRefresh();

        // notify listeners
        this.onCollectionChanged();
		console.log("collection_view_refresh_finished");
    }
	
	  _performRefresh() {
		console.log("preform_refresh_started");
        // benchmark
        //var start = new Date();
/*
        // save current item
        const current = this.currentItem;

        // create filtered view
        if (!this._src) {
            this._view = [];
        } else if (!this._filter || !this.canFilter) {
            this._view = (this._srtDsc.length > 0 && this.canSort)
                ? this._src.slice(0) // clone source array
                : this._src; // don't waste time cloning
        } else {
            this._view = this._performFilter(this._src);
        }

        // apply sort
        if (this._srtDsc.length > 0 && this.canSort) {
            this._performSort(this._view);
        }

        // apply grouping
        this._groups     = this.canGroup ? this._createGroups(this._view) : null;
        this._fullGroups = this._groups;
        if (this._groups) {
            this._view = this._mergeGroupItems(this._groups);
        }

        // apply paging to view
        this._pgIdx  = clamp(this._pgIdx, 0, this.pageCount - 1);
        this._pgView = this._getPageView();

        // update groups to take paging into account
        if (this._groups && this.pageCount > 1) {
            this._groups = this._createGroups(this._pgView);
            this._mergeGroupItems(this._groups);
        }

        // restore current item
        let index = this._pgView.indexOf(current);
        if (index < 0) {
            index = Math.min(this._idx, this._pgView.length - 1);
        }
        this._idx = index;

        // save group digest to optimize updates (TFS 109119)
        this._digest = this._getGroupsDigest(this.groups);
        // raise currentChanged if needed
        if (this.currentItem !== current) {
            this.onCurrentChanged();
        }
*/
        //var now = new Date();
        //console.log('refreshed in ' + (now.getTime() - start.getTime()) / 1000 + ' seconds');
		console.log("preform_refresh_finished");
    }/*
  private _raiseCollectionChanged(action = NotifyCollectionChangedAction.Reset, item?: any, index?: number) {
        //console.log('** collection changed: ' + NotifyCollectionChangedAction[action] + ' **');
        const e = new NotifyCollectionChangedEventArgs(action, item, index);
        this.onCollectionChanged(e);
    }
	*/
	  /**
     * Occurs when the collection changes.
     */
    collectionChanged = new EventEmitter();

    /**
     * Raises the @see:collectionChanged event.
     *
     * @param e Contains a description of the change.
     */
	 
    onCollectionChanged() {
        this.collectionChanged.emit();
    }
	
    set sourceCollection(sourceCollection: any) {
		
        if (sourceCollection != this._src) {

            // keep track of current index
            const index = this.currentPosition;

            // commit pending changes
           // this.commitEdit();
           // this.commitNew();

            // disconnect old source
            //todo ###remove me###
            //if (this._ncc != null) {
            //    this._ncc.collectionChanged.removeHandler(this._sourceChanged);
            //}

            // connect new source
            this._src = asArray(sourceCollection, false);
         //   this._ncc = <INotifyCollectionChanged>tryCast(this._src, 'INotifyCollectionChanged');
			/*
            if (this._ncc) {
                this._ncc.collectionChanged.subscribe(this._sourceChanged.bind(this));
            }
*/
            // clear any changes
           // this.clearChanges();

            // refresh view
           // this.refresh();
           // this.moveCurrentToFirst();

            // if we have no items, notify listeners that the current index changed
            if (this.currentPosition < 0 && index > -1) {
                this.onCurrentChanged();
            }
        }
    }

}
