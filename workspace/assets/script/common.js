$(document).ready(function(){
	//navigation
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

	//popup open
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = $(this).attr('data-popup-open');

		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		$('.zoom_box').addClass('box');
		$('.control_btn').addClass('box');
		e.preventDefault();
	});
	//popup close
	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = $(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
		$('.zoom_box').removeClass('box');
		$('.control_btn').removeClass('box');
		e.preventDefault();
	});

	// 텍스트 사이즈
	$(".control_text").on("click", function () {
		$('html, body').toggleClass('controlFontSize');
	});

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

	$(".room_view").slick({
		autoplay: false,
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.rooms'
	});

	$(".rooms").slick({
		// slidesToShow: 6,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.room_view'
	});

	$('.card_slider').slick({
		rows: 2,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplaySpeed: 5000,
		arrows: true,
		dots: true,
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
			wrapper.style.height = nowZoom + "%";
			wrapper.style.zoom = nowZoom + "%";

	if(nowZoom === 200) {
		alert("더 이상 확대할 수 없습니다.");
	}
}

(function () {
	var color = ['#127BDC', '#AF1280', '#FFB500', '#7CD800'];
	var result = Math.floor(color.length * Math.random());
	var selector = document.getElementsByClassName('randomColor');

/*
	Array.prototype.forEach.call(selector, function(i) {
		console.log(i)
		i.style.borderLeftColor = color[result];
	});
*/
	Array.from(selector.childNodes, i => {
		console.log(i)
		i.style.borderLeftColor = color[result];
	});

	/*
	Array.from(selector).forEach(function(i) {
		console.log(i)
		i.style.borderLeftColor = color[result];
	});
*/

	// [].forEach.call(ele, function(element, index, array){ console.log(element, index); });

})()

/*
randomTagColor: function (idx) {
	var color = ['#EA5E0F', '#E50670', '#E02F8F', '#E61FC6', '#BA2A78',
		'#922FE0', '#B823ED', '#8971CD', '#582ABA', '#811E92',
		'#0094FF', '#3667E6', '#2FA0E0', '#1B5168', '#202486',
		'#36BDB3', '#25AE8D', '#068587', '#82CA28', '#30CCB0'];
	var result = Math.floor(color.length * Math.random());

	return this.colorCache[idx] || (this.colorCache[idx] = color[result]);

	/!* all color random
	const r = () => Math.floor(256 * Math.random());

	return this.colorCache[idx] || (this.colorCache[idx] = `rgb(${r()}, ${r()}, ${r()})`);*!/
},

*/
