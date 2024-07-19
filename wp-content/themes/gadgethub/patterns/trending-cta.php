<?php
/**
 * Title: Trending Banner
 * Slug: gadgethub/trending-banner
 * Categories: gadgethub
 *
 * @package gadgethub
 */

?>
<!-- wp:group {"tagName":"section","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"},"margin":{"top":"var:preset|spacing|large"}}},"layout":{"type":"default"}} -->
<section id="trending-cta" class="wp-block-group" style="margin-top:var(--wp--preset--spacing--large);padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/abstract-cta-bg.png","id":591,"dimRatio":0,"minHeight":50} -->
<div class="wp-block-cover" style="min-height:50px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-591" alt="Gadgets Abstract Background Image" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/abstract-cta-bg.png" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|large","right":"20px","bottom":"var:preset|spacing|large","left":"20px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--large);padding-right:20px;padding-bottom:var(--wp--preset--spacing--large);padding-left:20px"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"align":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"500"}}} -->
<p class="has-text-align-center" style="font-style:normal;font-weight:500"><?php esc_html_e( 'TRENDING ACCESSORIES COLLECTION', 'gadgethub' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","fontSize":"42"} -->
<h2 class="wp-block-heading has-text-align-center has-42-font-size"><?php esc_html_e( 'Best Selling', 'gadgethub' ); ?> <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-gold-color"><?php esc_html_e( '2023', 'gadgethub' ); ?> </mark><?php esc_html_e( 'Products', 'gadgethub' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|x-small"}}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--x-small)"><!-- wp:button {"style":{"border":{"radius":"5px"}},"className":"is-op-button-style-4"} -->
<div class="wp-block-button is-op-button-style-4"><a class="wp-block-button__link wp-element-button" style="border-radius:5px"><?php esc_html_e( 'Discover More', 'gadgethub' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover --></section>
<!-- /wp:group -->
