$(document).ready(function(){
	//navigation
	var url = window.location.pathname;
	var urlName = url.replace('/', '').split('.')[0];

	$('.gnb').each(function () {
		var ref = $(this).children('button').attr('ref');
		var href = $(this).find('a').attr('href');
		// console.log('urlName:', urlName);
		// console.log('ref:', ref);

		if (urlName.indexOf(ref) != -1) {
			$(this).addClass('active');
			$(this).find('.lnb_wrap').addClass('active')
			if ($(this).children().hasClass('lnb_wrap')) {
				$(this).parent().addClass('active')
			}
		}

		$(this).on('click', function() {
			if ($(this).children().hasClass('lnb_wrap')) {
				console.log('있어')
				$('.gnb_wrap').addClass('active');
				$(this).find('.lnb_wrap').addClass('active');
				return true;
			} else {
				console.log('없어')
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

/*
		var url = document.location.pathname
		var gnb = document.querySelectorAll('.gnb');
		var btn_back = document.getElementsByClassName('btn_back');

		for (var i = 0; i < gnb.length; i++) {
			var refName = gnb[i].children[0].attributes[1].value;

			if (url.includes(refName)) {
				gnb[i].className += ' active';
				console.log('11111111', gnb[i].children[1]);

				if (gnb[i].children[1]) {
					console.log('2222222222222')
					gnb[i].parentNode.className += ' active';
					gnb[i].children[1].className += ' active';

					$('.btn_back').click(function() {
						console.log('dddddddddddddd');
						$('.gnb_wrap').removeClass('active');
						console.log($(this).parents('.lnb_wrap'))
						$(this).parents('.lnb_wrap').removeClass('active');
					});
				}
			} else {
				gnb[i].className += '';
				if (gnb[i].children[1]) {
					gnb[i].parentNode.className += '';
					gnb[i].children[1].className += '';
				}
			}
		}

	*/

/*
	$('.gnb > button').click(function() {
		console.log($(this))
		if ($(this).next($('lnb_wrap'))) {
			console.log('있어')
				$(this).addClass('active');
				$(this).find('.lnb_wrap').addClass('active');
				$('.gnb').not($(this)).removeClass('active').find('.lnb_wrap').removeClass('active');
		} else {
			console.log('없어');
			$(this).parents('.gnb_wrap').removeClass('active');
		}
	});
*/

	//slider
	$('#visual_slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
	});

	$("#info_slider").slick({
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		verticalSwiping: true
	});

	// 대관현황 전체보기 팝업
	$('.btn_schedule').on('click', function() {
		$('.popup_wrap').addClass('active');
		return false;
	});
	$('.btn_close').on('click', function() {
		$('.popup_wrap').removeClass('active');
		return false;
	});

	// 텍스트 사이즈
	$(".control_text").bind("click", function () {
		$('body').toggleClass('controlFontSize');
	});

});

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
	var wrapper = document.getElementById('zoom');
			wrapper.style.height = nowZoom + "%";
	var wrapper = document.getElementById('zoom');
			wrapper.style.zoom = nowZoom + "%";

	if(nowZoom === 200) {
		alert("더 이상 확대할 수 없습니다.");
	}
}

