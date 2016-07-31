$(document).ready(function(){
	$("#color-overlay-left").on('click', function(){
		$("#color-overlay-left").fadeOut();
	  //$(".className").css("property", "value");
		//$("#color-overlay-left").css("height", "100px");
	})	

	$("#color-overlay-right").on('click', function(){
		$("#color-overlay-right").fadeOut();
	  //$(".className").css("property", "value");
		//$("#color-overlay-left").css("height", "100px");
	})	
	$( "#menu-icon" ).click(function() {
  		$( "#menu-list" ).slideToggle( "fast", function() {
    	
  		});
	});

	//$("#menu-icon").on('click', function(){
	//	$("#menu-icon").addClass("fa-rotate-180");
	//})

	// $('#menu-icon').on('click', function(){
	// 	if (this.className == 'fa fa-chevron-down fa-1x' ){
 //    		$(this).removeClass('fa fa-chevron-down fa-1x');
 //    		$(this).addClass('fa fa-chevron-up fa-1x');
 //    	} else {
 //    		$(this).removeClass('fa fa-chevron-up fa-1x');
 //    		$(this).addClass('fa fa-chevron-down fa-1x');
 //    	}

	// });

		$('#menu-icon').on('click', function(){
		if ($(this).hasClass('fa-chevron-down')){
    		$(this).removeClass('fa-chevron-down');
    		$(this).addClass('fa-chevron-up');
    	} else {
    		$(this).removeClass('fa-chevron-up');
    		$(this).addClass('fa-chevron-down');
    	}

	});

});

