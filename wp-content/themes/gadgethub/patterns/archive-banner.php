<?php
/**
 * Title: Archive Banner
 * Slug: gadgethub/archive-banner
 * Categories: gadgethub
 *
 * @package gadgethub
 */

?>
<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|small","right":"0","bottom":"var:preset|spacing|small","left":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--small);padding-right:0;padding-bottom:var(--wp--preset--spacing--small);padding-left:0"><!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/archive-banner-bg.png","id":903,"dimRatio":0,"overlayColor":"lightcolor","focalPoint":{"x":0.86,"y":0.47},"minHeight":200,"isDark":false,"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small","right":"var:preset|spacing|medium","bottom":"var:preset|spacing|x-small","left":"var:preset|spacing|medium"}}}} -->
<div class="wp-block-cover is-light" style="padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--medium);min-height:200px"><span aria-hidden="true" class="wp-block-cover__background has-lightcolor-background-color has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-903" alt="" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/archive-banner-bg.png" style="object-position:86% 47%" data-object-fit="cover" data-object-position="86% 47%"/><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|xx-small"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:query-title {"type":"archive","showPrefix":false} /-->

<!-- wp:woocommerce/breadcrumbs /--></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover --></div>
<!-- /wp:group -->
