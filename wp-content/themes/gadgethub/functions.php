<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package gadgethub
 * @since 1.0.0
 */

/**
 * Gadgethub Theme Support
 */
function gadgethub_theme_support() {

	load_theme_textdomain( 'gadgethub', get_template_directory() . '/languages' );

	// Support Post thumbnails.
	add_theme_support( 'post-thumbnails' );

	// Support responsive embedded content.
	add_theme_support( 'responsive-embeds' );

	// Support Block Styles.
	add_theme_support( 'wp-block-styles' );

	// Support Editor Styles.
	add_editor_style( get_template_directory_uri() . '/assets/css/editor-styles.css' );

}
add_action( 'after_setup_theme', 'gadgethub_theme_support' );


/*
-----------------------------
Enqueue Styles
--------------------------------*/
if ( ! function_exists( 'gadgethub_styles' ) ) :

	/**
	 * Enqueue Theme Styles nad js.
	 */
	function gadgethub_styles() {

		$version = wp_get_theme()->get( 'Version' );

		// Font Awesome.
		wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/assets/css/vendors/font-awesome/css/all.min.css', array(), $version, 'all' );

		// Bootstrap Font.
		wp_enqueue_style( 'bootstrap-icon', get_template_directory_uri() . '/assets/css/vendors/bootstrap/bootstrap-icons.css', array(), $version, 'all' );

		// Theme Styles.
		wp_enqueue_style( 'gadgethub-styles', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

		// Core Block Styles.
		wp_enqueue_style( 'gadgethub-styles-blocks', get_template_directory_uri() . '/assets/css/blocks.css', array(), $version, 'all' );

		// Woocommerce Styles.
		wp_enqueue_style( 'gadgethub-styles-woocommerce', get_template_directory_uri() . '/assets/css/woocommerce.css', array(), $version, 'all' );

		// Animate CSS.
		wp_enqueue_style( 'op-animate-style', get_template_directory_uri() . '/assets/css/vendors/animate.min.css', array(), $version, 'all' );

		// Animate js.
		wp_enqueue_script( 'op-scrollanimate-js', get_template_directory_uri() . '/assets/js/scrollanimate.js', array( 'jquery' ), $version, true );

		// Theme Skin.
		wp_enqueue_script( 'op-themeskin-js', get_template_directory_uri() . '/assets/js/theme-skin.js', array( 'jquery' ), $version, true );

		// Woocommerce js.
		wp_enqueue_script( 'op-woocommerce-js', get_template_directory_uri() . '/assets/js/op-woo.js', array( 'jquery' ), $version, true );
	}

endif;
add_action( 'wp_enqueue_scripts', 'gadgethub_styles' );

/**
 * Pattern category register.
 */
require_once get_theme_file_path( 'includes/pattern-category.php' );
require_once get_theme_file_path( 'includes/omnipress-theme-notice/class-theme-notice.php' );

/**
 * Load TGMPA
 */
require get_parent_theme_file_path( '/includes/tgmpa/tgmpa.php' );

/**
 * Remove Default WooCommerce Styles
 */
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );

/**
 * Theme Skins
 */
require_once get_theme_file_path( 'includes/theme-skin.php' );

/**
 * Theme Details
 */
require_once get_theme_file_path( 'includes/omnipress-theme-details/class-theme-details.php' );