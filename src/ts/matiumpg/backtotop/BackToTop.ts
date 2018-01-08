/// <reference path="../../libs/jquery.d.ts" />
/// <reference path="../../libs/jquery.transit/jquery.transit.d.ts" />

namespace matiumpg.backtotop {


	export class BackToTop {

		public target: JQuery;		// ボタンUnitのDOM（jQueryオブジェクト）

		protected isShow: boolean = false;
		protected showBottom: number = 20;
		protected hideBottom: number = 0;
		protected checkTimer;

		constructor() {
			this.target = $('.BackToTop');
			this.target.hide();

			this.target.on('click', ()=>{
				$('html,body').animate({ scrollTop: '0' }, 500, 'easeOutQuart');
			});
		}


		show = ():void => {
			if (this.isShow) { return; }
			this.isShow = true;
			this.target.show();
			this.target.transition({'opacity': 1.0, 'bottom': this.showBottom}, 500, 'easeOutQuart');
		}

		hide = ():void => {
			if (!this.isShow) { return; }
			this.isShow = false;
			var ref = this;
			this.target.transition({'opacity': 0, 'bottom': this.hideBottom}, 300, 'easeOutQuart', function(){
				$(this).hide();
			});
		}
	}
}