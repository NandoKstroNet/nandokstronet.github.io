$('.hidden').hide();

$(".pin_map").click(function(){
  $(".mask_map").fadeIn();
  $(this).parent().parent().find('.sdc_maps').show();
});

$(".mask_map").click(function(){
  $(this).fadeOut(function(){
    $(".sdc_maps").hide();
  });
});