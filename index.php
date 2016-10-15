<?php get_header(); ?>
		<div class="contents-main index-main clearfix">

			<main class="posts-wrapper" role="main">
				<?php
				if ( have_posts() ) :
					while ( have_posts() ) :
						the_post();
						get_template_part( 'index-content' );
					endwhile;
				endif;
				?>
			</main><!-- End posts-wrapper -->

			<?php get_sidebar(); ?>

		</div><!-- End contents-main -->
<?php get_footer(); ?>
