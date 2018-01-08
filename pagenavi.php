<?php
$nextpage = get_next_posts_link();
$prevpage = get_previous_posts_link();
if ($nextpage || $prevpage) :
?>
<nav class="page-nav">
	<hr class="dotted">
	<?php wp_pagenavi(); ?>
</nav>
<?php
endif;
?>