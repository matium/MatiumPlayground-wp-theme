<!doctype html>

<html lang="ja" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">

<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-83808794-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-83808794-2');
	</script>

	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<title><?php 
		if (is_home()) {
			bloginfo('name');
		} else {
			wp_title('|', true, right);
			bloginfo('name');
		} ?></title>

	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
	<!--[if IE]>
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
	<![endif]-->
	<meta name="msapplication-TileColor" content="#f01d4f">
	<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
	<meta name="theme-color" content="#121212">

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
	<!-- JS -->
	<script src="<?php echo get_template_directory_uri() ?>/js/libs/jquery-2.1.3.min.js"></script>
	<script src="<?php echo get_template_directory_uri() ?>/js/libs/jquery.easing.1.3.js"></script>
	<script src="<?php echo get_template_directory_uri() ?>/js/libs/jquery.transit.min.js"></script>
	<script src="<?php echo get_template_directory_uri() ?>/js/libs/jquery.waypoints.min.js"></script>
	<script src="<?php echo get_template_directory_uri() ?>/js/main.js"></script>


	<?php wp_head(); ?>
	<!-- Morisawa Clund Font -->
	<script type="text/javascript" src="//typesquare.com/accessor/script/typesquare.js?GGE11FdOIFk%3D" charset="utf-8"></script>
</head>

<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.7&appId=1987502841475985";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
	<div class="page-wrapper">
		<header class="header">
			<div class="header-inner">
			<?php if(is_home()) : ?>
				<h1 id="title-logo" class="site-title"><?php bloginfo( 'name' ); ?></h1>
			<?php else : ?>
				<a id="title-logo" class="site-title" href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo( 'name' ); ?></a>
			<?php endif; ?>

				<p class="site-description">matium.jpの制作ノート。WebやUI/UXデザインの技術メモの他、<br />インタラクティブ表現のネタなどを書き溜めるブログです。</p>

				<!-- Follow Buttons SNS -->
				<nav class="sns-follows">
					<a class="sns-follow-btn follow-fb" href="https://www.facebook.com/matium.fb" title="Follow Facebook Page" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-fb.svg" alt="Follow Facebook Page"></a>
					<a class="sns-follow-btn follow-tw" href="https://twitter.com/matium" title="Follow @matium" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-tw.svg" alt="Follow @matium"></a>
					<a class="sns-follow-btn follow-ghub" href="https://github.com/matium" title="Follow @matium" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-ghub.svg" alt="Follow @matium"></a>
					<a class="sns-follow-btn follow-feedly" href="https://feedly.com/i/subscription/feed/http://play.matium.jp/feed" title="Add Feedly" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-feedly.svg" alt="Add Feedly"></a>
				</nav>
				<a class="search-button" href="javascript:void(0);" title="検索する"><img src="<?php echo get_template_directory_uri(); ?>/images/icon-search.svg" alt="検索する"></a>

			</div><!-- End header-inner -->
			<?php get_search_form(); ?>
		</header><!-- End header -->
