
$(document).ready(function(){;
  var a = $(".information-1").hide();
  $(".information").hide();
  $(".info-button").on("click", function(){
    $(this).next().toggle();
  });
  
});