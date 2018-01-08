/// <reference path="../libs/events/Event.ts" />

namespace matiumpg {

	export class CustomEvent extends events.Event {

		static SHOW: string = "onShow";
		static HIDE: string = "onHide";

		constructor(type:string) {

			super(type);	
		}
	}
}