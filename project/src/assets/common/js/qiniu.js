/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 2);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * Created by guhao on 2017/8/24.
         */
        ;var MXI_DEBUG = true;
        /**
         * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
         * v1.5.3
         *
         * Copyright 2013, Moxiecode Systems AB
         * Released under GPL License.
         *
         * License: http://www.plupload.com/license
         * Contributing: http://www.plupload.com/contributing
         *
         * Date: 2017-02-02
         */
        ;(function (global, factory) {
            var extract = function() {
                var ctx = {};
                factory.apply(ctx, arguments);
                return ctx.moxie;
            };

            if (true) {
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (extract),
                    __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                        (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module === "object" && module.exports) {
                module.exports = extract();
            } else {
                global.moxie = extract();
            }
        }(this || window, function() {
            /**
             * Compiled inline version. (Library mode)
             */

            /*jshint smarttabs:true, undef:true, latedef:true, curly:true, bitwise:true, camelcase:true */
            /*globals $code */

            (function(exports, undefined) {
                "use strict";

                var modules = {};

                function require(ids, callback) {
                    var module, defs = [];

                    for (var i = 0; i < ids.length; ++i) {
                        module = modules[ids[i]] || resolve(ids[i]);
                        if (!module) {
                            throw 'module definition dependecy not found: ' + ids[i];
                        }

                        defs.push(module);
                    }

                    callback.apply(null, defs);
                }

                function define(id, dependencies, definition) {
                    if (typeof id !== 'string') {
                        throw 'invalid module definition, module id must be defined and be a string';
                    }

                    if (dependencies === undefined) {
                        throw 'invalid module definition, dependencies must be specified';
                    }

                    if (definition === undefined) {
                        throw 'invalid module definition, definition function must be specified';
                    }

                    require(dependencies, function() {
                        modules[id] = definition.apply(null, arguments);
                    });
                }

                function defined(id) {
                    return !!modules[id];
                }

                function resolve(id) {
                    var target = exports;
                    var fragments = id.split(/[.\/]/);

                    for (var fi = 0; fi < fragments.length; ++fi) {
                        if (!target[fragments[fi]]) {
                            return;
                        }

                        target = target[fragments[fi]];
                    }

                    return target;
                }

                function expose(ids) {
                    for (var i = 0; i < ids.length; i++) {
                        var target = exports;
                        var id = ids[i];
                        var fragments = id.split(/[.\/]/);

                        for (var fi = 0; fi < fragments.length - 1; ++fi) {
                            if (target[fragments[fi]] === undefined) {
                                target[fragments[fi]] = {};
                            }

                            target = target[fragments[fi]];
                        }

                        target[fragments[fragments.length - 1]] = modules[id];
                    }
                }

// Included from: src/javascript/core/utils/Basic.js

                /**
                 * Basic.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/core/utils/Basic
                 @public
                 @static
                 */
                define('moxie/core/utils/Basic', [], function() {
                    /**
                     Gets the true type of the built-in object (better version of typeof).
                     @author Angus Croll (http://javascriptweblog.wordpress.com/)

                     @method typeOf
                     @for Utils
                     @static
                     @param {Object} o Object to check.
                     @return {String} Object [[Class]]
                     */
                    function typeOf(o) {
                        var undef;

                        if (o === undef) {
                            return 'undefined';
                        } else if (o === null) {
                            return 'null';
                        } else if (o.nodeType) {
                            return 'node';
                        }

                        // the snippet below is awesome, however it fails to detect null, undefined and arguments types in IE lte 8
                        return ({}).toString.call(o).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
                    }

                    /**
                     Extends the specified object with another object(s).

                     @method extend
                     @static
                     @param {Object} target Object to extend.
                     @param {Object} [obj]* Multiple objects to extend with.
                     @return {Object} Same as target, the extended object.
                     */
                    function extend() {
                        return merge(false, false, arguments);
                    }


                    /**
                     Extends the specified object with another object(s), but only if the property exists in the target.

                     @method extendIf
                     @static
                     @param {Object} target Object to extend.
                     @param {Object} [obj]* Multiple objects to extend with.
                     @return {Object} Same as target, the extended object.
                     */
                    function extendIf() {
                        return merge(true, false, arguments);
                    }


                    function extendImmutable() {
                        return merge(false, true, arguments);
                    }


                    function extendImmutableIf() {
                        return merge(true, true, arguments);
                    }


                    function shallowCopy(obj) {
                        switch (typeOf(obj)) {
                            case 'array':
                                return Array.prototype.slice.call(obj);

                            case 'object':
                                return extend({}, obj);
                        }
                        return obj;
                    }


                    function merge(strict, immutable, args) {
                        var undef;
                        var target = args[0];

                        each(args, function(arg, i) {
                            if (i > 0) {
                                each(arg, function(value, key) {
                                    var isComplex = inArray(typeOf(value), ['array', 'object']) !== -1;

                                    if (value === undef || strict && target[key] === undef) {
                                        return true;
                                    }

                                    if (isComplex && immutable) {
                                        value = shallowCopy(value);
                                    }

                                    if (typeOf(target[key]) === typeOf(value) && isComplex) {
                                        merge(strict, immutable, [target[key], value]);
                                    } else {
                                        target[key] = value;
                                    }
                                });
                            }
                        });

                        return target;
                    }


                    /**
                     A way to inherit one `class` from another in a consisstent way (more or less)

                     @method inherit
                     @static
                     @since >1.4.1
                     @param {Function} child
                     @param {Function} parent
                     @return {Function} Prepared constructor
                     */
                    function inherit(child, parent) {
                        // copy over all parent properties
                        for (var key in parent) {
                            if ({}.hasOwnProperty.call(parent, key)) {
                                child[key] = parent[key];
                            }
                        }

                        // give child `class` a place to define its own methods
                        function ctor() {
                            this.constructor = child;
                        }
                        ctor.prototype = parent.prototype;
                        child.prototype = new ctor();

                        // keep a way to reference parent methods
                        child.__parent__ = parent.prototype;
                        return child;
                    }


                    /**
                     Executes the callback function for each item in array/object. If you return false in the
                     callback it will break the loop.

                     @method each
                     @static
                     @param {Object} obj Object to iterate.
                     @param {function} callback Callback function to execute for each item.
                     */
                    function each(obj, callback) {
                        var length, key, i, undef;

                        if (obj) {
                            try {
                                length = obj.length;
                            } catch(ex) {
                                length = undef;
                            }

                            if (length === undef || typeof(length) !== 'number') {
                                // Loop object items
                                for (key in obj) {
                                    if (obj.hasOwnProperty(key)) {
                                        if (callback(obj[key], key) === false) {
                                            return;
                                        }
                                    }
                                }
                            } else {
                                // Loop array items
                                for (i = 0; i < length; i++) {
                                    if (callback(obj[i], i) === false) {
                                        return;
                                    }
                                }
                            }
                        }
                    }

                    /**
                     Checks if object is empty.

                     @method isEmptyObj
                     @static
                     @param {Object} o Object to check.
                     @return {Boolean}
                     */
                    function isEmptyObj(obj) {
                        var prop;

                        if (!obj || typeOf(obj) !== 'object') {
                            return true;
                        }

                        for (prop in obj) {
                            return false;
                        }

                        return true;
                    }

                    /**
                     Recieve an array of functions (usually async) to call in sequence, each  function
                     receives a callback as first argument that it should call, when it completes. Finally,
                     after everything is complete, main callback is called. Passing truthy value to the
                     callback as a first argument will interrupt the sequence and invoke main callback
                     immediately.

                     @method inSeries
                     @static
                     @param {Array} queue Array of functions to call in sequence
                     @param {Function} cb Main callback that is called in the end, or in case of error
                     */
                    function inSeries(queue, cb) {
                        var i = 0, length = queue.length;

                        if (typeOf(cb) !== 'function') {
                            cb = function() {};
                        }

                        if (!queue || !queue.length) {
                            cb();
                        }

                        function callNext(i) {
                            if (typeOf(queue[i]) === 'function') {
                                queue[i](function(error) {
                                    /*jshint expr:true */
                                    ++i < length && !error ? callNext(i) : cb(error);
                                });
                            }
                        }
                        callNext(i);
                    }


                    /**
                     Recieve an array of functions (usually async) to call in parallel, each  function
                     receives a callback as first argument that it should call, when it completes. After
                     everything is complete, main callback is called. Passing truthy value to the
                     callback as a first argument will interrupt the process and invoke main callback
                     immediately.

                     @method inParallel
                     @static
                     @param {Array} queue Array of functions to call in sequence
                     @param {Function} cb Main callback that is called in the end, or in case of erro
                     */
                    function inParallel(queue, cb) {
                        var count = 0, num = queue.length, cbArgs = new Array(num);

                        each(queue, function(fn, i) {
                            fn(function(error) {
                                if (error) {
                                    return cb(error);
                                }

                                var args = [].slice.call(arguments);
                                args.shift(); // strip error - undefined or not

                                cbArgs[i] = args;
                                count++;

                                if (count === num) {
                                    cbArgs.unshift(null);
                                    cb.apply(this, cbArgs);
                                }
                            });
                        });
                    }


                    /**
                     Find an element in array and return it's index if present, otherwise return -1.

                     @method inArray
                     @static
                     @param {Mixed} needle Element to find
                     @param {Array} array
                     @return {Int} Index of the element, or -1 if not found
                     */
                    function inArray(needle, array) {
                        if (array) {
                            if (Array.prototype.indexOf) {
                                return Array.prototype.indexOf.call(array, needle);
                            }

                            for (var i = 0, length = array.length; i < length; i++) {
                                if (array[i] === needle) {
                                    return i;
                                }
                            }
                        }
                        return -1;
                    }


                    /**
                     Returns elements of first array if they are not present in second. And false - otherwise.

                     @private
                     @method arrayDiff
                     @param {Array} needles
                     @param {Array} array
                     @return {Array|Boolean}
                     */
                    function arrayDiff(needles, array) {
                        var diff = [];

                        if (typeOf(needles) !== 'array') {
                            needles = [needles];
                        }

                        if (typeOf(array) !== 'array') {
                            array = [array];
                        }

                        for (var i in needles) {
                            if (inArray(needles[i], array) === -1) {
                                diff.push(needles[i]);
                            }
                        }
                        return diff.length ? diff : false;
                    }


                    /**
                     Find intersection of two arrays.

                     @private
                     @method arrayIntersect
                     @param {Array} array1
                     @param {Array} array2
                     @return {Array} Intersection of two arrays or null if there is none
                     */
                    function arrayIntersect(array1, array2) {
                        var result = [];
                        each(array1, function(item) {
                            if (inArray(item, array2) !== -1) {
                                result.push(item);
                            }
                        });
                        return result.length ? result : null;
                    }


                    /**
                     Forces anything into an array.

                     @method toArray
                     @static
                     @param {Object} obj Object with length field.
                     @return {Array} Array object containing all items.
                     */
                    function toArray(obj) {
                        var i, arr = [];

                        for (i = 0; i < obj.length; i++) {
                            arr[i] = obj[i];
                        }

                        return arr;
                    }


                    /**
                     Generates an unique ID. The only way a user would be able to get the same ID is if the two persons
                     at the same exact millisecond manage to get the same 5 random numbers between 0-65535; it also uses
                     a counter so each ID is guaranteed to be unique for the given page. It is more probable for the earth
                     to be hit with an asteroid.

                     @method guid
                     @static
                     @param {String} prefix to prepend (by default 'o' will be prepended).
                     @method guid
                     @return {String} Virtually unique id.
                     */
                    var guid = (function() {
                        var counter = 0;

                        return function(prefix) {
                            var guid = new Date().getTime().toString(32), i;

                            for (i = 0; i < 5; i++) {
                                guid += Math.floor(Math.random() * 65535).toString(32);
                            }

                            return (prefix || 'o_') + guid + (counter++).toString(32);
                        };
                    }());


                    /**
                     Trims white spaces around the string

                     @method trim
                     @static
                     @param {String} str
                     @return {String}
                     */
                    function trim(str) {
                        if (!str) {
                            return str;
                        }
                        return String.prototype.trim ? String.prototype.trim.call(str) : str.toString().replace(/^\s*/, '').replace(/\s*$/, '');
                    }


                    /**
                     Parses the specified size string into a byte value. For example 10kb becomes 10240.

                     @method parseSizeStr
                     @static
                     @param {String/Number} size String to parse or number to just pass through.
                     @return {Number} Size in bytes.
                     */
                    function parseSizeStr(size) {
                        if (typeof(size) !== 'string') {
                            return size;
                        }

                        var muls = {
                                t: 1099511627776,
                                g: 1073741824,
                                m: 1048576,
                                k: 1024
                            },
                            mul;

                        size = /^([0-9\.]+)([tmgk]?)$/.exec(size.toLowerCase().replace(/[^0-9\.tmkg]/g, ''));
                        mul = size[2];
                        size = +size[1];

                        if (muls.hasOwnProperty(mul)) {
                            size *= muls[mul];
                        }
                        return Math.floor(size);
                    }


                    /**
                     * Pseudo sprintf implementation - simple way to replace tokens with specified values.
                     *
                     * @param {String} str String with tokens
                     * @return {String} String with replaced tokens
                     */
                    function sprintf(str) {
                        var args = [].slice.call(arguments, 1);

                        return str.replace(/%[a-z]/g, function() {
                            var value = args.shift();
                            return typeOf(value) !== 'undefined' ? value : '';
                        });
                    }



                    function delay(cb, timeout) {
                        var self = this;
                        setTimeout(function() {
                            cb.call(self);
                        }, timeout || 1);
                    }


                    return {
                        guid: guid,
                        typeOf: typeOf,
                        extend: extend,
                        extendIf: extendIf,
                        extendImmutable: extendImmutable,
                        extendImmutableIf: extendImmutableIf,
                        inherit: inherit,
                        each: each,
                        isEmptyObj: isEmptyObj,
                        inSeries: inSeries,
                        inParallel: inParallel,
                        inArray: inArray,
                        arrayDiff: arrayDiff,
                        arrayIntersect: arrayIntersect,
                        toArray: toArray,
                        trim: trim,
                        sprintf: sprintf,
                        parseSizeStr: parseSizeStr,
                        delay: delay
                    };
                });

// Included from: src/javascript/core/utils/Encode.js

                /**
                 * Encode.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/core/utils/Encode', [], function() {

                    /**
                     @class moxie/core/utils/Encode
                     */

                    /**
                     Encode string with UTF-8

                     @method utf8_encode
                     @for Utils
                     @static
                     @param {String} str String to encode
                     @return {String} UTF-8 encoded string
                     */
                    var utf8_encode = function(str) {
                        return unescape(encodeURIComponent(str));
                    };

                    /**
                     Decode UTF-8 encoded string

                     @method utf8_decode
                     @static
                     @param {String} str String to decode
                     @return {String} Decoded string
                     */
                    var utf8_decode = function(str_data) {
                        return decodeURIComponent(escape(str_data));
                    };

                    /**
                     Decode Base64 encoded string (uses browser's default method if available),
                     from: https://raw.github.com/kvz/phpjs/master/functions/url/base64_decode.js

                     @method atob
                     @static
                     @param {String} data String to decode
                     @return {String} Decoded string
                     */
                    var atob = function(data, utf8) {
                        if (typeof(window.atob) === 'function') {
                            return utf8 ? utf8_decode(window.atob(data)) : window.atob(data);
                        }

                        // http://kevin.vanzonneveld.net
                        // +   original by: Tyler Akins (http://rumkin.com)
                        // +   improved by: Thunder.m
                        // +      input by: Aman Gupta
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   bugfixed by: Onno Marsman
                        // +   bugfixed by: Pellentesque Malesuada
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Brett Zamir (http://brett-zamir.me)
                        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
                        // *     returns 1: 'Kevin van Zonneveld'
                        // mozilla has this native
                        // - but breaks in 2.0.0.12!
                        //if (typeof this.window.atob == 'function') {
                        //    return atob(data);
                        //}
                        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                            ac = 0,
                            dec = "",
                            tmp_arr = [];

                        if (!data) {
                            return data;
                        }

                        data += '';

                        do { // unpack four hexets into three octets using index points in b64
                            h1 = b64.indexOf(data.charAt(i++));
                            h2 = b64.indexOf(data.charAt(i++));
                            h3 = b64.indexOf(data.charAt(i++));
                            h4 = b64.indexOf(data.charAt(i++));

                            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                            o1 = bits >> 16 & 0xff;
                            o2 = bits >> 8 & 0xff;
                            o3 = bits & 0xff;

                            if (h3 == 64) {
                                tmp_arr[ac++] = String.fromCharCode(o1);
                            } else if (h4 == 64) {
                                tmp_arr[ac++] = String.fromCharCode(o1, o2);
                            } else {
                                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
                            }
                        } while (i < data.length);

                        dec = tmp_arr.join('');

                        return utf8 ? utf8_decode(dec) : dec;
                    };

                    /**
                     Base64 encode string (uses browser's default method if available),
                     from: https://raw.github.com/kvz/phpjs/master/functions/url/base64_encode.js

                     @method btoa
                     @static
                     @param {String} data String to encode
                     @return {String} Base64 encoded string
                     */
                    var btoa = function(data, utf8) {
                        if (utf8) {
                            data = utf8_encode(data);
                        }

                        if (typeof(window.btoa) === 'function') {
                            return window.btoa(data);
                        }

                        // http://kevin.vanzonneveld.net
                        // +   original by: Tyler Akins (http://rumkin.com)
                        // +   improved by: Bayron Guevara
                        // +   improved by: Thunder.m
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   bugfixed by: Pellentesque Malesuada
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   improved by: Rafał Kukawski (http://kukawski.pl)
                        // *     example 1: base64_encode('Kevin van Zonneveld');
                        // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
                        // mozilla has this native
                        // - but breaks in 2.0.0.12!
                        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                            ac = 0,
                            enc = "",
                            tmp_arr = [];

                        if (!data) {
                            return data;
                        }

                        do { // pack three octets into four hexets
                            o1 = data.charCodeAt(i++);
                            o2 = data.charCodeAt(i++);
                            o3 = data.charCodeAt(i++);

                            bits = o1 << 16 | o2 << 8 | o3;

                            h1 = bits >> 18 & 0x3f;
                            h2 = bits >> 12 & 0x3f;
                            h3 = bits >> 6 & 0x3f;
                            h4 = bits & 0x3f;

                            // use hexets to index into b64, and append result to encoded string
                            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
                        } while (i < data.length);

                        enc = tmp_arr.join('');

                        var r = data.length % 3;

                        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
                    };


                    return {
                        utf8_encode: utf8_encode,
                        utf8_decode: utf8_decode,
                        atob: atob,
                        btoa: btoa
                    };
                });

// Included from: src/javascript/core/utils/Env.js

                /**
                 * Env.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/core/utils/Env", [
                    "moxie/core/utils/Basic"
                ], function(Basic) {

                    /**
                     * UAParser.js v0.7.7
                     * Lightweight JavaScript-based User-Agent string parser
                     * https://github.com/faisalman/ua-parser-js
                     *
                     * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
                     * Dual licensed under GPLv2 & MIT
                     */
                    var UAParser = (function (undefined) {

                        //////////////
                        // Constants
                        /////////////


                        var EMPTY       = '',
                            UNKNOWN     = '?',
                            FUNC_TYPE   = 'function',
                            UNDEF_TYPE  = 'undefined',
                            OBJ_TYPE    = 'object',
                            MAJOR       = 'major',
                            MODEL       = 'model',
                            NAME        = 'name',
                            TYPE        = 'type',
                            VENDOR      = 'vendor',
                            VERSION     = 'version',
                            ARCHITECTURE= 'architecture',
                            CONSOLE     = 'console',
                            MOBILE      = 'mobile',
                            TABLET      = 'tablet';


                        ///////////
                        // Helper
                        //////////


                        var util = {
                            has : function (str1, str2) {
                                return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                            },
                            lowerize : function (str) {
                                return str.toLowerCase();
                            }
                        };


                        ///////////////
                        // Map helper
                        //////////////


                        var mapper = {

                            rgx : function () {

                                // loop through all regexes maps
                                for (var result, i = 0, j, k, p, q, matches, match, args = arguments; i < args.length; i += 2) {

                                    var regex = args[i],       // even sequence (0,2,4,..)
                                        props = args[i + 1];   // odd sequence (1,3,5,..)

                                    // construct object barebones
                                    if (typeof(result) === UNDEF_TYPE) {
                                        result = {};
                                        for (p in props) {
                                            q = props[p];
                                            if (typeof(q) === OBJ_TYPE) {
                                                result[q[0]] = undefined;
                                            } else {
                                                result[q] = undefined;
                                            }
                                        }
                                    }

                                    // try matching uastring with regexes
                                    for (j = k = 0; j < regex.length; j++) {
                                        matches = regex[j].exec(this.getUA());
                                        if (!!matches) {
                                            for (p = 0; p < props.length; p++) {
                                                match = matches[++k];
                                                q = props[p];
                                                // check if given property is actually array
                                                if (typeof(q) === OBJ_TYPE && q.length > 0) {
                                                    if (q.length == 2) {
                                                        if (typeof(q[1]) == FUNC_TYPE) {
                                                            // assign modified match
                                                            result[q[0]] = q[1].call(this, match);
                                                        } else {
                                                            // assign given value, ignore regex match
                                                            result[q[0]] = q[1];
                                                        }
                                                    } else if (q.length == 3) {
                                                        // check whether function or regex
                                                        if (typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                            // call function (usually string mapper)
                                                            result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                        } else {
                                                            // sanitize match using given regex
                                                            result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                        }
                                                    } else if (q.length == 4) {
                                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                                    }
                                                } else {
                                                    result[q] = match ? match : undefined;
                                                }
                                            }
                                            break;
                                        }
                                    }

                                    if(!!matches) break; // break the loop immediately if match found
                                }
                                return result;
                            },

                            str : function (str, map) {

                                for (var i in map) {
                                    // check if array
                                    if (typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                        for (var j = 0; j < map[i].length; j++) {
                                            if (util.has(map[i][j], str)) {
                                                return (i === UNKNOWN) ? undefined : i;
                                            }
                                        }
                                    } else if (util.has(map[i], str)) {
                                        return (i === UNKNOWN) ? undefined : i;
                                    }
                                }
                                return str;
                            }
                        };


                        ///////////////
                        // String map
                        //////////////


                        var maps = {

                            browser : {
                                oldsafari : {
                                    major : {
                                        '1' : ['/8', '/1', '/3'],
                                        '2' : '/4',
                                        '?' : '/'
                                    },
                                    version : {
                                        '1.0'   : '/8',
                                        '1.2'   : '/1',
                                        '1.3'   : '/3',
                                        '2.0'   : '/412',
                                        '2.0.2' : '/416',
                                        '2.0.3' : '/417',
                                        '2.0.4' : '/419',
                                        '?'     : '/'
                                    }
                                }
                            },

                            device : {
                                sprint : {
                                    model : {
                                        'Evo Shift 4G' : '7373KT'
                                    },
                                    vendor : {
                                        'HTC'       : 'APA',
                                        'Sprint'    : 'Sprint'
                                    }
                                }
                            },

                            os : {
                                windows : {
                                    version : {
                                        'ME'        : '4.90',
                                        'NT 3.11'   : 'NT3.51',
                                        'NT 4.0'    : 'NT4.0',
                                        '2000'      : 'NT 5.0',
                                        'XP'        : ['NT 5.1', 'NT 5.2'],
                                        'Vista'     : 'NT 6.0',
                                        '7'         : 'NT 6.1',
                                        '8'         : 'NT 6.2',
                                        '8.1'       : 'NT 6.3',
                                        'RT'        : 'ARM'
                                    }
                                }
                            }
                        };


                        //////////////
                        // Regex map
                        /////////////


                        var regexes = {

                            browser : [[

                                // Presto based
                                /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
                                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
                                /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
                                /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80

                            ], [NAME, VERSION], [

                                /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
                            ], [[NAME, 'Opera'], VERSION], [

                                // Mixed
                                /(kindle)\/([\w\.]+)/i,                                             // Kindle
                                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

                                // Trident based
                                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                // Avant/IEMobile/SlimBrowser/Baidu
                                /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

                                // Webkit/KHTML based
                                /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
                                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i
                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron
                            ], [NAME, VERSION], [

                                /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
                            ], [[NAME, 'IE'], VERSION], [

                                /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
                            ], [NAME, VERSION], [

                                /(yabrowser)\/([\w\.]+)/i                                           // Yandex
                            ], [[NAME, 'Yandex'], VERSION], [

                                /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
                            ], [[NAME, /_/g, ' '], VERSION], [

                                /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                                // Chrome/OmniWeb/Arora/Tizen/Nokia
                                /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i
                                // UCBrowser/QQBrowser
                            ], [NAME, VERSION], [

                                /(dolfin)\/([\w\.]+)/i                                              // Dolphin
                            ], [[NAME, 'Dolphin'], VERSION], [

                                /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
                            ], [[NAME, 'Chrome'], VERSION], [

                                /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
                            ], [VERSION, [NAME, 'MIUI Browser']], [

                                /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
                            ], [VERSION, [NAME, 'Android Browser']], [

                                /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
                            ], [VERSION, [NAME, 'Facebook']], [

                                /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
                            ], [VERSION, [NAME, 'Mobile Safari']], [

                                /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
                            ], [VERSION, NAME], [

                                /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
                            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

                                /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
                                /(webkit|khtml)\/([\w\.]+)/i
                            ], [NAME, VERSION], [

                                // Gecko based
                                /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
                            ], [[NAME, 'Netscape'], VERSION], [
                                /(swiftfox)/i,                                                      // Swiftfox
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

                                // Other
                                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf
                                /(links)\s\(([\w\.]+)/i,                                            // Links
                                /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
                                /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
                                /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
                            ], [NAME, VERSION]
                            ],

                            engine : [[

                                /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
                            ], [VERSION, [NAME, 'EdgeHTML']], [

                                /(presto)\/([\w\.]+)/i,                                             // Presto
                                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
                                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
                                /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
                            ], [NAME, VERSION], [

                                /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
                            ], [VERSION, NAME]
                            ],

                            os : [[

                                // Windows based
                                /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
                            ], [NAME, VERSION], [
                                /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
                                /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
                                /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
                            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

                                // Mobile/Embedded OS
                                /\((bb)(10);/i                                                      // BlackBerry 10
                            ], [[NAME, 'BlackBerry'], VERSION], [
                                /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
                                /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
                                /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                                /linux;.+(sailfish);/i                                              // Sailfish OS
                            ], [NAME, VERSION], [
                                /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
                            ], [[NAME, 'Symbian'], VERSION], [
                                /\((series40);/i                                                    // Series 40
                            ], [NAME], [
                                /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
                            ], [[NAME, 'Firefox OS'], VERSION], [

                                // Console
                                /(nintendo|playstation)\s([wids3portablevu]+)/i,                    // Nintendo/Playstation

                                // GNU/Linux based
                                /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
                                /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
                                /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                                /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
                                /(gnu)\s?([\w\.]+)*/i                                               // GNU
                            ], [NAME, VERSION], [

                                /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
                            ], [[NAME, 'Chromium OS'], VERSION],[

                                // Solaris
                                /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
                            ], [[NAME, 'Solaris'], VERSION], [

                                // BSD based
                                /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                            ], [NAME, VERSION],[

                                /(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i             // iOS
                            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

                                /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                                /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
                            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

                                // Other
                                /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
                                /(haiku)\s(\w+)/i,                                                  // Haiku
                                /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
                                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                                /(unix)\s?([\w\.]+)*/i                                              // UNIX
                            ], [NAME, VERSION]
                            ]
                        };


                        /////////////////
                        // Constructor
                        ////////////////


                        var UAParser = function (uastring) {

                            var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);

                            this.getBrowser = function () {
                                return mapper.rgx.apply(this, regexes.browser);
                            };
                            this.getEngine = function () {
                                return mapper.rgx.apply(this, regexes.engine);
                            };
                            this.getOS = function () {
                                return mapper.rgx.apply(this, regexes.os);
                            };
                            this.getResult = function() {
                                return {
                                    ua      : this.getUA(),
                                    browser : this.getBrowser(),
                                    engine  : this.getEngine(),
                                    os      : this.getOS()
                                };
                            };
                            this.getUA = function () {
                                return ua;
                            };
                            this.setUA = function (uastring) {
                                ua = uastring;
                                return this;
                            };
                            this.setUA(ua);
                        };

                        return UAParser;
                    })();


                    function version_compare(v1, v2, operator) {
                        // From: http://phpjs.org/functions
                        // +      original by: Philippe Jausions (http://pear.php.net/user/jausions)
                        // +      original by: Aidan Lister (http://aidanlister.com/)
                        // + reimplemented by: Kankrelune (http://www.webfaktory.info/)
                        // +      improved by: Brett Zamir (http://brett-zamir.me)
                        // +      improved by: Scott Baker
                        // +      improved by: Theriault
                        // *        example 1: version_compare('8.2.5rc', '8.2.5a');
                        // *        returns 1: 1
                        // *        example 2: version_compare('8.2.50', '8.2.52', '<');
                        // *        returns 2: true
                        // *        example 3: version_compare('5.3.0-dev', '5.3.0');
                        // *        returns 3: -1
                        // *        example 4: version_compare('4.1.0.52','4.01.0.51');
                        // *        returns 4: 1

                        // Important: compare must be initialized at 0.
                        var i = 0,
                            x = 0,
                            compare = 0,
                            // vm maps textual PHP versions to negatives so they're less than 0.
                            // PHP currently defines these as CASE-SENSITIVE. It is important to
                            // leave these as negatives so that they can come before numerical versions
                            // and as if no letters were there to begin with.
                            // (1alpha is < 1 and < 1.1 but > 1dev1)
                            // If a non-numerical value can't be mapped to this table, it receives
                            // -7 as its value.
                            vm = {
                                'dev': -6,
                                'alpha': -5,
                                'a': -5,
                                'beta': -4,
                                'b': -4,
                                'RC': -3,
                                'rc': -3,
                                '#': -2,
                                'p': 1,
                                'pl': 1
                            },
                            // This function will be called to prepare each version argument.
                            // It replaces every _, -, and + with a dot.
                            // It surrounds any nonsequence of numbers/dots with dots.
                            // It replaces sequences of dots with a single dot.
                            //    version_compare('4..0', '4.0') == 0
                            // Important: A string of 0 length needs to be converted into a value
                            // even less than an unexisting value in vm (-7), hence [-8].
                            // It's also important to not strip spaces because of this.
                            //   version_compare('', ' ') == 1
                            prepVersion = function (v) {
                                v = ('' + v).replace(/[_\-+]/g, '.');
                                v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
                                return (!v.length ? [-8] : v.split('.'));
                            },
                            // This converts a version component to a number.
                            // Empty component becomes 0.
                            // Non-numerical component becomes a negative number.
                            // Numerical component becomes itself as an integer.
                            numVersion = function (v) {
                                return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
                            };

                        v1 = prepVersion(v1);
                        v2 = prepVersion(v2);
                        x = Math.max(v1.length, v2.length);
                        for (i = 0; i < x; i++) {
                            if (v1[i] == v2[i]) {
                                continue;
                            }
                            v1[i] = numVersion(v1[i]);
                            v2[i] = numVersion(v2[i]);
                            if (v1[i] < v2[i]) {
                                compare = -1;
                                break;
                            } else if (v1[i] > v2[i]) {
                                compare = 1;
                                break;
                            }
                        }
                        if (!operator) {
                            return compare;
                        }

                        // Important: operator is CASE-SENSITIVE.
                        // "No operator" seems to be treated as "<."
                        // Any other values seem to make the function return null.
                        switch (operator) {
                            case '>':
                            case 'gt':
                                return (compare > 0);
                            case '>=':
                            case 'ge':
                                return (compare >= 0);
                            case '<=':
                            case 'le':
                                return (compare <= 0);
                            case '==':
                            case '=':
                            case 'eq':
                                return (compare === 0);
                            case '<>':
                            case '!=':
                            case 'ne':
                                return (compare !== 0);
                            case '':
                            case '<':
                            case 'lt':
                                return (compare < 0);
                            default:
                                return null;
                        }
                    }


                    var can = (function() {
                        var caps = {
                            define_property: (function() {
                                /* // currently too much extra code required, not exactly worth it
                                 try { // as of IE8, getters/setters are supported only on DOM elements
                                 var obj = {};
                                 if (Object.defineProperty) {
                                 Object.defineProperty(obj, 'prop', {
                                 enumerable: true,
                                 configurable: true
                                 });
                                 return true;
                                 }
                                 } catch(ex) {}

                                 if (Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__) {
                                 return true;
                                 }*/
                                return false;
                            }()),

                            create_canvas: (function() {
                                // On the S60 and BB Storm, getContext exists, but always returns undefined
                                // so we actually have to call getContext() to verify
                                // github.com/Modernizr/Modernizr/issues/issue/97/
                                var el = document.createElement('canvas');
                                return !!(el.getContext && el.getContext('2d'));
                            }()),

                            return_response_type: function(responseType) {
                                try {
                                    if (Basic.inArray(responseType, ['', 'text', 'document']) !== -1) {
                                        return true;
                                    } else if (window.XMLHttpRequest) {
                                        var xhr = new XMLHttpRequest();
                                        xhr.open('get', '/'); // otherwise Gecko throws an exception
                                        if ('responseType' in xhr) {
                                            xhr.responseType = responseType;
                                            // as of 23.0.1271.64, Chrome switched from throwing exception to merely logging it to the console (why? o why?)
                                            if (xhr.responseType !== responseType) {
                                                return false;
                                            }
                                            return true;
                                        }
                                    }
                                } catch (ex) {}
                                return false;
                            },

                            // ideas for this heavily come from Modernizr (http://modernizr.com/)
                            use_data_uri: (function() {
                                var du = new Image();

                                du.onload = function() {
                                    caps.use_data_uri = (du.width === 1 && du.height === 1);
                                };

                                setTimeout(function() {
                                    du.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                                }, 1);
                                return false;
                            }()),

                            use_data_uri_over32kb: function() { // IE8
                                return caps.use_data_uri && (Env.browser !== 'IE' || Env.version >= 9);
                            },

                            use_data_uri_of: function(bytes) {
                                return (caps.use_data_uri && bytes < 33000 || caps.use_data_uri_over32kb());
                            },

                            use_fileinput: function() {
                                if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
                                    return false;
                                }

                                var el = document.createElement('input');
                                el.setAttribute('type', 'file');
                                return !el.disabled;
                            }
                        };

                        return function(cap) {
                            var args = [].slice.call(arguments);
                            args.shift(); // shift of cap
                            return Basic.typeOf(caps[cap]) === 'function' ? caps[cap].apply(this, args) : !!caps[cap];
                        };
                    }());


                    var uaResult = new UAParser().getResult();


                    var Env = {
                        can: can,

                        uaParser: UAParser,

                        browser: uaResult.browser.name,
                        version: uaResult.browser.version,
                        os: uaResult.os.name, // everybody intuitively types it in a lowercase for some reason
                        osVersion: uaResult.os.version,

                        verComp: version_compare,

                        swf_url: "../flash/Moxie.swf",
                        xap_url: "../silverlight/Moxie.xap",
                        global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
                    };

                    // for backward compatibility
                    // @deprecated Use `Env.os` instead
                    Env.OS = Env.os;

                    if (MXI_DEBUG) {
                        Env.debug = {
                            runtime: true,
                            events: false
                        };

                        Env.log = function() {

                            function logObj(data) {
                                // TODO: this should recursively print out the object in a pretty way
                                console.appendChild(document.createTextNode(data + "\n"));
                            }

                            var data = arguments[0];

                            if (Basic.typeOf(data) === 'string') {
                                data = Basic.sprintf.apply(this, arguments);
                            }

                            if (window && window.console && window.console.log) {
                                //window.console.log(data);
                            } else if (document) {
                                var console = document.getElementById('moxie-console');
                                if (!console) {
                                    console = document.createElement('pre');
                                    console.id = 'moxie-console';
                                    //console.style.display = 'none';
                                    document.body.appendChild(console);
                                }

                                if (Basic.inArray(Basic.typeOf(data), ['object', 'array']) !== -1) {
                                    logObj(data);
                                } else {
                                    console.appendChild(document.createTextNode(data + "\n"));
                                }
                            }
                        };
                    }

                    return Env;
                });

// Included from: src/javascript/core/Exceptions.js

                /**
                 * Exceptions.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/core/Exceptions', [
                    'moxie/core/utils/Basic'
                ], function(Basic) {

                    function _findKey(obj, value) {
                        var key;
                        for (key in obj) {
                            if (obj[key] === value) {
                                return key;
                            }
                        }
                        return null;
                    }

                    /**
                     @class moxie/core/Exception
                     */
                    return {
                        RuntimeError: (function() {
                            var namecodes = {
                                NOT_INIT_ERR: 1,
                                EXCEPTION_ERR: 3,
                                NOT_SUPPORTED_ERR: 9,
                                JS_ERR: 4
                            };

                            function RuntimeError(code, message) {
                                this.code = code;
                                this.name = _findKey(namecodes, code);
                                this.message = this.name + (message || ": RuntimeError " + this.code);
                            }

                            Basic.extend(RuntimeError, namecodes);
                            RuntimeError.prototype = Error.prototype;
                            return RuntimeError;
                        }()),

                        OperationNotAllowedException: (function() {

                            function OperationNotAllowedException(code) {
                                this.code = code;
                                this.name = 'OperationNotAllowedException';
                            }

                            Basic.extend(OperationNotAllowedException, {
                                NOT_ALLOWED_ERR: 1
                            });

                            OperationNotAllowedException.prototype = Error.prototype;

                            return OperationNotAllowedException;
                        }()),

                        ImageError: (function() {
                            var namecodes = {
                                WRONG_FORMAT: 1,
                                MAX_RESOLUTION_ERR: 2,
                                INVALID_META_ERR: 3
                            };

                            function ImageError(code) {
                                this.code = code;
                                this.name = _findKey(namecodes, code);
                                this.message = this.name + ": ImageError " + this.code;
                            }

                            Basic.extend(ImageError, namecodes);
                            ImageError.prototype = Error.prototype;

                            return ImageError;
                        }()),

                        FileException: (function() {
                            var namecodes = {
                                NOT_FOUND_ERR: 1,
                                SECURITY_ERR: 2,
                                ABORT_ERR: 3,
                                NOT_READABLE_ERR: 4,
                                ENCODING_ERR: 5,
                                NO_MODIFICATION_ALLOWED_ERR: 6,
                                INVALID_STATE_ERR: 7,
                                SYNTAX_ERR: 8
                            };

                            function FileException(code) {
                                this.code = code;
                                this.name = _findKey(namecodes, code);
                                this.message = this.name + ": FileException " + this.code;
                            }

                            Basic.extend(FileException, namecodes);
                            FileException.prototype = Error.prototype;
                            return FileException;
                        }()),

                        DOMException: (function() {
                            var namecodes = {
                                INDEX_SIZE_ERR: 1,
                                DOMSTRING_SIZE_ERR: 2,
                                HIERARCHY_REQUEST_ERR: 3,
                                WRONG_DOCUMENT_ERR: 4,
                                INVALID_CHARACTER_ERR: 5,
                                NO_DATA_ALLOWED_ERR: 6,
                                NO_MODIFICATION_ALLOWED_ERR: 7,
                                NOT_FOUND_ERR: 8,
                                NOT_SUPPORTED_ERR: 9,
                                INUSE_ATTRIBUTE_ERR: 10,
                                INVALID_STATE_ERR: 11,
                                SYNTAX_ERR: 12,
                                INVALID_MODIFICATION_ERR: 13,
                                NAMESPACE_ERR: 14,
                                INVALID_ACCESS_ERR: 15,
                                VALIDATION_ERR: 16,
                                TYPE_MISMATCH_ERR: 17,
                                SECURITY_ERR: 18,
                                NETWORK_ERR: 19,
                                ABORT_ERR: 20,
                                URL_MISMATCH_ERR: 21,
                                QUOTA_EXCEEDED_ERR: 22,
                                TIMEOUT_ERR: 23,
                                INVALID_NODE_TYPE_ERR: 24,
                                DATA_CLONE_ERR: 25
                            };

                            function DOMException(code) {
                                this.code = code;
                                this.name = _findKey(namecodes, code);
                                this.message = this.name + ": DOMException " + this.code;
                            }

                            Basic.extend(DOMException, namecodes);
                            DOMException.prototype = Error.prototype;
                            return DOMException;
                        }()),

                        EventException: (function() {
                            function EventException(code) {
                                this.code = code;
                                this.name = 'EventException';
                            }

                            Basic.extend(EventException, {
                                UNSPECIFIED_EVENT_TYPE_ERR: 0
                            });

                            EventException.prototype = Error.prototype;

                            return EventException;
                        }())
                    };
                });

// Included from: src/javascript/core/utils/Dom.js

                /**
                 * Dom.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/core/utils/Dom', ['moxie/core/utils/Env'], function(Env) {

                    /**
                     Get DOM Element by it's id.

                     @method get
                     @for Utils
                     @param {String} id Identifier of the DOM Element
                     @return {DOMElement}
                     */
                    var get = function(id) {
                        if (typeof id !== 'string') {
                            return id;
                        }
                        return document.getElementById(id);
                    };

                    /**
                     Checks if specified DOM element has specified class.

                     @method hasClass
                     @static
                     @param {Object} obj DOM element like object to add handler to.
                     @param {String} name Class name
                     */
                    var hasClass = function(obj, name) {
                        if (!obj.className) {
                            return false;
                        }

                        var regExp = new RegExp("(^|\\s+)"+name+"(\\s+|$)");
                        return regExp.test(obj.className);
                    };

                    /**
                     Adds specified className to specified DOM element.

                     @method addClass
                     @static
                     @param {Object} obj DOM element like object to add handler to.
                     @param {String} name Class name
                     */
                    var addClass = function(obj, name) {
                        if (!hasClass(obj, name)) {
                            obj.className = !obj.className ? name : obj.className.replace(/\s+$/, '') + ' ' + name;
                        }
                    };

                    /**
                     Removes specified className from specified DOM element.

                     @method removeClass
                     @static
                     @param {Object} obj DOM element like object to add handler to.
                     @param {String} name Class name
                     */
                    var removeClass = function(obj, name) {
                        if (obj.className) {
                            var regExp = new RegExp("(^|\\s+)"+name+"(\\s+|$)");
                            obj.className = obj.className.replace(regExp, function($0, $1, $2) {
                                return $1 === ' ' && $2 === ' ' ? ' ' : '';
                            });
                        }
                    };

                    /**
                     Returns a given computed style of a DOM element.

                     @method getStyle
                     @static
                     @param {Object} obj DOM element like object.
                     @param {String} name Style you want to get from the DOM element
                     */
                    var getStyle = function(obj, name) {
                        if (obj.currentStyle) {
                            return obj.currentStyle[name];
                        } else if (window.getComputedStyle) {
                            return window.getComputedStyle(obj, null)[name];
                        }
                    };


                    /**
                     Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.

                     @method getPos
                     @static
                     @param {Element} node HTML element or element id to get x, y position from.
                     @param {Element} root Optional root element to stop calculations at.
                     @return {object} Absolute position of the specified element object with x, y fields.
                     */
                    var getPos = function(node, root) {
                        var x = 0, y = 0, parent, doc = document, nodeRect, rootRect;

                        node = node;
                        root = root || doc.body;

                        // Returns the x, y cordinate for an element on IE 6 and IE 7
                        function getIEPos(node) {
                            var bodyElm, rect, x = 0, y = 0;

                            if (node) {
                                rect = node.getBoundingClientRect();
                                bodyElm = doc.compatMode === "CSS1Compat" ? doc.documentElement : doc.body;
                                x = rect.left + bodyElm.scrollLeft;
                                y = rect.top + bodyElm.scrollTop;
                            }

                            return {
                                x : x,
                                y : y
                            };
                        }

                        // Use getBoundingClientRect on IE 6 and IE 7 but not on IE 8 in standards mode
                        if (node && node.getBoundingClientRect && Env.browser === 'IE' && (!doc.documentMode || doc.documentMode < 8)) {
                            nodeRect = getIEPos(node);
                            rootRect = getIEPos(root);

                            return {
                                x : nodeRect.x - rootRect.x,
                                y : nodeRect.y - rootRect.y
                            };
                        }

                        parent = node;
                        while (parent && parent != root && parent.nodeType) {
                            x += parent.offsetLeft || 0;
                            y += parent.offsetTop || 0;
                            parent = parent.offsetParent;
                        }

                        parent = node.parentNode;
                        while (parent && parent != root && parent.nodeType) {
                            x -= parent.scrollLeft || 0;
                            y -= parent.scrollTop || 0;
                            parent = parent.parentNode;
                        }

                        return {
                            x : x,
                            y : y
                        };
                    };

                    /**
                     Returns the size of the specified node in pixels.

                     @method getSize
                     @static
                     @param {Node} node Node to get the size of.
                     @return {Object} Object with a w and h property.
                     */
                    var getSize = function(node) {
                        return {
                            w : node.offsetWidth || node.clientWidth,
                            h : node.offsetHeight || node.clientHeight
                        };
                    };

                    return {
                        get: get,
                        hasClass: hasClass,
                        addClass: addClass,
                        removeClass: removeClass,
                        getStyle: getStyle,
                        getPos: getPos,
                        getSize: getSize
                    };
                });

// Included from: src/javascript/core/EventTarget.js

                /**
                 * EventTarget.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/core/EventTarget', [
                    'moxie/core/utils/Env',
                    'moxie/core/Exceptions',
                    'moxie/core/utils/Basic'
                ], function(Env, x, Basic) {

                    // hash of event listeners by object uid
                    var eventpool = {};

                    /**
                     Parent object for all event dispatching components and objects

                     @class moxie/core/EventTarget
                     @constructor EventTarget
                     */
                    function EventTarget() {
                        /**
                         Unique id of the event dispatcher, usually overriden by children

                         @property uid
                         @type String
                         */
                        this.uid = Basic.guid();
                    }


                    Basic.extend(EventTarget.prototype, {

                        /**
                         Can be called from within a child  in order to acquire uniqie id in automated manner

                         @method init
                         */
                        init: function() {
                            if (!this.uid) {
                                this.uid = Basic.guid('uid_');
                            }
                        },

                        /**
                         Register a handler to a specific event dispatched by the object

                         @method addEventListener
                         @param {String} type Type or basically a name of the event to subscribe to
                         @param {Function} fn Callback function that will be called when event happens
                         @param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
                         @param {Object} [scope=this] A scope to invoke event handler in
                         */
                        addEventListener: function(type, fn, priority, scope) {
                            var self = this, list;

                            // without uid no event handlers can be added, so make sure we got one
                            if (!this.hasOwnProperty('uid')) {
                                this.uid = Basic.guid('uid_');
                            }

                            type = Basic.trim(type);

                            if (/\s/.test(type)) {
                                // multiple event types were passed for one handler
                                Basic.each(type.split(/\s+/), function(type) {
                                    self.addEventListener(type, fn, priority, scope);
                                });
                                return;
                            }

                            type = type.toLowerCase();
                            priority = parseInt(priority, 10) || 0;

                            list = eventpool[this.uid] && eventpool[this.uid][type] || [];
                            list.push({fn : fn, priority : priority, scope : scope || this});

                            if (!eventpool[this.uid]) {
                                eventpool[this.uid] = {};
                            }
                            eventpool[this.uid][type] = list;
                        },

                        /**
                         Check if any handlers were registered to the specified event

                         @method hasEventListener
                         @param {String} [type] Type or basically a name of the event to check
                         @return {Mixed} Returns a handler if it was found and false, if - not
                         */
                        hasEventListener: function(type) {
                            var list;
                            if (type) {
                                type = type.toLowerCase();
                                list = eventpool[this.uid] && eventpool[this.uid][type];
                            } else {
                                list = eventpool[this.uid];
                            }
                            return list ? list : false;
                        },

                        /**
                         Unregister the handler from the event, or if former was not specified - unregister all handlers

                         @method removeEventListener
                         @param {String} type Type or basically a name of the event
                         @param {Function} [fn] Handler to unregister
                         */
                        removeEventListener: function(type, fn) {
                            var self = this, list, i;

                            type = type.toLowerCase();

                            if (/\s/.test(type)) {
                                // multiple event types were passed for one handler
                                Basic.each(type.split(/\s+/), function(type) {
                                    self.removeEventListener(type, fn);
                                });
                                return;
                            }

                            list = eventpool[this.uid] && eventpool[this.uid][type];

                            if (list) {
                                if (fn) {
                                    for (i = list.length - 1; i >= 0; i--) {
                                        if (list[i].fn === fn) {
                                            list.splice(i, 1);
                                            break;
                                        }
                                    }
                                } else {
                                    list = [];
                                }

                                // delete event list if it has become empty
                                if (!list.length) {
                                    delete eventpool[this.uid][type];

                                    // and object specific entry in a hash if it has no more listeners attached
                                    if (Basic.isEmptyObj(eventpool[this.uid])) {
                                        delete eventpool[this.uid];
                                    }
                                }
                            }
                        },

                        /**
                         Remove all event handlers from the object

                         @method removeAllEventListeners
                         */
                        removeAllEventListeners: function() {
                            if (eventpool[this.uid]) {
                                delete eventpool[this.uid];
                            }
                        },

                        /**
                         Dispatch the event

                         @method dispatchEvent
                         @param {String/Object} Type of event or event object to dispatch
                         @param {Mixed} [...] Variable number of arguments to be passed to a handlers
                         @return {Boolean} true by default and false if any handler returned false
                         */
                        dispatchEvent: function(type) {
                            var uid, list, args, tmpEvt, evt = {}, result = true, undef;

                            if (Basic.typeOf(type) !== 'string') {
                                // we can't use original object directly (because of Silverlight)
                                tmpEvt = type;

                                if (Basic.typeOf(tmpEvt.type) === 'string') {
                                    type = tmpEvt.type;

                                    if (tmpEvt.total !== undef && tmpEvt.loaded !== undef) { // progress event
                                        evt.total = tmpEvt.total;
                                        evt.loaded = tmpEvt.loaded;
                                    }
                                    evt.async = tmpEvt.async || false;
                                } else {
                                    throw new x.EventException(x.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                                }
                            }

                            // check if event is meant to be dispatched on an object having specific uid
                            if (type.indexOf('::') !== -1) {
                                (function(arr) {
                                    uid = arr[0];
                                    type = arr[1];
                                }(type.split('::')));
                            } else {
                                uid = this.uid;
                            }

                            type = type.toLowerCase();

                            list = eventpool[uid] && eventpool[uid][type];

                            if (list) {
                                // sort event list by prority
                                list.sort(function(a, b) { return b.priority - a.priority; });

                                args = [].slice.call(arguments);

                                // first argument will be pseudo-event object
                                args.shift();
                                evt.type = type;
                                args.unshift(evt);

                                if (MXI_DEBUG && Env.debug.events) {
                                    Env.log("Event '%s' fired on %u", evt.type, uid);
                                }

                                // Dispatch event to all listeners
                                var queue = [];
                                Basic.each(list, function(handler) {
                                    // explicitly set the target, otherwise events fired from shims do not get it
                                    args[0].target = handler.scope;
                                    // if event is marked as async, detach the handler
                                    if (evt.async) {
                                        queue.push(function(cb) {
                                            setTimeout(function() {
                                                cb(handler.fn.apply(handler.scope, args) === false);
                                            }, 1);
                                        });
                                    } else {
                                        queue.push(function(cb) {
                                            cb(handler.fn.apply(handler.scope, args) === false); // if handler returns false stop propagation
                                        });
                                    }
                                });
                                if (queue.length) {
                                    Basic.inSeries(queue, function(err) {
                                        result = !err;
                                    });
                                }
                            }
                            return result;
                        },

                        /**
                         Register a handler to the event type that will run only once

                         @method bindOnce
                         @since >1.4.1
                         @param {String} type Type or basically a name of the event to subscribe to
                         @param {Function} fn Callback function that will be called when event happens
                         @param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
                         @param {Object} [scope=this] A scope to invoke event handler in
                         */
                        bindOnce: function(type, fn, priority, scope) {
                            var self = this;
                            self.bind.call(this, type, function cb() {
                                self.unbind(type, cb);
                                return fn.apply(this, arguments);
                            }, priority, scope);
                        },

                        /**
                         Alias for addEventListener

                         @method bind
                         @protected
                         */
                        bind: function() {
                            this.addEventListener.apply(this, arguments);
                        },

                        /**
                         Alias for removeEventListener

                         @method unbind
                         @protected
                         */
                        unbind: function() {
                            this.removeEventListener.apply(this, arguments);
                        },

                        /**
                         Alias for removeAllEventListeners

                         @method unbindAll
                         @protected
                         */
                        unbindAll: function() {
                            this.removeAllEventListeners.apply(this, arguments);
                        },

                        /**
                         Alias for dispatchEvent

                         @method trigger
                         @protected
                         */
                        trigger: function() {
                            return this.dispatchEvent.apply(this, arguments);
                        },


                        /**
                         Handle properties of on[event] type.

                         @method handleEventProps
                         @private
                         */
                        handleEventProps: function(dispatches) {
                            var self = this;

                            this.bind(dispatches.join(' '), function(e) {
                                var prop = 'on' + e.type.toLowerCase();
                                if (Basic.typeOf(this[prop]) === 'function') {
                                    this[prop].apply(this, arguments);
                                }
                            });

                            // object must have defined event properties, even if it doesn't make use of them
                            Basic.each(dispatches, function(prop) {
                                prop = 'on' + prop.toLowerCase(prop);
                                if (Basic.typeOf(self[prop]) === 'undefined') {
                                    self[prop] = null;
                                }
                            });
                        }

                    });


                    EventTarget.instance = new EventTarget();

                    return EventTarget;
                });

// Included from: src/javascript/runtime/Runtime.js

                /**
                 * Runtime.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/runtime/Runtime', [
                    "moxie/core/utils/Env",
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Dom",
                    "moxie/core/EventTarget"
                ], function(Env, Basic, Dom, EventTarget) {
                    var runtimeConstructors = {}, runtimes = {};

                    /**
                     Common set of methods and properties for every runtime instance

                     @class moxie/runtime/Runtime

                     @param {Object} options
                     @param {String} type Sanitized name of the runtime
                     @param {Object} [caps] Set of capabilities that differentiate specified runtime
                     @param {Object} [modeCaps] Set of capabilities that do require specific operational mode
                     @param {String} [preferredMode='browser'] Preferred operational mode to choose if no required capabilities were requested
                     */
                    function Runtime(options, type, caps, modeCaps, preferredMode) {
                        /**
                         Dispatched when runtime is initialized and ready.
                         Results in RuntimeInit on a connected component.

                         @event Init
                         */

                        /**
                         Dispatched when runtime fails to initialize.
                         Results in RuntimeError on a connected component.

                         @event Error
                         */

                        var self = this
                            , _shim
                            , _uid = Basic.guid(type + '_')
                            , defaultMode = preferredMode || 'browser'
                        ;

                        options = options || {};

                        // register runtime in private hash
                        runtimes[_uid] = this;

                        /**
                         Default set of capabilities, which can be redifined later by specific runtime

                         @private
                         @property caps
                         @type Object
                         */
                        caps = Basic.extend({
                            // Runtime can:
                            // provide access to raw binary data of the file
                            access_binary: false,
                            // provide access to raw binary data of the image (image extension is optional)
                            access_image_binary: false,
                            // display binary data as thumbs for example
                            display_media: false,
                            // make cross-domain requests
                            do_cors: false,
                            // accept files dragged and dropped from the desktop
                            drag_and_drop: false,
                            // filter files in selection dialog by their extensions
                            filter_by_extension: true,
                            // resize image (and manipulate it raw data of any file in general)
                            resize_image: false,
                            // periodically report how many bytes of total in the file were uploaded (loaded)
                            report_upload_progress: false,
                            // provide access to the headers of http response
                            return_response_headers: false,
                            // support response of specific type, which should be passed as an argument
                            // e.g. runtime.can('return_response_type', 'blob')
                            return_response_type: false,
                            // return http status code of the response
                            return_status_code: true,
                            // send custom http header with the request
                            send_custom_headers: false,
                            // pick up the files from a dialog
                            select_file: false,
                            // select whole folder in file browse dialog
                            select_folder: false,
                            // select multiple files at once in file browse dialog
                            select_multiple: true,
                            // send raw binary data, that is generated after image resizing or manipulation of other kind
                            send_binary_string: false,
                            // send cookies with http request and therefore retain session
                            send_browser_cookies: true,
                            // send data formatted as multipart/form-data
                            send_multipart: true,
                            // slice the file or blob to smaller parts
                            slice_blob: false,
                            // upload file without preloading it to memory, stream it out directly from disk
                            stream_upload: false,
                            // programmatically trigger file browse dialog
                            summon_file_dialog: false,
                            // upload file of specific size, size should be passed as argument
                            // e.g. runtime.can('upload_filesize', '500mb')
                            upload_filesize: true,
                            // initiate http request with specific http method, method should be passed as argument
                            // e.g. runtime.can('use_http_method', 'put')
                            use_http_method: true
                        }, caps);


                        // default to the mode that is compatible with preferred caps
                        if (options.preferred_caps) {
                            defaultMode = Runtime.getMode(modeCaps, options.preferred_caps, defaultMode);
                        }

                        if (MXI_DEBUG && Env.debug.runtime) {
                            Env.log("\tdefault mode: %s", defaultMode);
                        }

                        // small extension factory here (is meant to be extended with actual extensions constructors)
                        _shim = (function() {
                            var objpool = {};
                            return {
                                exec: function(uid, comp, fn, args) {
                                    if (_shim[comp]) {
                                        if (!objpool[uid]) {
                                            objpool[uid] = {
                                                context: this,
                                                instance: new _shim[comp]()
                                            };
                                        }
                                        if (objpool[uid].instance[fn]) {
                                            return objpool[uid].instance[fn].apply(this, args);
                                        }
                                    }
                                },

                                removeInstance: function(uid) {
                                    delete objpool[uid];
                                },

                                removeAllInstances: function() {
                                    var self = this;
                                    Basic.each(objpool, function(obj, uid) {
                                        if (Basic.typeOf(obj.instance.destroy) === 'function') {
                                            obj.instance.destroy.call(obj.context);
                                        }
                                        self.removeInstance(uid);
                                    });
                                }
                            };
                        }());


                        // public methods
                        Basic.extend(this, {
                            /**
                             Specifies whether runtime instance was initialized or not

                             @property initialized
                             @type {Boolean}
                             @default false
                             */
                            initialized: false, // shims require this flag to stop initialization retries

                            /**
                             Unique ID of the runtime

                             @property uid
                             @type {String}
                             */
                            uid: _uid,

                            /**
                             Runtime type (e.g. flash, html5, etc)

                             @property type
                             @type {String}
                             */
                            type: type,

                            /**
                             Runtime (not native one) may operate in browser or client mode.

                             @property mode
                             @private
                             @type {String|Boolean} current mode or false, if none possible
                             */
                            mode: Runtime.getMode(modeCaps, (options.required_caps), defaultMode),

                            /**
                             id of the DOM container for the runtime (if available)

                             @property shimid
                             @type {String}
                             */
                            shimid: _uid + '_container',

                            /**
                             Number of connected clients. If equal to zero, runtime can be destroyed

                             @property clients
                             @type {Number}
                             */
                            clients: 0,

                            /**
                             Runtime initialization options

                             @property options
                             @type {Object}
                             */
                            options: options,

                            /**
                             Checks if the runtime has specific capability

                             @method can
                             @param {String} cap Name of capability to check
                             @param {Mixed} [value] If passed, capability should somehow correlate to the value
                             @param {Object} [refCaps] Set of capabilities to check the specified cap against (defaults to internal set)
                             @return {Boolean} true if runtime has such capability and false, if - not
                             */
                            can: function(cap, value) {
                                var refCaps = arguments[2] || caps;

                                // if cap var is a comma-separated list of caps, convert it to object (key/value)
                                if (Basic.typeOf(cap) === 'string' && Basic.typeOf(value) === 'undefined') {
                                    cap = Runtime.parseCaps(cap);
                                }

                                if (Basic.typeOf(cap) === 'object') {
                                    for (var key in cap) {
                                        if (!this.can(key, cap[key], refCaps)) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }

                                // check the individual cap
                                if (Basic.typeOf(refCaps[cap]) === 'function') {
                                    return refCaps[cap].call(this, value);
                                } else {
                                    return (value === refCaps[cap]);
                                }
                            },

                            /**
                             Returns container for the runtime as DOM element

                             @method getShimContainer
                             @return {DOMElement}
                             */
                            getShimContainer: function() {
                                var container, shimContainer = Dom.get(this.shimid);

                                // if no container for shim, create one
                                if (!shimContainer) {
                                    container = Dom.get(this.options.container) || document.body;

                                    // create shim container and insert it at an absolute position into the outer container
                                    shimContainer = document.createElement('div');
                                    shimContainer.id = this.shimid;
                                    shimContainer.className = 'moxie-shim moxie-shim-' + this.type;

                                    Basic.extend(shimContainer.style, {
                                        position: 'absolute',
                                        top: '0px',
                                        left: '0px',
                                        width: '1px',
                                        height: '1px',
                                        overflow: 'hidden'
                                    });

                                    container.appendChild(shimContainer);
                                    container = null;
                                }

                                return shimContainer;
                            },

                            /**
                             Returns runtime as DOM element (if appropriate)

                             @method getShim
                             @return {DOMElement}
                             */
                            getShim: function() {
                                return _shim;
                            },

                            /**
                             Invokes a method within the runtime itself (might differ across the runtimes)

                             @method shimExec
                             @param {Mixed} []
                             @protected
                             @return {Mixed} Depends on the action and component
                             */
                            shimExec: function(component, action) {
                                var args = [].slice.call(arguments, 2);
                                return self.getShim().exec.call(this, this.uid, component, action, args);
                            },

                            /**
                             Operaional interface that is used by components to invoke specific actions on the runtime
                             (is invoked in the scope of component)

                             @method exec
                             @param {Mixed} []*
                             @protected
                             @return {Mixed} Depends on the action and component
                             */
                            exec: function(component, action) { // this is called in the context of component, not runtime
                                var args = [].slice.call(arguments, 2);

                                if (self[component] && self[component][action]) {
                                    return self[component][action].apply(this, args);
                                }
                                return self.shimExec.apply(this, arguments);
                            },

                            /**
                             Destroys the runtime (removes all events and deletes DOM structures)

                             @method destroy
                             */
                            destroy: function() {
                                if (!self) {
                                    return; // obviously already destroyed
                                }

                                var shimContainer = Dom.get(this.shimid);
                                if (shimContainer) {
                                    shimContainer.parentNode.removeChild(shimContainer);
                                }

                                if (_shim) {
                                    _shim.removeAllInstances();
                                }

                                this.unbindAll();
                                delete runtimes[this.uid];
                                this.uid = null; // mark this runtime as destroyed
                                _uid = self = _shim = shimContainer = null;
                            }
                        });

                        // once we got the mode, test against all caps
                        if (this.mode && options.required_caps && !this.can(options.required_caps)) {
                            this.mode = false;
                        }
                    }


                    /**
                     Default order to try different runtime types

                     @property order
                     @type String
                     @static
                     */
                    Runtime.order = 'html5,flash,silverlight,html4';


                    /**
                     Retrieves runtime from private hash by it's uid

                     @method getRuntime
                     @private
                     @static
                     @param {String} uid Unique identifier of the runtime
                     @return {Runtime|Boolean} Returns runtime, if it exists and false, if - not
                     */
                    Runtime.getRuntime = function(uid) {
                        return runtimes[uid] ? runtimes[uid] : false;
                    };


                    /**
                     Register constructor for the Runtime of new (or perhaps modified) type

                     @method addConstructor
                     @static
                     @param {String} type Runtime type (e.g. flash, html5, etc)
                     @param {Function} construct Constructor for the Runtime type
                     */
                    Runtime.addConstructor = function(type, constructor) {
                        constructor.prototype = EventTarget.instance;
                        runtimeConstructors[type] = constructor;
                    };


                    /**
                     Get the constructor for the specified type.

                     method getConstructor
                     @static
                     @param {String} type Runtime type (e.g. flash, html5, etc)
                     @return {Function} Constructor for the Runtime type
                     */
                    Runtime.getConstructor = function(type) {
                        return runtimeConstructors[type] || null;
                    };


                    /**
                     Get info about the runtime (uid, type, capabilities)

                     @method getInfo
                     @static
                     @param {String} uid Unique identifier of the runtime
                     @return {Mixed} Info object or null if runtime doesn't exist
                     */
                    Runtime.getInfo = function(uid) {
                        var runtime = Runtime.getRuntime(uid);

                        if (runtime) {
                            return {
                                uid: runtime.uid,
                                type: runtime.type,
                                mode: runtime.mode,
                                can: function() {
                                    return runtime.can.apply(runtime, arguments);
                                }
                            };
                        }
                        return null;
                    };


                    /**
                     Convert caps represented by a comma-separated string to the object representation.

                     @method parseCaps
                     @static
                     @param {String} capStr Comma-separated list of capabilities
                     @return {Object}
                     */
                    Runtime.parseCaps = function(capStr) {
                        var capObj = {};

                        if (Basic.typeOf(capStr) !== 'string') {
                            return capStr || {};
                        }

                        Basic.each(capStr.split(','), function(key) {
                            capObj[key] = true; // we assume it to be - true
                        });

                        return capObj;
                    };

                    /**
                     Test the specified runtime for specific capabilities.

                     @method can
                     @static
                     @param {String} type Runtime type (e.g. flash, html5, etc)
                     @param {String|Object} caps Set of capabilities to check
                     @return {Boolean} Result of the test
                     */
                    Runtime.can = function(type, caps) {
                        var runtime
                            , constructor = Runtime.getConstructor(type)
                            , mode
                        ;
                        if (constructor) {
                            runtime = new constructor({
                                required_caps: caps
                            });
                            mode = runtime.mode;
                            runtime.destroy();
                            return !!mode;
                        }
                        return false;
                    };


                    /**
                     Figure out a runtime that supports specified capabilities.

                     @method thatCan
                     @static
                     @param {String|Object} caps Set of capabilities to check
                     @param {String} [runtimeOrder] Comma-separated list of runtimes to check against
                     @return {String} Usable runtime identifier or null
                     */
                    Runtime.thatCan = function(caps, runtimeOrder) {
                        var types = (runtimeOrder || Runtime.order).split(/\s*,\s*/);
                        for (var i in types) {
                            if (Runtime.can(types[i], caps)) {
                                return types[i];
                            }
                        }
                        return null;
                    };


                    /**
                     Figure out an operational mode for the specified set of capabilities.

                     @method getMode
                     @static
                     @param {Object} modeCaps Set of capabilities that depend on particular runtime mode
                     @param {Object} [requiredCaps] Supplied set of capabilities to find operational mode for
                     @param {String|Boolean} [defaultMode='browser'] Default mode to use
                     @return {String|Boolean} Compatible operational mode
                     */
                    Runtime.getMode = function(modeCaps, requiredCaps, defaultMode) {
                        var mode = null;

                        if (Basic.typeOf(defaultMode) === 'undefined') { // only if not specified
                            defaultMode = 'browser';
                        }

                        if (requiredCaps && !Basic.isEmptyObj(modeCaps)) {
                            // loop over required caps and check if they do require the same mode
                            Basic.each(requiredCaps, function(value, cap) {
                                if (modeCaps.hasOwnProperty(cap)) {
                                    var capMode = modeCaps[cap](value);

                                    // make sure we always have an array
                                    if (typeof(capMode) === 'string') {
                                        capMode = [capMode];
                                    }

                                    if (!mode) {
                                        mode = capMode;
                                    } else if (!(mode = Basic.arrayIntersect(mode, capMode))) {
                                        // if cap requires conflicting mode - runtime cannot fulfill required caps

                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("\t\t%c: %v (conflicting mode requested: %s)", cap, value, capMode);
                                        }

                                        return (mode = false);
                                    }
                                }

                                if (MXI_DEBUG && Env.debug.runtime) {
                                    Env.log("\t\t%c: %v (compatible modes: %s)", cap, value, mode);
                                }
                            });

                            if (mode) {
                                return Basic.inArray(defaultMode, mode) !== -1 ? defaultMode : mode[0];
                            } else if (mode === false) {
                                return false;
                            }
                        }
                        return defaultMode;
                    };


                    /**
                     Capability check that always returns true

                     @private
                     @static
                     @return {True}
                     */
                    Runtime.capTrue = function() {
                        return true;
                    };

                    /**
                     Capability check that always returns false

                     @private
                     @static
                     @return {False}
                     */
                    Runtime.capFalse = function() {
                        return false;
                    };

                    /**
                     Evaluate the expression to boolean value and create a function that always returns it.

                     @private
                     @static
                     @param {Mixed} expr Expression to evaluate
                     @return {Function} Function returning the result of evaluation
                     */
                    Runtime.capTest = function(expr) {
                        return function() {
                            return !!expr;
                        };
                    };

                    return Runtime;
                });

// Included from: src/javascript/runtime/RuntimeClient.js

                /**
                 * RuntimeClient.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/runtime/RuntimeClient', [
                    'moxie/core/utils/Env',
                    'moxie/core/Exceptions',
                    'moxie/core/utils/Basic',
                    'moxie/runtime/Runtime'
                ], function(Env, x, Basic, Runtime) {
                    /**
                     Set of methods and properties, required by a component to acquire ability to connect to a runtime

                     @class moxie/runtime/RuntimeClient
                     */
                    return function RuntimeClient() {
                        var runtime;

                        Basic.extend(this, {
                            /**
                             Connects to the runtime specified by the options. Will either connect to existing runtime or create a new one.
                             Increments number of clients connected to the specified runtime.

                             @private
                             @method connectRuntime
                             @param {Mixed} options Can be a runtme uid or a set of key-value pairs defining requirements and pre-requisites
                             */
                            connectRuntime: function(options) {
                                var comp = this, ruid;

                                function initialize(items) {
                                    var type, constructor;

                                    // if we ran out of runtimes
                                    if (!items.length) {
                                        comp.trigger('RuntimeError', new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));
                                        runtime = null;
                                        return;
                                    }

                                    type = items.shift().toLowerCase();
                                    constructor = Runtime.getConstructor(type);
                                    if (!constructor) {
                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("Constructor for '%s' runtime is not available.", type);
                                        }
                                        initialize(items);
                                        return;
                                    }

                                    if (MXI_DEBUG && Env.debug.runtime) {
                                        Env.log("Trying runtime: %s", type);
                                        Env.log(options);
                                    }

                                    // try initializing the runtime
                                    runtime = new constructor(options);

                                    runtime.bind('Init', function() {
                                        // mark runtime as initialized
                                        runtime.initialized = true;

                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("Runtime '%s' initialized", runtime.type);
                                        }

                                        // jailbreak ...
                                        setTimeout(function() {
                                            runtime.clients++;
                                            comp.ruid = runtime.uid;
                                            // this will be triggered on component
                                            comp.trigger('RuntimeInit', runtime);
                                        }, 1);
                                    });

                                    runtime.bind('Error', function() {
                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("Runtime '%s' failed to initialize", runtime.type);
                                        }

                                        runtime.destroy(); // runtime cannot destroy itself from inside at a right moment, thus we do it here
                                        initialize(items);
                                    });

                                    runtime.bind('Exception', function(e, err) {
                                        var message = err.name + "(#" + err.code + ")" + (err.message ? ", from: " + err.message : '');

                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("Runtime '%s' has thrown an exception: %s", this.type, message);
                                        }
                                        comp.trigger('RuntimeError', new x.RuntimeError(x.RuntimeError.EXCEPTION_ERR, message));
                                    });

                                    if (MXI_DEBUG && Env.debug.runtime) {
                                        Env.log("\tselected mode: %s", runtime.mode);
                                    }

                                    // check if runtime managed to pick-up operational mode
                                    if (!runtime.mode) {
                                        runtime.trigger('Error');
                                        return;
                                    }

                                    runtime.init();
                                }

                                // check if a particular runtime was requested
                                if (Basic.typeOf(options) === 'string') {
                                    ruid = options;
                                } else if (Basic.typeOf(options.ruid) === 'string') {
                                    ruid = options.ruid;
                                }

                                if (ruid) {
                                    runtime = Runtime.getRuntime(ruid);
                                    if (runtime) {
                                        comp.ruid = ruid;
                                        runtime.clients++;
                                        return runtime;
                                    } else {
                                        // there should be a runtime and there's none - weird case
                                        throw new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR);
                                    }
                                }

                                // initialize a fresh one, that fits runtime list and required features best
                                initialize((options.runtime_order || Runtime.order).split(/\s*,\s*/));
                            },


                            /**
                             Disconnects from the runtime. Decrements number of clients connected to the specified runtime.

                             @private
                             @method disconnectRuntime
                             */
                            disconnectRuntime: function() {
                                if (runtime && --runtime.clients <= 0) {
                                    runtime.destroy();
                                }

                                // once the component is disconnected, it shouldn't have access to the runtime
                                runtime = null;
                            },


                            /**
                             Returns the runtime to which the client is currently connected.

                             @method getRuntime
                             @return {Runtime} Runtime or null if client is not connected
                             */
                            getRuntime: function() {
                                if (runtime && runtime.uid) {
                                    return runtime;
                                }
                                return runtime = null; // make sure we do not leave zombies rambling around
                            },


                            /**
                             Handy shortcut to safely invoke runtime extension methods.

                             @private
                             @method exec
                             @return {Mixed} Whatever runtime extension method returns
                             */
                            exec: function() {
                                return runtime ? runtime.exec.apply(this, arguments) : null;
                            },


                            /**
                             Test runtime client for specific capability

                             @method can
                             @param {String} cap
                             @return {Bool}
                             */
                            can: function(cap) {
                                return runtime ? runtime.can(cap) : false;
                            }

                        });
                    };


                });

// Included from: src/javascript/file/Blob.js

                /**
                 * Blob.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/file/Blob', [
                    'moxie/core/utils/Basic',
                    'moxie/core/utils/Encode',
                    'moxie/runtime/RuntimeClient'
                ], function(Basic, Encode, RuntimeClient) {

                    var blobpool = {};

                    /**
                     @class moxie/file/Blob
                     @constructor
                     @param {String} ruid Unique id of the runtime, to which this blob belongs to
                     @param {Object} blob Object "Native" blob object, as it is represented in the runtime
                     */
                    function Blob(ruid, blob) {

                        function _sliceDetached(start, end, type) {
                            var blob, data = blobpool[this.uid];

                            if (Basic.typeOf(data) !== 'string' || !data.length) {
                                return null; // or throw exception
                            }

                            blob = new Blob(null, {
                                type: type,
                                size: end - start
                            });
                            blob.detach(data.substr(start, blob.size));

                            return blob;
                        }

                        RuntimeClient.call(this);

                        if (ruid) {
                            this.connectRuntime(ruid);
                        }

                        if (!blob) {
                            blob = {};
                        } else if (Basic.typeOf(blob) === 'string') { // dataUrl or binary string
                            blob = { data: blob };
                        }

                        Basic.extend(this, {

                            /**
                             Unique id of the component

                             @property uid
                             @type {String}
                             */
                            uid: blob.uid || Basic.guid('uid_'),

                            /**
                             Unique id of the connected runtime, if falsy, then runtime will have to be initialized
                             before this Blob can be used, modified or sent

                             @property ruid
                             @type {String}
                             */
                            ruid: ruid,

                            /**
                             Size of blob

                             @property size
                             @type {Number}
                             @default 0
                             */
                            size: blob.size || 0,

                            /**
                             Mime type of blob

                             @property type
                             @type {String}
                             @default ''
                             */
                            type: blob.type || '',

                            /**
                             @method slice
                             @param {Number} [start=0]
                             */
                            slice: function(start, end, type) {
                                if (this.isDetached()) {
                                    return _sliceDetached.apply(this, arguments);
                                }
                                return this.getRuntime().exec.call(this, 'Blob', 'slice', this.getSource(), start, end, type);
                            },

                            /**
                             Returns "native" blob object (as it is represented in connected runtime) or null if not found

                             @method getSource
                             @return {Blob} Returns "native" blob object or null if not found
                             */
                            getSource: function() {
                                if (!blobpool[this.uid]) {
                                    return null;
                                }
                                return blobpool[this.uid];
                            },

                            /**
                             Detaches blob from any runtime that it depends on and initialize with standalone value

                             @method detach
                             @protected
                             @param {DOMString} [data=''] Standalone value
                             */
                            detach: function(data) {
                                if (this.ruid) {
                                    this.getRuntime().exec.call(this, 'Blob', 'destroy');
                                    this.disconnectRuntime();
                                    this.ruid = null;
                                }

                                data = data || '';

                                // if dataUrl, convert to binary string
                                if (data.substr(0, 5) == 'data:') {
                                    var base64Offset = data.indexOf(';base64,');
                                    this.type = data.substring(5, base64Offset);
                                    data = Encode.atob(data.substring(base64Offset + 8));
                                }

                                this.size = data.length;

                                blobpool[this.uid] = data;
                            },

                            /**
                             Checks if blob is standalone (detached of any runtime)

                             @method isDetached
                             @protected
                             @return {Boolean}
                             */
                            isDetached: function() {
                                return !this.ruid && Basic.typeOf(blobpool[this.uid]) === 'string';
                            },

                            /**
                             Destroy Blob and free any resources it was using

                             @method destroy
                             */
                            destroy: function() {
                                this.detach();
                                delete blobpool[this.uid];
                            }
                        });


                        if (blob.data) {
                            this.detach(blob.data); // auto-detach if payload has been passed
                        } else {
                            blobpool[this.uid] = blob;
                        }
                    }

                    return Blob;
                });

// Included from: src/javascript/core/I18n.js

                /**
                 * I18n.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/core/I18n", [
                    "moxie/core/utils/Basic"
                ], function(Basic) {
                    var i18n = {};

                    /**
                     @class moxie/core/I18n
                     */
                    return {
                        /**
                         * Extends the language pack object with new items.
                         *
                         * @param {Object} pack Language pack items to add.
                         * @return {Object} Extended language pack object.
                         */
                        addI18n: function(pack) {
                            return Basic.extend(i18n, pack);
                        },

                        /**
                         * Translates the specified string by checking for the english string in the language pack lookup.
                         *
                         * @param {String} str String to look for.
                         * @return {String} Translated string or the input string if it wasn't found.
                         */
                        translate: function(str) {
                            return i18n[str] || str;
                        },

                        /**
                         * Shortcut for translate function
                         *
                         * @param {String} str String to look for.
                         * @return {String} Translated string or the input string if it wasn't found.
                         */
                        _: function(str) {
                            return this.translate(str);
                        },

                        /**
                         * Pseudo sprintf implementation - simple way to replace tokens with specified values.
                         *
                         * @param {String} str String with tokens
                         * @return {String} String with replaced tokens
                         */
                        sprintf: function(str) {
                            var args = [].slice.call(arguments, 1);

                            return str.replace(/%[a-z]/g, function() {
                                var value = args.shift();
                                return Basic.typeOf(value) !== 'undefined' ? value : '';
                            });
                        }
                    };
                });

// Included from: src/javascript/core/utils/Mime.js

                /**
                 * Mime.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/core/utils/Mime", [
                    "moxie/core/utils/Basic",
                    "moxie/core/I18n"
                ], function(Basic, I18n) {

                    var mimeData = "" +
                        "application/msword,doc dot," +
                        "application/pdf,pdf," +
                        "application/pgp-signature,pgp," +
                        "application/postscript,ps ai eps," +
                        "application/rtf,rtf," +
                        "application/vnd.ms-excel,xls xlb," +
                        "application/vnd.ms-powerpoint,ppt pps pot," +
                        "application/zip,zip," +
                        "application/x-shockwave-flash,swf swfl," +
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx," +
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx," +
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx," +
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx," +
                        "application/vnd.openxmlformats-officedocument.presentationml.template,potx," +
                        "application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx," +
                        "application/x-javascript,js," +
                        "application/json,json," +
                        "audio/mpeg,mp3 mpga mpega mp2," +
                        "audio/x-wav,wav," +
                        "audio/x-m4a,m4a," +
                        "audio/ogg,oga ogg," +
                        "audio/aiff,aiff aif," +
                        "audio/flac,flac," +
                        "audio/aac,aac," +
                        "audio/ac3,ac3," +
                        "audio/x-ms-wma,wma," +
                        "image/bmp,bmp," +
                        "image/gif,gif," +
                        "image/jpeg,jpg jpeg jpe," +
                        "image/photoshop,psd," +
                        "image/png,png," +
                        "image/svg+xml,svg svgz," +
                        "image/tiff,tiff tif," +
                        "text/plain,asc txt text diff log," +
                        "text/html,htm html xhtml," +
                        "text/css,css," +
                        "text/csv,csv," +
                        "text/rtf,rtf," +
                        "video/mpeg,mpeg mpg mpe m2v," +
                        "video/quicktime,qt mov," +
                        "video/mp4,mp4," +
                        "video/x-m4v,m4v," +
                        "video/x-flv,flv," +
                        "video/x-ms-wmv,wmv," +
                        "video/avi,avi," +
                        "video/webm,webm," +
                        "video/3gpp,3gpp 3gp," +
                        "video/3gpp2,3g2," +
                        "video/vnd.rn-realvideo,rv," +
                        "video/ogg,ogv," +
                        "video/x-matroska,mkv," +
                        "application/vnd.oasis.opendocument.formula-template,otf," +
                        "application/octet-stream,exe";


                    var Mime = {

                        mimes: {},

                        extensions: {},

                        // Parses the default mime types string into a mimes and extensions lookup maps
                        addMimeType: function (mimeData) {
                            var items = mimeData.split(/,/), i, ii, ext;

                            for (i = 0; i < items.length; i += 2) {
                                ext = items[i + 1].split(/ /);

                                // extension to mime lookup
                                for (ii = 0; ii < ext.length; ii++) {
                                    this.mimes[ext[ii]] = items[i];
                                }
                                // mime to extension lookup
                                this.extensions[items[i]] = ext;
                            }
                        },


                        extList2mimes: function (filters, addMissingExtensions) {
                            var self = this, ext, i, ii, type, mimes = [];

                            // convert extensions to mime types list
                            for (i = 0; i < filters.length; i++) {
                                ext = filters[i].extensions.toLowerCase().split(/\s*,\s*/);

                                for (ii = 0; ii < ext.length; ii++) {

                                    // if there's an asterisk in the list, then accept attribute is not required
                                    if (ext[ii] === '*') {
                                        return [];
                                    }

                                    type = self.mimes[ext[ii]];

                                    // future browsers should filter by extension, finally
                                    if (addMissingExtensions && /^\w+$/.test(ext[ii])) {
                                        mimes.push('.' + ext[ii]);
                                    } else if (type && Basic.inArray(type, mimes) === -1) {
                                        mimes.push(type);
                                    } else if (!type) {
                                        // if we have no type in our map, then accept all
                                        return [];
                                    }
                                }
                            }
                            return mimes;
                        },


                        mimes2exts: function(mimes) {
                            var self = this, exts = [];

                            Basic.each(mimes, function(mime) {
                                mime = mime.toLowerCase();

                                if (mime === '*') {
                                    exts = [];
                                    return false;
                                }

                                // check if this thing looks like mime type
                                var m = mime.match(/^(\w+)\/(\*|\w+)$/);
                                if (m) {
                                    if (m[2] === '*') {
                                        // wildcard mime type detected
                                        Basic.each(self.extensions, function(arr, mime) {
                                            if ((new RegExp('^' + m[1] + '/')).test(mime)) {
                                                [].push.apply(exts, self.extensions[mime]);
                                            }
                                        });
                                    } else if (self.extensions[mime]) {
                                        [].push.apply(exts, self.extensions[mime]);
                                    }
                                }
                            });
                            return exts;
                        },


                        mimes2extList: function(mimes) {
                            var accept = [], exts = [];

                            if (Basic.typeOf(mimes) === 'string') {
                                mimes = Basic.trim(mimes).split(/\s*,\s*/);
                            }

                            exts = this.mimes2exts(mimes);

                            accept.push({
                                title: I18n.translate('Files'),
                                extensions: exts.length ? exts.join(',') : '*'
                            });

                            // save original mimes string
                            accept.mimes = mimes;

                            return accept;
                        },


                        getFileExtension: function(fileName) {
                            var matches = fileName && fileName.match(/\.([^.]+)$/);
                            if (matches) {
                                return matches[1].toLowerCase();
                            }
                            return '';
                        },

                        getFileMime: function(fileName) {
                            return this.mimes[this.getFileExtension(fileName)] || '';
                        }
                    };

                    Mime.addMimeType(mimeData);

                    return Mime;
                });

// Included from: src/javascript/file/FileInput.js

                /**
                 * FileInput.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/file/FileInput', [
                    'moxie/core/utils/Basic',
                    'moxie/core/utils/Env',
                    'moxie/core/utils/Mime',
                    'moxie/core/utils/Dom',
                    'moxie/core/Exceptions',
                    'moxie/core/EventTarget',
                    'moxie/core/I18n',
                    'moxie/runtime/Runtime',
                    'moxie/runtime/RuntimeClient'
                ], function(Basic, Env, Mime, Dom, x, EventTarget, I18n, Runtime, RuntimeClient) {
                    /**
                     Provides a convenient way to create cross-browser file-picker. Generates file selection dialog on click,
                     converts selected files to _File_ objects, to be used in conjunction with _Image_, preloaded in memory
                     with _FileReader_ or uploaded to a server through _XMLHttpRequest_.

                     @class moxie/file/FileInput
                     @constructor
                     @extends EventTarget
                     @uses RuntimeClient
                     @param {Object|String|DOMElement} options If options is string or node, argument is considered as _browse\_button_.
                     @param {String|DOMElement} options.browse_button DOM Element to turn into file picker.
                     @param {Array} [options.accept] Array of mime types to accept. By default accepts all.
                     @param {Boolean} [options.multiple=false] Enable selection of multiple files.
                     @param {Boolean} [options.directory=false] Turn file input into the folder input (cannot be both at the same time).
                     @param {String|DOMElement} [options.container] DOM Element to use as a container for file-picker. Defaults to parentNode
                     for _browse\_button_.
                     @param {Object|String} [options.required_caps] Set of required capabilities, that chosen runtime must support.

                     @example
                     <div id="container">
                     <a id="file-picker" href="javascript:;">Browse...</a>
                     </div>

                     <script>
                     var fileInput = new mOxie.FileInput({
				browse_button: 'file-picker', // or document.getElementById('file-picker')
				container: 'container',
				accept: [
					{title: "Image files", extensions: "jpg,gif,png"} // accept only images
				],
				multiple: true // allow multiple file selection
			});

                     fileInput.onchange = function(e) {
				// do something to files array
				console.info(e.target.files); // or this.files or fileInput.files
			};

                     fileInput.init(); // initialize
                     </script>
                     */
                    var dispatches = [
                        /**
                         Dispatched when runtime is connected and file-picker is ready to be used.

                         @event ready
                         @param {Object} event
                         */
                        'ready',

                        /**
                         Dispatched right after [ready](#event_ready) event, and whenever [refresh()](#method_refresh) is invoked.
                         Check [corresponding documentation entry](#method_refresh) for more info.

                         @event refresh
                         @param {Object} event
                         */

                        /**
                         Dispatched when selection of files in the dialog is complete.

                         @event change
                         @param {Object} event
                         */
                        'change',

                        'cancel', // TODO: might be useful

                        /**
                         Dispatched when mouse cursor enters file-picker area. Can be used to style element
                         accordingly.

                         @event mouseenter
                         @param {Object} event
                         */
                        'mouseenter',

                        /**
                         Dispatched when mouse cursor leaves file-picker area. Can be used to style element
                         accordingly.

                         @event mouseleave
                         @param {Object} event
                         */
                        'mouseleave',

                        /**
                         Dispatched when functional mouse button is pressed on top of file-picker area.

                         @event mousedown
                         @param {Object} event
                         */
                        'mousedown',

                        /**
                         Dispatched when functional mouse button is released on top of file-picker area.

                         @event mouseup
                         @param {Object} event
                         */
                        'mouseup'
                    ];

                    function FileInput(options) {
                        if (MXI_DEBUG) {
                            Env.log("Instantiating FileInput...");
                        }

                        var container, browseButton, defaults;

                        // if flat argument passed it should be browse_button id
                        if (Basic.inArray(Basic.typeOf(options), ['string', 'node']) !== -1) {
                            options = { browse_button : options };
                        }

                        // this will help us to find proper default container
                        browseButton = Dom.get(options.browse_button);
                        if (!browseButton) {
                            // browse button is required
                            throw new x.DOMException(x.DOMException.NOT_FOUND_ERR);
                        }

                        // figure out the options
                        defaults = {
                            accept: [{
                                title: I18n.translate('All Files'),
                                extensions: '*'
                            }],
                            multiple: false,
                            required_caps: false,
                            container: browseButton.parentNode || document.body
                        };

                        options = Basic.extend({}, defaults, options);

                        // convert to object representation
                        if (typeof(options.required_caps) === 'string') {
                            options.required_caps = Runtime.parseCaps(options.required_caps);
                        }

                        // normalize accept option (could be list of mime types or array of title/extensions pairs)
                        if (typeof(options.accept) === 'string') {
                            options.accept = Mime.mimes2extList(options.accept);
                        }

                        container = Dom.get(options.container);
                        // make sure we have container
                        if (!container) {
                            container = document.body;
                        }

                        // make container relative, if it's not
                        if (Dom.getStyle(container, 'position') === 'static') {
                            container.style.position = 'relative';
                        }

                        container = browseButton = null; // IE

                        RuntimeClient.call(this);

                        Basic.extend(this, {
                            /**
                             Unique id of the component

                             @property uid
                             @protected
                             @readOnly
                             @type {String}
                             @default UID
                             */
                            uid: Basic.guid('uid_'),

                            /**
                             Unique id of the connected runtime, if any.

                             @property ruid
                             @protected
                             @type {String}
                             */
                            ruid: null,

                            /**
                             Unique id of the runtime container. Useful to get hold of it for various manipulations.

                             @property shimid
                             @protected
                             @type {String}
                             */
                            shimid: null,

                            /**
                             Array of selected mOxie.File objects

                             @property files
                             @type {Array}
                             @default null
                             */
                            files: null,

                            /**
                             Initializes the file-picker, connects it to runtime and dispatches event ready when done.

                             @method init
                             */
                            init: function() {
                                var self = this;

                                self.bind('RuntimeInit', function(e, runtime) {
                                    self.ruid = runtime.uid;
                                    self.shimid = runtime.shimid;

                                    self.bind("Ready", function() {
                                        self.trigger("Refresh");
                                    }, 999);

                                    // re-position and resize shim container
                                    self.bind('Refresh', function() {
                                        var pos, size, browseButton, shimContainer, zIndex;

                                        browseButton = Dom.get(options.browse_button);
                                        shimContainer = Dom.get(runtime.shimid); // do not use runtime.getShimContainer(), since it will create container if it doesn't exist

                                        if (browseButton) {
                                            pos = Dom.getPos(browseButton, Dom.get(options.container));
                                            size = Dom.getSize(browseButton);
                                            zIndex = parseInt(Dom.getStyle(browseButton, 'z-index'), 10) || 0;

                                            if (shimContainer) {
                                                Basic.extend(shimContainer.style, {
                                                    top: pos.y + 'px',
                                                    left: pos.x + 'px',
                                                    width: size.w + 'px',
                                                    height: size.h + 'px',
                                                    zIndex: zIndex + 1
                                                });
                                            }
                                        }
                                        shimContainer = browseButton = null;
                                    });

                                    runtime.exec.call(self, 'FileInput', 'init', options);
                                });

                                // runtime needs: options.required_features, options.runtime_order and options.container
                                self.connectRuntime(Basic.extend({}, options, {
                                    required_caps: {
                                        select_file: true
                                    }
                                }));
                            },


                            /**
                             * Get current option value by its name
                             *
                             * @method getOption
                             * @param name
                             * @return {Mixed}
                             */
                            getOption: function(name) {
                                return options[name];
                            },


                            /**
                             * Sets a new value for the option specified by name
                             *
                             * @method setOption
                             * @param name
                             * @param value
                             */
                            setOption: function(name, value) {
                                if (!options.hasOwnProperty(name)) {
                                    return;
                                }

                                var oldValue = options[name];

                                switch (name) {
                                    case 'accept':
                                        if (typeof(value) === 'string') {
                                            value = Mime.mimes2extList(value);
                                        }
                                        break;

                                    case 'container':
                                    case 'required_caps':
                                        throw new x.FileException(x.FileException.NO_MODIFICATION_ALLOWED_ERR);
                                }

                                options[name] = value;
                                this.exec('FileInput', 'setOption', name, value);

                                this.trigger('OptionChanged', name, value, oldValue);
                            },

                            /**
                             Disables file-picker element, so that it doesn't react to mouse clicks.

                             @method disable
                             @param {Boolean} [state=true] Disable component if - true, enable if - false
                             */
                            disable: function(state) {
                                var runtime = this.getRuntime();
                                if (runtime) {
                                    this.exec('FileInput', 'disable', Basic.typeOf(state) === 'undefined' ? true : state);
                                }
                            },


                            /**
                             Reposition and resize dialog trigger to match the position and size of browse_button element.

                             @method refresh
                             */
                            refresh: function() {
                                this.trigger("Refresh");
                            },


                            /**
                             Destroy component.

                             @method destroy
                             */
                            destroy: function() {
                                var runtime = this.getRuntime();
                                if (runtime) {
                                    runtime.exec.call(this, 'FileInput', 'destroy');
                                    this.disconnectRuntime();
                                }

                                if (Basic.typeOf(this.files) === 'array') {
                                    // no sense in leaving associated files behind
                                    Basic.each(this.files, function(file) {
                                        file.destroy();
                                    });
                                }
                                this.files = null;

                                this.unbindAll();
                            }
                        });

                        this.handleEventProps(dispatches);
                    }

                    FileInput.prototype = EventTarget.instance;

                    return FileInput;
                });

// Included from: src/javascript/file/File.js

                /**
                 * File.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/file/File', [
                    'moxie/core/utils/Basic',
                    'moxie/core/utils/Mime',
                    'moxie/file/Blob'
                ], function(Basic, Mime, Blob) {
                    /**
                     @class moxie/file/File
                     @extends Blob
                     @constructor
                     @param {String} ruid Unique id of the runtime, to which this blob belongs to
                     @param {Object} file Object "Native" file object, as it is represented in the runtime
                     */
                    function File(ruid, file) {
                        if (!file) { // avoid extra errors in case we overlooked something
                            file = {};
                        }

                        Blob.apply(this, arguments);

                        if (!this.type) {
                            this.type = Mime.getFileMime(file.name);
                        }

                        // sanitize file name or generate new one
                        var name;
                        if (file.name) {
                            name = file.name.replace(/\\/g, '/');
                            name = name.substr(name.lastIndexOf('/') + 1);
                        } else if (this.type) {
                            var prefix = this.type.split('/')[0];
                            name = Basic.guid((prefix !== '' ? prefix : 'file') + '_');

                            if (Mime.extensions[this.type]) {
                                name += '.' + Mime.extensions[this.type][0]; // append proper extension if possible
                            }
                        }


                        Basic.extend(this, {
                            /**
                             File name

                             @property name
                             @type {String}
                             @default UID
                             */
                            name: name || Basic.guid('file_'),

                            /**
                             Relative path to the file inside a directory

                             @property relativePath
                             @type {String}
                             @default ''
                             */
                            relativePath: '',

                            /**
                             Date of last modification

                             @property lastModifiedDate
                             @type {String}
                             @default now
                             */
                            lastModifiedDate: file.lastModifiedDate || (new Date()).toLocaleString() // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)
                        });
                    }

                    File.prototype = Blob.prototype;

                    return File;
                });

// Included from: src/javascript/file/FileDrop.js

                /**
                 * FileDrop.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/file/FileDrop', [
                    'moxie/core/I18n',
                    'moxie/core/utils/Dom',
                    'moxie/core/Exceptions',
                    'moxie/core/utils/Basic',
                    'moxie/core/utils/Env',
                    'moxie/file/File',
                    'moxie/runtime/RuntimeClient',
                    'moxie/core/EventTarget',
                    'moxie/core/utils/Mime'
                ], function(I18n, Dom, x, Basic, Env, File, RuntimeClient, EventTarget, Mime) {
                    /**
                     Turn arbitrary DOM element to a drop zone accepting files. Converts selected files to _File_ objects, to be used
                     in conjunction with _Image_, preloaded in memory with _FileReader_ or uploaded to a server through
                     _XMLHttpRequest_.

                     @example
                     <div id="drop_zone">
                     Drop files here
                     </div>
                     <br />
                     <div id="filelist"></div>

                     <script type="text/javascript">
                     var fileDrop = new mOxie.FileDrop('drop_zone'), fileList = mOxie.get('filelist');

                     fileDrop.ondrop = function() {
				mOxie.each(this.files, function(file) {
					fileList.innerHTML += '<div>' + file.name + '</div>';
				});
			};

                     fileDrop.init();
                     </script>

                     @class moxie/file/FileDrop
                     @constructor
                     @extends EventTarget
                     @uses RuntimeClient
                     @param {Object|String} options If options has typeof string, argument is considered as options.drop_zone
                     @param {String|DOMElement} options.drop_zone DOM Element to turn into a drop zone
                     @param {Array} [options.accept] Array of mime types to accept. By default accepts all
                     @param {Object|String} [options.required_caps] Set of required capabilities, that chosen runtime must support
                     */
                    var dispatches = [
                        /**
                         Dispatched when runtime is connected and drop zone is ready to accept files.

                         @event ready
                         @param {Object} event
                         */
                        'ready',

                        /**
                         Dispatched when dragging cursor enters the drop zone.

                         @event dragenter
                         @param {Object} event
                         */
                        'dragenter',

                        /**
                         Dispatched when dragging cursor leaves the drop zone.

                         @event dragleave
                         @param {Object} event
                         */
                        'dragleave',

                        /**
                         Dispatched when file is dropped onto the drop zone.

                         @event drop
                         @param {Object} event
                         */
                        'drop',

                        /**
                         Dispatched if error occurs.

                         @event error
                         @param {Object} event
                         */
                        'error'
                    ];

                    function FileDrop(options) {
                        if (MXI_DEBUG) {
                            Env.log("Instantiating FileDrop...");
                        }

                        var self = this, defaults;

                        // if flat argument passed it should be drop_zone id
                        if (typeof(options) === 'string') {
                            options = { drop_zone : options };
                        }

                        // figure out the options
                        defaults = {
                            accept: [{
                                title: I18n.translate('All Files'),
                                extensions: '*'
                            }],
                            required_caps: {
                                drag_and_drop: true
                            }
                        };

                        options = typeof(options) === 'object' ? Basic.extend({}, defaults, options) : defaults;

                        // this will help us to find proper default container
                        options.container = Dom.get(options.drop_zone) || document.body;

                        // make container relative, if it is not
                        if (Dom.getStyle(options.container, 'position') === 'static') {
                            options.container.style.position = 'relative';
                        }

                        // normalize accept option (could be list of mime types or array of title/extensions pairs)
                        if (typeof(options.accept) === 'string') {
                            options.accept = Mime.mimes2extList(options.accept);
                        }

                        RuntimeClient.call(self);

                        Basic.extend(self, {
                            uid: Basic.guid('uid_'),

                            ruid: null,

                            files: null,

                            init: function() {
                                self.bind('RuntimeInit', function(e, runtime) {
                                    self.ruid = runtime.uid;
                                    runtime.exec.call(self, 'FileDrop', 'init', options);
                                    self.dispatchEvent('ready');
                                });

                                // runtime needs: options.required_features, options.runtime_order and options.container
                                self.connectRuntime(options); // throws RuntimeError
                            },

                            destroy: function() {
                                var runtime = this.getRuntime();
                                if (runtime) {
                                    runtime.exec.call(this, 'FileDrop', 'destroy');
                                    this.disconnectRuntime();
                                }
                                this.files = null;

                                this.unbindAll();
                            }
                        });

                        this.handleEventProps(dispatches);
                    }

                    FileDrop.prototype = EventTarget.instance;

                    return FileDrop;
                });

// Included from: src/javascript/file/FileReader.js

                /**
                 * FileReader.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/file/FileReader', [
                    'moxie/core/utils/Basic',
                    'moxie/core/utils/Encode',
                    'moxie/core/Exceptions',
                    'moxie/core/EventTarget',
                    'moxie/file/Blob',
                    'moxie/runtime/RuntimeClient'
                ], function(Basic, Encode, x, EventTarget, Blob, RuntimeClient) {
                    /**
                     Utility for preloading o.Blob/o.File objects in memory. By design closely follows [W3C FileReader](http://www.w3.org/TR/FileAPI/#dfn-filereader)
                     interface. Where possible uses native FileReader, where - not falls back to shims.

                     @class moxie/file/FileReader
                     @constructor FileReader
                     @extends EventTarget
                     @uses RuntimeClient
                     */
                    var dispatches = [

                        /**
                         Dispatched when the read starts.

                         @event loadstart
                         @param {Object} event
                         */
                        'loadstart',

                        /**
                         Dispatched while reading (and decoding) blob, and reporting partial Blob data (progess.loaded/progress.total).

                         @event progress
                         @param {Object} event
                         */
                        'progress',

                        /**
                         Dispatched when the read has successfully completed.

                         @event load
                         @param {Object} event
                         */
                        'load',

                        /**
                         Dispatched when the read has been aborted. For instance, by invoking the abort() method.

                         @event abort
                         @param {Object} event
                         */
                        'abort',

                        /**
                         Dispatched when the read has failed.

                         @event error
                         @param {Object} event
                         */
                        'error',

                        /**
                         Dispatched when the request has completed (either in success or failure).

                         @event loadend
                         @param {Object} event
                         */
                        'loadend'
                    ];

                    function FileReader() {

                        RuntimeClient.call(this);

                        Basic.extend(this, {
                            /**
                             UID of the component instance.

                             @property uid
                             @type {String}
                             */
                            uid: Basic.guid('uid_'),

                            /**
                             Contains current state of FileReader object. Can take values of FileReader.EMPTY, FileReader.LOADING
                             and FileReader.DONE.

                             @property readyState
                             @type {Number}
                             @default FileReader.EMPTY
                             */
                            readyState: FileReader.EMPTY,

                            /**
                             Result of the successful read operation.

                             @property result
                             @type {String}
                             */
                            result: null,

                            /**
                             Stores the error of failed asynchronous read operation.

                             @property error
                             @type {DOMError}
                             */
                            error: null,

                            /**
                             Initiates reading of File/Blob object contents to binary string.

                             @method readAsBinaryString
                             @param {Blob|File} blob Object to preload
                             */
                            readAsBinaryString: function(blob) {
                                _read.call(this, 'readAsBinaryString', blob);
                            },

                            /**
                             Initiates reading of File/Blob object contents to dataURL string.

                             @method readAsDataURL
                             @param {Blob|File} blob Object to preload
                             */
                            readAsDataURL: function(blob) {
                                _read.call(this, 'readAsDataURL', blob);
                            },

                            /**
                             Initiates reading of File/Blob object contents to string.

                             @method readAsText
                             @param {Blob|File} blob Object to preload
                             */
                            readAsText: function(blob) {
                                _read.call(this, 'readAsText', blob);
                            },

                            /**
                             Aborts preloading process.

                             @method abort
                             */
                            abort: function() {
                                this.result = null;

                                if (Basic.inArray(this.readyState, [FileReader.EMPTY, FileReader.DONE]) !== -1) {
                                    return;
                                } else if (this.readyState === FileReader.LOADING) {
                                    this.readyState = FileReader.DONE;
                                }

                                this.exec('FileReader', 'abort');

                                this.trigger('abort');
                                this.trigger('loadend');
                            },

                            /**
                             Destroy component and release resources.

                             @method destroy
                             */
                            destroy: function() {
                                this.abort();
                                this.exec('FileReader', 'destroy');
                                this.disconnectRuntime();
                                this.unbindAll();
                            }
                        });

                        // uid must already be assigned
                        this.handleEventProps(dispatches);

                        this.bind('Error', function(e, err) {
                            this.readyState = FileReader.DONE;
                            this.error = err;
                        }, 999);

                        this.bind('Load', function(e) {
                            this.readyState = FileReader.DONE;
                        }, 999);


                        function _read(op, blob) {
                            var self = this;

                            this.trigger('loadstart');

                            if (this.readyState === FileReader.LOADING) {
                                this.trigger('error', new x.DOMException(x.DOMException.INVALID_STATE_ERR));
                                this.trigger('loadend');
                                return;
                            }

                            // if source is not o.Blob/o.File
                            if (!(blob instanceof Blob)) {
                                this.trigger('error', new x.DOMException(x.DOMException.NOT_FOUND_ERR));
                                this.trigger('loadend');
                                return;
                            }

                            this.result = null;
                            this.readyState = FileReader.LOADING;

                            if (blob.isDetached()) {
                                var src = blob.getSource();
                                switch (op) {
                                    case 'readAsText':
                                    case 'readAsBinaryString':
                                        this.result = src;
                                        break;
                                    case 'readAsDataURL':
                                        this.result = 'data:' + blob.type + ';base64,' + Encode.btoa(src);
                                        break;
                                }
                                this.readyState = FileReader.DONE;
                                this.trigger('load');
                                this.trigger('loadend');
                            } else {
                                this.connectRuntime(blob.ruid);
                                this.exec('FileReader', 'read', op, blob);
                            }
                        }
                    }

                    /**
                     Initial FileReader state

                     @property EMPTY
                     @type {Number}
                     @final
                     @static
                     @default 0
                     */
                    FileReader.EMPTY = 0;

                    /**
                     FileReader switches to this state when it is preloading the source

                     @property LOADING
                     @type {Number}
                     @final
                     @static
                     @default 1
                     */
                    FileReader.LOADING = 1;

                    /**
                     Preloading is complete, this is a final state

                     @property DONE
                     @type {Number}
                     @final
                     @static
                     @default 2
                     */
                    FileReader.DONE = 2;

                    FileReader.prototype = EventTarget.instance;

                    return FileReader;
                });

// Included from: src/javascript/core/utils/Url.js

                /**
                 * Url.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/core/utils/Url', [
                    'moxie/core/utils/Basic'
                ], function(Basic) {
                    /**
                     Parse url into separate components and fill in absent parts with parts from current url,
                     based on https://raw.github.com/kvz/phpjs/master/functions/url/parse_url.js

                     @method parseUrl
                     @for Utils
                     @static
                     @param {String} url Url to parse (defaults to empty string if undefined)
                     @return {Object} Hash containing extracted uri components
                     */
                    var parseUrl = function(url, currentUrl) {
                        var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment']
                            , i = key.length
                            , ports = {
                                http: 80,
                                https: 443
                            }
                            , uri = {}
                            , regex = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[\da-fA-F:]+\]|[^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/
                            , m = regex.exec(url || '')
                            , isRelative
                            , isSchemeLess = /^\/\/\w/.test(url)
                        ;

                        switch (Basic.typeOf(currentUrl)) {
                            case 'undefined':
                                currentUrl = parseUrl(document.location.href, false);
                                break;

                            case 'string':
                                currentUrl = parseUrl(currentUrl, false);
                                break;
                        }

                        while (i--) {
                            if (m[i]) {
                                uri[key[i]] = m[i];
                            }
                        }

                        isRelative = !isSchemeLess && !uri.scheme;

                        if (isSchemeLess || isRelative) {
                            uri.scheme = currentUrl.scheme;
                        }

                        // when url is relative, we set the origin and the path ourselves
                        if (isRelative) {
                            uri.host = currentUrl.host;
                            uri.port = currentUrl.port;

                            var path = '';
                            // for urls without trailing slash we need to figure out the path
                            if (/^[^\/]/.test(uri.path)) {
                                path = currentUrl.path;
                                // if path ends with a filename, strip it
                                if (/\/[^\/]*\.[^\/]*$/.test(path)) {
                                    path = path.replace(/\/[^\/]+$/, '/');
                                } else {
                                    // avoid double slash at the end (see #127)
                                    path = path.replace(/\/?$/, '/');
                                }
                            }
                            uri.path = path + (uri.path || ''); // site may reside at domain.com or domain.com/subdir
                        }

                        if (!uri.port) {
                            uri.port = ports[uri.scheme] || 80;
                        }

                        uri.port = parseInt(uri.port, 10);

                        if (!uri.path) {
                            uri.path = "/";
                        }

                        delete uri.source;

                        return uri;
                    };

                    /**
                     Resolve url - among other things will turn relative url to absolute

                     @method resolveUrl
                     @static
                     @param {String|Object} url Either absolute or relative, or a result of parseUrl call
                     @return {String} Resolved, absolute url
                     */
                    var resolveUrl = function(url) {
                        var ports = { // we ignore default ports
                            http: 80,
                            https: 443
                        }
                            , urlp = typeof(url) === 'object' ? url : parseUrl(url);
                        ;

                        return urlp.scheme + '://' + urlp.host + (urlp.port !== ports[urlp.scheme] ? ':' + urlp.port : '') + urlp.path + (urlp.query ? urlp.query : '');
                    };

                    /**
                     Check if specified url has the same origin as the current document

                     @method hasSameOrigin
                     @param {String|Object} url
                     @return {Boolean}
                     */
                    var hasSameOrigin = function(url) {
                        function origin(url) {
                            return [url.scheme, url.host, url.port].join('/');
                        }

                        if (typeof url === 'string') {
                            url = parseUrl(url);
                        }

                        return origin(parseUrl()) === origin(url);
                    };

                    return {
                        parseUrl: parseUrl,
                        resolveUrl: resolveUrl,
                        hasSameOrigin: hasSameOrigin
                    };
                });

// Included from: src/javascript/runtime/RuntimeTarget.js

                /**
                 * RuntimeTarget.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/runtime/RuntimeTarget', [
                    'moxie/core/utils/Basic',
                    'moxie/runtime/RuntimeClient',
                    "moxie/core/EventTarget"
                ], function(Basic, RuntimeClient, EventTarget) {
                    /**
                     Instance of this class can be used as a target for the events dispatched by shims,
                     when allowing them onto components is for either reason inappropriate

                     @class moxie/runtime/RuntimeTarget
                     @constructor
                     @protected
                     @extends EventTarget
                     */
                    function RuntimeTarget() {
                        this.uid = Basic.guid('uid_');

                        RuntimeClient.call(this);

                        this.destroy = function() {
                            this.disconnectRuntime();
                            this.unbindAll();
                        };
                    }

                    RuntimeTarget.prototype = EventTarget.instance;

                    return RuntimeTarget;
                });

// Included from: src/javascript/file/FileReaderSync.js

                /**
                 * FileReaderSync.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/file/FileReaderSync', [
                    'moxie/core/utils/Basic',
                    'moxie/runtime/RuntimeClient',
                    'moxie/core/utils/Encode'
                ], function(Basic, RuntimeClient, Encode) {
                    /**
                     Synchronous FileReader implementation. Something like this is available in WebWorkers environment, here
                     it can be used to read only preloaded blobs/files and only below certain size (not yet sure what that'd be,
                     but probably < 1mb). Not meant to be used directly by user.

                     @class moxie/file/FileReaderSync
                     @private
                     @constructor
                     */
                    return function() {
                        RuntimeClient.call(this);

                        Basic.extend(this, {
                            uid: Basic.guid('uid_'),

                            readAsBinaryString: function(blob) {
                                return _read.call(this, 'readAsBinaryString', blob);
                            },

                            readAsDataURL: function(blob) {
                                return _read.call(this, 'readAsDataURL', blob);
                            },

                            /*readAsArrayBuffer: function(blob) {
                             return _read.call(this, 'readAsArrayBuffer', blob);
                             },*/

                            readAsText: function(blob) {
                                return _read.call(this, 'readAsText', blob);
                            }
                        });

                        function _read(op, blob) {
                            if (blob.isDetached()) {
                                var src = blob.getSource();
                                switch (op) {
                                    case 'readAsBinaryString':
                                        return src;
                                    case 'readAsDataURL':
                                        return 'data:' + blob.type + ';base64,' + Encode.btoa(src);
                                    case 'readAsText':
                                        var txt = '';
                                        for (var i = 0, length = src.length; i < length; i++) {
                                            txt += String.fromCharCode(src[i]);
                                        }
                                        return txt;
                                }
                            } else {
                                var result = this.connectRuntime(blob.ruid).exec.call(this, 'FileReaderSync', 'read', op, blob);
                                this.disconnectRuntime();
                                return result;
                            }
                        }
                    };
                });

// Included from: src/javascript/xhr/FormData.js

                /**
                 * FormData.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/xhr/FormData", [
                    "moxie/core/Exceptions",
                    "moxie/core/utils/Basic",
                    "moxie/file/Blob"
                ], function(x, Basic, Blob) {
                    /**
                     FormData

                     @class moxie/xhr/FormData
                     @constructor
                     */
                    function FormData() {
                        var _blob, _fields = [];

                        Basic.extend(this, {
                            /**
                             Append another key-value pair to the FormData object

                             @method append
                             @param {String} name Name for the new field
                             @param {String|Blob|Array|Object} value Value for the field
                             */
                            append: function(name, value) {
                                var self = this, valueType = Basic.typeOf(value);

                                // according to specs value might be either Blob or String
                                if (value instanceof Blob) {
                                    _blob = {
                                        name: name,
                                        value: value // unfortunately we can only send single Blob in one FormData
                                    };
                                } else if ('array' === valueType) {
                                    name += '[]';

                                    Basic.each(value, function(value) {
                                        self.append(name, value);
                                    });
                                } else if ('object' === valueType) {
                                    Basic.each(value, function(value, key) {
                                        self.append(name + '[' + key + ']', value);
                                    });
                                } else if ('null' === valueType || 'undefined' === valueType || 'number' === valueType && isNaN(value)) {
                                    self.append(name, "false");
                                } else {
                                    _fields.push({
                                        name: name,
                                        value: value.toString()
                                    });
                                }
                            },

                            /**
                             Checks if FormData contains Blob.

                             @method hasBlob
                             @return {Boolean}
                             */
                            hasBlob: function() {
                                return !!this.getBlob();
                            },

                            /**
                             Retrieves blob.

                             @method getBlob
                             @return {Object} Either Blob if found or null
                             */
                            getBlob: function() {
                                return _blob && _blob.value || null;
                            },

                            /**
                             Retrieves blob field name.

                             @method getBlobName
                             @return {String} Either Blob field name or null
                             */
                            getBlobName: function() {
                                return _blob && _blob.name || null;
                            },

                            /**
                             Loop over the fields in FormData and invoke the callback for each of them.

                             @method each
                             @param {Function} cb Callback to call for each field
                             */
                            each: function(cb) {
                                Basic.each(_fields, function(field) {
                                    cb(field.value, field.name);
                                });

                                if (_blob) {
                                    cb(_blob.value, _blob.name);
                                }
                            },

                            destroy: function() {
                                _blob = null;
                                _fields = [];
                            }
                        });
                    }

                    return FormData;
                });

// Included from: src/javascript/xhr/XMLHttpRequest.js

                /**
                 * XMLHttpRequest.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/xhr/XMLHttpRequest", [
                    "moxie/core/utils/Basic",
                    "moxie/core/Exceptions",
                    "moxie/core/EventTarget",
                    "moxie/core/utils/Encode",
                    "moxie/core/utils/Url",
                    "moxie/runtime/Runtime",
                    "moxie/runtime/RuntimeTarget",
                    "moxie/file/Blob",
                    "moxie/file/FileReaderSync",
                    "moxie/xhr/FormData",
                    "moxie/core/utils/Env",
                    "moxie/core/utils/Mime"
                ], function(Basic, x, EventTarget, Encode, Url, Runtime, RuntimeTarget, Blob, FileReaderSync, FormData, Env, Mime) {

                    var httpCode = {
                        100: 'Continue',
                        101: 'Switching Protocols',
                        102: 'Processing',

                        200: 'OK',
                        201: 'Created',
                        202: 'Accepted',
                        203: 'Non-Authoritative Information',
                        204: 'No Content',
                        205: 'Reset Content',
                        206: 'Partial Content',
                        207: 'Multi-Status',
                        226: 'IM Used',

                        300: 'Multiple Choices',
                        301: 'Moved Permanently',
                        302: 'Found',
                        303: 'See Other',
                        304: 'Not Modified',
                        305: 'Use Proxy',
                        306: 'Reserved',
                        307: 'Temporary Redirect',

                        400: 'Bad Request',
                        401: 'Unauthorized',
                        402: 'Payment Required',
                        403: 'Forbidden',
                        404: 'Not Found',
                        405: 'Method Not Allowed',
                        406: 'Not Acceptable',
                        407: 'Proxy Authentication Required',
                        408: 'Request Timeout',
                        409: 'Conflict',
                        410: 'Gone',
                        411: 'Length Required',
                        412: 'Precondition Failed',
                        413: 'Request Entity Too Large',
                        414: 'Request-URI Too Long',
                        415: 'Unsupported Media Type',
                        416: 'Requested Range Not Satisfiable',
                        417: 'Expectation Failed',
                        422: 'Unprocessable Entity',
                        423: 'Locked',
                        424: 'Failed Dependency',
                        426: 'Upgrade Required',

                        500: 'Internal Server Error',
                        501: 'Not Implemented',
                        502: 'Bad Gateway',
                        503: 'Service Unavailable',
                        504: 'Gateway Timeout',
                        505: 'HTTP Version Not Supported',
                        506: 'Variant Also Negotiates',
                        507: 'Insufficient Storage',
                        510: 'Not Extended'
                    };

                    function XMLHttpRequestUpload() {
                        this.uid = Basic.guid('uid_');
                    }

                    XMLHttpRequestUpload.prototype = EventTarget.instance;

                    /**
                     Implementation of XMLHttpRequest

                     @class moxie/xhr/XMLHttpRequest
                     @constructor
                     @uses RuntimeClient
                     @extends EventTarget
                     */
                    var dispatches = [
                        'loadstart',

                        'progress',

                        'abort',

                        'error',

                        'load',

                        'timeout',

                        'loadend'

                        // readystatechange (for historical reasons)
                    ];

                    var NATIVE = 1, RUNTIME = 2;

                    function XMLHttpRequest() {
                        var self = this,
                            // this (together with _p() @see below) is here to gracefully upgrade to setter/getter syntax where possible
                            props = {
                                /**
                                 The amount of milliseconds a request can take before being terminated. Initially zero. Zero means there is no timeout.

                                 @property timeout
                                 @type Number
                                 @default 0
                                 */
                                timeout: 0,

                                /**
                                 Current state, can take following values:
                                 UNSENT (numeric value 0)
                                 The object has been constructed.

                                 OPENED (numeric value 1)
                                 The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the request can be made using the send() method.

                                 HEADERS_RECEIVED (numeric value 2)
                                 All redirects (if any) have been followed and all HTTP headers of the final response have been received. Several response members of the object are now available.

                                 LOADING (numeric value 3)
                                 The response entity body is being received.

                                 DONE (numeric value 4)

                                 @property readyState
                                 @type Number
                                 @default 0 (UNSENT)
                                 */
                                readyState: XMLHttpRequest.UNSENT,

                                /**
                                 True when user credentials are to be included in a cross-origin request. False when they are to be excluded
                                 in a cross-origin request and when cookies are to be ignored in its response. Initially false.

                                 @property withCredentials
                                 @type Boolean
                                 @default false
                                 */
                                withCredentials: false,

                                /**
                                 Returns the HTTP status code.

                                 @property status
                                 @type Number
                                 @default 0
                                 */
                                status: 0,

                                /**
                                 Returns the HTTP status text.

                                 @property statusText
                                 @type String
                                 */
                                statusText: "",

                                /**
                                 Returns the response type. Can be set to change the response type. Values are:
                                 the empty string (default), "arraybuffer", "blob", "document", "json", and "text".

                                 @property responseType
                                 @type String
                                 */
                                responseType: "",

                                /**
                                 Returns the document response entity body.

                                 Throws an "InvalidStateError" exception if responseType is not the empty string or "document".

                                 @property responseXML
                                 @type Document
                                 */
                                responseXML: null,

                                /**
                                 Returns the text response entity body.

                                 Throws an "InvalidStateError" exception if responseType is not the empty string or "text".

                                 @property responseText
                                 @type String
                                 */
                                responseText: null,

                                /**
                                 Returns the response entity body (http://www.w3.org/TR/XMLHttpRequest/#response-entity-body).
                                 Can become: ArrayBuffer, Blob, Document, JSON, Text

                                 @property response
                                 @type Mixed
                                 */
                                response: null
                            },

                            _async = true,
                            _url,
                            _method,
                            _headers = {},
                            _user,
                            _password,
                            _encoding = null,
                            _mimeType = null,

                            // flags
                            _sync_flag = false,
                            _send_flag = false,
                            _upload_events_flag = false,
                            _upload_complete_flag = false,
                            _error_flag = false,
                            _same_origin_flag = false,

                            // times
                            _start_time,
                            _timeoutset_time,

                            _finalMime = null,
                            _finalCharset = null,

                            _options = {},
                            _xhr,
                            _responseHeaders = '',
                            _responseHeadersBag
                        ;


                        Basic.extend(this, props, {
                            /**
                             Unique id of the component

                             @property uid
                             @type String
                             */
                            uid: Basic.guid('uid_'),

                            /**
                             Target for Upload events

                             @property upload
                             @type XMLHttpRequestUpload
                             */
                            upload: new XMLHttpRequestUpload(),


                            /**
                             Sets the request method, request URL, synchronous flag, request username, and request password.

                             Throws a "SyntaxError" exception if one of the following is true:

                             method is not a valid HTTP method.
                             url cannot be resolved.
                             url contains the "user:password" format in the userinfo production.
                             Throws a "SecurityError" exception if method is a case-insensitive match for CONNECT, TRACE or TRACK.

                             Throws an "InvalidAccessError" exception if one of the following is true:

                             Either user or password is passed as argument and the origin of url does not match the XMLHttpRequest origin.
                             There is an associated XMLHttpRequest document and either the timeout attribute is not zero,
                             the withCredentials attribute is true, or the responseType attribute is not the empty string.


                             @method open
                             @param {String} method HTTP method to use on request
                             @param {String} url URL to request
                             @param {Boolean} [async=true] If false request will be done in synchronous manner. Asynchronous by default.
                             @param {String} [user] Username to use in HTTP authentication process on server-side
                             @param {String} [password] Password to use in HTTP authentication process on server-side
                             */
                            open: function(method, url, async, user, password) {
                                var urlp;

                                // first two arguments are required
                                if (!method || !url) {
                                    throw new x.DOMException(x.DOMException.SYNTAX_ERR);
                                }

                                // 2 - check if any code point in method is higher than U+00FF or after deflating method it does not match the method
                                if (/[\u0100-\uffff]/.test(method) || Encode.utf8_encode(method) !== method) {
                                    throw new x.DOMException(x.DOMException.SYNTAX_ERR);
                                }

                                // 3
                                if (!!~Basic.inArray(method.toUpperCase(), ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'TRACE', 'TRACK'])) {
                                    _method = method.toUpperCase();
                                }


                                // 4 - allowing these methods poses a security risk
                                if (!!~Basic.inArray(_method, ['CONNECT', 'TRACE', 'TRACK'])) {
                                    throw new x.DOMException(x.DOMException.SECURITY_ERR);
                                }

                                // 5
                                url = Encode.utf8_encode(url);

                                // 6 - Resolve url relative to the XMLHttpRequest base URL. If the algorithm returns an error, throw a "SyntaxError".
                                urlp = Url.parseUrl(url);

                                _same_origin_flag = Url.hasSameOrigin(urlp);

                                // 7 - manually build up absolute url
                                _url = Url.resolveUrl(url);

                                // 9-10, 12-13
                                if ((user || password) && !_same_origin_flag) {
                                    throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
                                }

                                _user = user || urlp.user;
                                _password = password || urlp.pass;

                                // 11
                                _async = async || true;

                                if (_async === false && (_p('timeout') || _p('withCredentials') || _p('responseType') !== "")) {
                                    throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
                                }

                                // 14 - terminate abort()

                                // 15 - terminate send()

                                // 18
                                _sync_flag = !_async;
                                _send_flag = false;
                                _headers = {};
                                _reset.call(this);

                                // 19
                                _p('readyState', XMLHttpRequest.OPENED);

                                // 20
                                this.dispatchEvent('readystatechange');
                            },

                            /**
                             Appends an header to the list of author request headers, or if header is already
                             in the list of author request headers, combines its value with value.

                             Throws an "InvalidStateError" exception if the state is not OPENED or if the send() flag is set.
                             Throws a "SyntaxError" exception if header is not a valid HTTP header field name or if value
                             is not a valid HTTP header field value.

                             @method setRequestHeader
                             @param {String} header
                             @param {String|Number} value
                             */
                            setRequestHeader: function(header, value) {
                                var uaHeaders = [ // these headers are controlled by the user agent
                                    "accept-charset",
                                    "accept-encoding",
                                    "access-control-request-headers",
                                    "access-control-request-method",
                                    "connection",
                                    "content-length",
                                    "cookie",
                                    "cookie2",
                                    "content-transfer-encoding",
                                    "date",
                                    "expect",
                                    "host",
                                    "keep-alive",
                                    "origin",
                                    "referer",
                                    "te",
                                    "trailer",
                                    "transfer-encoding",
                                    "upgrade",
                                    "user-agent",
                                    "via"
                                ];

                                // 1-2
                                if (_p('readyState') !== XMLHttpRequest.OPENED || _send_flag) {
                                    throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                }

                                // 3
                                if (/[\u0100-\uffff]/.test(header) || Encode.utf8_encode(header) !== header) {
                                    throw new x.DOMException(x.DOMException.SYNTAX_ERR);
                                }

                                // 4
                                /* this step is seemingly bypassed in browsers, probably to allow various unicode characters in header values
                                 if (/[\u0100-\uffff]/.test(value) || Encode.utf8_encode(value) !== value) {
                                 throw new x.DOMException(x.DOMException.SYNTAX_ERR);
                                 }*/

                                header = Basic.trim(header).toLowerCase();

                                // setting of proxy-* and sec-* headers is prohibited by spec
                                if (!!~Basic.inArray(header, uaHeaders) || /^(proxy\-|sec\-)/.test(header)) {
                                    return false;
                                }

                                // camelize
                                // browsers lowercase header names (at least for custom ones)
                                // header = header.replace(/\b\w/g, function($1) { return $1.toUpperCase(); });

                                if (!_headers[header]) {
                                    _headers[header] = value;
                                } else {
                                    // http://tools.ietf.org/html/rfc2616#section-4.2 (last paragraph)
                                    _headers[header] += ', ' + value;
                                }
                                return true;
                            },

                            /**
                             * Test if the specified header is already set on this request.
                             * Returns a header value or boolean false if it's not yet set.
                             *
                             * @method hasRequestHeader
                             * @param {String} header Name of the header to test
                             * @return {Boolean|String}
                             */
                            hasRequestHeader: function(header) {
                                return header && _headers[header.toLowerCase()] || false;
                            },

                            /**
                             Returns all headers from the response, with the exception of those whose field name is Set-Cookie or Set-Cookie2.

                             @method getAllResponseHeaders
                             @return {String} reponse headers or empty string
                             */
                            getAllResponseHeaders: function() {
                                return _responseHeaders || '';
                            },

                            /**
                             Returns the header field value from the response of which the field name matches header,
                             unless the field name is Set-Cookie or Set-Cookie2.

                             @method getResponseHeader
                             @param {String} header
                             @return {String} value(s) for the specified header or null
                             */
                            getResponseHeader: function(header) {
                                header = header.toLowerCase();

                                if (_error_flag || !!~Basic.inArray(header, ['set-cookie', 'set-cookie2'])) {
                                    return null;
                                }

                                if (_responseHeaders && _responseHeaders !== '') {
                                    // if we didn't parse response headers until now, do it and keep for later
                                    if (!_responseHeadersBag) {
                                        _responseHeadersBag = {};
                                        Basic.each(_responseHeaders.split(/\r\n/), function(line) {
                                            var pair = line.split(/:\s+/);
                                            if (pair.length === 2) { // last line might be empty, omit
                                                pair[0] = Basic.trim(pair[0]); // just in case
                                                _responseHeadersBag[pair[0].toLowerCase()] = { // simply to retain header name in original form
                                                    header: pair[0],
                                                    value: Basic.trim(pair[1])
                                                };
                                            }
                                        });
                                    }
                                    if (_responseHeadersBag.hasOwnProperty(header)) {
                                        return _responseHeadersBag[header].header + ': ' + _responseHeadersBag[header].value;
                                    }
                                }
                                return null;
                            },

                            /**
                             Sets the Content-Type header for the response to mime.
                             Throws an "InvalidStateError" exception if the state is LOADING or DONE.
                             Throws a "SyntaxError" exception if mime is not a valid media type.

                             @method overrideMimeType
                             @param String mime Mime type to set
                             */
                            overrideMimeType: function(mime) {
                                var matches, charset;

                                // 1
                                if (!!~Basic.inArray(_p('readyState'), [XMLHttpRequest.LOADING, XMLHttpRequest.DONE])) {
                                    throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                }

                                // 2
                                mime = Basic.trim(mime.toLowerCase());

                                if (/;/.test(mime) && (matches = mime.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))) {
                                    mime = matches[1];
                                    if (matches[2]) {
                                        charset = matches[2];
                                    }
                                }

                                if (!Mime.mimes[mime]) {
                                    throw new x.DOMException(x.DOMException.SYNTAX_ERR);
                                }

                                // 3-4
                                _finalMime = mime;
                                _finalCharset = charset;
                            },

                            /**
                             Initiates the request. The optional argument provides the request entity body.
                             The argument is ignored if request method is GET or HEAD.

                             Throws an "InvalidStateError" exception if the state is not OPENED or if the send() flag is set.

                             @method send
                             @param {Blob|Document|String|FormData} [data] Request entity body
                             @param {Object} [options] Set of requirements and pre-requisities for runtime initialization
                             */
                            send: function(data, options) {
                                if (Basic.typeOf(options) === 'string') {
                                    _options = { ruid: options };
                                } else if (!options) {
                                    _options = {};
                                } else {
                                    _options = options;
                                }

                                // 1-2
                                if (this.readyState !== XMLHttpRequest.OPENED || _send_flag) {
                                    throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                }

                                // 3
                                // sending Blob
                                if (data instanceof Blob) {
                                    _options.ruid = data.ruid;
                                    _mimeType = data.type || 'application/octet-stream';
                                }

                                // FormData
                                else if (data instanceof FormData) {
                                    if (data.hasBlob()) {
                                        var blob = data.getBlob();
                                        _options.ruid = blob.ruid;
                                        _mimeType = blob.type || 'application/octet-stream';
                                    }
                                }

                                // DOMString
                                else if (typeof data === 'string') {
                                    _encoding = 'UTF-8';
                                    _mimeType = 'text/plain;charset=UTF-8';

                                    // data should be converted to Unicode and encoded as UTF-8
                                    data = Encode.utf8_encode(data);
                                }

                                // if withCredentials not set, but requested, set it automatically
                                if (!this.withCredentials) {
                                    this.withCredentials = (_options.required_caps && _options.required_caps.send_browser_cookies) && !_same_origin_flag;
                                }

                                // 4 - storage mutex
                                // 5
                                _upload_events_flag = (!_sync_flag && this.upload.hasEventListener()); // DSAP
                                // 6
                                _error_flag = false;
                                // 7
                                _upload_complete_flag = !data;
                                // 8 - Asynchronous steps
                                if (!_sync_flag) {
                                    // 8.1
                                    _send_flag = true;
                                    // 8.2
                                    // this.dispatchEvent('loadstart'); // will be dispatched either by native or runtime xhr
                                    // 8.3
                                    //if (!_upload_complete_flag) {
                                    // this.upload.dispatchEvent('loadstart');	// will be dispatched either by native or runtime xhr
                                    //}
                                }
                                // 8.5 - Return the send() method call, but continue running the steps in this algorithm.
                                _doXHR.call(this, data);
                            },

                            /**
                             Cancels any network activity.

                             @method abort
                             */
                            abort: function() {
                                _error_flag = true;
                                _sync_flag = false;

                                if (!~Basic.inArray(_p('readyState'), [XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED, XMLHttpRequest.DONE])) {
                                    _p('readyState', XMLHttpRequest.DONE);
                                    _send_flag = false;

                                    if (_xhr) {
                                        _xhr.getRuntime().exec.call(_xhr, 'XMLHttpRequest', 'abort', _upload_complete_flag);
                                    } else {
                                        throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                    }

                                    _upload_complete_flag = true;
                                } else {
                                    _p('readyState', XMLHttpRequest.UNSENT);
                                }
                            },

                            destroy: function() {
                                if (_xhr) {
                                    if (Basic.typeOf(_xhr.destroy) === 'function') {
                                        _xhr.destroy();
                                    }
                                    _xhr = null;
                                }

                                this.unbindAll();

                                if (this.upload) {
                                    this.upload.unbindAll();
                                    this.upload = null;
                                }
                            }
                        });

                        this.handleEventProps(dispatches.concat(['readystatechange'])); // for historical reasons
                        this.upload.handleEventProps(dispatches);

                        /* this is nice, but maybe too lengthy

                         // if supported by JS version, set getters/setters for specific properties
                         o.defineProperty(this, 'readyState', {
                         configurable: false,

                         get: function() {
                         return _p('readyState');
                         }
                         });

                         o.defineProperty(this, 'timeout', {
                         configurable: false,

                         get: function() {
                         return _p('timeout');
                         },

                         set: function(value) {

                         if (_sync_flag) {
                         throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
                         }

                         // timeout still should be measured relative to the start time of request
                         _timeoutset_time = (new Date).getTime();

                         _p('timeout', value);
                         }
                         });

                         // the withCredentials attribute has no effect when fetching same-origin resources
                         o.defineProperty(this, 'withCredentials', {
                         configurable: false,

                         get: function() {
                         return _p('withCredentials');
                         },

                         set: function(value) {
                         // 1-2
                         if (!~o.inArray(_p('readyState'), [XMLHttpRequest.UNSENT, XMLHttpRequest.OPENED]) || _send_flag) {
                         throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                         }

                         // 3-4
                         if (_anonymous_flag || _sync_flag) {
                         throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
                         }

                         // 5
                         _p('withCredentials', value);
                         }
                         });

                         o.defineProperty(this, 'status', {
                         configurable: false,

                         get: function() {
                         return _p('status');
                         }
                         });

                         o.defineProperty(this, 'statusText', {
                         configurable: false,

                         get: function() {
                         return _p('statusText');
                         }
                         });

                         o.defineProperty(this, 'responseType', {
                         configurable: false,

                         get: function() {
                         return _p('responseType');
                         },

                         set: function(value) {
                         // 1
                         if (!!~o.inArray(_p('readyState'), [XMLHttpRequest.LOADING, XMLHttpRequest.DONE])) {
                         throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                         }

                         // 2
                         if (_sync_flag) {
                         throw new x.DOMException(x.DOMException.INVALID_ACCESS_ERR);
                         }

                         // 3
                         _p('responseType', value.toLowerCase());
                         }
                         });

                         o.defineProperty(this, 'responseText', {
                         configurable: false,

                         get: function() {
                         // 1
                         if (!~o.inArray(_p('responseType'), ['', 'text'])) {
                         throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                         }

                         // 2-3
                         if (_p('readyState') !== XMLHttpRequest.DONE && _p('readyState') !== XMLHttpRequest.LOADING || _error_flag) {
                         throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                         }

                         return _p('responseText');
                         }
                         });

                         o.defineProperty(this, 'responseXML', {
                         configurable: false,

                         get: function() {
                         // 1
                         if (!~o.inArray(_p('responseType'), ['', 'document'])) {
                         throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                         }

                         // 2-3
                         if (_p('readyState') !== XMLHttpRequest.DONE || _error_flag) {
                         throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                         }

                         return _p('responseXML');
                         }
                         });

                         o.defineProperty(this, 'response', {
                         configurable: false,

                         get: function() {
                         if (!!~o.inArray(_p('responseType'), ['', 'text'])) {
                         if (_p('readyState') !== XMLHttpRequest.DONE && _p('readyState') !== XMLHttpRequest.LOADING || _error_flag) {
                         return '';
                         }
                         }

                         if (_p('readyState') !== XMLHttpRequest.DONE || _error_flag) {
                         return null;
                         }

                         return _p('response');
                         }
                         });

                         */

                        function _p(prop, value) {
                            if (!props.hasOwnProperty(prop)) {
                                return;
                            }
                            if (arguments.length === 1) { // get
                                return Env.can('define_property') ? props[prop] : self[prop];
                            } else { // set
                                if (Env.can('define_property')) {
                                    props[prop] = value;
                                } else {
                                    self[prop] = value;
                                }
                            }
                        }

                        /*
                         function _toASCII(str, AllowUnassigned, UseSTD3ASCIIRules) {
                         // TODO: http://tools.ietf.org/html/rfc3490#section-4.1
                         return str.toLowerCase();
                         }
                         */


                        function _doXHR(data) {
                            var self = this;

                            _start_time = new Date().getTime();

                            _xhr = new RuntimeTarget();

                            function loadEnd() {
                                if (_xhr) { // it could have been destroyed by now
                                    _xhr.destroy();
                                    _xhr = null;
                                }
                                self.dispatchEvent('loadend');
                                self = null;
                            }

                            function exec(runtime) {
                                _xhr.bind('LoadStart', function(e) {
                                    _p('readyState', XMLHttpRequest.LOADING);
                                    self.dispatchEvent('readystatechange');

                                    self.dispatchEvent(e);

                                    if (_upload_events_flag) {
                                        self.upload.dispatchEvent(e);
                                    }
                                });

                                _xhr.bind('Progress', function(e) {
                                    if (_p('readyState') !== XMLHttpRequest.LOADING) {
                                        _p('readyState', XMLHttpRequest.LOADING); // LoadStart unreliable (in Flash for example)
                                        self.dispatchEvent('readystatechange');
                                    }
                                    self.dispatchEvent(e);
                                });

                                _xhr.bind('UploadProgress', function(e) {
                                    if (_upload_events_flag) {
                                        self.upload.dispatchEvent({
                                            type: 'progress',
                                            lengthComputable: false,
                                            total: e.total,
                                            loaded: e.loaded
                                        });
                                    }
                                });

                                _xhr.bind('Load', function(e) {
                                    _p('readyState', XMLHttpRequest.DONE);
                                    _p('status', Number(runtime.exec.call(_xhr, 'XMLHttpRequest', 'getStatus') || 0));
                                    _p('statusText', httpCode[_p('status')] || "");

                                    _p('response', runtime.exec.call(_xhr, 'XMLHttpRequest', 'getResponse', _p('responseType')));

                                    if (!!~Basic.inArray(_p('responseType'), ['text', ''])) {
                                        _p('responseText', _p('response'));
                                    } else if (_p('responseType') === 'document') {
                                        _p('responseXML', _p('response'));
                                    }

                                    _responseHeaders = runtime.exec.call(_xhr, 'XMLHttpRequest', 'getAllResponseHeaders');

                                    self.dispatchEvent('readystatechange');

                                    if (_p('status') > 0) { // status 0 usually means that server is unreachable
                                        if (_upload_events_flag) {
                                            self.upload.dispatchEvent(e);
                                        }
                                        self.dispatchEvent(e);
                                    } else {
                                        _error_flag = true;
                                        self.dispatchEvent('error');
                                    }
                                    loadEnd();
                                });

                                _xhr.bind('Abort', function(e) {
                                    self.dispatchEvent(e);
                                    loadEnd();
                                });

                                _xhr.bind('Error', function(e) {
                                    _error_flag = true;
                                    _p('readyState', XMLHttpRequest.DONE);
                                    self.dispatchEvent('readystatechange');
                                    _upload_complete_flag = true;
                                    self.dispatchEvent(e);
                                    loadEnd();
                                });

                                runtime.exec.call(_xhr, 'XMLHttpRequest', 'send', {
                                    url: _url,
                                    method: _method,
                                    async: _async,
                                    user: _user,
                                    password: _password,
                                    headers: _headers,
                                    mimeType: _mimeType,
                                    encoding: _encoding,
                                    responseType: self.responseType,
                                    withCredentials: self.withCredentials,
                                    options: _options
                                }, data);
                            }

                            // clarify our requirements
                            if (typeof(_options.required_caps) === 'string') {
                                _options.required_caps = Runtime.parseCaps(_options.required_caps);
                            }

                            _options.required_caps = Basic.extend({}, _options.required_caps, {
                                return_response_type: self.responseType
                            });

                            if (data instanceof FormData) {
                                _options.required_caps.send_multipart = true;
                            }

                            if (!Basic.isEmptyObj(_headers)) {
                                _options.required_caps.send_custom_headers = true;
                            }

                            if (!_same_origin_flag) {
                                _options.required_caps.do_cors = true;
                            }


                            if (_options.ruid) { // we do not need to wait if we can connect directly
                                exec(_xhr.connectRuntime(_options));
                            } else {
                                _xhr.bind('RuntimeInit', function(e, runtime) {
                                    exec(runtime);
                                });
                                _xhr.bind('RuntimeError', function(e, err) {
                                    self.dispatchEvent('RuntimeError', err);
                                });
                                _xhr.connectRuntime(_options);
                            }
                        }


                        function _reset() {
                            _p('responseText', "");
                            _p('responseXML', null);
                            _p('response', null);
                            _p('status', 0);
                            _p('statusText', "");
                            _start_time = _timeoutset_time = null;
                        }
                    }

                    XMLHttpRequest.UNSENT = 0;
                    XMLHttpRequest.OPENED = 1;
                    XMLHttpRequest.HEADERS_RECEIVED = 2;
                    XMLHttpRequest.LOADING = 3;
                    XMLHttpRequest.DONE = 4;

                    XMLHttpRequest.prototype = EventTarget.instance;

                    return XMLHttpRequest;
                });

// Included from: src/javascript/runtime/Transporter.js

                /**
                 * Transporter.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/runtime/Transporter", [
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Encode",
                    "moxie/runtime/RuntimeClient",
                    "moxie/core/EventTarget"
                ], function(Basic, Encode, RuntimeClient, EventTarget) {

                    /**
                     @class moxie/runtime/Transporter
                     @constructor
                     */
                    function Transporter() {
                        var mod, _runtime, _data, _size, _pos, _chunk_size;

                        RuntimeClient.call(this);

                        Basic.extend(this, {
                            uid: Basic.guid('uid_'),

                            state: Transporter.IDLE,

                            result: null,

                            transport: function(data, type, options) {
                                var self = this;

                                options = Basic.extend({
                                    chunk_size: 204798
                                }, options);

                                // should divide by three, base64 requires this
                                if ((mod = options.chunk_size % 3)) {
                                    options.chunk_size += 3 - mod;
                                }

                                _chunk_size = options.chunk_size;

                                _reset.call(this);
                                _data = data;
                                _size = data.length;

                                if (Basic.typeOf(options) === 'string' || options.ruid) {
                                    _run.call(self, type, this.connectRuntime(options));
                                } else {
                                    // we require this to run only once
                                    var cb = function(e, runtime) {
                                        self.unbind("RuntimeInit", cb);
                                        _run.call(self, type, runtime);
                                    };
                                    this.bind("RuntimeInit", cb);
                                    this.connectRuntime(options);
                                }
                            },

                            abort: function() {
                                var self = this;

                                self.state = Transporter.IDLE;
                                if (_runtime) {
                                    _runtime.exec.call(self, 'Transporter', 'clear');
                                    self.trigger("TransportingAborted");
                                }

                                _reset.call(self);
                            },


                            destroy: function() {
                                this.unbindAll();
                                _runtime = null;
                                this.disconnectRuntime();
                                _reset.call(this);
                            }
                        });

                        function _reset() {
                            _size = _pos = 0;
                            _data = this.result = null;
                        }

                        function _run(type, runtime) {
                            var self = this;

                            _runtime = runtime;

                            //self.unbind("RuntimeInit");

                            self.bind("TransportingProgress", function(e) {
                                _pos = e.loaded;

                                if (_pos < _size && Basic.inArray(self.state, [Transporter.IDLE, Transporter.DONE]) === -1) {
                                    _transport.call(self);
                                }
                            }, 999);

                            self.bind("TransportingComplete", function() {
                                _pos = _size;
                                self.state = Transporter.DONE;
                                _data = null; // clean a bit
                                self.result = _runtime.exec.call(self, 'Transporter', 'getAsBlob', type || '');
                            }, 999);

                            self.state = Transporter.BUSY;
                            self.trigger("TransportingStarted");
                            _transport.call(self);
                        }

                        function _transport() {
                            var self = this,
                                chunk,
                                bytesLeft = _size - _pos;

                            if (_chunk_size > bytesLeft) {
                                _chunk_size = bytesLeft;
                            }

                            chunk = Encode.btoa(_data.substr(_pos, _chunk_size));
                            _runtime.exec.call(self, 'Transporter', 'receive', chunk, _size);
                        }
                    }

                    Transporter.IDLE = 0;
                    Transporter.BUSY = 1;
                    Transporter.DONE = 2;

                    Transporter.prototype = EventTarget.instance;

                    return Transporter;
                });

// Included from: src/javascript/image/Image.js

                /**
                 * Image.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define("moxie/image/Image", [
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Dom",
                    "moxie/core/Exceptions",
                    "moxie/file/FileReaderSync",
                    "moxie/xhr/XMLHttpRequest",
                    "moxie/runtime/Runtime",
                    "moxie/runtime/RuntimeClient",
                    "moxie/runtime/Transporter",
                    "moxie/core/utils/Env",
                    "moxie/core/EventTarget",
                    "moxie/file/Blob",
                    "moxie/file/File",
                    "moxie/core/utils/Encode"
                ], function(Basic, Dom, x, FileReaderSync, XMLHttpRequest, Runtime, RuntimeClient, Transporter, Env, EventTarget, Blob, File, Encode) {
                    /**
                     Image preloading and manipulation utility. Additionally it provides access to image meta info (Exif, GPS) and raw binary data.

                     @class moxie/image/Image
                     @constructor
                     @extends EventTarget
                     */
                    var dispatches = [
                        'progress',

                        /**
                         Dispatched when loading is complete.

                         @event load
                         @param {Object} event
                         */
                        'load',

                        'error',

                        /**
                         Dispatched when resize operation is complete.

                         @event resize
                         @param {Object} event
                         */
                        'resize',

                        /**
                         Dispatched when visual representation of the image is successfully embedded
                         into the corresponsing container.

                         @event embedded
                         @param {Object} event
                         */
                        'embedded'
                    ];

                    function Image() {

                        RuntimeClient.call(this);

                        Basic.extend(this, {
                            /**
                             Unique id of the component

                             @property uid
                             @type {String}
                             */
                            uid: Basic.guid('uid_'),

                            /**
                             Unique id of the connected runtime, if any.

                             @property ruid
                             @type {String}
                             */
                            ruid: null,

                            /**
                             Name of the file, that was used to create an image, if available. If not equals to empty string.

                             @property name
                             @type {String}
                             @default ""
                             */
                            name: "",

                            /**
                             Size of the image in bytes. Actual value is set only after image is preloaded.

                             @property size
                             @type {Number}
                             @default 0
                             */
                            size: 0,

                            /**
                             Width of the image. Actual value is set only after image is preloaded.

                             @property width
                             @type {Number}
                             @default 0
                             */
                            width: 0,

                            /**
                             Height of the image. Actual value is set only after image is preloaded.

                             @property height
                             @type {Number}
                             @default 0
                             */
                            height: 0,

                            /**
                             Mime type of the image. Currently only image/jpeg and image/png are supported. Actual value is set only after image is preloaded.

                             @property type
                             @type {String}
                             @default ""
                             */
                            type: "",

                            /**
                             Holds meta info (Exif, GPS). Is populated only for image/jpeg. Actual value is set only after image is preloaded.

                             @property meta
                             @type {Object}
                             @default {}
                             */
                            meta: {},

                            /**
                             Alias for load method, that takes another mOxie.Image object as a source (see load).

                             @method clone
                             @param {Image} src Source for the image
                             @param {Boolean} [exact=false] Whether to activate in-depth clone mode
                             */
                            clone: function() {
                                this.load.apply(this, arguments);
                            },

                            /**
                             Loads image from various sources. Currently the source for new image can be: mOxie.Image, mOxie.Blob/mOxie.File,
                             native Blob/File, dataUrl or URL. Depending on the type of the source, arguments - differ. When source is URL,
                             Image will be downloaded from remote destination and loaded in memory.

                             @example
                             var img = new mOxie.Image();
                             img.onload = function() {
					var blob = img.getAsBlob();

					var formData = new mOxie.FormData();
					formData.append('file', blob);

					var xhr = new mOxie.XMLHttpRequest();
					xhr.onload = function() {
						// upload complete
					};
					xhr.open('post', 'upload.php');
					xhr.send(formData);
				};
                             img.load("http://www.moxiecode.com/images/mox-logo.jpg"); // notice file extension (.jpg)


                             @method load
                             @param {Image|Blob|File|String} src Source for the image
                             @param {Boolean|Object} [mixed]
                             */
                            load: function() {
                                _load.apply(this, arguments);
                            },


                            /**
                             Resizes the image to fit the specified width/height. If crop is specified, image will also be
                             cropped to the exact dimensions.

                             @method resize
                             @since 3.0
                             @param {Object} options
                             @param {Number} options.width Resulting width
                             @param {Number} [options.height=width] Resulting height (optional, if not supplied will default to width)
                             @param {String} [options.type='image/jpeg'] MIME type of the resulting image
                             @param {Number} [options.quality=90] In the case of JPEG, controls the quality of resulting image
                             @param {Boolean} [options.crop='cc'] If not falsy, image will be cropped, by default from center
                             @param {Boolean} [options.fit=true] In case of crop whether to upscale the image to fit the exact dimensions
                             @param {Boolean} [options.preserveHeaders=true] Whether to preserve meta headers (on JPEGs after resize)
                             @param {String} [options.resample='default'] Resampling algorithm to use during resize
                             @param {Boolean} [options.multipass=true] Whether to scale the image in steps (results in better quality)
                             */
                            resize: function(options) {
                                var self = this;
                                var orientation;
                                var scale;

                                var srcRect = {
                                    x: 0,
                                    y: 0,
                                    width: self.width,
                                    height: self.height
                                };

                                var opts = Basic.extendIf({
                                    width: self.width,
                                    height: self.height,
                                    type: self.type || 'image/jpeg',
                                    quality: 90,
                                    crop: false,
                                    fit: true,
                                    preserveHeaders: true,
                                    resample: 'default',
                                    multipass: true
                                }, options);

                                try {
                                    if (!self.size) { // only preloaded image objects can be used as source
                                        throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                    }

                                    // no way to reliably intercept the crash due to high resolution, so we simply avoid it
                                    if (self.width > Image.MAX_RESIZE_WIDTH || self.height > Image.MAX_RESIZE_HEIGHT) {
                                        throw new x.ImageError(x.ImageError.MAX_RESOLUTION_ERR);
                                    }

                                    // take into account orientation tag
                                    orientation = (self.meta && self.meta.tiff && self.meta.tiff.Orientation) || 1;

                                    if (Basic.inArray(orientation, [5,6,7,8]) !== -1) { // values that require 90 degree rotation
                                        var tmp = opts.width;
                                        opts.width = opts.height;
                                        opts.height = tmp;
                                    }

                                    if (opts.crop) {
                                        scale = Math.max(opts.width/self.width, opts.height/self.height);

                                        if (options.fit) {
                                            // first scale it up or down to fit the original image
                                            srcRect.width = Math.min(Math.ceil(opts.width/scale), self.width);
                                            srcRect.height = Math.min(Math.ceil(opts.height/scale), self.height);

                                            // recalculate the scale for adapted dimensions
                                            scale = opts.width/srcRect.width;
                                        } else {
                                            srcRect.width = Math.min(opts.width, self.width);
                                            srcRect.height = Math.min(opts.height, self.height);

                                            // now we do not need to scale it any further
                                            scale = 1;
                                        }

                                        if (typeof(opts.crop) === 'boolean') {
                                            opts.crop = 'cc';
                                        }

                                        switch (opts.crop.toLowerCase().replace(/_/, '-')) {
                                            case 'rb':
                                            case 'right-bottom':
                                                srcRect.x = self.width - srcRect.width;
                                                srcRect.y = self.height - srcRect.height;
                                                break;

                                            case 'cb':
                                            case 'center-bottom':
                                                srcRect.x = Math.floor((self.width - srcRect.width) / 2);
                                                srcRect.y = self.height - srcRect.height;
                                                break;

                                            case 'lb':
                                            case 'left-bottom':
                                                srcRect.x = 0;
                                                srcRect.y = self.height - srcRect.height;
                                                break;

                                            case 'lt':
                                            case 'left-top':
                                                srcRect.x = 0;
                                                srcRect.y = 0;
                                                break;

                                            case 'ct':
                                            case 'center-top':
                                                srcRect.x = Math.floor((self.width - srcRect.width) / 2);
                                                srcRect.y = 0;
                                                break;

                                            case 'rt':
                                            case 'right-top':
                                                srcRect.x = self.width - srcRect.width;
                                                srcRect.y = 0;
                                                break;

                                            case 'rc':
                                            case 'right-center':
                                            case 'right-middle':
                                                srcRect.x = self.width - srcRect.width;
                                                srcRect.y = Math.floor((self.height - srcRect.height) / 2);
                                                break;


                                            case 'lc':
                                            case 'left-center':
                                            case 'left-middle':
                                                srcRect.x = 0;
                                                srcRect.y = Math.floor((self.height - srcRect.height) / 2);
                                                break;

                                            case 'cc':
                                            case 'center-center':
                                            case 'center-middle':
                                            default:
                                                srcRect.x = Math.floor((self.width - srcRect.width) / 2);
                                                srcRect.y = Math.floor((self.height - srcRect.height) / 2);
                                        }

                                        // original image might be smaller than requested crop, so - avoid negative values
                                        srcRect.x = Math.max(srcRect.x, 0);
                                        srcRect.y = Math.max(srcRect.y, 0);
                                    } else {
                                        scale = Math.min(opts.width/self.width, opts.height/self.height);
                                    }

                                    this.exec('Image', 'resize', srcRect, scale, opts);
                                } catch(ex) {
                                    // for now simply trigger error event
                                    self.trigger('error', ex.code);
                                }
                            },

                            /**
                             Downsizes the image to fit the specified width/height. If crop is supplied, image will be cropped to exact dimensions.

                             @method downsize
                             @deprecated use resize()
                             */
                            downsize: function(options) {
                                var defaults = {
                                    width: this.width,
                                    height: this.height,
                                    type: this.type || 'image/jpeg',
                                    quality: 90,
                                    crop: false,
                                    preserveHeaders: true,
                                    resample: 'default'
                                }, opts;

                                if (typeof(options) === 'object') {
                                    opts = Basic.extend(defaults, options);
                                } else {
                                    // for backward compatibility
                                    opts = Basic.extend(defaults, {
                                        width: arguments[0],
                                        height: arguments[1],
                                        crop: arguments[2],
                                        preserveHeaders: arguments[3]
                                    });
                                }

                                this.resize(opts);
                            },

                            /**
                             Alias for downsize(width, height, true). (see downsize)

                             @method crop
                             @param {Number} width Resulting width
                             @param {Number} [height=width] Resulting height (optional, if not supplied will default to width)
                             @param {Boolean} [preserveHeaders=true] Whether to preserve meta headers (on JPEGs after resize)
                             */
                            crop: function(width, height, preserveHeaders) {
                                this.downsize(width, height, true, preserveHeaders);
                            },

                            getAsCanvas: function() {
                                if (!Env.can('create_canvas')) {
                                    throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
                                }
                                return this.exec('Image', 'getAsCanvas');
                            },

                            /**
                             Retrieves image in it's current state as mOxie.Blob object. Cannot be run on empty or image in progress (throws
                             DOMException.INVALID_STATE_ERR).

                             @method getAsBlob
                             @param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
                             @param {Number} [quality=90] Applicable only together with mime type image/jpeg
                             @return {Blob} Image as Blob
                             */
                            getAsBlob: function(type, quality) {
                                if (!this.size) {
                                    throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                }
                                return this.exec('Image', 'getAsBlob', type || 'image/jpeg', quality || 90);
                            },

                            /**
                             Retrieves image in it's current state as dataURL string. Cannot be run on empty or image in progress (throws
                             DOMException.INVALID_STATE_ERR).

                             @method getAsDataURL
                             @param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
                             @param {Number} [quality=90] Applicable only together with mime type image/jpeg
                             @return {String} Image as dataURL string
                             */
                            getAsDataURL: function(type, quality) {
                                if (!this.size) {
                                    throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                }
                                return this.exec('Image', 'getAsDataURL', type || 'image/jpeg', quality || 90);
                            },

                            /**
                             Retrieves image in it's current state as binary string. Cannot be run on empty or image in progress (throws
                             DOMException.INVALID_STATE_ERR).

                             @method getAsBinaryString
                             @param {String} [type="image/jpeg"] Mime type of resulting blob. Can either be image/jpeg or image/png
                             @param {Number} [quality=90] Applicable only together with mime type image/jpeg
                             @return {String} Image as binary string
                             */
                            getAsBinaryString: function(type, quality) {
                                var dataUrl = this.getAsDataURL(type, quality);
                                return Encode.atob(dataUrl.substring(dataUrl.indexOf('base64,') + 7));
                            },

                            /**
                             Embeds a visual representation of the image into the specified node. Depending on the runtime,
                             it might be a canvas, an img node or a thrid party shim object (Flash or SilverLight - very rare,
                             can be used in legacy browsers that do not have canvas or proper dataURI support).

                             @method embed
                             @param {DOMElement} el DOM element to insert the image object into
                             @param {Object} [options]
                             @param {Number} [options.width] The width of an embed (defaults to the image width)
                             @param {Number} [options.height] The height of an embed (defaults to the image height)
                             @param {String} [options.type="image/jpeg"] Mime type
                             @param {Number} [options.quality=90] Quality of an embed, if mime type is image/jpeg
                             @param {Boolean} [options.crop=false] Whether to crop an embed to the specified dimensions
                             */
                            embed: function(el, options) {
                                var self = this
                                    , runtime // this has to be outside of all the closures to contain proper runtime
                                ;

                                var opts = Basic.extend({
                                    width: this.width,
                                    height: this.height,
                                    type: this.type || 'image/jpeg',
                                    quality: 90
                                }, options);


                                function render(type, quality) {
                                    var img = this;

                                    // if possible, embed a canvas element directly
                                    if (Env.can('create_canvas')) {
                                        var canvas = img.getAsCanvas();
                                        if (canvas) {
                                            el.appendChild(canvas);
                                            canvas = null;
                                            img.destroy();
                                            self.trigger('embedded');
                                            return;
                                        }
                                    }

                                    var dataUrl = img.getAsDataURL(type, quality);
                                    if (!dataUrl) {
                                        throw new x.ImageError(x.ImageError.WRONG_FORMAT);
                                    }

                                    if (Env.can('use_data_uri_of', dataUrl.length)) {
                                        el.innerHTML = '<img src="' + dataUrl + '" width="' + img.width + '" height="' + img.height + '" />';
                                        img.destroy();
                                        self.trigger('embedded');
                                    } else {
                                        var tr = new Transporter();

                                        tr.bind("TransportingComplete", function() {
                                            runtime = self.connectRuntime(this.result.ruid);

                                            self.bind("Embedded", function() {
                                                // position and size properly
                                                Basic.extend(runtime.getShimContainer().style, {
                                                    //position: 'relative',
                                                    top: '0px',
                                                    left: '0px',
                                                    width: img.width + 'px',
                                                    height: img.height + 'px'
                                                });

                                                // some shims (Flash/SilverLight) reinitialize, if parent element is hidden, reordered or it's
                                                // position type changes (in Gecko), but since we basically need this only in IEs 6/7 and
                                                // sometimes 8 and they do not have this problem, we can comment this for now
                                                /*tr.bind("RuntimeInit", function(e, runtime) {
                                                 tr.destroy();
                                                 runtime.destroy();
                                                 onResize.call(self); // re-feed our image data
                                                 });*/

                                                runtime = null; // release
                                            }, 999);

                                            runtime.exec.call(self, "ImageView", "display", this.result.uid, width, height);
                                            img.destroy();
                                        });

                                        tr.transport(Encode.atob(dataUrl.substring(dataUrl.indexOf('base64,') + 7)), type, {
                                            required_caps: {
                                                display_media: true
                                            },
                                            runtime_order: 'flash,silverlight',
                                            container: el
                                        });
                                    }
                                }

                                try {
                                    if (!(el = Dom.get(el))) {
                                        throw new x.DOMException(x.DOMException.INVALID_NODE_TYPE_ERR);
                                    }

                                    if (!this.size) { // only preloaded image objects can be used as source
                                        throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                    }

                                    // high-resolution images cannot be consistently handled across the runtimes
                                    if (this.width > Image.MAX_RESIZE_WIDTH || this.height > Image.MAX_RESIZE_HEIGHT) {
                                        //throw new x.ImageError(x.ImageError.MAX_RESOLUTION_ERR);
                                    }

                                    var imgCopy = new Image();

                                    imgCopy.bind("Resize", function() {
                                        render.call(this, opts.type, opts.quality);
                                    });

                                    imgCopy.bind("Load", function() {
                                        this.downsize(opts);
                                    });

                                    // if embedded thumb data is available and dimensions are big enough, use it
                                    if (this.meta.thumb && this.meta.thumb.width >= opts.width && this.meta.thumb.height >= opts.height) {
                                        imgCopy.load(this.meta.thumb.data);
                                    } else {
                                        imgCopy.clone(this, false);
                                    }

                                    return imgCopy;
                                } catch(ex) {
                                    // for now simply trigger error event
                                    this.trigger('error', ex.code);
                                }
                            },

                            /**
                             Properly destroys the image and frees resources in use. If any. Recommended way to dispose mOxie.Image object.

                             @method destroy
                             */
                            destroy: function() {
                                if (this.ruid) {
                                    this.getRuntime().exec.call(this, 'Image', 'destroy');
                                    this.disconnectRuntime();
                                }
                                if (this.meta && this.meta.thumb) {
                                    // thumb is blob, make sure we destroy it first
                                    this.meta.thumb.data.destroy();
                                }
                                this.unbindAll();
                            }
                        });


                        // this is here, because in order to bind properly, we need uid, which is created above
                        this.handleEventProps(dispatches);

                        this.bind('Load Resize', function() {
                            return _updateInfo.call(this); // if operation fails (e.g. image is neither PNG nor JPEG) cancel all pending events
                        }, 999);


                        function _updateInfo(info) {
                            try {
                                if (!info) {
                                    info = this.exec('Image', 'getInfo');
                                }

                                this.size = info.size;
                                this.width = info.width;
                                this.height = info.height;
                                this.type = info.type;
                                this.meta = info.meta;

                                // update file name, only if empty
                                if (this.name === '') {
                                    this.name = info.name;
                                }

                                return true;
                            } catch(ex) {
                                this.trigger('error', ex.code);
                                return false;
                            }
                        }


                        function _load(src) {
                            var srcType = Basic.typeOf(src);

                            try {
                                // if source is Image
                                if (src instanceof Image) {
                                    if (!src.size) { // only preloaded image objects can be used as source
                                        throw new x.DOMException(x.DOMException.INVALID_STATE_ERR);
                                    }
                                    _loadFromImage.apply(this, arguments);
                                }
                                // if source is o.Blob/o.File
                                else if (src instanceof Blob) {
                                    if (!~Basic.inArray(src.type, ['image/jpeg', 'image/png'])) {
                                        throw new x.ImageError(x.ImageError.WRONG_FORMAT);
                                    }
                                    _loadFromBlob.apply(this, arguments);
                                }
                                // if native blob/file
                                else if (Basic.inArray(srcType, ['blob', 'file']) !== -1) {
                                    _load.call(this, new File(null, src), arguments[1]);
                                }
                                // if String
                                else if (srcType === 'string') {
                                    // if dataUrl String
                                    if (src.substr(0, 5) === 'data:') {
                                        _load.call(this, new Blob(null, { data: src }), arguments[1]);
                                    }
                                    // else assume Url, either relative or absolute
                                    else {
                                        _loadFromUrl.apply(this, arguments);
                                    }
                                }
                                // if source seems to be an img node
                                else if (srcType === 'node' && src.nodeName.toLowerCase() === 'img') {
                                    _load.call(this, src.src, arguments[1]);
                                }
                                else {
                                    throw new x.DOMException(x.DOMException.TYPE_MISMATCH_ERR);
                                }
                            } catch(ex) {
                                // for now simply trigger error event
                                this.trigger('error', ex.code);
                            }
                        }


                        function _loadFromImage(img, exact) {
                            var runtime = this.connectRuntime(img.ruid);
                            this.ruid = runtime.uid;
                            runtime.exec.call(this, 'Image', 'loadFromImage', img, (Basic.typeOf(exact) === 'undefined' ? true : exact));
                        }


                        function _loadFromBlob(blob, options) {
                            var self = this;

                            self.name = blob.name || '';

                            function exec(runtime) {
                                self.ruid = runtime.uid;
                                runtime.exec.call(self, 'Image', 'loadFromBlob', blob);
                            }

                            if (blob.isDetached()) {
                                this.bind('RuntimeInit', function(e, runtime) {
                                    exec(runtime);
                                });

                                // convert to object representation
                                if (options && typeof(options.required_caps) === 'string') {
                                    options.required_caps = Runtime.parseCaps(options.required_caps);
                                }

                                this.connectRuntime(Basic.extend({
                                    required_caps: {
                                        access_image_binary: true,
                                        resize_image: true
                                    }
                                }, options));
                            } else {
                                exec(this.connectRuntime(blob.ruid));
                            }
                        }


                        function _loadFromUrl(url, options) {
                            var self = this, xhr;

                            xhr = new XMLHttpRequest();

                            xhr.open('get', url);
                            xhr.responseType = 'blob';

                            xhr.onprogress = function(e) {
                                self.trigger(e);
                            };

                            xhr.onload = function() {
                                _loadFromBlob.call(self, xhr.response, true);
                            };

                            xhr.onerror = function(e) {
                                self.trigger(e);
                            };

                            xhr.onloadend = function() {
                                xhr.destroy();
                            };

                            xhr.bind('RuntimeError', function(e, err) {
                                self.trigger('RuntimeError', err);
                            });

                            xhr.send(null, options);
                        }
                    }

                    // virtual world will crash on you if image has a resolution higher than this:
                    Image.MAX_RESIZE_WIDTH = 8192;
                    Image.MAX_RESIZE_HEIGHT = 8192;

                    Image.prototype = EventTarget.instance;

                    return Image;
                });

// Included from: src/javascript/runtime/html5/Runtime.js

                /**
                 * Runtime.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /*global File:true */

                /**
                 Defines constructor for HTML5 runtime.

                 @class moxie/runtime/html5/Runtime
                 @private
                 */
                define("moxie/runtime/html5/Runtime", [
                    "moxie/core/utils/Basic",
                    "moxie/core/Exceptions",
                    "moxie/runtime/Runtime",
                    "moxie/core/utils/Env"
                ], function(Basic, x, Runtime, Env) {

                    var type = "html5", extensions = {};

                    function Html5Runtime(options) {
                        var I = this
                            , Test = Runtime.capTest
                            , True = Runtime.capTrue
                        ;

                        var caps = Basic.extend({
                                access_binary: Test(window.FileReader || window.File && window.File.getAsDataURL),
                                access_image_binary: function() {
                                    return I.can('access_binary') && !!extensions.Image;
                                },
                                display_media: Test(
                                    (Env.can('create_canvas') || Env.can('use_data_uri_over32kb')) &&
                                    defined('moxie/image/Image')
                                ),
                                do_cors: Test(window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()),
                                drag_and_drop: Test(function() {
                                    // this comes directly from Modernizr: http://www.modernizr.com/
                                    var div = document.createElement('div');
                                    // IE has support for drag and drop since version 5, but doesn't support dropping files from desktop
                                    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) &&
                                        (Env.browser !== 'IE' || Env.verComp(Env.version, 9, '>'));
                                }()),
                                filter_by_extension: Test(function() { // if you know how to feature-detect this, please suggest
                                    return !(
                                        (Env.browser === 'Chrome' && Env.verComp(Env.version, 28, '<')) ||
                                        (Env.browser === 'IE' && Env.verComp(Env.version, 10, '<')) ||
                                        (Env.browser === 'Safari' && Env.verComp(Env.version, 7, '<')) ||
                                        (Env.browser === 'Firefox' && Env.verComp(Env.version, 37, '<'))
                                    );
                                }()),
                                return_response_headers: True,
                                return_response_type: function(responseType) {
                                    if (responseType === 'json' && !!window.JSON) { // we can fake this one even if it's not supported
                                        return true;
                                    }
                                    return Env.can('return_response_type', responseType);
                                },
                                return_status_code: True,
                                report_upload_progress: Test(window.XMLHttpRequest && new XMLHttpRequest().upload),
                                resize_image: function() {
                                    return I.can('access_binary') && Env.can('create_canvas');
                                },
                                select_file: function() {
                                    return Env.can('use_fileinput') && window.File;
                                },
                                select_folder: function() {
                                    return I.can('select_file') && (
                                            Env.browser === 'Chrome' && Env.verComp(Env.version, 21, '>=') ||
                                            Env.browser === 'Firefox' && Env.verComp(Env.version, 42, '>=') // https://developer.mozilla.org/en-US/Firefox/Releases/42
                                        );
                                },
                                select_multiple: function() {
                                    // it is buggy on Safari Windows and iOS
                                    return I.can('select_file') &&
                                        !(Env.browser === 'Safari' && Env.os === 'Windows') &&
                                        !(Env.os === 'iOS' && Env.verComp(Env.osVersion, "7.0.0", '>') && Env.verComp(Env.osVersion, "8.0.0", '<'));
                                },
                                send_binary_string: Test(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || (window.Uint8Array && window.ArrayBuffer))),
                                send_custom_headers: Test(window.XMLHttpRequest),
                                send_multipart: function() {
                                    return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || I.can('send_binary_string');
                                },
                                slice_blob: Test(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                                stream_upload: function(){
                                    return I.can('slice_blob') && I.can('send_multipart');
                                },
                                summon_file_dialog: function() { // yeah... some dirty sniffing here...
                                    return I.can('select_file') && (
                                            (Env.browser === 'Firefox' && Env.verComp(Env.version, 4, '>=')) ||
                                            (Env.browser === 'Opera' && Env.verComp(Env.version, 12, '>=')) ||
                                            (Env.browser === 'IE' && Env.verComp(Env.version, 10, '>=')) ||
                                            !!~Basic.inArray(Env.browser, ['Chrome', 'Safari', 'Edge'])
                                        );
                                },
                                upload_filesize: True,
                                use_http_method: True
                            },
                            arguments[2]
                        );

                        Runtime.call(this, options, (arguments[1] || type), caps);


                        Basic.extend(this, {

                            init : function() {
                                this.trigger("Init");
                            },

                            destroy: (function(destroy) { // extend default destroy method
                                return function() {
                                    destroy.call(I);
                                    destroy = I = null;
                                };
                            }(this.destroy))
                        });

                        Basic.extend(this.getShim(), extensions);
                    }

                    Runtime.addConstructor(type, Html5Runtime);

                    return extensions;
                });

// Included from: src/javascript/runtime/html5/file/Blob.js

                /**
                 * Blob.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/file/Blob
                 @private
                 */
                define("moxie/runtime/html5/file/Blob", [
                    "moxie/runtime/html5/Runtime",
                    "moxie/file/Blob"
                ], function(extensions, Blob) {

                    function HTML5Blob() {
                        function w3cBlobSlice(blob, start, end) {
                            var blobSlice;

                            if (window.File.prototype.slice) {
                                try {
                                    blob.slice();	// depricated version will throw WRONG_ARGUMENTS_ERR exception
                                    return blob.slice(start, end);
                                } catch (e) {
                                    // depricated slice method
                                    return blob.slice(start, end - start);
                                }
                                // slice method got prefixed: https://bugzilla.mozilla.org/show_bug.cgi?id=649672
                            } else if ((blobSlice = window.File.prototype.webkitSlice || window.File.prototype.mozSlice)) {
                                return blobSlice.call(blob, start, end);
                            } else {
                                return null; // or throw some exception
                            }
                        }

                        this.slice = function() {
                            return new Blob(this.getRuntime().uid, w3cBlobSlice.apply(this, arguments));
                        };
                    }

                    return (extensions.Blob = HTML5Blob);
                });

// Included from: src/javascript/core/utils/Events.js

                /**
                 * Events.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                define('moxie/core/utils/Events', [
                    'moxie/core/utils/Basic'
                ], function(Basic) {
                    var eventhash = {}, uid = 'moxie_' + Basic.guid();

                    // IE W3C like event funcs
                    function preventDefault() {
                        this.returnValue = false;
                    }

                    function stopPropagation() {
                        this.cancelBubble = true;
                    }

                    /**
                     Adds an event handler to the specified object and store reference to the handler
                     in objects internal Plupload registry (@see removeEvent).

                     @method addEvent
                     @for Utils
                     @static
                     @param {Object} obj DOM element like object to add handler to.
                     @param {String} name Name to add event listener to.
                     @param {Function} callback Function to call when event occurs.
                     @param {String} [key] that might be used to add specifity to the event record.
                     */
                    var addEvent = function(obj, name, callback, key) {
                        var func, events;

                        name = name.toLowerCase();

                        // Add event listener
                        if (obj.addEventListener) {
                            func = callback;

                            obj.addEventListener(name, func, false);
                        } else if (obj.attachEvent) {
                            func = function() {
                                var evt = window.event;

                                if (!evt.target) {
                                    evt.target = evt.srcElement;
                                }

                                evt.preventDefault = preventDefault;
                                evt.stopPropagation = stopPropagation;

                                callback(evt);
                            };

                            obj.attachEvent('on' + name, func);
                        }

                        // Log event handler to objects internal mOxie registry
                        if (!obj[uid]) {
                            obj[uid] = Basic.guid();
                        }

                        if (!eventhash.hasOwnProperty(obj[uid])) {
                            eventhash[obj[uid]] = {};
                        }

                        events = eventhash[obj[uid]];

                        if (!events.hasOwnProperty(name)) {
                            events[name] = [];
                        }

                        events[name].push({
                            func: func,
                            orig: callback, // store original callback for IE
                            key: key
                        });
                    };


                    /**
                     Remove event handler from the specified object. If third argument (callback)
                     is not specified remove all events with the specified name.

                     @method removeEvent
                     @static
                     @param {Object} obj DOM element to remove event listener(s) from.
                     @param {String} name Name of event listener to remove.
                     @param {Function|String} [callback] might be a callback or unique key to match.
                     */
                    var removeEvent = function(obj, name, callback) {
                        var type, undef;

                        name = name.toLowerCase();

                        if (obj[uid] && eventhash[obj[uid]] && eventhash[obj[uid]][name]) {
                            type = eventhash[obj[uid]][name];
                        } else {
                            return;
                        }

                        for (var i = type.length - 1; i >= 0; i--) {
                            // undefined or not, key should match
                            if (type[i].orig === callback || type[i].key === callback) {
                                if (obj.removeEventListener) {
                                    obj.removeEventListener(name, type[i].func, false);
                                } else if (obj.detachEvent) {
                                    obj.detachEvent('on'+name, type[i].func);
                                }

                                type[i].orig = null;
                                type[i].func = null;
                                type.splice(i, 1);

                                // If callback was passed we are done here, otherwise proceed
                                if (callback !== undef) {
                                    break;
                                }
                            }
                        }

                        // If event array got empty, remove it
                        if (!type.length) {
                            delete eventhash[obj[uid]][name];
                        }

                        // If mOxie registry has become empty, remove it
                        if (Basic.isEmptyObj(eventhash[obj[uid]])) {
                            delete eventhash[obj[uid]];

                            // IE doesn't let you remove DOM object property with - delete
                            try {
                                delete obj[uid];
                            } catch(e) {
                                obj[uid] = undef;
                            }
                        }
                    };


                    /**
                     Remove all kind of events from the specified object

                     @method removeAllEvents
                     @static
                     @param {Object} obj DOM element to remove event listeners from.
                     @param {String} [key] unique key to match, when removing events.
                     */
                    var removeAllEvents = function(obj, key) {
                        if (!obj || !obj[uid]) {
                            return;
                        }

                        Basic.each(eventhash[obj[uid]], function(events, name) {
                            removeEvent(obj, name, key);
                        });
                    };

                    return {
                        addEvent: addEvent,
                        removeEvent: removeEvent,
                        removeAllEvents: removeAllEvents
                    };
                });

// Included from: src/javascript/runtime/html5/file/FileInput.js

                /**
                 * FileInput.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/file/FileInput
                 @private
                 */
                define("moxie/runtime/html5/file/FileInput", [
                    "moxie/runtime/html5/Runtime",
                    "moxie/file/File",
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Dom",
                    "moxie/core/utils/Events",
                    "moxie/core/utils/Mime",
                    "moxie/core/utils/Env"
                ], function(extensions, File, Basic, Dom, Events, Mime, Env) {

                    function FileInput() {
                        var _options, _browseBtnZIndex; // save original z-index

                        Basic.extend(this, {
                            init: function(options) {
                                var comp = this, I = comp.getRuntime(), input, shimContainer, mimes, browseButton, zIndex, top;

                                _options = options;

                                // figure out accept string
                                mimes = _options.accept.mimes || Mime.extList2mimes(_options.accept, I.can('filter_by_extension'));

                                shimContainer = I.getShimContainer();

                                shimContainer.innerHTML = '<input id="' + I.uid +'" type="file" style="font-size:999px;opacity:0;"' +
                                    (_options.multiple && I.can('select_multiple') ? 'multiple' : '') +
                                    (_options.directory && I.can('select_folder') ? 'webkitdirectory directory' : '') + // Chrome 11+
                                    (mimes ? ' accept="' + mimes.join(',') + '"' : '') + ' />';

                                input = Dom.get(I.uid);

                                // prepare file input to be placed underneath the browse_button element
                                Basic.extend(input.style, {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                });


                                browseButton = Dom.get(_options.browse_button);
                                _browseBtnZIndex = Dom.getStyle(browseButton, 'z-index') || 'auto';

                                // Route click event to the input[type=file] element for browsers that support such behavior
                                if (I.can('summon_file_dialog')) {
                                    if (Dom.getStyle(browseButton, 'position') === 'static') {
                                        browseButton.style.position = 'relative';
                                    }
                                    //console.log(Events);
                                   // Events.unbind("click");
                                    Events.addEvent(browseButton, 'click', function(e) {
                                        var input = Dom.get(I.uid);
                                        if (input && !input.disabled) { // for some reason FF (up to 8.0.1 so far) lets to click disabled input[type=file]
                                            input.click();
                                        }
                                        e.preventDefault();
                                    }, comp.uid);

                                    comp.bind('Refresh', function() {
                                        zIndex = parseInt(_browseBtnZIndex, 10) || 1;

                                        Dom.get(_options.browse_button).style.zIndex = zIndex;
                                        this.getRuntime().getShimContainer().style.zIndex = zIndex - 1;
                                    });
                                }

                                /* Since we have to place input[type=file] on top of the browse_button for some browsers,
                                 browse_button loses interactivity, so we restore it here */
                                top = I.can('summon_file_dialog') ? browseButton : shimContainer;

                                Events.addEvent(top, 'mouseover', function() {
                                    comp.trigger('mouseenter');
                                }, comp.uid);

                                Events.addEvent(top, 'mouseout', function() {
                                    comp.trigger('mouseleave');
                                }, comp.uid);

                                Events.addEvent(top, 'mousedown', function() {
                                    comp.trigger('mousedown');
                                }, comp.uid);

                                Events.addEvent(Dom.get(_options.container), 'mouseup', function() {
                                    comp.trigger('mouseup');
                                }, comp.uid);


                                input.onchange = function onChange(e) { // there should be only one handler for this
                                    comp.files = [];

                                    Basic.each(this.files, function(file) {
                                        var relativePath = '';

                                        if (_options.directory) {
                                            // folders are represented by dots, filter them out (Chrome 11+)
                                            if (file.name == ".") {
                                                // if it looks like a folder...
                                                return true;
                                            }
                                        }

                                        if (file.webkitRelativePath) {
                                            relativePath = '/' + file.webkitRelativePath.replace(/^\//, '');
                                        }

                                        file = new File(I.uid, file);
                                        file.relativePath = relativePath;

                                        comp.files.push(file);
                                    });

                                    // clearing the value enables the user to select the same file again if they want to
                                    if (Env.browser !== 'IE' && Env.browser !== 'IEMobile') {
                                        this.value = '';
                                    } else {
                                        // in IE input[type="file"] is read-only so the only way to reset it is to re-insert it
                                        var clone = this.cloneNode(true);
                                        this.parentNode.replaceChild(clone, this);
                                        clone.onchange = onChange;
                                    }

                                    if (comp.files.length) {
                                        comp.trigger('change');
                                    }
                                };

                                // ready event is perfectly asynchronous
                                comp.trigger({
                                    type: 'ready',
                                    async: true
                                });

                                shimContainer = null;
                            },


                            setOption: function(name, value) {
                                var I = this.getRuntime();
                                var input = Dom.get(I.uid);

                                switch (name) {
                                    case 'accept':
                                        if (value) {
                                            var mimes = value.mimes || Mime.extList2mimes(value, I.can('filter_by_extension'));
                                            input.setAttribute('accept', mimes.join(','));
                                        } else {
                                            input.removeAttribute('accept');
                                        }
                                        break;

                                    case 'directory':
                                        if (value && I.can('select_folder')) {
                                            input.setAttribute('directory', '');
                                            input.setAttribute('webkitdirectory', '');
                                        } else {
                                            input.removeAttribute('directory');
                                            input.removeAttribute('webkitdirectory');
                                        }
                                        break;

                                    case 'multiple':
                                        if (value && I.can('select_multiple')) {
                                            input.setAttribute('multiple', '');
                                        } else {
                                            input.removeAttribute('multiple');
                                        }

                                }
                            },


                            disable: function(state) {
                                var I = this.getRuntime(), input;

                                if ((input = Dom.get(I.uid))) {
                                    input.disabled = !!state;
                                }
                            },

                            destroy: function() {
                                var I = this.getRuntime()
                                    , shim = I.getShim()
                                    , shimContainer = I.getShimContainer()
                                    , container = _options && Dom.get(_options.container)
                                    , browseButton = _options && Dom.get(_options.browse_button)
                                ;

                                if (container) {
                                    Events.removeAllEvents(container, this.uid);
                                }

                                if (browseButton) {
                                    Events.removeAllEvents(browseButton, this.uid);
                                    browseButton.style.zIndex = _browseBtnZIndex; // reset to original value
                                }

                                if (shimContainer) {
                                    Events.removeAllEvents(shimContainer, this.uid);
                                    shimContainer.innerHTML = '';
                                }

                                shim.removeInstance(this.uid);

                                _options = shimContainer = container = browseButton = shim = null;
                            }
                        });
                    }

                    return (extensions.FileInput = FileInput);
                });

// Included from: src/javascript/runtime/html5/file/FileDrop.js

                /**
                 * FileDrop.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/file/FileDrop
                 @private
                 */
                define("moxie/runtime/html5/file/FileDrop", [
                    "moxie/runtime/html5/Runtime",
                    'moxie/file/File',
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Dom",
                    "moxie/core/utils/Events",
                    "moxie/core/utils/Mime"
                ], function(extensions, File, Basic, Dom, Events, Mime) {

                    function FileDrop() {
                        var _files = [], _allowedExts = [], _options, _ruid;

                        Basic.extend(this, {
                            init: function(options) {
                                var comp = this, dropZone;

                                _options = options;
                                _ruid = comp.ruid; // every dropped-in file should have a reference to the runtime
                                _allowedExts = _extractExts(_options.accept);
                                dropZone = _options.container;

                                Events.addEvent(dropZone, 'dragover', function(e) {
                                    if (!_hasFiles(e)) {
                                        return;
                                    }
                                    e.preventDefault();
                                    e.dataTransfer.dropEffect = 'copy';
                                }, comp.uid);

                                Events.addEvent(dropZone, 'drop', function(e) {
                                    if (!_hasFiles(e)) {
                                        return;
                                    }
                                    e.preventDefault();

                                    _files = [];

                                    // Chrome 21+ accepts folders via Drag'n'Drop
                                    if (e.dataTransfer.items && e.dataTransfer.items[0].webkitGetAsEntry) {
                                        _readItems(e.dataTransfer.items, function() {
                                            comp.files = _files;
                                            comp.trigger("drop");
                                        });
                                    } else {
                                        Basic.each(e.dataTransfer.files, function(file) {
                                            _addFile(file);
                                        });
                                        comp.files = _files;
                                        comp.trigger("drop");
                                    }
                                }, comp.uid);

                                Events.addEvent(dropZone, 'dragenter', function(e) {
                                    comp.trigger("dragenter");
                                }, comp.uid);

                                Events.addEvent(dropZone, 'dragleave', function(e) {
                                    comp.trigger("dragleave");
                                }, comp.uid);
                            },

                            destroy: function() {
                                Events.removeAllEvents(_options && Dom.get(_options.container), this.uid);
                                _ruid = _files = _allowedExts = _options = null;
                            }
                        });


                        function _hasFiles(e) {
                            if (!e.dataTransfer || !e.dataTransfer.types) { // e.dataTransfer.files is not available in Gecko during dragover
                                return false;
                            }

                            var types = Basic.toArray(e.dataTransfer.types || []);

                            return Basic.inArray("Files", types) !== -1 ||
                                Basic.inArray("public.file-url", types) !== -1 || // Safari < 5
                                Basic.inArray("application/x-moz-file", types) !== -1 // Gecko < 1.9.2 (< Firefox 3.6)
                                ;
                        }


                        function _addFile(file, relativePath) {
                            if (_isAcceptable(file)) {
                                var fileObj = new File(_ruid, file);
                                fileObj.relativePath = relativePath || '';
                                _files.push(fileObj);
                            }
                        }


                        function _extractExts(accept) {
                            var exts = [];
                            for (var i = 0; i < accept.length; i++) {
                                [].push.apply(exts, accept[i].extensions.split(/\s*,\s*/));
                            }
                            return Basic.inArray('*', exts) === -1 ? exts : [];
                        }


                        function _isAcceptable(file) {
                            if (!_allowedExts.length) {
                                return true;
                            }
                            var ext = Mime.getFileExtension(file.name);
                            return !ext || Basic.inArray(ext, _allowedExts) !== -1;
                        }


                        function _readItems(items, cb) {
                            var entries = [];
                            Basic.each(items, function(item) {
                                var entry = item.webkitGetAsEntry();
                                // Address #998 (https://code.google.com/p/chromium/issues/detail?id=332579)
                                if (entry) {
                                    // file() fails on OSX when the filename contains a special character (e.g. umlaut): see #61
                                    if (entry.isFile) {
                                        _addFile(item.getAsFile(), entry.fullPath);
                                    } else {
                                        entries.push(entry);
                                    }
                                }
                            });

                            if (entries.length) {
                                _readEntries(entries, cb);
                            } else {
                                cb();
                            }
                        }


                        function _readEntries(entries, cb) {
                            var queue = [];
                            Basic.each(entries, function(entry) {
                                queue.push(function(cbcb) {
                                    _readEntry(entry, cbcb);
                                });
                            });
                            Basic.inSeries(queue, function() {
                                cb();
                            });
                        }


                        function _readEntry(entry, cb) {
                            if (entry.isFile) {
                                entry.file(function(file) {
                                    _addFile(file, entry.fullPath);
                                    cb();
                                }, function() {
                                    // fire an error event maybe
                                    cb();
                                });
                            } else if (entry.isDirectory) {
                                _readDirEntry(entry, cb);
                            } else {
                                cb(); // not file, not directory? what then?..
                            }
                        }


                        function _readDirEntry(dirEntry, cb) {
                            var entries = [], dirReader = dirEntry.createReader();

                            // keep quering recursively till no more entries
                            function getEntries(cbcb) {
                                dirReader.readEntries(function(moreEntries) {
                                    if (moreEntries.length) {
                                        [].push.apply(entries, moreEntries);
                                        getEntries(cbcb);
                                    } else {
                                        cbcb();
                                    }
                                }, cbcb);
                            }

                            // ...and you thought FileReader was crazy...
                            getEntries(function() {
                                _readEntries(entries, cb);
                            });
                        }
                    }

                    return (extensions.FileDrop = FileDrop);
                });

// Included from: src/javascript/runtime/html5/file/FileReader.js

                /**
                 * FileReader.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/file/FileReader
                 @private
                 */
                define("moxie/runtime/html5/file/FileReader", [
                    "moxie/runtime/html5/Runtime",
                    "moxie/core/utils/Encode",
                    "moxie/core/utils/Basic"
                ], function(extensions, Encode, Basic) {

                    function FileReader() {
                        var _fr, _convertToBinary = false;

                        Basic.extend(this, {

                            read: function(op, blob) {
                                var comp = this;

                                comp.result = '';

                                _fr = new window.FileReader();

                                _fr.addEventListener('progress', function(e) {
                                    comp.trigger(e);
                                });

                                _fr.addEventListener('load', function(e) {
                                    comp.result = _convertToBinary ? _toBinary(_fr.result) : _fr.result;
                                    comp.trigger(e);
                                });

                                _fr.addEventListener('error', function(e) {
                                    comp.trigger(e, _fr.error);
                                });

                                _fr.addEventListener('loadend', function(e) {
                                    _fr = null;
                                    comp.trigger(e);
                                });

                                if (Basic.typeOf(_fr[op]) === 'function') {
                                    _convertToBinary = false;
                                    _fr[op](blob.getSource());
                                } else if (op === 'readAsBinaryString') { // readAsBinaryString is depricated in general and never existed in IE10+
                                    _convertToBinary = true;
                                    _fr.readAsDataURL(blob.getSource());
                                }
                            },

                            abort: function() {
                                if (_fr) {
                                    _fr.abort();
                                }
                            },

                            destroy: function() {
                                _fr = null;
                            }
                        });

                        function _toBinary(str) {
                            return Encode.atob(str.substring(str.indexOf('base64,') + 7));
                        }
                    }

                    return (extensions.FileReader = FileReader);
                });

// Included from: src/javascript/runtime/html5/xhr/XMLHttpRequest.js

                /**
                 * XMLHttpRequest.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /*global ActiveXObject:true */

                /**
                 @class moxie/runtime/html5/xhr/XMLHttpRequest
                 @private
                 */
                define("moxie/runtime/html5/xhr/XMLHttpRequest", [
                    "moxie/runtime/html5/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Mime",
                    "moxie/core/utils/Url",
                    "moxie/file/File",
                    "moxie/file/Blob",
                    "moxie/xhr/FormData",
                    "moxie/core/Exceptions",
                    "moxie/core/utils/Env"
                ], function(extensions, Basic, Mime, Url, File, Blob, FormData, x, Env) {

                    function XMLHttpRequest() {
                        var self = this
                            , _xhr
                            , _filename
                        ;

                        Basic.extend(this, {
                            send: function(meta, data) {
                                var target = this
                                    , isGecko2_5_6 = (Env.browser === 'Mozilla' && Env.verComp(Env.version, 4, '>=') && Env.verComp(Env.version, 7, '<'))
                                    , isAndroidBrowser = Env.browser === 'Android Browser'
                                    , mustSendAsBinary = false
                                ;

                                // extract file name
                                _filename = meta.url.replace(/^.+?\/([\w\-\.]+)$/, '$1').toLowerCase();

                                _xhr = _getNativeXHR();
                                _xhr.open(meta.method, meta.url, meta.async, meta.user, meta.password);


                                // prepare data to be sent
                                if (data instanceof Blob) {
                                    if (data.isDetached()) {
                                        mustSendAsBinary = true;
                                    }
                                    data = data.getSource();
                                } else if (data instanceof FormData) {

                                    if (data.hasBlob()) {
                                        if (data.getBlob().isDetached()) {
                                            data = _prepareMultipart.call(target, data); // _xhr must be instantiated and be in OPENED state
                                            mustSendAsBinary = true;
                                        } else if ((isGecko2_5_6 || isAndroidBrowser) && Basic.typeOf(data.getBlob().getSource()) === 'blob' && window.FileReader) {
                                            // Gecko 2/5/6 can't send blob in FormData: https://bugzilla.mozilla.org/show_bug.cgi?id=649150
                                            // Android browsers (default one and Dolphin) seem to have the same issue, see: #613
                                            _preloadAndSend.call(target, meta, data);
                                            return; // _preloadAndSend will reinvoke send() with transmutated FormData =%D
                                        }
                                    }

                                    // transfer fields to real FormData
                                    if (data instanceof FormData) { // if still a FormData, e.g. not mangled by _prepareMultipart()
                                        var fd = new window.FormData();
                                        data.each(function(value, name) {
                                            if (value instanceof Blob) {
                                                fd.append(name, value.getSource());
                                            } else {
                                                fd.append(name, value);
                                            }
                                        });
                                        data = fd;
                                    }
                                }


                                // if XHR L2
                                if (_xhr.upload) {
                                    if (meta.withCredentials) {
                                        _xhr.withCredentials = true;
                                    }

                                    _xhr.addEventListener('load', function(e) {
                                        target.trigger(e);
                                    });

                                    _xhr.addEventListener('error', function(e) {
                                        target.trigger(e);
                                    });

                                    // additionally listen to progress events
                                    _xhr.addEventListener('progress', function(e) {
                                        target.trigger(e);
                                    });

                                    _xhr.upload.addEventListener('progress', function(e) {
                                        target.trigger({
                                            type: 'UploadProgress',
                                            loaded: e.loaded,
                                            total: e.total
                                        });
                                    });
                                    // ... otherwise simulate XHR L2
                                } else {
                                    _xhr.onreadystatechange = function onReadyStateChange() {

                                        // fake Level 2 events
                                        switch (_xhr.readyState) {

                                            case 1: // XMLHttpRequest.OPENED
                                                // readystatechanged is fired twice for OPENED state (in IE and Mozilla) - neu
                                                break;

                                            // looks like HEADERS_RECEIVED (state 2) is not reported in Opera (or it's old versions) - neu
                                            case 2: // XMLHttpRequest.HEADERS_RECEIVED
                                                break;

                                            case 3: // XMLHttpRequest.LOADING
                                                // try to fire progress event for not XHR L2
                                                var total, loaded;

                                                try {
                                                    if (Url.hasSameOrigin(meta.url)) { // Content-Length not accessible for cross-domain on some browsers
                                                        total = _xhr.getResponseHeader('Content-Length') || 0; // old Safari throws an exception here
                                                    }

                                                    if (_xhr.responseText) { // responseText was introduced in IE7
                                                        loaded = _xhr.responseText.length;
                                                    }
                                                } catch(ex) {
                                                    total = loaded = 0;
                                                }

                                                target.trigger({
                                                    type: 'progress',
                                                    lengthComputable: !!total,
                                                    total: parseInt(total, 10),
                                                    loaded: loaded
                                                });
                                                break;

                                            case 4: // XMLHttpRequest.DONE
                                                // release readystatechange handler (mostly for IE)
                                                _xhr.onreadystatechange = function() {};

                                                // usually status 0 is returned when server is unreachable, but FF also fails to status 0 for 408 timeout
                                                if (_xhr.status === 0) {
                                                    target.trigger('error');
                                                } else {
                                                    target.trigger('load');
                                                }
                                                break;
                                        }
                                    };
                                }


                                // set request headers
                                if (!Basic.isEmptyObj(meta.headers)) {
                                    Basic.each(meta.headers, function(value, header) {
                                        _xhr.setRequestHeader(header, value);
                                    });
                                }

                                // request response type
                                if ("" !== meta.responseType && 'responseType' in _xhr) {
                                    if ('json' === meta.responseType && !Env.can('return_response_type', 'json')) { // we can fake this one
                                        _xhr.responseType = 'text';
                                    } else {
                                        _xhr.responseType = meta.responseType;
                                    }
                                }

                                // send ...
                                if (!mustSendAsBinary) {
                                    _xhr.send(data);
                                } else {
                                    if (_xhr.sendAsBinary) { // Gecko
                                        _xhr.sendAsBinary(data);
                                    } else { // other browsers having support for typed arrays
                                        (function() {
                                            // mimic Gecko's sendAsBinary
                                            var ui8a = new Uint8Array(data.length);
                                            for (var i = 0; i < data.length; i++) {
                                                ui8a[i] = (data.charCodeAt(i) & 0xff);
                                            }
                                            _xhr.send(ui8a.buffer);
                                        }());
                                    }
                                }

                                target.trigger('loadstart');
                            },

                            getStatus: function() {
                                // according to W3C spec it should return 0 for readyState < 3, but instead it throws an exception
                                try {
                                    if (_xhr) {
                                        return _xhr.status;
                                    }
                                } catch(ex) {}
                                return 0;
                            },

                            getResponse: function(responseType) {
                                var I = this.getRuntime();

                                try {
                                    switch (responseType) {
                                        case 'blob':
                                            var file = new File(I.uid, _xhr.response);

                                            // try to extract file name from content-disposition if possible (might be - not, if CORS for example)
                                            var disposition = _xhr.getResponseHeader('Content-Disposition');
                                            if (disposition) {
                                                // extract filename from response header if available
                                                var match = disposition.match(/filename=([\'\"'])([^\1]+)\1/);
                                                if (match) {
                                                    _filename = match[2];
                                                }
                                            }
                                            file.name = _filename;

                                            // pre-webkit Opera doesn't set type property on the blob response
                                            if (!file.type) {
                                                file.type = Mime.getFileMime(_filename);
                                            }
                                            return file;

                                        case 'json':
                                            if (!Env.can('return_response_type', 'json')) {
                                                return _xhr.status === 200 && !!window.JSON ? JSON.parse(_xhr.responseText) : null;
                                            }
                                            return _xhr.response;

                                        case 'document':
                                            return _getDocument(_xhr);

                                        default:
                                            return _xhr.responseText !== '' ? _xhr.responseText : null; // against the specs, but for consistency across the runtimes
                                    }
                                } catch(ex) {
                                    return null;
                                }
                            },

                            getAllResponseHeaders: function() {
                                try {
                                    return _xhr.getAllResponseHeaders();
                                } catch(ex) {}
                                return '';
                            },

                            abort: function() {
                                if (_xhr) {
                                    _xhr.abort();
                                }
                            },

                            destroy: function() {
                                self = _filename = null;
                            }
                        });


                        // here we go... ugly fix for ugly bug
                        function _preloadAndSend(meta, data) {
                            var target = this, blob, fr;

                            // get original blob
                            blob = data.getBlob().getSource();

                            // preload blob in memory to be sent as binary string
                            fr = new window.FileReader();
                            fr.onload = function() {
                                // overwrite original blob
                                data.append(data.getBlobName(), new Blob(null, {
                                    type: blob.type,
                                    data: fr.result
                                }));
                                // invoke send operation again
                                self.send.call(target, meta, data);
                            };
                            fr.readAsBinaryString(blob);
                        }


                        function _getNativeXHR() {
                            if (window.XMLHttpRequest && !(Env.browser === 'IE' && Env.verComp(Env.version, 8, '<'))) { // IE7 has native XHR but it's buggy
                                return new window.XMLHttpRequest();
                            } else {
                                return (function() {
                                    var progIDs = ['Msxml2.XMLHTTP.6.0', 'Microsoft.XMLHTTP']; // if 6.0 available, use it, otherwise failback to default 3.0
                                    for (var i = 0; i < progIDs.length; i++) {
                                        try {
                                            return new ActiveXObject(progIDs[i]);
                                        } catch (ex) {}
                                    }
                                })();
                            }
                        }

                        // @credits Sergey Ilinsky	(http://www.ilinsky.com/)
                        function _getDocument(xhr) {
                            var rXML = xhr.responseXML;
                            var rText = xhr.responseText;

                            // Try parsing responseText (@see: http://www.ilinsky.com/articles/XMLHttpRequest/#bugs-ie-responseXML-content-type)
                            if (Env.browser === 'IE' && rText && rXML && !rXML.documentElement && /[^\/]+\/[^\+]+\+xml/.test(xhr.getResponseHeader("Content-Type"))) {
                                rXML = new window.ActiveXObject("Microsoft.XMLDOM");
                                rXML.async = false;
                                rXML.validateOnParse = false;
                                rXML.loadXML(rText);
                            }

                            // Check if there is no error in document
                            if (rXML) {
                                if ((Env.browser === 'IE' && rXML.parseError !== 0) || !rXML.documentElement || rXML.documentElement.tagName === "parsererror") {
                                    return null;
                                }
                            }
                            return rXML;
                        }


                        function _prepareMultipart(fd) {
                            var boundary = '----moxieboundary' + new Date().getTime()
                                , dashdash = '--'
                                , crlf = '\r\n'
                                , multipart = ''
                                , I = this.getRuntime()
                            ;

                            if (!I.can('send_binary_string')) {
                                throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
                            }

                            _xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);

                            // append multipart parameters
                            fd.each(function(value, name) {
                                // Firefox 3.6 failed to convert multibyte characters to UTF-8 in sendAsBinary(),
                                // so we try it here ourselves with: unescape(encodeURIComponent(value))
                                if (value instanceof Blob) {
                                    // Build RFC2388 blob
                                    multipart += dashdash + boundary + crlf +
                                        'Content-Disposition: form-data; name="' + name + '"; filename="' + unescape(encodeURIComponent(value.name || 'blob')) + '"' + crlf +
                                        'Content-Type: ' + (value.type || 'application/octet-stream') + crlf + crlf +
                                        value.getSource() + crlf;
                                } else {
                                    multipart += dashdash + boundary + crlf +
                                        'Content-Disposition: form-data; name="' + name + '"' + crlf + crlf +
                                        unescape(encodeURIComponent(value)) + crlf;
                                }
                            });

                            multipart += dashdash + boundary + dashdash + crlf;

                            return multipart;
                        }
                    }

                    return (extensions.XMLHttpRequest = XMLHttpRequest);
                });

// Included from: src/javascript/runtime/html5/utils/BinaryReader.js

                /**
                 * BinaryReader.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/utils/BinaryReader
                 @private
                 */
                define("moxie/runtime/html5/utils/BinaryReader", [
                    "moxie/core/utils/Basic"
                ], function(Basic) {


                    function BinaryReader(data) {
                        if (data instanceof ArrayBuffer) {
                            ArrayBufferReader.apply(this, arguments);
                        } else {
                            UTF16StringReader.apply(this, arguments);
                        }
                    }

                    Basic.extend(BinaryReader.prototype, {

                        littleEndian: false,


                        read: function(idx, size) {
                            var sum, mv, i;

                            if (idx + size > this.length()) {
                                throw new Error("You are trying to read outside the source boundaries.");
                            }

                            mv = this.littleEndian
                                ? 0
                                : -8 * (size - 1)
                            ;

                            for (i = 0, sum = 0; i < size; i++) {
                                sum |= (this.readByteAt(idx + i) << Math.abs(mv + i*8));
                            }
                            return sum;
                        },


                        write: function(idx, num, size) {
                            var mv, i, str = '';

                            if (idx > this.length()) {
                                throw new Error("You are trying to write outside the source boundaries.");
                            }

                            mv = this.littleEndian
                                ? 0
                                : -8 * (size - 1)
                            ;

                            for (i = 0; i < size; i++) {
                                this.writeByteAt(idx + i, (num >> Math.abs(mv + i*8)) & 255);
                            }
                        },


                        BYTE: function(idx) {
                            return this.read(idx, 1);
                        },


                        SHORT: function(idx) {
                            return this.read(idx, 2);
                        },


                        LONG: function(idx) {
                            return this.read(idx, 4);
                        },


                        SLONG: function(idx) { // 2's complement notation
                            var num = this.read(idx, 4);
                            return (num > 2147483647 ? num - 4294967296 : num);
                        },


                        CHAR: function(idx) {
                            return String.fromCharCode(this.read(idx, 1));
                        },


                        STRING: function(idx, count) {
                            return this.asArray('CHAR', idx, count).join('');
                        },


                        asArray: function(type, idx, count) {
                            var values = [];

                            for (var i = 0; i < count; i++) {
                                values[i] = this[type](idx + i);
                            }
                            return values;
                        }
                    });


                    function ArrayBufferReader(data) {
                        var _dv = new DataView(data);

                        Basic.extend(this, {

                            readByteAt: function(idx) {
                                return _dv.getUint8(idx);
                            },


                            writeByteAt: function(idx, value) {
                                _dv.setUint8(idx, value);
                            },


                            SEGMENT: function(idx, size, value) {
                                switch (arguments.length) {
                                    case 2:
                                        return data.slice(idx, idx + size);

                                    case 1:
                                        return data.slice(idx);

                                    case 3:
                                        if (value === null) {
                                            value = new ArrayBuffer();
                                        }

                                        if (value instanceof ArrayBuffer) {
                                            var arr = new Uint8Array(this.length() - size + value.byteLength);
                                            if (idx > 0) {
                                                arr.set(new Uint8Array(data.slice(0, idx)), 0);
                                            }
                                            arr.set(new Uint8Array(value), idx);
                                            arr.set(new Uint8Array(data.slice(idx + size)), idx + value.byteLength);

                                            this.clear();
                                            data = arr.buffer;
                                            _dv = new DataView(data);
                                            break;
                                        }

                                    default: return data;
                                }
                            },


                            length: function() {
                                return data ? data.byteLength : 0;
                            },


                            clear: function() {
                                _dv = data = null;
                            }
                        });
                    }


                    function UTF16StringReader(data) {
                        Basic.extend(this, {

                            readByteAt: function(idx) {
                                return data.charCodeAt(idx);
                            },


                            writeByteAt: function(idx, value) {
                                putstr(String.fromCharCode(value), idx, 1);
                            },


                            SEGMENT: function(idx, length, segment) {
                                switch (arguments.length) {
                                    case 1:
                                        return data.substr(idx);
                                    case 2:
                                        return data.substr(idx, length);
                                    case 3:
                                        putstr(segment !== null ? segment : '', idx, length);
                                        break;
                                    default: return data;
                                }
                            },


                            length: function() {
                                return data ? data.length : 0;
                            },

                            clear: function() {
                                data = null;
                            }
                        });


                        function putstr(segment, idx, length) {
                            length = arguments.length === 3 ? length : data.length - idx - 1;
                            data = data.substr(0, idx) + segment + data.substr(length + idx);
                        }
                    }


                    return BinaryReader;
                });

// Included from: src/javascript/runtime/html5/image/JPEGHeaders.js

                /**
                 * JPEGHeaders.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/image/JPEGHeaders
                 @private
                 */
                define("moxie/runtime/html5/image/JPEGHeaders", [
                    "moxie/runtime/html5/utils/BinaryReader",
                    "moxie/core/Exceptions"
                ], function(BinaryReader, x) {

                    return function JPEGHeaders(data) {
                        var headers = [], _br, idx, marker, length = 0;

                        _br = new BinaryReader(data);

                        // Check if data is jpeg
                        if (_br.SHORT(0) !== 0xFFD8) {
                            _br.clear();
                            throw new x.ImageError(x.ImageError.WRONG_FORMAT);
                        }

                        idx = 2;

                        while (idx <= _br.length()) {
                            marker = _br.SHORT(idx);

                            // omit RST (restart) markers
                            if (marker >= 0xFFD0 && marker <= 0xFFD7) {
                                idx += 2;
                                continue;
                            }

                            // no headers allowed after SOS marker
                            if (marker === 0xFFDA || marker === 0xFFD9) {
                                break;
                            }

                            length = _br.SHORT(idx + 2) + 2;

                            // APPn marker detected
                            if (marker >= 0xFFE1 && marker <= 0xFFEF) {
                                headers.push({
                                    hex: marker,
                                    name: 'APP' + (marker & 0x000F),
                                    start: idx,
                                    length: length,
                                    segment: _br.SEGMENT(idx, length)
                                });
                            }

                            idx += length;
                        }

                        _br.clear();

                        return {
                            headers: headers,

                            restore: function(data) {
                                var max, i, br;

                                br = new BinaryReader(data);

                                idx = br.SHORT(2) == 0xFFE0 ? 4 + br.SHORT(4) : 2;

                                for (i = 0, max = headers.length; i < max; i++) {
                                    br.SEGMENT(idx, 0, headers[i].segment);
                                    idx += headers[i].length;
                                }

                                data = br.SEGMENT();
                                br.clear();
                                return data;
                            },

                            strip: function(data) {
                                var br, headers, jpegHeaders, i;

                                jpegHeaders = new JPEGHeaders(data);
                                headers = jpegHeaders.headers;
                                jpegHeaders.purge();

                                br = new BinaryReader(data);

                                i = headers.length;
                                while (i--) {
                                    br.SEGMENT(headers[i].start, headers[i].length, '');
                                }

                                data = br.SEGMENT();
                                br.clear();
                                return data;
                            },

                            get: function(name) {
                                var array = [];

                                for (var i = 0, max = headers.length; i < max; i++) {
                                    if (headers[i].name === name.toUpperCase()) {
                                        array.push(headers[i].segment);
                                    }
                                }
                                return array;
                            },

                            set: function(name, segment) {
                                var array = [], i, ii, max;

                                if (typeof(segment) === 'string') {
                                    array.push(segment);
                                } else {
                                    array = segment;
                                }

                                for (i = ii = 0, max = headers.length; i < max; i++) {
                                    if (headers[i].name === name.toUpperCase()) {
                                        headers[i].segment = array[ii];
                                        headers[i].length = array[ii].length;
                                        ii++;
                                    }
                                    if (ii >= array.length) {
                                        break;
                                    }
                                }
                            },

                            purge: function() {
                                this.headers = headers = [];
                            }
                        };
                    };
                });

// Included from: src/javascript/runtime/html5/image/ExifParser.js

                /**
                 * ExifParser.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/image/ExifParser
                 @private
                 */
                define("moxie/runtime/html5/image/ExifParser", [
                    "moxie/core/utils/Basic",
                    "moxie/runtime/html5/utils/BinaryReader",
                    "moxie/core/Exceptions"
                ], function(Basic, BinaryReader, x) {

                    function ExifParser(data) {
                        var __super__, tags, tagDescs, offsets, idx, Tiff;

                        BinaryReader.call(this, data);

                        tags = {
                            tiff: {
                                /*
                                 The image orientation viewed in terms of rows and columns.

                                 1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
                                 2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
                                 3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
                                 4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
                                 5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
                                 6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
                                 7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
                                 8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
                                 */
                                0x0112: 'Orientation',
                                0x010E: 'ImageDescription',
                                0x010F: 'Make',
                                0x0110: 'Model',
                                0x0131: 'Software',
                                0x8769: 'ExifIFDPointer',
                                0x8825:	'GPSInfoIFDPointer'
                            },
                            exif: {
                                0x9000: 'ExifVersion',
                                0xA001: 'ColorSpace',
                                0xA002: 'PixelXDimension',
                                0xA003: 'PixelYDimension',
                                0x9003: 'DateTimeOriginal',
                                0x829A: 'ExposureTime',
                                0x829D: 'FNumber',
                                0x8827: 'ISOSpeedRatings',
                                0x9201: 'ShutterSpeedValue',
                                0x9202: 'ApertureValue'	,
                                0x9207: 'MeteringMode',
                                0x9208: 'LightSource',
                                0x9209: 'Flash',
                                0x920A: 'FocalLength',
                                0xA402: 'ExposureMode',
                                0xA403: 'WhiteBalance',
                                0xA406: 'SceneCaptureType',
                                0xA404: 'DigitalZoomRatio',
                                0xA408: 'Contrast',
                                0xA409: 'Saturation',
                                0xA40A: 'Sharpness'
                            },
                            gps: {
                                0x0000: 'GPSVersionID',
                                0x0001: 'GPSLatitudeRef',
                                0x0002: 'GPSLatitude',
                                0x0003: 'GPSLongitudeRef',
                                0x0004: 'GPSLongitude'
                            },

                            thumb: {
                                0x0201: 'JPEGInterchangeFormat',
                                0x0202: 'JPEGInterchangeFormatLength'
                            }
                        };

                        tagDescs = {
                            'ColorSpace': {
                                1: 'sRGB',
                                0: 'Uncalibrated'
                            },

                            'MeteringMode': {
                                0: 'Unknown',
                                1: 'Average',
                                2: 'CenterWeightedAverage',
                                3: 'Spot',
                                4: 'MultiSpot',
                                5: 'Pattern',
                                6: 'Partial',
                                255: 'Other'
                            },

                            'LightSource': {
                                1: 'Daylight',
                                2: 'Fliorescent',
                                3: 'Tungsten',
                                4: 'Flash',
                                9: 'Fine weather',
                                10: 'Cloudy weather',
                                11: 'Shade',
                                12: 'Daylight fluorescent (D 5700 - 7100K)',
                                13: 'Day white fluorescent (N 4600 -5400K)',
                                14: 'Cool white fluorescent (W 3900 - 4500K)',
                                15: 'White fluorescent (WW 3200 - 3700K)',
                                17: 'Standard light A',
                                18: 'Standard light B',
                                19: 'Standard light C',
                                20: 'D55',
                                21: 'D65',
                                22: 'D75',
                                23: 'D50',
                                24: 'ISO studio tungsten',
                                255: 'Other'
                            },

                            'Flash': {
                                0x0000: 'Flash did not fire',
                                0x0001: 'Flash fired',
                                0x0005: 'Strobe return light not detected',
                                0x0007: 'Strobe return light detected',
                                0x0009: 'Flash fired, compulsory flash mode',
                                0x000D: 'Flash fired, compulsory flash mode, return light not detected',
                                0x000F: 'Flash fired, compulsory flash mode, return light detected',
                                0x0010: 'Flash did not fire, compulsory flash mode',
                                0x0018: 'Flash did not fire, auto mode',
                                0x0019: 'Flash fired, auto mode',
                                0x001D: 'Flash fired, auto mode, return light not detected',
                                0x001F: 'Flash fired, auto mode, return light detected',
                                0x0020: 'No flash function',
                                0x0041: 'Flash fired, red-eye reduction mode',
                                0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
                                0x0047: 'Flash fired, red-eye reduction mode, return light detected',
                                0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
                                0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
                                0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
                                0x0059: 'Flash fired, auto mode, red-eye reduction mode',
                                0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
                                0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
                            },

                            'ExposureMode': {
                                0: 'Auto exposure',
                                1: 'Manual exposure',
                                2: 'Auto bracket'
                            },

                            'WhiteBalance': {
                                0: 'Auto white balance',
                                1: 'Manual white balance'
                            },

                            'SceneCaptureType': {
                                0: 'Standard',
                                1: 'Landscape',
                                2: 'Portrait',
                                3: 'Night scene'
                            },

                            'Contrast': {
                                0: 'Normal',
                                1: 'Soft',
                                2: 'Hard'
                            },

                            'Saturation': {
                                0: 'Normal',
                                1: 'Low saturation',
                                2: 'High saturation'
                            },

                            'Sharpness': {
                                0: 'Normal',
                                1: 'Soft',
                                2: 'Hard'
                            },

                            // GPS related
                            'GPSLatitudeRef': {
                                N: 'North latitude',
                                S: 'South latitude'
                            },

                            'GPSLongitudeRef': {
                                E: 'East longitude',
                                W: 'West longitude'
                            }
                        };

                        offsets = {
                            tiffHeader: 10
                        };

                        idx = offsets.tiffHeader;

                        __super__ = {
                            clear: this.clear
                        };

                        // Public functions
                        Basic.extend(this, {

                            read: function() {
                                try {
                                    return ExifParser.prototype.read.apply(this, arguments);
                                } catch (ex) {
                                    throw new x.ImageError(x.ImageError.INVALID_META_ERR);
                                }
                            },


                            write: function() {
                                try {
                                    return ExifParser.prototype.write.apply(this, arguments);
                                } catch (ex) {
                                    throw new x.ImageError(x.ImageError.INVALID_META_ERR);
                                }
                            },


                            UNDEFINED: function() {
                                return this.BYTE.apply(this, arguments);
                            },


                            RATIONAL: function(idx) {
                                return this.LONG(idx) / this.LONG(idx + 4)
                            },


                            SRATIONAL: function(idx) {
                                return this.SLONG(idx) / this.SLONG(idx + 4)
                            },

                            ASCII: function(idx) {
                                return this.CHAR(idx);
                            },

                            TIFF: function() {
                                return Tiff || null;
                            },


                            EXIF: function() {
                                var Exif = null;

                                if (offsets.exifIFD) {
                                    try {
                                        Exif = extractTags.call(this, offsets.exifIFD, tags.exif);
                                    } catch(ex) {
                                        return null;
                                    }

                                    // Fix formatting of some tags
                                    if (Exif.ExifVersion && Basic.typeOf(Exif.ExifVersion) === 'array') {
                                        for (var i = 0, exifVersion = ''; i < Exif.ExifVersion.length; i++) {
                                            exifVersion += String.fromCharCode(Exif.ExifVersion[i]);
                                        }
                                        Exif.ExifVersion = exifVersion;
                                    }
                                }

                                return Exif;
                            },


                            GPS: function() {
                                var GPS = null;

                                if (offsets.gpsIFD) {
                                    try {
                                        GPS = extractTags.call(this, offsets.gpsIFD, tags.gps);
                                    } catch (ex) {
                                        return null;
                                    }

                                    // iOS devices (and probably some others) do not put in GPSVersionID tag (why?..)
                                    if (GPS.GPSVersionID && Basic.typeOf(GPS.GPSVersionID) === 'array') {
                                        GPS.GPSVersionID = GPS.GPSVersionID.join('.');
                                    }
                                }

                                return GPS;
                            },


                            thumb: function() {
                                if (offsets.IFD1) {
                                    try {
                                        var IFD1Tags = extractTags.call(this, offsets.IFD1, tags.thumb);

                                        if ('JPEGInterchangeFormat' in IFD1Tags) {
                                            return this.SEGMENT(offsets.tiffHeader + IFD1Tags.JPEGInterchangeFormat, IFD1Tags.JPEGInterchangeFormatLength);
                                        }
                                    } catch (ex) {}
                                }
                                return null;
                            },


                            setExif: function(tag, value) {
                                // Right now only setting of width/height is possible
                                if (tag !== 'PixelXDimension' && tag !== 'PixelYDimension') { return false; }

                                return setTag.call(this, 'exif', tag, value);
                            },


                            clear: function() {
                                __super__.clear();
                                data = tags = tagDescs = Tiff = offsets = __super__ = null;
                            }
                        });


                        // Check if that's APP1 and that it has EXIF
                        if (this.SHORT(0) !== 0xFFE1 || this.STRING(4, 5).toUpperCase() !== "EXIF\0") {
                            throw new x.ImageError(x.ImageError.INVALID_META_ERR);
                        }

                        // Set read order of multi-byte data
                        this.littleEndian = (this.SHORT(idx) == 0x4949);

                        // Check if always present bytes are indeed present
                        if (this.SHORT(idx+=2) !== 0x002A) {
                            throw new x.ImageError(x.ImageError.INVALID_META_ERR);
                        }

                        offsets.IFD0 = offsets.tiffHeader + this.LONG(idx += 2);
                        Tiff = extractTags.call(this, offsets.IFD0, tags.tiff);

                        if ('ExifIFDPointer' in Tiff) {
                            offsets.exifIFD = offsets.tiffHeader + Tiff.ExifIFDPointer;
                            delete Tiff.ExifIFDPointer;
                        }

                        if ('GPSInfoIFDPointer' in Tiff) {
                            offsets.gpsIFD = offsets.tiffHeader + Tiff.GPSInfoIFDPointer;
                            delete Tiff.GPSInfoIFDPointer;
                        }

                        if (Basic.isEmptyObj(Tiff)) {
                            Tiff = null;
                        }

                        // check if we have a thumb as well
                        var IFD1Offset = this.LONG(offsets.IFD0 + this.SHORT(offsets.IFD0) * 12 + 2);
                        if (IFD1Offset) {
                            offsets.IFD1 = offsets.tiffHeader + IFD1Offset;
                        }


                        function extractTags(IFD_offset, tags2extract) {
                            var data = this;
                            var length, i, tag, type, count, size, offset, value, values = [], hash = {};

                            var types = {
                                1 : 'BYTE',
                                7 : 'UNDEFINED',
                                2 : 'ASCII',
                                3 : 'SHORT',
                                4 : 'LONG',
                                5 : 'RATIONAL',
                                9 : 'SLONG',
                                10: 'SRATIONAL'
                            };

                            var sizes = {
                                'BYTE' 		: 1,
                                'UNDEFINED'	: 1,
                                'ASCII'		: 1,
                                'SHORT'		: 2,
                                'LONG' 		: 4,
                                'RATIONAL' 	: 8,
                                'SLONG'		: 4,
                                'SRATIONAL'	: 8
                            };

                            length = data.SHORT(IFD_offset);

                            // The size of APP1 including all these elements shall not exceed the 64 Kbytes specified in the JPEG standard.

                            for (i = 0; i < length; i++) {
                                values = [];

                                // Set binary reader pointer to beginning of the next tag
                                offset = IFD_offset + 2 + i*12;

                                tag = tags2extract[data.SHORT(offset)];

                                if (tag === undefined) {
                                    continue; // Not the tag we requested
                                }

                                type = types[data.SHORT(offset+=2)];
                                count = data.LONG(offset+=2);
                                size = sizes[type];

                                if (!size) {
                                    throw new x.ImageError(x.ImageError.INVALID_META_ERR);
                                }

                                offset += 4;

                                // tag can only fit 4 bytes of data, if data is larger we should look outside
                                if (size * count > 4) {
                                    // instead of data tag contains an offset of the data
                                    offset = data.LONG(offset) + offsets.tiffHeader;
                                }

                                // in case we left the boundaries of data throw an early exception
                                if (offset + size * count >= this.length()) {
                                    throw new x.ImageError(x.ImageError.INVALID_META_ERR);
                                }

                                // special care for the string
                                if (type === 'ASCII') {
                                    hash[tag] = Basic.trim(data.STRING(offset, count).replace(/\0$/, '')); // strip trailing NULL
                                    continue;
                                } else {
                                    values = data.asArray(type, offset, count);
                                    value = (count == 1 ? values[0] : values);

                                    if (tagDescs.hasOwnProperty(tag) && typeof value != 'object') {
                                        hash[tag] = tagDescs[tag][value];
                                    } else {
                                        hash[tag] = value;
                                    }
                                }
                            }

                            return hash;
                        }

                        // At the moment only setting of simple (LONG) values, that do not require offset recalculation, is supported
                        function setTag(ifd, tag, value) {
                            var offset, length, tagOffset, valueOffset = 0;

                            // If tag name passed translate into hex key
                            if (typeof(tag) === 'string') {
                                var tmpTags = tags[ifd.toLowerCase()];
                                for (var hex in tmpTags) {
                                    if (tmpTags[hex] === tag) {
                                        tag = hex;
                                        break;
                                    }
                                }
                            }
                            offset = offsets[ifd.toLowerCase() + 'IFD'];
                            length = this.SHORT(offset);

                            for (var i = 0; i < length; i++) {
                                tagOffset = offset + 12 * i + 2;

                                if (this.SHORT(tagOffset) == tag) {
                                    valueOffset = tagOffset + 8;
                                    break;
                                }
                            }

                            if (!valueOffset) {
                                return false;
                            }

                            try {
                                this.write(valueOffset, value, 4);
                            } catch(ex) {
                                return false;
                            }

                            return true;
                        }
                    }

                    ExifParser.prototype = BinaryReader.prototype;

                    return ExifParser;
                });

// Included from: src/javascript/runtime/html5/image/JPEG.js

                /**
                 * JPEG.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/image/JPEG
                 @private
                 */
                define("moxie/runtime/html5/image/JPEG", [
                    "moxie/core/utils/Basic",
                    "moxie/core/Exceptions",
                    "moxie/runtime/html5/image/JPEGHeaders",
                    "moxie/runtime/html5/utils/BinaryReader",
                    "moxie/runtime/html5/image/ExifParser"
                ], function(Basic, x, JPEGHeaders, BinaryReader, ExifParser) {

                    function JPEG(data) {
                        var _br, _hm, _ep, _info;

                        _br = new BinaryReader(data);

                        // check if it is jpeg
                        if (_br.SHORT(0) !== 0xFFD8) {
                            throw new x.ImageError(x.ImageError.WRONG_FORMAT);
                        }

                        // backup headers
                        _hm = new JPEGHeaders(data);

                        // extract exif info
                        try {
                            _ep = new ExifParser(_hm.get('app1')[0]);
                        } catch(ex) {}

                        // get dimensions
                        _info = _getDimensions.call(this);

                        Basic.extend(this, {
                            type: 'image/jpeg',

                            size: _br.length(),

                            width: _info && _info.width || 0,

                            height: _info && _info.height || 0,

                            setExif: function(tag, value) {
                                if (!_ep) {
                                    return false; // or throw an exception
                                }

                                if (Basic.typeOf(tag) === 'object') {
                                    Basic.each(tag, function(value, tag) {
                                        _ep.setExif(tag, value);
                                    });
                                } else {
                                    _ep.setExif(tag, value);
                                }

                                // update internal headers
                                _hm.set('app1', _ep.SEGMENT());
                            },

                            writeHeaders: function() {
                                if (!arguments.length) {
                                    // if no arguments passed, update headers internally
                                    return _hm.restore(data);
                                }
                                return _hm.restore(arguments[0]);
                            },

                            stripHeaders: function(data) {
                                return _hm.strip(data);
                            },

                            purge: function() {
                                _purge.call(this);
                            }
                        });

                        if (_ep) {
                            this.meta = {
                                tiff: _ep.TIFF(),
                                exif: _ep.EXIF(),
                                gps: _ep.GPS(),
                                thumb: _getThumb()
                            };
                        }


                        function _getDimensions(br) {
                            var idx = 0
                                , marker
                                , length
                            ;

                            if (!br) {
                                br = _br;
                            }

                            // examine all through the end, since some images might have very large APP segments
                            while (idx <= br.length()) {
                                marker = br.SHORT(idx += 2);

                                if (marker >= 0xFFC0 && marker <= 0xFFC3) { // SOFn
                                    idx += 5; // marker (2 bytes) + length (2 bytes) + Sample precision (1 byte)
                                    return {
                                        height: br.SHORT(idx),
                                        width: br.SHORT(idx += 2)
                                    };
                                }
                                length = br.SHORT(idx += 2);
                                idx += length - 2;
                            }
                            return null;
                        }


                        function _getThumb() {
                            var data =  _ep.thumb()
                                , br
                                , info
                            ;

                            if (data) {
                                br = new BinaryReader(data);
                                info = _getDimensions(br);
                                br.clear();

                                if (info) {
                                    info.data = data;
                                    return info;
                                }
                            }
                            return null;
                        }


                        function _purge() {
                            if (!_ep || !_hm || !_br) {
                                return; // ignore any repeating purge requests
                            }
                            _ep.clear();
                            _hm.purge();
                            _br.clear();
                            _info = _hm = _ep = _br = null;
                        }
                    }

                    return JPEG;
                });

// Included from: src/javascript/runtime/html5/image/PNG.js

                /**
                 * PNG.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/image/PNG
                 @private
                 */
                define("moxie/runtime/html5/image/PNG", [
                    "moxie/core/Exceptions",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/html5/utils/BinaryReader"
                ], function(x, Basic, BinaryReader) {

                    function PNG(data) {
                        var _br, _hm, _ep, _info;

                        _br = new BinaryReader(data);

                        // check if it's png
                        (function() {
                            var idx = 0, i = 0
                                , signature = [0x8950, 0x4E47, 0x0D0A, 0x1A0A]
                            ;

                            for (i = 0; i < signature.length; i++, idx += 2) {
                                if (signature[i] != _br.SHORT(idx)) {
                                    throw new x.ImageError(x.ImageError.WRONG_FORMAT);
                                }
                            }
                        }());

                        function _getDimensions() {
                            var chunk, idx;

                            chunk = _getChunkAt.call(this, 8);

                            if (chunk.type == 'IHDR') {
                                idx = chunk.start;
                                return {
                                    width: _br.LONG(idx),
                                    height: _br.LONG(idx += 4)
                                };
                            }
                            return null;
                        }

                        function _purge() {
                            if (!_br) {
                                return; // ignore any repeating purge requests
                            }
                            _br.clear();
                            data = _info = _hm = _ep = _br = null;
                        }

                        _info = _getDimensions.call(this);

                        Basic.extend(this, {
                            type: 'image/png',

                            size: _br.length(),

                            width: _info.width,

                            height: _info.height,

                            purge: function() {
                                _purge.call(this);
                            }
                        });

                        // for PNG we can safely trigger purge automatically, as we do not keep any data for later
                        _purge.call(this);

                        function _getChunkAt(idx) {
                            var length, type, start, CRC;

                            length = _br.LONG(idx);
                            type = _br.STRING(idx += 4, 4);
                            start = idx += 4;
                            CRC = _br.LONG(idx + length);

                            return {
                                length: length,
                                type: type,
                                start: start,
                                CRC: CRC
                            };
                        }
                    }

                    return PNG;
                });

// Included from: src/javascript/runtime/html5/image/ImageInfo.js

                /**
                 * ImageInfo.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/image/ImageInfo
                 @private
                 */
                define("moxie/runtime/html5/image/ImageInfo", [
                    "moxie/core/utils/Basic",
                    "moxie/core/Exceptions",
                    "moxie/runtime/html5/image/JPEG",
                    "moxie/runtime/html5/image/PNG"
                ], function(Basic, x, JPEG, PNG) {
                    /**
                     Optional image investigation tool for HTML5 runtime. Provides the following features:
                     - ability to distinguish image type (JPEG or PNG) by signature
                     - ability to extract image width/height directly from it's internals, without preloading in memory (fast)
                     - ability to extract APP headers from JPEGs (Exif, GPS, etc)
                     - ability to replace width/height tags in extracted JPEG headers
                     - ability to restore APP headers, that were for example stripped during image manipulation

                     @class ImageInfo
                     @constructor
                     @param {String} data Image source as binary string
                     */
                    return function(data) {
                        var _cs = [JPEG, PNG], _img;

                        // figure out the format, throw: ImageError.WRONG_FORMAT if not supported
                        _img = (function() {
                            for (var i = 0; i < _cs.length; i++) {
                                try {
                                    return new _cs[i](data);
                                } catch (ex) {
                                    // console.info(ex);
                                }
                            }
                            throw new x.ImageError(x.ImageError.WRONG_FORMAT);
                        }());

                        Basic.extend(this, {
                            /**
                             Image Mime Type extracted from it's depths

                             @property type
                             @type {String}
                             @default ''
                             */
                            type: '',

                            /**
                             Image size in bytes

                             @property size
                             @type {Number}
                             @default 0
                             */
                            size: 0,

                            /**
                             Image width extracted from image source

                             @property width
                             @type {Number}
                             @default 0
                             */
                            width: 0,

                            /**
                             Image height extracted from image source

                             @property height
                             @type {Number}
                             @default 0
                             */
                            height: 0,

                            /**
                             Sets Exif tag. Currently applicable only for width and height tags. Obviously works only with JPEGs.

                             @method setExif
                             @param {String} tag Tag to set
                             @param {Mixed} value Value to assign to the tag
                             */
                            setExif: function() {},

                            /**
                             Restores headers to the source.

                             @method writeHeaders
                             @param {String} data Image source as binary string
                             @return {String} Updated binary string
                             */
                            writeHeaders: function(data) {
                                return data;
                            },

                            /**
                             Strip all headers from the source.

                             @method stripHeaders
                             @param {String} data Image source as binary string
                             @return {String} Updated binary string
                             */
                            stripHeaders: function(data) {
                                return data;
                            },

                            /**
                             Dispose resources.

                             @method purge
                             */
                            purge: function() {
                                data = null;
                            }
                        });

                        Basic.extend(this, _img);

                        this.purge = function() {
                            _img.purge();
                            _img = null;
                        };
                    };
                });

// Included from: src/javascript/runtime/html5/image/ResizerCanvas.js

                /**
                 * ResizerCanvas.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 * Resizes image/canvas using canvas
                 */
                define("moxie/runtime/html5/image/ResizerCanvas", [], function() {

                    function scale(image, ratio) {
                        var sW = image.width;
                        var dW = Math.floor(sW * ratio);
                        var scaleCapped = false;

                        if (ratio < 0.5 || ratio > 2) {
                            ratio = ratio < 0.5 ? 0.5 : 2;
                            scaleCapped = true;
                        }

                        var tCanvas = _scale(image, ratio);

                        if (scaleCapped) {
                            return scale(tCanvas, dW / tCanvas.width);
                        } else {
                            return tCanvas;
                        }
                    }


                    function _scale(image, ratio) {
                        var sW = image.width;
                        var sH = image.height;
                        var dW = Math.floor(sW * ratio);
                        var dH = Math.floor(sH * ratio);

                        var canvas = document.createElement('canvas');
                        canvas.width = dW;
                        canvas.height = dH;
                        canvas.getContext("2d").drawImage(image, 0, 0, sW, sH, 0, 0, dW, dH);

                        image = null; // just in case
                        return canvas;
                    }

                    return {
                        scale: scale
                    };

                });

// Included from: src/javascript/runtime/html5/image/Image.js

                /**
                 * Image.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html5/image/Image
                 @private
                 */
                define("moxie/runtime/html5/image/Image", [
                    "moxie/runtime/html5/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/core/Exceptions",
                    "moxie/core/utils/Encode",
                    "moxie/file/Blob",
                    "moxie/file/File",
                    "moxie/runtime/html5/image/ImageInfo",
                    "moxie/runtime/html5/image/ResizerCanvas",
                    "moxie/core/utils/Mime",
                    "moxie/core/utils/Env"
                ], function(extensions, Basic, x, Encode, Blob, File, ImageInfo, ResizerCanvas, Mime, Env) {

                    function HTML5Image() {
                        var me = this
                            , _img, _imgInfo, _canvas, _binStr, _blob
                            , _modified = false // is set true whenever image is modified
                            , _preserveHeaders = true
                        ;

                        Basic.extend(this, {
                            loadFromBlob: function(blob) {
                                var I = this.getRuntime()
                                    , asBinary = arguments.length > 1 ? arguments[1] : true
                                ;

                                if (!I.can('access_binary')) {
                                    throw new x.RuntimeError(x.RuntimeError.NOT_SUPPORTED_ERR);
                                }

                                _blob = blob;

                                if (blob.isDetached()) {
                                    _binStr = blob.getSource();
                                    _preload.call(this, _binStr);
                                    return;
                                } else {
                                    _readAsDataUrl.call(this, blob.getSource(), function(dataUrl) {
                                        if (asBinary) {
                                            _binStr = _toBinary(dataUrl);
                                        }
                                        _preload.call(this, dataUrl);
                                    });
                                }
                            },

                            loadFromImage: function(img, exact) {
                                this.meta = img.meta;

                                _blob = new File(null, {
                                    name: img.name,
                                    size: img.size,
                                    type: img.type
                                });

                                _preload.call(this, exact ? (_binStr = img.getAsBinaryString()) : img.getAsDataURL());
                            },

                            getInfo: function() {
                                var I = this.getRuntime(), info;

                                if (!_imgInfo && _binStr && I.can('access_image_binary')) {
                                    _imgInfo = new ImageInfo(_binStr);
                                }

                                // this stuff below is definitely having fun with itself
                                info = {
                                    width: _getImg().width || 0,
                                    height: _getImg().height || 0,
                                    type: _blob.type || Mime.getFileMime(_blob.name),
                                    size: _binStr && _binStr.length || _blob.size || 0,
                                    name: _blob.name || '',
                                    meta: null
                                };

                                if (_preserveHeaders) {
                                    info.meta = _imgInfo && _imgInfo.meta || this.meta || {};

                                    // if data was taken from ImageInfo it will be a binary string, so we convert it to blob
                                    if (info.meta && info.meta.thumb && !(info.meta.thumb.data instanceof Blob)) {
                                        info.meta.thumb.data = new Blob(null, {
                                            type: 'image/jpeg',
                                            data: info.meta.thumb.data
                                        });
                                    }
                                }

                                return info;
                            },


                            resize: function(rect, ratio, options) {
                                var canvas = document.createElement('canvas');
                                canvas.width = rect.width;
                                canvas.height = rect.height;

                                canvas.getContext("2d").drawImage(_getImg(), rect.x, rect.y, rect.width, rect.height, 0, 0, canvas.width, canvas.height);

                                _canvas = ResizerCanvas.scale(canvas, ratio);

                                _preserveHeaders = options.preserveHeaders;

                                // rotate if required, according to orientation tag
                                if (!_preserveHeaders) {
                                    var orientation = (this.meta && this.meta.tiff && this.meta.tiff.Orientation) || 1;
                                    _canvas = _rotateToOrientaion(_canvas, orientation);
                                }

                                this.width = _canvas.width;
                                this.height = _canvas.height;

                                _modified = true;

                                this.trigger('Resize');
                            },

                            getAsCanvas: function() {
                                if (!_canvas) {
                                    _canvas = _getCanvas();
                                }
                                _canvas.id = this.uid + '_canvas';
                                return _canvas;
                            },

                            getAsBlob: function(type, quality) {
                                if (type !== this.type) {
                                    _modified = true; // reconsider the state
                                    return new File(null, {
                                        name: _blob.name || '',
                                        type: type,
                                        data: me.getAsDataURL(type, quality)
                                    });
                                }
                                return new File(null, {
                                    name: _blob.name || '',
                                    type: type,
                                    data: me.getAsBinaryString(type, quality)
                                });
                            },

                            getAsDataURL: function(type) {
                                var quality = arguments[1] || 90;

                                // if image has not been modified, return the source right away
                                if (!_modified) {
                                    return _img.src;
                                }

                                // make sure we have a canvas to work with
                                _getCanvas();

                                if ('image/jpeg' !== type) {
                                    return _canvas.toDataURL('image/png');
                                } else {
                                    try {
                                        // older Geckos used to result in an exception on quality argument
                                        return _canvas.toDataURL('image/jpeg', quality/100);
                                    } catch (ex) {
                                        return _canvas.toDataURL('image/jpeg');
                                    }
                                }
                            },

                            getAsBinaryString: function(type, quality) {
                                // if image has not been modified, return the source right away
                                if (!_modified) {
                                    // if image was not loaded from binary string
                                    if (!_binStr) {
                                        _binStr = _toBinary(me.getAsDataURL(type, quality));
                                    }
                                    return _binStr;
                                }

                                if ('image/jpeg' !== type) {
                                    _binStr = _toBinary(me.getAsDataURL(type, quality));
                                } else {
                                    var dataUrl;

                                    // if jpeg
                                    if (!quality) {
                                        quality = 90;
                                    }

                                    // make sure we have a canvas to work with
                                    _getCanvas();

                                    try {
                                        // older Geckos used to result in an exception on quality argument
                                        dataUrl = _canvas.toDataURL('image/jpeg', quality/100);
                                    } catch (ex) {
                                        dataUrl = _canvas.toDataURL('image/jpeg');
                                    }

                                    _binStr = _toBinary(dataUrl);

                                    if (_imgInfo) {
                                        _binStr = _imgInfo.stripHeaders(_binStr);

                                        if (_preserveHeaders) {
                                            // update dimensions info in exif
                                            if (_imgInfo.meta && _imgInfo.meta.exif) {
                                                _imgInfo.setExif({
                                                    PixelXDimension: this.width,
                                                    PixelYDimension: this.height
                                                });
                                            }

                                            // re-inject the headers
                                            _binStr = _imgInfo.writeHeaders(_binStr);
                                        }

                                        // will be re-created from fresh on next getInfo call
                                        _imgInfo.purge();
                                        _imgInfo = null;
                                    }
                                }

                                _modified = false;

                                return _binStr;
                            },

                            destroy: function() {
                                me = null;
                                _purge.call(this);
                                this.getRuntime().getShim().removeInstance(this.uid);
                            }
                        });


                        function _getImg() {
                            if (!_canvas && !_img) {
                                throw new x.ImageError(x.DOMException.INVALID_STATE_ERR);
                            }
                            return _canvas || _img;
                        }


                        function _getCanvas() {
                            var canvas = _getImg();
                            if (canvas.nodeName.toLowerCase() == 'canvas') {
                                return canvas;
                            }
                            _canvas = document.createElement('canvas');
                            _canvas.width = canvas.width;
                            _canvas.height = canvas.height;
                            _canvas.getContext("2d").drawImage(canvas, 0, 0);
                            return _canvas;
                        }


                        function _toBinary(str) {
                            return Encode.atob(str.substring(str.indexOf('base64,') + 7));
                        }


                        function _toDataUrl(str, type) {
                            return 'data:' + (type || '') + ';base64,' + Encode.btoa(str);
                        }


                        function _preload(str) {
                            var comp = this;

                            _img = new Image();
                            _img.onerror = function() {
                                _purge.call(this);
                                comp.trigger('error', x.ImageError.WRONG_FORMAT);
                            };
                            _img.onload = function() {
                                comp.trigger('load');
                            };

                            _img.src = str.substr(0, 5) == 'data:' ? str : _toDataUrl(str, _blob.type);
                        }


                        function _readAsDataUrl(file, callback) {
                            var comp = this, fr;

                            // use FileReader if it's available
                            if (window.FileReader) {
                                fr = new FileReader();
                                fr.onload = function() {
                                    callback.call(comp, this.result);
                                };
                                fr.onerror = function() {
                                    comp.trigger('error', x.ImageError.WRONG_FORMAT);
                                };
                                fr.readAsDataURL(file);
                            } else {
                                return callback.call(this, file.getAsDataURL());
                            }
                        }

                        /**
                         * Transform canvas coordination according to specified frame size and orientation
                         * Orientation value is from EXIF tag
                         * @author Shinichi Tomita <shinichi.tomita@gmail.com>
                         */
                        function _rotateToOrientaion(img, orientation) {
                            var RADIANS = Math.PI/180;
                            var canvas = document.createElement('canvas');
                            var ctx = canvas.getContext('2d');
                            var width = img.width;
                            var height = img.height;

                            if (Basic.inArray(orientation, [5,6,7,8]) > -1) {
                                canvas.width = height;
                                canvas.height = width;
                            } else {
                                canvas.width = width;
                                canvas.height = height;
                            }

                            /**
                             1 = The 0th row is at the visual top of the image, and the 0th column is the visual left-hand side.
                             2 = The 0th row is at the visual top of the image, and the 0th column is the visual right-hand side.
                             3 = The 0th row is at the visual bottom of the image, and the 0th column is the visual right-hand side.
                             4 = The 0th row is at the visual bottom of the image, and the 0th column is the visual left-hand side.
                             5 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual top.
                             6 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual top.
                             7 = The 0th row is the visual right-hand side of the image, and the 0th column is the visual bottom.
                             8 = The 0th row is the visual left-hand side of the image, and the 0th column is the visual bottom.
                             */
                            switch (orientation) {
                                case 2:
                                    // horizontal flip
                                    ctx.translate(width, 0);
                                    ctx.scale(-1, 1);
                                    break;
                                case 3:
                                    // 180 rotate left
                                    ctx.translate(width, height);
                                    ctx.rotate(180 * RADIANS);
                                    break;
                                case 4:
                                    // vertical flip
                                    ctx.translate(0, height);
                                    ctx.scale(1, -1);
                                    break;
                                case 5:
                                    // vertical flip + 90 rotate right
                                    ctx.rotate(90 * RADIANS);
                                    ctx.scale(1, -1);
                                    break;
                                case 6:
                                    // 90 rotate right
                                    ctx.rotate(90 * RADIANS);
                                    ctx.translate(0, -height);
                                    break;
                                case 7:
                                    // horizontal flip + 90 rotate right
                                    ctx.rotate(90 * RADIANS);
                                    ctx.translate(width, -height);
                                    ctx.scale(-1, 1);
                                    break;
                                case 8:
                                    // 90 rotate left
                                    ctx.rotate(-90 * RADIANS);
                                    ctx.translate(-width, 0);
                                    break;
                            }

                            ctx.drawImage(img, 0, 0, width, height);
                            return canvas;
                        }


                        function _purge() {
                            if (_imgInfo) {
                                _imgInfo.purge();
                                _imgInfo = null;
                            }

                            _binStr = _img = _canvas = _blob = null;
                            _modified = false;
                        }
                    }

                    return (extensions.Image = HTML5Image);
                });

// Included from: src/javascript/runtime/flash/Runtime.js

                /**
                 * Runtime.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /*global ActiveXObject:true */

                /**
                 Defines constructor for Flash runtime.

                 @class moxie/runtime/flash/Runtime
                 @private
                 */
                define("moxie/runtime/flash/Runtime", [
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Env",
                    "moxie/core/utils/Dom",
                    "moxie/core/Exceptions",
                    "moxie/runtime/Runtime"
                ], function(Basic, Env, Dom, x, Runtime) {

                    var type = 'flash', extensions = {};

                    /**
                     Get the version of the Flash Player

                     @method getShimVersion
                     @private
                     @return {Number} Flash Player version
                     */
                    function getShimVersion() {
                        var version;

                        try {
                            version = navigator.plugins['Shockwave Flash'];
                            version = version.description;
                        } catch (e1) {
                            try {
                                version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
                            } catch (e2) {
                                version = '0.0';
                            }
                        }
                        version = version.match(/\d+/g);
                        return parseFloat(version[0] + '.' + version[1]);
                    }


                    /**
                     Cross-browser SWF removal
                     - Especially needed to safely and completely remove a SWF in Internet Explorer

                     Originated from SWFObject v2.2 <http://code.google.com/p/swfobject/>
                     */
                    function removeSWF(id) {
                        var obj = Dom.get(id);
                        if (obj && obj.nodeName == "OBJECT") {
                            if (Env.browser === 'IE') {
                                obj.style.display = "none";
                                (function onInit(){
                                    // http://msdn.microsoft.com/en-us/library/ie/ms534360(v=vs.85).aspx
                                    if (obj.readyState == 4) {
                                        removeObjectInIE(id);
                                    }
                                    else {
                                        setTimeout(onInit, 10);
                                    }
                                })();
                            }
                            else {
                                obj.parentNode.removeChild(obj);
                            }
                        }
                    }


                    function removeObjectInIE(id) {
                        var obj = Dom.get(id);
                        if (obj) {
                            for (var i in obj) {
                                if (typeof obj[i] == "function") {
                                    obj[i] = null;
                                }
                            }
                            obj.parentNode.removeChild(obj);
                        }
                    }

                    /**
                     Constructor for the Flash Runtime

                     @class FlashRuntime
                     @extends Runtime
                     */
                    function FlashRuntime(options) {
                        var I = this, initTimer;

                        options = Basic.extend({ swf_url: Env.swf_url }, options);

                        Runtime.call(this, options, type, {
                            access_binary: function(value) {
                                return value && I.mode === 'browser';
                            },
                            access_image_binary: function(value) {
                                return value && I.mode === 'browser';
                            },
                            display_media: Runtime.capTest(defined('moxie/image/Image')),
                            do_cors: Runtime.capTrue,
                            drag_and_drop: false,
                            report_upload_progress: function() {
                                return I.mode === 'client';
                            },
                            resize_image: Runtime.capTrue,
                            return_response_headers: false,
                            return_response_type: function(responseType) {
                                if (responseType === 'json' && !!window.JSON) {
                                    return true;
                                }
                                return !Basic.arrayDiff(responseType, ['', 'text', 'document']) || I.mode === 'browser';
                            },
                            return_status_code: function(code) {
                                return I.mode === 'browser' || !Basic.arrayDiff(code, [200, 404]);
                            },
                            select_file: Runtime.capTrue,
                            select_multiple: Runtime.capTrue,
                            send_binary_string: function(value) {
                                return value && I.mode === 'browser';
                            },
                            send_browser_cookies: function(value) {
                                return value && I.mode === 'browser';
                            },
                            send_custom_headers: function(value) {
                                return value && I.mode === 'browser';
                            },
                            send_multipart: Runtime.capTrue,
                            slice_blob: function(value) {
                                return value && I.mode === 'browser';
                            },
                            stream_upload: function(value) {
                                return value && I.mode === 'browser';
                            },
                            summon_file_dialog: false,
                            upload_filesize: function(size) {
                                return Basic.parseSizeStr(size) <= 2097152 || I.mode === 'client';
                            },
                            use_http_method: function(methods) {
                                return !Basic.arrayDiff(methods, ['GET', 'POST']);
                            }
                        }, {
                            // capabilities that require specific mode
                            access_binary: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            access_image_binary: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            report_upload_progress: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            return_response_type: function(responseType) {
                                return Basic.arrayDiff(responseType, ['', 'text', 'json', 'document']) ? 'browser' : ['client', 'browser'];
                            },
                            return_status_code: function(code) {
                                return Basic.arrayDiff(code, [200, 404]) ? 'browser' : ['client', 'browser'];
                            },
                            send_binary_string: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            send_browser_cookies: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            send_custom_headers: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            slice_blob: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            stream_upload: function(value) {
                                return value ? 'client' : 'browser';
                            },
                            upload_filesize: function(size) {
                                return Basic.parseSizeStr(size) >= 2097152 ? 'client' : 'browser';
                            }
                        }, 'client');


                        // minimal requirement for Flash Player version
                        if (getShimVersion() < 11.3) {
                            if (MXI_DEBUG && Env.debug.runtime) {
                                Env.log("\tFlash didn't meet minimal version requirement (11.3).");
                            }

                            this.mode = false; // with falsy mode, runtime won't operable, no matter what the mode was before
                        }


                        Basic.extend(this, {

                            getShim: function() {
                                return Dom.get(this.uid);
                            },

                            shimExec: function(component, action) {
                                var args = [].slice.call(arguments, 2);
                                return I.getShim().exec(this.uid, component, action, args);
                            },

                            init: function() {
                                var html, el, container;

                                container = this.getShimContainer();

                                // if not the minimal height, shims are not initialized in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
                                Basic.extend(container.style, {
                                    position: 'absolute',
                                    top: '-8px',
                                    left: '-8px',
                                    width: '9px',
                                    height: '9px',
                                    overflow: 'hidden'
                                });

                                // insert flash object
                                html = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' +  options.swf_url + '" ';

                                if (Env.browser === 'IE') {
                                    html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                                }

                                html += 'width="100%" height="100%" style="outline:0">'  +
                                    '<param name="movie" value="' + options.swf_url + '" />' +
                                    '<param name="flashvars" value="uid=' + escape(this.uid) + '&target=' + Env.global_event_dispatcher + '" />' +
                                    '<param name="wmode" value="transparent" />' +
                                    '<param name="allowscriptaccess" value="always" />' +
                                    '</object>';

                                if (Env.browser === 'IE') {
                                    el = document.createElement('div');
                                    container.appendChild(el);
                                    el.outerHTML = html;
                                    el = container = null; // just in case
                                } else {
                                    container.innerHTML = html;
                                }

                                // Init is dispatched by the shim
                                initTimer = setTimeout(function() {
                                    if (I && !I.initialized) { // runtime might be already destroyed by this moment
                                        I.trigger("Error", new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));

                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("\tFlash failed to initialize within a specified period of time (typically 5s).");
                                        }
                                    }
                                }, 5000);
                            },

                            destroy: (function(destroy) { // extend default destroy method
                                return function() {
                                    removeSWF(I.uid); // SWF removal requires special care in IE

                                    destroy.call(I);
                                    clearTimeout(initTimer); // initialization check might be still onwait
                                    options = initTimer = destroy = I = null;
                                };
                            }(this.destroy))

                        }, extensions);
                    }

                    Runtime.addConstructor(type, FlashRuntime);

                    return extensions;
                });

// Included from: src/javascript/runtime/flash/file/Blob.js

                /**
                 * Blob.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/file/Blob
                 @private
                 */
                define("moxie/runtime/flash/file/Blob", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/file/Blob"
                ], function(extensions, Blob) {

                    var FlashBlob = {
                        slice: function(blob, start, end, type) {
                            var self = this.getRuntime();

                            if (start < 0) {
                                start = Math.max(blob.size + start, 0);
                            } else if (start > 0) {
                                start = Math.min(start, blob.size);
                            }

                            if (end < 0) {
                                end = Math.max(blob.size + end, 0);
                            } else if (end > 0) {
                                end = Math.min(end, blob.size);
                            }

                            blob = self.shimExec.call(this, 'Blob', 'slice', start, end, type || '');

                            if (blob) {
                                blob = new Blob(self.uid, blob);
                            }
                            return blob;
                        }
                    };

                    return (extensions.Blob = FlashBlob);
                });

// Included from: src/javascript/runtime/flash/file/FileInput.js

                /**
                 * FileInput.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/file/FileInput
                 @private
                 */
                define("moxie/runtime/flash/file/FileInput", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/file/File",
                    "moxie/core/utils/Basic"
                ], function(extensions, File, Basic) {

                    var FileInput = {
                        init: function(options) {
                            var comp = this, I = this.getRuntime();

                            this.bind("Change", function() {
                                var files = I.shimExec.call(comp, 'FileInput', 'getFiles');
                                comp.files = [];
                                Basic.each(files, function(file) {
                                    comp.files.push(new File(I.uid, file));
                                });
                            }, 999);

                            this.getRuntime().shimExec.call(this, 'FileInput', 'init', {
                                accept: options.accept,
                                multiple: options.multiple
                            });

                            this.trigger('ready');
                        }
                    };

                    return (extensions.FileInput = FileInput);
                });

// Included from: src/javascript/runtime/flash/file/FileReader.js

                /**
                 * FileReader.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/file/FileReader
                 @private
                 */
                define("moxie/runtime/flash/file/FileReader", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/core/utils/Encode"
                ], function(extensions, Encode) {

                    function _formatData(data, op) {
                        switch (op) {
                            case 'readAsText':
                                return Encode.atob(data, 'utf8');
                            case 'readAsBinaryString':
                                return Encode.atob(data);
                            case 'readAsDataURL':
                                return data;
                        }
                        return null;
                    }

                    var FileReader = {
                        read: function(op, blob) {
                            var comp = this;

                            comp.result = '';

                            // special prefix for DataURL read mode
                            if (op === 'readAsDataURL') {
                                comp.result = 'data:' + (blob.type || '') + ';base64,';
                            }

                            comp.bind('Progress', function(e, data) {
                                if (data) {
                                    comp.result += _formatData(data, op);
                                }
                            }, 999);

                            return comp.getRuntime().shimExec.call(this, 'FileReader', 'readAsBase64', blob.uid);
                        }
                    };

                    return (extensions.FileReader = FileReader);
                });

// Included from: src/javascript/runtime/flash/file/FileReaderSync.js

                /**
                 * FileReaderSync.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/file/FileReaderSync
                 @private
                 */
                define("moxie/runtime/flash/file/FileReaderSync", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/core/utils/Encode"
                ], function(extensions, Encode) {

                    function _formatData(data, op) {
                        switch (op) {
                            case 'readAsText':
                                return Encode.atob(data, 'utf8');
                            case 'readAsBinaryString':
                                return Encode.atob(data);
                            case 'readAsDataURL':
                                return data;
                        }
                        return null;
                    }

                    var FileReaderSync = {
                        read: function(op, blob) {
                            var result, self = this.getRuntime();

                            result = self.shimExec.call(this, 'FileReaderSync', 'readAsBase64', blob.uid);
                            if (!result) {
                                return null; // or throw ex
                            }

                            // special prefix for DataURL read mode
                            if (op === 'readAsDataURL') {
                                result = 'data:' + (blob.type || '') + ';base64,' + result;
                            }

                            return _formatData(result, op, blob.type);
                        }
                    };

                    return (extensions.FileReaderSync = FileReaderSync);
                });

// Included from: src/javascript/runtime/flash/runtime/Transporter.js

                /**
                 * Transporter.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/runtime/Transporter
                 @private
                 */
                define("moxie/runtime/flash/runtime/Transporter", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/file/Blob"
                ], function(extensions, Blob) {

                    var Transporter = {
                        getAsBlob: function(type) {
                            var self = this.getRuntime()
                                , blob = self.shimExec.call(this, 'Transporter', 'getAsBlob', type)
                            ;
                            if (blob) {
                                return new Blob(self.uid, blob);
                            }
                            return null;
                        }
                    };

                    return (extensions.Transporter = Transporter);
                });

// Included from: src/javascript/runtime/flash/xhr/XMLHttpRequest.js

                /**
                 * XMLHttpRequest.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/xhr/XMLHttpRequest
                 @private
                 */
                define("moxie/runtime/flash/xhr/XMLHttpRequest", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/file/Blob",
                    "moxie/file/File",
                    "moxie/file/FileReaderSync",
                    "moxie/runtime/flash/file/FileReaderSync",
                    "moxie/xhr/FormData",
                    "moxie/runtime/Transporter",
                    "moxie/runtime/flash/runtime/Transporter"
                ], function(extensions, Basic, Blob, File, FileReaderSync, FileReaderSyncFlash, FormData, Transporter, TransporterFlash) {

                    var XMLHttpRequest = {

                        send: function(meta, data) {
                            var target = this, self = target.getRuntime();

                            function send() {
                                meta.transport = self.mode;
                                self.shimExec.call(target, 'XMLHttpRequest', 'send', meta, data);
                            }


                            function appendBlob(name, blob) {
                                self.shimExec.call(target, 'XMLHttpRequest', 'appendBlob', name, blob.uid);
                                data = null;
                                send();
                            }


                            function attachBlob(blob, cb) {
                                var tr = new Transporter();

                                tr.bind("TransportingComplete", function() {
                                    cb(this.result);
                                });

                                tr.transport(blob.getSource(), blob.type, {
                                    ruid: self.uid
                                });
                            }

                            // copy over the headers if any
                            if (!Basic.isEmptyObj(meta.headers)) {
                                Basic.each(meta.headers, function(value, header) {
                                    self.shimExec.call(target, 'XMLHttpRequest', 'setRequestHeader', header, value.toString()); // Silverlight doesn't accept integers into the arguments of type object
                                });
                            }

                            // transfer over multipart params and blob itself
                            if (data instanceof FormData) {
                                var blobField;
                                data.each(function(value, name) {
                                    if (value instanceof Blob) {
                                        blobField = name;
                                    } else {
                                        self.shimExec.call(target, 'XMLHttpRequest', 'append', name, value);
                                    }
                                });

                                if (!data.hasBlob()) {
                                    data = null;
                                    send();
                                } else {
                                    var blob = data.getBlob();
                                    if (blob.isDetached()) {
                                        attachBlob(blob, function(attachedBlob) {
                                            blob.destroy();
                                            appendBlob(blobField, attachedBlob);
                                        });
                                    } else {
                                        appendBlob(blobField, blob);
                                    }
                                }
                            } else if (data instanceof Blob) {
                                if (data.isDetached()) {
                                    attachBlob(data, function(attachedBlob) {
                                        data.destroy();
                                        data = attachedBlob.uid;
                                        send();
                                    });
                                } else {
                                    data = data.uid;
                                    send();
                                }
                            } else {
                                send();
                            }
                        },

                        getResponse: function(responseType) {
                            var frs, blob, self = this.getRuntime();

                            blob = self.shimExec.call(this, 'XMLHttpRequest', 'getResponseAsBlob');

                            if (blob) {
                                blob = new File(self.uid, blob);

                                if ('blob' === responseType) {
                                    return blob;
                                }

                                try {
                                    frs = new FileReaderSync();

                                    if (!!~Basic.inArray(responseType, ["", "text"])) {
                                        return frs.readAsText(blob);
                                    } else if ('json' === responseType && !!window.JSON) {
                                        return JSON.parse(frs.readAsText(blob));
                                    }
                                } finally {
                                    blob.destroy();
                                }
                            }
                            return null;
                        },

                        abort: function(upload_complete_flag) {
                            var self = this.getRuntime();

                            self.shimExec.call(this, 'XMLHttpRequest', 'abort');

                            this.dispatchEvent('readystatechange');
                            // this.dispatchEvent('progress');
                            this.dispatchEvent('abort');

                            //if (!upload_complete_flag) {
                            // this.dispatchEvent('uploadprogress');
                            //}
                        }
                    };

                    return (extensions.XMLHttpRequest = XMLHttpRequest);
                });

// Included from: src/javascript/runtime/flash/image/Image.js

                /**
                 * Image.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/flash/image/Image
                 @private
                 */
                define("moxie/runtime/flash/image/Image", [
                    "moxie/runtime/flash/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/Transporter",
                    "moxie/file/Blob",
                    "moxie/file/FileReaderSync"
                ], function(extensions, Basic, Transporter, Blob, FileReaderSync) {

                    var Image = {
                        loadFromBlob: function(blob) {
                            var comp = this, self = comp.getRuntime();

                            function exec(srcBlob) {
                                self.shimExec.call(comp, 'Image', 'loadFromBlob', srcBlob.uid);
                                comp = self = null;
                            }

                            if (blob.isDetached()) { // binary string
                                var tr = new Transporter();
                                tr.bind("TransportingComplete", function() {
                                    exec(tr.result.getSource());
                                });
                                tr.transport(blob.getSource(), blob.type, { ruid: self.uid });
                            } else {
                                exec(blob.getSource());
                            }
                        },

                        loadFromImage: function(img) {
                            var self = this.getRuntime();
                            return self.shimExec.call(this, 'Image', 'loadFromImage', img.uid);
                        },

                        getInfo: function() {
                            var self = this.getRuntime()
                                , info = self.shimExec.call(this, 'Image', 'getInfo')
                            ;

                            if (info.meta && info.meta.thumb && info.meta.thumb.data && !(self.meta.thumb.data instanceof Blob)) {
                                info.meta.thumb.data = new Blob(self.uid, info.meta.thumb.data);
                            }
                            return info;
                        },

                        getAsBlob: function(type, quality) {
                            var self = this.getRuntime()
                                , blob = self.shimExec.call(this, 'Image', 'getAsBlob', type, quality)
                            ;
                            if (blob) {
                                return new Blob(self.uid, blob);
                            }
                            return null;
                        },

                        getAsDataURL: function() {
                            var self = this.getRuntime()
                                , blob = self.Image.getAsBlob.apply(this, arguments)
                                , frs
                            ;
                            if (!blob) {
                                return null;
                            }
                            frs = new FileReaderSync();
                            return frs.readAsDataURL(blob);
                        }
                    };

                    return (extensions.Image = Image);
                });

// Included from: src/javascript/runtime/silverlight/Runtime.js

                /**
                 * RunTime.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /*global ActiveXObject:true */

                /**
                 Defines constructor for Silverlight runtime.

                 @class moxie/runtime/silverlight/Runtime
                 @private
                 */
                define("moxie/runtime/silverlight/Runtime", [
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Env",
                    "moxie/core/utils/Dom",
                    "moxie/core/Exceptions",
                    "moxie/runtime/Runtime"
                ], function(Basic, Env, Dom, x, Runtime) {

                    var type = "silverlight", extensions = {};

                    function isInstalled(version) {
                        var isVersionSupported = false, control = null, actualVer,
                            actualVerArray, reqVerArray, requiredVersionPart, actualVersionPart, index = 0;

                        try {
                            try {
                                control = new ActiveXObject('AgControl.AgControl');

                                if (control.IsVersionSupported(version)) {
                                    isVersionSupported = true;
                                }

                                control = null;
                            } catch (e) {
                                var plugin = navigator.plugins["Silverlight Plug-In"];

                                if (plugin) {
                                    actualVer = plugin.description;

                                    if (actualVer === "1.0.30226.2") {
                                        actualVer = "2.0.30226.2";
                                    }

                                    actualVerArray = actualVer.split(".");

                                    while (actualVerArray.length > 3) {
                                        actualVerArray.pop();
                                    }

                                    while ( actualVerArray.length < 4) {
                                        actualVerArray.push(0);
                                    }

                                    reqVerArray = version.split(".");

                                    while (reqVerArray.length > 4) {
                                        reqVerArray.pop();
                                    }

                                    do {
                                        requiredVersionPart = parseInt(reqVerArray[index], 10);
                                        actualVersionPart = parseInt(actualVerArray[index], 10);
                                        index++;
                                    } while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);

                                    if (requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart)) {
                                        isVersionSupported = true;
                                    }
                                }
                            }
                        } catch (e2) {
                            isVersionSupported = false;
                        }

                        return isVersionSupported;
                    }

                    /**
                     Constructor for the Silverlight Runtime

                     @class SilverlightRuntime
                     @extends Runtime
                     */
                    function SilverlightRuntime(options) {
                        var I = this, initTimer;

                        options = Basic.extend({ xap_url: Env.xap_url }, options);

                        Runtime.call(this, options, type, {
                            access_binary: Runtime.capTrue,
                            access_image_binary: Runtime.capTrue,
                            display_media: Runtime.capTest(defined('moxie/image/Image')),
                            do_cors: Runtime.capTrue,
                            drag_and_drop: false,
                            report_upload_progress: Runtime.capTrue,
                            resize_image: Runtime.capTrue,
                            return_response_headers: function(value) {
                                return value && I.mode === 'client';
                            },
                            return_response_type: function(responseType) {
                                if (responseType !== 'json') {
                                    return true;
                                } else {
                                    return !!window.JSON;
                                }
                            },
                            return_status_code: function(code) {
                                return I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);
                            },
                            select_file: Runtime.capTrue,
                            select_multiple: Runtime.capTrue,
                            send_binary_string: Runtime.capTrue,
                            send_browser_cookies: function(value) {
                                return value && I.mode === 'browser';
                            },
                            send_custom_headers: function(value) {
                                return value && I.mode === 'client';
                            },
                            send_multipart: Runtime.capTrue,
                            slice_blob: Runtime.capTrue,
                            stream_upload: true,
                            summon_file_dialog: false,
                            upload_filesize: Runtime.capTrue,
                            use_http_method: function(methods) {
                                return I.mode === 'client' || !Basic.arrayDiff(methods, ['GET', 'POST']);
                            }
                        }, {
                            // capabilities that require specific mode
                            return_response_headers: function(value) {
                                return value ? 'client' : 'browser';
                            },
                            return_status_code: function(code) {
                                return Basic.arrayDiff(code, [200, 404]) ? 'client' : ['client', 'browser'];
                            },
                            send_browser_cookies: function(value) {
                                return value ? 'browser' : 'client';
                            },
                            send_custom_headers: function(value) {
                                return value ? 'client' : 'browser';
                            },
                            use_http_method: function(methods) {
                                return Basic.arrayDiff(methods, ['GET', 'POST']) ? 'client' : ['client', 'browser'];
                            }
                        });


                        // minimal requirement
                        if (!isInstalled('2.0.31005.0') || Env.browser === 'Opera') {
                            if (MXI_DEBUG && Env.debug.runtime) {
                                Env.log("\tSilverlight is not installed or minimal version (2.0.31005.0) requirement not met (not likely).");
                            }

                            this.mode = false;
                        }


                        Basic.extend(this, {
                            getShim: function() {
                                return Dom.get(this.uid).content.Moxie;
                            },

                            shimExec: function(component, action) {
                                var args = [].slice.call(arguments, 2);
                                return I.getShim().exec(this.uid, component, action, args);
                            },

                            init : function() {
                                var container;

                                container = this.getShimContainer();

                                container.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">' +
                                    '<param name="source" value="' + options.xap_url + '"/>' +
                                    '<param name="background" value="Transparent"/>' +
                                    '<param name="windowless" value="true"/>' +
                                    '<param name="enablehtmlaccess" value="true"/>' +
                                    '<param name="initParams" value="uid=' + this.uid + ',target=' + Env.global_event_dispatcher + '"/>' +
                                    '</object>';

                                // Init is dispatched by the shim
                                initTimer = setTimeout(function() {
                                    if (I && !I.initialized) { // runtime might be already destroyed by this moment
                                        I.trigger("Error", new x.RuntimeError(x.RuntimeError.NOT_INIT_ERR));

                                        if (MXI_DEBUG && Env.debug.runtime) {
                                            Env.log("\Silverlight failed to initialize within a specified period of time (5-10s).");
                                        }
                                    }
                                }, Env.OS !== 'Windows'? 10000 : 5000); // give it more time to initialize in non Windows OS (like Mac)
                            },

                            destroy: (function(destroy) { // extend default destroy method
                                return function() {
                                    destroy.call(I);
                                    clearTimeout(initTimer); // initialization check might be still onwait
                                    options = initTimer = destroy = I = null;
                                };
                            }(this.destroy))

                        }, extensions);
                    }

                    Runtime.addConstructor(type, SilverlightRuntime);

                    return extensions;
                });

// Included from: src/javascript/runtime/silverlight/file/Blob.js

                /**
                 * Blob.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/file/Blob
                 @private
                 */
                define("moxie/runtime/silverlight/file/Blob", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/flash/file/Blob"
                ], function(extensions, Basic, Blob) {
                    return (extensions.Blob = Basic.extend({}, Blob));
                });

// Included from: src/javascript/runtime/silverlight/file/FileInput.js

                /**
                 * FileInput.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/file/FileInput
                 @private
                 */
                define("moxie/runtime/silverlight/file/FileInput", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/file/File",
                    "moxie/core/utils/Basic"
                ], function(extensions, File, Basic) {

                    function toFilters(accept) {
                        var filter = '';
                        for (var i = 0; i < accept.length; i++) {
                            filter += (filter !== '' ? '|' : '') + accept[i].title + " | *." + accept[i].extensions.replace(/,/g, ';*.');
                        }
                        return filter;
                    }


                    var FileInput = {
                        init: function(options) {
                            var comp = this, I = this.getRuntime();

                            this.bind("Change", function() {
                                var files = I.shimExec.call(comp, 'FileInput', 'getFiles');
                                comp.files = [];
                                Basic.each(files, function(file) {
                                    comp.files.push(new File(I.uid, file));
                                });
                            }, 999);

                            I.shimExec.call(this, 'FileInput', 'init', toFilters(options.accept), options.multiple);
                            this.trigger('ready');
                        },

                        setOption: function(name, value) {
                            if (name == 'accept') {
                                value = toFilters(value);
                            }
                            this.getRuntime().shimExec.call(this, 'FileInput', 'setOption', name, value);
                        }
                    };

                    return (extensions.FileInput = FileInput);
                });

// Included from: src/javascript/runtime/silverlight/file/FileDrop.js

                /**
                 * FileDrop.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/file/FileDrop
                 @private
                 */
                define("moxie/runtime/silverlight/file/FileDrop", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Dom",
                    "moxie/core/utils/Events"
                ], function(extensions, Dom, Events) {

                    // not exactly useful, since works only in safari (...crickets...)
                    var FileDrop = {
                        init: function() {
                            var comp = this, self = comp.getRuntime(), dropZone;

                            dropZone = self.getShimContainer();

                            Events.addEvent(dropZone, 'dragover', function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                e.dataTransfer.dropEffect = 'copy';
                            }, comp.uid);

                            Events.addEvent(dropZone, 'dragenter', function(e) {
                                e.preventDefault();
                                var flag = Dom.get(self.uid).dragEnter(e);
                                // If handled, then stop propagation of event in DOM
                                if (flag) {
                                    e.stopPropagation();
                                }
                            }, comp.uid);

                            Events.addEvent(dropZone, 'drop', function(e) {
                                e.preventDefault();
                                var flag = Dom.get(self.uid).dragDrop(e);
                                // If handled, then stop propagation of event in DOM
                                if (flag) {
                                    e.stopPropagation();
                                }
                            }, comp.uid);

                            return self.shimExec.call(this, 'FileDrop', 'init');
                        }
                    };

                    return (extensions.FileDrop = FileDrop);
                });

// Included from: src/javascript/runtime/silverlight/file/FileReader.js

                /**
                 * FileReader.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/file/FileReader
                 @private
                 */
                define("moxie/runtime/silverlight/file/FileReader", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/flash/file/FileReader"
                ], function(extensions, Basic, FileReader) {
                    return (extensions.FileReader = Basic.extend({}, FileReader));
                });

// Included from: src/javascript/runtime/silverlight/file/FileReaderSync.js

                /**
                 * FileReaderSync.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/file/FileReaderSync
                 @private
                 */
                define("moxie/runtime/silverlight/file/FileReaderSync", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/flash/file/FileReaderSync"
                ], function(extensions, Basic, FileReaderSync) {
                    return (extensions.FileReaderSync = Basic.extend({}, FileReaderSync));
                });

// Included from: src/javascript/runtime/silverlight/runtime/Transporter.js

                /**
                 * Transporter.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/runtime/Transporter
                 @private
                 */
                define("moxie/runtime/silverlight/runtime/Transporter", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/flash/runtime/Transporter"
                ], function(extensions, Basic, Transporter) {
                    return (extensions.Transporter = Basic.extend({}, Transporter));
                });

// Included from: src/javascript/runtime/silverlight/xhr/XMLHttpRequest.js

                /**
                 * XMLHttpRequest.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/xhr/XMLHttpRequest
                 @private
                 */
                define("moxie/runtime/silverlight/xhr/XMLHttpRequest", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/runtime/flash/xhr/XMLHttpRequest",
                    "moxie/runtime/silverlight/file/FileReaderSync",
                    "moxie/runtime/silverlight/runtime/Transporter"
                ], function(extensions, Basic, XMLHttpRequest, FileReaderSyncSilverlight, TransporterSilverlight) {
                    return (extensions.XMLHttpRequest = Basic.extend({}, XMLHttpRequest));
                });

// Included from: src/javascript/runtime/silverlight/image/Image.js

                /**
                 * Image.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/silverlight/image/Image
                 @private
                 */
                define("moxie/runtime/silverlight/image/Image", [
                    "moxie/runtime/silverlight/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/file/Blob",
                    "moxie/runtime/flash/image/Image"
                ], function(extensions, Basic, Blob, Image) {
                    return (extensions.Image = Basic.extend({}, Image, {

                        getInfo: function() {
                            var self = this.getRuntime()
                                , grps = ['tiff', 'exif', 'gps', 'thumb']
                                , info = { meta: {} }
                                , rawInfo = self.shimExec.call(this, 'Image', 'getInfo')
                            ;

                            if (rawInfo.meta) {
                                Basic.each(grps, function(grp) {
                                    var meta = rawInfo.meta[grp]
                                        , tag
                                        , i
                                        , length
                                        , value
                                    ;
                                    if (meta && meta.keys) {
                                        info.meta[grp] = {};
                                        for (i = 0, length = meta.keys.length; i < length; i++) {
                                            tag = meta.keys[i];
                                            value = meta[tag];
                                            if (value) {
                                                // convert numbers
                                                if (/^(\d|[1-9]\d+)$/.test(value)) { // integer (make sure doesn't start with zero)
                                                    value = parseInt(value, 10);
                                                } else if (/^\d*\.\d+$/.test(value)) { // double
                                                    value = parseFloat(value);
                                                }
                                                info.meta[grp][tag] = value;
                                            }
                                        }
                                    }
                                });

                                // save thumb data as blob
                                if (info.meta && info.meta.thumb && info.meta.thumb.data && !(self.meta.thumb.data instanceof Blob)) {
                                    info.meta.thumb.data = new Blob(self.uid, info.meta.thumb.data);
                                }
                            }

                            info.width = parseInt(rawInfo.width, 10);
                            info.height = parseInt(rawInfo.height, 10);
                            info.size = parseInt(rawInfo.size, 10);
                            info.type = rawInfo.type;
                            info.name = rawInfo.name;

                            return info;
                        },

                        resize: function(rect, ratio, opts) {
                            this.getRuntime().shimExec.call(this, 'Image', 'resize', rect.x, rect.y, rect.width, rect.height, ratio, opts.preserveHeaders, opts.resample);
                        }
                    }));
                });

// Included from: src/javascript/runtime/html4/Runtime.js

                /**
                 * Runtime.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /*global File:true */

                /**
                 Defines constructor for HTML4 runtime.

                 @class moxie/runtime/html4/Runtime
                 @private
                 */
                define("moxie/runtime/html4/Runtime", [
                    "moxie/core/utils/Basic",
                    "moxie/core/Exceptions",
                    "moxie/runtime/Runtime",
                    "moxie/core/utils/Env"
                ], function(Basic, x, Runtime, Env) {

                    var type = 'html4', extensions = {};

                    function Html4Runtime(options) {
                        var I = this
                            , Test = Runtime.capTest
                            , True = Runtime.capTrue
                        ;

                        Runtime.call(this, options, type, {
                            access_binary: Test(window.FileReader || window.File && File.getAsDataURL),
                            access_image_binary: false,
                            display_media: Test(
                                (Env.can('create_canvas') || Env.can('use_data_uri_over32kb')) &&
                                defined('moxie/image/Image')
                            ),
                            do_cors: false,
                            drag_and_drop: false,
                            filter_by_extension: Test(function() { // if you know how to feature-detect this, please suggest
                                return !(
                                    (Env.browser === 'Chrome' && Env.verComp(Env.version, 28, '<')) ||
                                    (Env.browser === 'IE' && Env.verComp(Env.version, 10, '<')) ||
                                    (Env.browser === 'Safari' && Env.verComp(Env.version, 7, '<')) ||
                                    (Env.browser === 'Firefox' && Env.verComp(Env.version, 37, '<'))
                                );
                            }()),
                            resize_image: function() {
                                return extensions.Image && I.can('access_binary') && Env.can('create_canvas');
                            },
                            report_upload_progress: false,
                            return_response_headers: false,
                            return_response_type: function(responseType) {
                                if (responseType === 'json' && !!window.JSON) {
                                    return true;
                                }
                                return !!~Basic.inArray(responseType, ['text', 'document', '']);
                            },
                            return_status_code: function(code) {
                                return !Basic.arrayDiff(code, [200, 404]);
                            },
                            select_file: function() {
                                return Env.can('use_fileinput');
                            },
                            select_multiple: false,
                            send_binary_string: false,
                            send_custom_headers: false,
                            send_multipart: true,
                            slice_blob: false,
                            stream_upload: function() {
                                return I.can('select_file');
                            },
                            summon_file_dialog: function() { // yeah... some dirty sniffing here...
                                return I.can('select_file') && (
                                        (Env.browser === 'Firefox' && Env.verComp(Env.version, 4, '>=')) ||
                                        (Env.browser === 'Opera' && Env.verComp(Env.version, 12, '>=')) ||
                                        (Env.browser === 'IE' && Env.verComp(Env.version, 10, '>=')) ||
                                        !!~Basic.inArray(Env.browser, ['Chrome', 'Safari'])
                                    );
                            },
                            upload_filesize: True,
                            use_http_method: function(methods) {
                                return !Basic.arrayDiff(methods, ['GET', 'POST']);
                            }
                        });


                        Basic.extend(this, {
                            init : function() {
                                this.trigger("Init");
                            },

                            destroy: (function(destroy) { // extend default destroy method
                                return function() {
                                    destroy.call(I);
                                    destroy = I = null;
                                };
                            }(this.destroy))
                        });

                        Basic.extend(this.getShim(), extensions);
                    }

                    Runtime.addConstructor(type, Html4Runtime);

                    return extensions;
                });

// Included from: src/javascript/runtime/html4/file/FileInput.js

                /**
                 * FileInput.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html4/file/FileInput
                 @private
                 */
                define("moxie/runtime/html4/file/FileInput", [
                    "moxie/runtime/html4/Runtime",
                    "moxie/file/File",
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Dom",
                    "moxie/core/utils/Events",
                    "moxie/core/utils/Mime",
                    "moxie/core/utils/Env"
                ], function(extensions, File, Basic, Dom, Events, Mime, Env) {

                    function FileInput() {
                        var _uid, _mimes = [], _options, _browseBtnZIndex; // save original z-index;

                        function addInput() {
                            var comp = this, I = comp.getRuntime(), shimContainer, browseButton, currForm, form, input, uid;

                            uid = Basic.guid('uid_');

                            shimContainer = I.getShimContainer(); // we get new ref every time to avoid memory leaks in IE

                            if (_uid) { // move previous form out of the view
                                currForm = Dom.get(_uid + '_form');
                                if (currForm) {
                                    Basic.extend(currForm.style, { top: '100%' });
                                }
                            }

                            // build form in DOM, since innerHTML version not able to submit file for some reason
                            form = document.createElement('form');
                            form.setAttribute('id', uid + '_form');
                            form.setAttribute('method', 'post');
                            form.setAttribute('enctype', 'multipart/form-data');
                            form.setAttribute('encoding', 'multipart/form-data');

                            Basic.extend(form.style, {
                                overflow: 'hidden',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            });

                            input = document.createElement('input');
                            input.setAttribute('id', uid);
                            input.setAttribute('type', 'file');
                            input.setAttribute('accept', _mimes.join(','));

                            Basic.extend(input.style, {
                                fontSize: '999px',
                                opacity: 0
                            });

                            form.appendChild(input);
                            shimContainer.appendChild(form);

                            // prepare file input to be placed underneath the browse_button element
                            Basic.extend(input.style, {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            });

                            if (Env.browser === 'IE' && Env.verComp(Env.version, 10, '<')) {
                                Basic.extend(input.style, {
                                    filter : "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
                                });
                            }

                            input.onchange = function() { // there should be only one handler for this
                                var file;

                                if (!this.value) {
                                    return;
                                }

                                if (this.files) { // check if browser is fresh enough
                                    file = this.files[0];

                                    // ignore empty files (IE10 for example hangs if you try to send them via XHR)
                                    if (file.size === 0) {
                                        form.parentNode.removeChild(form);
                                        return;
                                    }
                                } else {
                                    file = {
                                        name: this.value
                                    };
                                }

                                file = new File(I.uid, file);

                                // clear event handler
                                this.onchange = function() {};
                                addInput.call(comp);

                                comp.files = [file];

                                // substitute all ids with file uids (consider file.uid read-only - we cannot do it the other way around)
                                input.setAttribute('id', file.uid);
                                form.setAttribute('id', file.uid + '_form');

                                comp.trigger('change');

                                input = form = null;
                            };


                            // route click event to the input
                            if (I.can('summon_file_dialog')) {
                                browseButton = Dom.get(_options.browse_button);
                                Events.removeEvent(browseButton, 'click', comp.uid);
                                Events.addEvent(browseButton, 'click', function(e) {
                                    if (input && !input.disabled) { // for some reason FF (up to 8.0.1 so far) lets to click disabled input[type=file]
                                        input.click();
                                    }
                                    e.preventDefault();
                                }, comp.uid);
                            }

                            _uid = uid;

                            shimContainer = currForm = browseButton = null;
                        }

                        Basic.extend(this, {
                            init: function(options) {
                                var comp = this, I = comp.getRuntime(), shimContainer;

                                // figure out accept string
                                _options = options;
                                _mimes = options.accept.mimes || Mime.extList2mimes(options.accept, I.can('filter_by_extension'));

                                shimContainer = I.getShimContainer();

                                (function() {
                                    var browseButton, zIndex, top;

                                    browseButton = Dom.get(options.browse_button);
                                    _browseBtnZIndex = Dom.getStyle(browseButton, 'z-index') || 'auto';

                                    // Route click event to the input[type=file] element for browsers that support such behavior
                                    if (I.can('summon_file_dialog')) {
                                        if (Dom.getStyle(browseButton, 'position') === 'static') {
                                            browseButton.style.position = 'relative';
                                        }

                                        comp.bind('Refresh', function() {
                                            zIndex = parseInt(_browseBtnZIndex, 10) || 1;

                                            Dom.get(_options.browse_button).style.zIndex = zIndex;
                                            this.getRuntime().getShimContainer().style.zIndex = zIndex - 1;
                                        });
                                    }

                                    /* Since we have to place input[type=file] on top of the browse_button for some browsers,
                                     browse_button loses interactivity, so we restore it here */
                                    top = I.can('summon_file_dialog') ? browseButton : shimContainer;

                                    Events.addEvent(top, 'mouseover', function() {
                                        comp.trigger('mouseenter');
                                    }, comp.uid);

                                    Events.addEvent(top, 'mouseout', function() {
                                        comp.trigger('mouseleave');
                                    }, comp.uid);

                                    Events.addEvent(top, 'mousedown', function() {
                                        comp.trigger('mousedown');
                                    }, comp.uid);

                                    Events.addEvent(Dom.get(options.container), 'mouseup', function() {
                                        comp.trigger('mouseup');
                                    }, comp.uid);

                                    browseButton = null;
                                }());

                                addInput.call(this);

                                shimContainer = null;

                                // trigger ready event asynchronously
                                comp.trigger({
                                    type: 'ready',
                                    async: true
                                });
                            },

                            setOption: function(name, value) {
                                var I = this.getRuntime();
                                var input;

                                if (name == 'accept') {
                                    _mimes = value.mimes || Mime.extList2mimes(value, I.can('filter_by_extension'));
                                }

                                // update current input
                                input = Dom.get(_uid)
                                if (input) {
                                    input.setAttribute('accept', _mimes.join(','));
                                }
                            },


                            disable: function(state) {
                                var input;

                                if ((input = Dom.get(_uid))) {
                                    input.disabled = !!state;
                                }
                            },

                            destroy: function() {
                                var I = this.getRuntime()
                                    , shim = I.getShim()
                                    , shimContainer = I.getShimContainer()
                                    , container = _options && Dom.get(_options.container)
                                    , browseButton = _options && Dom.get(_options.browse_button)
                                ;

                                if (container) {
                                    Events.removeAllEvents(container, this.uid);
                                }

                                if (browseButton) {
                                    Events.removeAllEvents(browseButton, this.uid);
                                    browseButton.style.zIndex = _browseBtnZIndex; // reset to original value
                                }

                                if (shimContainer) {
                                    Events.removeAllEvents(shimContainer, this.uid);
                                    shimContainer.innerHTML = '';
                                }

                                shim.removeInstance(this.uid);

                                _uid = _mimes = _options = shimContainer = container = browseButton = shim = null;
                            }
                        });
                    }

                    return (extensions.FileInput = FileInput);
                });

// Included from: src/javascript/runtime/html4/file/FileReader.js

                /**
                 * FileReader.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html4/file/FileReader
                 @private
                 */
                define("moxie/runtime/html4/file/FileReader", [
                    "moxie/runtime/html4/Runtime",
                    "moxie/runtime/html5/file/FileReader"
                ], function(extensions, FileReader) {
                    return (extensions.FileReader = FileReader);
                });

// Included from: src/javascript/runtime/html4/xhr/XMLHttpRequest.js

                /**
                 * XMLHttpRequest.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html4/xhr/XMLHttpRequest
                 @private
                 */
                define("moxie/runtime/html4/xhr/XMLHttpRequest", [
                    "moxie/runtime/html4/Runtime",
                    "moxie/core/utils/Basic",
                    "moxie/core/utils/Dom",
                    "moxie/core/utils/Url",
                    "moxie/core/Exceptions",
                    "moxie/core/utils/Events",
                    "moxie/file/Blob",
                    "moxie/xhr/FormData"
                ], function(extensions, Basic, Dom, Url, x, Events, Blob, FormData) {

                    function XMLHttpRequest() {
                        var _status, _response, _iframe;

                        function cleanup(cb) {
                            var target = this, uid, form, inputs, i, hasFile = false;

                            if (!_iframe) {
                                return;
                            }

                            uid = _iframe.id.replace(/_iframe$/, '');

                            form = Dom.get(uid + '_form');
                            if (form) {
                                inputs = form.getElementsByTagName('input');
                                i = inputs.length;

                                while (i--) {
                                    switch (inputs[i].getAttribute('type')) {
                                        case 'hidden':
                                            inputs[i].parentNode.removeChild(inputs[i]);
                                            break;
                                        case 'file':
                                            hasFile = true; // flag the case for later
                                            break;
                                    }
                                }
                                inputs = [];

                                if (!hasFile) { // we need to keep the form for sake of possible retries
                                    form.parentNode.removeChild(form);
                                }
                                form = null;
                            }

                            // without timeout, request is marked as canceled (in console)
                            setTimeout(function() {
                                Events.removeEvent(_iframe, 'load', target.uid);
                                if (_iframe.parentNode) { // #382
                                    _iframe.parentNode.removeChild(_iframe);
                                }

                                // check if shim container has any other children, if - not, remove it as well
                                var shimContainer = target.getRuntime().getShimContainer();
                                if (!shimContainer.children.length) {
                                    shimContainer.parentNode.removeChild(shimContainer);
                                }

                                shimContainer = _iframe = null;
                                cb();
                            }, 1);
                        }

                        Basic.extend(this, {
                            send: function(meta, data) {
                                var target = this, I = target.getRuntime(), uid, form, input, blob;

                                _status = _response = null;

                                function createIframe() {
                                    var container = I.getShimContainer() || document.body
                                        , temp = document.createElement('div')
                                    ;

                                    // IE 6 won't be able to set the name using setAttribute or iframe.name
                                    temp.innerHTML = '<iframe id="' + uid + '_iframe" name="' + uid + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
                                    _iframe = temp.firstChild;
                                    container.appendChild(_iframe);

                                    /* _iframe.onreadystatechange = function() {
                                     console.info(_iframe.readyState);
                                     };*/

                                    Events.addEvent(_iframe, 'load', function() { // _iframe.onload doesn't work in IE lte 8
                                        var el;

                                        try {
                                            el = _iframe.contentWindow.document || _iframe.contentDocument || window.frames[_iframe.id].document;

                                            // try to detect some standard error pages
                                            if (/^4(0[0-9]|1[0-7]|2[2346])\s/.test(el.title)) { // test if title starts with 4xx HTTP error
                                                _status = el.title.replace(/^(\d+).*$/, '$1');
                                            } else {
                                                _status = 200;
                                                // get result
                                                _response = Basic.trim(el.body.innerHTML);

                                                // we need to fire these at least once
                                                target.trigger({
                                                    type: 'progress',
                                                    loaded: _response.length,
                                                    total: _response.length
                                                });

                                                if (blob) { // if we were uploading a file
                                                    target.trigger({
                                                        type: 'uploadprogress',
                                                        loaded: blob.size || 1025,
                                                        total: blob.size || 1025
                                                    });
                                                }
                                            }
                                        } catch (ex) {
                                            if (Url.hasSameOrigin(meta.url)) {
                                                // if response is sent with error code, iframe in IE gets redirected to res://ieframe.dll/http_x.htm
                                                // which obviously results to cross domain error (wtf?)
                                                _status = 404;
                                            } else {
                                                cleanup.call(target, function() {
                                                    target.trigger('error');
                                                });
                                                return;
                                            }
                                        }

                                        cleanup.call(target, function() {
                                            target.trigger('load');
                                        });
                                    }, target.uid);
                                } // end createIframe

                                // prepare data to be sent and convert if required
                                if (data instanceof FormData && data.hasBlob()) {
                                    blob = data.getBlob();
                                    uid = blob.uid;
                                    input = Dom.get(uid);
                                    form = Dom.get(uid + '_form');
                                    if (!form) {
                                        throw new x.DOMException(x.DOMException.NOT_FOUND_ERR);
                                    }
                                } else {
                                    uid = Basic.guid('uid_');

                                    form = document.createElement('form');
                                    form.setAttribute('id', uid + '_form');
                                    form.setAttribute('method', meta.method);
                                    form.setAttribute('enctype', 'multipart/form-data');
                                    form.setAttribute('encoding', 'multipart/form-data');

                                    I.getShimContainer().appendChild(form);
                                }

                                // set upload target
                                form.setAttribute('target', uid + '_iframe');

                                if (data instanceof FormData) {
                                    data.each(function(value, name) {
                                        if (value instanceof Blob) {
                                            if (input) {
                                                input.setAttribute('name', name);
                                            }
                                        } else {
                                            var hidden = document.createElement('input');

                                            Basic.extend(hidden, {
                                                type : 'hidden',
                                                name : name,
                                                value : value
                                            });

                                            // make sure that input[type="file"], if it's there, comes last
                                            if (input) {
                                                form.insertBefore(hidden, input);
                                            } else {
                                                form.appendChild(hidden);
                                            }
                                        }
                                    });
                                }

                                // set destination url
                                form.setAttribute("action", meta.url);

                                createIframe();
                                form.submit();
                                target.trigger('loadstart');
                            },

                            getStatus: function() {
                                return _status;
                            },

                            getResponse: function(responseType) {
                                if ('json' === responseType) {
                                    // strip off <pre>..</pre> tags that might be enclosing the response
                                    if (Basic.typeOf(_response) === 'string' && !!window.JSON) {
                                        try {
                                            return JSON.parse(_response.replace(/^\s*<pre[^>]*>/, '').replace(/<\/pre>\s*$/, ''));
                                        } catch (ex) {
                                            return null;
                                        }
                                    }
                                } else if ('document' === responseType) {

                                }
                                return _response;
                            },

                            abort: function() {
                                var target = this;

                                if (_iframe && _iframe.contentWindow) {
                                    if (_iframe.contentWindow.stop) { // FireFox/Safari/Chrome
                                        _iframe.contentWindow.stop();
                                    } else if (_iframe.contentWindow.document.execCommand) { // IE
                                        _iframe.contentWindow.document.execCommand('Stop');
                                    } else {
                                        _iframe.src = "about:blank";
                                    }
                                }

                                cleanup.call(this, function() {
                                    // target.dispatchEvent('readystatechange');
                                    target.dispatchEvent('abort');
                                });
                            }
                        });
                    }

                    return (extensions.XMLHttpRequest = XMLHttpRequest);
                });

// Included from: src/javascript/runtime/html4/image/Image.js

                /**
                 * Image.js
                 *
                 * Copyright 2013, Moxiecode Systems AB
                 * Released under GPL License.
                 *
                 * License: http://www.plupload.com/license
                 * Contributing: http://www.plupload.com/contributing
                 */

                /**
                 @class moxie/runtime/html4/image/Image
                 @private
                 */
                define("moxie/runtime/html4/image/Image", [
                    "moxie/runtime/html4/Runtime",
                    "moxie/runtime/html5/image/Image"
                ], function(extensions, Image) {
                    return (extensions.Image = Image);
                });

                expose(["moxie/core/utils/Basic","moxie/core/utils/Encode","moxie/core/utils/Env","moxie/core/Exceptions","moxie/core/utils/Dom","moxie/core/EventTarget","moxie/runtime/Runtime","moxie/runtime/RuntimeClient","moxie/file/Blob","moxie/core/I18n","moxie/core/utils/Mime","moxie/file/FileInput","moxie/file/File","moxie/file/FileDrop","moxie/file/FileReader","moxie/core/utils/Url","moxie/runtime/RuntimeTarget","moxie/xhr/FormData","moxie/xhr/XMLHttpRequest","moxie/runtime/Transporter","moxie/image/Image","moxie/core/utils/Events","moxie/runtime/html5/image/ResizerCanvas"]);
            })(this);
        }));

        /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
         * Created by guhao on 2017/8/24.
         */
        /**
         * Plupload - multi-runtime File Uploader
         * v2.3.1
         *
         * Copyright 2013, Moxiecode Systems AB
         * Released under GPL License.
         *
         * License: http://www.plupload.com/license
         * Contributing: http://www.plupload.com/contributing
         *
         * Date: 2017-02-06
         */
        ;(function (global, factory) {
            var extract = function() {
                var ctx = {};
                factory.apply(ctx, arguments);
                return ctx.plupload;
            };

            if (true) {
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (extract),
                    __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                        (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else if (typeof module === "object" && module.exports) {
                module.exports = extract(require('./moxie'));
            } else {
                global.plupload = extract(global.moxie);
            }
        }(this || window, function(moxie) {
            /**
             * Plupload.js
             *
             * Copyright 2013, Moxiecode Systems AB
             * Released under GPL License.
             *
             * License: http://www.plupload.com/license
             * Contributing: http://www.plupload.com/contributing
             */

            ;(function(exports, o, undef) {

                var delay = window.setTimeout;
                var fileFilters = {};
                var u = o.core.utils;
                var Runtime = o.runtime.Runtime;

// convert plupload features to caps acceptable by mOxie
                function normalizeCaps(settings) {
                    var features = settings.required_features, caps = {};

                    function resolve(feature, value, strict) {
                        // Feature notation is deprecated, use caps (this thing here is required for backward compatibility)
                        var map = {
                            chunks: 'slice_blob',
                            jpgresize: 'send_binary_string',
                            pngresize: 'send_binary_string',
                            progress: 'report_upload_progress',
                            multi_selection: 'select_multiple',
                            dragdrop: 'drag_and_drop',
                            drop_element: 'drag_and_drop',
                            headers: 'send_custom_headers',
                            urlstream_upload: 'send_binary_string',
                            canSendBinary: 'send_binary',
                            triggerDialog: 'summon_file_dialog'
                        };

                        if (map[feature]) {
                            caps[map[feature]] = value;
                        } else if (!strict) {
                            caps[feature] = value;
                        }
                    }

                    if (typeof(features) === 'string') {
                        plupload.each(features.split(/\s*,\s*/), function(feature) {
                            resolve(feature, true);
                        });
                    } else if (typeof(features) === 'object') {
                        plupload.each(features, function(value, feature) {
                            resolve(feature, value);
                        });
                    } else if (features === true) {
                        // check settings for required features
                        if (settings.chunk_size && settings.chunk_size > 0) {
                            caps.slice_blob = true;
                        }

                        if (!plupload.isEmptyObj(settings.resize) || settings.multipart === false) {
                            caps.send_binary_string = true;
                        }

                        if (settings.http_method) {
                            caps.use_http_method = settings.http_method;
                        }

                        plupload.each(settings, function(value, feature) {
                            resolve(feature, !!value, true); // strict check
                        });
                    }

                    return caps;
                }

                /**
                 * @module plupload
                 * @static
                 */
                var plupload = {
                    /**
                     * Plupload version will be replaced on build.
                     *
                     * @property VERSION
                     * @for Plupload
                     * @static
                     * @final
                     */
                    VERSION : '2.3.1',

                    /**
                     * The state of the queue before it has started and after it has finished
                     *
                     * @property STOPPED
                     * @static
                     * @final
                     */
                    STOPPED : 1,

                    /**
                     * Upload process is running
                     *
                     * @property STARTED
                     * @static
                     * @final
                     */
                    STARTED : 2,

                    /**
                     * File is queued for upload
                     *
                     * @property QUEUED
                     * @static
                     * @final
                     */
                    QUEUED : 1,

                    /**
                     * File is being uploaded
                     *
                     * @property UPLOADING
                     * @static
                     * @final
                     */
                    UPLOADING : 2,

                    /**
                     * File has failed to be uploaded
                     *
                     * @property FAILED
                     * @static
                     * @final
                     */
                    FAILED : 4,

                    /**
                     * File has been uploaded successfully
                     *
                     * @property DONE
                     * @static
                     * @final
                     */
                    DONE : 5,

                    // Error constants used by the Error event

                    /**
                     * Generic error for example if an exception is thrown inside Silverlight.
                     *
                     * @property GENERIC_ERROR
                     * @static
                     * @final
                     */
                    GENERIC_ERROR : -100,

                    /**
                     * HTTP transport error. For example if the server produces a HTTP status other than 200.
                     *
                     * @property HTTP_ERROR
                     * @static
                     * @final
                     */
                    HTTP_ERROR : -200,

                    /**
                     * Generic I/O error. For example if it wasn't possible to open the file stream on local machine.
                     *
                     * @property IO_ERROR
                     * @static
                     * @final
                     */
                    IO_ERROR : -300,

                    /**
                     * @property SECURITY_ERROR
                     * @static
                     * @final
                     */
                    SECURITY_ERROR : -400,

                    /**
                     * Initialization error. Will be triggered if no runtime was initialized.
                     *
                     * @property INIT_ERROR
                     * @static
                     * @final
                     */
                    INIT_ERROR : -500,

                    /**
                     * File size error. If the user selects a file that is too large it will be blocked and an error of this type will be triggered.
                     *
                     * @property FILE_SIZE_ERROR
                     * @static
                     * @final
                     */
                    FILE_SIZE_ERROR : -600,

                    /**
                     * File extension error. If the user selects a file that isn't valid according to the filters setting.
                     *
                     * @property FILE_EXTENSION_ERROR
                     * @static
                     * @final
                     */
                    FILE_EXTENSION_ERROR : -601,

                    /**
                     * Duplicate file error. If prevent_duplicates is set to true and user selects the same file again.
                     *
                     * @property FILE_DUPLICATE_ERROR
                     * @static
                     * @final
                     */
                    FILE_DUPLICATE_ERROR : -602,

                    /**
                     * Runtime will try to detect if image is proper one. Otherwise will throw this error.
                     *
                     * @property IMAGE_FORMAT_ERROR
                     * @static
                     * @final
                     */
                    IMAGE_FORMAT_ERROR : -700,

                    /**
                     * While working on files runtime may run out of memory and will throw this error.
                     *
                     * @since 2.1.2
                     * @property MEMORY_ERROR
                     * @static
                     * @final
                     */
                    MEMORY_ERROR : -701,

                    /**
                     * Each runtime has an upper limit on a dimension of the image it can handle. If bigger, will throw this error.
                     *
                     * @property IMAGE_DIMENSIONS_ERROR
                     * @static
                     * @final
                     */
                    IMAGE_DIMENSIONS_ERROR : -702,

                    /**
                     * Mime type lookup table.
                     *
                     * @property mimeTypes
                     * @type Object
                     * @final
                     */
                    mimeTypes : u.Mime.mimes,

                    /**
                     * In some cases sniffing is the only way around :(
                     */
                    ua: u.Env,

                    /**
                     * Gets the true type of the built-in object (better version of typeof).
                     * @credits Angus Croll (http://javascriptweblog.wordpress.com/)
                     *
                     * @method typeOf
                     * @static
                     * @param {Object} o Object to check.
                     * @return {String} Object [[Class]]
                     */
                    typeOf: u.Basic.typeOf,

                    /**
                     * Extends the specified object with another object.
                     *
                     * @method extend
                     * @static
                     * @param {Object} target Object to extend.
                     * @param {Object..} obj Multiple objects to extend with.
                     * @return {Object} Same as target, the extended object.
                     */
                    extend : u.Basic.extend,

                    /**
                     * Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
                     * The only way a user would be able to get the same ID is if the two persons at the same exact millisecond manages
                     * to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
                     * It's more probable for the earth to be hit with an asteriod. You can also if you want to be 100% sure set the plupload.guidPrefix property
                     * to an user unique key.
                     *
                     * @method guid
                     * @static
                     * @return {String} Virtually unique id.
                     */
                    guid : u.Basic.guid,

                    /**
                     * Get array of DOM Elements by their ids.
                     *
                     * @method get
                     * @param {String} id Identifier of the DOM Element
                     * @return {Array}
                     */
                    getAll : function get(ids) {
                        var els = [], el;

                        if (plupload.typeOf(ids) !== 'array') {
                            ids = [ids];
                        }

                        var i = ids.length;
                        while (i--) {
                            el = plupload.get(ids[i]);
                            if (el) {
                                els.push(el);
                            }
                        }

                        return els.length ? els : null;
                    },

                    /**
                     Get DOM element by id

                     @method get
                     @param {String} id Identifier of the DOM Element
                     @return {Node}
                     */
                    get: u.Dom.get,

                    /**
                     * Executes the callback function for each item in array/object. If you return false in the
                     * callback it will break the loop.
                     *
                     * @method each
                     * @static
                     * @param {Object} obj Object to iterate.
                     * @param {function} callback Callback function to execute for each item.
                     */
                    each : u.Basic.each,

                    /**
                     * Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.
                     *
                     * @method getPos
                     * @static
                     * @param {Element} node HTML element or element id to get x, y position from.
                     * @param {Element} root Optional root element to stop calculations at.
                     * @return {object} Absolute position of the specified element object with x, y fields.
                     */
                    getPos : u.Dom.getPos,

                    /**
                     * Returns the size of the specified node in pixels.
                     *
                     * @method getSize
                     * @static
                     * @param {Node} node Node to get the size of.
                     * @return {Object} Object with a w and h property.
                     */
                    getSize : u.Dom.getSize,

                    /**
                     * Encodes the specified string.
                     *
                     * @method xmlEncode
                     * @static
                     * @param {String} s String to encode.
                     * @return {String} Encoded string.
                     */
                    xmlEncode : function(str) {
                        var xmlEncodeChars = {'<' : 'lt', '>' : 'gt', '&' : 'amp', '"' : 'quot', '\'' : '#39'}, xmlEncodeRegExp = /[<>&\"\']/g;

                        return str ? ('' + str).replace(xmlEncodeRegExp, function(chr) {
                            return xmlEncodeChars[chr] ? '&' + xmlEncodeChars[chr] + ';' : chr;
                        }) : str;
                    },

                    /**
                     * Forces anything into an array.
                     *
                     * @method toArray
                     * @static
                     * @param {Object} obj Object with length field.
                     * @return {Array} Array object containing all items.
                     */
                    toArray : u.Basic.toArray,

                    /**
                     * Find an element in array and return its index if present, otherwise return -1.
                     *
                     * @method inArray
                     * @static
                     * @param {mixed} needle Element to find
                     * @param {Array} array
                     * @return {Int} Index of the element, or -1 if not found
                     */
                    inArray : u.Basic.inArray,

                    /**
                     Recieve an array of functions (usually async) to call in sequence, each  function
                     receives a callback as first argument that it should call, when it completes. Finally,
                     after everything is complete, main callback is called. Passing truthy value to the
                     callback as a first argument will interrupt the sequence and invoke main callback
                     immediately.

                     @method inSeries
                     @static
                     @param {Array} queue Array of functions to call in sequence
                     @param {Function} cb Main callback that is called in the end, or in case of error
                     */
                    inSeries: u.Basic.inSeries,

                    /**
                     * Extends the language pack object with new items.
                     *
                     * @method addI18n
                     * @static
                     * @param {Object} pack Language pack items to add.
                     * @return {Object} Extended language pack object.
                     */
                    addI18n : o.core.I18n.addI18n,

                    /**
                     * Translates the specified string by checking for the english string in the language pack lookup.
                     *
                     * @method translate
                     * @static
                     * @param {String} str String to look for.
                     * @return {String} Translated string or the input string if it wasn't found.
                     */
                    translate : o.core.I18n.translate,

                    /**
                     * Pseudo sprintf implementation - simple way to replace tokens with specified values.
                     *
                     * @param {String} str String with tokens
                     * @return {String} String with replaced tokens
                     */
                    sprintf : u.Basic.sprintf,

                    /**
                     * Checks if object is empty.
                     *
                     * @method isEmptyObj
                     * @static
                     * @param {Object} obj Object to check.
                     * @return {Boolean}
                     */
                    isEmptyObj : u.Basic.isEmptyObj,

                    /**
                     * Checks if specified DOM element has specified class.
                     *
                     * @method hasClass
                     * @static
                     * @param {Object} obj DOM element like object to add handler to.
                     * @param {String} name Class name
                     */
                    hasClass : u.Dom.hasClass,

                    /**
                     * Adds specified className to specified DOM element.
                     *
                     * @method addClass
                     * @static
                     * @param {Object} obj DOM element like object to add handler to.
                     * @param {String} name Class name
                     */
                    addClass : u.Dom.addClass,

                    /**
                     * Removes specified className from specified DOM element.
                     *
                     * @method removeClass
                     * @static
                     * @param {Object} obj DOM element like object to add handler to.
                     * @param {String} name Class name
                     */
                    removeClass : u.Dom.removeClass,

                    /**
                     * Returns a given computed style of a DOM element.
                     *
                     * @method getStyle
                     * @static
                     * @param {Object} obj DOM element like object.
                     * @param {String} name Style you want to get from the DOM element
                     */
                    getStyle : u.Dom.getStyle,

                    /**
                     * Adds an event handler to the specified object and store reference to the handler
                     * in objects internal Plupload registry (@see removeEvent).
                     *
                     * @method addEvent
                     * @static
                     * @param {Object} obj DOM element like object to add handler to.
                     * @param {String} name Name to add event listener to.
                     * @param {Function} callback Function to call when event occurs.
                     * @param {String} (optional) key that might be used to add specifity to the event record.
                     */
                    addEvent : u.Events.addEvent,

                    /**
                     * Remove event handler from the specified object. If third argument (callback)
                     * is not specified remove all events with the specified name.
                     *
                     * @method removeEvent
                     * @static
                     * @param {Object} obj DOM element to remove event listener(s) from.
                     * @param {String} name Name of event listener to remove.
                     * @param {Function|String} (optional) might be a callback or unique key to match.
                     */
                    removeEvent: u.Events.removeEvent,

                    /**
                     * Remove all kind of events from the specified object
                     *
                     * @method removeAllEvents
                     * @static
                     * @param {Object} obj DOM element to remove event listeners from.
                     * @param {String} (optional) unique key to match, when removing events.
                     */
                    removeAllEvents: u.Events.removeAllEvents,

                    /**
                     * Cleans the specified name from national characters (diacritics). The result will be a name with only a-z, 0-9 and _.
                     *
                     * @method cleanName
                     * @static
                     * @param {String} s String to clean up.
                     * @return {String} Cleaned string.
                     */
                    cleanName : function(name) {
                        var i, lookup;

                        // Replace diacritics
                        lookup = [
                            /[\300-\306]/g, 'A', /[\340-\346]/g, 'a',
                            /\307/g, 'C', /\347/g, 'c',
                            /[\310-\313]/g, 'E', /[\350-\353]/g, 'e',
                            /[\314-\317]/g, 'I', /[\354-\357]/g, 'i',
                            /\321/g, 'N', /\361/g, 'n',
                            /[\322-\330]/g, 'O', /[\362-\370]/g, 'o',
                            /[\331-\334]/g, 'U', /[\371-\374]/g, 'u'
                        ];

                        for (i = 0; i < lookup.length; i += 2) {
                            name = name.replace(lookup[i], lookup[i + 1]);
                        }

                        // Replace whitespace
                        name = name.replace(/\s+/g, '_');

                        // Remove anything else
                        name = name.replace(/[^a-z0-9_\-\.]+/gi, '');

                        return name;
                    },

                    /**
                     * Builds a full url out of a base URL and an object with items to append as query string items.
                     *
                     * @method buildUrl
                     * @static
                     * @param {String} url Base URL to append query string items to.
                     * @param {Object} items Name/value object to serialize as a querystring.
                     * @return {String} String with url + serialized query string items.
                     */
                    buildUrl: function(url, items) {
                        var query = '';

                        plupload.each(items, function(value, name) {
                            query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
                        });

                        if (query) {
                            url += (url.indexOf('?') > 0 ? '&' : '?') + query;
                        }

                        return url;
                    },

                    /**
                     * Formats the specified number as a size string for example 1024 becomes 1 KB.
                     *
                     * @method formatSize
                     * @static
                     * @param {Number} size Size to format as string.
                     * @return {String} Formatted size string.
                     */
                    formatSize : function(size) {

                        if (size === undef || /\D/.test(size)) {
                            return plupload.translate('N/A');
                        }

                        function round(num, precision) {
                            return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
                        }

                        var boundary = Math.pow(1024, 4);

                        // TB
                        if (size > boundary) {
                            return round(size / boundary, 1) + " " + plupload.translate('tb');
                        }

                        // GB
                        if (size > (boundary/=1024)) {
                            return round(size / boundary, 1) + " " + plupload.translate('gb');
                        }

                        // MB
                        if (size > (boundary/=1024)) {
                            return round(size / boundary, 1) + " " + plupload.translate('mb');
                        }

                        // KB
                        if (size > 1024) {
                            return Math.round(size / 1024) + " " + plupload.translate('kb');
                        }

                        return size + " " + plupload.translate('b');
                    },


                    /**
                     * Parses the specified size string into a byte value. For example 10kb becomes 10240.
                     *
                     * @method parseSize
                     * @static
                     * @param {String|Number} size String to parse or number to just pass through.
                     * @return {Number} Size in bytes.
                     */
                    parseSize : u.Basic.parseSizeStr,


                    /**
                     * A way to predict what runtime will be choosen in the current environment with the
                     * specified settings.
                     *
                     * @method predictRuntime
                     * @static
                     * @param {Object|String} config Plupload settings to check
                     * @param {String} [runtimes] Comma-separated list of runtimes to check against
                     * @return {String} Type of compatible runtime
                     */
                    predictRuntime : function(config, runtimes) {
                        var up, runtime;

                        up = new plupload.Uploader(config);
                        runtime = Runtime.thatCan(up.getOption().required_features, runtimes || config.runtimes);
                        up.destroy();
                        return runtime;
                    },

                    /**
                     * Registers a filter that will be executed for each file added to the queue.
                     * If callback returns false, file will not be added.
                     *
                     * Callback receives two arguments: a value for the filter as it was specified in settings.filters
                     * and a file to be filtered. Callback is executed in the context of uploader instance.
                     *
                     * @method addFileFilter
                     * @static
                     * @param {String} name Name of the filter by which it can be referenced in settings.filters
                     * @param {String} cb Callback - the actual routine that every added file must pass
                     */
                    addFileFilter: function(name, cb) {
                        fileFilters[name] = cb;
                    }
                };


                plupload.addFileFilter('mime_types', function(filters, file, cb) {
                    if (filters.length && !filters.regexp.test(file.name)) {
                        this.trigger('Error', {
                            code : plupload.FILE_EXTENSION_ERROR,
                            message : plupload.translate('File extension error.'),
                            file : file
                        });
                        cb(false);
                    } else {
                        cb(true);
                    }
                });


                plupload.addFileFilter('max_file_size', function(maxSize, file, cb) {
                    var undef;

                    maxSize = plupload.parseSize(maxSize);

                    // Invalid file size
                    if (file.size !== undef && maxSize && file.size > maxSize) {
                        this.trigger('Error', {
                            code : plupload.FILE_SIZE_ERROR,
                            message : plupload.translate('File size error.'),
                            file : file
                        });
                        cb(false);
                    } else {
                        cb(true);
                    }
                });


                plupload.addFileFilter('prevent_duplicates', function(value, file, cb) {
                    if (value) {
                        var ii = this.files.length;
                        while (ii--) {
                            // Compare by name and size (size might be 0 or undefined, but still equivalent for both)
                            if (file.name === this.files[ii].name && file.size === this.files[ii].size) {
                                this.trigger('Error', {
                                    code : plupload.FILE_DUPLICATE_ERROR,
                                    message : plupload.translate('Duplicate file error.'),
                                    file : file
                                });
                                cb(false);
                                return;
                            }
                        }
                    }
                    cb(true);
                });


                /**
                 @class Uploader
                 @constructor

                 @param {Object} settings For detailed information about each option check documentation.
                 @param {String|DOMElement} settings.browse_button id of the DOM element or DOM element itself to use as file dialog trigger.
                 @param {Number|String} [settings.chunk_size=0] Chunk size in bytes to slice the file into. Shorcuts with b, kb, mb, gb, tb suffixes also supported. `e.g. 204800 or "204800b" or "200kb"`. By default - disabled.
                 @param {String|DOMElement} [settings.container] id of the DOM element or DOM element itself that will be used to wrap uploader structures. Defaults to immediate parent of the `browse_button` element.
                 @param {String|DOMElement} [settings.drop_element] id of the DOM element or DOM element itself to use as a drop zone for Drag-n-Drop.
                 @param {String} [settings.file_data_name="file"] Name for the file field in Multipart formated message.
                 @param {Object} [settings.filters={}] Set of file type filters.
                 @param {String|Number} [settings.filters.max_file_size=0] Maximum file size that the user can pick, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. `e.g. "10mb" or "1gb"`. By default - not set. Dispatches `plupload.FILE_SIZE_ERROR`.
                 @param {Array} [settings.filters.mime_types=[]] List of file types to accept, each one defined by title and list of extensions. `e.g. {title : "Image files", extensions : "jpg,jpeg,gif,png"}`. Dispatches `plupload.FILE_EXTENSION_ERROR`
                 @param {Boolean} [settings.filters.prevent_duplicates=false] Do not let duplicates into the queue. Dispatches `plupload.FILE_DUPLICATE_ERROR`.
                 @param {String} [settings.flash_swf_url] URL of the Flash swf.
                 @param {Object} [settings.headers] Custom headers to send with the upload. Hash of name/value pairs.
                 @param {String} [settings.http_method="POST"] HTTP method to use during upload (only PUT or POST allowed).
                 @param {Number} [settings.max_retries=0] How many times to retry the chunk or file, before triggering Error event.
                 @param {Boolean} [settings.multipart=true] Whether to send file and additional parameters as Multipart formated message.
                 @param {Object} [settings.multipart_params] Hash of key/value pairs to send with every file upload.
                 @param {Boolean} [settings.multi_selection=true] Enable ability to select multiple files at once in file dialog.
                 @param {String|Object} [settings.required_features] Either comma-separated list or hash of required features that chosen runtime should absolutely possess.
                 @param {Object} [settings.resize] Enable resizng of images on client-side. Applies to `image/jpeg` and `image/png` only. `e.g. {width : 200, height : 200, quality : 90, crop: true}`
                 @param {Number} [settings.resize.width] If image is bigger, it will be resized.
                 @param {Number} [settings.resize.height] If image is bigger, it will be resized.
                 @param {Number} [settings.resize.quality=90] Compression quality for jpegs (1-100).
                 @param {Boolean} [settings.resize.crop=false] Whether to crop images to exact dimensions. By default they will be resized proportionally.
                 @param {String} [settings.runtimes="html5,flash,silverlight,html4"] Comma separated list of runtimes, that Plupload will try in turn, moving to the next if previous fails.
                 @param {String} [settings.silverlight_xap_url] URL of the Silverlight xap.
                 @param {Boolean} [settings.send_chunk_number=true] Whether to send chunks and chunk numbers, or total and offset bytes.
                 @param {Boolean} [settings.send_file_name=true] Whether to send file name as additional argument - 'name' (required for chunked uploads and some other cases where file name cannot be sent via normal ways).
                 @param {String} settings.url URL of the server-side upload handler.
                 @param {Boolean} [settings.unique_names=false] If true will generate unique filenames for uploaded files.

                 */
                plupload.Uploader = function(options) {
                    /**
                     Fires when the current RunTime has been initialized.

                     @event Init
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */

                    /**
                     Fires after the init event incase you need to perform actions there.

                     @event PostInit
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */

                    /**
                     Fires when the option is changed in via uploader.setOption().

                     @event OptionChanged
                     @since 2.1
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {String} name Name of the option that was changed
                     @param {Mixed} value New value for the specified option
                     @param {Mixed} oldValue Previous value of the option
                     */

                    /**
                     Fires when the silverlight/flash or other shim needs to move.

                     @event Refresh
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */

                    /**
                     Fires when the overall state is being changed for the upload queue.

                     @event StateChanged
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */

                    /**
                     Fires when browse_button is clicked and browse dialog shows.

                     @event Browse
                     @since 2.1.2
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */

                    /**
                     Fires for every filtered file before it is added to the queue.

                     @event FileFiltered
                     @since 2.1
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {plupload.File} file Another file that has to be added to the queue.
                     */

                    /**
                     Fires when the file queue is changed. In other words when files are added/removed to the files array of the uploader instance.

                     @event QueueChanged
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */

                    /**
                     Fires after files were filtered and added to the queue.

                     @event FilesAdded
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {Array} files Array of file objects that were added to queue by the user.
                     */

                    /**
                     Fires when file is removed from the queue.

                     @event FilesRemoved
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {Array} files Array of files that got removed.
                     */

                    /**
                     Fires just before a file is uploaded. Can be used to cancel the upload for the specified file
                     by returning false from the handler.

                     @event BeforeUpload
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {plupload.File} file File to be uploaded.
                     */

                    /**
                     Fires when a file is to be uploaded by the runtime.

                     @event UploadFile
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {plupload.File} file File to be uploaded.
                     */

                    /**
                     Fires while a file is being uploaded. Use this event to update the current file upload progress.

                     @event UploadProgress
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {plupload.File} file File that is currently being uploaded.
                     */

                    /**
                     * Fires just before a chunk is uploaded. This event enables you to override settings
                     * on the uploader instance before the chunk is uploaded.
                     *
                     * @event BeforeChunkUpload
                     * @param {plupload.Uploader} uploader Uploader instance sending the event.
                     * @param {plupload.File} file File to be uploaded.
                     * @param {Object} args POST params to be sent.
                     * @param {Blob} chunkBlob Current blob.
                     * @param {offset} offset Current offset.
                     */

                    /**
                     Fires when file chunk is uploaded.

                     @event ChunkUploaded
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {plupload.File} file File that the chunk was uploaded for.
                     @param {Object} result Object with response properties.
                     @param {Number} result.offset The amount of bytes the server has received so far, including this chunk.
                     @param {Number} result.total The size of the file.
                     @param {String} result.response The response body sent by the server.
                     @param {Number} result.status The HTTP status code sent by the server.
                     @param {String} result.responseHeaders All the response headers as a single string.
                     */

                    /**
                     Fires when a file is successfully uploaded.

                     @event FileUploaded
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {plupload.File} file File that was uploaded.
                     @param {Object} result Object with response properties.
                     @param {String} result.response The response body sent by the server.
                     @param {Number} result.status The HTTP status code sent by the server.
                     @param {String} result.responseHeaders All the response headers as a single string.
                     */

                    /**
                     Fires when all files in a queue are uploaded.

                     @event UploadComplete
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {Array} files Array of file objects that was added to queue/selected by the user.
                     */

                    /**
                     Fires when a error occurs.

                     @event Error
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     @param {Object} error Contains code, message and sometimes file and other details.
                     @param {Number} error.code The plupload error code.
                     @param {String} error.message Description of the error (uses i18n).
                     */

                    /**
                     Fires when destroy method is called.

                     @event Destroy
                     @param {plupload.Uploader} uploader Uploader instance sending the event.
                     */
                    var uid = plupload.guid()
                        , settings
                        , files = []
                        , preferred_caps = {}
                        , fileInputs = []
                        , fileDrops = []
                        , startTime
                        , total
                        , disabled = false
                        , xhr
                    ;


                    // Private methods
                    function uploadNext() {
                        var file, count = 0, i;

                        if (this.state == plupload.STARTED) {
                            // Find first QUEUED file
                            for (i = 0; i < files.length; i++) {
                                if (!file && files[i].status == plupload.QUEUED) {
                                    file = files[i];
                                    if (this.trigger("BeforeUpload", file)) {
                                        file.status = plupload.UPLOADING;
                                        this.trigger("UploadFile", file);
                                    }
                                } else {
                                    count++;
                                }
                            }

                            // All files are DONE or FAILED
                            if (count == files.length) {
                                if (this.state !== plupload.STOPPED) {
                                    this.state = plupload.STOPPED;
                                    this.trigger("StateChanged");
                                }
                                this.trigger("UploadComplete", files);
                            }
                        }
                    }


                    function calcFile(file) {
                        file.percent = file.size > 0 ? Math.ceil(file.loaded / file.size * 100) : 100;
                        calc();
                    }


                    function calc() {
                        var i, file;
                        var loaded;
                        var loadedDuringCurrentSession = 0;

                        // Reset stats
                        total.reset();

                        // Check status, size, loaded etc on all files
                        for (i = 0; i < files.length; i++) {
                            file = files[i];

                            if (file.size !== undef) {
                                // We calculate totals based on original file size
                                total.size += file.origSize;

                                // Since we cannot predict file size after resize, we do opposite and
                                // interpolate loaded amount to match magnitude of total
                                loaded = file.loaded * file.origSize / file.size;

                                if (!file.completeTimestamp || file.completeTimestamp > startTime) {
                                    loadedDuringCurrentSession += loaded;
                                }

                                total.loaded += loaded;
                            } else {
                                total.size = undef;
                            }

                            if (file.status == plupload.DONE) {
                                total.uploaded++;
                            } else if (file.status == plupload.FAILED) {
                                total.failed++;
                            } else {
                                total.queued++;
                            }
                        }

                        // If we couldn't calculate a total file size then use the number of files to calc percent
                        if (total.size === undef) {
                            total.percent = files.length > 0 ? Math.ceil(total.uploaded / files.length * 100) : 0;
                        } else {
                            total.bytesPerSec = Math.ceil(loadedDuringCurrentSession / ((+new Date() - startTime || 1) / 1000.0));
                            total.percent = total.size > 0 ? Math.ceil(total.loaded / total.size * 100) : 0;
                        }
                    }


                    function getRUID() {
                        var ctrl = fileInputs[0] || fileDrops[0];
                        if (ctrl) {
                            return ctrl.getRuntime().uid;
                        }
                        return false;
                    }


                    function runtimeCan(file, cap) {
                        if (file.ruid) {
                            var info = Runtime.getInfo(file.ruid);
                            if (info) {
                                return info.can(cap);
                            }
                        }
                        return false;
                    }


                    function bindEventListeners() {
                        this.bind('FilesAdded FilesRemoved', function(up) {
                            up.trigger('QueueChanged');
                            up.refresh();
                        });

                        this.bind('CancelUpload', onCancelUpload);

                        this.bind('BeforeUpload', onBeforeUpload);

                        this.bind('UploadFile', onUploadFile);

                        this.bind('UploadProgress', onUploadProgress);

                        this.bind('StateChanged', onStateChanged);

                        this.bind('QueueChanged', calc);

                        this.bind('Error', onError);

                        this.bind('FileUploaded', onFileUploaded);

                        this.bind('Destroy', onDestroy);
                    }


                    function initControls(settings, cb) {
                        var self = this, inited = 0, queue = [];

                        // common settings
                        var options = {
                            runtime_order: settings.runtimes,
                            required_caps: settings.required_features,
                            preferred_caps: preferred_caps,
                            swf_url: settings.flash_swf_url,
                            xap_url: settings.silverlight_xap_url
                        };

                        // add runtime specific options if any
                        plupload.each(settings.runtimes.split(/\s*,\s*/), function(runtime) {
                            if (settings[runtime]) {
                                options[runtime] = settings[runtime];
                            }
                        });

                        // initialize file pickers - there can be many
                        if (settings.browse_button) {
                            plupload.each(settings.browse_button, function(el) {
                                queue.push(function(cb) {
                                    var fileInput = new o.file.FileInput(plupload.extend({}, options, {
                                        accept: settings.filters.mime_types,
                                        name: settings.file_data_name,
                                        multiple: settings.multi_selection,
                                        container: settings.container,
                                        browse_button: el
                                    }));

                                    fileInput.onready = function() {
                                        var info = Runtime.getInfo(this.ruid);

                                        // for backward compatibility
                                        plupload.extend(self.features, {
                                            chunks: info.can('slice_blob'),
                                            multipart: info.can('send_multipart'),
                                            multi_selection: info.can('select_multiple')
                                        });

                                        inited++;
                                        fileInputs.push(this);
                                        cb();
                                    };

                                    fileInput.onchange = function() {
                                        self.addFile(this.files);
                                    };

                                    fileInput.bind('mouseenter mouseleave mousedown mouseup', function(e) {
                                        if (!disabled) {
                                            if (settings.browse_button_hover) {
                                                if ('mouseenter' === e.type) {
                                                    plupload.addClass(el, settings.browse_button_hover);
                                                } else if ('mouseleave' === e.type) {
                                                    plupload.removeClass(el, settings.browse_button_hover);
                                                }
                                            }

                                            if (settings.browse_button_active) {
                                                if ('mousedown' === e.type) {
                                                    plupload.addClass(el, settings.browse_button_active);
                                                } else if ('mouseup' === e.type) {
                                                    plupload.removeClass(el, settings.browse_button_active);
                                                }
                                            }
                                        }
                                    });

                                    fileInput.bind('mousedown', function() {
                                        self.trigger('Browse');
                                    });

                                    fileInput.bind('error runtimeerror', function() {
                                        fileInput = null;
                                        cb();
                                    });

                                    fileInput.init();
                                });
                            });
                        }

                        // initialize drop zones
                        if (settings.drop_element) {
                            plupload.each(settings.drop_element, function(el) {
                                queue.push(function(cb) {
                                    var fileDrop = new o.file.FileDrop(plupload.extend({}, options, {
                                        drop_zone: el
                                    }));

                                    fileDrop.onready = function() {
                                        var info = Runtime.getInfo(this.ruid);

                                        // for backward compatibility
                                        plupload.extend(self.features, {
                                            chunks: info.can('slice_blob'),
                                            multipart: info.can('send_multipart'),
                                            dragdrop: info.can('drag_and_drop')
                                        });

                                        inited++;
                                        fileDrops.push(this);
                                        cb();
                                    };

                                    fileDrop.ondrop = function() {
                                        self.addFile(this.files);
                                    };

                                    fileDrop.bind('error runtimeerror', function() {
                                        fileDrop = null;
                                        cb();
                                    });

                                    fileDrop.init();
                                });
                            });
                        }


                        plupload.inSeries(queue, function() {
                            if (typeof(cb) === 'function') {
                                cb(inited);
                            }
                        });
                    }


                    function resizeImage(blob, params, cb) {
                        var img = new o.image.Image();

                        try {
                            img.onload = function() {
                                // no manipulation required if...
                                if (params.width > this.width &&
                                    params.height > this.height &&
                                    params.quality === undef &&
                                    params.preserve_headers &&
                                    !params.crop
                                ) {
                                    this.destroy();
                                    return cb(blob);
                                }
                                // otherwise downsize
                                img.downsize(params.width, params.height, params.crop, params.preserve_headers);
                            };

                            img.onresize = function() {
                                cb(this.getAsBlob(blob.type, params.quality));
                                this.destroy();
                            };

                            img.onerror = function() {
                                cb(blob);
                            };

                            img.load(blob);
                        } catch(ex) {
                            cb(blob);
                        }
                    }


                    function setOption(option, value, init) {
                        var self = this, reinitRequired = false;

                        function _setOption(option, value, init) {
                            var oldValue = settings[option];

                            switch (option) {
                                case 'max_file_size':
                                    if (option === 'max_file_size') {
                                        settings.max_file_size = settings.filters.max_file_size = value;
                                    }
                                    break;

                                case 'chunk_size':
                                    if (value = plupload.parseSize(value)) {
                                        settings[option] = value;
                                        settings.send_file_name = true;
                                    }
                                    break;

                                case 'multipart':
                                    settings[option] = value;
                                    if (!value) {
                                        settings.send_file_name = true;
                                    }
                                    break;

                                case 'http_method':
                                    settings[option] = value.toUpperCase() === 'PUT' ? 'PUT' : 'POST';
                                    break;

                                case 'unique_names':
                                    settings[option] = value;
                                    if (value) {
                                        settings.send_file_name = true;
                                    }
                                    break;

                                case 'filters':
                                    // for sake of backward compatibility
                                    if (plupload.typeOf(value) === 'array') {
                                        value = {
                                            mime_types: value
                                        };
                                    }

                                    if (init) {
                                        plupload.extend(settings.filters, value);
                                    } else {
                                        settings.filters = value;
                                    }

                                    // if file format filters are being updated, regenerate the matching expressions
                                    if (value.mime_types) {
                                        if (plupload.typeOf(value.mime_types) === 'string') {
                                            value.mime_types = o.core.utils.Mime.mimes2extList(value.mime_types);
                                        }

                                        value.mime_types.regexp = (function(filters) {
                                            var extensionsRegExp = [];

                                            plupload.each(filters, function(filter) {
                                                plupload.each(filter.extensions.split(/,/), function(ext) {
                                                    if (/^\s*\*\s*$/.test(ext)) {
                                                        extensionsRegExp.push('\\.*');
                                                    } else {
                                                        extensionsRegExp.push('\\.' + ext.replace(new RegExp('[' + ('/^$.*+?|()[]{}\\'.replace(/./g, '\\$&')) + ']', 'g'), '\\$&'));
                                                    }
                                                });
                                            });

                                            return new RegExp('(' + extensionsRegExp.join('|') + ')$', 'i');
                                        }(value.mime_types));

                                        settings.filters.mime_types = value.mime_types;
                                    }
                                    break;

                                case 'resize':
                                    if (value) {
                                        settings.resize = plupload.extend({
                                            preserve_headers: true,
                                            crop: false
                                        }, value);
                                    } else {
                                        settings.resize = false;
                                    }
                                    break;

                                case 'prevent_duplicates':
                                    settings.prevent_duplicates = settings.filters.prevent_duplicates = !!value;
                                    break;

                                // options that require reinitialisation
                                case 'container':
                                case 'browse_button':
                                case 'drop_element':
                                    value = 'container' === option
                                        ? plupload.get(value)
                                        : plupload.getAll(value)
                                    ;

                                case 'runtimes':
                                case 'multi_selection':
                                case 'flash_swf_url':
                                case 'silverlight_xap_url':
                                    settings[option] = value;
                                    if (!init) {
                                        reinitRequired = true;
                                    }
                                    break;

                                default:
                                    settings[option] = value;
                            }

                            if (!init) {
                                self.trigger('OptionChanged', option, value, oldValue);
                            }
                        }

                        if (typeof(option) === 'object') {
                            plupload.each(option, function(value, option) {
                                _setOption(option, value, init);
                            });
                        } else {
                            _setOption(option, value, init);
                        }

                        if (init) {
                            // Normalize the list of required capabilities
                            settings.required_features = normalizeCaps(plupload.extend({}, settings));

                            // Come up with the list of capabilities that can affect default mode in a multi-mode runtimes
                            preferred_caps = normalizeCaps(plupload.extend({}, settings, {
                                required_features: true
                            }));
                        } else if (reinitRequired) {
                            self.trigger('Destroy');

                            initControls.call(self, settings, function(inited) {
                                if (inited) {
                                    self.runtime = Runtime.getInfo(getRUID()).type;
                                    self.trigger('Init', { runtime: self.runtime });
                                    self.trigger('PostInit');
                                } else {
                                    self.trigger('Error', {
                                        code : plupload.INIT_ERROR,
                                        message : plupload.translate('Init error.')
                                    });
                                }
                            });
                        }
                    }


                    // Internal event handlers
                    function onBeforeUpload(up, file) {
                        // Generate unique target filenames
                        if (up.settings.unique_names) {
                            var matches = file.name.match(/\.([^.]+)$/), ext = "part";
                            if (matches) {
                                ext = matches[1];
                            }
                            file.target_name = file.id + '.' + ext;
                        }
                    }


                    function onUploadFile(up, file) {
                        var url = up.settings.url
                            , chunkSize = up.settings.chunk_size
                            , retries = up.settings.max_retries
                            , features = up.features
                            , offset = 0
                            , blob
                        ;

                        // make sure we start at a predictable offset
                        if (file.loaded) {
                            offset = file.loaded = chunkSize ? chunkSize * Math.floor(file.loaded / chunkSize) : 0;
                        }

                        function handleError() {
                            if (retries-- > 0) {
                                delay(uploadNextChunk, 1000);
                            } else {
                                file.loaded = offset; // reset all progress

                                up.trigger('Error', {
                                    code : plupload.HTTP_ERROR,
                                    message : plupload.translate('HTTP Error.'),
                                    file : file,
                                    response : xhr.responseText,
                                    status : xhr.status,
                                    responseHeaders: xhr.getAllResponseHeaders()
                                });
                            }
                        }

                        function uploadNextChunk() {
                            var chunkBlob, args = {}, curChunkSize;

                            // make sure that file wasn't cancelled and upload is not stopped in general
                            if (file.status !== plupload.UPLOADING || up.state === plupload.STOPPED) {
                                return;
                            }

                            // send additional 'name' parameter only if required
                            if (up.settings.send_file_name) {
                                args.name = file.target_name || file.name;
                            }

                            if (chunkSize && features.chunks && blob.size > chunkSize) { // blob will be of type string if it was loaded in memory
                                curChunkSize = Math.min(chunkSize, blob.size - offset);
                                chunkBlob = blob.slice(offset, offset + curChunkSize);
                            } else {
                                curChunkSize = blob.size;
                                chunkBlob = blob;
                            }

                            // If chunking is enabled add corresponding args, no matter if file is bigger than chunk or smaller
                            if (chunkSize && features.chunks) {
                                // Setup query string arguments
                                if (up.settings.send_chunk_number) {
                                    args.chunk = Math.ceil(offset / chunkSize);
                                    args.chunks = Math.ceil(blob.size / chunkSize);
                                } else { // keep support for experimental chunk format, just in case
                                    args.offset = offset;
                                    args.total = blob.size;
                                }
                            }

                            if (up.trigger('BeforeChunkUpload', file, args, chunkBlob, offset)) {
                                uploadChunk(args, chunkBlob, curChunkSize);
                            }
                        }

                        function uploadChunk(args, chunkBlob, curChunkSize) {
                            var formData;

                            xhr = new o.xhr.XMLHttpRequest();

                            // Do we have upload progress support
                            if (xhr.upload) {
                                xhr.upload.onprogress = function(e) {
                                    file.loaded = Math.min(file.size, offset + e.loaded);
                                    up.trigger('UploadProgress', file);
                                };
                            }

                            xhr.onload = function() {
                                // check if upload made itself through
                                if (xhr.status >= 400) {
                                    handleError();
                                    return;
                                }

                                retries = up.settings.max_retries; // reset the counter

                                // Handle chunk response
                                if (curChunkSize < blob.size) {
                                    chunkBlob.destroy();

                                    offset += curChunkSize;
                                    file.loaded = Math.min(offset, blob.size);

                                    up.trigger('ChunkUploaded', file, {
                                        offset : file.loaded,
                                        total : blob.size,
                                        response : xhr.responseText,
                                        status : xhr.status,
                                        responseHeaders: xhr.getAllResponseHeaders()
                                    });

                                    // stock Android browser doesn't fire upload progress events, but in chunking mode we can fake them
                                    if (plupload.ua.browser === 'Android Browser') {
                                        // doesn't harm in general, but is not required anywhere else
                                        up.trigger('UploadProgress', file);
                                    }
                                } else {
                                    file.loaded = file.size;
                                }

                                chunkBlob = formData = null; // Free memory

                                // Check if file is uploaded
                                if (!offset || offset >= blob.size) {
                                    // If file was modified, destory the copy
                                    if (file.size != file.origSize) {
                                        blob.destroy();
                                        blob = null;
                                    }

                                    up.trigger('UploadProgress', file);

                                    file.status = plupload.DONE;
                                    file.completeTimestamp = +new Date();

                                    up.trigger('FileUploaded', file, {
                                        response : xhr.responseText,
                                        status : xhr.status,
                                        responseHeaders: xhr.getAllResponseHeaders()
                                    });
                                } else {
                                    // Still chunks left
                                    delay(uploadNextChunk, 1); // run detached, otherwise event handlers interfere
                                }
                            };

                            xhr.onerror = function() {
                                handleError();
                            };

                            xhr.onloadend = function() {
                                this.destroy();
                                xhr = null;
                            };

                            // Build multipart request
                            if (up.settings.multipart && features.multipart) {
                                xhr.open(up.settings.http_method, url, true);

                                // Set custom headers
                                plupload.each(up.settings.headers, function(value, name) {
                                    xhr.setRequestHeader(name, value);
                                });

                                formData = new o.xhr.FormData();

                                // Add multipart params
                                plupload.each(plupload.extend(args, up.settings.multipart_params), function(value, name) {
                                    formData.append(name, value);
                                });

                                // Add file and send it
                                formData.append(up.settings.file_data_name, chunkBlob);
                                xhr.send(formData, {
                                    runtime_order: up.settings.runtimes,
                                    required_caps: up.settings.required_features,
                                    preferred_caps: preferred_caps,
                                    swf_url: up.settings.flash_swf_url,
                                    xap_url: up.settings.silverlight_xap_url
                                });
                            } else {
                                // if no multipart, send as binary stream
                                url = plupload.buildUrl(up.settings.url, plupload.extend(args, up.settings.multipart_params));

                                xhr.open(up.settings.http_method, url, true);

                                // Set custom headers
                                plupload.each(up.settings.headers, function(value, name) {
                                    xhr.setRequestHeader(name, value);
                                });

                                // do not set Content-Type, if it was defined previously (see #1203)
                                if (!xhr.hasRequestHeader('Content-Type')) {
                                    xhr.setRequestHeader('Content-Type', 'application/octet-stream'); // Binary stream header
                                }

                                xhr.send(chunkBlob, {
                                    runtime_order: up.settings.runtimes,
                                    required_caps: up.settings.required_features,
                                    preferred_caps: preferred_caps,
                                    swf_url: up.settings.flash_swf_url,
                                    xap_url: up.settings.silverlight_xap_url
                                });
                            }
                        }


                        blob = file.getSource();

                        // Start uploading chunks
                        if (!plupload.isEmptyObj(up.settings.resize) && runtimeCan(blob, 'send_binary_string') && plupload.inArray(blob.type, ['image/jpeg', 'image/png']) !== -1) {
                            // Resize if required
                            resizeImage.call(this, blob, up.settings.resize, function(resizedBlob) {
                                blob = resizedBlob;
                                file.size = resizedBlob.size;
                                uploadNextChunk();
                            });
                        } else {
                            uploadNextChunk();
                        }
                    }


                    function onUploadProgress(up, file) {
                        calcFile(file);
                    }


                    function onStateChanged(up) {
                        if (up.state == plupload.STARTED) {
                            // Get start time to calculate bps
                            startTime = (+new Date());
                        } else if (up.state == plupload.STOPPED) {
                            // Reset currently uploading files
                            for (var i = up.files.length - 1; i >= 0; i--) {
                                if (up.files[i].status == plupload.UPLOADING) {
                                    up.files[i].status = plupload.QUEUED;
                                    calc();
                                }
                            }
                        }
                    }


                    function onCancelUpload() {
                        if (xhr) {
                            xhr.abort();
                        }
                    }


                    function onFileUploaded(up) {
                        calc();

                        // Upload next file but detach it from the error event
                        // since other custom listeners might want to stop the queue
                        delay(function() {
                            uploadNext.call(up);
                        }, 1);
                    }


                    function onError(up, err) {
                        if (err.code === plupload.INIT_ERROR) {
                            up.destroy();
                        }
                        // Set failed status if an error occured on a file
                        else if (err.code === plupload.HTTP_ERROR) {
                            err.file.status = plupload.FAILED;
                            err.file.completeTimestamp = +new Date();
                            calcFile(err.file);

                            // Upload next file but detach it from the error event
                            // since other custom listeners might want to stop the queue
                            if (up.state == plupload.STARTED) { // upload in progress
                                up.trigger('CancelUpload');
                                delay(function() {
                                    uploadNext.call(up);
                                }, 1);
                            }
                        }
                    }


                    function onDestroy(up) {
                        up.stop();

                        // Purge the queue
                        plupload.each(files, function(file) {
                            file.destroy();
                        });
                        files = [];

                        if (fileInputs.length) {
                            plupload.each(fileInputs, function(fileInput) {
                                fileInput.destroy();
                            });
                            fileInputs = [];
                        }

                        if (fileDrops.length) {
                            plupload.each(fileDrops, function(fileDrop) {
                                fileDrop.destroy();
                            });
                            fileDrops = [];
                        }

                        preferred_caps = {};
                        disabled = false;
                        startTime = xhr = null;
                        total.reset();
                    }


                    // Default settings
                    settings = {
                        chunk_size: 0,
                        file_data_name: 'file',
                        filters: {
                            mime_types: [],
                            prevent_duplicates: false,
                            max_file_size: 0
                        },
                        flash_swf_url: 'js/Moxie.swf',
                        http_method: 'POST',
                        max_retries: 0,
                        multipart: true,
                        multi_selection: true,
                        resize: false,
                        runtimes: Runtime.order,
                        send_file_name: true,
                        send_chunk_number: true,
                        silverlight_xap_url: 'js/Moxie.xap'
                    };


                    setOption.call(this, options, null, true);

                    // Inital total state
                    total = new plupload.QueueProgress();

                    // Add public methods
                    plupload.extend(this, {

                        /**
                         * Unique id for the Uploader instance.
                         *
                         * @property id
                         * @type String
                         */
                        id : uid,
                        uid : uid, // mOxie uses this to differentiate between event targets

                        /**
                         * Current state of the total uploading progress. This one can either be plupload.STARTED or plupload.STOPPED.
                         * These states are controlled by the stop/start methods. The default value is STOPPED.
                         *
                         * @property state
                         * @type Number
                         */
                        state : plupload.STOPPED,

                        /**
                         * Map of features that are available for the uploader runtime. Features will be filled
                         * before the init event is called, these features can then be used to alter the UI for the end user.
                         * Some of the current features that might be in this map is: dragdrop, chunks, jpgresize, pngresize.
                         *
                         * @property features
                         * @type Object
                         */
                        features : {},

                        /**
                         * Current runtime name.
                         *
                         * @property runtime
                         * @type String
                         */
                        runtime : null,

                        /**
                         * Current upload queue, an array of File instances.
                         *
                         * @property files
                         * @type Array
                         * @see plupload.File
                         */
                        files : files,

                        /**
                         * Object with name/value settings.
                         *
                         * @property settings
                         * @type Object
                         */
                        settings : settings,

                        /**
                         * Total progess information. How many files has been uploaded, total percent etc.
                         *
                         * @property total
                         * @type plupload.QueueProgress
                         */
                        total : total,


                        /**
                         * Initializes the Uploader instance and adds internal event listeners.
                         *
                         * @method init
                         */
                        init : function() {
                            var self = this, opt, preinitOpt, err;

                            preinitOpt = self.getOption('preinit');
                            if (typeof(preinitOpt) == "function") {
                                preinitOpt(self);
                            } else {
                                plupload.each(preinitOpt, function(func, name) {
                                    self.bind(name, func);
                                });
                            }

                            bindEventListeners.call(self);

                            // Check for required options
                            plupload.each(['container', 'browse_button', 'drop_element'], function(el) {
                                if (self.getOption(el) === null) {
                                    err = {
                                        code : plupload.INIT_ERROR,
                                        message : plupload.sprintf(plupload.translate("%s specified, but cannot be found."), el)
                                    }
                                    return false;
                                }
                            });

                            if (err) {
                                return self.trigger('Error', err);
                            }


                            if (!settings.browse_button && !settings.drop_element) {
                                return self.trigger('Error', {
                                    code : plupload.INIT_ERROR,
                                    message : plupload.translate("You must specify either browse_button or drop_element.")
                                });
                            }


                            initControls.call(self, settings, function(inited) {
                                var initOpt = self.getOption('init');
                                if (typeof(initOpt) == "function") {
                                    initOpt(self);
                                } else {
                                    plupload.each(initOpt, function(func, name) {
                                        self.bind(name, func);
                                    });
                                }

                                if (inited) {
                                    self.runtime = Runtime.getInfo(getRUID()).type;
                                    self.trigger('Init', { runtime: self.runtime });
                                    self.trigger('PostInit');
                                } else {
                                    self.trigger('Error', {
                                        code : plupload.INIT_ERROR,
                                        message : plupload.translate('Init error.')
                                    });
                                }
                            });
                        },

                        /**
                         * Set the value for the specified option(s).
                         *
                         * @method setOption
                         * @since 2.1
                         * @param {String|Object} option Name of the option to change or the set of key/value pairs
                         * @param {Mixed} [value] Value for the option (is ignored, if first argument is object)
                         */
                        setOption: function(option, value) {
                            setOption.call(this, option, value, !this.runtime); // until runtime not set we do not need to reinitialize
                        },

                        /**
                         * Get the value for the specified option or the whole configuration, if not specified.
                         *
                         * @method getOption
                         * @since 2.1
                         * @param {String} [option] Name of the option to get
                         * @return {Mixed} Value for the option or the whole set
                         */
                        getOption: function(option) {
                            if (!option) {
                                return settings;
                            }
                            return settings[option];
                        },

                        /**
                         * Refreshes the upload instance by dispatching out a refresh event to all runtimes.
                         * This would for example reposition flash/silverlight shims on the page.
                         *
                         * @method refresh
                         */
                        refresh : function() {
                            if (fileInputs.length) {
                                plupload.each(fileInputs, function(fileInput) {
                                    fileInput.trigger('Refresh');
                                });
                            }
                            this.trigger('Refresh');
                        },

                        /**
                         * Starts uploading the queued files.
                         *
                         * @method start
                         */
                        start : function() {
                            if (this.state != plupload.STARTED) {
                                this.state = plupload.STARTED;
                                this.trigger('StateChanged');

                                uploadNext.call(this);
                            }
                        },

                        /**
                         * Stops the upload of the queued files.
                         *
                         * @method stop
                         */
                        stop : function() {
                            if (this.state != plupload.STOPPED) {
                                this.state = plupload.STOPPED;
                                this.trigger('StateChanged');
                                this.trigger('CancelUpload');
                            }
                        },


                        /**
                         * Disables/enables browse button on request.
                         *
                         * @method disableBrowse
                         * @param {Boolean} disable Whether to disable or enable (default: true)
                         */
                        disableBrowse : function() {
                            disabled = arguments[0] !== undef ? arguments[0] : true;

                            if (fileInputs.length) {
                                plupload.each(fileInputs, function(fileInput) {
                                    fileInput.disable(disabled);
                                });
                            }

                            this.trigger('DisableBrowse', disabled);
                        },

                        /**
                         * Returns the specified file object by id.
                         *
                         * @method getFile
                         * @param {String} id File id to look for.
                         * @return {plupload.File} File object or undefined if it wasn't found;
                         */
                        getFile : function(id) {
                            var i;
                            for (i = files.length - 1; i >= 0; i--) {
                                if (files[i].id === id) {
                                    return files[i];
                                }
                            }
                        },

                        /**
                         * Adds file to the queue programmatically. Can be native file, instance of Plupload.File,
                         * instance of mOxie.File, input[type="file"] element, or array of these. Fires FilesAdded,
                         * if any files were added to the queue. Otherwise nothing happens.
                         *
                         * @method addFile
                         * @since 2.0
                         * @param {plupload.File|mOxie.File|File|Node|Array} file File or files to add to the queue.
                         * @param {String} [fileName] If specified, will be used as a name for the file
                         */
                        addFile : function(file, fileName) {
                            var self = this
                                , queue = []
                                , filesAdded = []
                                , ruid
                            ;

                            function filterFile(file, cb) {
                                var queue = [];
                                plupload.each(self.settings.filters, function(rule, name) {
                                    if (fileFilters[name]) {
                                        queue.push(function(cb) {
                                            fileFilters[name].call(self, rule, file, function(res) {
                                                cb(!res);
                                            });
                                        });
                                    }
                                });
                                plupload.inSeries(queue, cb);
                            }

                            /**
                             * @method resolveFile
                             * @private
                             * @param {moxie.file.File|moxie.file.Blob|plupload.File|File|Blob|input[type="file"]} file
                             */
                            function resolveFile(file) {
                                var type = plupload.typeOf(file);

                                // moxie.file.File
                                if (file instanceof o.file.File) {
                                    if (!file.ruid && !file.isDetached()) {
                                        if (!ruid) { // weird case
                                            return false;
                                        }
                                        file.ruid = ruid;
                                        file.connectRuntime(ruid);
                                    }
                                    resolveFile(new plupload.File(file));
                                }
                                // moxie.file.Blob
                                else if (file instanceof o.file.Blob) {
                                    resolveFile(file.getSource());
                                    file.destroy();
                                }
                                // plupload.File - final step for other branches
                                else if (file instanceof plupload.File) {
                                    if (fileName) {
                                        file.name = fileName;
                                    }

                                    queue.push(function(cb) {
                                        // run through the internal and user-defined filters, if any
                                        filterFile(file, function(err) {
                                            if (!err) {
                                                // make files available for the filters by updating the main queue directly
                                                files.push(file);
                                                // collect the files that will be passed to FilesAdded event
                                                filesAdded.push(file);

                                                self.trigger("FileFiltered", file);
                                            }
                                            delay(cb, 1); // do not build up recursions or eventually we might hit the limits
                                        });
                                    });
                                }
                                // native File or blob
                                else if (plupload.inArray(type, ['file', 'blob']) !== -1) {
                                    resolveFile(new o.file.File(null, file));
                                }
                                // input[type="file"]
                                else if (type === 'node' && plupload.typeOf(file.files) === 'filelist') {
                                    // if we are dealing with input[type="file"]
                                    plupload.each(file.files, resolveFile);
                                }
                                // mixed array of any supported types (see above)
                                else if (type === 'array') {
                                    fileName = null; // should never happen, but unset anyway to avoid funny situations
                                    plupload.each(file, resolveFile);
                                }
                            }

                            ruid = getRUID();

                            resolveFile(file);

                            if (queue.length) {
                                plupload.inSeries(queue, function() {
                                    // if any files left after filtration, trigger FilesAdded
                                    if (filesAdded.length) {
                                        self.trigger("FilesAdded", filesAdded);
                                    }
                                });
                            }
                        },

                        /**
                         * Removes a specific file.
                         *
                         * @method removeFile
                         * @param {plupload.File|String} file File to remove from queue.
                         */
                        removeFile : function(file) {
                            var id = typeof(file) === 'string' ? file : file.id;

                            for (var i = files.length - 1; i >= 0; i--) {
                                if (files[i].id === id) {
                                    return this.splice(i, 1)[0];
                                }
                            }
                        },

                        /**
                         * Removes part of the queue and returns the files removed. This will also trigger the FilesRemoved and QueueChanged events.
                         *
                         * @method splice
                         * @param {Number} start (Optional) Start index to remove from.
                         * @param {Number} length (Optional) Lengh of items to remove.
                         * @return {Array} Array of files that was removed.
                         */
                        splice : function(start, length) {
                            // Splice and trigger events
                            var removed = files.splice(start === undef ? 0 : start, length === undef ? files.length : length);

                            // if upload is in progress we need to stop it and restart after files are removed
                            var restartRequired = false;
                            if (this.state == plupload.STARTED) { // upload in progress
                                plupload.each(removed, function(file) {
                                    if (file.status === plupload.UPLOADING) {
                                        restartRequired = true; // do not restart, unless file that is being removed is uploading
                                        return false;
                                    }
                                });

                                if (restartRequired) {
                                    this.stop();
                                }
                            }

                            this.trigger("FilesRemoved", removed);

                            // Dispose any resources allocated by those files
                            plupload.each(removed, function(file) {
                                file.destroy();
                            });

                            if (restartRequired) {
                                this.start();
                            }

                            return removed;
                        },

                        /**
                         Dispatches the specified event name and its arguments to all listeners.

                         @method trigger
                         @param {String} name Event name to fire.
                         @param {Object..} Multiple arguments to pass along to the listener functions.
                         */

                        // override the parent method to match Plupload-like event logic
                        dispatchEvent: function(type) {
                            var list, args, result;

                            type = type.toLowerCase();

                            list = this.hasEventListener(type);

                            if (list) {
                                // sort event list by priority
                                list.sort(function(a, b) { return b.priority - a.priority; });

                                // first argument should be current plupload.Uploader instance
                                args = [].slice.call(arguments);
                                args.shift();
                                args.unshift(this);

                                for (var i = 0; i < list.length; i++) {
                                    // Fire event, break chain if false is returned
                                    if (list[i].fn.apply(list[i].scope, args) === false) {
                                        return false;
                                    }
                                }
                            }
                            return true;
                        },

                        /**
                         Check whether uploader has any listeners to the specified event.

                         @method hasEventListener
                         @param {String} name Event name to check for.
                         */


                        /**
                         Adds an event listener by name.

                         @method bind
                         @param {String} name Event name to listen for.
                         @param {function} fn Function to call ones the event gets fired.
                         @param {Object} [scope] Optional scope to execute the specified function in.
                         @param {Number} [priority=0] Priority of the event handler - handlers with higher priorities will be called first
                         */
                        bind: function(name, fn, scope, priority) {
                            // adapt moxie EventTarget style to Plupload-like
                            plupload.Uploader.prototype.bind.call(this, name, fn, priority, scope);
                        },

                        /**
                         Removes the specified event listener.

                         @method unbind
                         @param {String} name Name of event to remove.
                         @param {function} fn Function to remove from listener.
                         */

                        /**
                         Removes all event listeners.

                         @method unbindAll
                         */


                        /**
                         * Destroys Plupload instance and cleans after itself.
                         *
                         * @method destroy
                         */
                        destroy : function() {
                            this.trigger('Destroy');
                            settings = total = null; // purge these exclusively
                            this.unbindAll();
                        }
                    });
                };

                plupload.Uploader.prototype = o.core.EventTarget.instance;

                /**
                 * Constructs a new file instance.
                 *
                 * @class File
                 * @constructor
                 *
                 * @param {Object} file Object containing file properties
                 * @param {String} file.name Name of the file.
                 * @param {Number} file.size File size.
                 */
                plupload.File = (function() {
                    var filepool = {};

                    function PluploadFile(file) {

                        plupload.extend(this, {

                            /**
                             * File id this is a globally unique id for the specific file.
                             *
                             * @property id
                             * @type String
                             */
                            id: plupload.guid(),

                            /**
                             * File name for example "myfile.gif".
                             *
                             * @property name
                             * @type String
                             */
                            name: file.name || file.fileName,

                            /**
                             * File type, `e.g image/jpeg`
                             *
                             * @property type
                             * @type String
                             */
                            type: file.type || '',

                            /**
                             * File size in bytes (may change after client-side manupilation).
                             *
                             * @property size
                             * @type Number
                             */
                            size: file.size || file.fileSize,

                            /**
                             * Original file size in bytes.
                             *
                             * @property origSize
                             * @type Number
                             */
                            origSize: file.size || file.fileSize,

                            /**
                             * Number of bytes uploaded of the files total size.
                             *
                             * @property loaded
                             * @type Number
                             */
                            loaded: 0,

                            /**
                             * Number of percentage uploaded of the file.
                             *
                             * @property percent
                             * @type Number
                             */
                            percent: 0,

                            /**
                             * Status constant matching the plupload states QUEUED, UPLOADING, FAILED, DONE.
                             *
                             * @property status
                             * @type Number
                             * @see plupload
                             */
                            status: plupload.QUEUED,

                            /**
                             * Date of last modification.
                             *
                             * @property lastModifiedDate
                             * @type {String}
                             */
                            lastModifiedDate: file.lastModifiedDate || (new Date()).toLocaleString(), // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)


                            /**
                             * Set when file becomes plupload.DONE or plupload.FAILED. Is used to calculate proper plupload.QueueProgress.bytesPerSec.
                             * @private
                             * @property completeTimestamp
                             * @type {Number}
                             */
                            completeTimestamp: 0,

                            /**
                             * Returns native window.File object, when it's available.
                             *
                             * @method getNative
                             * @return {window.File} or null, if plupload.File is of different origin
                             */
                            getNative: function() {
                                var file = this.getSource().getSource();
                                return plupload.inArray(plupload.typeOf(file), ['blob', 'file']) !== -1 ? file : null;
                            },

                            /**
                             * Returns mOxie.File - unified wrapper object that can be used across runtimes.
                             *
                             * @method getSource
                             * @return {mOxie.File} or null
                             */
                            getSource: function() {
                                if (!filepool[this.id]) {
                                    return null;
                                }
                                return filepool[this.id];
                            },

                            /**
                             * Destroys plupload.File object.
                             *
                             * @method destroy
                             */
                            destroy: function() {
                                var src = this.getSource();
                                if (src) {
                                    src.destroy();
                                    delete filepool[this.id];
                                }
                            }
                        });

                        filepool[this.id] = file;
                    }

                    return PluploadFile;
                }());


                /**
                 * Constructs a queue progress.
                 *
                 * @class QueueProgress
                 * @constructor
                 */
                plupload.QueueProgress = function() {
                    var self = this; // Setup alias for self to reduce code size when it's compressed

                    /**
                     * Total queue file size.
                     *
                     * @property size
                     * @type Number
                     */
                    self.size = 0;

                    /**
                     * Total bytes uploaded.
                     *
                     * @property loaded
                     * @type Number
                     */
                    self.loaded = 0;

                    /**
                     * Number of files uploaded.
                     *
                     * @property uploaded
                     * @type Number
                     */
                    self.uploaded = 0;

                    /**
                     * Number of files failed to upload.
                     *
                     * @property failed
                     * @type Number
                     */
                    self.failed = 0;

                    /**
                     * Number of files yet to be uploaded.
                     *
                     * @property queued
                     * @type Number
                     */
                    self.queued = 0;

                    /**
                     * Total percent of the uploaded bytes.
                     *
                     * @property percent
                     * @type Number
                     */
                    self.percent = 0;

                    /**
                     * Bytes uploaded per second.
                     *
                     * @property bytesPerSec
                     * @type Number
                     */
                    self.bytesPerSec = 0;

                    /**
                     * Resets the progress to its initial values.
                     *
                     * @method reset
                     */
                    self.reset = function() {
                        self.size = self.loaded = self.uploaded = self.failed = self.queued = self.percent = self.bytesPerSec = 0;
                    };
                };

                exports.plupload = plupload;

            }(this, moxie));

        }));

        /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
         * qiniu-js-sdk v@VERSION
         *
         * Copyright 2015 by Qiniu
         * Released under GPL V2 License.
         *
         * GitHub: http://github.com/qiniu/js-sdk
         *
         * Date: @DATE
         */

        /*global plupload ,moxie*/
        /*global ActiveXObject */
        /*exported Qiniu */
        /*exported QiniuJsSDK */

        ;(function (global) {


            /**
             * Creates new cookie or removes cookie with negative expiration
             * @param  key       The key or identifier for the store
             * @param  value     Contents of the store
             * @param  exp       Expiration - creation defaults to 30 days
             */
            function createCookie(key, value, exp) {
                var date = new Date();
                date.setTime(date.getTime() + (exp * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
                document.cookie = key + "=" + value + expires + "; path=/";
            }

            /**
             * Returns contents of cookie
             * @param  key       The key or identifier for the store
             */
            function readCookie(key) {
                var nameEQ = key + "=";
                var ca = document.cookie.split(';');
                for (var i = 0, max = ca.length; i < max; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1, c.length);
                    }
                    if (c.indexOf(nameEQ) === 0) {
                        return c.substring(nameEQ.length, c.length);
                    }
                }
                return null;
            }

            // if current browser is not support localStorage
            // use cookie to make a polyfill
            if (!window.localStorage) {
                window.localStorage = {
                    setItem: function (key, value) {
                        createCookie(key, value, 30);
                    },
                    getItem: function (key) {
                        return readCookie(key);
                    },
                    removeItem: function (key) {
                        createCookie(key, '', -1);
                    }
                };
            }

            function QiniuJsSDK() {
                var moxie = __webpack_require__(0);
                window.moxie = moxie;
                var plupload = __webpack_require__(1);
                window.plupload = plupload;


                var that = this;

                /**
                 * detect IE version
                 * if current browser is not IE
                 *     it will return false
                 * else
                 *     it will return version of current IE browser
                 * @return {Number|Boolean} IE version or false
                 */
                this.detectIEVersion = function () {
                    var v = 4,
                        div = document.createElement('div'),
                        all = div.getElementsByTagName('i');
                    while (
                        div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
                            all[0]
                        ) {
                        v++;
                    }
                    return v > 4 ? v : false;
                };

                var logger = {
                    MUTE: 0,
                    FATA: 1,
                    ERROR: 2,
                    WARN: 3,
                    INFO: 4,
                    DEBUG: 5,
                    TRACE: 6,
                    level: 0
                };

                function log(type, args) {
                    var header = "[qiniu-js-sdk][" + type + "]";
                    var msg = header;
                    for (var i = 0; i < args.length; i++) {
                        if (typeof args[i] === "string") {
                            msg += " " + args[i];
                        } else {
                            msg += " " + that.stringifyJSON(args[i]);
                        }
                    }
                    if (that.detectIEVersion()) {
                        // http://stackoverflow.com/questions/5538972/console-log-apply-not-working-in-ie9
                        //var log = Function.prototype.bind.call(console.log, console);
                        //log.apply(console, args);
                        console.log(msg);
                    } else {
                        args.unshift(header);
                        //console.log.apply(console, args);
                    }
                    if (document.getElementById('qiniu-js-sdk-log')) {
                        document.getElementById('qiniu-js-sdk-log').innerHTML += '<p>' + msg + '</p>';
                    }
                }

                function makeLogFunc(code) {
                    var func = code.toLowerCase();
                    logger[func] = function () {
                        // logger[func].history = logger[func].history || [];
                        // logger[func].history.push(arguments);
                        if (window.console && window.console.log && logger.level >= logger[code]) {
                            var args = Array.prototype.slice.call(arguments);
                            log(func, args);
                        }
                    };
                }

                for (var property in logger) {
                    if (logger.hasOwnProperty(property) && (typeof logger[property]) === "number" && !logger.hasOwnProperty(property.toLowerCase())) {
                        makeLogFunc(property);
                    }
                }


                var qiniuUploadUrl;
                if (window.location.protocol === 'https:') {
                    qiniuUploadUrl = 'https://up.qbox.me';
                } else {
                    qiniuUploadUrl = 'http://upload.qiniu.com';
                }

                /**
                 * qiniu upload urls
                 * 'qiniuUploadUrls' is used to change target when current url is not avaliable
                 * @type {Array}
                 */
                var qiniuUploadUrls = [
                    "http://upload.qiniu.com",
                    "http://up.qiniu.com"
                ];

                var qiniuUpHosts = {
                    "http": [
                        "http://upload.qiniu.com",
                        "http://up.qiniu.com"
                    ],
                    "https": [
                        "https://up.qbox.me"
                    ]
                };

                var changeUrlTimes = 0;

                function StatisticsLogger() {
                    // api to collect upload logs
                    var qiniuCollectUploadLogUrl = "https://uplog.qbox.me/log/3";

                    /**
                     * { log: string, status: number }[] status: 0 待处理， 1 正在发送， 2 发送完毕
                     */
                    var queue = [];
                    var TaskStatus = {
                        waiting: 0,
                        processing: 1,
                        finished: 2
                    };

                    /**
                     * send logs to statistics server
                     *
                     * @param {number} code status code
                     * @param {string} req_id request id
                     * @param {string} host
                     * @param {string} remote_ip
                     * @param {string} port
                     * @param {string} duration
                     * @param {string} up_time
                     * @param {number} bytes_sent uploaded size (bytes)
                     * @param {string} up_type js sdk runtime: html5, html4, flash
                     * @param {number} file_size file total size (bytes)
                     */
                    this.log = function (code, req_id, host, remote_ip, port, duration, up_time, bytes_sent, up_type, file_size) {
                        var log = Array.prototype.join.call(arguments, ',');
                        queue.push({
                            log: log,
                            status: TaskStatus.waiting
                        });
                        logger.debug("[STATISTICS] send log to statistics server", log);
                    };

                    function tick() {
                        var unFinishedTasks = [];
                        for (var i = 0; i < queue.length; i++) {
                            if (queue[i].status !== TaskStatus.finished) {
                                unFinishedTasks.push(queue[i]);
                            }
                            if (queue[i].status === TaskStatus.waiting) {
                                send(queue[i]);
                            }
                        }
                        queue = unFinishedTasks;
                    }

                    function send(task) {
                        task.status = TaskStatus.processing;
                        var ajax = that.createAjax();
                        ajax.open('POST', qiniuCollectUploadLogUrl, true);
                        ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
                        ajax.onreadystatechange = function () {
                            if (ajax.readyState === 4) {
                                if (ajax.status === 200) {
                                    logger.debug("[STATISTICS] successfully report log to server");
                                    task.status = TaskStatus.finished;
                                } else {
                                    logger.debug("[STATISTICS] report log to server failed");
                                    task.status = TaskStatus.waiting;
                                }
                            }
                        };
                        ajax.send(task.log);
                    }

                    // start a timer to report
                    setInterval(tick, 1000);
                }
                var statisticsLogger = new StatisticsLogger();
                var ExtraErrors = {
                    ZeroSizeFile: -6,
                    InvalidToken: -5,
                    InvalidArgument: -4,
                    InvalidFile: -3,
                    Cancelled: -2,
                    NetworkError: -1,
                    UnknownError: 0,
                    TimedOut: -1001,
                    UnknownHost: -1003,
                    CannotConnectToHost: -1004,
                    NetworkConnectionLost: -1005
                };

                /**
                 * reset upload url
                 * if current page protocal is https
                 *     it will always return 'https://up.qbox.me'
                 * else
                 *     it will set 'qiniuUploadUrl' value with 'qiniuUploadUrls' looply
                 */
                this.resetUploadUrl = function () {
                    var hosts = window.location.protocol === 'https:' ? qiniuUpHosts.https : qiniuUpHosts.http;
                    var i = changeUrlTimes;
                    qiniuUploadUrl = hosts[0];
                    changeUrlTimes++;
                    logger.debug('resetUploadUrl: ' + qiniuUploadUrl);
                };

                // this.resetUploadUrl();


                /**
                 * is image
                 * @param  {String}  url of a file
                 * @return {Boolean} file is a image or not
                 */
                this.isImage = function (url) {
                    url = url.split(/[?#]/)[0];
                    return (/\.(png|jpg|jpeg|gif|bmp)$/i).test(url);
                };

                /**
                 * get file extension
                 * @param  {String} filename
                 * @return {String} file extension
                 * @example
                 *     input: test.txt
                 *     output: txt
                 */
                this.getFileExtension = function (filename) {
                    var tempArr = filename.split(".");
                    var ext;
                    if (tempArr.length === 1 || (tempArr[0] === "" && tempArr.length === 2)) {
                        ext = "";
                    } else {
                        ext = tempArr.pop().toLowerCase(); //get the extension and make it lower-case
                    }
                    return ext;
                };

                /**
                 * encode string by utf8
                 * @param  {String} string to encode
                 * @return {String} encoded string
                 */
                this.utf8_encode = function (argString) {
                    // http://kevin.vanzonneveld.net
                    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
                    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                    // +   improved by: sowberry
                    // +    tweaked by: Jack
                    // +   bugfixed by: Onno Marsman
                    // +   improved by: Yves Sucaet
                    // +   bugfixed by: Onno Marsman
                    // +   bugfixed by: Ulrich
                    // +   bugfixed by: Rafal Kukawski
                    // +   improved by: kirilloid
                    // +   bugfixed by: kirilloid
                    // *     example 1: this.utf8_encode('Kevin van Zonneveld');
                    // *     returns 1: 'Kevin van Zonneveld'

                    if (argString === null || typeof argString === 'undefined') {
                        return '';
                    }

                    var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                    var utftext = '',
                        start, end, stringl = 0;

                    start = end = 0;
                    stringl = string.length;
                    for (var n = 0; n < stringl; n++) {
                        var c1 = string.charCodeAt(n);
                        var enc = null;

                        if (c1 < 128) {
                            end++;
                        } else if (c1 > 127 && c1 < 2048) {
                            enc = String.fromCharCode(
                                (c1 >> 6) | 192, (c1 & 63) | 128
                            );
                        } else if (c1 & 0xF800 ^ 0xD800 > 0) {
                            enc = String.fromCharCode(
                                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                            );
                        } else { // surrogate pairs
                            if (c1 & 0xFC00 ^ 0xD800 > 0) {
                                throw new RangeError('Unmatched trail surrogate at ' + n);
                            }
                            var c2 = string.charCodeAt(++n);
                            if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
                            }
                            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
                            enc = String.fromCharCode(
                                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                            );
                        }
                        if (enc !== null) {
                            if (end > start) {
                                utftext += string.slice(start, end);
                            }
                            utftext += enc;
                            start = end = n + 1;
                        }
                    }

                    if (end > start) {
                        utftext += string.slice(start, stringl);
                    }

                    return utftext;
                };

                this.base64_decode = function (data) {
                    // http://kevin.vanzonneveld.net
                    // +   original by: Tyler Akins (http://rumkin.com)
                    // +   improved by: Thunder.m
                    // +      input by: Aman Gupta
                    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                    // +   bugfixed by: Onno Marsman
                    // +   bugfixed by: Pellentesque Malesuada
                    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                    // +      input by: Brett Zamir (http://brett-zamir.me)
                    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                    // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
                    // *     returns 1: 'Kevin van Zonneveld'
                    // mozilla has this native
                    // - but breaks in 2.0.0.12!
                    //if (typeof this.window['atob'] == 'function') {
                    //    return atob(data);
                    //}
                    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                        ac = 0,
                        dec = "",
                        tmp_arr = [];

                    if (!data) {
                        return data;
                    }

                    data += '';

                    do { // unpack four hexets into three octets using index points in b64
                        h1 = b64.indexOf(data.charAt(i++));
                        h2 = b64.indexOf(data.charAt(i++));
                        h3 = b64.indexOf(data.charAt(i++));
                        h4 = b64.indexOf(data.charAt(i++));

                        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                        o1 = bits >> 16 & 0xff;
                        o2 = bits >> 8 & 0xff;
                        o3 = bits & 0xff;

                        if (h3 === 64) {
                            tmp_arr[ac++] = String.fromCharCode(o1);
                        } else if (h4 === 64) {
                            tmp_arr[ac++] = String.fromCharCode(o1, o2);
                        } else {
                            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
                        }
                    } while (i < data.length);

                    dec = tmp_arr.join('');

                    return dec;
                };

                /**
                 * encode data by base64
                 * @param  {String} data to encode
                 * @return {String} encoded data
                 */
                this.base64_encode = function (data) {
                    // http://kevin.vanzonneveld.net
                    // +   original by: Tyler Akins (http://rumkin.com)
                    // +   improved by: Bayron Guevara
                    // +   improved by: Thunder.m
                    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                    // +   bugfixed by: Pellentesque Malesuada
                    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                    // -    depends on: this.utf8_encode
                    // *     example 1: this.base64_encode('Kevin van Zonneveld');
                    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
                    // mozilla has this native
                    // - but breaks in 2.0.0.12!
                    //if (typeof this.window['atob'] == 'function') {
                    //    return atob(data);
                    //}
                    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                        ac = 0,
                        enc = '',
                        tmp_arr = [];

                    if (!data) {
                        return data;
                    }

                    data = this.utf8_encode(data + '');

                    do { // pack three octets into four hexets
                        o1 = data.charCodeAt(i++);
                        o2 = data.charCodeAt(i++);
                        o3 = data.charCodeAt(i++);

                        bits = o1 << 16 | o2 << 8 | o3;

                        h1 = bits >> 18 & 0x3f;
                        h2 = bits >> 12 & 0x3f;
                        h3 = bits >> 6 & 0x3f;
                        h4 = bits & 0x3f;

                        // use hexets to index into b64, and append result to encoded string
                        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
                    } while (i < data.length);

                    enc = tmp_arr.join('');

                    switch (data.length % 3) {
                        case 1:
                            enc = enc.slice(0, -2) + '==';
                            break;
                        case 2:
                            enc = enc.slice(0, -1) + '=';
                            break;
                    }

                    return enc;
                };

                /**
                 * encode string in url by base64
                 * @param {String} string in url
                 * @return {String} encoded string
                 */
                this.URLSafeBase64Encode = function (v) {
                    v = this.base64_encode(v);
                    return v.replace(/\//g, '_').replace(/\+/g, '-');
                };

                this.URLSafeBase64Decode = function (v) {
                    v = v.replace(/_/g, '/').replace(/-/g, '+');
                    return this.base64_decode(v);
                };

                // TODO: use mOxie
                /**
                 * craete object used to AJAX
                 * @return {Object}
                 */
                this.createAjax = function (argument) {
                    var xmlhttp = {};
                    if (window.XMLHttpRequest) {
                        xmlhttp = new XMLHttpRequest();
                    } else {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    return xmlhttp;
                };

                // TODO: enhance IE compatibility
                /**
                 * parse json string to javascript object
                 * @param  {String} json string
                 * @return {Object} object
                 */
                this.parseJSON = function (data) {
                    // Attempt to parse using the native JSON parser first
                    if (window.JSON && window.JSON.parse) {
                        return window.JSON.parse(data);
                    }

                    //var rx_one = /^[\],:{}\s]*$/,
                    //    rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    //    rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    //    rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                    //var json;

                    var text = String(data);
                    rx_dangerous.lastIndex = 0;
                    if (rx_dangerous.test(text)) {
                        text = text.replace(rx_dangerous, function (a) {
                            return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                        });
                    }

                    // todo 使用一下判断,增加安全性
                    //if (
                    //    rx_one.test(
                    //        text
                    //            .replace(rx_two, '@')
                    //            .replace(rx_three, ']')
                    //            .replace(rx_four, '')
                    //    )
                    //) {
                    //    return eval('(' + text + ')');
                    //}

                    return eval('(' + text + ')');
                };

                /**
                 * parse javascript object to json string
                 * @param  {Object} object
                 * @return {String} json string
                 */
                this.stringifyJSON = function (obj) {
                    // Attempt to parse using the native JSON parser first
                    if (window.JSON && window.JSON.stringify) {
                        return window.JSON.stringify(obj);
                    }
                    switch (typeof (obj)) {
                        case 'string':
                            return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';
                        case 'array':
                            return '[' + obj.map(that.stringifyJSON).join(',') + ']';
                        case 'object':
                            if (obj instanceof Array) {
                                var strArr = [];
                                var len = obj.length;
                                for (var i = 0; i < len; i++) {
                                    strArr.push(that.stringifyJSON(obj[i]));
                                }
                                return '[' + strArr.join(',') + ']';
                            } else if (obj === null) {
                                return 'null';
                            } else {
                                var string = [];
                                for (var property in obj) {
                                    if (obj.hasOwnProperty(property)) {
                                        string.push(that.stringifyJSON(property) + ':' + that.stringifyJSON(obj[property]));
                                    }
                                }
                                return '{' + string.join(',') + '}';
                            }
                            break;
                        case 'number':
                            return obj;
                        case false:
                            return obj;
                        case 'boolean':
                            return obj;
                    }
                };

                /**
                 * trim space beside text
                 * @param  {String} untrimed string
                 * @return {String} trimed string
                 */
                this.trim = function (text) {
                    return text === null ? "" : text.replace(/^\s+|\s+$/g, '');
                };

                /**
                 * create a uploader by QiniuJsSDK
                 * @param  {object} options to create a new uploader
                 * @return {object} uploader
                 */
                this.uploader = function (op) {

                    /********** inner function define start **********/

                        // according the different condition to reset chunk size
                        // and the upload strategy according with the chunk size
                        // when chunk size is zero will cause to direct upload
                        // see the statement binded on 'BeforeUpload' event
                    var reset_chunk_size = function () {
                            var ie = that.detectIEVersion();
                            var BLOCK_BITS, MAX_CHUNK_SIZE, chunk_size;
                            // case Safari 5、Windows 7、iOS 7 set isSpecialSafari to true
                            var isSpecialSafari = (moxie.core.utils.Env.browser === "Safari" && moxie.core.utils.Env.version <= 5 && moxie.core.utils.Env.os === "Windows" && moxie.core.utils.Env.osVersion === "7") || (moxie.core.utils.Env.browser === "Safari" && moxie.core.utils.Env.os === "iOS" && moxie.core.utils.Env.osVersion === "7");
                            // case IE 9-，chunk_size is not empty and flash is included in runtimes
                            // set op.chunk_size to zero
                            //if (ie && ie < 9 && op.chunk_size && op.runtimes.indexOf('flash') >= 0) {
                            if (ie && ie < 9 && op.chunk_size && op.runtimes.indexOf('flash') >= 0) {
                                //  link: http://www.plupload.com/docs/Frequently-Asked-Questions#when-to-use-chunking-and-when-not
                                //  when plupload chunk_size setting is't null ,it cause bug in ie8/9  which runs  flash runtimes (not support html5) .
                                op.chunk_size = 0;
                            } else if (isSpecialSafari) {
                                // win7 safari / iOS7 safari have bug when in chunk upload mode
                                // reset chunk_size to 0
                                // disable chunk in special version safari
                                op.chunk_size = 0;
                            } else {
                                BLOCK_BITS = 20;
                                MAX_CHUNK_SIZE = 4 << BLOCK_BITS; //4M

                                chunk_size = plupload.parseSize(op.chunk_size);
                                if (chunk_size > MAX_CHUNK_SIZE) {
                                    op.chunk_size = MAX_CHUNK_SIZE;
                                }
                                // qiniu service  max_chunk_size is 4m
                                // reset chunk_size to max_chunk_size(4m) when chunk_size > 4m
                            }
                            // if op.chunk_size set 0 will be cause to direct upload
                        };

                    var getHosts = function (hosts) {
                        var result = [];
                        var uploadIndex = -1;
                        for (var i = 0; i < hosts.length; i++) {
                            var host = hosts[i];
                            if (host.indexOf("upload") !== -1) {
                                uploadIndex = i;
                            }
                            if (host.indexOf('-H') === 0) {
                                result.push(host.split(' ')[2]);
                            } else {
                                result.push(host);
                            }
                        }

                        if (uploadIndex !== -1) {
                            //make upload domains first
                            var uploadDomain = result[uploadIndex];
                            result[uploadIndex] = result[0];
                            result[0] = uploadDomain;
                        }
                        return result;
                    };

                    var getPutPolicy = function (uptoken) {
                        var segments = uptoken.split(":");
                        var ak = segments[0];
                        var putPolicy = that.parseJSON(that.URLSafeBase64Decode(segments[2]));
                        putPolicy.ak = ak;
                        if (putPolicy.scope.indexOf(":") >= 0) {
                            putPolicy.bucket = putPolicy.scope.split(":")[0];
                            putPolicy.key = putPolicy.scope.split(":")[1];
                        } else {
                            putPolicy.bucket = putPolicy.scope;
                        }
                        return putPolicy;
                    };

                    var getUpHosts = function (uptoken) {
                        var putPolicy = getPutPolicy(uptoken);
                        // var uphosts_url = "//uc.qbox.me/v1/query?ak="+ak+"&bucket="+putPolicy.scope;
                        // IE9 does not support protocol relative url
                        var uphosts_url = "http:" + "//uc.qbox.me/v1/query?ak=" + putPolicy.ak + "&bucket=" + putPolicy.bucket;
                        logger.debug("putPolicy: ", putPolicy);
                        logger.debug("get uphosts from: ", uphosts_url);
                        var ie = that.detectIEVersion();
                        var ajax;
                        if (ie && ie <= 9) {
                            ajax = new moxie.xhr.XMLHttpRequest();
                            moxie.core.utils.Env.swf_url = op.flash_swf_url;
                        } else {
                            ajax = that.createAjax();
                        }
                        ajax.open('GET', uphosts_url, false);
                        var onreadystatechange = function () {
                            logger.debug("ajax.readyState: ", ajax.readyState);
                            if (ajax.readyState === 4) {
                                logger.debug("ajax.status: ", ajax.status);
                                if (ajax.status < 400) {
                                    var res = that.parseJSON(ajax.responseText);
                                    qiniuUpHosts.http = getHosts(res.http.up);
                                    qiniuUpHosts.https = getHosts(res.https.up);
                                    logger.debug("get new uphosts: ", qiniuUpHosts);
                                    that.resetUploadUrl();
                                } else {
                                    logger.error("get uphosts error: ", ajax.responseText);
                                }
                            }
                        };
                        if (ie && ie <= 9) {
                            ajax.bind('readystatechange', onreadystatechange);
                        } else {
                            ajax.onreadystatechange = onreadystatechange;
                        }
                        ajax.send();
                        // ajax.send();
                        // if (ajax.status < 400) {
                        //     var res = that.parseJSON(ajax.responseText);
                        //     qiniuUpHosts.http = getHosts(res.http.up);
                        //     qiniuUpHosts.https = getHosts(res.https.up);
                        //     logger.debug("get new uphosts: ", qiniuUpHosts);
                        //     that.resetUploadUrl();
                        // } else {
                        //     logger.error("get uphosts error: ", ajax.responseText);
                        // }
                        return;
                    };

                    var getUptoken = function (file) {
                        if (!that.token || (op.uptoken_url && that.tokenInfo.isExpired())) {
                            return getNewUpToken(file);
                        } else {
                            return that.token;
                        }
                    };
                    uptoken_url
                    // getNewUptoken maybe called at Init Event or BeforeUpload Event
                    // case Init Event, the file param of getUptken will be set a null value
                    // if op.uptoken has value, set uptoken with op.uptoken
                    // else if op.uptoken_url has value, set uptoken from op.uptoken_url
                    // else if op.uptoken_func has value, set uptoken by result of op.uptoken_func
                    var getNewUpToken = function (file) {
                        if (op.uptoken) {
                            that.token = op.uptoken;
                        } else if (op.uptoken_url) {
                            logger.debug("get uptoken from: ", that.uptoken_url);
                            // TODO: use mOxie
                            var ajax = that.createAjax();
                            ajax.open('GET', that.uptoken_url + '?' + (+new Date()), false);
                            // ajax.setRequestHeader("If-Modified-Since", "0");
                            // ajax.onreadystatechange = function() {
                            //     if (ajax.readyState === 4 && ajax.status === 200) {
                            //         var res = that.parseJSON(ajax.responseText);
                            //         that.token = res.uptoken;
                            //     }
                            // };
                            ajax.send();
                            if (ajax.status === 200) {
                                var res = that.parseJSON(ajax.responseText);
                                that.token = res.uptoken;
                                var segments = that.token.split(":");
                                var putPolicy = that.parseJSON(that.URLSafeBase64Decode(segments[2]));
                                if (!that.tokenMap) {
                                    that.tokenMap = {};
                                }
                                var getTimestamp = function (time) {
                                    return Math.ceil(time.getTime() / 1000);
                                };
                                var serverTime = getTimestamp(new Date(ajax.getResponseHeader("date")));
                                var clientTime = getTimestamp(new Date());
                                that.tokenInfo = {
                                    serverDelay: clientTime - serverTime,
                                    deadline: putPolicy.deadline/1000,
                                    isExpired: function () {
                                        var leftTime = this.deadline - getTimestamp(new Date()) + this.serverDelay;
                                        return leftTime < 600;
                                    }
                                };
                                logger.debug("get new uptoken: ", that.token);
                                logger.debug("get token info: ", that.tokenInfo);
                            } else {
                                logger.error("get uptoken error: ", ajax.responseText);
                            }
                        } else if (op.uptoken_func) {
                            logger.debug("get uptoken from uptoken_func");
                            that.token = op.uptoken_func(file);
                            logger.debug("get new uptoken: ", that.token);
                        } else {
                            logger.error("one of [uptoken, uptoken_url, uptoken_func] settings in options is required!");
                        }
                        if (that.token) {
                            getUpHosts(that.token);
                        }
                        return that.token;
                    };

                    // get file key according with the user passed options
                    var getFileKey = function (up, file, func) {
                        // WARNING
                        // When you set the key in putPolicy by "scope": "bucket:key"
                        // You should understand the risk of override a file in the bucket
                        // So the code below that automatically get key from uptoken has been commented
                        // var putPolicy = getPutPolicy(that.token)
                        // if (putPolicy.key) {
                        //     logger.debug("key is defined in putPolicy.scope: ", putPolicy.key)
                        //     return putPolicy.key
                        // }
                        var key = '',
                            unique_names = false;
                        if (!op.save_key) {
                            unique_names = up.getOption && up.getOption('unique_names');
                            unique_names = unique_names || (up.settings && up.settings.unique_names);
                            if (unique_names) {
                                var ext = that.getFileExtension(file.name);
                                key = ext ? file.id + '.' + ext : file.id;
                            } else if (typeof func === 'function') {
                                key = func(up, file);
                            } else {
                                key = file.name;
                            }
                        }
                        return key;
                    };

                    var getDomainFromUrl = function (url) {
                        if (url && url.match) {
                            var groups = url.match(/^https?:\/\/([^:^/]*)/);
                            return groups ? groups[1] : "";
                        }
                        return "";
                    };

                    var getPortFromUrl = function (url) {
                        if (url && url.match) {
                            var groups = url.match(/(^https?)/);
                            if (!groups) {
                                return "";
                            }
                            var type = groups[1];
                            groups = url.match(/^https?:\/\/([^:^/]*):(\d*)/);
                            if (groups) {
                                return groups[2];
                            } else if (type === "http") {
                                return "80";
                            } else {
                                return "443";
                            }
                        }
                        return "";
                    };

                    /********** inner function define end **********/

                    if (op.log_level) {
                        logger.level = op.log_level;
                    }

                    if (!op.domain) {
                        throw 'domain setting in options is required!';
                    }

                    if (!op.browse_button) {
                        throw 'browse_button setting in options is required!';
                    }

                    if (!op.uptoken && !op.uptoken_url && !op.uptoken_func) {
                        throw 'one of [uptoken, uptoken_url, uptoken_func] settings in options is required!';
                    }

                    logger.debug("init uploader start");

                    logger.debug("environment: ", moxie.core.utils.Env);

                    logger.debug("userAgent: ", navigator.userAgent);

                    var option = {};

                    // hold the handler from user passed options
                    var _Error_Handler = op.init && op.init.Error;
                    var _FileUploaded_Handler = op.init && op.init.FileUploaded;

                    // replace the handler for intercept
                    op.init.Error = function () {};
                    op.init.FileUploaded = function () {};

                    that.uptoken_url = op.uptoken_url;
                    that.token = '';
                    that.key_handler = typeof op.init.Key === 'function' ? op.init.Key : '';
                    this.domain = op.domain;
                    // TODO: ctx is global in scope of a uploader instance
                    // this maybe cause error
                    var ctx = '';
                    var speedCalInfo = {
                        isResumeUpload: false,
                        resumeFilesize: 0,
                        startTime: '',
                        currentTime: ''
                    };

                    reset_chunk_size();
                    logger.debug("invoke reset_chunk_size()");
                    logger.debug("op.chunk_size: ", op.chunk_size);

                    var defaultSetting = {
                        url: qiniuUploadUrl,
                        multipart_params: {
                            token: ''
                        }
                    };
                    var ie = that.detectIEVersion();
                    // case IE 9-
                    // add accept in multipart params
                    if (ie && ie <= 9) {
                        defaultSetting.multipart_params.accept = 'text/plain; charset=utf-8';
                        logger.debug("add accept text/plain in multipart params");
                    }

                    // compose options with user passed options and default setting
                    plupload.extend(option, op, defaultSetting);

                    logger.debug("option: ", option);

                    // create a new uploader with composed options
                    var uploader = new plupload.Uploader(option);

                    logger.debug("new plupload.Uploader(option)");

                    // bind getNewUpToken to 'Init' event
                    uploader.bind('Init', function (up, params) {
                        logger.debug("Init event activated");
                        // if op.get_new_uptoken is not true
                        //      invoke getNewUptoken when uploader init
                        // else
                        //      getNewUptoken everytime before a new file upload
                        if (!op.get_new_uptoken) {
                            getNewUpToken(null);
                        }
                        //getNewUpToken(null);
                    });

                    logger.debug("bind Init event");

                    // bind 'FilesAdded' event
                    // when file be added and auto_start has set value
                    // uploader will auto start upload the file
                    uploader.bind('FilesAdded', function (up, files) {
                        logger.debug("FilesAdded event activated");
                        var auto_start = up.getOption && up.getOption('auto_start');
                        auto_start = auto_start || (up.settings && up.settings.auto_start);
                        logger.debug("auto_start: ", auto_start);
                        logger.debug("files: ", files);

                        // detect is iOS
                        var is_ios = function () {
                            if (moxie.core.utils.Env.OS.toLowerCase() === "ios") {
                                return true;
                            } else {
                                return false;
                            }
                        };

                        // if current env os is iOS change file name to [time].[ext]
                        if (is_ios()) {
                            for (var i = 0; i < files.length; i++) {
                                var file = files[i];
                                var ext = that.getFileExtension(file.name);
                                file.name = file.id + "." + ext;
                            }
                        }

                        if (auto_start) {
                            setTimeout(function () {
                                up.start();
                                logger.debug("invoke up.start()");
                            }, 0);
                            // up.start();
                            // plupload.each(files, function(i, file) {
                            //     up.start();
                            //     logger.debug("invoke up.start()")
                            //     logger.debug("file: ", file);
                            // });
                        }
                        up.refresh(); // Reposition Flash/Silverlight
                    });

                    logger.debug("bind FilesAdded event");

                    // bind 'BeforeUpload' event
                    // intercept the process of upload
                    // - prepare uptoken
                    // - according the chunk size to make differnt upload strategy
                    // - resume upload with the last breakpoint of file
                    uploader.bind('BeforeUpload', function (up, file) {
                        logger.debug("BeforeUpload event activated");
                        file._start_at = new Date();
                        // add a key named speed for file object
                        file.speed = file.speed || 0;
                        ctx = '';

                        if (op.get_new_uptoken) {
                            getNewUpToken(file);
                        }

                        var directUpload = function (up, file, func) {
                            speedCalInfo.startTime = new Date().getTime();
                            var multipart_params_obj;
                            if (op.save_key) {
                                multipart_params_obj = {
                                    'token': that.token
                                };
                            } else {
                                multipart_params_obj = {
                                    'key': getFileKey(up, file, func),
                                    'token': that.token
                                };
                            }
                            var ie = that.detectIEVersion();
                            // case IE 9-
                            // add accept in multipart params
                            if (ie && ie <= 9) {
                                multipart_params_obj.accept = 'text/plain; charset=utf-8';
                                logger.debug("add accept text/plain in multipart params");
                            }

                            logger.debug("directUpload multipart_params_obj: ", multipart_params_obj);

                            var x_vars = op.x_vars;
                            if (x_vars !== undefined && typeof x_vars === 'object') {
                                for (var x_key in x_vars) {
                                    if (x_vars.hasOwnProperty(x_key)) {
                                        if (typeof x_vars[x_key] === 'function') {
                                            multipart_params_obj['x:' + x_key] = x_vars[x_key](up, file);
                                        } else if (typeof x_vars[x_key] !== 'object') {
                                            multipart_params_obj['x:' + x_key] = x_vars[x_key];
                                        }
                                    }
                                }
                            }

                            up.setOption({
                                'url': qiniuUploadUrl,
                                'multipart': true,
                                'chunk_size': is_android_weixin_or_qq() ? op.max_file_size : undefined,
                                'multipart_params': multipart_params_obj
                            });
                        };

                        // detect is weixin or qq inner browser
                        var is_android_weixin_or_qq = function () {
                            var ua = navigator.userAgent.toLowerCase();
                            if ((ua.match(/MicroMessenger/i) || moxie.core.utils.Env.browser === "QQBrowser" || ua.match(/V1_AND_SQ/i)) && moxie.core.utils.Env.OS.toLowerCase() === "android") {
                                return true;
                            } else {
                                return false;
                            }
                        };

                        var chunk_size = up.getOption && up.getOption('chunk_size');
                        chunk_size = chunk_size || (up.settings && up.settings.chunk_size);

                        logger.debug("uploader.runtime: ", uploader.runtime);
                        logger.debug("chunk_size: ", chunk_size);

                        // TODO: flash support chunk upload
                        if ((uploader.runtime === 'html5' || uploader.runtime === 'flash') && chunk_size) {
                            if (file.size < chunk_size || is_android_weixin_or_qq()) {
                                logger.debug("directUpload because file.size < chunk_size || is_android_weixin_or_qq()");
                                // direct upload if file size is less then the chunk size
                                directUpload(up, file, that.key_handler);
                            } else {
                                // TODO: need a polifill to make it work in IE 9-
                                // ISSUE: if file.name is existed in localStorage
                                // but not the same file maybe cause error
                                var localFileInfo = localStorage.getItem(file.name);
                                var blockSize = chunk_size;
                                if (localFileInfo) {
                                    // TODO: although only the html5 runtime will enter this statement
                                    // but need uniform way to make convertion between string and json
                                    localFileInfo = that.parseJSON(localFileInfo);
                                    var now = (new Date()).getTime();
                                    var before = localFileInfo.time || 0;
                                    var aDay = 24 * 60 * 60 * 1000; //  milliseconds of one day
                                    // if the last upload time is within one day
                                    //      will upload continuously follow the last breakpoint
                                    // else
                                    //      will reupload entire file
                                    if (now - before < aDay) {

                                        if (localFileInfo.percent !== 100) {
                                            if (file.size === localFileInfo.total) {
                                                // TODO: if file.name and file.size is the same
                                                // but not the same file will cause error
                                                file.percent = localFileInfo.percent;
                                                file.loaded = localFileInfo.offset;
                                                ctx = localFileInfo.ctx;

                                                // set speed info
                                                speedCalInfo.isResumeUpload = true;
                                                speedCalInfo.resumeFilesize = localFileInfo.offset;

                                                // set block size
                                                if (localFileInfo.offset + blockSize > file.size) {
                                                    blockSize = file.size - localFileInfo.offset;
                                                }
                                            } else {
                                                // remove file info when file.size is conflict with file info
                                                localStorage.removeItem(file.name);
                                            }

                                        } else {
                                            // remove file info when upload percent is 100%
                                            // avoid 499 bug
                                            localStorage.removeItem(file.name);
                                        }
                                    } else {
                                        // remove file info when last upload time is over one day
                                        localStorage.removeItem(file.name);
                                    }
                                }
                                speedCalInfo.startTime = new Date().getTime();
                                var multipart_params_obj = {};
                                var ie = that.detectIEVersion();
                                // case IE 9-
                                // add accept in multipart params
                                if (ie && ie <= 9) {
                                    multipart_params_obj.accept = 'text/plain; charset=utf-8';
                                    logger.debug("add accept text/plain in multipart params");
                                }
                                // TODO: to support bput
                                // http://developer.qiniu.com/docs/v6/api/reference/up/bput.html
                                up.setOption({
                                    'url': qiniuUploadUrl + '/mkblk/' + blockSize,
                                    'multipart': false,
                                    'chunk_size': chunk_size,
                                    'required_features': "chunks",
                                    'headers': {
                                        'Authorization': 'UpToken ' + getUptoken(file)
                                    },
                                    'multipart_params': multipart_params_obj
                                });
                            }
                        } else {
                            logger.debug("directUpload because uploader.runtime !== 'html5' || uploader.runtime !== 'flash' || !chunk_size");
                            // direct upload if runtime is not html5
                            directUpload(up, file, that.key_handler);
                        }
                    });

                    logger.debug("bind BeforeUpload event");

                    // bind 'UploadProgress' event
                    // calculate upload speed
                    uploader.bind('UploadProgress', function (up, file) {
                        logger.trace("UploadProgress event activated");
                        speedCalInfo.currentTime = new Date().getTime();
                        var timeUsed = speedCalInfo.currentTime - speedCalInfo.startTime; // ms
                        var fileUploaded = file.loaded || 0;
                        if (speedCalInfo.isResumeUpload) {
                            fileUploaded = file.loaded - speedCalInfo.resumeFilesize;
                        }
                        file.speed = (fileUploaded / timeUsed * 1000).toFixed(0) || 0; // unit: byte/s
                    });

                    logger.debug("bind UploadProgress event");

                    // bind 'ChunkUploaded' event
                    // store the chunk upload info and set next chunk upload url
                    uploader.bind('ChunkUploaded', function (up, file, info) {
                        logger.debug("ChunkUploaded event activated");
                        logger.debug("ChunkUploaded file: ", file);
                        logger.debug("ChunkUploaded info: ", info);
                        var res = that.parseJSON(info.response);
                        logger.debug("ChunkUploaded res: ", res);
                        // ctx should look like '[chunk01_ctx],[chunk02_ctx],[chunk03_ctx],...'
                        ctx = ctx ? ctx + ',' + res.ctx : res.ctx;
                        var leftSize = info.total - info.offset;
                        var chunk_size = up.getOption && up.getOption('chunk_size');
                        chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
                        if (leftSize < chunk_size) {
                            up.setOption({
                                'url': qiniuUploadUrl + '/mkblk/' + leftSize
                            });
                            logger.debug("up.setOption url: ", qiniuUploadUrl + '/mkblk/' + leftSize);
                        }
                        up.setOption({
                            'headers': {
                                'Authorization': 'UpToken ' + getUptoken(file)
                            }
                        });
                        localStorage.setItem(file.name, that.stringifyJSON({
                            ctx: ctx,
                            percent: file.percent,
                            total: info.total,
                            offset: info.offset,
                            time: (new Date()).getTime()
                        }));
                    });

                    logger.debug("bind ChunkUploaded event");

                    var retries = op.max_retries;

                    // if error is unkown switch upload url and retry
                    var unknow_error_retry = function (file) {
                        if (retries-- > 0) {
                            setTimeout(function () {
                                that.resetUploadUrl();
                                file.status = plupload.QUEUED;
                                uploader.stop();
                                uploader.start();
                            }, 0);
                            return true;
                        } else {
                            retries = qiniuUploadUrls.length;
                            return false;
                        }
                    };

                    // bind 'Error' event
                    // check the err.code and return the errTip
                    uploader.bind('Error', (function (_Error_Handler) {
                        return function (up, err) {
                            logger.error("Error event activated");
                            logger.error("err: ", err);
                            var nowTime = new Date();
                            var errTip = '';
                            var file = err.file;
                            if (file) {
                                switch (err.code) {
                                    case plupload.FAILED:
                                        errTip = '上传失败。请稍后再试。';
                                        break;
                                    case plupload.FILE_SIZE_ERROR:
                                        var max_file_size = up.getOption && up.getOption('max_file_size');
                                        max_file_size = max_file_size || (up.settings && up.settings.max_file_size);
                                        errTip = '浏览器最大可上传' + max_file_size + '。更大文件请使用命令行工具。';
                                        break;
                                    case plupload.FILE_EXTENSION_ERROR:
                                        errTip = '文件验证失败。请稍后重试。';
                                        break;
                                    case plupload.HTTP_ERROR:
                                        if (err.response === '') {
                                            // Fix parseJSON error ,when http error is like net::ERR_ADDRESS_UNREACHABLE
                                            errTip = err.message || '未知网络错误。';
                                            if (!unknow_error_retry(file)) {
                                                return;
                                            }
                                            break;
                                        }
                                        var errorObj = that.parseJSON(err.response);
                                        var errorText = errorObj.error;
                                        switch (err.status) {
                                            case 400:
                                                errTip = "请求报文格式错误。";
                                                break;
                                            case 401:
                                                errTip = "客户端认证授权失败。请重试或提交反馈。";
                                                break;
                                            case 405:
                                                errTip = "客户端请求错误。请重试或提交反馈。";
                                                break;
                                            case 579:
                                                errTip = "资源上传成功，但回调失败。";
                                                break;
                                            case 599:
                                                errTip = "网络连接异常。请重试或提交反馈。";
                                                if (!unknow_error_retry(file)) {
                                                    return;
                                                }
                                                break;
                                            case 614:
                                                errTip = "文件已存在。";
                                                try {
                                                    errorObj = that.parseJSON(errorObj.error);
                                                    errorText = errorObj.error || 'file exists';
                                                } catch (e) {
                                                    errorText = errorObj.error || 'file exists';
                                                }
                                                break;
                                            case 631:
                                                errTip = "指定空间不存在。";
                                                break;
                                            case 701:
                                                errTip = "上传数据块校验出错。请重试或提交反馈。";
                                                break;
                                            default:
                                                errTip = "未知错误。";
                                                if (!unknow_error_retry(file)) {
                                                    return;
                                                }
                                                break;
                                        }
                                        errTip = errTip + '(' + err.status + '：' + errorText + ')';
                                        break;
                                    case plupload.SECURITY_ERROR:
                                        errTip = '安全配置错误。请联系网站管理员。';
                                        break;
                                    case plupload.GENERIC_ERROR:
                                        errTip = '上传失败。请稍后再试。';
                                        break;
                                    case plupload.IO_ERROR:
                                        errTip = '上传失败。请稍后再试。';
                                        break;
                                    case plupload.INIT_ERROR:
                                        errTip = '网站配置错误。请联系网站管理员。';
                                        uploader.destroy();
                                        break;
                                    default:
                                        errTip = err.message + err.details;
                                        if (!unknow_error_retry(file)) {
                                            return;
                                        }
                                        break;
                                }
                                if (_Error_Handler) {
                                    _Error_Handler(up, err, errTip);
                                }
                            }
                            up.refresh(); // Reposition Flash/Silverlight

                            // add send log for upload error
                            if (!op.disable_statistics_report) {
                                var matchedGroups = (err && err.responseHeaders && err.responseHeaders.match) ? err.responseHeaders.match(/(X-Reqid\:\ )([\w\.\%-]*)/) : [];
                                console.log(err);
                                var req_id = matchedGroups[2].replace(/[\r\n]/g,"");
                                var errcode = plupload.HTTP_ERROR ? err.status : err.code;
                                var startAt = file._start_at ? file._start_at.getTime() : nowTime.getTime();
                                statisticsLogger.log(
                                    errcode === 0 ? ExtraErrors.NetworkError : errcode,
                                    req_id,
                                    getDomainFromUrl(up.settings.url),
                                    undefined,
                                    getPortFromUrl(up.settings.url),
                                    (nowTime.getTime() - startAt)/1000,
                                    parseInt(startAt/1000),
                                    err.file.size * (err.file.percent / 100),
                                    "jssdk-" + up.runtime,
                                    file.size
                                );
                            }
                        };
                    })(_Error_Handler));

                    logger.debug("bind Error event");

                    // bind 'FileUploaded' event
                    // intercept the complete of upload
                    // - get downtoken from downtoken_url if bucket is private
                    // - invoke mkfile api to compose chunks if upload strategy is chunk upload
                    uploader.bind('FileUploaded', (function (_FileUploaded_Handler) {
                        return function (up, file, info) {
                            logger.debug("FileUploaded event activated");
                            logger.debug("FileUploaded file: ", file);
                            logger.debug("FileUploaded info: ", info);
                            var nowTime = new Date();
                            var last_step = function (up, file, info) {
                                logger.debug("FileUploaded last step:", info);
                                if (op.downtoken_url) {
                                    // if op.dowontoken_url is not empty
                                    // need get downtoken before invoke the _FileUploaded_Handler
                                    var ajax_downtoken = that.createAjax();
                                    ajax_downtoken.open('POST', op.downtoken_url, true);
                                    ajax_downtoken.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                    ajax_downtoken.onreadystatechange = function () {
                                        if (ajax_downtoken.readyState === 4) {
                                            if (ajax_downtoken.status === 200) {
                                                var res_downtoken;
                                                try {
                                                    res_downtoken = that.parseJSON(ajax_downtoken.responseText);
                                                } catch (e) {
                                                    throw ('invalid json format');
                                                }
                                                var info_extended = {};
                                                plupload.extend(info_extended, that.parseJSON(info.response), res_downtoken);
                                                info.response = that.stringifyJSON(info_extended);
                                                if (_FileUploaded_Handler) {
                                                    _FileUploaded_Handler(up, file, info);
                                                }
                                            } else {
                                                uploader.trigger('Error', {
                                                    status: ajax_downtoken.status,
                                                    response: ajax_downtoken.responseText,
                                                    file: file,
                                                    code: plupload.HTTP_ERROR
                                                });
                                            }
                                        }
                                    };
                                    ajax_downtoken.send('key=' + that.parseJSON(info.response).key + '&domain=' + op.domain);
                                } else if (_FileUploaded_Handler) {
                                    _FileUploaded_Handler(up, file, info);
                                }
                            };

                            var res = that.parseJSON(info.response);
                            ctx = ctx ? ctx : res.ctx;
                            // if ctx is not empty
                            //      that means the upload strategy is chunk upload
                            //      before the invoke the last_step
                            //      we need request the mkfile to compose all uploaded chunks
                            // else
                            //      invoke the last_step
                            logger.debug("ctx: ", ctx);
                            if (ctx) {
                                var key = '';
                                logger.debug("save_key: ", op.save_key);
                                if (!op.save_key) {
                                    key = getFileKey(up, file, that.key_handler);
                                    key = key ? '/key/' + that.URLSafeBase64Encode(key) : '';
                                }

                                var fname = '/fname/' + that.URLSafeBase64Encode(file.name);

                                logger.debug("op.x_vars: ", op.x_vars);
                                var x_vars = op.x_vars,
                                    x_val = '',
                                    x_vars_url = '';
                                if (x_vars !== undefined && typeof x_vars === 'object') {
                                    for (var x_key in x_vars) {
                                        if (x_vars.hasOwnProperty(x_key)) {
                                            if (typeof x_vars[x_key] === 'function') {
                                                x_val = that.URLSafeBase64Encode(x_vars[x_key](up, file));
                                            } else if (typeof x_vars[x_key] !== 'object') {
                                                x_val = that.URLSafeBase64Encode(x_vars[x_key]);
                                            }
                                            x_vars_url += '/x:' + x_key + '/' + x_val;
                                        }
                                    }
                                }

                                var url = qiniuUploadUrl + '/mkfile/' + file.size + key + fname + x_vars_url;

                                var ie = that.detectIEVersion();
                                var ajax;
                                if (ie && ie <= 9) {
                                    ajax = new moxie.xhr.XMLHttpRequest();
                                    moxie.core.utils.Env.swf_url = op.flash_swf_url;
                                } else {
                                    ajax = that.createAjax();
                                }
                                ajax.open('POST', url, true);
                                ajax.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
                                //console.log('uptoken:'+that.token);
                                ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
                                var onreadystatechange = function () {
                                    logger.debug("ajax.readyState: ", ajax.readyState);
                                    if (ajax.readyState === 4) {
                                        localStorage.removeItem(file.name);
                                        var ajaxInfo;
                                        if (ajax.status === 200) {
                                            ajaxInfo = {
                                                status: ajax.status,
                                                response: ajax.responseText,
                                                responseHeaders: ajax.getAllResponseHeaders(),
                                            };
                                            logger.debug("mkfile is success: ", ajaxInfo);
                                            last_step(up, file, ajaxInfo);
                                        } else {
                                            ajaxInfo = {
                                                status: ajax.status,
                                                response: ajax.responseText,
                                                file: file,
                                                code: -200,
                                                responseHeaders: ajax.getAllResponseHeaders()
                                            };
                                            logger.debug("mkfile is error: ", ajaxInfo);
                                            uploader.trigger('Error', ajaxInfo);
                                        }
                                    }
                                };
                                if (ie && ie <= 9) {
                                    ajax.bind('readystatechange', onreadystatechange);
                                } else {
                                    ajax.onreadystatechange = onreadystatechange;
                                }
                                ajax.send(ctx);
                                logger.debug("mkfile: ", url);
                            } else {
                                last_step(up, file, info);
                            }

                            // send statistics log
                            if (!op.disable_statistics_report) {
                                console.log(info.responseHeaders);
                                var req_id = info.responseHeaders.match(/(X-Reqid\:\ )([\w\.\%-]*)/i)[2].replace(/[\r\n]/g,"");
                                var startAt = file._start_at ? file._start_at.getTime() : nowTime.getTime();
                                statisticsLogger.log(
                                    info.status,
                                    req_id,
                                    getDomainFromUrl(up.settings.url),
                                    undefined,
                                    getPortFromUrl(up.settings.url),
                                    (nowTime.getTime() - startAt)/1000,
                                    parseInt(startAt/1000),
                                    file.size,
                                    "jssdk-" + up.runtime,
                                    file.size
                                );
                            }
                        };
                    })(_FileUploaded_Handler));

                    logger.debug("bind FileUploaded event");

                    // bind 'FilesRemoved' event
                    // intercept the cancel of upload
                    // used to send statistics log to server
                    uploader.bind('FilesRemoved', function (up, files) {
                        var nowTime = new Date();
                        // add cancel log
                        if (!op.disable_statistics_report) {
                            for (var i = 0; i < files.length; i++) {
                                statisticsLogger.log(
                                    ExtraErrors.Cancelled,
                                    undefined,
                                    getDomainFromUrl(up.settings.url),
                                    undefined,
                                    getPortFromUrl(up.settings.url),
                                    (nowTime.getTime() - files[i]._start_at.getTime())/1000,
                                    files[i]._start_at.getTime()/1000,
                                    files[i].size * files[i].percent / 100,
                                    "jssdk-" + up.runtime,
                                    files[i].size
                                );
                            }
                        }
                    });

                    logger.debug("bind FilesRemoved event");

                    // init uploader
                    uploader.init();
                    logger.debug("invoke uploader.init()");

                    logger.debug("init uploader end");

                    return uploader;
                };

                /**
                 * get url by key
                 * @param  {String} key of file
                 * @return {String} url of file
                 */
                this.getUrl = function (key) {
                    if (!key) {
                        return false;
                    }
                    key = encodeURI(key);
                    var domain = this.domain;
                    if (domain.slice(domain.length - 1) !== '/') {
                        domain = domain + '/';
                    }
                    return domain + key;
                };

                /**
                 * invoke the imageView2 api of Qiniu
                 * @param  {Object} api params
                 * @param  {String} key of file
                 * @return {String} url of processed image
                 */
                this.imageView2 = function (op, key) {

                    if (!/^\d$/.test(op.mode)) {
                        return false;
                    }

                    var mode = op.mode,
                        w = op.w || '',
                        h = op.h || '',
                        q = op.q || '',
                        format = op.format || '';

                    if (!w && !h) {
                        return false;
                    }

                    var imageUrl = 'imageView2/' + mode;
                    imageUrl += w ? '/w/' + w : '';
                    imageUrl += h ? '/h/' + h : '';
                    imageUrl += q ? '/q/' + q : '';
                    imageUrl += format ? '/format/' + format : '';
                    if (key) {
                        imageUrl = this.getUrl(key) + '?' + imageUrl;
                    }
                    return imageUrl;
                };

                /**
                 * invoke the imageMogr2 api of Qiniu
                 * @param  {Object} api params
                 * @param  {String} key of file
                 * @return {String} url of processed image
                 */
                this.imageMogr2 = function (op, key) {
                    var auto_orient = op['auto-orient'] || '',
                        thumbnail = op.thumbnail || '',
                        strip = op.strip || '',
                        gravity = op.gravity || '',
                        crop = op.crop || '',
                        quality = op.quality || '',
                        rotate = op.rotate || '',
                        format = op.format || '',
                        blur = op.blur || '';
                    //Todo check option

                    var imageUrl = 'imageMogr2';

                    imageUrl += auto_orient ? '/auto-orient' : '';
                    imageUrl += thumbnail ? '/thumbnail/' + thumbnail : '';
                    imageUrl += strip ? '/strip' : '';
                    imageUrl += gravity ? '/gravity/' + gravity : '';
                    imageUrl += quality ? '/quality/' + quality : '';
                    imageUrl += crop ? '/crop/' + crop : '';
                    imageUrl += rotate ? '/rotate/' + rotate : '';
                    imageUrl += format ? '/format/' + format : '';
                    imageUrl += blur ? '/blur/' + blur : '';

                    if (key) {
                        imageUrl = this.getUrl(key) + '?' + imageUrl;
                    }
                    return imageUrl;
                };

                /**
                 * invoke the watermark api of Qiniu
                 * @param  {Object} api params
                 * @param  {String} key of file
                 * @return {String} url of processed image
                 */
                this.watermark = function (op, key) {
                    var mode = op.mode;
                    if (!mode) {
                        return false;
                    }

                    var imageUrl = 'watermark/' + mode;

                    if (mode === 1) {
                        var image = op.image || '';
                        if (!image) {
                            return false;
                        }
                        imageUrl += image ? '/image/' + this.URLSafeBase64Encode(image) : '';
                    } else if (mode === 2) {
                        var text = op.text ? op.text : '',
                            font = op.font ? op.font : '',
                            fontsize = op.fontsize ? op.fontsize : '',
                            fill = op.fill ? op.fill : '';
                        if (!text) {
                            return false;
                        }
                        imageUrl += text ? '/text/' + this.URLSafeBase64Encode(text) : '';
                        imageUrl += font ? '/font/' + this.URLSafeBase64Encode(font) : '';
                        imageUrl += fontsize ? '/fontsize/' + fontsize : '';
                        imageUrl += fill ? '/fill/' + this.URLSafeBase64Encode(fill) : '';
                    } else {
                        // Todo mode3
                        return false;
                    }

                    var dissolve = op.dissolve || '',
                        gravity = op.gravity || '',
                        dx = op.dx || '',
                        dy = op.dy || '';

                    imageUrl += dissolve ? '/dissolve/' + dissolve : '';
                    imageUrl += gravity ? '/gravity/' + gravity : '';
                    imageUrl += dx ? '/dx/' + dx : '';
                    imageUrl += dy ? '/dy/' + dy : '';

                    if (key) {
                        imageUrl = this.getUrl(key) + '?' + imageUrl;
                    }
                    return imageUrl;
                };

                /**
                 * invoke the imageInfo api of Qiniu
                 * @param  {String} key of file
                 * @return {Object} image info
                 */
                this.imageInfo = function (key) {
                    if (!key) {
                        return false;
                    }
                    var url = this.getUrl(key) + '?imageInfo';
                    var xhr = this.createAjax();
                    var info;
                    var that = this;
                    xhr.open('GET', url, false);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            info = that.parseJSON(xhr.responseText);
                        }
                    };
                    xhr.send();
                    return info;
                };

                /**
                 * invoke the exif api of Qiniu
                 * @param  {String} key of file
                 * @return {Object} image exif
                 */
                this.exif = function (key) {
                    if (!key) {
                        return false;
                    }
                    var url = this.getUrl(key) + '?exif';
                    var xhr = this.createAjax();
                    var info;
                    var that = this;
                    xhr.open('GET', url, false);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            info = that.parseJSON(xhr.responseText);
                        }
                    };
                    xhr.send();
                    return info;
                };

                /**
                 * invoke the exif or imageInfo api of Qiniu
                 * according with type param
                 * @param  {String} ['exif'|'imageInfo']type of info
                 * @param  {String} key of file
                 * @return {Object} image exif or info
                 */
                this.get = function (type, key) {
                    if (!key || !type) {
                        return false;
                    }
                    if (type === 'exif') {
                        return this.exif(key);
                    } else if (type === 'imageInfo') {
                        return this.imageInfo(key);
                    }
                    return false;
                };

                /**
                 * invoke api of Qiniu like a pipeline
                 * @param  {Array of Object} params of a series api call
                 * each object in array is options of api which name is set as 'fop' property
                 * each api's output will be next api's input
                 * @param  {String} key of file
                 * @return {String|Boolean} url of processed image
                 */
                this.pipeline = function (arr, key) {
                    var isArray = Object.prototype.toString.call(arr) === '[object Array]';
                    var option, errOp, imageUrl = '';
                    if (isArray) {
                        for (var i = 0, len = arr.length; i < len; i++) {
                            option = arr[i];
                            if (!option.fop) {
                                return false;
                            }
                            switch (option.fop) {
                                case 'watermark':
                                    imageUrl += this.watermark(option) + '|';
                                    break;
                                case 'imageView2':
                                    imageUrl += this.imageView2(option) + '|';
                                    break;
                                case 'imageMogr2':
                                    imageUrl += this.imageMogr2(option) + '|';
                                    break;
                                default:
                                    errOp = true;
                                    break;
                            }
                            if (errOp) {
                                return false;
                            }
                        }
                        if (key) {
                            imageUrl = this.getUrl(key) + '?' + imageUrl;
                            var length = imageUrl.length;
                            if (imageUrl.slice(length - 1) === '|') {
                                imageUrl = imageUrl.slice(0, length - 1);
                            }
                        }
                        return imageUrl;
                    }
                    return false;
                };
            }

            var Qiniu = new QiniuJsSDK();

            global.Qiniu = Qiniu;
            global.QiniuJsSDK = QiniuJsSDK;
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = QiniuJsSDK;
            } else if (true) {
                // register as 'qiniu-js', consistent with npm package name
                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return QiniuJsSDK;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
                global.QiniuJsSDK = QiniuJsSDK;
            }
        })(window);


        /***/ })
    /******/ ]);