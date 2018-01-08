/// <reference path="libs/jquery.d.ts" />
/// <reference path="libs/jquery.waypoints/jquery.waypoints.d.ts" />
/// <reference path="matiumpg/backtotop/BackToTop.ts" />
/// <reference path="matiumpg/searchform/SearchFormUnit.ts" />
/// <reference path="matiumpg/smp/SMPHeader.ts" />

namespace matiumpg {

	import BackToTop = matiumpg.backtotop.BackToTop;
	import SearchFormUnit = matiumpg.searchform.SearchFormUnit;
	import SMPHeader = matiumpg.smp.SMPHeader;

	export class Main {

		////// Public Properties: /////////////////////////
		/**
		 * ページの上に戻るボタン
		 **/
		public backButton: BackToTop;
		/**
		 * 検索フォーム表示ボタン
		 **/
		public searchButton: JQuery;
		/**
		 * 検索フォーム
		 **/
		public searchForm: SearchFormUnit;
		/**
		 * スマートフォン表示用ヘッダー
		 */
		public smpHeader: SMPHeader;

		////// Private Properties: /////////////////////////
		protected resizeTimer;

		

		constructor() {
			this.backButton = new BackToTop();
			this.searchButton = $('.search-button');
			this.searchForm = new SearchFormUnit();
			this.smpHeader = new SMPHeader();
		}

		/**
		 * 初期設定
		 * コンテンツ全体のサイズやリサイズ処理が必要な
		 * コンポーネント等のセッティングをする
		 **/
		init = ():void => {

			this.resize();

			// リサイズ処理
			let resizeInterval: number = 30;
			window.addEventListener('resize', () => {
				clearTimeout(this.resizeTimer);
				this.resizeTimer = setTimeout(this.resize, resizeInterval);
				return false;
			});
			this.resize();

			$('.contents-main').waypoint({
				handler: (direction) => {
					if (direction == 'down') {
						this.backButton.show();
					}
					else {
						this.backButton.hide();
					}
				},
				offset: 0
			});

			if (isPC) {
				// PC表示の時は検索ボタンを表示
				this.searchButton.on('mouseover', ()=>{
					this.searchForm.show();
				});
			} else {
				// SMP用ヘッダーを有効化
				this.smpHeader.init();
			}
		}

		/* リサイズメソッド */
		resize = ():void => {
			winWidth = $(window).innerWidth();
			winHeight = $(window).innerHeight();
		}

	}
}


let winWidth: number;
let winHeight: number;
let main: matiumpg.Main;

// デバイス判定
let isSP: boolean = false;
let isTB: boolean = false;
let isPC: boolean = true;

/* DOMが構築された時点で実行 */
$(document).ready(function() {
	jQuery.fx.interval = 10;
	winWidth = window.innerWidth;
	winHeight = window.innerHeight;
	setDeviceWidthFlag();
	main = new matiumpg.Main();
	main.init();
});

/* ページの構成要素がすべてロードされた時点で実行 */
$(window).load(function() {
});

/**
 * ウィンドウサイズによるデバイス判定
 */
function setDeviceWidthFlag() {
	if (winWidth < 1024) {
		if (winWidth < 768) {
			isSP = true;
			isTB = false;
			isPC = false;
		}
		else {
			isSP = false;
			isTB = true;
			isPC = false;
		}
	}
	else {
		isSP = false;
		isTB = false;
		isPC = true;
	}
}





