<!doctype html>

<html <?php language_attributes(); ?>>

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	<title><?php wp_title(''); ?></title>

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

	<?php wp_head(); ?>
	<!-- Morisawa Clund Font -->
	<script type="text/javascript" src="//typesquare.com/accessor/script/typesquare.js?GGE11FdOIFk%3D" charset="utf-8"></script>
</head>

<body>
	<div class="page-wrapper">

		<header class="header">
			<div class="header-inner">
			<?php if(is_home()) : ?>
				<h1 id="title-logo" class="site-title"><img src="<?php echo get_template_directory_uri(); ?>/images/titlelogo.svg" alt="<?php bloginfo( 'name' ); ?>"></h1>
			<?php else : ?>
				<p id="title-logo" class="site-title"><a href="<?php echo home_url(); ?>" rel="nofollow"><img src="<?php echo get_template_directory_uri(); ?>/images/titlelogo.svg" alt="<?php bloginfo( 'name' ); ?>"></a></p>
			<?php endif; ?>

				<p class="site-description">matium.jpの制作ノート。WebやUI/UXデザインの技術メモの他、<br />インタラクティブ表現のネタなどを書き溜めるブログです。</p>

				<!-- Follow Buttons SNS -->
				<nav class="sns-follows">
					<a class="sns-follow-btn follow-fb" href="https://www.facebook.com/matium.fb" title="Follow Facebook Page"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-fb.svg" alt="Follow Facebook Page"></a>
					<a class="sns-follow-btn follow-tw" href="https://twitter.com/matium" title="Follow @matium"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-tw.svg" alt="Follow @matium"></a>
					<a class="sns-follow-btn follow-ghub" href="https://github.com/matium" title="Follow @matium"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-ghub.svg" alt="Follow @matium"></a>				
					<a class="sns-follow-btn follow-feedly" href="http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2F365letters.tokyo%2Ffeed%2F" title="Add Feedly" target="blank"><img src="<?php echo get_template_directory_uri(); ?>/images/head-follow-feedly.svg" alt="Add Feedly"></a>
				</nav>

			</div><!-- End header-inner -->
		</header><!-- End header -->