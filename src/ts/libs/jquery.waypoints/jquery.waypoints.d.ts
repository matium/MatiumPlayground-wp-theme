// jQuery //////////////////////////////////////////////////

interface JQuery {
	waypoint(option: any): JQuery;
	waypoint(handler: (direction) => void): JQuery;
	waypoint(handler: (direction) => void, option: any): JQuery;
}