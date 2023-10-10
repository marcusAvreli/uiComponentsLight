//import { mapDataRespectingGrouping } from "./util";
//import * as _ from "lodash";
//import { CommonStore } from "./Store/CommonStore/CommonStore";
import { Subject, Observable } from "rxjs/Rx";
import { Pagination } from "./Pagination";
//import { Store } from "./Store/Store";
import { Queue } from "./Utils/Queue";
// var operationManager = new OperationManager();
const CANCELED_TOKEN = "canceled";
export class DataSource<T, R> {
  //  private _store: Store<any>;
    private _storeLoadOptions;
    private _mapFunc;
    private _postProcessFunc;
    private _loadingCount;
    private _loadQueue;
    private _searchValue;
    private _searchOperation;
    private _searchExpr;
    private _items;
    /**
     * @readonly
     * @returns array
     */
    get items() {return this._items}

    private _userData;
    // private _totalCount: number;
    private _isLoaded;
    // private _isLastPage;
    private _delayedLoadTask;
    private _disposed;
    /**
     * Pagination
     */
    //public _pagination: Pagination;
    // constructor(url: string);
    // constructor(data: Array<any>);
    // constructor(options: CustomStoreOptions);
    // constructor(options: DataSourceOptions);
    constructor( ){
	}
      
}
