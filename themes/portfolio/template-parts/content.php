<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sales
 */

?>

<?php
if ( is_singular() ) :
    require('partials/ptl-article-main.php');
else : 
    ?> 
        <?php
            echo get_the_post_thumbnail($post, 'thumbnail');
        ?>
    </div>
    <div class="col-sm-12 col-xl-9">
        <div class="archive__content">
            <a href="<?php echo esc_url( get_page_link( ) );?>">
                <?php the_title( '<h2>', '</h2>' );?>
            </a>
            <?php
            the_excerpt();                  
            article_tags();
            ?>
        </div>
    </div>

<?php
endif;
?>

