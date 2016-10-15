var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../libs/jquery.d.ts" />
/// <reference path="../../libs/jquery.transit/jquery.transit.d.ts" />
var matiumpg;
(function (matiumpg) {
    var backtotop;
    (function (backtotop) {
        var BackToTop = (function () {
            function BackToTop() {
                var _this = this;
                this.isShow = false;
                this.showBottom = 20;
                this.hideBottom = 0;
                this.show = function () {
                    if (_this.isShow) {
                        return;
                    }
                    _this.isShow = true;
                    _this.target.show();
                    _this.target.transition({ 'opacity': 1.0, 'bottom': _this.showBottom }, 500, 'easeOutQuart');
                };
                this.hide = function () {
                    if (!_this.isShow) {
                        return;
                    }
                    _this.isShow = false;
                    var ref = _this;
                    _this.target.transition({ 'opacity': 0, 'bottom': _this.hideBottom }, 300, 'easeOutQuart', function () {
                        $(this).hide();
                    });
                };
                this.target = $('.BackToTop');
                this.target.hide();
                this.target.on('click', function () {
                    $('html,body').animate({ scrollTop: '0' }, 500, 'easeOutQuart');
                });
            }
            return BackToTop;
        }());
        backtotop.BackToTop = BackToTop;
    })(backtotop = matiumpg.backtotop || (matiumpg.backtotop = {}));
})(matiumpg || (matiumpg = {}));
/**
 * Created by Keita Watanabe on 2016/09/30.
 *
 * createJSのEventクラスの設計が優秀なので、TypeScript2.0でリライトし、
 * Eventクラス単体で使用／拡張できるようにしている。
 *
 * ベースをTS2.0で作り変えているが、createJSのEventクラスと同じように動作する。
 * 拡張を可能にすることで、カスタムイベントをクラスとして定義できるように作られている。
 *
 * Example:
 * class YourCustomEvent extends events.Event {
 *     constructor(type:string, bubbles = null, cancelable = null) {
 *         super(type, bubbles, cancelable);
 *         // do stuff...
 *     }
 * }
 *
 */
var events;
(function (events) {
    /**
     * Contains properties and methods shared by all events for use with
     * EventDispatcher.
     *
     * Note that Event objects are often reused, so you should never
     * rely on an event object's state outside of the call stack it was received in.
     * @class Event
     */
    var Event = (function () {
        ////// constructor: /////////////////////////
        /**
         * constructor
         * @param {String} type The event type.
         * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
         * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
         * @constructor
         **/
        function Event(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = null; }
            if (cancelable === void 0) { cancelable = null; }
            /**
             * For bubbling events, this indicates the current event phase:<OL>
             * 	<LI> capture phase: starting from the top parent to the target</LI>
             * 	<LI> at target phase: currently being dispatched from the target</LI>
             * 	<LI> bubbling phase: from the target to the top parent</LI>
             * </OL>
             */
            this.eventPhase = 0;
            /**
             * The epoch time at which this event was created.
             */
            this.timeStamp = 0;
            /**
             * Indicates if preventDefault has been called on this event.
             */
            this.defaultPrevented = false;
            /**
             * Indicates if stopPropagation or stopImmediatePropagation has been called on this event.
             */
            this.propagationStopped = false;
            /**
             * Indicates if stopImmediatePropagation has been called on this event.
             */
            this.immediatePropagationStopped = false;
            this.type = type;
            this.bubbles = !!bubbles;
            this.cancelable = !!cancelable;
            this.timeStamp = (new Date()).getTime();
        }
        ////// public methods: /////////////////////////
        /**
         * Sets defaultPrevented to true.
         * Mirrors the DOM event standard.
         **/
        Event.prototype.preventDefault = function () {
            this.defaultPrevented = true;
        };
        /**
         * Sets propagationStopped to true.
         * Mirrors the DOM event standard.
         **/
        Event.prototype.stopPropagation = function () {
            this.propagationStopped = true;
        };
        /**
         * Sets propagationStopped and immediatePropagationStopped to true.
         * Mirrors the DOM event standard.
         **/
        Event.prototype.stopImmediatePropagation = function () {
            this.immediatePropagationStopped = this.propagationStopped = true;
        };
        /**
         * Causes the active listener to be removed via removeEventListener();
         *
         * myBtn.addEventListener("click", function(evt) {
         * 			// do stuff...
         * 			evt.remove(); // removes this listener.
         * 		});
         **/
        Event.prototype.remove = function () {
            this.removed = true;
        };
        /**
         * Returns a clone of the Event instance.
         * @method clone
         * @return {Event} a clone of the Event instance.
         **/
        Event.prototype.clone = function () {
            return new Event(this.type, this.bubbles, this.cancelable);
        };
        /**
         * Provides a chainable shortcut method for setting a number of properties on the instance.
         *
         * @method set
         * @param {Object} props A generic object containing properties to copy to the instance.
         * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
         */
        Event.prototype.set = function (props) {
            for (var n in props) {
                if (props.hasOwnProperty(n)) {
                    this[n] = props[n];
                }
            }
            return this;
        };
        /**
         * Returns a string representation of this object.
         * @method toString
         * @return {String} a string representation of the instance.
         **/
        Event.prototype.toString = function () {
            return "[Event (type=" + this.type + ")]";
        };
        return Event;
    }());
    events.Event = Event;
})(events || (events = {}));
/// <reference path="Event.ts" />
/**
 * Created by Keita Watanabe on 2016/09/30.
 *
 * createJSのEventDispatcherクラスが優秀なので、TypeScript2.0でリライトし、
 * EventDispatcherクラス単体で使用および拡張できるようにしている。
 *
 * ベースをTS2.0で作り変えているが、createJSのEventDispatcherクラスと同じように動作する。
 * 拡張を可能にすることで、DOMを拡張したクラス以外のクラスでも、
 * カスタムイベントを発火・リスナーの登録が可能なクラスとして定義できるように作られている。
 *
 * Example:
 * class YourClass extends events.EventDispatcher {
 *     constructor() {
 *         super();
 *         // do stuff...
 *     }
 * }
 *
 */
var events;
(function (events) {
    var EventDispatcher = (function () {
        ////// constructor: /////////////////////////
        /**
         * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
         *
         * You can either extend EventDispatcher or mix its methods into an existing prototype or instance
         * by using the EventDispatcher initialize method.
         *
         * Together with the Event class, EventDispatcher provides an extended event model that is based on the
         * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent.
         * It supports bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation,
         * and handleEvent.
         *
         * EventDispatcher also exposes a "on" method, which makes it easier
         * to create scoped listeners, listeners that only run once,
         * and listeners with associated arbitrary data.
         * The "off" method is merely an alias to removeEventListener.
         *
         * Another addition to the DOM Level 2 model is the removeAllEventListeners method,
         * which can be used to listeners for all events, or listeners for a specific event.
         * The Event object also includes a remove method which removes the active listener.
         *
         * If you want to use addEventListener instead, you may want to use
         * function.bind() or a similar proxy to manage scope.
         *
         * @class EventDispatcher
         **/
        function EventDispatcher() {
            ////// private properties: /////////////////////////
            /**
             * Registered Listeners
             **/
            this._listeners = null;
            /**
             * Registered Listeners on useCapture
             **/
            this._captureListeners = null;
            /**
             * A shortcut to the removeEventListener method, with the same parameters and return value.
             * This is a companion to the .on method.
             *
             * <b>IMPORTANT:</b> To remove a listener added with "on", you must pass in the returned
             * wrapper function as the listener. See "on" for an example.
             *
             * @method off
             * @param {String} type The string type of the event.
             * @param {Function | Object} listener The listener function or object.
             * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
             **/
            this.off = this.removeEventListener;
        }
        ////// static public methods: /////////////////////////
        /**
         * Static initializer to mix EventDispatcher methods into a target object or prototype.
         *
         * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
         * 		EventDispatcher.initialize(myObject); // add to a specific instance
         *
         * @method initialize
         * @static
         * @param {Object} target The target object to inject EventDispatcher methods into.
         * This can be an instance or a prototype.
         **/
        EventDispatcher.initialize = function (target) {
            var p = EventDispatcher.prototype;
            target.addEventListener = p.addEventListener;
            target.on = p.on;
            target.removeEventListener = target.off = p.removeEventListener;
            target.removeAllEventListeners = p.removeAllEventListeners;
            target.hasEventListener = p.hasEventListener;
            target.dispatchEvent = p.dispatchEvent;
            target._dispatchEvent = p._dispatchEvent;
            target.willTrigger = p.willTrigger;
        };
        ////// public methods: /////////////////////////
        /**
         * Adds the specified event listener. Note that adding multiple listeners to the same function
         * will result in multiple callbacks getting fired.
         *
         * <h4>Example</h4>
         *
         *      displayObject.addEventListener("click", handleClick);
         *      function handleClick(event) {
         *         // Click happened.
         *      }
         *
         * @param {String} type The string type of the event.
         * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
         * the event is dispatched.
         * @param {Boolean} useCapture For events that bubble, indicates whether to
         * listen for the event in the capture or bubbling/target phase.
         * @return {Function | Object} Returns the listener for chaining or assignment.
         **/
        EventDispatcher.prototype.addEventListener = function (type, listener, useCapture) {
            var listeners;
            if (useCapture) {
                listeners = this._captureListeners = this._captureListeners || {};
            }
            else {
                listeners = this._listeners = this._listeners || {};
            }
            var arr = listeners[type];
            if (arr) {
                this.removeEventListener(type, listener, useCapture);
            }
            arr = listeners[type]; // remove may have deleted the array
            if (!arr) {
                listeners[type] = [listener];
            }
            else {
                arr.push(listener);
            }
            return listener;
        };
        /**
         * A shortcut method for using addEventListener that makes it easier to specify an execution scope,
         * have a listener
         * only run once, associate arbitrary data with the listener, and remove the listener.
         *
         * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
         * The wrapper function is returned for use with `removeEventListener` (or `off`).
         *
         * <b>IMPORTANT:</b> To remove a listener added with `on`, you must pass in the returned wrapper
         * function as the listener, or use remove. Likewise, each time you call "on" a NEW wrapper
         * function is subscribed, so multiple calls
         * to "on" with the same params will create multiple listeners.
         *
         * <h4>Example</h4>
         *
         * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
         * 		function handleClick(evt, data) {
         * 			data.count -= 1;
         * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
         * 			if (data.count == 0) {
         * 				alert("clicked 3 times!");
         * 				myBtn.off("click", listener);
         * 				// alternately: evt.remove();
         * 			}
         * 		}
         *
         * @method on
         * @param {String} type The string type of the event.
         * @param {Function | Object} listener An object with a handleEvent method,
         * or a function that will be called when the event is dispatched.
         * @param {Object} [scope] The scope to execute the listener in. Defaults to the
         * dispatcher/currentTarget for function listeners, and to the listener itself for object listeners
         * (ie. using handleEvent).
         * @param {Boolean} [once=false] If true, the listener will remove itself
         * after the first time it is triggered.
         * @param {*} [data] Arbitrary data that will be included as the second parameter
         * when the listener is called.
         * @param {Boolean} [useCapture=false] For events that bubble, indicates whether
         * to listen for the event in the capture or bubbling/target phase.
         * @return {Function} Returns the anonymous function that was created and assigned as the listener.
         * This is needed to remove the listener later using .removeEventListener.
         **/
        EventDispatcher.prototype.on = function (type, listener, scope, once, data, useCapture) {
            if (listener.handleEvent) {
                scope = scope || listener;
                listener = listener.handleEvent;
            }
            scope = scope || this;
            return this.addEventListener(type, function (evt) {
                listener.call(scope, evt, data);
                once && evt.remove();
            }, useCapture);
        };
        /**
         * Removes the specified event listener.
         *
         * <h4>Example</h4>
         *
         *      yourInstance.removeEventListener("click", handleClick);
         *
         * @param {String} type The string type of the event.
         * @param {Function | Object} listener The listener function or object.
         * @param {Boolean} [useCapture] For events that bubble, indicates whether to
         * listen for the event in the capture or bubbling/target phase.
         **/
        EventDispatcher.prototype.removeEventListener = function (type, listener, useCapture) {
            var listeners = useCapture ? this._captureListeners : this._listeners;
            if (!listeners) {
                return;
            }
            var arr = listeners[type];
            if (!arr) {
                return;
            }
            for (var i = 0, l = arr.length; i < l; i++) {
                if (arr[i] == listener) {
                    if (l == 1) {
                        delete (listeners[type]);
                    } // allows for faster checks.
                    else {
                        arr.splice(i, 1);
                    }
                    break;
                }
            }
        };
        /**
         * Removes all listeners for the specified type, or all listeners of all types.
         *
         * <h4>Example</h4>
         *
         *      // Remove all listeners
         *      displayObject.removeAllEventListeners();
         *
         *      // Remove all click listeners
         *      displayObject.removeAllEventListeners("click");
         *
         * @method removeAllEventListeners
         * @param {String} [type] The string type of the event. If omitted,
         * all listeners for all types will be removed.
         **/
        EventDispatcher.prototype.removeAllEventListeners = function (type) {
            if (!type) {
                this._listeners = this._captureListeners = null;
            }
            else {
                if (this._listeners) {
                    delete (this._listeners[type]);
                }
                if (this._captureListeners) {
                    delete (this._captureListeners[type]);
                }
            }
        };
        EventDispatcher.prototype.dispatchEvent = function (eventObj, target) {
            if (typeof eventObj == "string") {
                // won't bubble, so skip everything if there's no listeners:
                var listeners = this._listeners;
                if (!listeners || !listeners[eventObj]) {
                    return false;
                }
                eventObj = new events.Event(eventObj);
            }
            // TODO: deprecated. Target param is deprecated, only use case is MouseEvent/mousemove, remove.
            try {
                eventObj.target = target || this;
            }
            catch (e) {
            } // allows redispatching of native events
            if (!eventObj.bubbles || !this.parent) {
                this._dispatchEvent(eventObj, 2);
            }
            else {
                var top = this;
                var list = [top];
                while (top.parent) {
                    list.push(top = top.parent);
                }
                var i;
                var l = list.length;
                // capture & atTarget
                for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {
                    list[i]._dispatchEvent(eventObj, 1 + ((i == 0) ? 1 : 0));
                }
                // bubbling
                for (i = 1; i < l && !eventObj.propagationStopped; i++) {
                    list[i]._dispatchEvent(eventObj, 3);
                }
            }
            return eventObj.defaultPrevented;
        };
        /**
         * Indicates whether there is at least one listener for the specified event type.
         * @method hasEventListener
         * @param {String} type The string type of the event.
         * @return {Boolean} Returns true if there is at least one listener for the specified event.
         **/
        EventDispatcher.prototype.hasEventListener = function (type) {
            var listeners = this._listeners;
            var captureListeners = this._captureListeners;
            return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
        };
        /**
         * Indicates whether there is at least one listener for the specified event type on this object
         * or any of its ancestors (parent, parent's parent, etc).
         * A return value of true indicates that if a bubbling event of the specified type is dispatched
         * from this object, it will trigger at least one listener.
         *
         * This is similar to hasEventListener, but it searches the entire event flow for a listener,
         * not just this object.
         * @method willTrigger
         * @param {String} type The string type of the event.
         * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
         **/
        EventDispatcher.prototype.willTrigger = function (type) {
            var o = this;
            while (o) {
                if (o.hasEventListener(type)) {
                    return true;
                }
                o = o.parent;
            }
            return false;
        };
        /**
         * @method toString
         * @return {String} a string representation of the instance.
         **/
        EventDispatcher.prototype.toString = function () {
            return "[EventDispatcher]";
        };
        EventDispatcher.prototype.destruct = function () {
            this.removeAllEventListeners();
        };
        ////// private methods: /////////////////////////
        /**
         * @method _dispatchEvent
         * @param {Object | String | Event} eventObj
         * @param {number} eventPhase
         * @protected
         **/
        EventDispatcher.prototype._dispatchEvent = function (eventObj, eventPhase) {
            var l, listeners = (eventPhase == 1) ? this._captureListeners : this._listeners;
            if (eventObj && listeners) {
                var arr = listeners[eventObj.type];
                if (!arr || !(l = arr.length)) {
                    return;
                }
                try {
                    eventObj.currentTarget = this;
                }
                catch (e) {
                }
                try {
                    eventObj.eventPhase = eventPhase;
                }
                catch (e) {
                }
                eventObj.removed = false;
                arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
                for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
                    var o = arr[i];
                    if (o.handleEvent) {
                        o.handleEvent(eventObj);
                    }
                    else {
                        o(eventObj);
                    }
                    if (eventObj.removed) {
                        this.removeEventListener(eventObj.type, o, eventPhase == 1);
                        eventObj.removed = false;
                    }
                }
            }
        };
        return EventDispatcher;
    }());
    events.EventDispatcher = EventDispatcher;
})(events || (events = {}));
/// <reference path="../libs/events/Event.ts" />
var matiumpg;
(function (matiumpg) {
    var CustomEvent = (function (_super) {
        __extends(CustomEvent, _super);
        function CustomEvent(type) {
            _super.call(this, type);
        }
        CustomEvent.SHOW = "onShow";
        CustomEvent.HIDE = "onHide";
        return CustomEvent;
    }(events.Event));
    matiumpg.CustomEvent = CustomEvent;
})(matiumpg || (matiumpg = {}));
/// <reference path="../../libs/jquery.d.ts" />
/// <reference path="../../libs/jquery.transit/jquery.transit.d.ts" />
/// <reference path="../../libs/events/EventDispatcher.ts" />
/// <reference path="../CustomEvent.ts" />
var matiumpg;
(function (matiumpg) {
    var searchform;
    (function (searchform) {
        var EventDispatcher = events.EventDispatcher;
        var CustomEvent = matiumpg.CustomEvent;
        var SearchFormUnit = (function (_super) {
            __extends(SearchFormUnit, _super);
            /**
             * コンストラクタ
             **/
            function SearchFormUnit() {
                var _this = this;
                _super.call(this);
                ////// Private Properties: /////////////////////////
                this.isShow = false;
                this.reset = function () {
                    _this.target.css({
                        perspective: '400px',
                        rotateX: '90deg',
                        translateY: '-20px',
                        opacity: 0
                    });
                };
                /**
                 * 表示メソッド
                 **/
                this.show = function () {
                    if (_this.isShow) {
                        return;
                    }
                    _this.isShow = true;
                    _this.target.show();
                    _this.target.bind('mouseleave', function () {
                        _this.hide();
                    });
                    _this.target.stop();
                    _this.target.transition({
                        perspective: '400px',
                        rotateX: '0deg',
                        translateY: '0px',
                        opacity: 1.0
                    }, 600, 'easeOutCirc', function () {
                        var ev = new CustomEvent(CustomEvent.SHOW);
                        _this.dispatchEvent(ev);
                        _this.onShow();
                    });
                };
                /**
                 * 非表示メソッド
                 **/
                this.hide = function () {
                    if (!_this.isShow) {
                        return;
                    }
                    _this.isShow = false;
                    _this.target.unbind('mouseleave');
                    _this.target.stop();
                    _this.target.transition({
                        perspective: '400px',
                        rotateX: '90deg',
                        translateY: '-100px',
                        opacity: 0
                    }, 200, 'linear', function () {
                        var ev = new CustomEvent(CustomEvent.HIDE);
                        _this.dispatchEvent(ev);
                        _this.reset();
                    });
                };
                this.target = $('.SearchFormUnit');
                this.target.hide();
            }
            /**
             * 表示後のアクション
             * ターゲットDOMのロールアウトで非表示にする
             **/
            SearchFormUnit.prototype.onShow = function () {
                var _this = this;
                this.target.bind('mouseleave', function () {
                    _this.hide();
                });
            };
            return SearchFormUnit;
        }(EventDispatcher));
        searchform.SearchFormUnit = SearchFormUnit;
    })(searchform = matiumpg.searchform || (matiumpg.searchform = {}));
})(matiumpg || (matiumpg = {}));
/// <reference path="libs/jquery.d.ts" />
/// <reference path="matiumpg/backtotop/BackToTop.ts" />
/// <reference path="matiumpg/searchform/SearchFormUnit.ts" />
var matiumpg;
(function (matiumpg) {
    var BackToTop = matiumpg.backtotop.BackToTop;
    var SearchFormUnit = matiumpg.searchform.SearchFormUnit;
    var Main = (function () {
        function Main() {
            var _this = this;
            /**
             * 初期設定
             * コンテンツ全体のサイズやリサイズ処理が必要な
             * コンポーネント等のセッティングをする
             **/
            this.init = function () {
                _this.resize();
                // リサイズ処理
                var resizeInterval = 30;
                window.addEventListener('resize', function () {
                    clearTimeout(_this.resizeTimer);
                    _this.resizeTimer = setTimeout(_this.resize, resizeInterval);
                    return false;
                });
                _this.resize();
                // スクロール量でTOPに戻るボタンの表示・非表示
                var ref = _this;
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 300) {
                        ref.backButton.show();
                    }
                    else {
                        ref.backButton.hide();
                    }
                });
                _this.searchButton.on('mouseover', function () {
                    _this.searchForm.show();
                });
            };
            /* リサイズメソッド */
            this.resize = function () {
                winWidth = $(window).innerWidth();
                winHeight = $(window).innerHeight();
            };
            console.log("Main Construct");
            this.backButton = new BackToTop();
            this.searchButton = $('.search-button');
            this.searchForm = new SearchFormUnit();
        }
        return Main;
    }());
    matiumpg.Main = Main;
})(matiumpg || (matiumpg = {}));
var winWidth;
var winHeight;
var main;
/* DOMが構築された時点で実行 */
$(document).ready(function () {
    console.log("Build DOM");
    jQuery.fx.interval = 10;
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    main = new matiumpg.Main();
    main.init();
});
/* ページの構成要素がすべてロードされた時点で実行 */
$(window).load(function () {
    console.log("Loaded Page Contents");
});
//# sourceMappingURL=main.js.map