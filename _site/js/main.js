//load the DOM
$(document).ready(function(){

  //log
  console.log('ready!');

});

// $('#nav-icon3').click(function(){
//   $(this).toggleClass('open');
// });

$("#nav-icon3").click(function(){
  $(this).toggleClass("open");
  $("#sidebar").toggleClass("open");
  $("html").addClass("noscroll");
  $("#overlay").toggle();

  if($(this).hasClass("open")){
    $(this).prependTo('#sidebar');
  } else {
    $(this).prependTo('#header .bg-grey');
  }
});

$("#overlay").click(function(){
  $("#nav-icon3").removeClass("open").prependTo('#header .bg-grey');
  $("#sidebar").removeClass("open");
  $("html").removeClass("noscroll");
  $(this).hide();
});
