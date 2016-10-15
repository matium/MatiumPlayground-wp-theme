<div class="SearchFormUnit">
	<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
		<label>
			<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
		</label>
		<input type="image" class="search-submit" src="<?php echo get_template_directory_uri(); ?>/images/icon-search-white.svg" value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" />
	</form>
</div>