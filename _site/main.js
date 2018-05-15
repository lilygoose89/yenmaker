//load the DOM
$(document).ready(function(){

  //log
  console.log('ready!');

});

$("#nav-icon3").click(function(){
  $(this).toggleClass("open");
  $("#sidebar").toggleClass("open");
  $("#overlay").toggle();

  if($(this).hasClass("open")){
    $(this).prependTo('#sidebar');
  } else {
    $(this).prependTo('#header .nav');
  }
});

$("#overlay").click(function(){
  $("#nav-icon3").removeClass("open").prependTo('#header .nav');
  $("#sidebar").removeClass("open");
  $(this).hide();
});
