
(function ($) {
  
  // controls background image on menu items

  $(document).ready(function() {
    var mainMenu = document.querySelector("#main-menu").getElementsByTagName("li");
    for (a = 0 ; a < mainMenu.length ; a++) {
      var temp = mainMenu[a];
      var checker = $(temp).hasClass("active");
      if (checker != true) {
        mainMenu[a].addEventListener('mouseenter', function(a) {
          this.classList.toggle('selected');
        });
      }
      if (checker != true) {
        mainMenu[a].addEventListener('mouseleave', function(a) {
          this.classList.toggle('selected');
        });
      }
    } 
  });

  // var hgt = $(window).height();
  // $("#background").css("height", hgt)

}(jQuery));