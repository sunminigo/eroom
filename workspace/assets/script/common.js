$(function() {
	/****************************************
	 * SLIDER
	 *****************************************/
	$('#visual_slider').slick({
		lazyLoad: 'ondemand',
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: true,
		prevArrow: '<button type="button" class="prev"><img src="./assets/images/icon/arrow_angle_left.png" alt="이전"></button>',
		nextArrow: '<button type="button" class="next"><img src="./assets/images/icon/arrow_angle_right.png" alt="다음"></button>',
	});
	$('.card_slider').slick({
		lazyLoad: 'ondemand',
		autoplay: false,
		rows: 2,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplaySpeed: 5000,
		arrows: true,
		dots: true,
		prevArrow: '<button type="button" class="prev" alt="버튼 이전"><img src="./assets/images/icon/arrow_angle_left.png" alt="이전"></button>',
		nextArrow: '<button type="button" class="next" alt="버튼 다음"><img src="./assets/images/icon/arrow_angle_right.png" alt="다음"></button>',
	});
	$('.room_view').slick({
		lazyLoad: 'ondemand',
		autoplay: false,
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.rooms'
	});
	$('.rooms').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 5,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.room_view'
	});

	/****************************************
	 * NAVIGATION
	 *****************************************/
	var url = window.location.pathname;
	var urlName = url.replace('/', '').split('.')[0];

	$('.gnb').each(function () {
		var ref = $(this).children('button').attr('ref');

		if (urlName.indexOf(ref) != -1) {
			$(this).addClass('active');
			$(this).find('.lnb_wrap').addClass('active')
		}

		$(this).on('click', function() {
			if ($(this).children().hasClass('lnb_wrap')) {
				$(this).addClass('active');
				$(this).find('.lnb_wrap').addClass('active');
				$('.gnb').not($(this)).removeClass('active').find('.lnb_wrap').removeClass('active');
				return true;
			} else {
				$('.gnb_wrap').removeClass('active');
				return false;
			}
		});
	});
	$('.lnb').each(function () {
		var href = $(this).find('a').attr('href');

		if (href != undefined) {
			href = href.split('.')[0]
		}
		if (urlName.indexOf(href) != -1) {
			$(this).addClass('active');
		}
	});
	$('.btn_back').on('click', function(){
		$('.gnb_wrap').removeClass('active');
		$('.lnb_wrap').removeClass('active');
		$('.lnb').removeClass('active');
		return false;
	});

	/****************************************
	* POPUP OPEN CLOSE
	*****************************************/
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = $(this).attr('data-popup-open');

		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(600).addClass('active');
		$('.card_slider').slick('refresh');
		$('.room_view').slick('refresh');
		$('.rooms').slick('refresh');
		$('.zoom_box').addClass('box');
		$('.btn_one').addClass('box');

		e.preventDefault();
	});
	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = $(this).attr('data-popup-close');

		$('[data-popup="' + targeted_popup_class + '"]').fadeOut('fast').removeClass('active');
		$('.zoom_box').removeClass('box');
		$('.btn_one').removeClass('box');

		e.preventDefault();
	});

	/****************************************
	 * TEXT SIZE
	 *****************************************/
	$('#control_text').on('click', function () {
		$('html, body').toggleClass('controlFontSize');
	});

	/****************************************
	 * RANDOM COLOR
	let color = ['#127BDC', '#AF1280', '#FFB500', '#7CD800'];

	for(var i =0;i < $('.randomColor').length;i++){
		getColor = function(){
			let result = color[Math.floor(Math.random()*color.length)];
			return result;
		}
		var localObj = getColor();
		$('.randomColor:eq('+i+')').css('border-left-color', localObj );
	}
	 *****************************************/

	/****************************************
	 * FLOOR BUTTON
	 *****************************************/
	$('.btn_box .close').hide();
	$('.btn_box .next').show();
	$('.btn_box .next').click(function(){
		$('.close').show();
		$(this).hide();
	});
	$('.btn_box .close').click(function(){
		$('.next').show();
		$(this).hide();
	});
});

/****************************************
 * ZOOM IN OUT
 *****************************************/
var nowZoom = 100;

function zoomOut() {
	nowZoom = nowZoom - 10;
	if(nowZoom <= 100) nowZoom = 100;
	zooms();
}
function zoomIn() {
	nowZoom = nowZoom + 10;
	if(nowZoom >= 200) nowZoom = 200;
	zooms();
}
function zooms() {
	var wrapper = document.getElementById('zoom');
			wrapper.style.width = nowZoom + "%";
			wrapper.style.height = nowZoom + "%";
			wrapper.style.zoom = nowZoom + "%";

	if(nowZoom === 200) {
		alert('더 이상 확대할 수 없습니다.');
	}
}

/****************************************
 * TEXT READ
 *****************************************/
var synth = window.speechSynthesis;

$(function() {
	$('[alt]').focus(function() {
		textToSpeech( $(this).attr('alt') );
	});
});

function textToSpeech( text ) {
	var utterThis = new SpeechSynthesisUtterance( text );

	window.speechSynthesis.cancel();

	utterThis.onend = function (event) {
		console.log('SpeechSynthesisUtterance.onend');
	}
	utterThis.onerror = function (event) {
		console.error('SpeechSynthesisUtterance.onerror');
	}

	utterThis.lang = 'ko-KR';
	utterThis.pitch = 1;
	utterThis.rate = 1;
	synth.speak(utterThis);
}
