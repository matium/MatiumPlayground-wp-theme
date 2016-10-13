<article class="post-container">
	<div class="post">
		<figure class="post-eyecatch-image">
			<?php
			if ( has_post_thumbnail() ) {
				the_post_thumbnail();
			}
			?>
		</figure>
		<div class='post-header'>
			<h2 class='post-title'><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		</div>
		<div class="post-content">
			<?php the_excerpt(); ?>
		</div>
	</div>
	<nav class="archive-post-footer clearfix">
		<a class="continue-link" href="<?php the_permalink(); ?>" target="_self">Continue reading</a>
		<a class="comment-link" href="<?php comments_link(); ?>" target="_self">Leave a Comment </a>
	</nav>
	<hr class="dotted">
</article>