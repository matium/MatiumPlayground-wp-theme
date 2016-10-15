/// <reference path="../../libs/jquery.d.ts" />
/// <reference path="../../libs/jquery.transit/jquery.transit.d.ts" />
/// <reference path="../../libs/events/EventDispatcher.ts" />
/// <reference path="../CustomEvent.ts" />

namespace matiumpg.searchform {

	import EventDispatcher = events.EventDispatcher;
	import CustomEvent = matiumpg.CustomEvent;

	export class SearchFormUnit extends EventDispatcher {

		////// Public Properties: /////////////////////////
		/**
		 * 対象となる検索フォーム部分のDOM（jQueryオブジェクト）
		 **/
		public target:JQuery;

		
		////// Private Properties: /////////////////////////
		protected isShow: boolean = false;

		/**
		 * コンストラクタ
		 **/
		constructor() {
			super();
			this.target = $('.SearchFormUnit');
			this.target.hide();
		}

		reset = ():void => {
			this.target.css({
				perspective: '400px',
				rotateX: '90deg',
				translateY: '-20px',
				opacity: 0
			});
		}

		/**
		 * 表示メソッド
		 **/
		show = ():void => {
			if (this.isShow) { return; }

			this.isShow = true;
			this.target.show();
			this.target.bind('mouseleave', ()=>{
				this.hide();
			});
			this.target.stop();
			this.target.transition({
				perspective: '400px',
				rotateX: '0deg',
				translateY: '0px',
				opacity: 1.0
			}, 600, 'easeOutCirc', () => {
				var ev:CustomEvent = new CustomEvent(CustomEvent.SHOW);
				this.dispatchEvent(ev);
				this.onShow();
			});
		}

		/**
		 * 表示後のアクション
		 * ターゲットDOMのロールアウトで非表示にする 
		 **/
		protected onShow():void {
			this.target.bind('mouseleave', ()=>{
				this.hide();
			});
		}

		/**
		 * 非表示メソッド
		 **/
		hide = ():void => {
			if (!this.isShow) { return; }

			this.isShow = false;
			this.target.unbind('mouseleave');
			this.target.stop();
			this.target.transition({
				perspective: '400px',
				rotateX: '90deg',
				translateY: '-100px',
				opacity: 0
			}, 200, 'linear', () => {

				var ev:CustomEvent = new CustomEvent(CustomEvent.HIDE);
				this.dispatchEvent(ev);

				this.reset();
			})
		}
	}
}
