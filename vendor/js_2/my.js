
    // Init Scrollspy
    $('body').scrollspy({
      target: '#main-nav'
  });

  // Smooth Scrolling
  $("#main-nav a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function() {

              window.location.hash = hash;
          });
      }
  });



$('.owl-carousel-3').owlCarousel({
 
  autoplay:false,
  items:1,
  loop:true,
  margin:0,
  responsiveClass:true,
  nav:false,
  dots:false,
  center:true,
  autoplay: true,
  autoplayHoverPause:true,
  slideSpeed: 3000,
  paginationSpeed: 5000,
  smartSpeed:1000,
  // responsive:{
      
  //     676:{
  //         items:2
  //     },
  //     1000:{
  //         items:3
  //     }
  // }
})
$(".owl-products").owlCarousel({
  items: 3,
  dots: false,
  nav: false,
  loop: true,
  center:true,
  autoplay: true,
  autoplayHoverPause:true,
  slideSpeed: 3000,
  paginationSpeed: 5000,
  smartSpeed:1000,
  responsive: {
      992: {
          items: 3
      },
      600: {
          items: 3,
        
      },
      320: {
          items: 1
      },
      280: {
          items: 1
      }
  }
});









var swiper = new Swiper(".mySwiper2", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
   faq.addEventListener("click", () =>{
       faq.classList.toggle("active");
   });
});

$('.header-mobile-container').owlCarousel({
  loop:false,
  autoplay:false,
  margin:0,
  responsiveClass:false,
  nav:false,
  dots:true,
  center:true,
  autoplay: true,
  autoplayHoverPause:true,
  slideSpeed: 3000,
  paginationSpeed: 5000,
  smartSpeed:1000,
  responsive:{
      0:{
          items:1
      }
      
  }
})
$('.meta-owl-carousel').owlCarousel({
  loop:false,
  autoplay:false,
  margin:0,
  responsiveClass:false,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      }
      
  }
})



