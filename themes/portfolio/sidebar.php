<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package fingreens
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
	<?php 			
		if ( have_rows('flexible_content_global', 'option') ) :
			while ( have_rows('flexible_content_global', 'option') ) : the_row();
				if ( get_row_layout() === 'article_popup' ) :
					include(get_template_directory() . '/template-parts/partials/modules/mod-article-popup.php');
				endif;
			endwhile;
		endif;
	?>
</aside><!-- #secondary -->
