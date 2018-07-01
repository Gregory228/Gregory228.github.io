$(window).scroll(function() {
  
  var st = $(this).scrollTop();
  
  $(".header-text1").css({
    "transform" : "translate(0%, -"+ st/2 +"%"
  });
  
  $(".header_text").css({
    "transform" : "translate(0%, "+ st/2 +"%"
  });
  
  $(".header_text2").css({
    "transform" : "translate(0%, "+ st/2 +"%"
  });
  
  $(".header_text3").css({
    "transform" : "translate(0%, "+ st/2 +"%"
  });
});