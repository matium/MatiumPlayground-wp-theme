<?php
// 前後ページのリンクを取得
$link_params = array(
	'before'           => '<nav class="nextprev-navi">',
	'after'            => '</nav>',
	'link_before'      => '',
	'link_after'       => '',
	'next_or_number'   => 'next',
	'separator'        => '',
	'nextpagelink'     => '<span class="label label-next">次のページ</span>',
	'previouspagelink' => '<span class="label label-prev">前のページ</span>',
	'echo'             => false
);
$nextprev_links = wp_link_pages($link_params);

// ページナビゲーションを取得
$pagelink_params = array(
	'before'           => '<nav class="pagelink-navi">',
	'after'            => '</nav>',
	'link_before'      => '<span class="label">',
	'link_after'       => '</span>',
	'next_or_number'   => 'number',
	'separator'        => '',
	'pagelink'         => '%',
	'echo'             => false
);
$pagenav_links = wp_link_pages($pagelink_params);

// ページが存在するなら表示
if ($nextprev_links) :
	?>
	<div class="article-header-page-nav">
		<?php
		echo $nextprev_links;
		echo "\r";
		echo $pagenav_links;
		echo "\r";
		?>
	</div>
	<?php
endif;
?>