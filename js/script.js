
$(document).ready(function() {
	$('.button-main2').click(function (event) {
		$('.button-main2,.modal_2').addClass('active');
		$('.button-main1').removeClass('active');
		});
	$('.card-button').click(function (event) {
		$('.button-main1,.modal_1').addClass('active');
		$('.button-main2').removeClass('active');
		});
	$('.close1, .close2').click(function (event) {
		$('.modal_1, .modal_2').removeClass('active');
		$('.button-main2').removeClass('active');
		$('.button-main1').addClass('active');
		});
	
 let filter = $("[data-filter]");

 	filter.on("click", function(){
 		let cat = $(this).data('filter');
 		$(this).addClass('active');
 		$('.navbar-item').not(this).removeClass("active");
 		if (cat == '0' ){
 			$("[data-cat]").each(function(){
 				$(this).removeClass('hide');
 			});
 		} else {
 		$("[data-cat]").each(function(){
 			let warkCat = $(this).data('cat');
 			if (warkCat != cat) {
 				$(this).addClass('hide');
 			} else{
 				$(this).removeClass('hide');
 			}
 		});
 	} 
 	});
 	let filtermob = $("[data-f]");
 	$('#aside_mobile').on('change', function(){
 		var cat = $('#aside_mobile').val();
 		if (cat == '0' ){
 			$("[data-cat]").each(function(){
 				$(this).removeClass('hide');
 			});
 		} else {
 		$("[data-cat]").each(function(){
 			let warkCat = $(this).data('cat');
 			if (warkCat != cat) {
 				$(this).addClass('hide');
 			} else{
 				$(this).removeClass('hide');
 			}
 		});
 	} 
 	});
});
