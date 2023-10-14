import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Injectable, NgModule } from '@angular/core';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { $$observable } from 'rxjs/symbol/observable';
import { Subscription as Subscription$1 } from 'rxjs/Subscription';

class ClrResponsiveNavCodes {
    /**
     * @return {?}
     */
    static get NAV_LEVEL_1() { return 1; }
    /**
     * @return {?}
     */
    static get NAV_LEVEL_2() { return 2; }
    /**
     * @return {?}
     */
    static get NAV_CLOSE_ALL() { return "NAV_CLOSE_ALL"; }
    /**
     * @return {?}
     */
    static get NAV_OPEN() { return "NAV_OPEN"; }
    /**
     * @return {?}
     */
    static get NAV_CLOSE() { return "NAV_CLOSE"; }
    /**
     * @return {?}
     */
    static get NAV_TOGGLE() { return "NAV_TOGGLE"; }
    /**
     * @return {?}
     */
    static get NAV_CLASS_HAMBURGER_MENU() { return "open-hamburger-menu"; }
    /**
     * @return {?}
     */
    static get NAV_CLASS_OVERFLOW_MENU() { return "open-overflow-menu"; }
    /**
     * @return {?}
     */
    static get NAV_CLASS_TRIGGER_1() { return "header-hamburger-trigger"; }
    /**
     * @return {?}
     */
    static get NAV_CLASS_TRIGGER_2() { return "header-overflow-trigger"; }
    /**
     * @return {?}
     */
    static get NAV_CLASS_LEVEL_1() { return "clr-nav-level-1"; }
    /**
     * @return {?}
     */
    static get NAV_CLASS_LEVEL_2() { return "clr-nav-level-2"; }
}

class ClrResponsiveNavControlMessage {
    /**
     * @param {?} _controlCode
     * @param {?} _navLevel
     */
    constructor(_controlCode, _navLevel) {
        this._controlCode = _controlCode;
        this._navLevel = _navLevel;
    }
    /**
     * @return {?}
     */
    get controlCode() {
        return this._controlCode;
    }
    /**
     * @return {?}
     */
    get navLevel() {
        return this._navLevel;
    }
}

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
class ClrResponsiveNavigationService {
    constructor() {
        this.responsiveNavList = [];
        this.registerNavSubject = new Subject$1();
        this.controlNavSubject = new Subject$1();
        this.closeAllNavs(); //We start with all navs closed
    }
    /**
     * @return {?}
     */
    get registeredNavs() {
        return this.registerNavSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get navControl() {
        return this.controlNavSubject.asObservable();
    }
    /**
     * @param {?} navLevel
     * @return {?}
     */
    registerNav(navLevel) {
        if (!navLevel || this.isNavRegistered(navLevel)) {
            return;
        }
        this.responsiveNavList.push(navLevel);
        this.registerNavSubject.next(this.responsiveNavList);
    }
    /**
     * @param {?} navLevel
     * @return {?}
     */
    isNavRegistered(navLevel) {
        if (this.responsiveNavList.indexOf(navLevel) > -1) {
            console.error("Multiple clr-nav-level " + navLevel
                + " attributes found. Please make sure that only one exists");
            return true;
        }
        return false;
    }
    /**
     * @param {?} navLevel
     * @return {?}
     */
    unregisterNav(navLevel) {
        let /** @type {?} */ index = this.responsiveNavList.indexOf(navLevel);
        if (index > -1) {
            this.responsiveNavList.splice(index, 1);
            this.registerNavSubject.next(this.responsiveNavList);
        }
    }
    /**
     * @param {?} controlCode
     * @param {?} navLevel
     * @return {?}
     */
    sendControlMessage(controlCode, navLevel) {
        let /** @type {?} */ message = new ClrResponsiveNavControlMessage(controlCode, navLevel);
        this.controlNavSubject.next(message);
    }
    /**
     * @return {?}
     */
    closeAllNavs() {
        let /** @type {?} */ message = new ClrResponsiveNavControlMessage(ClrResponsiveNavCodes.NAV_CLOSE_ALL, -999);
        this.controlNavSubject.next(message);
    }
}
ClrResponsiveNavigationService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ClrResponsiveNavigationService.ctorParameters = () => [];

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
//import {ALERT_DIRECTIVES} from "./alert/index";
//import {CHECKBOX_DIRECTIVES} from "./checkboxes/index";
//import {CODE_HIGHLIGHT_DIRECTIVES} from "./code/index";
//import {DATAGRID_DIRECTIVES} from "./datagrid/index";
//import {DROPDOWN_DIRECTIVES} from "./dropdown/index";
//import {LAYOUT_DIRECTIVES} from "./layout/index";
//import {MODAL_DIRECTIVES} from "./modal/index";
//import {NAVIGATION_DIRECTIVES} from "./nav/index";
//import {STACK_VIEW_DIRECTIVES} from "./stack-view/index";
//import {TABS_DIRECTIVES} from "./tabs/index";
//import {TREE_VIEW_DIRECTIVES} from "./tree-view/index";
//import {WIZARD_DIRECTIVES} from "./wizard/index";
//import {ICON_DIRECTIVES} from "./iconography/index";
class ClarityModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ClarityModule,
            providers: [ClrResponsiveNavigationService]
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: ClarityModule,
            providers: []
        };
    }
}
ClarityModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [],
                exports: []
            },] },
];
/**
 * @nocollapse
 */
ClarityModule.ctorParameters = () => [];

/**
 * @param {?} value
 * @return {?}
 */
function isArray(value) {
    return value instanceof Array;
}

/**
 * @param {?} value
 * @return {?}
 */
function isDate(value) {
    return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return value != null && typeof value == 'object' && !isDate(value) && !isArray(value);
}

/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof (value) == 'function';
}

/**
 * Throws an exception if a condition is false.
 *
 * @param {?} condition Condition expected to be true.
 * @param {?} msg Message of the exception if the condition is not true.
 * @return {?}
 */
function assert(condition, msg) {
    if (!condition) {
        throw new Error('** Assertion failed in Wijmo: ' + msg);
    }
}

/**
 * Copies properties from an object to another.
 *
 * This method is typically used to initialize controls and other Wijmo objects
 * by setting their properties and assigning event handlers.
 *
 * The destination object must define all the properties defined in the source,
 * or an error will be thrown.
 *
 * @param {?} dst The destination object.
 * @param {?} src The source object.
 * @return {?}
 */
function copy(dst, src) {
    for (let /** @type {?} */ key in src) {
        assert(key in dst, 'Unknown key "' + key + '".');
        const /** @type {?} */ value = src[key];
        if (!dst._copy || !dst._copy(key, value)) {
            if (dst[key] instanceof Event && isFunction(value)) {
                dst[key].addHandler(value); // add event handler
            }
            else if (isObject(value) && dst[key]) {
                copy(dst[key], value); // copy sub-objects
            }
            else {
                dst[key] = value; // assign values
            }
        }
    }
}

/**
 * Class that represents a point (with x and y coordinates).
 */

/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return typeof (value) == 'number';
}

/**
 * Converts mouse or touch event arguments into a \@see:Point in page coordinates.
 * @param {?} e
 * @return {?}
 */

/**
 * Asserts that a value is a function.
 *
 * @param {?} value Value supposed to be a function.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The function passed in.
 */
function asFunction(value, nullOK = true) {
    assert((nullOK && value == null) || isFunction(value), 'Function expected.');
    return value;
}

/**
 * Asserts that a value is a number.
 *
 * @param {?} value Value supposed to be numeric.
 * @param {?=} nullOK Whether null values are acceptable.
 * @param {?=} positive Whether to accept only positive numeric values.
 * @return {?} The number passed in.
 */
function asNumber(value, nullOK = false, positive = false) {
    assert((nullOK && value == null) || isNumber(value), 'Number expected.');
    if (positive && value && value < 0) {
        debugger;
        throw new Error('Positive number expected.');
    }
    return value;
}

/**
 * Calls a function on a timer with a parameter varying between zero and one.
 *
 * Use this function to create animations by modifying document properties
 * or styles on a timer.
 *
 * For example, the code below changes the opacity of an element from zero
 * to one in one second:
 * <pre>var element = document.getElementById('someElement');
 * animate(function(pct) {
 *   element.style.opacity = pct;
 * }, 1000);</pre>
 *
 * The function returns an interval ID that you can use to stop the
 * animation. This is typically done when you are starting a new animation
 * and wish to suspend other on-going animations on the same element.
 * For example, the code below keeps track of the interval ID and clears
 * if before starting a new animation:
 * <pre>var element = document.getElementById('someElement');
 * if (this._animInterval) {
 *   clearInterval(this._animInterval);
 * }
 * var self = this;
 * self._animInterval = animate(function(pct) {
 *   element.style.opacity = pct;
 *   if (pct == 1) {
 *     self._animInterval = null;
 *   }
 * }, 1000);</pre>
 *
 * @param {?} apply Callback function that modifies the document.
 * The function takes a single parameter that represents a percentage.
 * @param {?=} duration The duration of the animation, in milliseconds.
 * @param {?=} step The interval between animation frames, in milliseconds.
 * @return {?} An interval id that you can use to suspend the animation.
 */

/**
 * Asserts that a value is an array.
 *
 * @param {?} value Value supposed to be an array.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The array passed in.
 */
function asArray(value, nullOK = true) {
    assert((nullOK && value == null) || isArray(value), 'Array expected.');
    return value;
}

/**
 * @param {?} value
 * @return {?}
 */
function isBoolean(value) {
    return typeof (value) == 'boolean';
}

/**
 * Asserts that a value is a Boolean.
 *
 * @param {?} value Value supposed to be Boolean.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The Boolean passed in.
 */
function asBoolean(value, nullOK = false) {
    assert((nullOK && value == null) || isBoolean(value), 'Boolean expected.');
    return value;
}

/**
 * Provides binding to complex properties (e.g. 'customer.address.city')
 */
class Binding {
    /**
     * Initializes a new instance of a \@see:Binding object.
     *
     * @param {?} path Name of the property to bind to.
     */
    constructor(path) {
        this.path = path;
    }
    /**
     * Gets or sets the path for the binding.
     *
     * In the simplest case, the path is the name of the property of the source
     * object to use for the binding (e.g. 'street').
     *
     * Subproperties of a property can be specified by a syntax similar to that
     * used in JavaScript (e.g. 'address.street').
     * @return {?}
     */
    get path() {
        return this._path;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set path(value) {
        this._path = value;
        this._parts = value.split('.'); // e.g. 'customer.balance'
        for (let /** @type {?} */ i = 0; i < this._parts.length; i++) {
            const /** @type {?} */ part = this._parts[i], /** @type {?} */ ib = part.indexOf('['); // e.g. 'customer.balance[0]'
            if (ib > -1) {
                this._parts[i] = part.substr(0, ib);
                this._parts.splice(++i, 0, parseInt(part.substr(ib + 1)));
            }
        }
        this._key = this._parts.length == 1 ? this._parts[0] : null;
    }
    /**
     * Gets the binding value for a given object.
     *
     * If the object does not contain the property specified by the
     * binding \@see:path, the method returns null.
     *
     * @param {?} object The object that contains the data to be retrieved.
     * @return {?}
     */
    getValue(object) {
        if (object) {
            // optimize common case
            if (this._key) {
                return object[this._key];
            }
            // handle case where property name has a decimal point (TFS 139176)
            if (this._path in object) {
                return object[this._path];
            }
            // traverse path for complex properties
            for (let /** @type {?} */ i = 0; i < this._parts.length && object; i++) {
                object = object[this._parts[i]];
            }
        }
        return object;
    }
    /**
     * Sets the binding value on a given object.
     *
     * If the object does not contain the property specified by the
     * binding \@see:path, the value is not set.
     *
     * @param {?} object The object that contains the data to be set.
     * @param {?} value Data value to set.
     * @return {?}
     */
    setValue(object, value) {
        if (object) {
            // handle simple cases (and cases where the property name has a decimal point)
            if (this._path in object) {
                object[this._path] = value;
                return;
            }
            // traverse parts for complex properties
            for (let /** @type {?} */ i = 0; i < this._parts.length - 1; i++) {
                object = object[this._parts[i]];
                if (object == null) {
                    return;
                }
            }
            // make the assignment
            object[this._parts[this._parts.length - 1]] = value;
        }
    }
}

/**
 * Class that represents a rectangle (with left, top, width, and height).
 */

let Aggregate = {};
Aggregate.None = 0;
Aggregate.Sum = 1;
Aggregate.Cnt = 2;
Aggregate.Avg = 3;
Aggregate.Max = 4;
Aggregate.Min = 5;
Aggregate.Rng = 6;
Aggregate.Std = 7;
Aggregate.Var = 8;
Aggregate.StdPop = 9;
Aggregate.VarPop = 10;
Aggregate[Aggregate.None] = "None";
Aggregate[Aggregate.Sum] = "Sum";
Aggregate[Aggregate.Cnt] = "Cnt";
Aggregate[Aggregate.Avg] = "Avg";
Aggregate[Aggregate.Max] = "Max";
Aggregate[Aggregate.Min] = "Min";
Aggregate[Aggregate.Rng] = "Rng";
Aggregate[Aggregate.Std] = "Std";
Aggregate[Aggregate.Var] = "Var";
Aggregate[Aggregate.StdPop] = "StdPop";
Aggregate[Aggregate.VarPop] = "VarPop";

/**
 * Casts a value to a type if possible.
 *
 * @param {?} value Value to cast.
 * @param {?} type Type or interface name to cast to.
 * @return {?} The value passed in if the cast was successful, null otherwise.
 */
function tryCast(value, type) {
    // null doesn't implement anything
    if (value == null) {
        return null;
    }
    // test for interface implementation (IQueryInterface)
    if (isString(type)) {
        return isFunction(value.implementsInterface) && value.implementsInterface(type) ? value : null;
    }
    // regular type test
    return value instanceof type ? value : null;
}
/**
 * Checks whether an \@see:ICollectionView is defined and not empty.
 *
 * @param {?} value \@see:ICollectionView to check.
 * @return {?}
 */
function hasItems(value) {
    return value && value.items && value.items.length;
}
/**
 * Sets the start and end positions of a selection in a text field.
 *
 * This method is similar to the native \@see:setSelectionRange method
 * in HTMLInputElement objects, except it checks for conditions that
 * may cause exceptions (element not in the DOM, disabled, or hidden).
 *
 * @param {?} e
 * @param {?} start Offset into the text field for the start of the selection.
 * @param {?=} end Offset into the text field for the end of the selection.
 * @return {?}
 */
function setSelectionRange(e, start, end = start) {
    e = asType(e, HTMLInputElement);
    if (contains(document.body, e) && !e.disabled && e.style.display != 'none') {
        try {
            e.setSelectionRange(asNumber(start), asNumber(end));
            e.focus(); // needed in Chrome (TFS 124102)
        }
        catch (x) { }
    }
}
/**
 * Gets the bounding rectangle of an element in page coordinates.
 *
 * This is similar to the <b>getBoundingClientRect</b> function,
 * except that uses window coordinates, which change when the
 * document scrolls.
 * @param {?} e
 * @return {?}
 */

/**
 * Calculates an aggregate value from the values in an array.
 *
 * @param {?} aggType Type of aggregate to calculate.
 * @param {?} items Array with the items to aggregate.
 * @param {?=} binding Name of the property to aggregate on (in case the items are not simple values).
 * @return {?}
 */
function getAggregate(aggType, items, binding) {
    let /** @type {?} */ cnt = 0, /** @type {?} */ cntn = 0, /** @type {?} */ sum = 0, /** @type {?} */ sum2 = 0, /** @type {?} */ min = null, /** @type {?} */ max = null;
    const /** @type {?} */ bnd = binding ? new Binding(binding) : null;
    // calculate aggregate
    for (let /** @type {?} */ i = 0; i < items.length; i++) {
        // get item/value
        let /** @type {?} */ val = items[i];
        if (bnd) {
            val = bnd.getValue(val);
            //assert(!isUndefined(val), 'item does not define property "' + binding + '".');
        }
        // aggregate
        if (val != null) {
            cnt++;
            if (min == null || val < min) {
                min = val;
            }
            if (max == null || val > max) {
                max = val;
            }
            if (isNumber(val) && !isNaN(val)) {
                cntn++;
                sum += val;
                sum2 += val * val;
            }
            else if (isBoolean(val)) {
                cntn++;
                if (val == true) {
                    sum++;
                    sum2++;
                }
            }
        }
    }
    // return result
    const /** @type {?} */ avg = cntn == 0 ? 0 : sum / cntn;
    switch (aggType) {
        case Aggregate.Avg:
            return avg;
        case Aggregate.Cnt:
            return cnt;
        case Aggregate.Max:
            return max;
        case Aggregate.Min:
            return min;
        case Aggregate.Rng:
            return max - min;
        case Aggregate.Sum:
            return sum;
        case Aggregate.VarPop:
            return cntn <= 1 ? 0 : sum2 / cntn - avg * avg;
        case Aggregate.StdPop:
            return cntn <= 1 ? 0 : Math.sqrt(sum2 / cntn - avg * avg);
        case Aggregate.Var:
            return cntn <= 1 ? 0 : (sum2 / cntn - avg * avg) * cntn / (cntn - 1);
        case Aggregate.Std:
            return cntn <= 1 ? 0 : Math.sqrt((sum2 / cntn - avg * avg) * cntn / (cntn - 1));
    }
    // should never get here...
    throw 'Invalid aggregate type.';
}

/*
 * Represents an event handler (private class)
 */
class EventHandler {
    /**
     * @param {?} handler
     * @param {?} self
     */
    constructor(handler, self) {
        this.handler = handler;
        this.self = self;
    }
}

/**
 * Base class for event arguments.
 */
class EventArgs {
}
/**
 * Provides a value to use with events that do not have event data.
 */
EventArgs.empty = new EventArgs();

/**
 * Represents an event.
 *
 * Wijmo events are similar to .NET events. Any class may define events by
 * declaring them as fields. Any class may subscribe to events using the
 * event's \@see:addHandler method and unsubscribe using the \@see:removeHandler
 * method.
 *
 * Wijmo event handlers take two parameters: <i>sender</i> and <i>args</i>.
 * The first is the object that raised the event, and the second is an object
 * that contains the event parameters.
 *
 * Classes that define events follow the .NET pattern where for every event
 * there is an <i>on[EVENTNAME]</i> method that raises the event. This pattern
 * allows derived classes to override the <i>on[EVENTNAME]</i> method and
 * handle the event before and/or after the base class raises the event.
 * Derived classes may even suppress the event by not calling the base class
 * implementation.
 *
 * For example, the TypeScript code below overrides the <b>onValueChanged</b>
 * event for a control to perform some processing before and after the
 * <b>valueChanged</b> event fires:
 * <pre>
 *   // override base class
 *   onValueChanged(e: EventArgs) {
 *   // execute some code before the event fires
 *   console.log('about to fire valueChanged');
 *   // optionally, call base class to fire the event
 *   super.onValueChanged(e);
 *   // execute some code after the event fired
 *   console.log('valueChanged event just fired');
 * }
 * </pre>
 * @deprecated
 */
class Event$1 {
    /**
     * @deprecated
     */
    constructor() {
        this._handlers = [];
    }
    /**
     * Adds a handler to this event.
     *
     * @deprecated
     * @param {?} handler Function invoked when the event is raised.
     * @param {?=} self Object that defines the event handler
     * (accessible as 'this' from the handler code).
     * @return {?}
     */
    addHandler(handler, self) {
        asFunction(handler);
        this._handlers.push(new EventHandler(handler, self));
    }
    /**
     * Removes a handler from this event.
     *
     * @deprecated
     * @param {?} handler Function invoked when the event is raised.
     * @param {?=} self Object that defines the event handler (accessible as 'this' from the handler code).
     * @return {?}
     */
    removeHandler(handler, self) {
        asFunction(handler);
        for (let /** @type {?} */ i = 0; i < this._handlers.length; i++) {
            const /** @type {?} */ l = this._handlers[i];
            if (l.handler == handler || handler == null) {
                if (l.self == self || self == null) {
                    this._handlers.splice(i, 1);
                    if (handler && self) {
                        break;
                    }
                }
            }
        }
    }
    /**
     * Removes all handlers associated with this event.
     * @deprecated
     * @return {?}
     */
    removeAllHandlers() {
        this._handlers.length = 0;
    }
    /**
     * Raises this event, causing all associated handlers to be invoked.
     *
     * @deprecated use EventEmitter.emit() instead
     * @param {?} sender Source object.
     * @param {?=} args Event parameters.
     * @return {?}
     */
    raise(sender, args = EventArgs.empty) {
        for (let /** @type {?} */ i = 0; i < this._handlers.length; i++) {
            const /** @type {?} */ l = this._handlers[i];
            l.handler.call(l.self, sender, args);
        }
    }
    /**
     * Gets a value that indicates whether this event has any handlers.
     * @deprecated
     * @return {?}
     */
    get hasHandlers() {
        return this._handlers.length > 0;
    }
}

/**
 * Provides arguments for cancellable events.
 */
class CancelEventArgs extends EventArgs {
    constructor() {
        super(...arguments);
        /**
         * Gets or sets a value that indicates whether the event should be canceled.
         */
        this.cancel = false;
    }
}

/**
 * Base class for Array classes with notifications.
 */
class ArrayBase {
    /**
     * Initializes a new instance of an \@see:ArrayBase.
     */
    constructor() {
        this.length = 0;
        Array.apply(this, arguments);
    }
    /**
     * @return {?}
     */
    pop() {
        return null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    push(value) {
        return 0;
    }
    /**
     * @param {?} index
     * @param {?} count
     * @param {?=} value
     * @return {?}
     */
    splice(index, count, value) {
        return null;
    }
    /**
     * @param {?} begin
     * @param {?=} end
     * @return {?}
     */
    slice(begin, end) {
        return null;
    }
    /**
     * @param {?} searchElement
     * @param {?=} fromIndex
     * @return {?}
     */
    indexOf(searchElement, fromIndex) {
        return -1;
    }
    /**
     * @param {?=} compareFn
     * @return {?}
     */
    sort(compareFn) {
        return null;
    }
    /**
     * @return {?}
     */
    reverse() {
        return null;
    }
}
// inheriting from Array
// NOTE: set this in declaration rather than in constructor so the
// the TypeScript inheritance mechanism works correctly with instanceof.
ArrayBase.prototype = Array.prototype;

let NotifyCollectionChangedAction = {};
NotifyCollectionChangedAction.Add = 0;
NotifyCollectionChangedAction.Remove = 1;
NotifyCollectionChangedAction.Change = 2;
NotifyCollectionChangedAction.Reset = 3;
NotifyCollectionChangedAction.Splice = 4;
NotifyCollectionChangedAction[NotifyCollectionChangedAction.Add] = "Add";
NotifyCollectionChangedAction[NotifyCollectionChangedAction.Remove] = "Remove";
NotifyCollectionChangedAction[NotifyCollectionChangedAction.Change] = "Change";
NotifyCollectionChangedAction[NotifyCollectionChangedAction.Reset] = "Reset";
NotifyCollectionChangedAction[NotifyCollectionChangedAction.Splice] = "Splice";

/**
 * Provides data for the \@see:collectionChanged event.
 */
class NotifyCollectionChangedEventArgs extends EventArgs {
    /**
     * Initializes a new instance of an {\@link NotifyCollectionChangedEventArgs}.
     *
     * @param {?} action Type of action that caused the event to fire.
     * @param {?=} index Index of the item.
     * @param {?=} removed Item that was removed.
     * @param {?=} added Item that was added.
     */
    constructor(action, index = -1, removed = [], added = []) {
        super();
        this.action = action;
        this.index = index;
        this.removed = removed;
        this.added = added;
    }
}
/**
 * Provides a reset notification.
 */
NotifyCollectionChangedEventArgs.reset = new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Reset);

class ObservableArray extends ArrayBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super();
        /**
         * Occurs when the collection changes.
         * fixed
         */
        this.collectionChanged = new EventEmitter(true);
        if (data) {
            data = asArray(data);
            this.splice(0, 0, ...data);
        }
    }
    /**
     * Appends an item to the array.
     *
     * @param {?} item Item to add to the array.
     * @return {?} The new length of the array.
     */
    push(item) {
        const /** @type {?} */ rv = super.push(item);
        this.onCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Add, rv - 1, [], [item]));
        return rv;
    }
    /**
     * @return {?}
     */
    pop() {
        const /** @type {?} */ item = super.pop();
        this.onCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Remove, this.length, [item]));
        return item;
    }
    /**
     * Removes and/or adds items to the array.
     *
     * @param {?} index Position where items will be added or removed.
     * @param {?} count Number of items to remove from the array.
     * @param {...?} items Item to add to the array.
     * @return {?} An array containing the removed elements.
     */
    splice(index, count, ...items) {
        let /** @type {?} */ removed;
        if (count && items.length > 0) {
            removed = super.splice(index, count, items);
            if (count == items.length) {
                this.onCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Change, index, removed, items));
            }
            this.onCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Splice, index, removed, items));
            return removed;
        }
        else if (items.length > 0) {
            removed = super.splice(index, count, items);
            this.onCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Add, index, [], items));
            return removed;
        }
        else {
            removed = super.splice(index, count);
            this.onCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Remove, index, removed, []));
            return removed;
        }
    }
    /**
     * Creates a shallow copy of a portion of an array.
     *
     * @param {?=} begin Position where the copy starts.
     * @param {?=} end Position where the copy ends.
     * @return {?} A shallow copy of a portion of an array.
     */
    slice(begin, end) {
        return super.slice(begin, end);
    }
    /**
     * Searches for an item in the array.
     *
     * @param {?} searchElement Element to locate in the array.
     * @param {?=} fromIndex The index where the search should start.
     * @return {?} The index of the item in the array, or -1 if the item was not found.
     */
    indexOf(searchElement, fromIndex) {
        return super.indexOf(searchElement, fromIndex);
    }
    /**
     * Sorts the elements of the array in place.
     *
     * @param {?=} compareFn Specifies a function that defines the sort order.
     * If specified, the function should take two arguments and should return
     * -1, +1, or 0 to indicate the first argument is smaller, greater than,
     * or equal to the second argument.
     * If omitted, the elements are sorted in ascending, ASCII character order.
     * @return {?} A copy of the sorted array.
     */
    sort(compareFn) {
        const /** @type {?} */ rv = super.sort(compareFn);
        this.onCollectionChanged();
        return rv;
    }
    /**
     * @return {?}
     */
    reverse() {
        const /** @type {?} */ rv = super.reverse();
        this.onCollectionChanged();
        return rv;
    }
    /**
     * Inserts an item at a specific position in the array.
     *
     * @param {?} index Position where the item will be added.
     * @param {?} item Item to add to the array.
     * @return {?}
     */
    insert(index, item) {
        this.splice(index, 0, item);
    }
    /**
     * Removes an item from the array.
     *
     * @param {?} item Item to remove.
     * @return {?} True if the item was removed, false if it wasn't found in the array.
     */
    remove(item) {
        const /** @type {?} */ index = this.indexOf(item);
        if (index > -1) {
            this.removeAt(index);
            return true;
        }
        return false;
    }
    /**
     * Removes an item at a specific position in the array.
     *
     * @param {?} index Position of the item to remove.
     * @return {?}
     */
    removeAt(index) {
        this.splice(index, 1);
    }
    /**
     * Assigns an item at a specific position in the array.
     *
     * @param {?} index Position where the item will be assigned.
     * @param {?} item Item to assign to the array.
     * @return {?}
     */
    setAt(index, item) {
        this.splice(index, 1, item);
    }
    /**
     * Removes all items from the array.
     * @return {?}
     */
    clear() {
        if (this.length !== 0) {
            this.length = 0; // fastest way to clear an array
            this.onCollectionChanged();
        }
    }
    /**
     * Raises the {\@link collectionChanged} event.
     *
     * @param {?=} e Contains a description of the change.
     * @return {?}
     */
    onCollectionChanged(e = NotifyCollectionChangedEventArgs.reset) {
        this.collectionChanged.emit(e);
    }
}

/**
 * Represents a base class for types defining grouping conditions.
 *
 * The concrete class which is commonly used for this purpose is
 * \@see:PropertyGroupDescription.
 */
class GroupDescription {
    /**
     * Returns the group name for the given item.
     *
     * @param {?} item The item to get group name for.
     * @param {?} level The zero-based group level index.
     * @return {?} The name of the group the item belongs to.
     */
    groupNameFromItem(item, level) {
        return '';
    }
    /**
     * Returns a value that indicates whether the group name and the item name
     * match (which implies that the item belongs to the group).
     *
     * @param {?} groupName The name of the group.
     * @param {?} itemName The name of the item.
     * @return {?} True if the names match; otherwise, false.
     */
    namesMatch(groupName, itemName) {
        return groupName === itemName;
    }
}

/**
 * Provides data for the \@see:IPagedCollectionView.pageChanging event
 */
class PageChangingEventArgs extends CancelEventArgs {
    /**
     * Initializes a new instance of a \@see:PageChangingEventArgs.
     *
     * @param {?} newIndex Index of the page that is about to become current.
     */
    constructor(newIndex) {
        super();
        this.newPageIndex = newIndex;
    }
}

/**
 * Describes a sorting criterion.
 */
class SortDescription {
    /**
     * Initializes a new instance of a \@see:SortDescription.
     *
     * @param {?} property Name of the property to sort on.
     * @param {?} ascending Whether to sort in ascending order.
     */
    constructor(property, ascending) {
        this._bnd = new Binding$1(property);
        this._asc = ascending;
    }
    /**
     * Gets the name of the property used to sort.
     * @return {?}
     */
    get property() {
        return this._bnd.path;
    }
    /**
     * Gets a value that determines whether to sort the values in ascending order.
     * @return {?}
     */
    get ascending() {
        return this._asc;
    }
}

/**
 * Represents a group created by a \@see:CollectionView object based on
 * its \@see:groupDescriptions property.
 */
class CollectionViewGroup {
    /**
     * Initializes a new instance of a \@see:CollectionViewGroup.
     *
     * @param {?} groupDescription \@see:GroupDescription that owns the new group.
     * @param {?} name Name of the new group.
     * @param {?} level Level of the new group.
     * @param {?} isBottomLevel Whether this group has any subgroups.
     */
    constructor(groupDescription, name, level, isBottomLevel) {
        this._gd = groupDescription;
        this._name = name;
        this._level = level;
        this._isBottomLevel = isBottomLevel;
        this._groups = [];
        this._items = [];
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @return {?}
     */
    get level() {
        return this._level;
    }
    /**
     * @return {?}
     */
    get isBottomLevel() {
        return this._isBottomLevel;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get groups() {
        return this._groups;
    }
    /**
     * @return {?}
     */
    get groupDescription() {
        return this._gd;
    }
    /**
     * Calculates an aggregate value for the items in this group.
     *
     * @param {?} aggType Type of aggregate to calculate.
     * @param {?} binding Property to aggregate on.
     * @param {?=} view CollectionView that owns this group.
     * @return {?} The aggregate value.
     */
    getAggregate(aggType, binding, view) {
        const /** @type {?} */ cv = (tryCast(view, CollectionView)), /** @type {?} */ group = cv ? cv._getFullGroup(this) : this;
        return getAggregate(aggType, group.items, binding);
    }
}

/**
 * Class that implements the \@see:ICollectionView interface to expose data in
 * regular JavaScript arrays.
 *
 * The \@see:CollectionView class implements the following interfaces:
 * <ul>
 *   <li>\@see:ICollectionView: provides current record management,
 *       custom sorting, filtering, and grouping.</li>
 *   <li>\@see:IEditableCollectionView: provides methods for editing,
 *       adding, and removing items.</li>
 *   <li>\@see:IPagedCollectionView: provides paging.</li>
 * </ul>
 *
 * To use the \@see:CollectionView class, start by declaring it and passing a
 * regular array as a data source. Then configure the view using the
 * \@see:filter, \@see:sortDescriptions, \@see:groupDescriptions, and
 * \@see:pageSize properties. Finally, access the view using the \@see:items
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
class CollectionView /*extends Observable*/ {
    /**
     * Initializes a new instance of a \@see:CollectionView.
     *
     * \@see:CollectionView.
     * @param {?=} sourceCollection Array that serves as a source for this
     */
    constructor(sourceCollection) {
        this._idx = -1;
        this._srtDsc = new ObservableArray();
        this._grpDesc = new ObservableArray();
        this._newItem = null;
        this._edtItem = null;
        this._pgSz = 0;
        this._pgIdx = 0;
        this._updating = 0;
        this._canFilter = true;
        this._canGroup = true;
        this._canSort = true;
        this._canAddNew = true;
        this._canCancelEdit = true;
        this._canRemove = true;
        this._canChangePage = true;
        this._trackChanges = false;
        this._chgAdded = new ObservableArray();
        this._chgRemoved = new ObservableArray();
        this._chgEdited = new ObservableArray();
        /**
         * Occurs when the collection changes.
         */
        this.collectionChanged = new EventEmitter();
        /**
         * Occurs after the current item changes.
         */
        this.currentChanged = new EventEmitter();
        /**
         * Occurs before the current item changes.
         */
        this.currentChanging = new EventEmitter();
        /**
         * Occurs after the page index changes.
         */
        this.pageChanged = new Event$1();
        /**
         * Occurs before the page index changes.
         */
        this.pageChanging = new Event$1();
        // check that sortDescriptions contains SortDescriptions
        this._srtDsc.collectionChanged.subscribe(() => {
            const arr = this._srtDsc;
            for (let i = 0; i < arr.length; i++) {
                assert(arr[i] instanceof SortDescription, 'sortDescriptions array must contain SortDescription objects.');
            }
            if (this.canSort) {
                this.refresh();
            }
        });
        // check that groupDescriptions contains GroupDescriptions
        this._grpDesc.collectionChanged.subscribe(() => {
            const arr = this._grpDesc;
            for (let i = 0; i < arr.length; i++) {
                assert(arr[i] instanceof GroupDescription, 'groupDescriptions array must contain GroupDescription objects.');
            }
            if (this.canGroup) {
                this.refresh();
            }
        });
        // initialize the source collection
        this.sourceCollection = sourceCollection ? sourceCollection : new ObservableArray();
    }
    /**
     * Gets or sets a function that creates new items for the collection.
     *
     * If the creator function is not supplied, the \@see:CollectionView
     * will try to create an uninitilized item of the appropriate type.
     *
     * If the creator function is supplied, it should be a function that
     * takes no parameters and returns an initialized object of the proper
     * type for the collection.
     * @return {?}
     */
    get newItemCreator() {
        return this._itemCreator;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set newItemCreator(value) {
        this._itemCreator = asFunction(value);
    }
    /**
     * Gets or sets a function used to convert values when sorting.
     *
     * If provided, the function should take as parameters a
     * \@see:SortDescription, a data item, and a value to convert,
     * and should return the converted value.
     *
     * This property provides a way to customize sorting. For example,
     * the \@see:FlexGrid control uses it to sort mapped columns by
     * display value instead of by raw value.
     *
     * For example, the code below causes a \@see:CollectionView to
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
     * @return {?}
     */
    get sortConverter() {
        return this._srtCvt;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortConverter(value) {
        if (value != this._srtCvt) {
            this._srtCvt = asFunction(value, true);
        }
    }
    /**
     * Returns true if the caller queries for a supported interface.
     *
     * @param {?} interfaceName Name of the interface to look for.
     * @return {?}
     */
    implementsInterface(interfaceName) {
        switch (interfaceName) {
            case 'ICollectionView':
            case 'IEditableCollectionView':
            case 'IPagedCollectionView':
            case 'INotifyCollectionChanged':
                return true;
        }
        return false;
    }
    /**
     * Gets or sets a value that determines whether the control should
     * track changes to the data.
     *
     * If \@see:trackChanges is set to true, the \@see:CollectionView keeps
     * track of changes to the data and exposes them through the
     * \@see:itemsAdded, \@see:itemsRemoved, and \@see:itemsEdited collections.
     *
     * Tracking changes is useful in situations where you need to to update
     * the server after the user has confirmed that the modifications are
     * valid.
     *
     * After committing or cancelling changes, use the \@see:clearChanges method
     * to clear the \@see:itemsAdded, \@see:itemsRemoved, and \@see:itemsEdited
     * collections.
     *
     * The \@see:CollectionView only tracks changes made when the proper
     * \@see:CollectionView methods are used (\@see:editItem/\@see:commitEdit,
     * \@see:addNew/@see:commitNew, and \@see:remove).
     * Changes made directly to the data are not tracked.
     * @return {?}
     */
    get trackChanges() {
        return this._trackChanges;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trackChanges(value) {
        this._trackChanges = asBoolean(value);
    }
    /**
     * Gets an \@see:ObservableArray containing the records that were added to
     * the collection since \@see:changeTracking was enabled.
     * @return {?}
     */
    get itemsAdded() {
        return this._chgAdded;
    }
    /**
     * Gets an \@see:ObservableArray containing the records that were removed from
     * the collection since \@see:changeTracking was enabled.
     * @return {?}
     */
    get itemsRemoved() {
        return this._chgRemoved;
    }
    /**
     * Gets an \@see:ObservableArray containing the records that were edited in
     * the collection since \@see:changeTracking was enabled.
     * @return {?}
     */
    get itemsEdited() {
        return this._chgEdited;
    }
    /**
     * Clears all changes by removing all items in the \@see:itemsAdded,
     * \@see:itemsRemoved, and \@see:itemsEdited collections.
     *
     * Call this method after committing changes to the server or
     * after refreshing the data from the server.
     * @return {?}
     */
    clearChanges() {
        this._chgAdded.clear();
        this._chgRemoved.clear();
        this._chgEdited.clear();
    }
    /**
     * Raises the \@see:collectionChanged event.
     *
     * @param {?=} e Contains a description of the change.
     * @return {?}
     */
    onCollectionChanged(e = NotifyCollectionChangedEventArgs.reset) {
        this.collectionChanged.emit(e);
    }
    /**
     * @param {?=} action
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    _raiseCollectionChanged(action = NotifyCollectionChangedAction.Reset, item, index) {
        //console.log('** collection changed: ' + NotifyCollectionChangedAction[action] + ' **');
        const /** @type {?} */ e = new NotifyCollectionChangedEventArgs(action, item, [], []);
        this.onCollectionChanged(e);
    }
    /**
     * Gets a value that indicates whether this view supports filtering via the
     * \@see:filter property.
     * @return {?}
     */
    get canFilter() {
        return this._canFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canFilter(value) {
        this._canFilter = asBoolean(value);
    }
    /**
     * Gets a value that indicates whether this view supports grouping via the
     * \@see:groupDescriptions property.
     * @return {?}
     */
    get canGroup() {
        return this._canGroup;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canGroup(value) {
        this._canGroup = asBoolean(value);
    }
    /**
     * Gets a value that indicates whether this view supports sorting via the
     * \@see:sortDescriptions property.
     * @return {?}
     */
    get canSort() {
        return this._canSort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canSort(value) {
        this._canSort = asBoolean(value);
    }
    /**
     * Gets or sets the current item in the view.
     * @return {?}
     */
    get currentItem() {
        return this._pgView && this._idx > -1 && this._idx < this._pgView.length
            ? this._pgView[this._idx]
            : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentItem(value) {
        this.moveCurrentTo(value);
    }
    /**
     * Gets the ordinal position of the current item in the view.
     * @return {?}
     */
    get currentPosition() {
        return this._idx;
    }
    /**
     * Gets or sets a callback used to determine if an item is suitable for
     * inclusion in the view.
     *
     * The callback function should return true if the item passed in as a
     * parameter should be included in the view.
     *
     * NOTE: If the filter function needs a scope (i.e. a meaningful 'this'
     * value) remember to set the filter using the 'bind' function to  specify
     * the 'this' object. For example:
     * <pre>
     *   collectionView.filter = this._filter.bind(this);
     * </pre>
     * @return {?}
     */
    get filter() {
        return this._filter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set filter(value) {
        if (this._filter != value) {
            this._filter = (asFunction(value));
            if (this.canFilter) {
                this.refresh();
            }
        }
    }
    /**
     * Gets a collection of \@see:GroupDescription objects that describe how the
     * items in the collection are grouped in the view.
     * @return {?}
     */
    get groupDescriptions() {
        return this._grpDesc;
    }
    /**
     * Gets an array of \@see:CollectionViewGroup objects that represents the
     * top-level groups.
     * @return {?}
     */
    get groups() {
        this._groups = this.canGroup ? this._createGroups(this._view) : null;
        return this._groups;
    }
    /**
     * Gets a value that indicates whether this view contains no items.
     * @return {?}
     */
    get isEmpty() {
        return this._pgView.length == 0;
    }
    /**
     * Gets a collection of \@see:SortDescription objects that describe how the items
     * in the collection are sorted in the view.
     * @return {?}
     */
    get sortDescriptions() {
        return this._srtDsc;
    }
    /**
     * Gets or sets the underlying (unfiltered and unsorted) collection.
     * @return {?}
     */
    get sourceCollection() {
        return this._src;
    }
    /**
     * @param {?} sourceCollection
     * @return {?}
     */
    set sourceCollection(sourceCollection) {
        if (sourceCollection != this._src) {
            // keep track of current index
            const /** @type {?} */ index = this.currentPosition;
            // commit pending changes
            this.commitEdit();
            this.commitNew();
            // disconnect old source
            //todo ###remove me###
            //if (this._ncc != null) {
            //    this._ncc.collectionChanged.removeHandler(this._sourceChanged);
            //}
            // connect new source
            this._src = asArray(sourceCollection, false);
            this._ncc = (tryCast(this._src, 'INotifyCollectionChanged'));
            if (this._ncc) {
                this._ncc.collectionChanged.subscribe(this._sourceChanged.bind(this));
            }
            // clear any changes
            this.clearChanges();
            // refresh view
            this.refresh();
            console.log("collection_view_move_current_first");
            this.moveCurrentToFirst();
            // if we have no items, notify listeners that the current index changed
            if (this.currentPosition < 0 && index > -1) {
                this.onCurrentChanged();
            }
        }
    }
    /**
     * @param {?} s
     * @param {?} e
     * @return {?}
     */
    _sourceChanged(s, e) {
        if (this._updating <= 0) {
            this.refresh(); // TODO: optimize
        }
    }
    /**
     * Returns a value indicating whether a given item belongs to this view.
     *
     * @param {?} item Item to seek.
     * @return {?}
     */
    contains(item) {
        return this._pgView.indexOf(item) > -1;
    }
    /**
     * Sets the specified item to be the current item in the view.
     *
     * @param {?} item Item that will become current.
     * @return {?}
     */
    moveCurrentTo(item) {
        return this.moveCurrentToPosition(this._pgView.indexOf(item));
    }
    /**
     * Sets the first item in the view as the current item.
     * @return {?}
     */
    moveCurrentToFirst() {
        return this.moveCurrentToPosition(0);
    }
    /**
     * Sets the last item in the view as the current item.
     * @return {?}
     */
    moveCurrentToLast() {
        return this.moveCurrentToPosition(this._pgView.length - 1);
    }
    /**
     * Sets the item after the current item in the view as the current item.
     * @return {?}
     */
    moveCurrentToNext() {
        return this.moveCurrentToPosition(this._idx + 1);
    }
    /**
     * Sets the item at the specified index in the view as the current item.
     *
     * @param {?} index Index of the item that will become current.
     * @return {?}
     */
    moveCurrentToPosition(index) {
        if (index >= -1 && index < this._pgView.length) {
            const /** @type {?} */ e = new CancelEventArgs();
            if (this._idx != index && this.onCurrentChanging(e)) {
                // when moving away from current edit/new item, commit
                if (this._edtItem && this._pgView[index] != this._edtItem) {
                    this.commitEdit();
                }
                if (this._newItem && this._pgView[index] != this._newItem) {
                    this.commitNew();
                }
                // update currency
                this._idx = index;
                this.onCurrentChanged();
            }
        }
        return this._idx == index;
    }
    /**
     * Sets the item before the current item in the view as the current item.
     * @return {?}
     */
    moveCurrentToPrevious() {
        return this.moveCurrentToPosition(this._idx - 1);
    }
    /**
     * Re-creates the view using the current sort, filter, and group parameters.
     * @return {?}
     */
    refresh() {
        // not while updating, adding, or editing
        if (this._updating > 0 || this._newItem || this._edtItem) {
            return;
        }
        // perform the refresh
        this._performRefresh();
        // notify listeners
        this.onCollectionChanged();
    }
    /**
     * @return {?}
     */
    _performRefresh() {
        // benchmark
        //var start = new Date();
        // save current item
        const /** @type {?} */ current = this.currentItem;
        // create filtered view
        if (!this._src) {
            this._view = [];
        }
        else if (!this._filter || !this.canFilter) {
            this._view = (this._srtDsc.length > 0 && this.canSort)
                ? this._src.slice(0) // clone source array
                : this._src; // don't waste time cloning
        }
        else {
            this._view = this._performFilter(this._src);
        }
        // apply sort
        if (this._srtDsc.length > 0 && this.canSort) {
            this._performSort(this._view);
        }
        // apply grouping
        this._groups = this.canGroup ? this._createGroups(this._view) : null;
        this._fullGroups = this._groups;
        if (this._groups) {
            this._view = this._mergeGroupItems(this._groups);
        }
        // apply paging to view
        this._pgIdx = clamp(this._pgIdx, 0, this.pageCount - 1);
        this._pgView = this._getPageView();
        // update groups to take paging into account
        if (this._groups && this.pageCount > 1) {
            this._groups = this._createGroups(this._pgView);
            this._mergeGroupItems(this._groups);
        }
        // restore current item
        let /** @type {?} */ index = this._pgView.indexOf(current);
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
        //var now = new Date();
        //console.log('refreshed in ' + (now.getTime() - start.getTime()) / 1000 + ' seconds');
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _performSort(items) {
        this._view.sort(this._compareItems());
    }
    /**
     * @return {?}
     */
    _compareItems() {
        const /** @type {?} */ srtDsc = this._srtDsc, /** @type {?} */ srtCvt = this._srtCvt;
        var /** @type {?} */ init = true;
        return function (a, b) {
            for (let /** @type {?} */ i = 0; i < srtDsc.length; i++) {
                // get values
                const /** @type {?} */ sd = (srtDsc[i]);
                let /** @type {?} */ v1 = sd._bnd.getValue(a), /** @type {?} */ v2 = sd._bnd.getValue(b);
                // check for NaN (isNaN returns true for NaN but also for non-numbers)
                if (v1 !== v1)
                    v1 = null;
                if (v2 !== v2)
                    v2 = null;
                // ignore case when sorting unless the values are strings that only differ in case
                // (to keep the sort consistent, TFS 131135)
                if (typeof (v1) === 'string' && typeof (v2) === 'string') {
                    const /** @type {?} */ lc1 = v1.toLowerCase(), /** @type {?} */ lc2 = v2.toLowerCase();
                    if (lc1 != lc2) {
                        v1 = lc1;
                        v2 = lc2;
                    }
                }
                // convert values
                if (srtCvt) {
                    v1 = srtCvt(sd, a, v1, init);
                    v2 = srtCvt(sd, b, v2, false);
                    init = false;
                }
                // nulls always at the bottom (like excel)
                if (v1 != null && v2 == null)
                    return -1;
                if (v1 == null && v2 != null)
                    return +1;
                // compare the values (at last!)
                let /** @type {?} */ cmp = (v1 < v2) ? -1 : (v1 > v2) ? +1 : 0;
                if (cmp != 0) {
                    return sd.ascending ? +cmp : -cmp;
                }
            }
            return 0;
        };
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _performFilter(items) {
        return this.canFilter && this._filter
            ? items.filter(this._filter, this)
            : items;
    }
    /**
     * Raises the \@see:currentChanged event.
     * @param {?=} e
     * @return {?}
     */
    onCurrentChanged(e = EventArgs.empty) {
        this.currentChanged.emit(e);
    }
    /**
     * Raises the \@see:currentChanging event.
     *
     * @param {?} e \@see:CancelEventArgs that contains the event data.
     * @return {?}
     */
    onCurrentChanging(e) {
        this.currentChanging.emit(e);
        return !e.cancel;
    }
    /**
     * Gets items in the view.
     * @return {?}
     */
    get items() {
        return this._pgView;
    }
    /**
     * Suspend refreshes until the next call to \@see:endUpdate.
     * @return {?}
     */
    beginUpdate() {
        this._updating++;
    }
    /**
     * Resume refreshes suspended by a call to \@see:beginUpdate.
     * @return {?}
     */
    endUpdate() {
        this._updating--;
        if (this._updating <= 0) {
            this.refresh();
        }
    }
    /**
     * Gets a value that indicates whether notifications are currently suspended
     * (see \@see:beginUpdate and \@see:endUpdate).
     * @return {?}
     */
    get isUpdating() {
        return this._updating > 0;
    }
    /**
     * Executes a function within a \@see:beginUpdate/\@see:endUpdate block.
     *
     * The collection will not be refreshed until the function finishes.
     * This method ensures \@see:endUpdate is called even if the function throws.
     *
     * @param {?} fn Function to be executed without updates.
     * @return {?}
     */
    deferUpdate(fn) {
        try {
            this.beginUpdate();
            fn();
        }
        finally {
            this.endUpdate();
        }
    }
    /**
     * Gets a value that indicates whether a new item can be added to the collection.
     * @return {?}
     */
    get canAddNew() {
        return this._canAddNew;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canAddNew(value) {
        this._canAddNew = asBoolean(value);
    }
    /**
     * Gets a value that indicates whether the collection view can discard pending changes
     * and restore the original values of an edited object.
     * @return {?}
     */
    get canCancelEdit() {
        return this._canCancelEdit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canCancelEdit(value) {
        this._canCancelEdit = asBoolean(value);
    }
    /**
     * Gets a value that indicates whether items can be removed from the collection.
     * @return {?}
     */
    get canRemove() {
        return this._canRemove;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canRemove(value) {
        this._canRemove = asBoolean(value);
    }
    /**
     * Gets the item that is being added during the current add transaction.
     * @return {?}
     */
    get currentAddItem() {
        return this._newItem;
    }
    /**
     * Gets the item that is being edited during the current edit transaction.
     * @return {?}
     */
    get currentEditItem() {
        return this._edtItem;
    }
    /**
     * Gets a value that indicates whether an add transaction is in progress.
     * @return {?}
     */
    get isAddingNew() {
        return this._newItem != null;
    }
    /**
     * Gets a value that indicates whether an edit transaction is in progress.
     * @return {?}
     */
    get isEditingItem() {
        return this._edtItem != null;
    }
    /**
     * Creates a new item and adds it to the collection.
     *
     * This method takes no parameters. It creates a new item, adds it to the
     * collection, and prevents refresh operations until the new item is
     * committed using the \@see:commitNew method or canceled using the
     * \@see:cancelNew method.
     *
     * The code below shows how the \@see:addNew method is typically used:
     *
     * <pre>
     * // create the new item, add it to the collection
     * var newItem = view.addNew();
     * // initialize the new item
     * newItem.id = getFreshId();
     * newItem.name = 'New Customer';
     * // commit the new item so the view can be refreshed
     * view.commitNew();
     * </pre>
     *
     * You can also add new items by pushing them into the \@see:sourceCollection
     * and then calling the \@see:refresh method. The main advantage of \@see:addNew
     * is in user-interactive scenarios (like adding new items in a data grid),
     * because it gives users the ability to cancel the add operation. It also
     * prevents the new item from being sorted or filtered out of view until the
     * add operation is committed.
     *
     * @return {?} The item that was added to the collection.
     */
    addNew() {
        // sanity
        if (arguments.length > 0) {
            assert(false, 'addNew does not take any parameters, it creates the new items.');
        }
        // commit pending changes
        this.commitEdit();
        this.commitNew();
        // honor canAddNew
        if (!this.canAddNew) {
            assert(false, 'cannot add items (canAddNew == false).');
            return null;
        }
        // create new item
        let /** @type {?} */ item = null;
        if (this.newItemCreator) {
            item = this.newItemCreator();
        }
        else if (this.sourceCollection && this.sourceCollection.length) {
            item = this.sourceCollection[0].constructor();
        }
        else {
            item = {};
        }
        if (item != null) {
            // remember the new item
            this._newItem = item;
            // add the new item to the collection
            this._updating++;
            this._src.push(item); // **
            this._updating--;
            // add the new item to the bottom of the current view
            if (this._pgView != this._src) {
                this._pgView.push(item);
            }
            // add the new item to the last group and to the data items
            if (this.groups && this.groups.length) {
                let /** @type {?} */ g = this.groups[this.groups.length - 1];
                g.items.push(item);
                while (g.groups && g.groups.length) {
                    g = g.groups[g.groups.length - 1];
                    g.items.push(item);
                }
            }
            // notify listeners
            this._raiseCollectionChanged(NotifyCollectionChangedAction.Add, item, this._pgView.length - 1);
            // select the new item
            this.moveCurrentTo(item);
        }
        // done
        return this._newItem;
    }
    /**
     * Ends the current edit transaction and, if possible,
     * restores the original value to the item.
     * @return {?}
     */
    cancelEdit() {
        const /** @type {?} */ item = this._edtItem;
        if (item != null) {
            this._edtItem = null;
            // honor canCancelEdit
            if (!this.canCancelEdit) {
                assert(false, 'cannot cancel edits (canCancelEdit == false).');
                return;
            }
            // check that we can do this (TFS 110168)
            const /** @type {?} */ index = this._src.indexOf(item);
            if (index < 0 || !this._edtClone) {
                return;
            }
            // restore original item value
            this._extend(this._src[index], this._edtClone);
            this._edtClone = null;
            // notify listeners
            this._raiseCollectionChanged(NotifyCollectionChangedAction.Change, item, index);
        }
    }
    /**
     * Ends the current add transaction and discards the pending new item.
     * @return {?}
     */
    cancelNew() {
        const /** @type {?} */ item = this._newItem;
        if (item != null) {
            this.remove(item);
        }
    }
    /**
     * Ends the current edit transaction and saves the pending changes.
     * @return {?}
     */
    commitEdit() {
        console.log("collection_view_commit_edit_start");
        const /** @type {?} */ item = this._edtItem;
        if (item != null) {
            // check if anything really changed
            let /** @type {?} */ sameContent = this._sameContent(item, this._edtClone);
            // clean up state
            this._edtItem = null;
            this._edtClone = null;
            // refresh to update the edited item
            const /** @type {?} */ index = this._pgView.indexOf(item);
            const /** @type {?} */ digest = this._digest;
            this._performRefresh();
            // track changes (before notifying)
            if (this._trackChanges == true && !sameContent) {
                this._trackItemChanged(item);
            }
            // notify (single item change or full refresh)
            if (this._pgView.indexOf(item) == index && digest == this._digest) {
                this._raiseCollectionChanged(NotifyCollectionChangedAction.Change, item, index);
            }
            else {
                this._raiseCollectionChanged(); // full refresh
            }
        }
        console.log("collection_view_commit_edit_finish");
    }
    /**
     * Track changes applied to an item (not necessarily the current edit item).
     *
     * @param {?} item Item that has been changed.
     * @return {?}
     */
    _trackItemChanged(item) {
        if (this._trackChanges) {
            let /** @type {?} */ idx = this._chgEdited.indexOf(item);
            if (idx < 0 && this._chgAdded.indexOf(item) < 0) {
                this._chgEdited.push(item);
            }
            else if (idx > -1) {
                var /** @type {?} */ e = new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Change, item, [], []);
                this._chgEdited.onCollectionChanged(e);
            }
            else {
                idx = this._chgAdded.indexOf(item);
                if (idx > -1) {
                    var /** @type {?} */ e = new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Change, item, [], []);
                    this._chgAdded.onCollectionChanged(e);
                }
            }
        }
    }
    /**
     * Ends the current add transaction and saves the pending new item.
     * @return {?}
     */
    commitNew() {
        const /** @type {?} */ item = this._newItem;
        if (item != null) {
            // clean up state
            this._newItem = null;
            // refresh to update the new item
            const /** @type {?} */ index = this._pgView.indexOf(item);
            const /** @type {?} */ digest = this._digest;
            this._performRefresh();
            // track changes (before notifying)
            if (this._trackChanges == true) {
                const /** @type {?} */ idx = this._chgEdited.indexOf(item);
                if (idx > -1) {
                    this._chgEdited.removeAt(idx);
                }
                if (this._chgAdded.indexOf(item) < 0) {
                    this._chgAdded.push(item);
                }
            }
            // notify (full refresh if the item moved)
            if (this._pgView.indexOf(item) == index && digest == this._digest) {
                this._raiseCollectionChanged(NotifyCollectionChangedAction.Change, item, index);
            }
            else {
                this._raiseCollectionChanged(); // full refresh
            }
        }
    }
    /**
     * Begins an edit transaction of the specified item.
     *
     * @param {?} item Item to be edited.
     * @return {?}
     */
    editItem(item) {
        // commit pending changes if not already editing/adding this item
        if (item != this._edtItem && this.moveCurrentTo(item)) {
            this.commitEdit();
            this._edtItem = item;
            this._edtClone = {};
            this._extend(this._edtClone, this._edtItem);
        }
    }
    /**
     * Removes the specified item from the collection.
     *
     * @param {?} item Item to be removed from the collection.
     * @return {?}
     */
    remove(item) {
        console.log("collection_view_remove_start");
        console.log("collection_view_src:" + this._src.length);
        console.log("collection_view_pgView:" + this._pgView.length);
        console.log("collection_view_view:" + this._view.length);
        // handle cases where the user is adding or editing items
        let /** @type {?} */ pendingNew = (item == this._newItem);
        if (pendingNew) {
            this._newItem = null;
        }
        if (item == this._edtItem) {
            this.cancelEdit();
        }
        // honor canRemove
        if (!this.canRemove) {
            assert(false, 'cannot remove items (canRemove == false).');
            return;
        }
        // find item
        const /** @type {?} */ index = this._src.indexOf(item);
        if (index > -1) {
            // get current item to notify later
            const /** @type {?} */ current = this.currentItem;
            // remove item from source collection
            this._updating++;
            this._src.splice(index, 1); // **
            this._updating--;
            // refresh to update the edited item
            //var index = this._pgView.indexOf(item);
            const /** @type {?} */ digest = this._digest;
            this._performRefresh();
            // track changes (before notifying)
            if (this._trackChanges == true) {
                // removing something that was added
                const /** @type {?} */ idxAdded = this._chgAdded.indexOf(item);
                if (idxAdded > -1) {
                    this._chgAdded.removeAt(idxAdded);
                }
                // removing something that was edited
                const /** @type {?} */ idxEdited = this._chgEdited.indexOf(item);
                if (idxEdited > -1) {
                    this._chgEdited.removeAt(idxEdited);
                }
                // add to removed list unless it was pending and not added in this session
                const /** @type {?} */ idxRemoved = this._chgRemoved.indexOf(item);
                if (idxRemoved < 0 && !pendingNew && idxAdded < 0) {
                    this._chgRemoved.push(item);
                }
            }
            // notify (item removed or full refresh) (TFS 85001)
            const /** @type {?} */ paged = this.pageSize > 0 && this._pgIdx > -1;
            if (paged || digest != this._getGroupsDigest(this.groups)) {
                console.log("collection_view_before_raiseCollectionChanged_1");
                this._raiseCollectionChanged();
            }
            else {
                console.log("collection_view_before_raiseCollectionChanged_2");
                this._raiseCollectionChanged(NotifyCollectionChangedAction.Remove, item, index);
            }
            // raise currentChanged if needed
            if (this.currentItem !== current) {
                console.log("collection_view_before_on_current_changed_3");
                this.onCurrentChanged();
            }
        }
        console.log("collection_view_pgView:" + this._pgView.length);
        console.log("collection_view_view:" + this._view.length);
        console.log("collection_view_src:" + this._src.length);
        console.log("collection_view_remove_finish");
    }
    /**
     * Removes the item at the specified index from the collection.
     *
     * @param {?} index Index of the item to be removed from the collection.
     * The index is relative to the view, not to the source collection.
     * @return {?}
     */
    removeAt(index) {
        index = asInt(index);
        this.remove(this._pgView[index]);
    }
    /**
     * @param {?} dst
     * @param {?} src
     * @return {?}
     */
    _extend(dst, src) {
        for (let /** @type {?} */ key in src) {
            dst[key] = src[key];
        }
    }
    /**
     * @param {?} dst
     * @param {?} src
     * @return {?}
     */
    _sameContent(dst, src) {
        for (var /** @type {?} */ key in src) {
            if (!this._sameValue(dst[key], src[key])) {
                return false;
            }
        }
        for (var /** @type {?} */ key in dst) {
            if (!this._sameValue(dst[key], src[key])) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} v1
     * @param {?} v2
     * @return {?}
     */
    _sameValue(v1, v2) {
        return v1 == v2 || DateTime.equals(v1, v2);
    }
    /**
     * Gets a value that indicates whether the \@see:pageIndex value can change.
     * @return {?}
     */
    get canChangePage() {
        return this._canChangePage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set canChangePage(value) {
        this._canChangePage = asBoolean(value);
    }
    /**
     * Gets a value that indicates whether the page index is changing.
     * @return {?}
     */
    get isPageChanging() {
        return false;
    }
    /**
     * Gets the total number of items in the view taking paging into account.
     * @return {?}
     */
    get itemCount() {
        return this._pgView.length;
    }
    /**
     * Gets the zero-based index of the current page.
     * @return {?}
     */
    get pageIndex() {
        return this._pgIdx;
    }
    /**
     * Gets or sets the number of items to display on a page.
     * @return {?}
     */
    get pageSize() {
        return this._pgSz;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set pageSize(value) {
        if (value != this._pgSz) {
            this._pgSz = asInt(value);
            this.refresh();
        }
    }
    /**
     * Gets the total number of items in the view before paging is applied.
     * @return {?}
     */
    get totalItemCount() {
        return this._view.length;
    }
    /**
     * Gets the total number of pages.
     * @return {?}
     */
    get pageCount() {
        return this.pageSize ? Math.ceil(this.totalItemCount / this.pageSize) : 1;
    }
    /**
     * Sets the first page as the current page.
     *
     * @return {?} True if the page index was changed successfully.
     */
    moveToFirstPage() {
        return this.moveToPage(0);
    }
    /**
     * Sets the last page as the current page.
     *
     * @return {?} True if the page index was changed successfully.
     */
    moveToLastPage() {
        return this.moveToPage(this.pageCount - 1);
    }
    /**
     * Moves to the page after the current page.
     *
     * @return {?} True if the page index was changed successfully.
     */
    moveToNextPage() {
        return this.moveToPage(this.pageIndex + 1);
    }
    /**
     * Moves to the page at the specified index.
     *
     * @param {?} index Index of the page to move to.
     * @return {?} True if the page index was changed successfully.
     */
    moveToPage(index) {
        const /** @type {?} */ newIndex = clamp(index, 0, this.pageCount - 1);
        if (newIndex != this._pgIdx) {
            // honor canChangePage
            if (!this.canChangePage) {
                assert(false, 'cannot change pages (canChangePage == false).');
            }
            // raise pageChanging
            const /** @type {?} */ e = new PageChangingEventArgs(newIndex);
            if (this.onPageChanging(e)) {
                // change the page
                this._pgIdx = newIndex;
                this._pgView = this._getPageView();
                this._idx = 0;
                // raise pageChanged and collectionChanged, or refresh if grouping
                if (!this.groupDescriptions || this.groupDescriptions.length == 0) {
                    this.onPageChanged();
                    this.onCollectionChanged();
                }
                else {
                    this.refresh();
                }
            }
        }
        return this._pgIdx == index;
    }
    /**
     * Moves to the page before the current page.
     *
     * @return {?} True if the page index was changed successfully.
     */
    moveToPreviousPage() {
        return this.moveToPage(this.pageIndex - 1);
    }
    /**
     * Raises the \@see:pageChanged event.
     * @param {?=} e
     * @return {?}
     */
    onPageChanged(e = EventArgs.empty) {
        this.pageChanged.raise(this, e);
    }
    /**
     * Raises the \@see:pageChanging event.
     *
     * @param {?} e \@see:PageChangingEventArgs that contains the event data.
     * @return {?}
     */
    onPageChanging(e) {
        this.pageChanging.raise(this, e);
        return !e.cancel;
    }
    /**
     * @param {?} g
     * @return {?}
     */
    _getFullGroup(g) {
        // look for the group by level and name
        // this gets the full (unpaged) and updated group (TFS 109119)
        const /** @type {?} */ fg = this._getGroupByPath(this._fullGroups, g.level, g._path);
        if (fg != null) {
            g = fg;
        }
        // return the group
        return g;
    }
    /**
     * @param {?} groups
     * @param {?} level
     * @param {?} path
     * @return {?}
     */
    _getGroupByPath(groups, level, path) {
        for (let /** @type {?} */ i = 0; i < groups.length; i++) {
            let /** @type {?} */ g = groups[i];
            if (g.level == level && g._path == path) {
                return g;
            }
            if (g.level < level && g._path.indexOf(path) == 0) {
                g = this._getGroupByPath(g.items, level, path);
                if (g != null) {
                    return g;
                }
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    _getPageView() {
        // not paging? return the whole view
        if (this.pageSize <= 0 || this._pgIdx < 0) {
            return this._view;
        }
        // slice the current page out of the view
        const /** @type {?} */ start = this._pgSz * this._pgIdx, /** @type {?} */ end = Math.min(start + this._pgSz, this._view.length);
        return this._view.slice(start, end);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    _createGroups(items) {
        // not grouping? return null
        if (!this._grpDesc || !this._grpDesc.length) {
            return null;
        }
        // build group tree
        const /** @type {?} */ root = [], /** @type {?} */ maps = {};
        let /** @type {?} */ map = null;
        for (let /** @type {?} */ i = 0; i < items.length; i++) {
            // get the item
            const /** @type {?} */ item = items[i];
            let /** @type {?} */ groups = root;
            const /** @type {?} */ levels = this._grpDesc.length;
            // add this item to the tree
            let /** @type {?} */ path = '';
            for (let /** @type {?} */ level = 0; level < levels; level++) {
                // get the group name for this level
                const /** @type {?} */ gd = this._grpDesc[level], /** @type {?} */ name = gd.groupNameFromItem(item, level), /** @type {?} */ last = level == levels - 1;
                // get the group map for this level (optimization)
                map = maps[path];
                if (!map && isPrimitive(name)) {
                    map = {};
                    maps[path] = map;
                }
                // get or create the group
                const /** @type {?} */ group = this._getGroup(gd, groups, map, name, level, last);
                // keep group path (all names in the hierarchy)
                path += '/' + name;
                group._path = path;
                // add data items to last level groups
                if (last) {
                    group.items.push(item);
                }
                // move on to the next group
                groups = group.groups;
            }
        }
        // done
        return root;
    }
    /**
     * @param {?} groups
     * @return {?}
     */
    _getGroupsDigest(groups) {
        let /** @type {?} */ digest = '';
        for (let /** @type {?} */ i = 0; groups != null && i < groups.length; i++) {
            const /** @type {?} */ g = groups[i];
            digest += '{' + g.name + ':' + (g.items ? g.items.length : '*');
            if (g.groups.length > 0) {
                digest += ',';
                digest += this._getGroupsDigest(g.groups);
            }
            digest += '}';
        }
        return digest;
    }
    /**
     * @param {?} groups
     * @return {?}
     */
    _mergeGroupItems(groups) {
        const /** @type {?} */ items = [];
        for (let /** @type {?} */ i = 0; i < groups.length; i++) {
            const /** @type {?} */ g = groups[i];
            if (!g._isBottomLevel) {
                const /** @type {?} */ groupItems = this._mergeGroupItems(g.groups);
                g._items.push.apply(g._items, groupItems);
            }
            items.push.apply(items, g._items);
        }
        return items;
    }
    /**
     * @param {?} gd
     * @param {?} groups
     * @param {?} map
     * @param {?} name
     * @param {?} level
     * @param {?} isBottomLevel
     * @return {?}
     */
    _getGroup(gd, groups, map, name, level, isBottomLevel) {
        let /** @type {?} */ g;
        // find existing group
        if (map && isPrimitive(name)) {
            g = map[name];
            if (g) {
                return g;
            }
        }
        else {
            for (let /** @type {?} */ i = 0; i < groups.length; i++) {
                if (gd.namesMatch(groups[i].name, name)) {
                    return groups[i];
                }
            }
        }
        // not found, create now
        const /** @type {?} */ group = new CollectionViewGroup(gd, name, level, isBottomLevel);
        groups.push(group);
        // add group to map
        if (map) {
            map[name] = group;
        }
        // done
        return group;
    }
    /**
     * @return {?}
     */
    completeAllStream() {
        this.currentChanged.complete();
        this.collectionChanged.complete();
    }
    /**
     * @return {?}
     */
    [$$observable]() {
        return this;
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    _subscribe(subscriber) {
        subscriber.next(this.items);
        subscriber.complete();
    }
}

/**
 * Asserts that a value is an \@see:ICollectionView or an Array.
 *
 * @param {?} value Array or \@see:ICollectionView.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The \@see:ICollectionView that was passed in or a \@see:CollectionView
 * created from the array that was passed in.
 */
function asCollectionView(value, nullOK = true) {
    if (value == null && nullOK) {
        return null;
    }
    const /** @type {?} */ cv = tryCast(value, 'ICollectionView');
    if (cv != null) {
        return cv;
    }
    if (!isArray(value)) {
        assert(false, 'Array or ICollectionView expected.');
    }
    return new CollectionView(value);
}

/**
 * Asserts that a value is a Date.
 *
 * @param {?} value Value supposed to be a Date.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The Date passed in.
 */
function asDate(value, nullOK = false) {
    assert((nullOK && value == null) || isDate(value), 'Date expected.');
    return value;
}

/**
 * Asserts that a value is a valid setting for an enumeration.
 *
 * @param {?} value Value supposed to be a member of the enumeration.
 * @param {?} enumType Enumeration to test for.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The value passed in.
 */

/**
 * @param {?} value
 * @return {?}
 */
function isInt(value) {
    return isNumber(value) && value == Math.round(value);
}

/**
 * Asserts that a value is an integer.
 *
 * @param {?} value Value supposed to be an integer.
 * @param {?=} nullOK Whether null values are acceptable.
 * @param {?=} positive Whether to accept only positive integers.
 * @return {?} The number passed in.
 */
function asInt(value, nullOK = false, positive = false) {
    assert((nullOK && value == null) || isInt(value), 'Integer expected.');
    if (positive && value && value < 0)
        throw 'Positive integer expected.';
    return value;
}

/**
 * @param {?} value
 * @return {?}
 */
function isString(value) {
    return typeof (value) == 'string';
}

/**
 * Asserts that a value is a string.
 *
 * @param {?} value Value supposed to be a string.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The string passed in.
 */
function asString(value, nullOK = true) {
    assert((nullOK && value == null) || isString(value), 'String expected.');
    return value;
}

/**
 * Casts a value to a type if possible.
 *
 * @param {?} value Value to cast.
 * @param {?} type Type or interface name to cast to.
 * @return {?} The value passed in if the cast was successful, null otherwise.
 */
function tryCast$1(value, type) {
    // null doesn't implement anything
    if (value == null) {
        return null;
    }
    // test for interface implementation (IQueryInterface)
    if (isString(type)) {
        return isFunction(value.implementsInterface) && value.implementsInterface(type) ? value : null;
    }
    // regular type test
    return value instanceof type ? value : null;
}
/**
 * Checks whether an \@see:ICollectionView is defined and not empty.
 *
 * @param {?} value \@see:ICollectionView to check.
 * @return {?}
 */

/**
 * Sets the start and end positions of a selection in a text field.
 *
 * This method is similar to the native \@see:setSelectionRange method
 * in HTMLInputElement objects, except it checks for conditions that
 * may cause exceptions (element not in the DOM, disabled, or hidden).
 *
 * @param {?} e
 * @param {?} start Offset into the text field for the start of the selection.
 * @param {?=} end Offset into the text field for the end of the selection.
 * @return {?}
 */

/**
 * Gets the bounding rectangle of an element in page coordinates.
 *
 * This is similar to the <b>getBoundingClientRect</b> function,
 * except that uses window coordinates, which change when the
 * document scrolls.
 * @param {?} e
 * @return {?}
 */

/**
 * Calculates an aggregate value from the values in an array.
 *
 * @param {?} aggType Type of aggregate to calculate.
 * @param {?} items Array with the items to aggregate.
 * @param {?=} binding Name of the property to aggregate on (in case the items are not simple values).
 * @return {?}
 */

/**
 * Asserts that a value is an instance of a given type.
 *
 * @param {?} value Value to be checked.
 * @param {?} type Type of value expected.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The value passed in.
 */
function asType(value, type, nullOK = false) {
    value = tryCast$1(value, type);
    assert(nullOK || value != null, type + ' expected.');
    return value;
}

/**
 * Creates an element from an HTML string.
 *
 * @param {?} html HTML fragment to convert into an HTMLElement.
 * @return {?} The new element.
 */
function createElement(html) {
    const /** @type {?} */ div = document.createElement('div');
    div.innerHTML = html;
    return (div.removeChild(div.firstChild));
}

/**
 * @return {?}
 */

/**
 * @return {?}
 */

/**
 * @return {?}
 */

/**
 * Checks whether an element has a class.
 *
 * @param {?} e Element to check.
 * @param {?} className Class to check for.
 * @return {?}
 */
function hasClass(e, className) {
    // note: using e.getAttribute('class') instead of e.classNames
    // so this works with SVG as well as regular HTML elements.
    if (e && e.getAttribute) {
        const /** @type {?} */ rx = new RegExp('\\b' + className + '\\b');
        return e && rx.test(e.getAttribute('class'));
    }
    return false;
}

/**
 * Adds a class to an element.
 *
 * @param {?} e Element that will have the class added.
 * @param {?} className Class to add to the element.
 * @return {?}
 */
function addClass(e, className) {
    // note: using e.getAttribute('class') instead of e.classNames
    // so this works with SVG as well as regular HTML elements.
    if (e && e.setAttribute && !hasClass(e, className)) {
        const /** @type {?} */ cn = e.getAttribute('class');
        e.setAttribute('class', cn ? cn + ' ' + className : className);
    }
}

/**
 * Finds the closest ancestor that satisfies a selector.
 *
 * @param {?} e Element where the search should start.
 * @param {?} selector A string containing a selector expression to match elements against.
 * @return {?} The nearest ancestor that satisfies the selector (including the original element), or null if not found.
 */

/**
 * Checks whether an HTML element contains another.
 *
 * @param {?} parent Parent element.
 * @param {?} child Child element.
 * @return {?} True if the parent element contains the child element.
 */
function contains(parent, child) {
    for (let /** @type {?} */ e = (child); e; e = e.parentNode) {
        if (e === parent)
            return true;
    }
    return false;
}
/**
 * @param {?} e
 * @return {?}
 */

/**
 * Removes a class from an element.
 *
 * @param {?} e Element that will have the class removed.
 * @param {?} className Class to remove form the element.
 * @return {?}
 */
function removeClass(e, className) {
    // note: using e.getAttribute('class') instead of e.classNames
    // so this works with SVG as well as regular HTML elements.
    if (e && e.setAttribute && hasClass(e, className)) {
        const /** @type {?} */ rx = new RegExp('\\s?\\b' + className + '\\b', 'g'), /** @type {?} */ cn = e.getAttribute('class');
        e.setAttribute('class', cn.replace(rx, ''));
    }
}

/**
 * Adds or removes a class to or from an element.
 *
 * @param {?} e Element that will have the class added.
 * @param {?} className Class to add or remove.
 * @param {?} addOrRemove Whether to add or remove the class.
 * Use true to add class to element and false to remove class from element.
 * @return {?}
 */
function toggleClass(e, className, addOrRemove) {
    if (addOrRemove) {
        addClass(e, className);
    }
    else {
        removeClass(e, className);
    }
}

/**
 * Enables or disables an element.
 *
 * @param {?} e Element to enable or disable.
 * @param {?} enable Whether to enable or disable the element.
 * @return {?}
 */
function enable(e, enable) {
    if (enable) {
        e.removeAttribute('disabled');
    }
    else {
        e.setAttribute('disabled', 'true');
    }
    toggleClass(e, 'wj-state-disabled', !enable);
}

/**
 * Gets an element from a jQuery-style selector.
 *
 * @param {?} selector An element, a query selector string, or a jQuery object.
 * @return {?}
 */
function getElement(selector) {
    if (selector instanceof HTMLElement)
        return selector;
    if (isString(selector))
        return (document.querySelector(selector));
    if (selector && selector.jquery)
        return (selector[0]);
    return null;
}

/**
 * Modifies the style of an element by applying the properties specified in an object.
 *
 * @param {?} e Element whose style will be modified.
 * @param {?} css Object containing the style properties to apply to the element.
 * @return {?}
 */

/**
 * Sets the text content of an element.
 *
 * @param {?} e Element that will have its content updated.
 * @param {?} text Plain text to be assigned to the element.
 * @return {?}
 */

/**
 * @param {?} value
 * @return {?}
 */

/**
 * @param {?} value
 * @return {?}
 */
function isPrimitive(value) {
    return isString(value) || isNumber(value) || isBoolean(value) || isDate(value);
}

/**
 * @param {?} value
 * @return {?}
 */

/**
 * @param {?} obj
 * @return {?}
 */

/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    if (value != null) {
        if (max != null && value > max)
            value = max;
        if (min != null && value < min)
            value = min;
    }
    return value;
}

/**
 * Rounds or truncates a number to a specified precision.
 *
 * @param {?} value Value to round or truncate.
 * @param {?} prec Number of decimal digits for the result.
 * @param {?} truncate Whether to truncate or round the original value.
 * @return {?}
 */
function toFixed(value, prec, truncate) {
    if (truncate) {
        var /** @type {?} */ s = value.toString(), /** @type {?} */ decPos = s.indexOf('.');
        if (decPos > -1) {
            s = s.substr(0, decPos + 1 + prec);
            value = parseFloat(s);
        }
    }
    else {
        var /** @type {?} */ s = value.toFixed(prec);
        value = parseFloat(s);
    }
    return value;
}

/**
 * Escapes a string by replacing HTML characters as text entities.
 *
 * Strings entered by uses should always be escaped before they are displayed
 * in HTML pages. This ensures page integrity and prevents HTML/javascript
 * injection attacks.
 *
 * @param {?} text Text to escape.
 * @return {?} An HTML-escaped version of the original string.
 */
function escapeHtml(text) {
    if (isString(text)) {
        text = text.replace(/[&<>"'\/]/g, function (s) {
            return _ENTITYMAP[s];
        });
    }
    return text;
}
const _ENTITYMAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};

/**
 * Converts a camel-cased string into a header-type string by capitalizing the first letter
 * and adding spaces before uppercase characters preceded by lower-case characters.
 *
 * For example, 'somePropertyName' becomes 'Some Property Name'.
 *
 * @param {?} text String to convert to header case.
 * @return {?}
 */

/**
 * @param {?} text
 * @return {?}
 */

/**
 * Gets the type of a value.
 *
 * @param {?} value Value to test.
 * @return {?} A \@see:DataType value representing the type of the value passed in.
 */

/**
 * Gets or sets an object that contains all localizable strings in the Wijmo library.
 *
 * The culture selector is a two-letter string that represents an
 * <a href='http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes'>ISO 639 culture</a>.
 */
let culture = {
    Globalize: {
        numberFormat: {
            NumberDecimalSeparator: '.',
            NumberGroupSeparator: ',',
            CurrencySymbol: '$',
            '.': '.',
            ',': ',',
            percent: { pattern: ['-n %', 'n %'] },
            currency: { decimals: 2, symbol: '$', pattern: ['($n)', '$n'] }
        },
        dateTimeFormat: {
            TimeSeparator: '/',
            DateSeparator: ':',
            '/': '/',
            ':': ':',
        },
        calendar: {
            '/': '/',
            ':': ':',
            firstDay: 0,
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysAbbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsAbbr: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            am: ['AM', 'A'],
            pm: ['PM', 'P'],
            eras: ['A.D.', 'B.C.'],
            patterns: {
                d: 'M/d/yyyy', D: 'dddd, MMMM dd, yyyy',
                f: 'dddd, MMMM dd, yyyy h:mm tt', F: 'dddd, MMMM dd, yyyy h:mm:ss tt',
                t: 'h:mm tt', T: 'h:mm:ss tt',
                M: 'MMMM d', m: 'MMMM d',
                Y: 'MMMM, yyyy', y: 'MMMM, yyyy',
                g: 'M/d/yyyy h:mm tt', G: 'M/d/yyyy h:mm:ss tt',
                s: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss',
                o: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss"."fffffffK',
                O: 'yyyy"-"MM"-"dd"T"HH":"mm":"ss"."fffffffK',
                U: 'dddd, MMMM dd, yyyy h:mm:ss tt'
            },
            fiscalYearOffsets: [-3, -3]
        }
    },
    MultiSelect: {
        itemsSelected: '{count:n0} items selected'
    },
    FlexGrid: {
        groupHeaderFormat: '{name}: <b>{value} </b>({count:n0} items)'
    },
    FlexGridFilter: {
        // filter
        ascending: '\u2191 Ascending',
        descending: '\u2193 Descending',
        apply: 'Apply',
        clear: 'Clear',
        conditions: 'Filter by Condition',
        values: 'Filter by Value',
        // value filter
        search: 'Search',
        selectAll: 'Select All',
        null: '(nothing)',
        // condition filter
        header: 'Show items where the value',
        and: 'And',
        or: 'Or',
        stringOperators: [
            { name: '(not set)', op: null },
            { name: 'Equals', op: 0 },
            { name: 'Does not equal', op: 1 },
            { name: 'Begins with', op: 6 },
            { name: 'Ends with', op: 7 },
            { name: 'Contains', op: 8 },
            { name: 'Does not contain', op: 9 }
        ],
        numberOperators: [
            { name: '(not set)', op: null },
            { name: 'Equals', op: 0 },
            { name: 'Does not equal', op: 1 },
            { name: 'Is Greater than', op: 2 },
            { name: 'Is Greater than or equal to', op: 3 },
            { name: 'Is Less than', op: 4 },
            { name: 'Is Less than or equal to', op: 5 }
        ],
        dateOperators: [
            { name: '(not set)', op: null },
            { name: 'Equals', op: 0 },
            { name: 'Is Before', op: 4 },
            { name: 'Is After', op: 3 }
        ],
        booleanOperators: [
            { name: '(not set)', op: null },
            { name: 'Equals', op: 0 },
            { name: 'Does not equal', op: 1 }
        ]
    }
};

/**
 * Provides date and time utilities.
 */
class DateTime {
    /**
     * Gets a new Date that adds the specified number of days to a given Date.
     *
     * @param {?} value Original date.
     * @param {?} days Number of days to add to the given date.
     * @return {?}
     */
    static addDays(value, days) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate() + days);
    }
    /**
     * Gets a new Date that adds the specified number of months to a given Date.
     *
     * @param {?} value Original date.
     * @param {?} months Number of months to add to the given date.
     * @return {?}
     */
    static addMonths(value, months) {
        return new Date(value.getFullYear(), value.getMonth() + months, value.getDate());
    }
    /**
     * Gets a new Date that adds the specified number of years to a given Date.
     *
     * @param {?} value Original date.
     * @param {?} years Number of years to add to the given date.
     * @return {?}
     */
    static addYears(value, years) {
        return new Date(value.getFullYear() + years, value.getMonth(), value.getDate());
    }
    /**
     * Gets a new Date that adds the specified number of hours to a given Date.
     *
     * @param {?} value Original date.
     * @param {?} hours Number of hours to add to the given date.
     * @return {?}
     */
    static addHours(value, hours) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours() + hours);
    }
    /**
     * Gets a new Date that adds the specified number of minutes to a given Date.
     *
     * @param {?} value Original date.
     * @param {?} minutes Number of minutes to add to the given date.
     * @return {?}
     */
    static addMinutes(value, minutes) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes() + minutes);
    }
    /**
     * Gets a new Date that adds the specified number of seconds to a given Date.
     *
     * @param {?} value Original date.
     * @param {?} seconds Number of seconds to add to the given date.
     * @return {?}
     */
    static addSeconds(value, seconds) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds() + seconds);
    }
    /**
     * Returns true if two Date objects refer to the same date (ignoring time).
     *
     * @param {?} d1 First date.
     * @param {?} d2 Second date.
     * @return {?}
     */
    static sameDate(d1, d2) {
        return isDate(d1) && isDate(d2) &&
            d1.getFullYear() == d2.getFullYear() &&
            d1.getMonth() == d2.getMonth() &&
            d1.getDate() == d2.getDate();
    }
    /**
     * Returns true if two Date objects refer to the same time (ignoring date).
     *
     * @param {?} d1 First date.
     * @param {?} d2 Second date.
     * @return {?}
     */
    static sameTime(d1, d2) {
        return isDate(d1) && isDate(d2) &&
            d1.getHours() == d2.getHours() &&
            d1.getMinutes() == d2.getMinutes() &&
            d1.getSeconds() == d2.getSeconds();
    }
    /**
     * Returns true if two Date objects refer to the same date and time.
     *
     * @param {?} d1 First date.
     * @param {?} d2 Second date.
     * @return {?}
     */
    static equals(d1, d2) {
        return isDate(d1) && isDate(d2) && d1.getTime() == d2.getTime();
    }
    /**
     * Gets a Date object with the date and time set on two Date objects.
     *
     * @param {?} date Date object that contains the date (day/month/year).
     * @param {?} time Date object that contains the time (hour:minute:second).
     * @return {?}
     */
    static fromDateTime(date, time) {
        if (!date && !time)
            return null;
        if (!date)
            date = time;
        if (!time)
            time = date;
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
    }
    /**
     * Converts a calendar date to a fiscal date using the current culture.
     *
     * @param {?} date Calendar date.
     * @param {?} govt Whether to use the government or corporate fiscal year.
     * @return {?}
     */
    static toFiscal(date, govt) {
        const /** @type {?} */ cal = culture.Globalize.calendar;
        return isArray(cal.fiscalYearOffsets)
            ? DateTime.addMonths(date, -cal.fiscalYearOffsets[govt ? 0 : 1])
            : date;
    }
    /**
     * Converts a fiscal year date to a calendar date using the current culture.
     *
     * @param {?} date Fiscal year date.
     * @param {?} govt Whether to use the government or corporate fiscal year.
     * @return {?}
     */
    static fromFiscal(date, govt) {
        const /** @type {?} */ cal = culture.Globalize.calendar;
        return isArray(cal.fiscalYearOffsets)
            ? DateTime.addMonths(date, +cal.fiscalYearOffsets[govt ? 0 : 1])
            : date;
    }
    /**
     * Creates a copy of a given Date object.
     *
     * @param {?} date Date object to copy.
     * @return {?}
     */
    static clone(date) {
        return DateTime.fromDateTime(date, date);
    }
}

/**
 * The Matrix class represents a transformation matrix that determines how to
 * map points from one coordinate space to another. You can perform various
 * graphical transformations on a display object by setting the properties of
 * a Matrix object, applying that Matrix object to the <code>matrix</code>
 * property of a Transform object, and then applying that Transform object as
 * the <code>transform</code> property of the display object. These
 * transformation functions include translation(<i>x</i> and <i>y</i>
 * repositioning), rotation, scaling, and skewing.
 *
 * <p>Together these types of transformations are known as <i>affine
 * transformations</i>. Affine transformations preserve the straightness of
 * lines while transforming, so that parallel lines stay parallel.</p>
 *
 * <p>To apply a transformation matrix to a display object, you create a
 * Transform object, set its <code>matrix</code> property to the
 * transformation matrix, and then set the <code>transform</code> property of
 * the display object to the Transform object. Matrix objects are also used as
 * parameters of some methods, such as the following:</p>
 *
 * <ul>
 *   <li>The <code>draw()</code> method of a BitmapData object</li>
 *   <li>The <code>beginBitmapFill()</code> method,
 * <code>beginGradientFill()</code> method, or
 * <code>lineGradientStyle()</code> method of a Graphics object</li>
 * </ul>
 *
 * <p>A transformation matrix object is a 3 x 3 matrix with the following
 * contents:</p>
 *
 * <p>In traditional transformation matrixes, the <code>u</code>,
 * <code>v</code>, and <code>w</code> properties provide extra capabilities.
 * The Matrix class can only operate in two-dimensional space, so it always
 * assumes that the property values <code>u</code> and <code>v</code> are 0.0,
 * and that the property value <code>w</code> is 1.0. The effective values of
 * the matrix are as follows:</p>
 *
 * <p>You can get and set the values of all six of the other properties in a
 * Matrix object: <code>a</code>, <code>b</code>, <code>c</code>,
 * <code>d</code>, <code>tx</code>, and <code>ty</code>.</p>
 *
 * <p>The Matrix class supports the four major types of transformations:
 * translation, scaling, rotation, and skewing. You can set three of these
 * transformations by using specialized methods, as described in the following
 * table: </p>
 *
 * <p>Each transformation function alters the current matrix properties so
 * that you can effectively combine multiple transformations. To do this, you
 * call more than one transformation function before applying the matrix to
 * its display object target(by using the <code>transform</code> property of
 * that display object).</p>
 *
 * <p>Use the <code>new Matrix()</code> constructor to create a Matrix object
 * before you can call the methods of the Matrix object.</p>
 */

/**
 * Class that represents a size (with width and height).
 */
class Size {
    /**
     * Initializes a new instance of a \@see:Size object.
     *
     * @param {?=} width Width of the new \@see:Size.
     * @param {?=} height Height of the new \@see:Size.
     */
    constructor(width = 0, height = 0) {
        this.width = asNumber(width);
        this.height = asNumber(height);
    }
    /**
     * Returns true if a \@see:Size has the same dimensions as this \@see:Size.
     *
     * @param {?} sz \@see:Size to compare to this \@see:Size.
     * @return {?}
     */
    equals(sz) {
        return (sz instanceof Size) && this.width == sz.width && this.height == sz.height;
    }
    /**
     * Creates a copy of this \@see:Size.
     * @return {?}
     */
    clone() {
        return new Size(this.width, this.height);
    }
}

/**
 * The Vector3D class represents a point or a location in the three-dimensional
 * space using the Cartesian coordinates x, y, and z. As in a two-dimensional
 * space, the x property represents the horizontal axis and the y property
 * represents the vertical axis. In three-dimensional space, the z property
 * represents depth. The value of the x property increases as the object moves
 * to the right. The value of the y property increases as the object moves
 * down. The z property increases as the object moves farther from the point
 * of view. Using perspective projection and scaling, the object is seen to be
 * bigger when near and smaller when farther away from the screen. As in a
 * right-handed three-dimensional coordinate system, the positive z-axis points
 * away from the viewer and the value of the z property increases as the object
 * moves away from the viewer's eye. The origin point (0,0,0) of the global
 * space is the upper-left corner of the stage.
 *
 * <p>The Vector3D class can also represent a direction, an arrow pointing from
 * the origin of the coordinates, such as (0,0,0), to an endpoint; or a
 * floating-point component of an RGB (Red, Green, Blue) color model.</p>
 *
 * <p>Quaternion notation introduces a fourth element, the w property, which
 * provides additional orientation information. For example, the w property can
 * define an angle of rotation of a Vector3D object. The combination of the
 * angle of rotation and the coordinates x, y, and z can determine the display
 * object's orientation. Here is a representation of Vector3D elements in
 * matrix notation:</p>
 */

/**
 * Class that implements formatting and parsing of numbers and Dates.
 *
 * By default, \@see:Globalize uses the American English culture.
 * To switch cultures, include the appropriate <b>wijmo.culture.*.js</b>
 * file after the wijmo files.
 */
class Globalize {
    /**
     * Formats a number or a date.
     *
     * The format strings used with the \@see:format function are similar to
     * the ones used by <b>Globalize.js</b> and by the .NET Globalization
     * library. The tables below contains links that describe the formats
     * available:
     *
     * <ul>
     * <li><a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx">
     *      Standard Numeric Format Strings</a></li>
     * <li><a href="http://msdn.microsoft.com/en-us/library/az4se3k1(v=vs.110).aspx">
     *      Standard Date and Time Format Strings</a></li>
     * <li><a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx">
     *      Custom Date and Time Format Strings</a></li>
     * </ul>
     *
     * @param {?} value Number or Date to format (all other types are converted to strings).
     * @param {?} format Format string to use when formatting numbers or dates.
     * @param {?=} trim Whether to remove trailing zeros from numeric results.
     * @param {?=} truncate Whether to truncate the numeric values rather than round them.
     * @return {?} A string representation of the given value.
     */
    static format(value, format, trim, truncate) {
        // if a format was not provided, create one
        if (!format) {
            if (isNumber(value)) {
                format = value == Math.round(value) ? 'n0' : 'n2';
            }
            else if (isDate(value)) {
                format = 'd';
            }
        }
        // format numbers and dates, convert others to string
        if (isNumber(value)) {
            return Globalize.formatNumber(value, format, trim, truncate);
        }
        else if (isDate(value)) {
            return Globalize.formatDate(value, format);
        }
        else {
            return value != null ? value.toString() : '';
        }
    }
    /**
     * Formats a number using the current culture.
     *
     * The \@see:formatNumber method accepts most .NET-style
     * <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx">
     * Standard Numeric Format Strings</a>, except for the 'e' and 'x' formats
     * (scientific notation and hexadecimal) which are not supported.
     *
     * Numeric format strings takes the form <i>Axxccss</i>, where:
     * <ul>
     * <li>
     *  <i>A</i> is a single case-insensitive alphabetic character called the
     *  format specifier.</i>
     * <li>
     *  <i>xx</i> is an optional integer called the precision specifier.
     *  The precision specifier affects the number of digits in the result.</li>
     * <li>
     *  <i>cc</i> is an optional string used to override the currency symbol
     *  when formatting currency values. This is useful when formatting
     *  currency values for cultures different than the current default
     *  (for example, when formatting Euro or Yen values in applications
     *  that use the English culture).</li>
     * <li>
     *  <i>ss</i> is an optional string used to scale the number. If provided,
     *  it must consist of commas. The number is divided by 1000 for each comma
     *  specified.</li>
     * </ul>
     *
     * The following table describes the standard numeric format specifiers and
     * displays sample output produced by each format specifier for the default
     * culture.
     *
     * <b>n</b> Number: <code>formatNumber(1234.5, 'n2') => '1,234.50'</code><br/>
     * <b>f</b> Fixed-point: <code>formatNumber(1234.5, 'f2') => '1234.50'</code><br/>
     * <b>g</b> General (no trailing zeros): <code>formatNumber(1234.5, 'g2') => '1,234.5'</code><br/>
     * <b>d</b> Decimal (integers): <code>formatNumber(-1234, 'd6') => '-001234'</code><br/>
     * <b>x</b> Hexadecimal (integers): <code>formatNumber(1234, 'x6') => '0004d2'</code><br/>
     * <b>c</b> Currency: <code>formatNumber(1234, 'c') => '$ 1,234.00'</code><br/>
     * <b>p</b> Percent: <code>formatNumber(0.1234, 'p2') => '12.34 %'</code>
     *
     * The scaling specifier is especially useful when charting large values. For
     * example, the markup below creates a chart that plots population versus GDP.
     * The raw data expresses the population is units and the GDP in millions.
     * The scaling specified in the axes formats causes the chart to show population
     * in millions and GDP in trillions:
     *
     * <pre>&lt;wj-flex-chart
     *   items-source="countriesGDP" binding-x="pop" chart-type="Scatter"&gt;
     *   &lt;wj-flex-chart-series
     *     name="GDP" binding="gdp"&gt;&lt;/wj-flex-chart-series&gt;
     *   &lt;wj-flex-chart-axis
     *     wj-property="axisX" title="Population (millions)"
     *     format="n0,,"&gt;
     *   &lt;/wj-flex-chart-axis&gt;
     *   &lt;wj-flex-chart-axis
     *     wj-property="axisY" title="GDP (US$ trillions)"
     *     format="c0,,"&gt;
     *   &lt;/wj-flex-chart-axis&gt;
     * &lt;/wj-flex-chart&gt;</pre>
     *
     * @param {?} value Number to format.
     * @param {?} format .NET-style standard numeric format string (e.g. 'n2', 'c4', 'p0', 'g2', 'd2').
     * @param {?=} trim Whether to remove trailing zeros from the result.
     * @param {?=} truncate Whether to truncate the value rather than round it.
     * @return {?} A string representation of the given number.
     */
    static formatNumber(value, format, trim, truncate) {
        asNumber(value);
        asString(format);
        let /** @type {?} */ result;
        const /** @type {?} */ m = format ? format.match(/([a-z])(\d*)(,*)(.*)/i) : null, /** @type {?} */ nf = culture.Globalize.numberFormat, /** @type {?} */ f1 = m ? m[1].toLowerCase() : 'n', /** @type {?} */ prec = (m && m[2]) ? parseInt(m[2]) : (f1 == 'c') ? nf.currency.decimals : value == Math.round(value) ? 0 : 2, /** @type {?} */ scale = (m && m[3]) ? 3 * m[3].length : 0, /** @type {?} */ curr = (m && m[4]) ? m[4] : nf.currency.symbol, /** @type {?} */ dp = nf['.'], /** @type {?} */ ts = nf[','];
        // scale (,:thousands ,,:millions ,,,:billions)
        if (scale) {
            value /= Math.pow(10, scale);
        }
        // d, x: integers/hexadecimal
        if (f1 == 'd' || f1 == 'x') {
            result = Math.round(Math.abs(value)).toString(f1 == 'd' ? 10 : 16);
            while (result.length < prec) {
                result = '0' + result;
            }
            if (value < 0) {
                result = '-' + result;
            }
            if (format && format[0] == 'X') {
                result = result.toUpperCase();
            }
            return result;
        }
        // p: percentage
        if (f1 == 'p') {
            value *= 100;
        }
        // truncate value
        if (truncate) {
            value = toFixed(value, prec, true);
        }
        // get result
        result = (f1 == 'c' || f1 == 'p')
            ? Math.abs(value).toFixed(prec)
            : value.toFixed(prec);
        // g: remove trailing zeros
        if ((trim || f1 == 'g') && result.indexOf('.') > -1) {
            result = result.replace(/(\.[0-9]*?)0+$/g, '$1');
            result = result.replace(/\.$/, '');
        }
        // replace decimal point
        if (dp != '.') {
            result = result.replace('.', dp);
        }
        // n, c, p: thousand separators
        if (ts && (f1 == 'n' || f1 == 'c' || f1 == 'p')) {
            const /** @type {?} */ idx = result.indexOf(dp), /** @type {?} */ rx = /\B(?=(\d\d\d)+(?!\d))/g;
            result = idx > -1 ? result.substr(0, idx).replace(rx, ts) + result.substr(idx) : result.replace(rx, ts);
        }
        // c: currency pattern
        if (f1 == 'c') {
            var /** @type {?} */ pat = nf.currency.pattern[value < 0 ? 0 : 1];
            result = pat.replace('n', result).replace('$', curr);
        }
        // p: percentage pattern
        if (f1 == 'p') {
            var /** @type {?} */ pat = nf.percent.pattern[value < 0 ? 0 : 1];
            result = pat.replace('n', result);
        }
        // done
        return result;
    }
    /**
     * Formats a date using the current culture.
     *
     * The \@see:format parameter contains a .NET-style
     * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx">Date format string</a>
     * with the following additions:
     * <ul>
     * <li>
     *  <i>Q, q</i> Calendar quarter.</li>
     *  <i>U</i> Fiscal quarter (government).</li>
     *  <i>u</i> Fiscal quarter (private sector).</li>
     *  <i>EEEE, EEE, EE, E</i> Fiscal year (government).</li>
     *  <i>eeee, eee, ee, e</i> Fiscal year (private sector).</li>
     * </ul>
     *
     * For example:
     * <code>
     * var d = new Date(2015, 9, 1); // Oct 1, 2015
     * console.log(wijmo.Globalize.format(d, '"FY"EEEE"Q"U') + ' (US culture)');
     * &gt; <b>FY2016Q1 (US culture)</b>
     * </code>
     *
     * @param {?} value Number or Date to format.
     * @param {?} format .NET-style Date format string</a>.
     * @return {?} A string representation of the given date.
     */
    static formatDate(value, format) {
        value = asDate(value);
        // culture-invariant formats
        switch (format) {
            case 'r':
            case 'R':
                return value.toUTCString();
            case 'u':
                return value.toISOString().replace(/\.\d{3}/, '');
        }
        // expand pre-defined formats
        format = Globalize._expandFormat(format);
        // parse the format string and build return value
        const /** @type {?} */ parts = Globalize._parseDateFormat(format);
        let /** @type {?} */ str = '';
        for (let /** @type {?} */ i = 0; i < parts.length; i++) {
            str += Globalize._formatDatePart(value, format, parts[i]);
        }
        // all done
        return str;
    }
    /**
     * Parses a string into an integer.
     *
     * @param {?} value String to convert to an integer.
     * @param {?=} format Format to use when parsing the number.
     * @return {?} The integer represented by the given string,
     * or <b>NaN</b> if the string cannot be parsed into an integer.
     */
    static parseInt(value, format) {
        return Math.round(Globalize.parseFloat(value, format));
    }
    /**
     * Parses a string into a floating point number.
     *
     * @param {?} value String to convert to a number.
     * @param {?=} format Format to use when parsing the number.
     * @return {?} The floating point number represented by the given string,
     * or <b>NaN</b> if the string cannot be parsed into a floating point number.
     */
    static parseFloat(value, format) {
        const /** @type {?} */ neg = value.indexOf('-') > -1 || (value.indexOf('(') > -1 && value.indexOf(')') > -1) ? -1 : +1, /** @type {?} */ pct = value.indexOf('%') > -1 ? .01 : 1, /** @type {?} */ m = format ? format.match(/,+/) : null, /** @type {?} */ scale = m ? m[0].length * 3 : 0;
        // hex
        if (format && (format[0] == 'x' || format[0] == 'X')) {
            value = value.replace(/[^0-9a-f]+.*$/gi, ''); // truncate at first invalid char
            return parseInt(value, 16) * neg * pct * Math.pow(10, scale);
        }
        // decimal
        var /** @type {?} */ dp = culture.Globalize.numberFormat['.'], /** @type {?} */ rx = new RegExp('[^\\d\\' + dp + ']', 'g'), /** @type {?} */ value = value.replace(rx, '').replace(dp, '.'); // remove non-digits, replace decimal point
        return parseFloat(value) * neg * pct * Math.pow(10, scale);
    }
    /**
     * Parses a string into a Date.
     *
     * @param {?} value String to convert to a Date.
     * @param {?} format Format string used to parse the date.
     * @return {?} The date represented by the given string, or null if the string
     * cannot be parsed into a Date.
     */
    static parseDate(value, format) {
        // make sure we have a value
        value = asString(value);
        if (!value) {
            return null;
        }
        // culture-invariant formats
        if (format == 'u') {
            return new Date(value);
        }
        // parse using RFC 3339 pattern ([yyyy-MM-dd] [hh:mm[:ss]])
        var /** @type {?} */ d;
        if (format == 'R' || format == 'r') {
            const /** @type {?} */ rx = /(([0-9]+)\-([0-9]+)\-([0-9]+))?\s?(([0-9]+):([0-9]+)(:([0-9]+))?)?/, /** @type {?} */ match = value.match(rx);
            if (match[1] || match[5]) {
                var /** @type {?} */ d = match[1] // parse date
                    ? new Date(parseInt(match[2]), parseInt(match[3]) - 1, parseInt(match[4]))
                    : new Date();
                if (match[5]) {
                    d.setHours(parseInt(match[6]));
                    d.setMinutes(parseInt(match[7]));
                    d.setSeconds(match[8] ? parseInt(match[9]) : 0);
                }
            }
            else {
                d = new Date(value);
            }
            return !isNaN(d.getTime()) ? d : null;
        }
        // expand the format
        format = Globalize._expandFormat(format ? format : 'd');
        // get format parts and data parts
        //
        // cjk: chars, http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
        // rxf: format (no dots in strings: 'mm.dd.yyyy' => ['mm', 'dd', 'yyyy']).
        // rxv: value (dots OK in strings: 'A.D' => 'A.D', but not by themselves)
        const /** @type {?} */ cal = culture.Globalize.calendar, /** @type {?} */ cjk = Globalize._CJK, /** @type {?} */ rxv = new RegExp('(\\' + cal['/'] + ')|(\\' + cal[':'] + ')|' +
            '(\\d+)|' +
            '([' + cjk + '\\.]{2,})|' +
            '([' + cjk + ']+)', // strings with no dots
        'gi');
        let /** @type {?} */ vparts = value.match(rxv), /** @type {?} */ fparts = Globalize._parseDateFormat(format), /** @type {?} */ offset = 0, /** @type {?} */ year = -1, /** @type {?} */ month = 0, /** @type {?} */ day = 1, /** @type {?} */ hour = 0, /** @type {?} */ min = 0;
        const /** @type {?} */ tzm = 0;
        let /** @type {?} */ sec = 0, /** @type {?} */ ms = 0, /** @type {?} */ era = -1, /** @type {?} */ hasDayName, /** @type {?} */ hasDay, /** @type {?} */ hasQuarter, /** @type {?} */ hasMonth, /** @type {?} */ fiscalFmt;
        // basic validation (TFS 81465, 128359)
        if (!vparts || !vparts.length || !fparts || !fparts.length) {
            return null;
        }
        // parse each element
        for (let /** @type {?} */ i = 0; i < fparts.length && vparts; i++) {
            const /** @type {?} */ vpi = i - offset;
            let /** @type {?} */ pval = (vpi > -1 && vpi < vparts.length) ? vparts[vpi] : '';
            const /** @type {?} */ plen = fparts[i].length;
            switch (fparts[i]) {
                // ** year
                case 'EEEE':
                case 'EEE':
                case 'EE':
                case 'E': // fiscal (govt)
                case 'eeee':
                case 'eee':
                case 'ee':
                case 'e':
                    fiscalFmt = fparts[i];
                // ** fall through **
                case 'yyyy':
                case 'yyy':
                case 'yy':
                case 'y':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    year = parseInt(pval);
                    break;
                // ** month
                case 'MMMM':
                case 'MMM':
                    hasMonth = true;
                    const /** @type {?} */ monthName = pval.toLowerCase();
                    month = -1;
                    for (let /** @type {?} */ j = 0; j < 12; j++) {
                        if (cal.months[j].toLowerCase().indexOf(monthName) == 0) {
                            month = j;
                            break;
                        }
                    }
                    break;
                case 'MM':
                case 'M':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    month = parseInt(pval) - 1;
                    hasMonth = true;
                    break;
                // ** day
                case 'dddd':
                case 'ddd':
                    hasDayName = true;
                    break; // skip day names
                case 'dd':
                case 'd':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    day = parseInt(pval);
                    hasDay = true;
                    break;
                // ** hour
                case 'hh':
                case 'h':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    hour = parseInt(pval);
                    hour = hour == 12 ? 0 : hour; // 0-12, 12 == midnight
                    break;
                case 'HH':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    hour = parseInt(pval); // 0-24
                    break;
                case 'H':
                    hour = parseInt(pval); // 0-24
                    break;
                // ** minute
                case 'mm':
                case 'm':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    min = parseInt(pval);
                    break;
                // ** second
                case 'ss':
                case 's':
                    if (plen > 1 && pval.length > plen) {
                        vparts[vpi] = pval.substr(plen);
                        pval = pval.substr(0, plen);
                        offset++;
                    }
                    sec = parseInt(pval);
                    break;
                // ** millisecond
                case 'fffffff':
                case 'FFFFFFF':
                case 'ffffff':
                case 'FFFFFF':
                case 'fffff':
                case 'FFFFF':
                case 'ffff':
                case 'FFFF':
                case 'fff':
                case 'FFF':
                case 'ff':
                case 'FF':
                case 'f':
                case 'F':
                    ms = parseInt(pval) / Math.pow(10, plen - 3);
                    break;
                // ** am/pm
                case 'tt':
                case 't':
                    pval = pval.toUpperCase();
                    if ((cal.pm[0] && pval == cal.pm[0] && hour < 12) ||
                        (cal.pm[1] && pval == cal.pm[1] && hour < 12)) {
                        hour += 12;
                    }
                    break;
                // ** quarter
                case 'q':
                case 'Q':
                case 'u':
                case 'U':
                    hasQuarter = true;
                    break;
                // ** era
                case 'ggg':
                case 'gg':
                case 'g':
                    era = cal.eras.length > 1 ? Globalize._getEra(pval, cal) : -1;
                    break;
                // ** localized separators (TFS 131320)
                case cal['/']:
                case cal[':']:
                    if (pval && pval != fparts[i]) {
                        return null; // present and wrong separator
                    }
                    break;
                // ** time zone (skip )
                case 'K':
                    break;
                // ** all else: if not a match, keep using the same pval
                default:
                    if (Globalize._unquote(fparts[i]) != pval) {
                        offset++;
                    }
                    break;
            }
        }
        // allow dates with no times even if the format requires times
        if (hasMonth && hasDay) {
            if (isNaN(hour))
                hour = 0;
            if (isNaN(min))
                min = 0;
            if (isNaN(sec))
                sec = 0;
        }
        // basic validation
        if (month < 0 || month > 11 || isNaN(month) ||
            day < 0 || day > 31 || isNaN(day) ||
            hour < 0 || hour > 24 || isNaN(hour) ||
            min < 0 || min > 60 || isNaN(min) ||
            sec < 0 || sec > 60 || isNaN(sec)) {
            return null;
        }
        // convert fiscal year/month to calendar
        if (fiscalFmt) {
            if (!hasMonth) {
                return null;
            }
            d = new Date(year, month);
            d = DateTime.fromFiscal(d, fiscalFmt[0] == 'E');
            year = d.getFullYear();
            month = d.getMonth();
        }
        // if the day name was specified but the day wasn't, the result is meaningless
        if (hasDayName && !hasDay) {
            return null;
        }
        // if the quarter was specified but the month wasn't, the result is meaningless
        if (hasQuarter && !hasMonth) {
            return null;
        }
        // if year not found, use current (as Globalize.js)
        if (year < 0) {
            year = new Date().getFullYear();
        }
        // apply era offset if any, or adjust for two-digit years (see Calendar.TwoDigitYearMax)
        if (era > -1) {
            year = year + cal.eras[era].start.getFullYear() - 1;
        }
        else if (year < 100) {
            year += year >= 30 ? 1900 : 2000;
        }
        // return result
        d = new Date(year, month, day, hour, min + tzm, sec, ms);
        return isNaN(d.getTime()) ? null : d;
    }
    /**
     * Gets the first day of the week according to the current culture.
     *
     * The value returned is between zero (Sunday) and six (Saturday).
     * @return {?}
     */
    static getFirstDayOfWeek() {
        const /** @type {?} */ fdw = culture.Globalize.calendar.firstDay;
        return fdw ? fdw : 0;
    }
    /**
     * Gets the symbol used as a decimal separator in numbers.
     * @return {?}
     */
    static getNumberDecimalSeparator() {
        const /** @type {?} */ ndc = culture.Globalize.numberFormat['.'];
        return ndc ? ndc : '.';
    }
    /**
     * @param {?} s
     * @return {?}
     */
    static _unquote(s) {
        if (s.length > 1 && s[0] == s[s.length - 1]) {
            if (s[0] == '\'' || s[0] == '\"') {
                return s.substr(1, s.length - 2);
            }
        }
        return s;
    }
    /**
     * @param {?} format
     * @return {?}
     */
    static _parseDateFormat(format) {
        // use cache whenever possible
        if (format in Globalize._dateFomatParts) {
            return Globalize._dateFomatParts[format];
        }
        // parse the format
        const /** @type {?} */ parts = [];
        let /** @type {?} */ start, /** @type {?} */ end;
        for (start = 0; start > -1 && start < format.length; start++) {
            const /** @type {?} */ c = format[start];
            if (c == '\'' || c == '"') {
                end = format.indexOf(c, start + 1); // keep quotes to distinguish from regular date parts
                if (end > -1) {
                    parts.push(format.substring(start, end + 1));
                    start = end;
                    continue;
                }
            }
            end = start + 1;
            for (; end < format.length; end++) {
                if (format[end] != c)
                    break;
            }
            parts.push(format.substring(start, end));
            start = end - 1;
        }
        // cache and return
        Globalize._dateFomatParts[format] = parts;
        return parts;
    }
    /**
     * @param {?} d
     * @param {?} format
     * @param {?} part
     * @return {?}
     */
    static _formatDatePart(d, format, part) {
        const /** @type {?} */ cal = culture.Globalize.calendar;
        let /** @type {?} */ era = 0, /** @type {?} */ year = 0, /** @type {?} */ ff = 0, /** @type {?} */ fd;
        const /** @type {?} */ plen = part.length;
        switch (part) {
            // ** year
            case 'yyyy':
            case 'yyy':
            case 'yy':
            case 'y': // calendar year
            case 'EEEE':
            case 'EEE':
            case 'EE':
            case 'E': // fiscal year (govt)
            case 'eeee':
            case 'eee':
            case 'ee':
            case 'e':
                // get the year (calendar or fiscal)
                fd = part[0] == 'E' ? DateTime.toFiscal(d, true) :
                    part[0] == 'e' ? DateTime.toFiscal(d, false) :
                        d;
                year = fd.getFullYear();
                // if the calendar has multiple eras and the format specifies an era,
                // then adjust the year to count from the start of the era.
                // if the format has no era, then use the regular (Western) year.
                if (cal.eras.length > 1 && format.indexOf('g') > -1) {
                    era = Globalize._getEra(d, cal);
                    if (era > -1) {
                        year = year - cal.eras[era].start.getFullYear() + 1;
                    }
                }
                // adjust number of digits
                return Globalize._zeroPad(year, 4).substr(4 - part.length);
            // ** month
            case 'MMMM':
                return cal.months[d.getMonth()];
            case 'MMM':
                return cal.monthsAbbr[d.getMonth()];
            case 'MM':
            case 'M':
                return Globalize._zeroPad(d.getMonth() + 1, plen);
            // ** day
            case 'dddd':
                return cal.days[d.getDay()];
            case 'ddd':
                return cal.daysAbbr[d.getDay()];
            case 'dd':
                return Globalize._zeroPad(d.getDate(), 2);
            case 'd':
                return d.getDate().toString();
            // ** hour
            case 'hh':
            case 'h':
                return Globalize._zeroPad(Globalize._h12(d), plen);
            case 'HH':
            case 'H':
                return Globalize._zeroPad(d.getHours(), plen);
            // ** minute
            case 'mm':
            case 'm':
                return Globalize._zeroPad(d.getMinutes(), plen);
            // ** second
            case 'ss':
            case 's':
                return Globalize._zeroPad(d.getSeconds(), plen);
            // ** millisecond
            case 'fffffff':
            case 'FFFFFFF':
            case 'ffffff':
            case 'FFFFFF':
            case 'fffff':
            case 'FFFFF':
            case 'ffff':
            case 'FFFF':
            case 'fff':
            case 'FFF':
            case 'ff':
            case 'FF':
            case 'f':
            case 'F':
                ff = d.getMilliseconds() * Math.pow(10, plen - 3);
                return part[0] == 'f' ? Globalize._zeroPad(ff, plen) : ff.toFixed(0);
            // ** am/pm
            case 'tt':
                return d.getHours() < 12 ? cal.am[0] : cal.pm[0];
            case 't':
                return d.getHours() < 12 ? cal.am[1] : cal.pm[1];
            // ** quarter
            case 'q':
            case 'Q':
                return (Math.floor(d.getMonth() / 3) + 1).toString();
            case 'u':
            case 'U':
                fd = DateTime.toFiscal(d, part == 'U');
                return (Math.floor(fd.getMonth() / 3) + 1).toString();
            // ** era
            case 'ggg':
            case 'gg':
            case 'g':
                if (cal.eras.length > 1) {
                    era = Globalize._getEra(d, cal);
                    if (era > -1) {
                        return part == 'ggg' ? cal.eras[era].name : part == 'gg' ? cal.eras[era].name[0] : cal.eras[era].symbol;
                    }
                }
                return cal.eras[0];
            // ** localized separators
            case ':':
            case '/':
                return cal[part];
            // ** time zone
            case 'K':
                const /** @type {?} */ tz = d.toString().match(/(\+|\-)(\d{2})(\d{2})/);
                return tz ? tz[1] + tz[2] + tz[3] : '';
        }
        // unquote part
        if (plen > 1 && part[0] == part[plen - 1]) {
            if (part[0] == '\"' || part[0] == '\'') {
                return part.substr(1, plen - 2);
            }
        }
        // return part
        return part;
    }
    /**
     * @param {?} d
     * @param {?} cal
     * @return {?}
     */
    static _getEra(d, cal) {
        if (isDate(d)) {
            for (var /** @type {?} */ i = 0; i < cal.eras.length; i++) {
                if (d >= cal.eras[i].start) {
                    return i;
                }
            }
        }
        else if (isString(d)) {
            for (var /** @type {?} */ i = 0; i < cal.eras.length; i++) {
                if (cal.eras[i].name) {
                    if (cal.eras[i].name.indexOf(d) == 0 || cal.eras[i].symbol.indexOf(d) == 0) {
                        return i;
                    }
                }
            }
        }
        return -1; // not found
    }
    /**
     * @param {?} format
     * @return {?}
     */
    static _expandFormat(format) {
        const /** @type {?} */ fmt = culture.Globalize.calendar.patterns[format];
        return fmt ? fmt : format;
    }
    /**
     * @param {?} num
     * @param {?} places
     * @return {?}
     */
    static _zeroPad(num, places) {
        const /** @type {?} */ n = num.toFixed(0), /** @type {?} */ zero = places - n.length + 1;
        return zero > 0 ? Array(zero).join('0') + n : n;
    }
    /**
     * @param {?} d
     * @return {?}
     */
    static _h12(d) {
        const /** @type {?} */ cal = culture.Globalize.calendar;
        let /** @type {?} */ h = d.getHours();
        if (cal.am && cal.am[0]) {
            h = h % 12;
            if (h == 0)
                h = 12;
        }
        return h;
    }
}
// Chinese/Japanese/Korean characters
// http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
// NOTE: using 'replace' to keep minifier from switching the escaped Unicode chars into real Unicode.
Globalize._CJK = 'a-zu00C0-u017Fu3000-u30ffu4e00-u9faf'.replace(/u/g, '\\u');
Globalize._dateFomatParts = {};

/**
 * Color class.
 *
 * The \@see:Color class parses colors specified as CSS strings and exposes
 * their red, green, blue, and alpha channels as read-write properties.
 *
 * The \@see:Color class also provides \@see:fromHsb and \@see:fromHsl methods
 * for creating colors using the HSB and HSL color models instead of RGB,
 * as well as \@see:getHsb and \@see:getHsl methods for retrieving the color
 * components using those color models.
 *
 * Finally, the \@see:Color class provides an \@see:interpolate method that
 * creates colors by interpolating between two colors using the HSL model.
 * This method is especially useful for creating color animations with the
 * \@see:animate method.
 */

/**
 * Class that represents a rectangle (with left, top, width, and height).
 */

/**
 * Provides binding to complex properties (e.g. 'customer.address.city')
 */
class Binding$1 {
    /**
     * Initializes a new instance of a \@see:Binding object.
     *
     * @param {?} path Name of the property to bind to.
     */
    constructor(path) {
        this.path = path;
    }
    /**
     * Gets or sets the path for the binding.
     *
     * In the simplest case, the path is the name of the property of the source
     * object to use for the binding (e.g. 'street').
     *
     * Subproperties of a property can be specified by a syntax similar to that
     * used in JavaScript (e.g. 'address.street').
     * @return {?}
     */
    get path() {
        return this._path;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set path(value) {
        this._path = value;
        this._parts = value.split('.'); // e.g. 'customer.balance'
        for (let /** @type {?} */ i = 0; i < this._parts.length; i++) {
            const /** @type {?} */ part = this._parts[i], /** @type {?} */ ib = part.indexOf('['); // e.g. 'customer.balance[0]'
            if (ib > -1) {
                this._parts[i] = part.substr(0, ib);
                this._parts.splice(++i, 0, parseInt(part.substr(ib + 1)));
            }
        }
        this._key = this._parts.length == 1 ? this._parts[0] : null;
    }
    /**
     * Gets the binding value for a given object.
     *
     * If the object does not contain the property specified by the
     * binding \@see:path, the method returns null.
     *
     * @param {?} object The object that contains the data to be retrieved.
     * @return {?}
     */
    getValue(object) {
        if (object) {
            // optimize common case
            if (this._key) {
                return object[this._key];
            }
            // handle case where property name has a decimal point (TFS 139176)
            if (this._path in object) {
                return object[this._path];
            }
            // traverse path for complex properties
            for (let /** @type {?} */ i = 0; i < this._parts.length && object; i++) {
                object = object[this._parts[i]];
            }
        }
        return object;
    }
    /**
     * Sets the binding value on a given object.
     *
     * If the object does not contain the property specified by the
     * binding \@see:path, the value is not set.
     *
     * @param {?} object The object that contains the data to be set.
     * @param {?} value Data value to set.
     * @return {?}
     */
    setValue(object, value) {
        if (object) {
            // handle simple cases (and cases where the property name has a decimal point)
            if (this._path in object) {
                object[this._path] = value;
                return;
            }
            // traverse parts for complex properties
            for (let /** @type {?} */ i = 0; i < this._parts.length - 1; i++) {
                object = object[this._parts[i]];
                if (object == null) {
                    return;
                }
            }
            // make the assignment
            object[this._parts[this._parts.length - 1]] = value;
        }
    }
}

/**
 * Static class that provides utility methods for clipboard operations.
 *
 * The \@see:Clipboard class provides static \@see:copy and \@see:paste methods
 * that can be used by controls to customize the clipboard content during
 * clipboard operations.
 *
 * For example, the code below shows how a control could intercept the
 * clipboard shortcut keys and provide custom clipboard handling:
 *
 * <pre>
 * rootElement.addEventListener('keydown', function(e) {
 *   // copy: ctrl+c or ctrl+Insert
 *   if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 45)) {
 *     var text = this.getClipString();
 *     Clipboard.copy(text);
 *     return;
 *   }
 *   // paste: ctrl+v or shift+Insert
 *   if ((e.ctrlKey && e.keyCode == 86) || (e.shiftKey && e.keyCode == 45)) {
 *     Clipboard.paste(function (text) {
 *       this.setClipString(text);
 *     });
 *     return;
 *   }
 * });</pre>
 */

/**
 * Base class for all Wijmo controls.
 *
 * The \@see:Control class handles the association between DOM elements and the
 * actual control. Use the \@see:hostElement property to get the DOM element
 * that is hosting a control, or the \@see:getControl method to get the control
 * hosted in a given DOM element.
 *
 * The \@see:Control class also provides a common pattern for invalidating and
 * refreshing controls, for updating the control layout when its size changes,
 * and for handling the HTML templates that define the control structure.
 */
class Control {
    /**
     * Initializes a new instance of a \@see:Control and attaches it to a DOM element.
     *
     * @param {?} element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
     * @param {?=} options JavaScript object containing initialization data for the control.
     * @param {?=} invalidateOnResize Whether the control should be invalidated when it is resized.
     */
    constructor(element, options = null, invalidateOnResize = false) {
        this._focus = false;
        this._updating = 0;
        this._fullUpdate = false;
        /**
         * Occurs when the control gets the focus.
         */
        this.gotFocus = new Event$1();
        /**
         * Occurs when the control loses the focus.
         */
        this.lostFocus = new Event$1();
        // check that the element is not in use
        assert(Control.getControl(element) == null, 'Element is already hosting a control.');
        // get the host element
        let host = getElement(element);
        assert(host != null, 'Cannot find the host element.');
        // save host and original content (to restore on dispose)
        this._orgOuter = host.outerHTML;
        this._orgInner = host.innerHTML;
        // replace <input> and <select> elements with <div> and save their attributes
        if (host.tagName == 'INPUT' || host.tagName == 'SELECT') {
            this._orgAtts = host.attributes;
            this._orgTag = host.tagName;
            host = this._replaceWithDiv(host);
        }
        // save host element and store control instance in element
        // (to retrieve with Control.getControl(element))
        this._e = host;
        host[Control._DATA_KEY] = this;
        // update layout when user resizes the browser
        if (invalidateOnResize == true) {
            this._szCtl = new Size(host.offsetWidth, host.offsetHeight);
            const hr = this._handleResize.bind(this);
            this.addEventListener(window, 'resize', hr);
        }
        // fire events for got/lost focus
        this.addEventListener(host, 'focus', () => {
            this._updateFocusState();
        }, true);
        this.addEventListener(host, 'blur', () => {
            this._updateFocusState();
        }, true);
        // handle disabled controls
        // (pointer-events requires IE11, doesn't prevent wheel at all)
        const hd = this._handleDisabled.bind(this);
        this.addEventListener(host, 'mousedown', hd, true);
        this.addEventListener(host, 'mouseup', hd, true);
        this.addEventListener(host, 'click', hd, true);
        this.addEventListener(host, 'dblclick', hd, true);
        this.addEventListener(host, 'keydown', hd, true);
        this.addEventListener(host, 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll', hd, true);
        // keep track of touch actions at the document level
        // (no need to add/remove event handlers to every Wijmo control)
        if (Control._touching == null) {
            Control._touching = false;
            if ('ontouchstart' in window || 'onpointerdown' in window) {
                const b = document.body, ts = this._handleTouchStart, te = this._handleTouchEnd;
                if ('ontouchstart' in window) {
                    b.addEventListener('touchstart', ts);
                    b.addEventListener('touchend', te);
                    b.addEventListener('touchcancel', te);
                    b.addEventListener('touchleave', te);
                }
                else if ('onpointerdown' in window) {
                    b.addEventListener('pointerdown', ts);
                    b.addEventListener('pointerup', te);
                    b.addEventListener('pointerout', te);
                    b.addEventListener('pointercancel', te);
                    b.addEventListener('pointerleave', te);
                }
            }
        }
    }
    /**
     * Gets the HTML template used to create instances of the control.
     *
     * This method traverses up the class hierarchy to find the nearest ancestor that
     * specifies a control template. For example, if you specify a prototype for the
     * \@see:ComboBox control, it will override the template defined by the \@see:DropDown
     * base class.
     * @return {?}
     */
    getTemplate() {
        for (let /** @type {?} */ p = Object.getPrototypeOf(this); p; p = Object.getPrototypeOf(p)) {
            return p.constructor.controlTemplate;
        }
        return null;
    }
    /**
     * Applies the template to a new instance of a control, and returns the root element.
     *
     * This method should be called by constructors of templated controls.
     * It is responsible for binding the template parts to the
     * corresponding control members.
     *
     * For example, the code below applies a template to an instance
     * of an \@see:InputNumber control. The template must contain elements
     * with the 'wj-part' attribute set to 'input', 'btn-inc', and 'btn-dec'.
     * The control members '_tbx', '_btnUp', and '_btnDn' will be assigned
     * references to these elements.
     *
     * <pre>this.applyTemplate('wj-control wj-inputnumber', template, {
     *   _tbx: 'input',
     *   _btnUp: 'btn-inc',
     *   _btnDn: 'btn-dec'
     * }, 'input');</pre>
     *
     * @param {?} classNames Names of classes to add to the control's host element.
     * @param {?} template An HTML string that defines the control template.
     * @param {?} parts A dictionary of part variables and their names.
     * @param {?=} namePart Name of the part to be named after the host element. This
     * determines how the control submits data when used in forms.
     * @return {?}
     */
    applyTemplate(classNames, template, parts, namePart) {
        const /** @type {?} */ host = this._e;
        // apply standard classes to host element
        if (classNames) {
            addClass(host, classNames);
        }
        // convert string into HTML template and append to host
        let /** @type {?} */ tpl = null;
        if (template) {
            tpl = createElement(template);
            tpl = host.appendChild(tpl);
        }
        // make sure the control can get the focus
        // this is a little tricky:
        // - Chrome won't give divs the focus unless we set tabIndex to something > -1
        // - But if we do set it and the control contains input elements, the back-tab key won't work
        // so we set the tabIndex to -1 or zero depending on whether the control contains input elements.
        // http://wijmo.com/topic/shift-tab-not-working-for-input-controls-in-ff-and-chrome/, TFS 123457
        if (host && !host.getAttribute('tabindex')) {
            host.tabIndex = host.querySelector('input') ? -1 : 0;
        }
        // bind control variables to template parts
        if (parts) {
            for (let /** @type {?} */ part in parts) {
                const /** @type {?} */ wjPart = parts[part];
                this[part] = tpl.querySelector('[wj-part="' + wjPart + '"]');
                // look in the root as well (querySelector doesn't...)
                if (this[part] == null && tpl.getAttribute('wj-part') == wjPart) {
                    this[part] = tpl;
                }
                // make sure we found the part
                if (this[part] == null) {
                    throw 'Missing template part: "' + wjPart + '"';
                }
                // copy/move attributes from host to input element
                if (wjPart == namePart) {
                    // copy parent element's name attribute to the namePart element
                    // (to send data when submitting forms).
                    let /** @type {?} */ att = host.attributes['name'];
                    if (att && att.value) {
                        this[part].setAttribute('name', att.value);
                    }
                    // transfer access key
                    att = host.attributes['accesskey'];
                    if (att && att.value) {
                        this[part].setAttribute('accesskey', att.value);
                        host.removeAttribute('accesskey');
                    }
                }
            }
        }
        // return template
        return tpl;
    }
    /**
     * Disposes of the control by removing its association with the host element.
     *
     * The \@see:dispose method automatically removes any event listeners added
     * with the \@see:addEventListener method.
     *
     * Calling the \@see:dispose method is important in applications that create
     * and remove controls dynamically. Failing to dispose of the controls may
     * cause memory leaks.
     * @return {?}
     */
    dispose() {
        // dispose of any child controls
        const /** @type {?} */ cc = this._e.querySelectorAll('.wj-control');
        for (let /** @type {?} */ i = 0; i < cc.length; i++) {
            const /** @type {?} */ ctl = Control.getControl(cc[i]);
            if (ctl) {
                ctl.dispose();
            }
        }
        // cancel any pending refreshes
        if (this._toInv) {
            clearTimeout(this._toInv);
        }
        // remove all HTML event listeners
        this.removeEventListener();
        // remove all Wijmo event listeners
        // (without getting the value for all properties)
        for (var /** @type {?} */ prop in this) {
            if (prop.length > 2 && prop.indexOf('on') == 0) {
                var /** @type {?} */ evt = (this[prop[2].toLowerCase() + prop.substr(3)]);
                if (evt instanceof Event$1) {
                    evt.removeAllHandlers();
                }
            }
        }
        // if the control has a collectionView property, remove handlers to stop receiving notifications
        // REVIEW: perhaps optimize by caching the CollectionView properties?
        const /** @type {?} */ cv = (this['collectionView']);
        if (this._e.parentNode) {
            this._e.outerHTML = this._orgOuter;
        }
        // done
        this._e[Control._DATA_KEY] = null;
        this._e = this._orgOuter = this._orgInner = this._orgAtts = this._orgTag = null;
    }
    /**
     * Gets the control that is hosted in a given DOM element.
     *
     * @param {?} element The DOM element that is hosting the control, or a selector for the host element (e.g. '#theCtrl').
     * @return {?}
     */
    static getControl(element) {
        const /** @type {?} */ e = getElement(element);
        return e ? asType(e[Control._DATA_KEY], Control, true) : null;
    }
    /**
     * Gets the DOM element that is hosting the control.
     * @return {?}
     */
    get hostElement() {
        return this._e;
    }
    /**
     * Sets the focus to this control.
     * @return {?}
     */
    focus() {
        this._e.focus();
    }
    /**
     * Checks whether this control contains the focused element.
     * @return {?}
     */
    containsFocus() {
        // test for disposed controls
        if (!this._e) {
            return false;
        }
        // scan child controls (they may have popups, TFS 112676)
        const /** @type {?} */ c = this._e.getElementsByClassName('wj-control');
        for (let /** @type {?} */ i = 0; i < c.length; i++) {
            const /** @type {?} */ ctl = Control.getControl(c[i]);
            if (ctl && ctl != this && ctl.containsFocus()) {
                return true;
            }
        }
        // check for actual HTML containment
        return contains(this._e, /** @type {?} */ (document.activeElement));
    }
    /**
     * Invalidates the control causing an asynchronous refresh.
     *
     * @param {?=} fullUpdate Whether to update the control layout as well as the content.
     * @return {?}
     */
    invalidate(fullUpdate = true) {
        this._fullUpdate = this._fullUpdate || fullUpdate;
        if (this._toInv) {
            clearTimeout(this._toInv);
            this._toInv = null;
        }
        if (!this.isUpdating) {
            this._toInv = window.setTimeout(() => {
                this.refresh(this._fullUpdate);
            }, Control._REFRESH_INTERVAL);
        }
    }
    /**
     * Refreshes the control.
     *
     * @param {?=} fullUpdate Whether to update the control layout as well as the content.
     * @return {?}
     */
    refresh(fullUpdate = true) {
        if (!this.isUpdating && this._toInv) {
            clearTimeout(this._toInv);
            this._toInv = null;
            this._fullUpdate = false;
        }
        // derived classes should override this...
    }
    /**
     * Invalidates all Wijmo controls contained in an HTML element.
     *
     * Use this method when your application has dynamic panels that change
     * the control's visibility or dimensions. For example, splitters, accordions,
     * and tab controls usually change the visibility of its content elements.
     * In this case, failing to notify the controls contained in the element
     * may cause them to stop working properly.
     *
     * If this happens, you must handle the appropriate event in the dynamic
     * container and call the \@see:Control.invalidateAll method so the contained
     * Wijmo controls will update their layout information properly.
     *
     * @param {?=} e Container element. If set to null, all Wijmo controls
     * on the page will be invalidated.
     * @return {?}
     */
    static invalidateAll(e) {
        if (!e)
            e = document.body;
        const /** @type {?} */ ctl = Control.getControl(e);
        if (ctl) {
            ctl.invalidate();
        }
        if (e.children) {
            for (let /** @type {?} */ i = 0; i < e.children.length; i++) {
                Control.invalidateAll(/** @type {?} */ (e.children[i]));
            }
        }
    }
    /**
     * Refreshes all Wijmo controls contained in an HTML element.
     *
     * This method is similar to \@see:invalidateAll, except the controls
     * are updated immediately rather than after an interval.
     *
     * @param {?=} e Container element. If set to null, all Wijmo controls
     * on the page will be invalidated.
     * @return {?}
     */
    static refreshAll(e) {
        if (!e)
            e = document.body;
        const /** @type {?} */ ctl = Control.getControl(e);
        if (ctl) {
            ctl.refresh();
        }
        if (e.children) {
            for (let /** @type {?} */ i = 0; i < e.children.length; i++) {
                Control.refreshAll(/** @type {?} */ (e.children[i]));
            }
        }
    }
    /**
     * Disposes of all Wijmo controls contained in an HTML element.
     *
     * @param {?=} e Container element.
     * @return {?}
     */
    static disposeAll(e) {
        const /** @type {?} */ ctl = Control.getControl(e);
        if (ctl) {
            ctl.dispose();
        }
        else if (e.children) {
            for (let /** @type {?} */ i = 0; i < e.children.length; i++) {
                Control.disposeAll(/** @type {?} */ (e.children[i]));
            }
        }
    }
    /**
     * Suspends notifications until the next call to \@see:endUpdate.
     * @return {?}
     */
    beginUpdate() {
        this._updating++;
    }
    /**
     * Resumes notifications suspended by calls to \@see:beginUpdate.
     * @return {?}
     */
    endUpdate() {
        this._updating--;
        if (this._updating <= 0) {
            this.invalidate();
        }
    }
    /**
     * Gets a value that indicates whether the control is currently being updated.
     * @return {?}
     */
    get isUpdating() {
        return this._updating > 0;
    }
    /**
     * Executes a function within a \@see:beginUpdate/\@see:endUpdate block.
     *
     * The control will not be updated until the function has been executed.
     * This method ensures \@see:endUpdate is called even if the function throws.
     *
     * @param {?} fn Function to be executed.
     * @return {?}
     */
    deferUpdate(fn) {
        try {
            this.beginUpdate();
            fn();
        }
        finally {
            this.endUpdate();
        }
    }
    /**
     * Gets a value that indicates whether the control is currently handling a touch event.
     * @return {?}
     */
    get isTouching() {
        return Control._touching;
    }
    /**
     * Gets or sets whether the control is disabled.
     *
     * Disabled controls cannot get mouse or keyboard events.
     * @return {?}
     */
    get disabled() {
        return this._e && this._e.getAttribute('disabled') != null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        value = asBoolean(value, true);
        if (value != this.disabled) {
            enable(this._e, !value);
        }
    }
    /**
     * Initializes the control by copying the properties from a given object.
     *
     * This method allows you to initialize controls using plain data objects
     * instead of setting the value of each property in code.
     *
     * For example:
     * <pre>
     * grid.initialize({
     *   itemsSource: myList,
     *   autoGenerateColumns: false,
     *   columns: [
     *     { binding: 'id', header: 'Code', width: 130 },
     *     { binding: 'name', header: 'Name', width: 60 }
     *   ]
     * });
     * // is equivalent to
     * grid.itemsSource = myList;
     * grid.autoGenerateColumns = false;
     * // etc.
     * </pre>
     *
     * The initialization data is type-checked as it is applied. If the
     * initialization object contains unknown property names or invalid
     * data types, this method will throw.
     *
     * @param {?} options Object that contains the initialization data.
     * @return {?}
     */
    initialize(options) {
        if (options) {
            this.beginUpdate();
            copy(this, options);
            this.endUpdate();
        }
    }
    /**
     * Adds an event listener to an element owned by this \@see:Control.
     *
     * The control keeps a list of attached listeners and their handlers,
     * making it easier to remove them when the control is disposed (see the
     * \@see:dispose and \@see:removeEventListener method).
     *
     * Failing to remove event listeners may cause memory leaks.
     *
     * @param {?} target Target element for the event.
     * @param {?} type String that specifies the event.
     * @param {?} fn Function to execute when the event occurs.
     * @param {?=} capture Whether the listener is capturing.
     * @return {?}
     */
    addEventListener(target, type, fn, capture = false) {
        if (target) {
            target.addEventListener(type, fn, capture);
            if (this._listeners == null) {
                this._listeners = [];
            }
            this._listeners.push({ target: target, type: type, fn: fn, capture: capture });
        }
    }
    /**
     * Removes one or more event listeners attached to elements owned by this \@see:Control.
     *
     * @param {?=} target Target element for the event. If null, removes listeners attached to all targets.
     * @param {?=} type String that specifies the event. If null, removes listeners attached to all events.
     * @param {?=} capture Whether the listener is capturing. If null, removes capturing and non-capturing listeners.
     * @return {?}
     */
    removeEventListener(target, type, capture) {
        if (this._listeners) {
            for (let /** @type {?} */ i = 0; i < this._listeners.length; i++) {
                const /** @type {?} */ l = this._listeners[i];
                if (target == null || target == l.target) {
                    if (type == null || type == l.type) {
                        if (capture == null || capture == l.capture) {
                            l.target.removeEventListener(l.type, l.fn, l.capture);
                            this._listeners.splice(i, 1);
                            i--;
                        }
                    }
                }
            }
        }
    }
    /**
     * Raises the \@see:gotFocus event.
     * @param {?=} e
     * @return {?}
     */
    onGotFocus(e) {
        this.gotFocus.raise(this, e);
    }
    /**
     * Raises the \@see:lostFocus event.
     * @param {?=} e
     * @return {?}
     */
    onLostFocus(e) {
        this.lostFocus.raise(this, e);
    }
    /**
     * @return {?}
     */
    _handleResize() {
        if (this._e.parentElement) {
            const /** @type {?} */ sz = new Size(this._e.offsetWidth, this._e.offsetHeight);
            if (!sz.equals(this._szCtl)) {
                this._szCtl = sz;
                this.invalidate();
            }
        }
    }
    /**
     * @return {?}
     */
    _updateFocusState() {
        // use a timeOut since Chrome and FF sometimes move the focus to the body
        // before moving it to the new focused element
        setTimeout(() => {
            // update state for this control
            const /** @type {?} */ focus = this.containsFocus();
            if (focus != this._focus) {
                this._focus = focus;
                if (focus) {
                    this.onGotFocus();
                }
                else {
                    this.onLostFocus();
                }
                toggleClass(this._e, 'wj-state-focused', focus);
            }
            // update state for any parent controls as well
            if (this._e) {
                for (let /** @type {?} */ e = this._e.parentElement; e; e = e.parentElement) {
                    const /** @type {?} */ ctl = Control.getControl(e);
                    if (ctl) {
                        ctl._updateFocusState();
                        break;
                    }
                }
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _handleTouchStart(e) {
        if (e.pointerType == null || e.pointerType == 'touch') {
            Control._touching = true;
            console.log('touching = true');
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _handleTouchEnd(e) {
        if (e.pointerType == null || e.pointerType == 'touch') {
            setTimeout(function () {
                Control._touching = false;
                console.log('touching = false');
            }, 400); // 300ms click event delay on IOS, plus some safety
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _handleDisabled(e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _replaceWithDiv(element) {
        // replace the element
        const /** @type {?} */ p = element.parentElement, /** @type {?} */ div = document.createElement('div');
        p.replaceChild(div, element);
        // copy children
        div.innerHTML = element.innerHTML;
        // copy id and style, or all attributes
        const /** @type {?} */ atts = element.attributes;
        for (let /** @type {?} */ i = 0; i < atts.length; i++) {
            const /** @type {?} */ name = atts[i].name;
            if (name == 'id' || name == 'style') {
                div.setAttribute(name, atts[i].value);
            }
        }
        // return new div
        return div;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _copyOriginalAttributes(e) {
        const /** @type {?} */ atts = this._orgAtts;
        if (atts) {
            for (let /** @type {?} */ i = 0; i < atts.length; i++) {
                const /** @type {?} */ name = atts[i].name.toLowerCase();
                if (name != 'id' && name != 'style' && name != 'type') {
                    e.setAttribute(name, atts[i].value);
                }
            }
        }
    }
}
Control._DATA_KEY = 'wj-Control';
Control._REFRESH_INTERVAL = 10;

let Key = {};
Key.Back = 8;
Key.Tab = 9;
Key.Enter = 13;
Key.Escape = 27;
Key.Space = 32;
Key.PageUp = 33;
Key.PageDown = 34;
Key.End = 35;
Key.Home = 36;
Key.Left = 37;
Key.Up = 38;
Key.Right = 39;
Key.Down = 40;
Key.Delete = 46;
Key.F1 = 112;
Key.F2 = 113;
Key.F3 = 114;
Key.F4 = 115;
Key.F5 = 116;
Key.F6 = 117;
Key.F7 = 118;
Key.F8 = 119;
Key.F9 = 120;
Key.F10 = 121;
Key.F11 = 122;
Key.F12 = 123;
Key[Key.Back] = "Back";
Key[Key.Tab] = "Tab";
Key[Key.Enter] = "Enter";
Key[Key.Escape] = "Escape";
Key[Key.Space] = "Space";
Key[Key.PageUp] = "PageUp";
Key[Key.PageDown] = "PageDown";
Key[Key.End] = "End";
Key[Key.Home] = "Home";
Key[Key.Left] = "Left";
Key[Key.Up] = "Up";
Key[Key.Right] = "Right";
Key[Key.Down] = "Down";
Key[Key.Delete] = "Delete";
Key[Key.F1] = "F1";
Key[Key.F2] = "F2";
Key[Key.F3] = "F3";
Key[Key.F4] = "F4";
Key[Key.F5] = "F5";
Key[Key.F6] = "F6";
Key[Key.F7] = "F7";
Key[Key.F8] = "F8";
Key[Key.F9] = "F9";
Key[Key.F10] = "F10";
Key[Key.F11] = "F11";
Key[Key.F12] = "F12";

//import {showPopup, hidePopup} from '../../core/popup'
/**
 * DropDown control (abstract).
 *
 * Contains an input element and a button used to show or hide the drop-down.
 *
 * Derived classes must override the _createDropDown method to create whatever
 * editor they want to show in the drop down area (a list of items, a calendar,
 * a color editor, etc).
 */
class DropDown extends Control {
    /**
     * Initializes a new instance of a \@see:DropDown control.
     *
     * @param {?} element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param {?=} options The JavaScript object containing initialization data for the control.
     */
    constructor(element, options) {
        super(element, null, true);
        // property storage
        this._showBtn = true;
        this._autoExpand = true;
        /**
         * Occurs when the value of the \@see:text property changes.
         */
        this.textChanged = new Event$1();
        /**
         * Occurs before the drop down is shown or hidden.
         */
        this.isDroppedDownChanging = new Event$1();
        /**
         * Occurs after the drop down is shown or hidden.
         */
        this.isDroppedDownChanged = new Event$1();
        // instantiate and apply template
        const tpl = this.getTemplate();
        this.applyTemplate('wj-control wj-dropdown wj-content', tpl, {
            _tbx: 'input',
            _btn: 'btn',
            _dropDown: 'dropdown'
        }, 'input');
        // set reference element (used for positioning the drop-down)
        this._elRef = this._tbx;
        // disable autocomplete (important for mobile browsers including Chrome/Android)
        this._tbx.autocomplete = 'off';
        // create drop-down element, update button display
        this._createDropDown();
        this._updateBtn();
        // update focus state when the drop-down loses focus
        this.addEventListener(this._dropDown, 'blur', () => {
            this._updateFocusState();
        }, true);
        // keyboard events (the same handlers are used for the control and for the drop-down)
        const kd = this._keydown.bind(this);
        this.addEventListener(this.hostElement, 'keydown', kd);
        this.addEventListener(this.dropDown, 'keydown', kd);
        // textbox events
        this.addEventListener(this._tbx, 'input', () => {
            this._setText(this.text, false);
        });
        this.addEventListener(this._tbx, 'click', () => {
            if (this._autoExpand) {
                this._expandSelection(); // expand the selection to the whole number/word that was clicked
            }
        });
        // in case the drop-down is shown but the control is not (e.g. context menu)
        this.addEventListener(this.dropDown, 'focus', () => {
            this._updateFocusState();
        });
        // IE 9 does not fire an input event when the user removes characters from input
        // filled by keyboard, cut, or drag operations.
        // https://developer.mozilla.org/en-US/docs/Web/Events/input
        // so subscribe to keyup and set the text just in case (TFS 111189)
        if (document.doctype && navigator.appVersion.indexOf('MSIE 9') > -1) {
            this.addEventListener(this._tbx, 'keyup', () => {
                this._setText(this.text, false);
            });
        }
        // handle clicks on the drop-down button
        this.addEventListener(this._btn, 'click', this._btnclick.bind(this));
        // stop propagation of clicks on the drop-down element
        // (since they are not children of the hostElement, which can confuse
        // elements such as Bootstrap menus)
        this.addEventListener(this._dropDown, 'click', (e) => {
            e.stopPropagation();
        });
        // initializing from <input> tag
        if (this._orgTag == 'INPUT') {
            this._copyOriginalAttributes(this._tbx);
        }
    }
    /**
     * Gets or sets the text shown on the control.
     * @return {?}
     */
    get text() {
        return this._tbx.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set text(value) {
        if (value != this.text) {
            this._setText(value, true);
        }
    }
    /**
     * Gets the HTML input element hosted by the control.
     *
     * Use this property in situations where you want to customize the
     * attributes of the input element.
     * @return {?}
     */
    get inputElement() {
        return this._tbx;
    }
    /**
     * Gets or sets the string shown as a hint when the control is empty.
     * @return {?}
     */
    get placeholder() {
        return this._tbx.placeholder;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._tbx.placeholder = value;
    }
    /**
     * Gets or sets a value that indicates whether the drop down is currently visible.
     * @return {?}
     */
    get isDroppedDown() {
        return this._dropDown.style.display != 'none';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDroppedDown(value) {
        value = asBoolean(value) && !this.disabled;
        console.log("is_dropped_down");
        if (value != this.isDroppedDown && this.onIsDroppedDownChanging(new CancelEventArgs())) {
            const /** @type {?} */ dd = this._dropDown;
            if (value) {
                if (!dd.style.minWidth) {
                    dd.style.minWidth = this.hostElement.getBoundingClientRect().width + 'px';
                }
                console.log("dropped_down_setting_block");
                dd.style.display = 'block';
                this._updateDropDown();
            }
            else {
                if (this.containsFocus()) {
                    if (!this.isTouching || !this.showDropDownButton) {
                        this.selectAll();
                    }
                }
                // hidePopup(dd);
                console.log("dropped_down_setting_none");
                dd.style.display = 'none';
            }
            this._updateFocusState();
            this.onIsDroppedDownChanged();
        }
    }
    /**
     * Gets the drop down element shown when the \@see:isDroppedDown
     * property is set to true.
     * @return {?}
     */
    get dropDown() {
        return this._dropDown;
    }
    /**
     * Gets or sets a value that indicates whether the control should display a drop-down button.
     * @return {?}
     */
    get showDropDownButton() {
        return this._showBtn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showDropDownButton(value) {
        this._showBtn = asBoolean(value);
        this._updateBtn();
    }
    /**
     * Gets or sets a value that indicates whether the control should automatically expand the
     * selection to whole words/numbers when the control is clicked.
     * @return {?}
     */
    get autoExpandSelection() {
        return this._autoExpand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoExpandSelection(value) {
        this._autoExpand = asBoolean(value);
    }
    /**
     * Sets the focus to the control and selects all its content.
     * @return {?}
     */
    selectAll() {
        if (this._elRef == this._tbx) {
            setSelectionRange(this._tbx, 0, this.text.length);
        }
    }
    /**
     * Raises the \@see:textChanged event.
     * @param {?=} e
     * @return {?}
     */
    onTextChanged(e) {
        this.textChanged.raise(this, e);
    }
    /**
     * Raises the \@see:isDroppedDownChanging event.
     * @param {?} e
     * @return {?}
     */
    onIsDroppedDownChanging(e) {
        this.isDroppedDownChanging.raise(this, e);
        return !e.cancel;
    }
    /**
     * Raises the \@see:isDroppedDownChanged event.
     * @param {?=} e
     * @return {?}
     */
    onIsDroppedDownChanged(e) {
        this.isDroppedDownChanged.raise(this, e);
    }
    /**
     * @param {?=} e
     * @return {?}
     */
    onGotFocus(e) {
        if (!this.isTouching) {
            this.selectAll();
        }
        super.onGotFocus(e);
    }
    /**
     * @param {?=} e
     * @return {?}
     */
    onLostFocus(e) {
        this._commitText();
        if (!this.containsFocus()) {
            this.isDroppedDown = false;
        }
        super.onLostFocus(e);
    }
    /**
     * @return {?}
     */
    containsFocus() {
        return super.containsFocus() || contains(this._dropDown, document.activeElement);
    }
    /**
     * @return {?}
     */
    dispose() {
        this.isDroppedDown = false;
        super.dispose();
    }
    /**
     * @param {?=} fullUpdate
     * @return {?}
     */
    refresh(fullUpdate = true) {
        super.refresh(fullUpdate);
        // update popup/focus
        if (this.isDroppedDown) {
            if (getComputedStyle(this.hostElement).display != 'none') {
                const /** @type {?} */ ae = (document.activeElement);
                // showPopup(this._dropDown, this.hostElement);
                if (ae instanceof HTMLElement && ae != document.activeElement) {
                    ae.focus();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    _handleResize() {
        if (this.isDroppedDown) {
            this.refresh();
        }
    }
    /**
     * @return {?}
     */
    _expandSelection() {
        const /** @type {?} */ tbx = this._tbx, /** @type {?} */ val = tbx.value;
        let /** @type {?} */ start = tbx.selectionStart, /** @type {?} */ end = tbx.selectionEnd;
        if (val && start == end) {
            const /** @type {?} */ ct = this._getCharType(val, start);
            if (ct > -1) {
                for (; end < val.length; end++) {
                    if (this._getCharType(val, end) != ct) {
                        break;
                    }
                }
                for (; start > 0; start--) {
                    if (this._getCharType(val, start - 1) != ct) {
                        break;
                    }
                }
                if (start != end) {
                    tbx.setSelectionRange(start, end);
                }
            }
        }
    }
    /**
     * @param {?} text
     * @param {?} pos
     * @return {?}
     */
    _getCharType(text, pos) {
        const /** @type {?} */ chr = text[pos];
        if (chr >= '0' && chr <= '9')
            return 0;
        if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' && chr <= 'Z'))
            return 1;
        return -1;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _keydown(e) {
        // honor defaultPrevented
        if (e.defaultPrevented)
            return;
        // handle key
        switch (e.keyCode) {
            // close dropdown on tab, escape, enter
            case Key.Tab:
            case Key.Escape:
            case Key.Enter:
                this.isDroppedDown = false;
                break;
            // toggle drop-down on F4, alt up/down
            case Key.F4:
            case Key.Down:
            case Key.Up:
                if (e.keyCode == Key.F4 || e.altKey) {
                    this.isDroppedDown = !this.isDroppedDown;
                    if (!this.isDroppedDown) {
                        this._tbx.focus();
                    }
                    e.preventDefault();
                }
                break;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _btnclick(e) {
        this.isDroppedDown = !this.isDroppedDown;
    }
    /**
     * @param {?} text
     * @param {?} fullMatch
     * @return {?}
     */
    _setText(text, fullMatch) {
        // make sure we have a string
        if (text == null)
            text = '';
        text = text.toString();
        // update element
        if (text != this._tbx.value) {
            this._tbx.value = text;
        }
        // fire change event
        if (text != this._oldText) {
            this._oldText = text;
            this.onTextChanged();
        }
    }
    /**
     * @return {?}
     */
    _updateBtn() {
        this._btn.tabIndex = -1;
        this._btn.style.display = this._showBtn ? '' : 'none';
    }
    /**
     * @return {?}
     */
    _createDropDown() {
        // override in derived classes
    }
    /**
     * @return {?}
     */
    _commitText() {
        // override in derived classes
    }
    /**
     * @return {?}
     */
    _updateDropDown() {
        if (this.isDroppedDown) {
            this._commitText();
            // showPopup(this._dropDown, this.hostElement);
            console.log("dropped_down_1");
        }
        else {
            console.log("dropped_down_2");
        }
    }
}
/**
 * Gets or sets the template used to instantiate \@see:DropDown controls.
 */
DropDown.controlTemplate = '<div style="position:relative" class="wj-template">' +
    '<div class="wj-input">' +
    '<div class="wj-input-group wj-input-btn-visible">' +
    '<input wj-part="input" type="text" class="wj-form-control" />' +
    '<span wj-part="btn" class="wj-input-group-btn" tabindex="-1">' +
    '<button class="wj-btn wj-btn-default" type="button" tabindex="-1">' +
    '<span class="wj-glyph-down"></span>' +
    '</button>' +
    '</span>' +
    '</div>' +
    '</div>' +
    '<div wj-part="dropdown" class="wj-content wj-dropdown-panel" ' +
    'style="display:none;position:absolute;z-index:100;width:auto">' +
    '</div>' +
    '</div>';

/**
 * Provides arguments for the \@see:formatItem event.
 */
class FormatItemEventArgs extends EventArgs {
    /**
     * Initializes a new instance of a \@see:FormatItemEventArgs.
     *
     * @param {?} index Index of the item being formatted.
     * @param {?} data Data item being formatted.
     * @param {?} item Element that represents the list item to be formatted.
     */
    constructor(index, data, item) {
        super();
        this._index = asNumber(index);
        this._data = data;
        this._item = asType(item, HTMLElement);
    }
    /**
     * Gets the index of the data item in the list.
     * @return {?}
     */
    get index() {
        return this._index;
    }
    /**
     * Gets the data item being formatted.
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * Gets a reference to the element that represents the list item to be formatted.
     * @return {?}
     */
    get item() {
        return this._item;
    }
}

/**
 * The \@see:ListBox control displays a list of items which may contain
 * plain text or HTML, and allows users to select items with the mouse or
 * the keyboard.
 *
 * Use the \@see:selectedIndex property to determine which item is currently
 * selected.
 *
 * You can populate a \@see:ListBox using an array of strings or you can use
 * an array of objects, in which case the \@see:displayPath property determines
 * which object property is displayed on the list.
 *
 * To display HTML rather than plain text, set the \@see:isContentHtml property
 * to true.
 *
 * The example below creates a \@see:ListBox control and populates it using
 * a 'countries' array. The control updates its \@see:selectedIndex and
 * \@see:selectedItem properties as the user moves the selection.
 *
 * \@fiddle:8HnLx
 */
class ListBox extends Control {
    /**
     * Initializes a new instance of a \@see:ListBox.
     *
     * @param {?} element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param {?=} options The JavaScript object containing initialization data for the control.
     */
    constructor(element, options) {
        super(element);
        this._html = false;
        this._search = '';
        this.subscription1 = new Subscription$1();
        this.subscription2 = new Subscription$1();
        /**
         * Occurs when the value of the \@see:selectedIndex property changes.
         */
        this.selectedIndexChanged = new Event$1();
        /**
         * Occurs when the list of items changes.
         */
        this.itemsChanged = new Event$1();
        /**
         * Occurs before the list items are generated.
         */
        this.loadingItems = new Event$1();
        /**
         * Occurs after the list items are generated.
         */
        this.loadedItems = new Event$1();
        /**
         * Occurs when the current item is checked or unchecked by the user.
         *
         * This event is raised when the \@see:checkedMemberPath is set to the name of a
         * property to add checkboxes to each item in the control.
         *
         * Use the \@see:selectedItem property to retrieve the item that was checked or
         * unchecked.
         */
        this.itemChecked = new Event$1();
        /**
         * Occurs when the value of the \@see:checkedItems property changes.
         */
        this.checkedItemsChanged = new Event$1();
        /**
         * Occurs when an element representing a list item has been created.
         *
         * This event can be used to format list items for display. It is similar
         * in purpose to the \@see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         */
        this.formatItem = new Event$1();
        // instantiate and apply template
        this.applyTemplate('wj-control wj-listbox wj-content', null, null);
        // initializing from <select> tag
        if (this._orgTag == 'SELECT') {
            this._copyOriginalAttributes(this.hostElement);
            this._populateSelectElement(this.hostElement);
        }
        // handle mouse and keyboard
        const host = this.hostElement;
        this.addEventListener(host, 'click', this._click.bind(this));
        this.addEventListener(host, 'keydown', this._keydown.bind(this));
        this.addEventListener(host, 'keypress', this._keypress.bind(this));
        // prevent wheel from propagating to parent elements
        this.addEventListener(host, 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll', (e) => {
            if (host.scrollHeight > host.clientHeight) {
                if ((e.wheelDelta > 0 && host.scrollTop == 0) ||
                    (e.wheelDelta < 0 && host.scrollTop + host.clientHeight >= host.scrollHeight)) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        });
        // initialize control options
        this.initialize(options);
    }
    /**
     * Refreshes the list.
     * @return {?}
     */
    refresh() {
        super.refresh();
        this._populateList();
    }
    /**
     * Gets or sets the array or \@see:ICollectionView object that contains the list items.
     * @return {?}
     */
    get itemsSource() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemsSource(value) {
        if (this._items != value) {
            // unbind current collection view
            if (this._cv) {
                this.subscription1.unsubscribe();
                this.subscription2.unsubscribe();
                //this._cv.collectionChanged.removeHandler(this._cvCollectionChanged, this);
                this._cv = null;
            }
            // save new data source and collection view
            this._items = value;
            this._cv = asCollectionView(value);
            // bind new collection view
            if (this._cv != null) {
                this.subscription1 = this._cv.currentChanged.subscribe(data => this._cvCurrentChanged(this, data));
                this.subscription2 = this._cv.collectionChanged.subscribe(data => this._cvCollectionChanged(this, data));
            }
            // update the list
            this._populateList();
            this.onItemsChanged();
            this.onSelectedIndexChanged();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        const /** @type {?} */ ecv = (tryCast(this._cv, 'IEditableCollectionView'));
        ecv.removeAt(index);
    }
    /**
     * Gets the \@see:ICollectionView object used as the item source.
     * @return {?}
     */
    get collectionView() {
        return this._cv;
    }
    /**
     * Gets or sets a value indicating whether items contain plain text or HTML.
     * @return {?}
     */
    get isContentHtml() {
        return this._html;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isContentHtml(value) {
        if (value != this._html) {
            this._html = asBoolean(value);
            this._populateList();
        }
    }
    /**
     * Gets or sets a function used to customize the values shown on the list.
     * The function takes two arguments, the item index and the default text or html, and
     * returns the new text or html to display.
     *
     * If the formatting function needs a scope (i.e. a meaningful 'this'
     * value), then remember to set the filter using the 'bind' function to
     * specify the 'this' object. For example:
     *
     * <pre>
     *   listBox.itemFormatter = customItemFormatter.bind(this);
     *   function customItemFormatter(index, content) {
     *     if (this.makeItemBold(index)) {
     *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
     *     }
     *     return content;
     *   }
     * </pre>
     * @return {?}
     */
    get itemFormatter() {
        return this._itemFormatter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemFormatter(value) {
        if (value != this._itemFormatter) {
            this._itemFormatter = asFunction(value);
            this._populateList();
        }
    }
    /**
     * Gets or sets the name of the property to use as the visual representation of the items.
     * @return {?}
     */
    get displayMemberPath() {
        return this._pathDisplay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set displayMemberPath(value) {
        if (value != this._pathDisplay) {
            this._pathDisplay = asString(value);
            this._populateList();
        }
    }
    /**
     * Gets or sets the name of the property used to get the \@see:selectedValue
     * from the \@see:selectedItem.
     * @return {?}
     */
    get selectedValuePath() {
        return this._pathValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedValuePath(value) {
        this._pathValue = asString(value);
    }
    /**
     * Gets or sets the name of the property used to control the checkboxes
     * placed next to each item.
     *
     * Use this property to create multi-select lisboxes.
     * When an item is checked or unchecked, the control raises the \@see:itemChecked event.
     * Use the \@see:selectedItem property to retrieve the item that was checked or unchecked,
     * or use the \@see:checkedItems property to retrieve the list of items that are currently
     * checked.
     * @return {?}
     */
    get checkedMemberPath() {
        return this._pathChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkedMemberPath(value) {
        if (value != this._pathChecked) {
            this._pathChecked = asString(value);
            this._populateList();
        }
    }
    /**
     * Gets the string displayed for the item at a given index.
     *
     * The string may be plain text or HTML, depending on the setting
     * of the \@see:isContentHtml property.
     *
     * @param {?} index The index of the item.
     * @return {?}
     */
    getDisplayValue(index) {
        // get the text or html
        let /** @type {?} */ item = null;
        if (index > -1 && hasItems(this._cv)) {
            item = this._cv.items[index];
            if (this.displayMemberPath) {
                item = item[this.displayMemberPath];
            }
        }
        let /** @type {?} */ text = item != null ? item.toString() : '';
        // allow caller to override/modify the text or html
        if (this.itemFormatter) {
            text = this.itemFormatter(index, text);
        }
        // return the result
        return text;
    }
    /**
     * Gets the text displayed for the item at a given index (as plain text).
     *
     * @param {?} index The index of the item.
     * @return {?}
     */
    getDisplayText(index) {
        const /** @type {?} */ children = this.hostElement.children, /** @type {?} */ item = index > -1 && index < children.length
            ? (children[index])
            : null;
        return item != null ? item.textContent : '';
    }
    /**
     * Gets or sets the index of the currently selected item.
     * @return {?}
     */
    get selectedIndex() {
        return this._cv ? this._cv.currentPosition : -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        if (this._cv) {
            this._cv.moveCurrentToPosition(asNumber(value));
        }
    }
    /**
     * Gets or sets the item that is currently selected.
     * @return {?}
     */
    get selectedItem() {
        return this._cv ? this._cv.currentItem : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedItem(value) {
        if (this._cv) {
            this._cv.moveCurrentTo(value);
        }
    }
    /**
     * Gets or sets the value of the \@see:selectedItem obtained using the \@see:selectedValuePath.
     * @return {?}
     */
    get selectedValue() {
        let /** @type {?} */ item = this.selectedItem;
        if (item && this.selectedValuePath) {
            item = item[this.selectedValuePath];
        }
        return item;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedValue(value) {
        let /** @type {?} */ path = this.selectedValuePath, /** @type {?} */ index = -1;
        if (this._cv) {
            for (let /** @type {?} */ i = 0; i < this._cv.items.length; i++) {
                const /** @type {?} */ item = this._cv.items[i];
                if ((path && item[path] == value) || (!path && item == value)) {
                    index = i;
                    break;
                }
            }
            this.selectedIndex = index;
        }
    }
    /**
     * Gets or sets the maximum height of the list.
     * @return {?}
     */
    get maxHeight() {
        const /** @type {?} */ host = this.hostElement;
        return host ? parseFloat(host.style.maxHeight) : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxHeight(value) {
        const /** @type {?} */ host = this.hostElement;
        if (host) {
            host.style.maxHeight = asNumber(value) + 'px';
        }
    }
    /**
     * Highlights the selected item and scrolls it into view.
     * @return {?}
     */
    showSelection() {
        const /** @type {?} */ index = this.selectedIndex, /** @type {?} */ host = this.hostElement, /** @type {?} */ children = host.children;
        let /** @type {?} */ e;
        // highlight
        for (let /** @type {?} */ i = 0; i < children.length; i++) {
            e = (children[i]);
            toggleClass(e, 'wj-state-selected', i == index);
        }
        // scroll into view
        if (index > -1 && index < children.length) {
            e = (children[index]);
            const /** @type {?} */ rco = e.getBoundingClientRect();
            const /** @type {?} */ rcc = this.hostElement.getBoundingClientRect();
            if (rco.bottom > rcc.bottom) {
                host.scrollTop += rco.bottom - rcc.bottom;
            }
            else if (rco.top < rcc.top) {
                host.scrollTop -= rcc.top - rco.top;
            }
        }
        // make sure the focus is within the selected element (TFS 135278)
        if (index > -1 && this.containsFocus()) {
            e = (children[index]);
            if (e instanceof HTMLElement && !contains(e, document.activeElement)) {
                e.focus();
            }
        }
    }
    /**
     * Gets the checked state of an item on the list.
     *
     * This method is applicable only on multi-select listboxes
     * (see the \@see:checkedMemberPath property).
     *
     * @param {?} index Item index.
     * @return {?}
     */
    getItemChecked(index) {
        const /** @type {?} */ item = this._cv.items[index];
        if (isObject(item) && this.checkedMemberPath) {
            return item[this.checkedMemberPath];
        }
        const /** @type {?} */ cb = this._getCheckbox(index);
        return cb ? cb.checked : false;
    }
    /**
     * Sets the checked state of an item on the list.
     *
     * This method is applicable only on multi-select listboxes
     * (see the \@see:checkedMemberPath property).
     *
     * @param {?} index Item index.
     * @param {?} checked Item's new checked state.
     * @return {?}
     */
    setItemChecked(index, checked) {
        this._setItemChecked(index, checked, true);
    }
    /**
     * Toggles the checked state of an item on the list.
     * This method is applicable only to multi-select listboxes
     * (see the \@see:checkedMemberPath property).
     *
     * @param {?} index Item index.
     * @return {?}
     */
    toggleItemChecked(index) {
        this.setItemChecked(index, !this.getItemChecked(index));
    }
    /**
     * Gets or sets an array containing the items that are currently checked.
     * @return {?}
     */
    get checkedItems() {
        const /** @type {?} */ arr = [];
        if (this._cv) {
            for (let /** @type {?} */ i = 0; i < this._cv.items.length; i++) {
                if (this.getItemChecked(i)) {
                    arr.push(this._cv.items[i]);
                }
            }
        }
        return arr;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checkedItems(value) {
        const /** @type {?} */ cv = this._cv, /** @type {?} */ arr = asArray(value, false);
        if (cv && arr) {
            const /** @type {?} */ pos = cv.currentPosition;
            for (let /** @type {?} */ i = 0; i < cv.items.length; i++) {
                const /** @type {?} */ item = cv.items[i];
                this._setItemChecked(i, arr.indexOf(item) > -1, false);
            }
            cv.moveCurrentToPosition(pos);
            this.onCheckedItemsChanged();
        }
    }
    /**
     * Raises the \@see:selectedIndexChanged event.
     * @param {?=} e
     * @return {?}
     */
    onSelectedIndexChanged(e) {
        this.selectedIndexChanged.raise(this, e);
    }
    /**
     * Raises the \@see:itemsChanged event.
     * @param {?=} e
     * @return {?}
     */
    onItemsChanged(e) {
        this.itemsChanged.raise(this, e);
    }
    /**
     * Raises the \@see:loadingItems event.
     * @param {?=} e
     * @return {?}
     */
    onLoadingItems(e) {
        this.loadingItems.raise(this, e);
    }
    /**
     * Raises the \@see:loadedItems event.
     * @param {?=} e
     * @return {?}
     */
    onLoadedItems(e) {
        this.loadedItems.raise(this, e);
    }
    /**
     * Raises the \@see:itemCheched event.
     * @param {?=} e
     * @return {?}
     */
    onItemChecked(e) {
        this.itemChecked.raise(this, e);
    }
    /**
     * Raises the \@see:checkedItemsChanged event.
     * @param {?=} e
     * @return {?}
     */
    onCheckedItemsChanged(e) {
        this.checkedItemsChanged.raise(this, e);
    }
    /**
     * Raises the \@see:formatItem event.
     *
     * @param {?} e \@see:FormatItemEventArgs that contains the event data.
     * @return {?}
     */
    onFormatItem(e) {
        this.formatItem.raise(this, e);
    }
    /**
     * @param {?} index
     * @param {?} checked
     * @param {?=} notify
     * @return {?}
     */
    _setItemChecked(index, checked, notify = true) {
        // update data item
        const /** @type {?} */ item = this._cv.items[index];
        if (isObject(item)) {
            const /** @type {?} */ ecv = (tryCast(this._cv, 'IEditableCollectionView'));
            if (item[this.checkedMemberPath] != checked) {
                this._checking = true;
                if (ecv) {
                    ecv.editItem(item);
                    item[this.checkedMemberPath] = checked;
                    ecv.commitEdit();
                }
                else {
                    item[this.checkedMemberPath] = checked;
                    this._cv.refresh();
                }
                this._checking = false;
            }
        }
        // update checkbox value
        const /** @type {?} */ cb = this._getCheckbox(index);
        if (cb && cb.checked != checked) {
            cb.checked = checked;
        }
        // fire events
        if (notify) {
            this.onItemChecked();
            this.onCheckedItemsChanged();
        }
    }
    /**
     * @param {?} sender
     * @param {?} e
     * @return {?}
     */
    _cvCollectionChanged(sender, e) {
        console.log("list_box_collection_view_changed_start");
        if (e.action != 1) {
            if (!this._checking) {
                this._populateList();
                this.onItemsChanged();
            }
        }
        else {
            console.log("list_box_collection_view_changed_is_remove");
        }
    }
    /**
     * @param {?} sender
     * @param {?} e
     * @return {?}
     */
    _cvCurrentChanged(sender, e) {
        console.log("cv_current_changed");
        this.showSelection();
        this.onSelectedIndexChanged();
    }
    /**
     * @return {?}
     */
    _populateList() {
        console.log("list_box_populate_list_start");
        // get ready to populate
        const /** @type {?} */ host = this.hostElement;
        if (host) {
            // remember if we have focus
            const /** @type {?} */ focus = this.containsFocus();
            // fire event so user can clean up any current items
            this.onLoadingItems();
            // populate
            host.innerHTML = '';
            if (this._cv) {
                for (let /** @type {?} */ i = 0; i < this._cv.items.length; i++) {
                    console.log("list_box_populate_list:" + i);
                    // get item text
                    let /** @type {?} */ text = this.getDisplayValue(i);
                    if (this._html != true) {
                        text = escapeHtml(text);
                    }
                    // add checkbox (without tabindex attribute: TFS 135857)
                    if (this.checkedMemberPath) {
                        const /** @type {?} */ checked = this._cv.items[i][this.checkedMemberPath];
                        text = '<label><input type="checkbox"' + (checked ? ' checked' : '') + '> ' + text + '</label>';
                    }
                    // build item
                    const /** @type {?} */ item = document.createElement('div');
                    item.innerHTML = text;
                    item.className = 'wj-listbox-item';
                    if (hasClass(/** @type {?} */ (item.firstChild), 'wj-separator')) {
                        item.className += ' wj-separator';
                    }
                    // allow custom formatting
                    if (this.formatItem.hasHandlers) {
                        const /** @type {?} */ e = new FormatItemEventArgs(i, this._cv.items[i], item);
                        this.onFormatItem(e);
                    }
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
            if (focus && !this.containsFocus()) {
                this.focus();
            }
            // scroll selection into view
            this.showSelection();
            // fire event so user can hook up to items
            this.onLoadedItems();
        }
        console.log("list_box_populate_list_finish");
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _click(e) {
        // select the item that was clicked
        const /** @type {?} */ children = this.hostElement.children;
        for (let /** @type {?} */ index = 0; index < children.length; index++) {
            if (contains(children[index], e.target)) {
                this.selectedIndex = index;
                this.removeAt(index);
                this._cv.refresh();
                //	this.refresh();
                break;
            }
        }
        // handle checkboxes
        if (this.checkedMemberPath && this.selectedIndex > -1) {
            const /** @type {?} */ cb = this._getCheckbox(this.selectedIndex);
            if (cb == e.target) {
                this.setItemChecked(this.selectedIndex, cb.checked);
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _keydown(e) {
        // honor defaultPrevented
        if (e.defaultPrevented)
            return;
        // not interested in meta keys
        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
            return;
        // handle the event
        var /** @type {?} */ index = this.selectedIndex, /** @type {?} */ host = this.hostElement, /** @type {?} */ children = host.children;
        switch (e.keyCode) {
            case Key.Down:
                e.preventDefault();
                if (index < children.length - 1) {
                    this.selectedIndex++;
                }
                break;
            case Key.Up:
                e.preventDefault();
                if (index > 0) {
                    this.selectedIndex--;
                }
                break;
            case Key.Home:
                e.preventDefault();
                this.selectedIndex = 0;
                break;
            case Key.End:
                e.preventDefault();
                this.selectedIndex = children.length - 1;
                break;
            case Key.PageDown:
                e.preventDefault();
                if (this.selectedIndex > -1) {
                    var /** @type {?} */ index = this.selectedIndex, /** @type {?} */ height = host.offsetHeight, /** @type {?} */ offset = 0;
                    for (var /** @type {?} */ i = index + 1; i < this._cv.items.length; i++) {
                        var /** @type {?} */ itemHeight = children[i].scrollHeight;
                        if (offset + itemHeight > height) {
                            this.selectedIndex = i;
                            break;
                        }
                        offset += itemHeight;
                    }
                    if (this.selectedIndex == index) {
                        this._cv.moveCurrentToLast();
                    }
                }
                break;
            case Key.PageUp:
                e.preventDefault();
                if (this.selectedIndex > -1) {
                    var /** @type {?} */ index = this.selectedIndex, /** @type {?} */ height = host.offsetHeight, /** @type {?} */ offset = 0;
                    for (var /** @type {?} */ i = index - 1; i > 0; i--) {
                        var /** @type {?} */ itemHeight = children[i].scrollHeight;
                        if (offset + itemHeight > height) {
                            this.selectedIndex = i;
                            break;
                        }
                        offset += itemHeight;
                    }
                    if (this.selectedIndex == index) {
                        this._cv.moveCurrentToFirst();
                    }
                }
                break;
            case Key.Space:
                if (this.checkedMemberPath && this.selectedIndex > -1) {
                    const /** @type {?} */ cb = this._getCheckbox(this.selectedIndex);
                    if (cb) {
                        this.hostElement.focus(); // take focus from the checkbox (FireFox, TFS 135857)
                        this.setItemChecked(this.selectedIndex, !cb.checked);
                        e.preventDefault();
                    }
                }
                break;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _keypress(e) {
        // honor defaultPrevented
        if (e.defaultPrevented)
            return;
        // don't interfere with inner input elements (TFS 132081)
        if (e.target instanceof HTMLInputElement)
            return;
        // auto search
        if (e.charCode > 32 || (e.charCode == 32 && this._search)) {
            e.preventDefault();
            // update search string
            this._search += String.fromCharCode(e.charCode).toLowerCase();
            if (this._toSearch) {
                clearTimeout(this._toSearch);
            }
            this._toSearch = window.setTimeout(() => {
                this._toSearch = 0;
                this._search = '';
            }, 600);
            // perform search
            if (this.hostElement) {
                const /** @type {?} */ cnt = this.hostElement.childElementCount;
                for (let /** @type {?} */ off = this._search.length > 1 ? 0 : 1; off < cnt; off++) {
                    const /** @type {?} */ idx = (this.selectedIndex + off) % cnt, /** @type {?} */ txt = this.getDisplayText(idx).trim().toLowerCase();
                    if (txt.indexOf(this._search) == 0) {
                        this.selectedIndex = idx;
                        break;
                    }
                }
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    _getCheckbox(index) {
        if (!this.hostElement) {
            return null;
        }
        const /** @type {?} */ li = this.hostElement.children[index];
        return (li.querySelector('input[type=checkbox]'));
    }
    /**
     * @param {?} hostElement
     * @return {?}
     */
    _populateSelectElement(hostElement) {
        const /** @type {?} */ children = hostElement.children, /** @type {?} */ items = [];
        let /** @type {?} */ selIndex = -1;
        for (let /** @type {?} */ i = 0; i < children.length; i++) {
            const /** @type {?} */ child = (children[i]);
            if (child.tagName == 'OPTION') {
                // keep track of selected item
                if (child.hasAttribute('selected')) {
                    selIndex = items.length;
                }
                // add option to collectionView
                if (child.innerHTML) {
                    items.push({
                        hdr: child.innerHTML,
                        val: child.getAttribute('value'),
                        cmdParam: child.getAttribute('cmd-param')
                    });
                }
                else {
                    items.push({
                        hdr: '<div class="wj-separator"/>'
                    });
                }
                // remove child from host
                hostElement.removeChild(child);
                i--;
            }
        }
        // apply items to control
        if (items) {
            this.displayMemberPath = 'hdr';
            this.selectedValuePath = 'val';
            this.itemsSource = items;
            this.selectedIndex = selIndex;
        }
    }
}

/**
 * The \@see:ComboBox control allows users to pick strings from lists.
 *
 * The control automatically completes entries as the user types, and allows users
 * to show a drop-down list with the items available.
 *
 * Use the \@see:selectedIndex or the \@see:text properties to determine which
 * item is currently selected.
 *
 * The \@see:isEditable property determines whether users can enter values that
 * are not present in the list.
 *
 * The example below creates a \@see:ComboBox control and populates it with a list
 * of countries. The \@see:ComboBox searches for the country as the user types.
 * The <b>isEditable</b> property is set to false, so the user is forced to
 * select one of the items in the list.
 *
 * The example also shows how to create and populate a \@see:ComboBox using
 * an HTML <b>&lt;select;&gt</b> element with <b>&lt;option;&gt</b> child
 * elements.
 *
 * \@fiddle:8HnLx
 */
class ComboBox extends DropDown {
    /**
     * Initializes a new instance of a \@see:ComboBox control.
     *
     * @param {?} element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
     * @param {?=} options The JavaScript object containing initialization data for the control.
     */
    constructor(element, options) {
        super(element);
        // property storage
        this._required = true;
        this._editable = false;
        // private stuff
        this._composing = false;
        this._deleting = false;
        this._settingText = false;
        /**
         * Occurs when the value of the \@see:selectedIndex property changes.
         */
        this.selectedIndexChanged = new Event$1();
        // disable auto-expand by default
        this.autoExpandSelection = false;
        // handle IME
        this.addEventListener(this._tbx, 'compositionstart', () => {
            this._composing = true;
        });
        this.addEventListener(this._tbx, 'compositionend', () => {
            this._composing = false;
            this._setText(this.text, true);
        });
        // use wheel to scroll through the items
        const evt = 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
        this.addEventListener(this.hostElement, evt, (e) => {
            if (this.containsFocus() && !this.isDroppedDown && !e.defaultPrevented) {
                if (this.selectedIndex > -1) {
                    const step = clamp(e.wheelDelta || -e.detail, -1, +1);
                    this.selectedIndex = clamp(this.selectedIndex - step, 0, this.collectionView.items.length - 1);
                    e.preventDefault();
                }
            }
        });
        // initializing from <select> tag
        if (this._orgTag == 'SELECT') {
            this._copyOriginalAttributes(this.hostElement);
            this._lbx._populateSelectElement(this.hostElement);
        }
        // initialize control options
        this.initialize(options);
    }
    /**
     * Gets or sets the array or \@see:ICollectionView object that contains the items to select from.
     * @return {?}
     */
    get itemsSource() {
        return this._lbx.itemsSource;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemsSource(value) {
        this._lbx.itemsSource = value;
        this._updateBtn();
    }
    /**
     * Gets the \@see:ICollectionView object used as the item source.
     * @return {?}
     */
    get collectionView() {
        return this._lbx.collectionView;
    }
    /**
     * Gets or sets the name of the property to use as the visual representation of the items.
     * @return {?}
     */
    get displayMemberPath() {
        return this._lbx.displayMemberPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set displayMemberPath(value) {
        this._lbx.displayMemberPath = value;
        const /** @type {?} */ text = this.getDisplayText();
        if (this.text != text) {
            this._setText(text, true);
        }
    }
    /**
     * Gets or sets the name of a property to use for getting the value displayed in the
     * control's input element.
     *
     * The default value for this property is null, which causes the control to display
     * the same content in the input element as in the selected item of the drop-down list.
     *
     * Use this property if you want to de-couple the value shown in the input element
     * from the values shown in the drop-down list. For example, the input element could
     * show an item's name and the drop-down list could show additional detail.
     * @return {?}
     */
    get headerPath() {
        return this._hdrPath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set headerPath(value) {
        this._hdrPath = asString(value);
        const /** @type {?} */ text = this.getDisplayText();
        if (this.text != text) {
            this._setText(text, true);
        }
    }
    /**
     * Gets or sets the name of the property used to get the \@see:selectedValue from the \@see:selectedItem.
     * @return {?}
     */
    get selectedValuePath() {
        return this._lbx.selectedValuePath;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedValuePath(value) {
        this._lbx.selectedValuePath = value;
    }
    /**
     * Gets or sets a value indicating whether the drop-down list displays items as plain text or as HTML.
     * @return {?}
     */
    get isContentHtml() {
        return this._lbx.isContentHtml;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isContentHtml(value) {
        if (value != this.isContentHtml) {
            this._lbx.isContentHtml = asBoolean(value);
            let /** @type {?} */ text = this.getDisplayText();
            if (this.text != text) {
                this._setText(text, true);
            }
        }
    }
    /**
     * Gets or sets a function used to customize the values shown in the drop-down list.
     * The function takes two arguments, the item index and the default text or html, and
     * returns the new text or html to display.
     *
     * If the formatting function needs a scope (i.e. a meaningful 'this'
     * value), then remember to set the filter using the 'bind' function to
     * specify the 'this' object. For example:
     *
     * <pre>
     *   comboBox.itemFormatter = customItemFormatter.bind(this);
     *   function customItemFormatter(index, content) {
     *     if (this.makeItemBold(index)) {
     *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
     *     }
     *     return content;
     *   }
     * </pre>
     * @return {?}
     */
    get itemFormatter() {
        return this._lbx.itemFormatter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemFormatter(value) {
        this._lbx.itemFormatter = asFunction(value);
    }
    /**
     * Gets or sets the index of the currently selected item in the drop-down list.
     * @return {?}
     */
    get selectedIndex() {
        return this._lbx.selectedIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        if (value != this.selectedIndex) {
            this._lbx.selectedIndex = value;
        }
        const /** @type {?} */ text = this.getDisplayText(value);
        if (this.text != text) {
            this._setText(text, true);
        }
    }
    /**
     * Gets or sets the item that is currently selected in the drop-down list.
     * @return {?}
     */
    get selectedItem() {
        return this._lbx.selectedItem;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedItem(value) {
        this._lbx.selectedItem = value;
    }
    /**
     * Gets or sets the value of the \@see:selectedItem, obtained using the \@see:selectedValuePath.
     * @return {?}
     */
    get selectedValue() {
        return this._lbx.selectedValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedValue(value) {
        this._lbx.selectedValue = value;
    }
    /**
     * Gets or sets whether the control value must be set to a non-null value
     * or whether it can be set to null (by deleting the content of the control).
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = asBoolean(value);
    }
    /**
     * Gets or sets a value that enables or disables editing of the text
     * in the input element of the \@see:ComboBox (defaults to false).
     * @return {?}
     */
    get isEditable() {
        return this._editable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isEditable(value) {
        this._editable = asBoolean(value);
    }
    /**
     * Gets or sets the maximum height of the drop-down list.
     * @return {?}
     */
    get maxDropDownHeight() {
        return this._lbx.maxHeight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDropDownHeight(value) {
        this._lbx.maxHeight = asNumber(value);
    }
    /**
     * Gets or sets the maximum width of the drop-down list.
     *
     * The width of the drop-down list is also limited by the width of
     * the control itself (that value represents the drop-down's minimum width).
     * @return {?}
     */
    get maxDropDownWidth() {
        const /** @type {?} */ lbx = (this._dropDown);
        return parseInt(lbx.style.maxWidth);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDropDownWidth(value) {
        const /** @type {?} */ lbx = (this._dropDown);
        lbx.style.maxWidth = asNumber(value) + 'px';
    }
    /**
     * Gets the string displayed in the input element for the item at a
     * given index (always plain text).
     *
     * @param {?=} index The index of the item to retrieve the text for.
     * @return {?}
     */
    getDisplayText(index = this.selectedIndex) {
        // get display text directly from the headerPath if that was specified
        if (this.headerPath && index > -1 && hasItems(this.collectionView)) {
            const /** @type {?} */ item = this.collectionView.items[index][this.headerPath];
            let /** @type {?} */ text = item != null ? item.toString() : '';
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
    /**
     * Raises the \@see:selectedIndexChanged event.
     * @param {?=} e
     * @return {?}
     */
    onSelectedIndexChanged(e) {
        this._updateBtn();
        this.selectedIndexChanged.raise(this, e);
        console.log("droppped_down_setting_to_false");
        //this.isDroppedDown = false;
    }
    /**
     * Gets the index of the first item that matches a given string.
     *
     * @param {?} text The text to search for.
     * @param {?} fullMatch A value indicating whether to look for a full match or just the start of the string.
     * @return {?} The index of the item, or -1 if not found.
     */
    indexOf(text, fullMatch) {
        const /** @type {?} */ cv = this.collectionView;
        if (hasItems(cv) && text) {
            text = text.toString().toLowerCase();
            for (let /** @type {?} */ i = 0; i < cv.items.length; i++) {
                const /** @type {?} */ t = this.getDisplayText(i).toLowerCase();
                if (fullMatch) {
                    if (t == text) {
                        return i;
                    }
                }
                else {
                    if (t.indexOf(text) == 0) {
                        return i;
                    }
                }
            }
        }
        return -1;
    }
    /**
     * Gets the \@see:ListBox control shown in the drop-down.
     * @return {?}
     */
    get listBox() {
        return this._lbx;
    }
    /**
     * @param {?=} e
     * @return {?}
     */
    onLostFocus(e) {
        if (this.isEditable && this.required && !this.text) {
            if (hasItems(this.collectionView)) {
                this.selectedIndex = 0;
            }
        }
        super.onLostFocus(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onIsDroppedDownChanging(e) {
        console.log("combo_box_dropped_down_changing:" + e);
        var /** @type {?} */ changing = hasItems(this.collectionView)
            ? super.onIsDroppedDownChanging(e)
            : false;
        if (hasItems(this.collectionView) == 0) {
            console.log("combo_box_dropped_down_changing_is_empty");
            changing = true;
        }
        console.log("combo_box_dropped_down:" + changing);
        return changing;
    }
    /**
     * @param {?=} e
     * @return {?}
     */
    onIsDroppedDownChanged(e) {
        super.onIsDroppedDownChanged(e);
        console.log("combo_box_dropped_down_changed");
        if (this.isDroppedDown) {
            this._lbx.showSelection();
            if (!this.isTouching) {
                this.selectAll();
            }
        }
    }
    /**
     * @return {?}
     */
    _updateBtn() {
        const /** @type {?} */ cv = this.collectionView;
        console.log("combo_box_update_btn");
        console.log("combo_box_update_btn:" + hasItems(cv));
        console.log("combo_box_update_btn:" + this._showBtn);
        this._btn.style.display = this._showBtn && hasItems(cv) ? '' : 'none';
        console.log("combo_box_update_btn_display:" + this._btn.style.display);
    }
    /**
     * @return {?}
     */
    _createDropDown() {
        // create the drop-down element
        this._lbx = new ListBox(this._dropDown);
        // limit the size of the drop-down
        this._lbx.maxHeight = 200;
        // update our selection when user picks an item from the ListBox
        // or when the selected index changes because the list changed
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
        this.addEventListener(this._dropDown, 'click', (e) => {
            if (e.target != this._dropDown) {
                this.isDroppedDown = false;
            }
        });
    }
    /**
     * @param {?} text
     * @param {?} fullMatch
     * @return {?}
     */
    _setText(text, fullMatch) {
        // not while composing IME text...
        if (this._composing)
            return;
        // prevent reentrant calls while moving CollectionView cursor
        if (this._settingText)
            return;
        this._settingText = true;
        // make sure we have a string
        if (text == null)
            text = '';
        text = text.toString();
        // get variables we need
        let /** @type {?} */ index = this.selectedIndex;
        const /** @type {?} */ cv = this.collectionView;
        let /** @type {?} */ start = this._getSelStart(), /** @type {?} */ len = -1;
        // require full match if deleting (to avoid auto-completion)
        if (this._deleting) {
            fullMatch = true;
        }
        // try autocompletion
        if (this._deleting) {
            index = this.indexOf(text, true);
        }
        else {
            index = this.indexOf(text, fullMatch);
            if (index < 0 && fullMatch) {
                index = this.indexOf(text, false);
            }
            if (index < 0 && start > 0) {
                index = this.indexOf(text.substr(0, start), false);
            }
        }
        // not found and not editable? restore old text and move cursor to matching part
        if (index < 0 && !this.isEditable && hasItems(cv) && this._oldText) {
            if (this.required || text) {
                index = Math.max(0, this.indexOf(this._oldText, false));
                for (let /** @type {?} */ i = 0; i < text.length && i < this._oldText.length; i++) {
                    if (text[i] != this._oldText[i]) {
                        start = i;
                        break;
                    }
                }
            }
        }
        if (index > -1) {
            len = start;
            text = this.getDisplayText(index);
        }
        // update collectionView
        if (cv) {
            cv.moveCurrentToPosition(index);
        }
        // update element
        if (text != this._tbx.value) {
            this._tbx.value = text;
        }
        // update text selection
        if (len > -1 && this.containsFocus() && !this.isTouching) {
            this._setSelectionRange(len, text.length);
        }
        // call base class to fire textChanged event
        super._setText(text, fullMatch);
        // clear flags
        this._deleting = false;
        this._settingText = false;
    }
    /**
     * @param {?} text
     * @param {?} step
     * @return {?}
     */
    _findNext(text, step) {
        if (this.collectionView) {
            text = text.toLowerCase();
            const /** @type {?} */ len = this.collectionView.items.length;
            let /** @type {?} */ index, /** @type {?} */ t;
            for (let /** @type {?} */ i = 1; i <= len; i++) {
                index = (this.selectedIndex + i * step + len) % len;
                t = this.getDisplayText(index).toLowerCase();
                if (t.indexOf(text) == 0) {
                    return index;
                }
            }
        }
        return this.selectedIndex;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _keydown(e) {
        // allow base class
        super._keydown(e);
        // if the base class handled this, we're done
        if (e.defaultPrevented) {
            return;
        }
        // if the input element is not visible, we're done (e.g. menu)
        if (this._elRef != this._tbx) {
            return;
        }
        // remember we pressed a key when handling the TextChanged event
        if (e.keyCode == Key.Back || e.keyCode == Key.Delete) {
            this._deleting = true;
        }
        // not if we have no items
        let /** @type {?} */ cv = this.collectionView;
        if (!cv || !cv.items) {
            return;
        }
        // handle key
        let /** @type {?} */ start = -1;
        switch (e.keyCode) {
            // select previous item (or wrap back to the last)
            case Key.Up:
                start = this._getSelStart();
                this.selectedIndex = this._findNext(this.text.substr(0, start), -1);
                this._setSelectionRange(start, this.text.length);
                e.preventDefault();
                break;
            // select next item (or wrap back to the first, or show dropdown)
            case Key.Down:
                start = this._getSelStart();
                this.selectedIndex = this._findNext(this.text.substr(0, start), +1);
                this._setSelectionRange(start, this.text.length);
                e.preventDefault();
                break;
        }
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _setSelectionRange(start, end) {
        if (this._elRef == this._tbx) {
            setSelectionRange(this._tbx, start, end);
        }
    }
    /**
     * @return {?}
     */
    _getSelStart() {
        return this._tbx && this._tbx.value
            ? this._tbx.selectionStart
            : 0;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { DropDown, ComboBox, ClarityModule, ClrResponsiveNavigationService as ɵa, Control as ɵb };
//# sourceMappingURL=ui-components-light.js.map
