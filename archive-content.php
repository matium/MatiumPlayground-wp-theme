<article class="post-container archive-post">
	<div class="post">
		<div class="archive-post-left">
			<figure class="post-eyecatch-image">
				<a href="<?php the_permalink(); ?>">
				<?php
				if ( has_post_thumbnail() ) {
					echo get_the_post_thumbnail( null, 'thumbnail');
				}
				?></a>
			</figure>
		</div>
		<div class='archive-post-content'>
			<h2 class='post-title'><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<p class="published-date">Published&nbsp;<?php the_date(); ?></p>
		</div>
		<div class="archive-post-right">
			<a class="continue-link" href="<?php the_permalink(); ?>" target="_self">Read this</a>
		</div>
	</div>
	<hr class="dotted">
</article>