<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package fingreens
 */

get_header();
?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<div class="container-fluid post">
				<div class="row flex">
					<div class="col-sm-12">
						<?php if ( have_posts() ) : ?>

							<header class="page-header">
											<?php
											the_archive_title( '<h1 class="archive__title">', '</h1>' );
											the_archive_description( '<div class="archive-description">', '</div>' );
											?>
							</header><!-- .page-header -->

					</div>
				</div>
			</div>
							<?php
							/* Start the Loop */
							while ( have_posts() ) :
								the_post();

								/*
								* Include the Post-Type-specific template for the content.
								* If you want to override this in a child theme, then include a file
								* called content-___.php (where ___ is the Post Type name) and that will be used instead.
								*/
							?>
			<div class="container-fluid post">
				<div class="row flex">
					<div class="col-sm-12 col-xl-3">
						<section class="archive">

							<?php
								get_template_part( 'template-parts/content', get_post_type() );

							endwhile;

							?>
						</section>
						</div>
           			 <hr>
       			 </div>
			<div class="container-fluid post">
				<div class="row flex">
						<div class="col-sm-12">
							<?php
							the_posts_navigation();

						else :

							get_template_part( 'template-parts/content', 'none' );

						endif;
						?>
					<?php _themename_articles_nav( 'More results &raquo;', '&laquo; Previous results', 'archive-navigation', 'Archive Navigation' ); ?>
					</div>
				</div>
			</div>
		</main><!-- #main -->
	</div>
	<?php the_terms( $post->ID, 'Content Types', 'categories: ', ' / ' ); ?>
<?php
get_footer();
