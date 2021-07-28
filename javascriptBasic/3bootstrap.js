$(function() {
	$(".footerGoUpDemo2").click(function(event) {
		$("html").animate({scrollTop: 0});
		return false;
	});
});