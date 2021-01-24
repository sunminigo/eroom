$(document).ready(function(){
	//navigation

	$('.gnb').click(function(){
		$(this).addClass('active').find('.lnb_wrap').addClass('active');
		$('.gnb').not($(this)).removeClass('active').find('.lnb_wrap').removeClass('active');
	});

	//slider
	$('#visual_slider').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dot: true,
	});
	$("#info_slider").slick({
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		verticalSwiping: true
	});

	// 대관현황 전체보기 팝업
	$('.btn_schedule').on('click', function() {
		$('.popup_wrap').toggleClass('active');
		return false;
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

	if(nowZoom == 100) {
		alert("더 이상 축소할 수 없습니다.");
	}
	if(nowZoom == 200) {
		alert("더 이상 확대할 수 없습니다.");
	}
}
