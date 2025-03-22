// // Banner Image Handler
// function debounce(func, wait) {
//   let timeout;
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// const bannerConfig = {
//   banner1: {
//     id: "banner-image",
//     images: {
//       mobile: "Images/banner-480w.webp",
//       tablet: "Images/banner-768w.webp",
//       desktop: "Images/banner-1200w.webp",
//       large: "Images/banner.webp",
//     },
//   },
// };

// function getImageSize() {
//   const width = window.innerWidth;
//   if (width <= 480) return "mobile";
//   if (width <= 768) return "tablet";
//   if (width <= 1200) return "desktop";
//   return "large";
// }

// function updateBannerImages() {
//   const imageSize = getImageSize();

//   Object.values(bannerConfig).forEach((banner) => {
//     const imageElement = document.getElementById(banner.id);
//     if (imageElement) {
//       const newSrc = banner.images[imageSize];
//       if (imageElement.src !== newSrc) {
//         imageElement.src = newSrc;
//       }
//     }
//   });
// }

// // Initialize banner images
// updateBannerImages();

// // Update images on window resize with debounce
// window.addEventListener("resize", debounce(updateBannerImages, 250));

// // Update images on carousel slide
// const bannerCarousel = document.getElementById("banner");
// if (bannerCarousel) {
//   bannerCarousel.addEventListener("slide.bs.carousel", updateBannerImages);
// }