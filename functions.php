<?php

function custom_excerpt_length( $length ) {
     return 200;	
}	
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

function new_excerpt_more($more) {
	return '.......';
}
add_filter('excerpt_more', 'new_excerpt_more');

?>