// Type definitions for jQuery.transit.js 0.9.9
// Project: http://ricostacruz.com/jquery.transit/
// Definitions by: MrBigDog2U <https://github.com/MrBigDog2U>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery.d.ts"/>

// Transit //////////////////////////////////////////////////

interface JQueryTransitOptions {
	opacity?: number;
	duration?: number;
	delay?: number;
	easing?: string;
	complete?: () => void;
	scale?: any;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

interface JQuery {
    transition(options: any): JQuery;
    transition(options: any, duration: number): JQuery;
    transition(options: any, easing: string): JQuery;
    transition(options: any, duration: number, easing: string): JQuery;
    transition(options: any, complete: () => void): JQuery;
    transition(options: any, duration: number, easing: string, complete: () => void): JQuery;

    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     */
    css(propertyName: string, value: number[]): JQuery;

}
