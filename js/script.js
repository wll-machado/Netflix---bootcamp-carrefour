/*navmenu*/
let mobileMenu = document.querySelector("button.navbar-toggler")

mobileMenu.addEventListener('click', function(){
    let showMenu = document.querySelector(".mobile-menu")
    showMenu.classList.toggle('on');
    showMenu.animate([
        // keyframes
        { height: 0 },
        { height: "150px" }

      ], {
        // timing options
        duration: 500,
        easing: "linear",
        iterations: 1
      });
})

/*carousel*/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:3000,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})