// Footer collapse
import $ from 'jquery';

if ($(window).width() <= 768){	
    $('.footer-links-wrapper').addClass("some");
}else{
   $('.footer-links-wrapper').removeClass("some");
}
$(window).on('resize', function(){
   if ($(window).width() <= 768){	
       $('.footer-links-wrapper').addClass("some");
       }else{
        $('.footer-links-wrapper').removeClass("some");
       $('.footer-links-wrapper ul').show();
       }	
   }); 
$(document).on("click", ".some h3",function(){
    $(this).next('ul').slideToggle();
            $(this).toggleClass("aa");
 });