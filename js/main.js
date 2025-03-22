// Service carousel
// $(".service-carousel").owlCarousel({
//   autoplay: true,
//   smartSpeed: 1000,
//   center: true,
//   margin: 25,
//   dots: true,
//   loop: true,
//   nav: false,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     576: {
//       items: 2,
//     },
//     768: {
//       items: 3,
//     },
//     992: {
//       items: 2,
//     },
//     1200: {
//       items: 3,

//     },
//   },
// });


$(".service-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  margin: 25,
  dots: true,
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 3,
      
    },
  },
});

// $(document).ready(function () {
//   //toggle menu

//   $(".navbar-toggler").click(function () {
//     $("body,html").addClass("toggle-menu");
//   });

//   $(".ico-close").click(function () {
//     $("body,html").removeClass("toggle-menu");
//   });

//   var menu = $(".navbar-collapse").html();

//   var em = $(".ht-detail").html();

//   $(".m-menu-scroll").html(menu);

//   $(".m-menu-scroll .navbar-nav").after(em);
// });

// //fixed header

// if ($(window).width() >= 768) {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() >= 150) {
//       $("header").addClass("fixed-header");
//     } else {
//       $("header").removeClass("fixed-header");
//     }
//   });
// }


$(document).ready(function () {
  // Toggle menu open when navbar-toggler is clicked
  $(".navbar-toggler").click(function () {
    $("body, html").addClass("toggle-menu");
  });

  // Close menu when cross icon is clicked
  $(".ico-close").click(function () {
    $("body, html").removeClass("toggle-menu");
  });

  // Close menu only when clicking outside the menu or the cross icon
  $(document).on("click", function (e) {
    if (
      $(".navbar-collapse").hasClass("show") && // Check if menu is open
      !$(e.target).closest(".navbar-collapse, .navbar-toggler, .navbar-nav").length // Allow clicks inside navbar items
    ) {
      $("body, html").removeClass("toggle-menu");
    }
  });

  // Fixed header on scroll
  if ($(window).width() >= 768) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 150) {
        $("header").addClass("fixed-header");
      } else {
        $("header").removeClass("fixed-header");
      }
    });
  }

  // Populate menu content
  var menu = $(".navbar-collapse").html();
  var em = $(".ht-detail").html();
  $(".m-menu-scroll").html(menu);
  $(".m-menu-scroll .navbar-nav").after(em);
});


// document.addEventListener('DOMContentLoaded', function () {
//   const dropdownLink = document.getElementById('dropdownLink');
//   const dropdownMenu = document.getElementById('dropdownMenu');
//   if (!dropdownLink) {
//     console.error("Dropdown elements not found!");
//     return;
//   }

//   let isDropdownOpen = false;
//  console.log("dropdownLink.addEventListener",dropdownLink.addEventListener)
//   dropdownLink.addEventListener('click', function (event) {
      
//     event.preventDefault();
//     console.log("menu-clicked",isDropdownOpen)
//     isDropdownOpen = !isDropdownOpen;
//     toggleDropdown(isDropdownOpen);
//   });

//   dropdownLink.addEventListener('dblclick', function (event) {
//     event.preventDefault();
//     isDropdownOpen = false;
//     toggleDropdown(isDropdownOpen);
//   });

//   function toggleDropdown(open) {
//     if (open) {
//       dropdownLink.classList.add('show'); // Add 'show' class to open
      
//     } else {
//       dropdownLink.classList.remove('show'); // Remove 'show' class to close
//     }
//   }

//   // Optional: Close dropdown on outside click
  
//   document.addEventListener('click', function (event) {
//       console.log("dropdownLink",dropdownLink)
//       console.log("dropdownMenu",dropdownMenu)
//       console.log("event.target",event.target)
//     if (!dropdownLink.contains(event.target)) {
       
//       isDropdownOpen = false;
//       toggleDropdown(isDropdownOpen);
      
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".nav-link");

  dropdownLinks.forEach((dropdownLink) => {
    const dropdownMenu = dropdownLink.nextElementSibling;

    if (!dropdownMenu) return;

    let isDropdownOpen = false;

    dropdownLink.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      isDropdownOpen = !isDropdownOpen;
      toggleDropdown(dropdownMenu, isDropdownOpen);
    });

    dropdownLink.addEventListener("dblclick", function (event) {
      event.preventDefault();
      event.stopPropagation();

      isDropdownOpen = false;
      toggleDropdown(dropdownMenu, isDropdownOpen);
    });

    function toggleDropdown(menu, open) {
      if (open) {
        menu.classList.add("show");
      } else {
        menu.classList.remove("show");
      }
    }
  });

  // Close when clicking outside
  document.addEventListener("click", function (event) {
    document.querySelectorAll(".mega-menu").forEach((menu) => {
      if (!menu.contains(event.target)) {
        menu.classList.remove("show");
        console.log("clicked")
      }
    });
  });
});



let currentSlide = 0;
const slider = document.querySelector(".vt-list");
const items = document.querySelectorAll(".vt-item");

function getItemsPerView() {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

function updateSlidePosition() {
  if (window.innerWidth <= 992) {
    const itemsPerView = getItemsPerView();
    if (window.innerWidth <= 576) {
      // For mobile: full width slides
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    } else {
      // For tablet: consider gap in calculation
      const slideWidth = 100 / itemsPerView;
      const gapPercent = ((30 * currentSlide) / slider.offsetWidth) * 100;
      slider.style.transform = `translateX(-${
        currentSlide * slideWidth + gapPercent
      }%)`;
    }
  } else {
    slider.style.transform = "none";
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidePosition();
    updateArrowVisibility();
  }
}

function nextSlide() {
  const itemsPerView = getItemsPerView();
  if (currentSlide < items.length - itemsPerView) {
    currentSlide++;
    updateSlidePosition();
    updateArrowVisibility();
  }
}

function updateArrowVisibility() {
  const prevArrow = document.querySelector(".vt-nav-prev");
  const nextArrow = document.querySelector(".vt-nav-next");
  const itemsPerView = getItemsPerView();

  if (prevArrow && nextArrow) {
    prevArrow.style.opacity = currentSlide === 0 ? "0.5" : "1";
    nextArrow.style.opacity =
      currentSlide >= items.length - itemsPerView ? "0.5" : "1";
  }
}

// Handle window resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const itemsPerView = getItemsPerView();
    currentSlide = Math.min(currentSlide, items.length - itemsPerView);
    if (currentSlide < 0) currentSlide = 0;
    updateSlidePosition();
    updateArrowVisibility();
  }, 100);
});

// Touch events for mobile
let touchStart = 0;
let touchEnd = 0;

slider.addEventListener(
  "touchstart",
  (e) => {
    touchStart = e.touches[0].clientX;
  },
  { passive: true }
);

slider.addEventListener(
  "touchmove",
  (e) => {
    touchEnd = e.touches[0].clientX;
  },
  { passive: true }
);

slider.addEventListener("touchend", () => {
  if (window.innerWidth <= 992) {
    const swipeDistance = touchEnd - touchStart;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  }
});

function handleVideoSlide() {
  // Pause all videos when sliding
  const videos = document.querySelectorAll(".vt-item video");
  videos.forEach((video) => {
    video.pause();
  });
}

// Modify the prevSlide and nextSlide functions to include video handling
function prevSlide() {
  if (currentSlide > 0) {
    handleVideoSlide();
    currentSlide--;
    updateSlidePosition();
    updateArrowVisibility();
  }
}

function nextSlide() {
  const itemsPerView = getItemsPerView();
  if (currentSlide < items.length - itemsPerView) {
    handleVideoSlide();
    currentSlide++;
    updateSlidePosition();
    updateArrowVisibility();
  }
}

// Add event listener for video play
document.querySelectorAll(".vt-item video").forEach((video) => {
  video.addEventListener("play", function () {
    // Pause all other videos when one starts playing
    document.querySelectorAll(".vt-item video").forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

// Initialize
updateSlidePosition();
updateArrowVisibility();

document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".before-after-list");
  const items = document.querySelectorAll(".before-after-item");
  const prevButton = document.querySelector(".before-after-nav-prev");
  const nextButton = document.querySelector(".before-after-nav-next");
  let currentIndex = 0;

  function updateSlider() {
    const translateX = -currentIndex * 100;
    list.style.transform = `translateX(${translateX}%)`;
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
  }

  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Optional: Add keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      showPrevSlide();
    } else if (e.key === "ArrowRight") {
      showNextSlide();
    }
  });
});

const scrollArea = document.querySelector(
  ".social-validation-section-scroll-area"
);
const imageList = document.querySelector(
  ".social-validation-section-image-list"
);

// Clone the images to allow infinite scrolling
imageList.innerHTML += imageList.innerHTML;

// Start the scrolling loop
let scrollOffset = 0;

function infiniteScroll() {
  scrollOffset -= 1; // Adjust speed here
  if (Math.abs(scrollOffset) >= imageList.scrollWidth / 2) {
    scrollOffset = 0; // Reset to simulate infinite loop
  }
  imageList.style.transform = `translateX(${scrollOffset}px)`;
  requestAnimationFrame(infiniteScroll); // Continuously call the function
}

infiniteScroll();

function toggleAccordion(header) {
  const item = header.parentElement;
  const currentlyActive = document.querySelector(".accordion-item.active");

  if (currentlyActive && currentlyActive !== item) {
    currentlyActive.classList.remove("active");
  }

  item.classList.toggle("active");
}

//header subtabs
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownToggle = document.querySelectorAll(".dropdown-toggle");
//   console.log("dropdown-toggle",dropdownToggle)

//   dropdownToggle.forEach(function (element) {
//     element.addEventListener("click", function (e) {
//       e.preventDefault();
//       e.stopPropagation();

//       var submenu = this.nextElementSibling;
//       submenu.classList.toggle("show");
      
//     });
//   });

//   // Close submenu when clicking outside
//   document.addEventListener("click", function () {
//     document
//       .querySelectorAll(".dropdown-menu.submenu")
//       .forEach(function (submenu) {
//         submenu.classList.remove("show");
//       });
//   });
// });














// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the result section
  const appointmentButton1 = document.querySelector("#btn1");
   const appointmentButtonTop = document.querySelector("#btn-top");
  const appointmentButton2 = document.querySelector("#btn2");
   const appointmentButton3 = document.querySelector("#btn3");
    const appointmentButton4 = document.querySelector("#btn4");
    
    
  const enquiryForm = document.getElementById("enquiry-form");


 
appointmentButton1.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      block: "start", // Adjusted to align the top of the section with the viewport
    });
  });


  appointmentButtonTop.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();
//  const offset = enquiryForm.getBoundingClientRect().top + window.scrollY - 20;
const elementPosition = enquiryForm.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - (window.innerHeight / 2) + (enquiryForm.offsetHeight / 2);
    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      top: offsetPosition,
    });
  });
  
  
   appointmentButton2.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      block: "start", // Adjusted to align the top of the section with the viewport
    });
  });
  
   appointmentButton3.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      block: "start", // Adjusted to align the top of the section with the viewport
    });
  });
  
   appointmentButton4.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      block: "start", // Adjusted to align the top of the section with the viewport
    });
  });
});





