<?php
/**
 * Theme Details Content
 *
 * @package gadgethub
 */


/**
 * Exit if accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$current_theme = wp_get_theme();
$current_user = wp_get_current_user();

?>

<div id="omnipress-theme-details-wrapper" class="omnipress-theme-details">
    <div class="omnipress-theme-details__header">
        <div class="current-theme">
            <h1 class="omnipress-theme-details__header--title"><?php echo esc_html( $current_theme ); ?>: Your Ultimate FSE Theme</h1>
            <span class="omnipress-theme-details__header--subtitle" ><?php echo esc_html( 'Style Meets Substance', 'gadgethub' ); ?> <span class="theme-current-version">V<?php echo esc_html( $current_theme->get( 'Version' ) ); ?></span></span>
        </div>
        <div class="omnipress-theme-details__header--ctawrap">
            <a href="<?php echo esc_url( 'https://docs.omnipressteam.com/' ); ?>" target="_blank" class="omnipress-button omnipress-primary-button-dark">
                <i class="dashicons dashicons-info"></i>
                <?php echo esc_html( 'Knowledge Base', 'gadgethub' ); ?>
            </a>
            <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank" class="omnipress-button omnipress-secondary-button">
                <i class="dashicons dashicons-cart"></i>
                <span><?php echo esc_html( 'Buy Pro', 'gadgethub' ); ?></span>
            </a>
        </div>
    </div>
    <!-- End header -->

    <div class="omnipress-theme-details__features">
        <div class="omnipress-themeinfo-wrap">

            <div class="omnipress-themeinfo-content">

                <section class="welcome-sec">
                    <span><?php echo esc_html( 'Hello', 'gadgethub' ); ?> <?php echo $current_user->display_name; ?></span>,
                    <h2><?php echo esc_html( 'Welcome to', 'gadgethub' ); ?> <?php echo esc_html( $current_theme )?> <span><?php echo esc_html( 'Free', 'gadgethub' ); ?></span></h2>
                    <p><strong><?php echo $current_theme; ?></strong> theme ensure your website looks and feels exceptional. But, when it comes to functionality, the heavy lifting is seamlessly handled by the <strong>Omnipress Plugin</strong> - the secret sauce that takes care of all the heavy lifting when it comes to functionality</p>
                </section>

                <section class="welcome-sec-cta">
                    <div class="welcome-sec-cta__buttons">
                        <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php" class="omnipress-button omnipress-primary-button">
                            <span>Start Customising Site</span>
                        </a>
                        <a href="<?php echo esc_url( 'https://omnipressteam.com/' ); ?>" target="_blank">
                            <span>Visit Our Website</span>
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                                <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                                <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                            </svg>
                        </a>
                    </div>
                </section>

                <section class="getstarted-sec">
                    <div class="getstarted-sec__inner">
                        <h2>Quick Start</h2>
                        <div class="theme-guidelist">
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?path=%2Fpatterns&categoryType=wp_template_part&categoryId=header" class="theme-editor-card">
                                <h4>
                                    Editing Header
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?path=%2Fpatterns&categoryType=wp_template_part&categoryId=footer" class="theme-editor-card">
                                <h4>
                                    Editing Footer
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?postType=wp_template&postId=<?php echo esc_html( $current_theme->get( 'TextDomain' ) ); ?>%2F%2Fhome" class="theme-editor-card">
                                <h4>
                                    Home Page Template
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?postType=wp_template&postId=<?php echo esc_html( $current_theme->get( 'TextDomain' ) ); ?>%2F%2Fpage" class="theme-editor-card">
                                <h4>
                                    Page Teplate
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?postType=wp_template&postId=<?php echo esc_html( $current_theme->get( 'TextDomain' ) ); ?>%2F%2Fsingle" class="theme-editor-card">
                                <h4>
                                    Single Post Template
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?postType=wp_template&postId=<?php echo esc_html( $current_theme->get( 'TextDomain' ) ); ?>%2F%2Farchive" class="theme-editor-card">
                                <h4>
                                    Archive Template
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?postType=wp_template&postId=<?php echo esc_html( $current_theme->get( 'TextDomain' ) ); ?>%2F%2Fsearch" class="theme-editor-card">
                                <h4>
                                    Search Result Template
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                            <a href="<?php echo esc_url( get_site_url() ); ?>/wp-admin/site-editor.php?postType=wp_template&postId=<?php echo esc_html( $current_theme->get( 'TextDomain' ) ); ?>%2F%2F404" class="theme-editor-card">
                                <h4>
                                    404 Template
                                </h4>
                                <span href="#">Start Edit</span>
                                <i class="dashicons dashicons-arrow-right-alt"></i>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="getpro-sec">
                    <div class="getpro-sec__inner">
                        <div class="getpro-sec__inner--header">
                            <h2>Do more with Omnipress Pro</h2>
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank">
                            Upgrade Now 
                            <i class="dashicons dashicons-cart"></i></a>
                        </div>
                        <div class="theme-guidelist">
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank" class="theme-editor-card">
                                <h4>
                                    Pro Demos
                                </h4>
                                <p>Get Pre-Build Fully Functional Templates</p>
                                <span>Pro</span>
                            </a>
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank" class="theme-editor-card">
                                <h4>
                                    Pro Patterns
                                </h4>
                                <p>Get large scale of Pre-Build Patterns</p>
                                <span>Pro</span>
                            </a>                         
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank" class="theme-editor-card">
                                <h4>
                                    Responsive Control
                                </h4>
                                <p>Customize Responsive Controls</p>
                                <span>Pro</span>
                            </a>
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank" class="theme-editor-card">
                                <h4>
                                    Pro Blocks
                                </h4>
                                <p>Get all Pro Blocks</p>
                                <span>Pro</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="demo-sec">
                    <div class="demo-sec__inner">
                        <div class="demo-sec__inner-image">            
                            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/includes/omnipress-theme-details/images/demos-banner-img.webp">
                        </div>
                        <div class="demo-sec__inner-content">
                            <span>No coding skills required</span>
                            <h2>Great collection of Ready-made Demos</h2>
                            <ul>
                                <li>
                                    <i class="dashicons dashicons-yes-alt"></i>
                                    <span>Responsive & Mobile Friendly</span>
                                </li>
                                <li>
                                    <i class="dashicons dashicons-yes-alt"></i>
                                    <span>One Click Demo Import</span>
                                </li>
                                <li>
                                    <i class="dashicons dashicons-yes-alt"></i>
                                    <span>Highly Customizable</span>
                                </li>
                            </ul>
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/demos/' ); ?>" target="_blank">
                                Get all premium Demos
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                                    <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                                    <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="pattern-sec">
                    <div class="pattern-sec__inner">
                        <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/includes/omnipress-theme-details/images/patterns-banner-img.webp" class="pattern-sec__inner-bg">
                        <div class="pattern-sec__inner-content">
                            <span>Patterns Library</span>
                            <h2>Exciting New Pattern Collections</h2>
                            <p>Offering user-friendly design options for crucial website elements: headers, footers, sections and many more.</p>
                            <a href="<?php echo esc_url( 'https://omnipressteam.com/patterns/' ); ?>" target="_blank">
                                Get all premium Patterns
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                                    <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                                    <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
            
            <div class="omnipress-themeinfo-sidebar">
                <div class="omnipress-themeinfo-sidebar__card">
                    <h2 class="omnipress-themeinfo-sidebar__card--title">Premium Support</h2>
                    <p class="omnipress-themeinfo-sidebar__card--descri">Skip the queue, get live chat support, and enjoy lightning-fast replies. Join today.</p>
                    <a href="<?php echo esc_url( 'https://omnipressteam.com/wordpress-support-and-maintenance/' ); ?>" target="_blank" class="omnipress-themeinfo-sidebar__card--btn omnipress-primary-btn">
                        <span>Get Support</span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                            <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                            <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                        </svg>

                    </a>
                </div>
                <div class="omnipress-themeinfo-sidebar__card">
                    <h2 class="omnipress-themeinfo-sidebar__card--title">Join our Thriving Community</h2>
                    <p class="omnipress-themeinfo-sidebar__card--descri">Be a part of our lively community to stay informed, get updates, and  collaborative work.<p>
                    <a href="<?php echo esc_url( 'https://www.facebook.com/groups/omnipressteam/' ); ?>" target="_blank" class="omnipress-themeinfo-sidebar__card--btn omnipress-primary-btn">
                        <span>Join Our Facebook Community</span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                            <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                            <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                        </svg>

                    </a>
                </div>
                <div class="omnipress-themeinfo-sidebar__card">
                    <h2 class="omnipress-themeinfo-sidebar__card--title">Leave us a review</h2>
                    <div class="omnipress-themeinfo-sidebar__card--rating">
                        <svg width="116" height="23" viewBox="0 0 116 23" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5489 2.92705C10.8483 2.00574 12.1517 2.00574 12.4511 2.92705L13.8574 7.25532C13.9913 7.66734 14.3752 7.9463 14.8085 7.9463H19.3595C20.3282 7.9463 20.731 9.18592 19.9473 9.75532L16.2654 12.4303C15.9149 12.685 15.7683 13.1364 15.9021 13.5484L17.3085 17.8766C17.6078 18.798 16.5533 19.5641 15.7696 18.9947L12.0878 16.3197C11.7373 16.065 11.2627 16.065 10.9122 16.3197L7.23037 18.9947C6.44665 19.5641 5.39217 18.798 5.69153 17.8766L7.09787 13.5484C7.23174 13.1364 7.08508 12.685 6.7346 12.4303L3.05275 9.75532C2.26904 9.18592 2.67181 7.9463 3.64053 7.9463H8.19155C8.62477 7.9463 9.00873 7.66734 9.1426 7.25532L10.5489 2.92705Z"/>
                            <path d="M33.5489 2.92705C33.8483 2.00574 35.1517 2.00574 35.4511 2.92705L36.8574 7.25532C36.9913 7.66734 37.3752 7.9463 37.8085 7.9463H42.3595C43.3282 7.9463 43.731 9.18592 42.9473 9.75532L39.2654 12.4303C38.9149 12.685 38.7683 13.1364 38.9021 13.5484L40.3085 17.8766C40.6078 18.798 39.5533 19.5641 38.7696 18.9947L35.0878 16.3197C34.7373 16.065 34.2627 16.065 33.9122 16.3197L30.2304 18.9947C29.4467 19.5641 28.3922 18.798 28.6915 17.8766L30.0979 13.5484C30.2317 13.1364 30.0851 12.685 29.7346 12.4303L26.0527 9.75532C25.269 9.18592 25.6718 7.9463 26.6405 7.9463H31.1915C31.6248 7.9463 32.0087 7.66734 32.1426 7.25532L33.5489 2.92705Z"/>
                            <path d="M57.5489 2.92705C57.8483 2.00574 59.1517 2.00574 59.4511 2.92705L60.8574 7.25532C60.9913 7.66734 61.3752 7.9463 61.8085 7.9463H66.3595C67.3282 7.9463 67.731 9.18592 66.9473 9.75532L63.2654 12.4303C62.9149 12.685 62.7683 13.1364 62.9021 13.5484L64.3085 17.8766C64.6078 18.798 63.5533 19.5641 62.7696 18.9947L59.0878 16.3197C58.7373 16.065 58.2627 16.065 57.9122 16.3197L54.2304 18.9947C53.4467 19.5641 52.3922 18.798 52.6915 17.8766L54.0979 13.5484C54.2317 13.1364 54.0851 12.685 53.7346 12.4303L50.0527 9.75532C49.269 9.18592 49.6718 7.9463 50.6405 7.9463H55.1915C55.6248 7.9463 56.0087 7.66734 56.1426 7.25532L57.5489 2.92705Z"/>
                            <path d="M80.5489 2.92705C80.8483 2.00574 82.1517 2.00574 82.4511 2.92705L83.8574 7.25532C83.9913 7.66734 84.3752 7.9463 84.8085 7.9463H89.3595C90.3282 7.9463 90.731 9.18592 89.9473 9.75532L86.2654 12.4303C85.9149 12.685 85.7683 13.1364 85.9021 13.5484L87.3085 17.8766C87.6078 18.798 86.5533 19.5641 85.7696 18.9947L82.0878 16.3197C81.7373 16.065 81.2627 16.065 80.9122 16.3197L77.2304 18.9947C76.4467 19.5641 75.3922 18.798 75.6915 17.8766L77.0979 13.5484C77.2317 13.1364 77.0851 12.685 76.7346 12.4303L73.0527 9.75532C72.269 9.18592 72.6718 7.9463 73.6405 7.9463H78.1915C78.6248 7.9463 79.0087 7.66734 79.1426 7.25532L80.5489 2.92705Z"/>
                            <path d="M103.549 2.92705C103.848 2.00574 105.152 2.00574 105.451 2.92705L106.857 7.25532C106.991 7.66734 107.375 7.9463 107.808 7.9463H112.359C113.328 7.9463 113.731 9.18592 112.947 9.75532L109.265 12.4303C108.915 12.685 108.768 13.1364 108.902 13.5484L110.308 17.8766C110.608 18.798 109.553 19.5641 108.77 18.9947L105.088 16.3197C104.737 16.065 104.263 16.065 103.912 16.3197L100.23 18.9947C99.4467 19.5641 98.3922 18.798 98.6915 17.8766L100.098 13.5484C100.232 13.1364 100.085 12.685 99.7346 12.4303L96.0527 9.75532C95.269 9.18592 95.6718 7.9463 96.6405 7.9463H101.192C101.625 7.9463 102.009 7.66734 102.143 7.25532L103.549 2.92705Z"/>
                        </svg>

                    </div>
                    <p class="omnipress-themeinfo-sidebar__card--descri">Tell us what you love about Omnipress Plugin by leaving a review. your feedback shapes improvements. <p>
                    <a href="<?php echo  esc_url( 'https://wordpress.org/support/plugin/omnipress/reviews/#new-post' ); ?>" target="_blank" class="omnipress-themeinfo-sidebar__card--btn omnipress-primary-btn">
                        <span>Submit a Review</span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                            <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                            <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                        </svg>

                    </a>
                </div>
                <div class="omnipress-themeinfo-sidebar__card omnipress-pro-card">
                    <h2 class="omnipress-themeinfo-sidebar__card--title">Get Omnipress Pro</h2>
                    <div class="omnipress-themeinfo-sidebar__card--rating">

                    </div>
                    <p class="omnipress-themeinfo-sidebar__card--descri">Build your website visually in minutes, without coding skills.<p>
                    <a href="<?php echo esc_url( 'https://omnipressteam.com/pricing/' ); ?>" target="_blank" class="omnipress-secondary-button omnipress-button">
                        <span>Get Started Today</span>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 17.5H4.16667C3.25 17.5 2.5 16.75 2.5 15.8333V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.75 16.75 17.5 15.8333 17.5Z"/>
                            <path d="M17.5 8.33333H15.8333V4.16667H11.6666V2.5H17.5V8.33333Z"/>
                            <path d="M6.89795 11.9237L16.0902 2.73114L17.2687 3.90963L8.07648 13.1022L6.89795 11.9237Z"/>
                        </svg>

                    </a>
                </div>
            </div>

        </div>
    </div>

    <div class="omnipress-theme-details__footer">
    </div>
    <!-- End Footer -->
</div>
