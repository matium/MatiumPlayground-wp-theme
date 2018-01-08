<div class="smp-header">
	<div class="smp-header-inner">
		<a class="smp-header-title" href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo( 'name' ); ?></a>
		<!-- SMP Menu Button -->
		<a class="gnav-menu-btn">
			<div class="hamburger-mark">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
		</a>
	</div>
	<div class="smp-gnav-box">
		<nav class="smp-gnav">
			<!-- Search Form -->
			<div class="smp-gnav-item smp-gnav-search">
				<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
					<label>
						<input type="search" class="search-field" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
					</label>
					<input type="image" class="search-submit" src="<?php echo get_template_directory_uri(); ?>/images/icon-search-white.svg" value="<?php echo esc_attr_x( 'Search', 'submit button' ) ?>" />
				</form>
			</div>
			<!-- 最近の投稿 -->
			<div class="smp-gnav-item recent-entries">
				<!-- 新着記事リスト -->
				<h3 class="gnav-item-title">最近の投稿</h3>
				<ul>
					<?php // ループ スタート
					$args = array( 'posts_per_page' => 5 );
					$postslist = get_posts( $args );
					foreach ( $postslist as $post ) : setup_postdata( $post ); ?>
						<li>
							<a class="post-title" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
						</li>
						<?php
						// ループ エンド
					endforeach;
					wp_reset_postdata(); ?>
				</ul>
			</div>
			<!-- カテゴリ -->
			<div class="smp-gnav-item categories">
				<h3 class="gnav-item-title">カテゴリ</h3>
				<ul>
					<?php // カテゴリ一覧を表示
					$cat_params = array( 'title_li' => '');
					wp_list_categories( $cat_params );
					?>
				</ul>
			</div>
			<!-- 月別アーカイブ -->
			<div class="smp-gnav-item monthly-archives">
				<h3 class="gnav-item-title">アーカイブ</h3>
				<ul>
					<?php wp_get_archives(); ?>
				</ul>
			</div>
			<!-- プロフィール -->
			<div class="smp-gnav-item profile">
				<h3 class="gnav-item-title">書き手</h3>
				<figure class="author-photo"><img src="<?php echo get_template_directory_uri(); ?>/images/profile-photo.jpg" alt="Author Photo"></figure>
				<p class="author-name">ワタナベ ケイタ</p>
				<p class="profile-text">東京でWebサイトを作ったり、アプリ作ったり、UI作ったりして生活してます。</p>
				<ul class="follow-links">
					<li><a class="profile-follow-btn follow-ghub" href="https://github.com/matium" title="Follow @matium" target="_blank">Follow @matium</a></li>
					<li><a class="profile-follow-btn follow-feedly" href="https://feedly.com/i/subscription/feed/http://play.matium.jp/feed" title="Follow This Blog" target="_blank">Follow This Blog</a></li>
					<li><a class="profile-follow-btn follow-tw" href="https://twitter.com/matium" title="Follow @matium" target="_blank">フォローする</a></li>
					<li><a class="profile-follow-btn follow-fb" href="https://www.facebook.com/matium.fb" title="Follow Facebookページ" target="_blank">Facebookページ</a></li>
				</ul>
			</div>
		</nav>
	</div>
</div>