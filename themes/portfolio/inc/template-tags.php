<?php
/**
 * Custom template tags for this theme
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package sales
 */

if ( ! function_exists( 'sales_posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function sales_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		$posted_on = sprintf(
			/* translators: %s: post date. */
			esc_html_x( 'Posted on %s', 'post date', 'sales' ),
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);

		echo '<span class="posted-on">' . $posted_on . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
endif;

if ( ! function_exists( 'sales_posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function sales_posted_by() {
		$byline = sprintf(
			/* translators: %s: post author. */
			esc_html_x( 'by %s', 'post author', 'sales' ),
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);

		echo '<span class="byline"> ' . $byline . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

	}
endif;

if ( ! function_exists( 'sales_entry_footer' ) ) :
	/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
	function sales_entry_footer() {
		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'sales' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'sales' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

			/* translators: used between list items, there is a space after the comma */
			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', 'sales' ) );
			if ( $tags_list ) {
				/* translators: 1: list of tags. */
				printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'sales' ) . '</span>', $tags_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link(
				sprintf(
					wp_kses(
						/* translators: %s: post title */
						__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', 'sales' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				)
			);
			echo '</span>';
		}

		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Edit <span class="screen-reader-text">%s</span>', 'sales' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			),
			'<span class="edit-link">',
			'</span>'
		);
	}
endif;

if ( ! function_exists( 'sales_post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 *
	 * Wraps the post thumbnail in an anchor element on index views, or a div
	 * element when on single views.
	 */
	function sales_post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		if ( is_singular() ) :
			?>

			<div class="post-thumbnail">
				<?php the_post_thumbnail(); ?>
			</div><!-- .post-thumbnail -->

		<?php else : ?>

			<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
				<?php
					the_post_thumbnail(
						'post-thumbnail',
						array(
							'alt' => the_title_attribute(
								array(
									'echo' => false,
								)
							),
						)
					);
				?>
			</a>

			<?php
		endif; // End is_singular().
	}
endif;

if ( ! function_exists( 'wp_body_open' ) ) :
	/**
	 * Shim for sites older than 5.2.
	 *
	 * @link https://core.trac.wordpress.org/ticket/12563
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
endif;

if ( ! function_exists( '_themename_articles_nav' ) ) :
	/**
	 * Create custom search results nav
	 */

	function _themename_articles_nav( $next_text = 'Next Page', $prev_text = 'Previous Page', $class_list = '', $screen_reader_text = 'Search Results Navigation' ) {
		
		?>
		<nav class="navigation posts-navigation <?php echo $class_list; ?>" role="navigation" aria-label="<?php echo __( $screen_reader_text, '_themename' ); ?>">
			<h2 class="screen-reader-text"><?php echo __( $screen_reader_text, '_themename' ); ?></h2>
			<div class="nav-links">
				<div class="nav-previous">
					<?php previous_posts_link( __( $prev_text, '_themename' ) ); ?>
				</div>
				<div class="nav-next">
					<?php next_posts_link( __( $next_text, '_themename' ) ); ?>
				</div>
			</div>
		</nav>
		<?php
	}
endif;

if ( ! function_exists( '_themename_layouts' ) ) :
	/**
	 * Flexible content modules repeated in multiple sections of site
	 */
	function _themename_layouts() {
		if ( get_row_layout() === 'content' ) :
			echo get_sub_field('content');
		elseif ( get_row_layout() === 'article_extra' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-extra.php');
		elseif ( get_row_layout() === 'article_block' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-block.php');
		elseif ( get_row_layout() === 'article_quote_full' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-quote-full.php');
		elseif ( get_row_layout() === 'article_quote_left' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-quote-left.php');
		elseif ( get_row_layout() === 'article_quote_center' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-quote-center.php');
		elseif ( get_row_layout() === 'article_quote_right' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-quote-right.php');
		elseif ( get_row_layout() === 'article_helpful' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-article-helpful.php');
		elseif ( get_row_layout() === 'bottom_banner' ) :
			include(get_template_directory() . '/template-parts/partials/modules/mod-bottom-banner.php');
		endif;
	}
endif;

function article_options() {
	include(get_template_directory() . '/template-parts/partials/modules/mod-article-share.php');
}

function article_tags() {
	include(get_template_directory() . '/template-parts/partials/modules/mod-article-tags.php');
}

function read_time() {
	include(get_template_directory() . '/template-parts/partials/modules/mod-article-read-more.php');
}

function article_window() {
	include(get_template_directory() . '/template-parts/partials/modules/mod-article-window.php');
}