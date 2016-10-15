<article class="post-container">
	<!-- パンくずリスト -->
	<div class="breadcrumb-box">
		<nav class="breadcrumb">
			<a class="breadcrumb-home" href="<?php bloginfo('url'); ?>">
				<svg version="1.1" id="breadcrumb-home-icon" class="breadcrumb-home-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="1px" viewBox="0 0 129.85 108.4" style="enable-background:new 0 0 129.85 108.4;" xml:space="preserve">
<polygon points="129.85,58.4 64.93,0 0,58.4 19.92,58.4 19.92,108.4 51.92,108.4 51.92,70.4 77.92,70.4 77.92,108.4 109.92,108.4 
	109.92,58.4 "/>
</svg>

			</a>&nbsp;>
			<?php $cat = get_the_category(); echo get_category_parents($cat[0], true, ''); ?>
			<span class="breadcrumb-pagetitle">>&nbsp;<?php the_title(''); ?></span>
		</nav>
	</div>
	<div class="post single-post">
		<figure class="post-eyecatch-image">
			<?php
			if ( has_post_thumbnail() ) {
				the_post_thumbnail();
			}
			?>
		</figure>
		<div class='post-header'>
			<h1 class='post-title'><?php the_title(); ?></h1>
			<div class="post-info clearfix">
				<p class="post-date">Published <?php the_date(); ?></p>
				<?php the_category(); ?>
			</div>
			<?php add_social_buttons(); ?>
		</div>
		<div class="post-content">
			<?php the_content(); ?>
		</div>
		<div class="article-footer-ad">
			<h3 class="subtitle">スポンサードリンク</h3>
			<div class="ad-space"></div>
		</div>
		<div class="article-footer-socials">
			<?php add_social_buttons(); ?>
		</div>
		<nav class="article-footer-info">
			<hr>
			<?php the_category(); ?>
			<?php the_tags( '<ul class="post-tags clearfix"><li>', '</li><li>', '</li></ul>' ); ?>
			<hr>
			<?php wp_related_posts()?>
			<hr>
			<div class="prev-next">
				<div class="prev-link">
					<h4 class="prev-label">前の記事</h4>
					<?php if (get_previous_post()):?>
					<?php previous_post_link('%link','%title'); ?>
					<?php endif; ?>
				</div>
				<div class="next-link">
					<h4 class="next-label">次の記事</h4>
					<?php if (get_next_post()):?>
					<?php next_post_link('%link','%title'); ?>
					<?php endif; ?>
				</div>
			</div>
			<hr>
		</nav>
		<section id="comments" class="comments">
			<?php comments_template(); ?>
		</section>
	</div>
</article>