<?php
/**
 * Title: Trending Products
 * Slug: gadgethub/trending-products
 * Categories: gadgethub
 *
 * @package gadgethub
 */

?>
<!-- wp:group {"tagName":"section","style":{"spacing":{"padding":{"top":"0","right":"20px","bottom":"var:preset|spacing|large","left":"20px"}}},"layout":{"type":"constrained"}} -->
<section id="trending-products" class="wp-block-group" style="padding-top:0;padding-right:20px;padding-bottom:var(--wp--preset--spacing--large);padding-left:20px"><!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-bottom:var(--wp--preset--spacing--small)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}},"className":"animated animate__fadeInLeft"} -->
<h3 class="wp-block-heading has-text-align-center animated animate__fadeInLeft" style="font-style:normal;font-weight:600"><?php esc_html_e( 'Trending This Week', 'gadgethub' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:buttons {"className":"animated animate__fadeInRight"} -->
<div class="wp-block-buttons animated animate__fadeInRight"><!-- wp:button {"textColor":"heading","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"color":{"background":"#12121200"}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-heading-color has-text-color has-background wp-element-button" href="#" style="background-color:#12121200;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><?php esc_html_e( 'View All Products', 'gadgethub' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"0"}}},"className":"animated animate__fadeInUp","layout":{"type":"constrained"}} -->
<div class="wp-block-group animated animate__fadeInUp" style="margin-bottom:0"><!-- wp:woocommerce/product-new {"columns":5,"rows":2} /--></div>
<!-- /wp:group --></section>
<!-- /wp:group -->
