        /*the main Javascript file.*/

/*to edit*/

window.viewportUnitsBuggyfill.init();

$(document).ready(function() {



	if ($(window).width() > 640) {
	      var s = skrollr.init()
	  }

	// if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	//     skrollr.init().destroy();
	// }

	var value = $('#visitor-name-input').val();

	$('.enter-btn').hide();

	$('#visitor-name-input').click(function(event) {
	  $('html').one('click',function() {
	  	if ($('#visitor-name-input').val() === '') {
	  		console.log('ok1');
	  		$('.skip-btn').show('fast');
	  		$('.enter-btn').hide('fast');
	  	} else if ($('#visitor-name-input').val() != '') {
	  		$('.skip-btn').hide('fast');
	  		$('.enter-btn').show('fast');
	  	} else {
	  		$('.skip-btn').hide('fast');
	  	}
	  });
	  $('.skip-btn').hide('fast');
	  $('.enter-btn').show('fast');
	  event.stopPropagation();
	});

	var enter = function(){
		var value = $('#visitor-name-input').val();

	  	if ($('#visitor-name-input').val() === '') {
	  		$('.visitor-name-display').text("Buddy");
	  		value = 'Buddy';
	  	}else{
	  		$('.visitor-name-display').text(value);
	  	}

	  	window.name = value;
	  	console.log(window.name);

	  	$('.index-form').addClass('animated fadeOutDown');
	    $('.presentation').addClass('animated fadeInUp');
	};
	$('#visitor-name-input').keypress(function (e) {
		$('.enter-btn').show('fast');
		if(e.which == 13) enter();
	});

	var clickEnter = $('.enter-btn').click(enter);

	$('.skip-btn').click(function(){
		value = 'Buddy';
		window.name = value;
	 	window.location = 'break';
	});


	$('.visitor-name').text(window.name);




	var header = $('#header');

	var content_offset = $('.content-offset-black');
	if (content_offset.length) {
	  $(document).scroll(function() {
	    if ($(document).scrollTop() >= content_offset.offset().top){
	      // user scrolled 50 pixels or more;
	      // do stuff
	      header.addClass('blacked');
	    } else {
	      header.removeClass('blacked');
	    }
	  });
	}

	var popsy_offset = $('.popsy1');
	if (popsy_offset.length) {
	  $(document).scroll(function() {
	    if ($(document).scrollTop() >= popsy_offset.offset().top && $(document).scrollTop() <= $('.popsy3').offset().top){
	      // user scrolled 50 pixels or more;
	      // do stuff
	      	$('#popsy_video')[0].play();
	    } else {
	    	$('#popsy_video')[0].pause();
	    }
	  });
	}

	var vytein_offset = $('.vytein2');
	if (vytein_offset.length) {
	  $(document).scroll(function() {
	    if ($(document).scrollTop() >= vytein_offset.offset().top && $(document).scrollTop() <= $('.vytein3').offset().top){
	      // user scrolled 50 pixels or more;
	      // do stuff
	      	$('.vytein2').css( "z-index", "10" );
	    } else {
	    	$('.vytein2').css( "z-index", "6" );
	    }
	  });
	}


	$(".animsition").animsition({

	inClass               :   'fade-in',
	outClass              :   'fade-out',
	inDuration            :    1500,
	outDuration           :    800,
	linkElement           :   '.animsition-link',
	// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	loading               :    true,
	loadingParentElement  :   'body', //animsition wrapper element
	loadingClass          :   'animsition-loading',
	unSupportCss          : [ 'animation-duration',
	                          '-webkit-animation-duration',
	                          '-o-animation-duration'
	                        ],
	//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

	overlay               :   false,

	overlayClass          :   'animsition-overlay-slide',
	overlayParentElement  :   'body'
	});


	// $(window).scroll(function(){
	//    var scrolled = $(this).scrollTop()-460;
	//     $(".vytein2 .container").css({"top": scrolled+"px"});


	// });

	$('.open-menu').click(function(){
		$('.menu').addClass('on');
		$('body').addClass('fixed');
		$('.close-menu').addClass('animated fadeInUp');

	});

	$('.close-menu, .menu .image').click(function(){
		$('.menu').removeClass('on');
		$('.menu').addClass('off');
		$('.close-menu').removeClass('animated fadeInUp');
		var menufadeout = function(){
		  $('.menu').removeClass('off');
		  $('.menu').addClass('unvisible');
		  $('body').removeClass('fixed');
		};
		setTimeout(menufadeout, 800);
	});


	if (navigator.userAgent.search("Firefox") >= 0) {
        $('.vytein').addClass('absolute');
        $('.menu').addClass('straight');
        $('#seek-bar').addClass('firefox');
        console.log('change vytein to absolute');
    }else if (navigator.userAgent.search("MSIE") >= 0) {
        $('.vytein').addClass('absolute');
        $('.menu').addClass('straight');
        console.log('change vytein to absolute');
    };


	$('.play-video').click(function(){
		$('.video-container').toggleClass('animated fadeIn');
		$('#play-pause').click();
		$('body').addClass('fixed');
	});

	var closevideo = function(){
		$('#video')[0].pause();
		$('.video-container').addClass('fadeOut');
		var videofadeout = function(){
		  $('.video-container').removeClass('animated fadeIn fadeOut');
		};
		setTimeout(videofadeout, 1000);
		$('body').removeClass('fixed');
	};

	$('.close-video').click(function(){
		closevideo();
	});

	$('#video').on('ended',function(){
	    $('.video-container').removeClass('animated fadeIn fadeOut');
	    $('body').removeClass('fixed');
	});

	var video_On = $( ".video-container" ).hasClass( "animated" )


	var video = document.getElementById('video');
	document.onkeypress = function(e){
	    if((e || window.event).keyCode === 32){
	    	if ($( ".video-container" ).hasClass( "animated" )) {
	    		video.paused ? video.play() : video.pause();
	    	}
	    }

	};

	$(document).keyup(function(e) {
	    if (e.keyCode == 27) { // escape key maps to keycode `27`
	        if ($( ".video-container" ).hasClass( "animated" )) {
	    	    closevideo();
	    	}
	    }
	});








});
