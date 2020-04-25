

$('.navbar').on("click","a",function(e){
	var id = $(this).attr("href"),
		topSpace = 100;
	$('html, body').animate({
	  scrollTop: $(id).offset().top - topSpace
	}, 800);
});

$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
  })


  $('.container').on("click","a",function(e){
	var id = $(this).attr("href"),
		topSpace = 100;
	$('html, body').animate({
	  scrollTop: $(id).offset().top - topSpace
	}, 800);
});

