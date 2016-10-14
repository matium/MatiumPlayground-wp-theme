<?php

add_theme_support('post-thumbnails');

function custom_excerpt_length( $length ) {
     return 200;	
}	
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );



function new_excerpt_more($more) {
	return '.......';
}
add_filter('excerpt_more', 'new_excerpt_more');


/* Social Buttons Add by WP Social Bookmarking Light Plugin */
function add_social_buttons() {
	if(function_exists("wp_social_bookmarking_light_output_e")) {
		wp_social_bookmarking_light_output_e();
	}
}
add_filter( 'add_social_buttons', 'add_social_buttons', 1000);


add_shortcode('caption', 'my_img_caption_shortcode');

function my_img_caption_shortcode($attr, $content = null) {
	if ( ! isset( $attr['caption'] ) ) {
		if ( preg_match( '#((?:<a [^>]+>s*)?<img [^>]+>(?:s*</a>)?)(.*)#is', $content, $matches ) ) {
			$content = $matches[1];
			$attr['caption'] = trim( $matches[2] );
		}
	}

	$output = apply_filters('img_caption_shortcode', '', $attr, $content);
	if ( $output != '' )
		return $output;

	extract(shortcode_atts(array(
		'id'	=> '',
		'align'	=> 'alignnone',
		'width'	=> '',
		'caption' => ''
	), $attr, 'caption'));

	if ( 1 > (int) $width || empty($caption) )
		return $content;

	if ( $id ) $id = 'id="' . esc_attr($id) . '" ';

	return '<figure class="caption-image-box ' . esc_attr($align) . '">' . do_shortcode( $content ) . '<figcaption class="caption-text">' . $caption . '</figcaption></figure>';
}

?>