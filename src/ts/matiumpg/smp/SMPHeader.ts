/// <reference path="../../libs/jquery.d.ts" />
/// <reference path="../../libs/jquery.transit/jquery.transit.d.ts" />
/// <reference path="../../libs/jquery.waypoints/jquery.waypoints.d.ts" />
/// <reference path="../../libs/events/EventDispatcher.ts" />
/// <reference path="../CustomEvent.ts" />

namespace matiumpg.smp {

	import EventDispatcher = events.EventDispatcher;

	export class SMPHeader extends EventDispatcher {

		public $target: JQuery;
		public $menuButton: JQuery;
		public $gnavBox: JQuery;
		public $gnav: JQuery;

		public $showTarget: JQuery;	// ヘッダーの表示ターゲット

		protected isShown: boolean = false;
		protected isShownNavi: boolean = false;
		protected hideTop: number = -55;

		constructor() {
			super();
			this.$target = $('.smp-header');
			this.$target.hide();
			this.$menuButton = this.$target.find('.gnav-menu-btn');
			this.$gnavBox = this.$target.find('.smp-gnav-box');
			this.$gnav = this.$target.find('.smp-nav');
		}

		public init():void {
			this.$menuButton.click(()=>{
				if (this.isShownNavi) {
					this.hideNavigation();
				}
				else {
					this.showNavigation();
				}
			});

			// ヘッダーを隠す
			this.$target.css({
				'opacity': 0,
				'top': this.hideTop
			});

			// グローバルメニューを隠す
			this.$gnavBox.hide();

			// ヘッダーの表示・非表示を設定
			this.$showTarget = $('.header .header-inner .site-description');
			this.$showTarget.waypoint({
				handler: (direction) => {
					if (direction == 'down') {
						this.show();
					}
					else {
						this.hide();
					}
				},
				offset: 0
			});
		}


		/**
		 * ヘッダーを初期位置に戻す
		 */
		public resetHeader():void {
			this.$target.hide();
			this.$target.css({
				'opacity': 0,
				'top': this.hideTop
			});
		}

		public show():void {
			if (this.isShown) { return; }
			this.isShown = true;
			this.$target.stop();
			this.$target.show();
			this.$target.transition({
				opacity: 1.0,
				top: 0
			}, 300, 'easeOutQuart');
		}

		public hide():void {
			if (!this.isShown) { return; }
			this.isShown = false;
			this.$target.stop();
			this.$target.transition({
				opacity: 0,
				top: this.hideTop
			}, 200, 'linear', ()=>{
				this.resetHeader();
			});
		}

		protected showNavigation():void {
			if (this.isShownNavi) { return; }
			this.isShownNavi = true;
			this.$menuButton.addClass('open');
			this.$gnavBox.show();
			this.$gnavBox.transition({
				'perspective': '2000px',
				'rotateY': '0deg'
			}, 500, 'easeOutQuart', ()=>{
				this.$gnavBox.css('overflow', 'scroll');
			});
		}

		protected hideNavigation():void {
			if (!this.isShownNavi) { return; }
			this.isShownNavi = false;
			this.$menuButton.removeClass('open');
			this.$gnavBox.css('overflow', 'hidden');
			this.$gnavBox.transition({
				'perspective': '2000px',
				'rotateY': '-90deg'
			}, 500, 'easeOutQuart', ()=>{
				this.$gnavBox.scrollTop(0);
				this.$gnavBox.hide();
			});
		}
	}
}
