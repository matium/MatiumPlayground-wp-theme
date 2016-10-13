			<aside id="sidebar1" class="sidebar" role="complementary">
				<div class="sidebar-item recent-entries">
					<!-- 新着記事リスト -->
					<h3 class="sidebar-title">最近の投稿</h3>
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
				<hr class="dotted">
				<div class="sidebar-item profile">
					<!-- プロフィール -->
					<h3 class="sidebar-title">書き手</h3>
					<figure class="author-photo"><img src="<?php echo get_template_directory_uri(); ?>/images/profile-photo.jpg" alt="Author Photo"></figure>
					<p class="author-name">ワタナベ ケイタ</p>
					<p class="profile-text">東京でWebサイトを作ったり、アプリ作ったり、UI作ったりして生活してます。</p>
					<ul class="follow-links">
						<li><a class="profile-follow-btn follow-ghub" href="https://github.com/matium" title="Follow @matium" target="_blank">Follow @matium</a></li>
						<li><a class="profile-follow-btn follow-feedly" href="http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2F365letters.tokyo%2Ffeed%2F" title="Follow This Blog" target="_blank">Follow This Blog</a></li>
						<li><a class="profile-follow-btn follow-tw" href="https://twitter.com/matium" title="Follow @matium" target="_blank">フォローする</a></li>
						<li><a class="profile-follow-btn follow-fb" href="https://www.facebook.com/matium.fb" title="Follow Facebookページ" target="_blank">Facebookページ</a></li>
					</ul>
				</div>
				<hr class="dotted">
				<div class="sidebar-item categories">
					<!-- カテゴリ -->
					<h3 class="sidebar-title">カテゴリ</h3>
					<ul>
					<?php // カテゴリ一覧を表示
					$cat_params = array( 'title_li' => '');
					wp_list_categories( $cat_params );
					?>
					</ul>
				</div>
				<div class="sidebar-item monthly-archives">
					<!-- 月別アーカイブ -->
					<h3 class="sidebar-title">アーカイブ</h3>
					<ul>
					<?php wp_get_archives(); ?>
					</ul>
				</div>
				<hr class="dotted">
				<div class="widget-area">
					<?php dynamic_sidebar('sidebar-1'); ?>
				</div><!-- End widget-area -->

				<div class="sidebar-item sidebar-ad">
					<h3 class="sidebar-title">スポンサードリンク</h3>
					<div class="ad-space"></div>
				</div>

			</aside>