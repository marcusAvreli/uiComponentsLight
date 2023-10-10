export declare class DataSource<T, R> {
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
    readonly items: any;
    private _userData;
    private _isLoaded;
    private _delayedLoadTask;
    private _disposed;
    /**
     * Pagination
     */
    constructor();
}
