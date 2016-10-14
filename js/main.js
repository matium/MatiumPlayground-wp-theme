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
/// <reference path="libs/jquery.d.ts" />
/// <reference path="matiumpg/backtotop/BackToTop.ts" />
var matiumpg;
(function (matiumpg) {
    var BackToTop = matiumpg.backtotop.BackToTop;
    var Main = (function () {
        function Main() {
            var _this = this;
            /**
             * 初期設定
             * コンテンツ全体のサイズやリサイズ処理が必要な
             * コンポーネント等のセッティングをする
            */
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
            };
            /* リサイズメソッド */
            this.resize = function () {
                winWidth = $(window).innerWidth();
                winHeight = $(window).innerHeight();
            };
            console.log("Main Construct");
            this.backButton = new BackToTop();
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