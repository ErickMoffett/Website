<?php
/**
 * theme detail class file.
 * Change function name according Theme //IMPORTANT
 */


 function gadgethub_theme_details() {
	add_theme_page( 'Themes', 'Omnipress Theme', 'edit_theme_options', 'omnipress-theme-details', 'theme_details_display', null );
}
add_action( 'admin_menu', 'gadgethub_theme_details' );

function theme_details_display() {
	
	// theme details contents 
	include_once 'templates/theme-details.php';
}


/**
 * Register and enqueue Theme Details Stylesheet
 */

add_action( 'admin_enqueue_scripts', 'omnipress_theme_details_style' );

function omnipress_theme_details_style() {
    wp_register_style( 'omnipress_theme_details_css', get_template_directory_uri() . '/assets/css/theme-details.css', false, '1.0.0' );
    wp_enqueue_style( 'omnipress_theme_details_css' );
}
