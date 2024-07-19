<?php
/**
 * Gadgethub: Theme Skins *
 *
 * @package gadgethub
 * @since Gadgethub 1.0.0
 */

if ( ! function_exists( 'gadgethub_skin_scroll_to_top' ) ) :

	/**
	 * Enqueue Theme Styles nad js.
	 */
	function gadgethub_skin_scroll_to_top() {
		?>

		<a href="#" class="op-scroll-to-top scroll-progress">
			<span class="scroll-icon">
				<i class="bi bi-chevron-up"></i>
			</span>
		</a>

		<?php

	}

endif;
add_action( 'wp_body_open', 'gadgethub_skin_scroll_to_top' );
