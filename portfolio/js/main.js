jQuery(function($){
	
/* ==================================================
   Slider
================================================== */
window.slider = function(){
	$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   12000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	300,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	0,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
											{image : 'img/slider/1.jpg', title : '', thumb : '', url : ''},
											{image : 'img/slider/2.jpg', title : '', thumb : '', url : ''},
											{image : 'img/slider/3.jpg', title : '', thumb : '', url : ''},
											{image : 'img/slider/4.jpg', title : '', thumb : '', url : ''}  
									],
									
		// Theme Options			   
		progress_bar			:	0,			// Timer for each slide							
		mouse_scrub				:	0
		
	});

}

/* ==================================================
   Page Loader
================================================== */

function pageFadeOut(){
	$(".pageload").fadeOut("slow");
}
window.addEventListener("DOMContentLoaded",function(){
    setTimeout(pageFadeOut,25000);
});

window.addEventListener("load", function(){
	pageFadeOut();
});

function showMainMenu() {
	$('.main-panel').fadeIn("slow");
}

/* ==================================================
   Page Loader Random Text
================================================== */

var quotesz = [ 
"Loading heavy duty stuff...", 
"Lifting lifter with lit lithium...", 
"Looks like the gnomes can't lift...",
"Let me take care of that...",
];
var quoteIndex = -1;

function checkLoadedPage() {
	if ($('.pageload').css('display') == 'none') {window.showNextQuote=function(){return false;}} else {showNextQuote()}
}

function showNextQuote() {
	
	var Test = document.getElementById('ShowText');
	var Test2 = $('.loading-text2');
	
	if (quoteIndex < 3) {++quoteIndex;}
	else {quoteIndex = 3}
	
	Test.innerHTML = quotesz[quoteIndex];
	Test2.fadeIn(2000).delay(3000).fadeOut(2000, checkLoadedPage);
}

/* ==================================================
   Page Navigation and Highlighting
================================================== */
$('nav a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 750);
    return false;
})

$(window).scroll(function () {
    if ($(this).scrollTop() > ($('.ctheader').height() - 55)) {
		$('nav').addClass('fixed');
        $('.container section').each(function(i) {
            if ($(this).position().top <= ($(window).scrollTop() + 80)) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });
    } else {
		$('nav').removeClass('fixed');
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
	}
});

$('.feature-left img').on('click', function() {
	 var loadmap = $(this).attr('loadmap');
	 
	 if (loadmap === "cobertura") {
		  $('#embedhere').html("<embed src='cobertura.html'></embed>");
	 }
	 else if (loadmap === "cobertura_natal") {
		 $('#embedhere').html("<embed src='cobertura_natal.html'></embed>");
	 }
	 else if (loadmap === "exchange") {
		 $('#embedhere').html("<embed src='exchange.html'></embed>");
	 }
	 else if (loadmap === "sprint_beta") {
		 console.log("change to sprint")
	 }
})

$('.alert').on('click', function () {
	$(this).hide(400);
})

$(".feat-item img").on('click', function () {
    document.location.href = $(this).attr('page');
})

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
	var trident = ua.indexOf('Trident/');
	var edge = ua.indexOf('Edge/');
	
    if (msie > 0 || trident > 0 || edge > 0) {
        $(".tumblrdiv").remove();
    }
	
    return false;
}

/* ==================================================
  Storage Management
================================================== */

// Check if browser supports storage
function canStore(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}


// Check if item exists
function storeHubMessageDisplay()
{
	if(!sessionStorage.getItem('HubMessage')) {sessionStorage.setItem('HubMessage', 1)}
}

// Retrieves the item
function hubMessageItem()
{
	return sessionStorage.getItem('HubMessage');
}

/* ==================================================
  Check Language
================================================== */

function isLangPortuguese() {
	var userLang = navigator.language || navigator.userLanguage;
	if (userLang.toString() != "pt-BR" && userLang.toString() != "pt-br" && userLang.toString() != "pt") {return false} else {return true}
}

function translateItem() {
	var Translate_ENItem = $('[do-translate="en"]');
	var Translate_PTBRItem = $('[do-translate="ptbr"]');
	if (isLangPortuguese() == true) {Translate_ENItem.remove();} else {Translate_PTBRItem.remove();}
}

function showHUBHint() {
	$('#AlertLang').hide();

	if (canStore('sessionStorage'))
	{
		if (!sessionStorage.getItem('HubMessage'))
		{
			if (isLangPortuguese() == false) {$('#AlertLang').show(500); storeHubMessageDisplay();}
		}
		else if (hubMessageItem() == 1)
		{
			$('#AlertLang').hide();
		}
	}
}onload = function() {
	showHUBHint();
}

/* ==================================================
  Calls
================================================== */
$(document).ready(function(){
	detectIE();
	showNextQuote();
	translateItem();
});

});
