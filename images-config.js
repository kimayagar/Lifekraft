/**
 * ===== IMAGE CONFIGURATION =====
 * Centralized image paths for easy future updates.
 * Change image paths here to update them site-wide.
 * 
 * Usage:
 * In HTML: <img src="${IMAGES.logo.main}" alt="Logo" />
 * In CSS: background-image: url('${IMAGES.backgrounds.hero}');
 */

const IMAGES = {
  // Logo images
  logo: {
    main: 'images/logo/logo.png',
    alt: 'LifeKraft Logo'
  },

  // Doctor images
  doctor: {
    photo: 'images/doctor/doctor-photo.jpg',
    alt: 'Dr. Saee Gokhale'
  },

  // Background images
  backgrounds: {
    hero: 'images/backgrounds/bg-hero.jpg',
    dark: 'images/backgrounds/bg-dark.jpg',
    services: 'images/backgrounds/bg-services.jpg',
    testimonials: 'images/backgrounds/bg-testimonials.jpg',
    online: 'images/backgrounds/bg-dark.jpg' // reuses dark background
  }
};

/**
 * ===== HOW TO USE =====
 * 
 * 1. UPDATE IMAGE PATHS
 *    To change all logo images, update IMAGES.logo.main
 *    
 * 2. ADD NEW IMAGES
 *    Add new categories or items to the IMAGES object as needed.
 *    Example:
 *    icons: {
 *      close: 'images/icons/close.svg',
 *      menu: 'images/icons/menu.svg'
 *    }
 * 
 * 3. SWITCH IMAGE DIRECTORIES
 *    To use images from a different folder:
 *    - Update all paths in this file
 *    - Changes will apply everywhere images are referenced
 * 
 *    Example for CDN:
 *    logo.main: 'https://cdn.example.com/images/logo/logo.png'
 */

// Export for use in HTML and scripts (if using modules)
// export default IMAGES;

// Or use as global for non-module environments:
// window.IMAGES = IMAGES;
