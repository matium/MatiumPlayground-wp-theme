<?php get_header(); ?>

		<div class="contents-main archive-main clearfix">

			<main id="main" class="archive-wrapper" role="main">

				<h1 class="archive-title search-result-title"><span class="archive-title-name"><?php echo esc_attr(get_search_query()); ?></span><span class="archive-title-label">の検索結果</span></h1>
				<?php
				if ( have_posts() ) :
					while( have_posts() ) :
						the_post();
						get_template_part('archive-content');
					endwhile;
				?>
				<?php else : ?>
					<article id="post-not-found" class="post-not-found">
					</article>
				<?php endif; ?>

			</main><!-- End archive-wrapper -->

			<?php get_sidebar(); ?>

		</div><!-- End contents-main -->
		
<?php get_footer(); ?>
