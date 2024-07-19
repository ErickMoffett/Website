<?php
/**
 * Title: Latest Blogs
 * Slug: gadgethub/latest-blogs
 * Categories: gadgethub
 *
 * @package gadgethub
 */

?>
<!-- wp:group {"tagName":"section","style":{"spacing":{"blockGap":"0","padding":{"top":"var:preset|spacing|large","right":"20px","bottom":"var:preset|spacing|large","left":"20px"}}},"layout":{"type":"constrained"}} -->
<section id="blogs" class="wp-block-group" style="padding-top:var(--wp--preset--spacing--large);padding-right:20px;padding-bottom:var(--wp--preset--spacing--large);padding-left:20px"><!-- wp:group {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small"}}},"className":"animated animate__fadeInUp","layout":{"type":"constrained"}} -->
<div class="wp-block-group animated animate__fadeInUp" style="margin-bottom:var(--wp--preset--spacing--small)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}}} -->
<h3 class="wp-block-heading has-text-align-center" style="font-style:normal;font-weight:600"><?php esc_html_e( 'Our Latest Blog & Articles', 'gadgethub' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"heading","style":{"spacing":{"padding":{"top":"0","right":"0","bottom":"0","left":"0"}},"color":{"background":"#12121200"}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-heading-color has-text-color has-background wp-element-button" style="background-color:#12121200;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0">View All Blog</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|small"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--small)"><!-- wp:query {"queryId":2,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"displayLayout":{"type":"flex","columns":3}} -->
<div class="wp-block-query"><!-- wp:post-template -->
<!-- wp:cover {"useFeaturedImage":true,"dimRatio":80,"minHeight":50,"customGradient":"linear-gradient(180deg,rgba(255,255,255,0) 0%,rgb(0,0,0) 100%)","isDark":false,"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","right":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small"}}}} -->
<div class="wp-block-cover is-light" style="padding-top:var(--wp--preset--spacing--x-large);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small);min-height:50px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-80 has-background-dim has-background-gradient" style="background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgb(0,0,0) 100%)"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"elements":{"link":{"color":{"text":"var:preset|color|lightcolor"}}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-link-color"><!-- wp:categories {"fontSize":"14"} /--></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small"},"blockGap":"0"}},"backgroundColor":"bd-color","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-bd-color-background-color has-background" style="padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:post-date /-->

<!-- wp:post-title {"level":5,"isLink":true,"style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}},"typography":{"fontStyle":"normal","fontWeight":"500"},"spacing":{"padding":{"top":"var:preset|spacing|xx-small","right":"0","bottom":"var:preset|spacing|xx-small","left":"0"}}},"fontSize":"20"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-numbers /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"align":"center","placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p class="has-text-align-center"><?php esc_html_e( 'No Blog post Found!', 'gadgethub' ); ?></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group --></section>
<!-- /wp:group -->
