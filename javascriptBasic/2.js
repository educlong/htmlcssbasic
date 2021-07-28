/*
1. lựa chọn phần tử	: $("<tên phần tử>") => viết theo kiểu css
2. sự kiện tương tác: .click(function(event){<body>})
3. xử lý hiệu ứng	: .animate({<thuộc tính>: <zá trị>})
*/
$(function() {	/*gõ ready -> chọn $ -> nhấn tab, code ở đây*/
	// alert("running");				/*in ra 1 câu thông báo*/
	$(".n1").click(function(event){$(".n1").animate({marginLeft:500/*px*/,opacity:0},500/*ms*/,function(){});});/*xửlýHiệuứng click vào n1*/





	/*Hiệu ứng Accordion (các xử lý 	this, 	next, 	slideUp/Down/Toggle, 	classUp/Down/Toggle)*/
	$(".contentEffectAccordion").slideUp();			/*.slideUp() -> co nhỏ nội dung lại (ban đầu co hết nội dung lại)*/
	$(".effectAccordion h3").click(function(event) {
		// $(".contentEffectAccordion").slideToggle();	/*.slideDown()-> mở rộng nội dung ra.  slideToggle()-> mở rộng/co nhỏ*/

		$(".contentEffectAccordion").slideUp();		/*trước khi cho 1 khối mở rộng ra thì cho tất cả các khổi co lại trước đã*/
		$(this).next().slideToggle(500);			/*next -> phần tử kế của phần tử (".effectAccordion h3"), thời zan 500*/
		$(this).toggleClass('blueBackgroundAccordion');/*click vào thì add/remove/toggle thêm class blueBackgroundAccordion*/
		$("html").animate({scrollTop: 0},900, "easeInOutExpo"); /*xổ chi tiết ra thì cuộn lên 1 đoạn đến đầu trang trong time 900, có za tốc*/
	});



	/*code fancy-box ---> sử dụng thư viện fancybox (xử lý hình ảnh)  --->   không được dùng chung vs thư viện BOOTSTRAP*/
	//$(".imagesContentEffectAccordion a").fancybox({	/*thuộc tính rel trong html: gán 3 hình ảnh cùng 1 nhóm -> fancybox sẽ có nút next, prev*/
	// 	'transitionIn'	: 'elastic',
	// 	'transitionOut'	: 'none'
	// });		





	/*One page (web 1 trang) -->  sử dụng thư viện easing (kiểm soát za tốc là điều hướng chuyển động)
		các xử lý: .on("click", function	;  preventDefault()	; 	nth-child()	; 	scrollTop 	; 	offset().top*/
	$(".menuOnePage ul li:nth-child(1) a").click(function(event){ /*nth-child: tức là 4th,5th -> số thứ tự. lấy các phầntử trong thẻ li*/
		event.preventDefault();	/*prevent: chặn, Default: mặc định --> chặn mặc định trỏ đến page # (ở đây thẻ a -> chặn k cho đến thẻ a)*/
		$("html").animate({ scrollTop: $(".chapter1OnePage").offset().top }, 400);/*xử lý cuộn chuột trong html. Hàm scrollTop --> cuộn*/
	});	/*chuột xuống dưới đến tận vị trí của div có class là chapter1OnePage $(".chapter1OnePage").offset().top*/		/*1000 --> tốc độ 1s*/
	$(".menuOnePage ul li:nth-child(2) a").click(function(event){ /*nth-child: tức là 4th,5th -> số thứ tự. lấy các phầntử trong thẻ li*/
		event.preventDefault();	/*prevent: chặn, Default: mặc định --> chặn mặc định trỏ đến page # (ở đây thẻ a -> chặn k cho đến thẻ a)*/
		$("html").animate({ scrollTop: $(".chapter2OnePage").offset().top }, 400);/*xử lý cuộn chuột trong html. Hàm scrollTop --> cuộn*/
	});	/*chuột xuống dưới đến tận vị trí của div có class là chapter2OnePage $(".chapter2OnePage").offset().top*/		/*1000 --> tốc độ 1s*/
	$(".menuOnePage ul li:nth-child(3) a").click(function(event){ /*nth-child: tức là 4th,5th -> số thứ tự. lấy các phầntử trong thẻ li*/
		event.preventDefault();	/*prevent: chặn, Default: mặc định --> chặn mặc định trỏ đến page # (ở đây thẻ a -> chặn k cho đến thẻ a)*/
		$("html").animate({ scrollTop: $(".chapter3OnePage").offset().top }, 400);/*xử lý cuộn chuột trong html. Hàm scrollTop --> cuộn*/
	});	/*chuột xuống dưới đến tận vị trí của div có class là chapter3OnePage $(".chapter3OnePage").offset().top*/		/*1000 --> tốc độ 1s*/
	$(".menuOnePage ul li:nth-child(4) a").click(function(event){ /*nth-child: tức là 4th,5th -> số thứ tự. lấy các phầntử trong thẻ li*/
		event.preventDefault();	/*prevent: chặn, Default: mặc định --> chặn mặc định trỏ đến page # (ở đây thẻ a -> chặn k cho đến thẻ a)*/
		$("html").animate({ scrollTop: $(".chapter4OnePage").offset().top }, 400);/*xử lý cuộn chuột trong html. Hàm scrollTop --> cuộn*/
	});	/*chuột xuống dưới đến tận vị trí của div có class là chapter4OnePage $(".chapter4OnePage").offset().top*/		/*1000 --> tốc độ 1s*/
	/*xử lý nút "Go Home" -> cuộn lên trên*/
	$(".goHomeOnePage").click(function(event) {	/*sử dụng thư viện easing jquery (đc gán vào head của html)*/
		event.preventDefault();	/*easeOutExpo -> za tốc zảm dần	;	easeOutElastic -> za tốc rung nhẹ 	; 	easeOutBounce: za tốc rung mạnh*/
		$("html").animate({scrollTop: 0}, 1400);	/*tại vị trí 0px*/	/*Ngoài ra còn các nhiều za tốc khác: easeOutBack,..*/
	});














	/*sử dụng thư viện tweenMax (phần này là mạnh nhất)*/


	/*demo sử dụng hiệu ứng gsap*/

	/*1. TweenMax.to( <tên phần tử>, <thời zan> ,{<tên thuộc tính1> : <zá trị1>, <tên thuộc tính2> : <zá trị2>});*/
	$(".tweenMaxbtn1").click(function(event) {
		TweenMax.to($(".tweenMaxbtn1"),1,{y:400,opacity:0});	/*dịch button tweenMaxbtn1 đến (to) vị trí ban đầu xuống 400px theo trục y*/
	});
	/*2. TweenMax.from( <tên phần tử>, <thời zan> ,{<tên thuộc tính1> : <zá trị1>, <tên thuộc tính2> : <zá trị2>});*/
	$(".tweenMaxbtn2").click(function(event) {
		TweenMax.from($(".tweenMaxbtn2"),1,{y:400,opacity:0,scale:2}); /*dịch button tweenMaxbtn2 từ (from) vị trí đó lên 400px theo trục y*/
	});
	$(".tweenMaxbtn3").click(function(event) {
		TweenMax.from($(".tweenMaxbtn3"),1,{x:-400,opacity:0});	/*dịch button tweenMaxbtn2 từ (from) vị trí đó sang phải 400px theo trục y*/
	});
	$(".tweenMaxbtn4").click(function(event) {
		TweenMax.from($(".tweenMaxbtn4"),1,{x:400,opacity:0});	/*dịch button tweenMaxbtn2 từ (from) vị trí đó sang trái 400px theo trục y*/
	});
	/*3. TweenMax.fromTo( <tên phần tử>, <thời zan> ,{<tên thuộc tính1> : <zá trị1>, <tên thuộc tính2> : <zá trị2>});*/
	$(".tweenMaxbtn5").click(function(event) {
		TweenMax.fromTo($(".tweenMaxbtn5"),2/*s*/,/*đi từ*/{x:-400},/*đến*/{x:400});
		TweenMax.to($(".tweenMaxbtn2"), 1, {x:"-=20"});			/*mỗi lần click dịch phải 20px*/
		TweenMax.to($(".tweenMaxbtn3"), 1, {scale:"+=0.1"});	/*mỗi lần click zoom+ lên 10%*/
	});
	/*4. TweenMax.staggerTo		: chuyển động đi vs những phần tử zống nhau và trễ nhau 1 khoảng time*/
	$(".tweenMaxbtn7").click(function(event) {    /*thời zan chuyển động:1.5s, chuyển động dịch phải 30px, mỗi phần tử chuyển động trễ .5s*/
		TweenMax.staggerTo($(".tweenMaxbtn6"),1.5,{x:-30,opacity:0},0.5);
	});
	/*5. TweenMax.staggerFrom	: chuyển động đi vs những phần tử zống nhau và trễ nhau 1 khoảng time*/
	$(".tweenMaxbtn9").click(function(event) {		/*thuộc tính za tốc xem tại: greensock,com/ease-visualizer*/
		TweenMax.staggerFrom($(".tweenMaxbtn8"),1.5,{x:30,opacity:0,ease:Elastic.easeOut},0.6); /*ease:Elastic.easeOut: thuộc tính za tốc*/
	});





	/*effect gallary 1*/

	/*thư viện tweenMax GreenSock (thư viện load hiệu ứng). Thời zan chuyển động 1s, đi từ vị trí cách top 100px đi lên và từ opacity=0 */
	//TweenMax.from($(".pictureGroupDemo7"),1,{top:100,opacity:0});	/*load những class nào pictureGroupDemo7 từ dưới lên (top:100px)*/
	//TweenMax.staggerFrom($(".effectAccordion"),1,{top:100,opacity:0},0.7);/*load từ từ từng class effectAccordion dưới lên,mỗi class trễ0.7s*/

	$(".loadingPictureGroupDemo7 .row").slideUp(0);			/*ban đầu ẩn hết slide, 0s*/
	$(".MoreImagesDemo7").click(function(event) {			/*khi click vào MoreImagesDemo7 => load slide ra*/
		$(".loadingPictureGroupDemo7  .row").slideDown(200);/*đầu tiên, load thằng cha (row) từ trên xuống (slideDown) -> hiện thèng cha ra*/
		TweenMax.staggerFrom($(".loadingPictureGroupDemo7 .row .pictureGroupDemo7"),1,{left:100,opacity:0},0.7)/*sử dụng tweenmax để load*/
	});/*sau đó dùng tweenmax để load thằng con, left -> load từ phải sang(cách trái 100px), từ opacity=0 -> 1, trong 1s, mỗi class trễ .7s*/




	/*effect gallary 2*/
	TweenMax.from($(".hinhCuoiEffect2"),5,{scale:1.5,opacity:0,ease:Elastic.easeOut});		/*hình ảnh trên tiêu đề*/
	TweenMax.from($(".titleHinhCuoi2"),5,{y:100,opacity:0,ease:Power4.easeOut,delay:1});	/*delay:1 -> chuyển động sẽ đc thực hiện sau 1s*/
	TweenMax.from($(".summaryVoChong2"),5,{y:-100,opacity:0,ease:Power4.easeIn,delay:2});	/*chữ "Với Long and Nhàn"*/
	TweenMax.from($(".separateHeaderAndAlbum2"),5,{x:-1500,ease:Power4.easeOut,delay:3});	/*đường kẻ phân cách header và album*/
	TweenMax.staggerFrom($(".blockEffectGallary2"),5,{y:-300,opacity:0,ease:Elastic.easeIn,delay:4},0.5);	/*các khối album*/





	/*TimelineMax -->>> trong 1 web page thường có nhiều dòng time -> do đó cần định nghĩa 1 dòng time*/
	var timelineMax1 = new TimelineMax({paused:true});				/*ban đầu thì đóng băng chuyển động, ko cho chạy*/
	timelineMax1.to($(".btnTimelineMax"),2,{x:-300})				/*sang phải*/
				.to($(".btnTimelineMax"),2,{y:-300},"+=.3")			/*đi lên, trễ .3s*/
				.to($(".btnTimelineMax"),2,{x:0},"+=.3")			/*dịch phải, trễ .3s so vs trước đó*/
				.to($(".btnTimelineMax"),2,{rotationX:360, y:0});	/*xoay theo trục x 360deg, và đi lên trên*/

	
	$(".btnTimelineMaxStop").click(function(event) {	/*dứng chuyển động*/
		timelineMax1.stop();	/*bị lỗi*/
	});

	$(".btnTimelineMaxPlay").click(function(event) {	/*chuyển động*/
		timelineMax1.play();
	});

	$(".btnTimelineMaxReverse").click(function(event) {	/*đảo ngược chuyển động*/
		timelineMax1.reverse();
	});






	/*effect gallary 3 (QUAN TRỌNG)*/
	var timelineMax2 = new TimelineMax({paused:true});	/*ban đầu thì đóng băng chuyển động, ko cho chạy*/
	timelineMax2.from($(".hinhCuoiEffect3"),1,{scale:3,opacity:0,ease:Elastic.easeOut})
				.from($(".titleHinhCuoi3"),1,{scale:2,opacity:0,ease:Elastic.easeOut},"+=0.1")
				.from($(".summaryVoChong3"),.7,{y:200,opacity:0,ease:Elastic.easeOut},"+=0.1")
				.from($(".separateHeaderAndAlbum3"),2,{x:-2000,opacity:0,ease:Power4.easeOut},"+=1")
				.staggerFrom($(".blockEffectGallary3"),.8,{scale:2,opacity:0,ease:Power4.easeOut},.2);
	// $(".btnTimelineMaxActive").click(function(event) {	/*khi nhấn vào nút "kích hoạt chuyển động" thì mới cho load hiệu ứng*/
	// 	timelineMax2.play();
	// });

	var loadingEffectGallary3TimelineMax = new TimelineMax({	/*sau khi load xong thì chạy function loadingDoneAndEnterWebsite*/
		onComplete: loadingDoneAndEnterWebsite	/*function này sẽ đc chạy khi load xong. Như zậy tất cả code sẽ đc viết trong function này*/
	});
	loadingEffectGallary3TimelineMax.from($(".loadingEffectGallary3"),0.7,{opacity:0})					/*nền xanh đậm xuất hiện*/
									.from($(".loadBlock"),1,{scale:2,opacity:0})						/*chấm vàng xuất hiện, scale 2*/
									.to($(".loadBlock"),1,{scale:.3,ease:Power4.easeOut})				/*chấm vàng scale .3*/
									.to($(".loadBlock"),1,{scale:1,ease:Elastic.easeOut.config(2,.1)})	/*chấm vàng scale .3 kèm elastic*/
									.to($(".loadBlock"),1,{scale:.3,ease:Power4.easeOut})				/*cho thực hiện 3 lần như zậy*/
									.to($(".loadBlock"),1,{scale:1,ease:Elastic.easeOut.config(2,.1)})
									.to($(".loadBlock"),1,{scale:.3,ease:Power4.easeOut})
									.to($(".loadBlock"),1,{scale:1,ease:Elastic.easeOut.config(2,.1)})	
									.to($(".loadBlock"),1,{scale:7,opacity:0,ease:Power4.easeOut})		/*kết thúc thì cho scale 7*/
									.to($(".loadingEffectGallary3"),1,{x:-2200,ease:Power1.easeOut});	/*dịch nền xanh đậm sang trái*/
	function loadingDoneAndEnterWebsite(argument) {		
		timelineMax1.play();	/*sau khi kết thúc chuyển động này thì cho timelineMax1 load ra*/
		timelineMax2.play();	/*sau khi kết thúc chuyển động này thì cho timelineMax2 load ra*/
	}
















	/*Modal Box -->  setInterval và clearInterval*/
	var appearEffect = ""
	function eventBtnModalBox(whichEffect){
		$(".disappearBackgroundModalBox").addClass('appearBackgroundModalBox');
		switch(whichEffect){
			case 0: appearEffect = "appeearFadeinScale"; $(".detailsModalBox").addClass(appearEffect); break;
			case 1: appearEffect = "appeearSlideinRight"; $(".detailsModalBox").addClass(appearEffect); break;
			case 2: appearEffect = "appeearNewspaper"; $(".detailsModalBox").addClass(appearEffect); break;
			case 3: appearEffect = "appeear3dSplit"; $(".detailsModalBox").addClass(appearEffect); break;
		}
	}
	eventBtnModalBox(3);							/*ban đầu cho chạy hiệu ứng 3d split*/
	var clearFirstEffect = setInterval(function(){ 	/*setInterval: hàm thực hiện sau khoảng time nhất định (3000=3s)*/
		// alert("Hello"); 
		$(".disappearBackgroundModalBox").removeClass('appearBackgroundModalBox');
		$(".detailsModalBox").removeClass(appearEffect);
		clearInterval(clearFirstEffect);			/*sau khi hết 3s thì clear interval này đi*/
	}, 3000)

	$(".btnFadeinScale").click(function(){eventBtnModalBox(0)});
	$(".btnSlideinRight").click(function(){eventBtnModalBox(1)});
	$(".btnNewspaper").click(function(){eventBtnModalBox(2)});
	$(".btnSplit3d").click(function(){eventBtnModalBox(3)});
	
	$(".disappearBackgroundModalBox").click(function(event) {
		$(".disappearBackgroundModalBox").removeClass('appearBackgroundModalBox');
		$(".detailsModalBox").removeClass(appearEffect);
	});
	$(".closeModalBox").click(function(event) {
		$(".disappearBackgroundModalBox").removeClass('appearBackgroundModalBox');
		$(".detailsModalBox").removeClass(appearEffect);
	});









	/*Example 7: Demo 2*/
	$(".controlMenu").click(function(event) {
		$(".displayDetail").addClass('hiddenDetail');
		$(".detailContent").addClass('goToRightDetailContent');
	});
	$(".displayDetail").click(function(event) {
		$(".displayDetail").removeClass("hiddenDetail");
		$(".detailContent").removeClass('goToRightDetailContent');
	});










	/*Example 12: Slide Page DEMO 2 (Apple Slide) 
			===> Hàm trigger (sau 4s thì kích hoạt nút next), 		one('webkitAnimationEnd' -> thực hiện sau khi animation kết thúc*/
	var appearNext = "apearNextArchiveme", appearPrevious = "apearPreviousArchiveme", 
					disappearNext = "disapearNextArchiveme", disappearPrevious = "disapearPreviousArchiveme";
	var viTriSlide = 0, typeOfEffect=0;

	/*hàm thực hiện chung cho chế độ nhấn next/previous và chế độ click button ==> xử lý chuyển trang */
	function activeEffectPageDemo2(buttonSlideDemo2, slidesNearPageDemo2) {
		
		var appearSlideDemo2 = (buttonSlideDemo2=="nextForSlideDemo2") ? appearNext : appearPrevious;	/*xác định xem ẩn hay hiện class*/
		var disappearSlideDemo2 = (buttonSlideDemo2=="nextForSlideDemo2") ? disappearNext :disappearPrevious; /* nào dựa vào button đc nhấn*/

		$(".slidesPageDemo2 ul li.activeSlidePageDemo2").addClass(disappearSlideDemo2).one('webkitAnimationEnd', function(event) {
				$(".slidesPageDemo2 ul li").removeClass(disappearSlideDemo2);	/*check xem khi nào animation của slide hiện tại kết thúc*/
		});		/*nếu kết thúc chuyển động -> thực hiện 1 nhiệm vụ zì đó (remove class disappearSlideDemo2 này)*/

		if (slidesNearPageDemo2.length!=0)		/*check xem vị trí của slide có nằm quá số lượng slide hay nhỏ hơn 1 hay ko? Nếu không thì*/
			slidesNearPageDemo2.addClass(appearSlideDemo2).one('webkitAnimationEnd', function(event) {	
				$(".slidesPageDemo2 ul li").removeClass("activeSlidePageDemo2");   /*check xem khi nào animation của slide kế tiếp kết thúc*/
				slidesNearPageDemo2.addClass('activeSlidePageDemo2').removeClass(appearSlideDemo2);	
			});	/*và add class activeSlidePageDemo2 vô để xác định đang active class nào, sau khi add thì remove hết class appearSlideDemo2*/

		else  (buttonSlideDemo2=="nextForSlideDemo2")/*check xem nếu là slide cuối cùng hay đầu tiên button = nextForSlideDemo2 và length=0*/
			  ? $(".slidesPageDemo2 ul li:nth-child(1)").addClass(appearSlideDemo2).one('webkitAnimationEnd', function(event) {
					$(".slidesPageDemo2 ul li").removeClass("activeSlidePageDemo2");	/*nếu là slide cuối cùng-> thực hiện như trên nhưng*/
					$(".slidesPageDemo2 ul li:nth-child(1)").addClass('activeSlidePageDemo2').removeClass(appearSlideDemo2); /*nth-child(1)*/
				})
			  :	$(".slidesPageDemo2 ul li:last-child").addClass(appearSlideDemo2).one('webkitAnimationEnd', function(event) {
					$(".slidesPageDemo2 ul li").removeClass("activeSlidePageDemo2");	/*nếu là slide đầu tiên-> thực hiện như trên nhưng*/
					$(".slidesPageDemo2 ul li:last-child").addClass('activeSlidePageDemo2').removeClass(appearSlideDemo2);	/*last-child*/
				});
	}

	/*hàm thực hiện xử lý cho next/previous*/
	function slideForButtonDemo2(buttonSlideDemo2) {
		clearInterval(timeauto);	/*khi click next/previous => hủy bỏ chế độ 2 đi*/
		var slidesNearPageDemo2 = (buttonSlideDemo2=="nextForSlideDemo2") 	/*lấy slide kế tiếp ra, nếu next thì slide kế là next, và ngược*/
				? $(".slidesPageDemo2 ul li.activeSlidePageDemo2").next() : $(".slidesPageDemo2 ul li.activeSlidePageDemo2").prev();  /*lại*/

		viTriSlide = (buttonSlideDemo2=="nextForSlideDemo2") ? (slidesNearPageDemo2.length==0 ? 0 : viTriSlide+1) 	/*lấy vị trí slide ra*/
												   : (slidesNearPageDemo2.length==0 ? $(".slidesPageDemo2 ul li").length -1 : viTriSlide-1);
		
		choiceEffect(typeOfEffect);
		activeEffectPageDemo2(buttonSlideDemo2, slidesNearPageDemo2);	/*xử lý chuyển trang*/

		$(".controlSlides ul li").removeClass('runningAciveSlide');	/*sau đó phải remove hết class của button*/
		$(".controlSlides ul li:nth-child("+(viTriSlide+1)+")").addClass("runningAciveSlide"); /*sau đó add class button đc chọn*/
	}
	/*Chế độ 1: Next/Previous*/
	$(".nextSlideDemo2").click(function(){slideForButtonDemo2("nextForSlideDemo2");});
	$(".previousSlideDemo2").click(function(){slideForButtonDemo2("previousForSlideDemo2");});


	/*Chế độ 2: trước tiên, bật chế độ tự động chuyển slide*/
	var timeauto = setInterval(function () { $(".nextSlideDemo2").trigger('click'); },4000)	/*Hàm trigger (sau 4s thì kích hoạt nút next)*/

	/*Chế độ 3: click button*/
	$(".controlSlides ul li").click(function(event) {
		clearInterval(timeauto);	/*khi click button => hủy bỏ chế độ 2 đi*/
		$(".controlSlides ul li").removeClass('runningAciveSlide');	/*đầu tiên phải remove hết class của button*/
		$(".slidesPageDemo2 ul li").removeClass('activeSlidePageDemo2');
		$(this).addClass('runningAciveSlide');						/*add class cho button đc chọn và add class cho slide*/

		if (viTriSlide < $(this).index()) {	buttonSlideDemo2="nextForSlideDemo2"; viTriSlide=$(this).index(); }		/*thực hiện nhấn next*/
		if (viTriSlide > $(this).index()) {	buttonSlideDemo2="previousForSlideDemo2"; viTriSlide=$(this).index(); }	/*thực hiện previous*/

		activeEffectPageDemo2(buttonSlideDemo2, $(".slidesPageDemo2 ul li:nth-child("+($(this).index()+1)+")") )	/*xử lý chuyển trang*/
		// timeauto =setInterval(function () {autoSlide();},3000);		/*$(this).index()+1: xử lý tính vị trí slide cần kích hoạt*/
	});



	/*Phần xử lý nhấn vào nút chọn slide xổ xuống*/
	$(".moreSettingIconPageDemo2").click(function(event) {
		$(".moreSettingIconPageDemo2").toggleClass('moreSettingIconGray');
		$(".moreSettingListPageDemo2").toggleClass('moreSettingListDisplayPageDemo2');
	});

	/*tắt chức năng xổ menu chọn hiệu ứng (hàm tắt chức năng này)*/
	$(".slidesPageDemo2").click(function(event) {
		$(".moreSettingIconPageDemo2").removeClass('moreSettingIconGray');
		$(".moreSettingListPageDemo2").removeClass('moreSettingListDisplayPageDemo2');
	});

	/*xử lý chức năng chọn slide -> lấy ra được vị trí "chức năng chọn slide" đc chọn => lưu vào viTriEffectChoonse*/
	$(".choiceEffectPageDemo2 .moreSettingListPageDemo2 ul li").click(function(event) {	/*chọn xong thì tắt chức năng xổ xuống*/
		$(".moreSettingIconPageDemo2").removeClass('moreSettingIconGray');
		$(".moreSettingListPageDemo2").removeClass('moreSettingListDisplayPageDemo2');
		typeOfEffect = $(this).index();
	});

	function choiceEffect(types) {
		switch(types){
			case 0: appearNext = "apearNextStickIt", appearPrevious = "apearPreviousStickIt", 
					disappearNext = "disapearNextStickIt", disappearPrevious = "disapearPreviousStickIt"; break;
			case 1: appearNext = "apearNextPressAway", appearPrevious = "apearPreviousPressAway", 
					disappearNext = "disapearNextPressAway", disappearPrevious = "disapearPreviousPressAway"; break;
			case 8: appearNext = "apearNextLetMeIn", appearPrevious = "apearPreviousLetMeIn", 
					disappearNext = "disapearNextLetMeIn", disappearPrevious = "disapearPreviousLetMeIn"; break;
			case 9: appearNext = "apearNextArchiveme", appearPrevious = "apearPreviousArchiveme", 
					disappearNext = "disapearNextArchiveme", disappearPrevious = "disapearPreviousArchiveme"; break;
		}
	}
	











	/*Example 8: Demo 3: scroll ----> sử dụng thư viện Animate css cho hiệu ứng loadpage và thư viện wow.js*/

	new WOW().init();	/*kích hoạt thư viện wow.js (xử lý wow.js cho đối tượng nào có tên class là wow) trong file html*/


	/*Phần xử lý loadPage*/
	var trangThaiLoadPage = new Array();
	var viTriLoadPage = new Array();
	var loadPage = $(".loadPage");					/*Load page*/
	for (var i = 0; i < loadPage.length; i++) {	
		trangThaiLoadPage[i] = "LoadPageDown";
		viTriLoadPage[i] = loadPage[i].offsetTop+9500;
	}

	/*xử lý cho header*/
	var viTriScrollMenu = ($(".menuScroll").offset().top)-1000;	/*tính vị trí tại class menuScroll*/
	var trangThaiScroll="viTriDuoiMenu";						/*trạng thái chỉ để thực hiện 1 lần*/

	/*xử lý advertisement (image)*/
	var trangThaiAdvertisement2="viTriDuoiOffsetTopAdvertisement2";			/*trạng thái chỉ để thực hiện 1 lần*/
	var vitriAdvertisement2 = ($(".advertisement2").offset().top)-1000;		/*trả về vị trí của advertisement2*/
	var vitriCuoiHienThiAdvertisement2 = vitriAdvertisement2+500;			/*vị trí cuối hiển thị*/
	// console.log(vitriCuoiHienThiAdvertisement2); /*hình ảnh chỉ hiển thị từ vitriAdvertisement2 đến vitriCuoiHienThiAdvertisement2*/

	$(window).scroll(function(event) {

		var viTriScroll = $("html").scrollTop();					/*tính vị trí khi scroll chuột*/

		/*Phần xử lý header*/
		if (viTriScroll > viTriScrollMenu) {
  			if (trangThaiScroll=="viTriDuoiMenu") {
  				// console.log("đang ở vị trí menu");
  				trangThaiScroll="viTriTrenMenu";
  				$(".menuScroll").addClass("menuScrollSmall");
  			}
  		}
		else if(viTriScroll <= viTriScrollMenu){
			if (trangThaiScroll=="viTriTrenMenu") {
				$(".menuScroll").removeClass("menuScrollSmall");
				trangThaiScroll="viTriDuoiMenu";
			}
		}


		/*Phần xử lý loadPage -> sử dụng thư viện Animate css (cài đặt trong phần header html) cho hiệu ứng loadpage (fadeInRight animated)*/
		for (var i = 0; i < loadPage.length; i++) {
			// console.log(loadPage[i]);
			if (viTriScroll > viTriLoadPage[i]) {
	  			if (trangThaiLoadPage[i]=="LoadPageDown") {
	  				// console.log("đang ở vị trí menu");
	  				trangThaiLoadPage[i]="LoadPageUp";
	  				// $(".loadPage:nth-child("+(i+1)+")").addClass("loadPageUp");
	  				$(".loadPage:nth-child("+(i+1)+")").addClass("fadeInRight animated");
	  			}
	  		}
	  		else if (viTriScroll <= viTriLoadPage[i]) {
	  			if (trangThaiLoadPage[i]=="LoadPageUp") {
	  				trangThaiLoadPage[i]="LoadPageDown";
	  				// $(".loadPage:nth-child("+(i+1)+")").removeClass("loadPageUp");
	  				$(".loadPage:nth-child("+(i+1)+")").removeClass("fadeInRight animated");
	  			}
	  		}
		}	


		/*Phần xử lý cho Advertisement2*/
		if (viTriScroll>vitriAdvertisement2 && viTriScroll<vitriCuoiHienThiAdvertisement2) {
			if (trangThaiAdvertisement2 == "viTriDuoiOffsetTopAdvertisement2") {
				trangThaiAdvertisement2="viTriTrenOffsetTopAdvertisement2";
				$(".advertisement2").addClass('advertisement2Stop');
			}
		}
		else{
			if (trangThaiAdvertisement2 == "viTriTrenOffsetTopAdvertisement2") {
				trangThaiAdvertisement2="viTriDuoiOffsetTopAdvertisement2";
				$(".advertisement2").removeClass('advertisement2Stop');
			}
		}
	});












	/*isotope ---> sử dụng thư viện isotope (chỉnh sửa vị trí hình ảnh): itemSelector -> lựa chọn phần tử để sắp xếp (sắp xếp li)*/
	$(".contentIsotope ul").isotope({ itemSelector: "li" });










	/*filter ko sử dụng isoptope  (phần quan trọng)
			--> hàm sử dụng: text(): lấy nội dung gettext bên trong 1 thẻ/ hoặc settext vào 1 thẻ nào đó
							 each(): duyệt từng phần tử trong 1 thẻ ra (zống vòng lặp)
							 fadeIn()/ slideIn()/ show(300): hiển thị phần tử có class là nameCategory đó lên
							 fadeOut()/ slideOut()/ hide(300): ẩn phần tử có class là nameCategory đó đi*/

	$("header.headerFilterNonIsotope nav ul li a").click(function(event) {	/*click vào các thẻ header ul li a, để chọn header và lọc ra*/
		var danhMucFilter = $(this).data('danhmuc', 'filterPeople');/*tên thẻ a là data-danhmuc-> $(this).data('danhmuc', <tên thẻ a này>);*/

		/*bước 1: thay đổi phần tiêu để*/
		var nameCategory = $(this).text(); 	/*lấy text trong (.headerFilter nav ul li a) ->lấy: people, lanscape, mountains, furnitures*/
		$("section h1").text(nameCategory);	/*đặt tên cho header chính là bằng tên của nameCategory ở trên -> h1 zờ có tên là: lanscape,...*/

		/*bước 2: thay đổi phần nội dung -> sử dụng hàm each*/
		$(".contentFilterNonIsotope ul li").each(function() {	/*.each -> lấy từng phần tử trong .contentFilter ul li ra, xong kiểm tra*/
			if ($(this).hasClass(nameCategory)) /*nếu .contentFilter ul li này có tên class(hasClass)chính bằng nameCategory ở trên vừa lấy*/
				$(this).fadeIn();/*hoặc .slideIn() hoặc .show(300)*/			/*thì hiển thị ra, .show(300) -> 0.3 s thì hiện ra*/
			else
				$(this).fadeOut();/*hoặc .slideOut() hoặc .hide(300)*/			/*nếu ko thì k cho hiển thị, .hide(300) -> 0.3 s thì ẩn đi*/
		});

		return false;		/*vì đây là thẻ a nên nó sẽ link  ->  add thêm return false để ko cho thẻ a link*/
	});




	/*filter sử dụng isoptope
			--> hàm sử dụng: filter: .<nameClass>	-> lọc ra những class nào có tên là nameClass (tích hợp trong isotope)*/

	$(".contentFilterIsotope ul").isotope({ itemSelector: "li" });
	$("header.headerFilterIsotope nav ul li a").click(function(event) {		/*click vào các thẻ header ul li a, để chọn header và lọc ra*/

		clearInterval(timeSearch);					/*trước tiên, clear interval đi*/

		var danhMucFilter = $(this).data('danhmuc');						/*tên thẻ a là data-danhmuc-> $(this).data('danhmuc');*/

		/*bước 1: thay đổi phần tiêu để*/
		var nameCategory = $(this).text(); 	/*lấy text trong (.headerFilter nav ul li a) ->lấy: people, lanscape, mountains, furnitures*/
		$("section h1").text(nameCategory);	/*đặt tên cho header chính là bằng tên của nameCategory ở trên -> h1 zờ có tên là: lanscape,...*/

		/*bước 2: thay đổi phần nội dung -> sử dụng hàm isotope filter*/
		if (danhMucFilter == "filterAll") 							/*nếu click vào xem tất cả thì lọc ra tất cả ảnh*/
			$(".contentFilterIsotope ul").isotope({ filter:"*"});	/*nếu click vào xem tất cả thì show hết hình ảnh ra, dấu * là tất cả*/
		else														/*nếu ko click vào xem tất cả thì lọc ra theo tên class tương ứng*/
			$(".contentFilterIsotope ul").isotope({ filter: "."+nameCategory});	/*phải có dấu . để filter hiểu đây là class*/
			
		
		return false;	/*vì đây là thẻ a nên nó sẽ link  ->  add thêm return false để ko cho thẻ a link*/
	});





	/*xử lý ô search (Quicksearch)  --> sự kiện sử dụng : keypress
										hàm sử dụng		: val()  ->> lấy zá trị đc nhập vào ô input*/

	$(".keyCategory").keypress(function(event) {	/*keypress -> lắng nghe nhấn trên bàn phìm, mỗi phím trên bàn phím đều có 1 mã*/
		if (event.keyCode == "13") {				/*keycode của phím enter="13", khi nhấn enter thì search, lấy zá trị từ khóa và search*/
			var danhMucFilter = $(".keyCategory").val();	/*lấy zá trị đc nhập vào ô input, lấy ra đc thì ném vào mục filter để lọc ra*/
			// $("section h1").text(danhMucFilter);

			if (danhMucFilter=="") 	$(".contentFilterIsotope ul").isotope({ filter:"*"});
			else 					$(".contentFilterIsotope ul").isotope({ filter: "."+danhMucFilter});
		}
	});

	/*quicksearch (ko cần nhấn enter)  ->> sử dụng setInterval trong khoảng 0.2s, cứ sau 1 khoảng time 0.2s thì search*/
	timeSearch = setInterval(function () {
		var danhMucFilter = $(".keyCategory").val();	/*lấy zá trị đc nhập vào ô input, lấy ra đc thì ném vào mục filter để lọc ra*/
			// $("section h1").text(danhMucFilter);

			if (danhMucFilter=="") 	$(".contentFilterIsotope ul").isotope({ filter:"*"});
			else 					$(".contentFilterIsotope ul").isotope({ filter: "."+danhMucFilter});
	},200)














	/*BOOTSTRAP    (Ko đc dùng chung vs thư viện fancy box)  ->>> các hàm sử dụng:  	popover(), tooltip(), scrollspy, attr()	*/
	$('[data-hieuungpopover="hieuungpopover"]').popover();	/*gọi đến phần tử có [...]*/

	$('[data-hieuungtooltip="tooltip"]').tooltip();			/*hiệu ứng tooltip (áp dụng cho button)*/

	$("body").scrollspy({target:".menuScrollspy"})			/*hiệu ứng scrollspy*/
	$(".menuScrollspy ul li a").click(function(event) {
		var viTriMenuScrollspyUlLiA=$(this).attr("href");	/*lấy thuộc tính href ra (attr: attribute -> lấy đường dẫn trong href đó)*/
		// console.log(viTriMenuScrollspyUlLiA);
		var toaDoMenuScrollspyUlLiA = $(viTriMenuScrollspyUlLiA).offset().top 	/*lấy vị trí của thuộc tính href ra*/
		// console.log(toaDoMenuScrollspyUlLiA);
		$("html").animate({scrollTop:toaDoMenuScrollspyUlLiA});					/*cuộn chuột đến vị trí href đó*/
		return false;
	});
});
