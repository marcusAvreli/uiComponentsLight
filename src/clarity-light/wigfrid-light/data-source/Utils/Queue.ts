import { Subject, Observable } from "rxjs";
/**
 * Created by LeBlanc on 16/8/13.
 */


export class Queue {
    private _busy;

    private _subject = new Subject();
    private _queueStream;

    constructor() {
    
    }


    public add(observable: Observable<any>) {
        this._subject.next(observable);
    }

    public busy() {
        return this._busy;
    }
}
