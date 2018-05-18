$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();
	console.log('The distance scrolled is: ' + distanceScrolled);
	console.log(distanceScrolled)

	if(distanceScrolled >= 600) {
		$('.laptop').addClass('fade-in');
		$('.degree').effect('bounce', 'slow');
	} else {
		$('.laptop').removeClass('fade-in');
	}

	if(distanceScrolled >= 1500) {
		$('.images-2').addClass('fade-in');
	} else {
		$('.images-2').removeClass('fade-in');
	}

	if(distanceScrolled >= 3000) {
		$('.images-3').addClass('fade-in');
	} else {
		$('.part-3').removeClass('fade-in');
	}

	if(distanceScrolled >= 300) {
		$('.slide-0').addClass('animated');
	} else {
		$('.slide-0').removeClass('animated');
	}

});