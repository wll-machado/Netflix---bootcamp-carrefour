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