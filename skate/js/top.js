 $(document).ready(function() {
     $('a.bktop').click(function(e) {
         $('html, body').animate({
             scrollTop: 0
         }, '1000');
         e.preventDefault();
     });
     $(window).scroll(function() {
         if ($(this).scrollTop() > 100) {
             $('.bktop').fadeIn('2000');
         } else {
             $('.bktop').fadeOut('500');
         }
     });
 });
