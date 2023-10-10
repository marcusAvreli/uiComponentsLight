import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
class ClarityModule {
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

//import {DateTime} from "../core/index";
//import {Event} from "../event/Event";
//import {EventArgs} from "../eventArgs/EventArgs";
//import {CancelEventArgs} from "../eventArgs/CancelEventArgs";
//import {assert, asFunction, asBoolean, clamp, isPrimitive, tryCast, asArray, asInt} from "../core";
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
//import {EventEmitter} from "@angular/core";
//import {$$observable} from "rxjs/symbol/observable";
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

/**
 * Asserts that a value is an \@see:ICollectionView or an Array.
 *
 * @param {?} value Array or \@see:ICollectionView.
 * @param {?=} nullOK Whether null values are acceptable.
 * @return {?} The \@see:ICollectionView that was passed in or a \@see:CollectionView
 * created from the array that was passed in.
 */

//import { mapDataRespectingGrouping } from "./util";
//import * as _ from "lodash";
//import { CommonStore } from "./Store/CommonStore/CommonStore";
// var operationManager = new OperationManager();

/**
 * Provides binding to complex properties (e.g. 'customer.address.city')
 */

/**
 * Class that represents a rectangle (with left, top, width, and height).
 */

/**
 * Casts a value to a type if possible.
 *
 * @param {?} value Value to cast.
 * @param {?} type Type or interface name to cast to.
 * @return {?} The value passed in if the cast was successful, null otherwise.
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
 * @param {?} value
 * @param {?=} nullOK
 * @return {?}
 */

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

/**
 * Asserts that a value is an integer.
 *
 * @param {?} value Value supposed to be an integer.
 * @param {?=} nullOK Whether null values are acceptable.
 * @param {?=} positive Whether to accept only positive integers.
 * @return {?} The number passed in.
 */

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
        console.log("control_constructor");
        // get the host element
        let host = getElement(element);
        this._e = host;
        host[Control._DATA_KEY] = this;
        const hd = this._handleDisabled.bind(this);
        this.addEventListener(host, 'click', hd, true);
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
     * @param {?} target
     * @param {?} type
     * @param {?} fn
     * @param {?=} capture
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
        console.log("apply_template_start");
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
        console.log("apply_template_finish");
        return tpl;
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
        return null;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    static getControl(element) {
        const /** @type {?} */ e = getElement(element);
        return e ? asType(e[Control._DATA_KEY], Control, true) : null;
    }
}
Control._DATA_KEY = 'wj-Control';
Control._REFRESH_INTERVAL = 10;

//import {Color} from '../../core';
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
        super(element, true);
        // property storage
        this._showBtn = true;
        this._autoExpand = true;
        console.log("drop_down_constructor_start");
        // instantiate and apply template
        const tpl = '<div style="position:relative" class="wj-template">' +
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
        //this._createDropDown();
        //this._updateBtn();
        // update focus state when the drop-down loses focus
        console.log("drop_down_constructor_finish");
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
 * Generated bundle index. Do not edit.
 */

export { DropDown, ClarityModule, Control as ɵa };
//# sourceMappingURL=ui-components-light.js.map
