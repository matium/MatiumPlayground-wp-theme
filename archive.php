<?php get_header(); ?>

		<div class="contents-main archive-main clearfix">

			<main id="main" class="archive-wrapper" role="main">
				<h1 class="archive-title"><span class="archive-title-name"><?php echo get_the_archive_title(); ?></span><span class="archive-title-label">の記事一覧</span></h1>
				<?php
				if ( have_posts() ) :
					while( have_posts() ) :
						the_post();
						get_template_part( 'archive-content' );
					endwhile;
				?>
				<?php else : ?>
					<article id="post-not-found" class="post-not-found">
					</article>

				<?php endif; ?>

			</main><!-- End archive-wrapper -->

			<?php get_sidebar(); ?>

			<?php get_template_part( 'smp-header' ); ?>

		</div><!-- End contents-main -->
		
<?php get_footer(); ?>
