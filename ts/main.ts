/// <reference path="libs/jquery.d.ts" />
/// <reference path="matiumpg/backtotop/BackToTop.ts" />

namespace matiumpg {

	import BackToTop = matiumpg.backtotop.BackToTop;

	export class Main {

		public backButton: BackToTop;
		protected resizeTimer;
		
		constructor() {
			console.log("Main Construct");
			this.backButton = new BackToTop();
		}

		/**
		 * 初期設定
		 * コンテンツ全体のサイズやリサイズ処理が必要な
		 * コンポーネント等のセッティングをする
		*/
		init = ():void => {
			this.resize();

			// リサイズ処理
			var resizeInterval: number = 30;
			window.addEventListener('resize', () => {
				clearTimeout(this.resizeTimer);
				this.resizeTimer = setTimeout(this.resize, resizeInterval);
				return false;
			});
			this.resize();

			// スクロール量でTOPに戻るボタンの表示・非表示
			var ref: Main = this;
			$(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
					ref.backButton.show();
				} else {
					ref.backButton.hide();
				}
			});
		}

		/* リサイズメソッド */
		resize = ():void => {
			winWidth = $(window).innerWidth();
			winHeight = $(window).innerHeight();
		}

	}
}


var winWidth: number;
var winHeight: number;
var main: matiumpg.Main;

/* DOMが構築された時点で実行 */
$(document).ready(function() {
	console.log("Build DOM");
	jQuery.fx.interval = 10;
	winWidth = window.innerWidth;
	winHeight = window.innerHeight;
	main = new matiumpg.Main();
	main.init();
});

/* ページの構成要素がすべてロードされた時点で実行 */
$(window).load(function() {
	console.log("Loaded Page Contents");
});





