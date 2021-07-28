/*Basic*/
"use strict"	/*từ khóa để bắt buộc coder phải code đầy đủ (VD khai báo biến phải có var)*/
var a=10;
const B=20;	/*hằng số*/
console.log(a);
function runTest() {
	if (a==10) console.log(`TADA! +${a}`);		/*in ra cách 1*/
		else	console.log("msg. error"+a);	/*in ra cách 2*/
}
// Array:
var people=new Array("obama","trump","biden");
console.log(people);

// object Data
var watch={
	designed: "casio",
	color: "black",
	price: 5000,
	dateTime: function () {
		console.log("08-05-2021");
	},
	toString: function () {
		if (this.color=="black") return this.designed+" - "+this.color+" - "+this.price +" => Man";
		else return this.designed+" - "+this.color+" - "+this.price +" => Woman";
	}
}
//constructor cho watch
function Watch(designed, color, price) {
	this.designed=designed;
	this.color=color;
	this.price=price
}
// in dữ liệu ra
console.log(watch.designed+" - "+watch.price+": "+ watch.toString());
// in dữ liệu ra cách 2	
for(var x in watch){
	console.log(watch[x])
}
// khai báo 1 đối tượng:
var watch1=new Watch("nokia", "blue", 2000);
console.log(watch1)

/*Các phương thức xử lý chuỗi zống như trong java: indexOf = search => trả về vị trí tìm thấy, replace, split,...*/
/*Các phương thức xử lý số tương tự java: x.toString, parseInt,*/
//anonymous functions và arrow function
var anonymousFunctionExp = (x,y) => {	/*VD về anonymous function và arrow function(=>)*/
	return (x+y)/2
}
//closure functions
function helloWorld() {
	var name="LongND";	//biến name vẫn đc sử dụng ở function bên dưới, vì nó đang ở trong function helloWorld.
	return function(){	console.log("Hello World "+name	); 	}
}
var bonjour = helloWorld();	//bonjour lúc này là 1 hàm anonymous
bonjour()





/**Example 1: Sử dụng template string để xây dựng mẫu, rồi xây dựng phần tử html mới đưa template vào*/
// Array for object
var elementArray=new Array(	/*mảng này có 2 phần tử*/
	{
		id: 1,
		picture: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSnQpZlzp3ofyTqqT0hVTZXlC1RofolGsq2MJAZJGU_mfO2ic1ty-xVPt6m3uWN",
		name: "Ngoc trinh bikini",
		content: "Vietnamese model Ngoc Trinh might be fined for Cannes dress"
	},
	{
		id: 2,
		picture: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ngoc_Trinh_va_Fan_%28cropped%29.png",
		name: "Ngoc trinh",
		content: "Ngoc Trinh makes known her habit of being pampered with her lover and blushes",
	}
)
// duyệt mảng
for (var i = 0; i < elementArray.length; i++) {
	var elementContent = `
				<div class="kcm" id="kcm-${elementArray[i].id}">
					<img src="${elementArray[i].picture}" alt="" class="float-xs-left pr-1" width="40px" >
					<b>${elementArray[i].name}: </b><span>${elementArray[i].content}</span>
				</div>
	`;

	// tạo và đính phần tử trong js
	var element=document.createElement("div");	/*tạo 1 thẻ html mới*/
	element.innerHTML=elementContent;			/*gán nội dung bên trong 1 thẻ. VD thẻ <div>*/
	var idComments=document.getElementById("comments");	/*lấy phần tử cần đặt vào, tìm id có tên là comments, trả về zá trị*/
	idComments.appendChild(element)				/*gán nội dung vào*/
}




/**Example 2: getElementById trả về zá trị, còn các hàm còn lại trả về 1 mảng*/
var h1Tag1 = document.getElementsByTagName("div");			/*lấy ra tất cả những thẻ div trong file html 1, trả về 1 mảng*/
console.log(h1Tag1);
console.log(h1Tag1[3]);					//lấy cụ thể 1 phần tử trong mảng h1Tag1 ra
console.log(h1Tag1[3].innerHTML)		//lấy zá trị bên trong của thẻ
h1Tag1[3].innerHTML = "I am a hacker!"	//có thể thay đổi zá trị của phần tử


var cardClass = document.getElementsByClassName("card-text");	/*trả về 1 mảng chứa các phần tử có class="card-text"*/
console.log(cardClass);	
cardClass[0].innerHTML="text này đc viết bằng js";				/*thay đổi text chi phần tử thứ 0 trong mảng*/


var cardImg = document.querySelector('.card-img-top');	/*zống như document.getElementsByClassName, nhưng trả về zá trị đầu tiên (có dấu .)*/
console.log(cardImg)
// cardImg.innerHTML="ok done";


var cardTitle = document.querySelectorAll("[data-thongbao]");	/*zống như document.getElementsByClassName, cóthể lấy class,id or tên thẻ*/
console.log(cardTitle);		/*ở đây querySelectorAll có thể lấy như html bình thường, VD: (".card-columns .card:first-child .card-block")*/
cardTitle[1].innerHTML="Tiêu đề!";								/*thay đổi text chi phần tử thứ 1 trong mảng




/**Example 3: Các hàm xử lý zao diện trong js*/
var selectButton1 = document.querySelectorAll(".n1");
selectButton1[0].classList.remove("btn-outline-info");	/*remove class btn-outline-info trong classList của button .n1*/
selectButton1[0].classList.add("btn-block-light");		/*add thêm class vào*/
selectButton1[0].classList.add("btn-warning");			/*add thêm class vào*/

var selectButton3 = document.querySelectorAll(".n3");
selectButton3[0].classList.toggle("btn");				/*kiểm tra nếu có class btn thì xóa đi, nếu k có thì thêm vào*/
selectButton3[0].classList.toggle("btn-block");

/**Lưu ý lúc nào viết sự kiện phải viết thé này hết, đây là sự kiện chờ cho page load xong hết rồi mới lắng nghe xử lý sự kiện*/
document.addEventListener("DOMContentLoaded",function () {
	var selectButton4 = document.getElementById("n4");
	selectButton4.onclick = function() {				/*sau khi load xong thì xử lý sự kiện cho button n4*/
		selectButton4.classList.add("diXuong");			/*sự kiện khi click vào button n4: add thêm class "diXuong" (class này trong css)*/
	}


	/**Example 4:*/
	/*truy xuất đến phần tử (trước khi truy xuất cần cho document ready (document.addEventListener)*/
	var selectButton5 = document.getElementById("n5");
	var changeCardN5 = document.getElementsByClassName("card");
	selectButton5.onclick = function () {
		changeCardN5[4].classList.toggle("goToRight");
	}



	/*Example 5: Demo toggle class bang tay*/
	var selectButton6 = document.getElementById("n6");
	var trangThai = "first";
	selectButton6.onclick=function () {
		if (trangThai=="first") {
			document.getElementsByClassName("card")[5].classList.remove("non-moving");		/*remove class không chuyển động đi*/
			document.getElementsByClassName("card")[5].classList.add("goToRightNoToggleFirst");
			trangThai="second";
		}
		else if(trangThai=="second") {
			document.getElementsByClassName("card")[5].classList.remove("goToRightNoToggleFirst");
			trangThai="first";	
		}
	}



	/*Example 6: Facebook (header)*/
	var moreSettingIcon = document.getElementsByClassName("moreSettingIcon");
	var moreSettingList = document.getElementsByClassName("moreSettingList");
	for (var i = 0; i < moreSettingIcon.length; i++) {
		moreSettingIcon[i].onclick=function () {

			var elementDetail1 = this.getAttribute("more-details");	/*Thuộc tính attribute: áp dụng cho all class nào có cấu trúc là*/
			var elementDetail2 = this.getAttribute("more-details2");/* tên moreSettingIcon và có more-details (có thể gửi nhiều thamsố)*/

			if (this.classList[1]=="moreSettingIconWhite") {	/*nếu class thứ 2 đã đc add moreSettingIconWhite thì xử lý khác*/

				this.classList.remove("moreSettingIconWhite");	/*đầu tiên remove chính class moreSettingIconWhite đó đi.*/
				document.getElementById(elementDetail1).classList.remove("moreSettingListDisplay");	/*sau đó mới remove class moreSettingListDisplay đó đi (lấy phần tử đc click có id="more-details" ra và remove moreSettingListDisplay cho phần tử đó)*/
			}
			else{	/*trường hợp 2: nếu class thứ 2 chưa đc click (tức là chưa đc add class moreSettingIconWhite) thì xử lý kiểu khác*/

				// moreSettingIcon[0].classList.toggle(...);	/*cách 1: add class*/
				// this.style.color = "white"					/*cách 2: dùng style (this chính là moreSettingIcon)*/

				/*dùng cách 1: */
				for (var j = 0; j < moreSettingIcon.length; j++) {				/*đầu tiên phải remove hết class moreSettingIconWhite.*/
					moreSettingIcon[j].classList.remove("moreSettingIconWhite");/*để đám bảo trong 1 time cố định chỉ có 1 phần tử đc click*/
				}
				this.classList.toggle("moreSettingIconWhite");		/*sau đó mới đc add class moreSettingIconWhite cho phần tử đc click*/
				
				for (var j = 0; j < moreSettingList.length; j++) {					/*đầu tiên phải remove hết class moreSettingListDisplay*/
					moreSettingList[j].classList.remove("moreSettingListDisplay");	/* đám bảo trong 1time cốđịnh chỉ có 1 phần tử đc click*/
				}
				document.getElementById(elementDetail1).classList.toggle("moreSettingListDisplay");	/*sau đó mới add vào (lấy phần tử đc click có id="more-details" ra và toggle moreSettingListDisplay cho phần tử đó)*/
			}

		}
	}




	/*Example 7: Demo 2*/
	var push = document.querySelector(".controlMenu");
	var detailContent =document.querySelector(".detailContent");
	var menuDetail =document.querySelector(".menuDetail");
	var displayDetail =document.querySelector(".displayDetail");
	push.onclick=function () {
		displayDetail.classList.add("hiddenDetail");
		detailContent.classList.add("goToRightDetailContent");
	}

	detailContent.onclick=function () {						/*(phần xử lý cho example 6: Facebook): nhấn vào khoảng trống thì:*/
		for (var i = 0; i < moreSettingIcon.length; i++) {	/*xóa tất cả class moreSettingIconWhite và moreSettingListDisplay nếu có */
			var elementDetail1 = moreSettingIcon[i].getAttribute("more-details");	/*nhấn vào các icon từ example 6: Facebook đi*/
			moreSettingIcon[i].classList.remove("moreSettingIconWhite");
			document.getElementById(elementDetail1).classList.remove("moreSettingListDisplay");
		}
	}														/*(hết phần xử lý cho example 6: Facebook)*/

	displayDetail.onclick=function () {						/*(phần xử lý cho example 6: Facebook) nhấn vào khoảng đen thì đầu tiên:*/
		for (var i = 0; i < moreSettingIcon.length; i++) {	/*xóa tất cả class moreSettingIconWhite và moreSettingListDisplay nếu có */
			var elementDetail1 = moreSettingIcon[i].getAttribute("more-details");	/*nhấn vào các icon từ example 6: Facebook đi*/
			moreSettingIcon[i].classList.remove("moreSettingIconWhite");
			document.getElementById(elementDetail1).classList.remove("moreSettingListDisplay");
		}													/*(hết phần xử lý cho example 6: Facebook)*/

		displayDetail.classList.remove("hiddenDetail");			/*sau đó remove đi các class hiddenDetail và goToRightDetailContent */
		detailContent.classList.remove("goToRightDetailContent");	/* trong demo này là xong*/
	}




	/*Example 8: Demo 3: scroll*/
	/*xử lý header*/
	var trangThaiScroll="viTriDuoi1200px";							/*trạng thái chỉ để thực hiện 1 lần*/
	var menuScroll = document.querySelector(".menuScroll");			/*lấy đối tượng menuScroll*/

	/*xử lý advertisement (image)*/
	var advertisement2 = document.querySelector(".advertisement2");	/*lấy đối tượng advertisement2 ra*/
	var trangThaiAdvertisement2="viTriDuoiOffsetTopAdvertisement2";	/*trạng thái chỉ để thực hiện 1 lần*/
	var vitriAdvertisement2 = advertisement2.offsetTop+1100;		/*trả về vị trí của advertisement2*/
	var vitriCuoiHienThiAdvertisement2 = vitriAdvertisement2+600;	/*vị trí cuối hiển thị*/
	// console.log(vitriCuoiHienThiAdvertisement2); /*hình ảnh chỉ hiển thị từ vitriAdvertisement2 đến vitriCuoiHienThiAdvertisement2*/

	/*Phần xử lý loadPage*/
	var loadPage = document.querySelectorAll(".loadPage");			/*Load page*/
	var trangThaiLoadPage = new Array();
	var viTriLoadPage = new Array();
	for (var i = 0; i < loadPage.length; i++) {	
		trangThaiLoadPage[i] = "LoadPageDown";
		viTriLoadPage[i] = loadPage[i].offsetTop+900;
	}

	window.addEventListener("scroll", function() {	/*muốn xử lý scroll thì cần phải bỏ << html,body{ height: 100%;} >> trong css đi*/
  		// console.log(window.pageYOffset);			/*pageYOffset: trả về vị trí theo trục Y của page*/

  		/*Phần xử lý header*/
  		if (window.pageYOffset >1200) {
  			if (trangThaiScroll=="viTriDuoi1200px") {
  				// console.log("đang ở vị trí menu");
  				trangThaiScroll="viTriTren1200px";
  				menuScroll.classList.add("menuScrollSmall");
  			}
  		}
		else if(window.pageYOffset <= 1200){
			if (trangThaiScroll=="viTriTren1200px") {
				menuScroll.classList.remove("menuScrollSmall");
				trangThaiScroll="viTriDuoi1200px";
			}
		}


		/*Phần xử lý cho Advertisement2*/
  		if (window.pageYOffset > vitriAdvertisement2 && window.pageYOffset < vitriCuoiHienThiAdvertisement2) {
  			if (trangThaiAdvertisement2=="viTriDuoiOffsetTopAdvertisement2") {
  				// console.log("đang ở vị trí menu");
  				trangThaiAdvertisement2="viTriTrenOffsetTopAdvertisement2";
  				advertisement2.classList.add("advertisement2Stop");
  			}
  		}
		else if(window.pageYOffset <= vitriAdvertisement2 || window.pageYOffset >= vitriCuoiHienThiAdvertisement2){
			if (trangThaiAdvertisement2=="viTriTrenOffsetTopAdvertisement2") {
				advertisement2.classList.remove("advertisement2Stop");
				trangThaiAdvertisement2="viTriDuoiOffsetTopAdvertisement2";
			}
		}


		/*Phần xử lý loadPage*/
		for (var i = 0; i < loadPage.length; i++) {
			// console.log(loadPage[i]);
			if (window.pageYOffset > viTriLoadPage[i]) {
	  			if (trangThaiLoadPage[i]=="LoadPageDown") {
	  				// console.log("đang ở vị trí menu");
	  				trangThaiLoadPage[i]="LoadPageUp";
	  				loadPage[i].classList.add("loadPageUp");
	  			}
	  		}
		}	
	});



	/*Example 9: CSS 3D*/
	var btnCss3D = document.getElementsByClassName("btnCss3D")[0];
	var pictureGroupDemo2 = document.querySelector(".pictureGroupDemo2");
	btnCss3D.addEventListener("click",function () {		/*Ngoài sự kiện onclick, có thể viết thế này*/
		pictureGroupDemo2.classList.toggle("rotatePictureX");
	})




	/*Example 10: Youtube*/
	var btnPreviousListYoutube =document.querySelector(".btnPreviousListYoutube");
	var btnNextListYoutube=document.querySelector(".btnNextListYoutube");
	var linkContentYoutube=document.querySelector(".linkContentYoutube");
	btnNextListYoutube.addEventListener("click",function () {
		btnPreviousListYoutube.classList.add("activeBtnListYoutube");
		linkContentYoutube.classList.add("previousListYoutube")
	})



	/* Example 11: Slide demo (xử lý cho các thẻ ul và li)*/
	var btnListSlideDemo =document.querySelectorAll(".btnListSlideDemo ul li");
	var ulContent = document.querySelector(".contentSlidesDemo ul");
	for (var i = 0; i < btnListSlideDemo.length; i++) {
		btnListSlideDemo[i].addEventListener("click",function () {
			for (var j = 0; j < btnListSlideDemo.length; j++) {		/*đầu tiên phải xóa hết class active đi đã, rồi mới add class active*/
				btnListSlideDemo[j].classList.remove("btnListSlideDemoActive");	/*vào cho btn nào đc click*/
			}
			this.classList.add("btnListSlideDemoActive");

			/*hàm mới: previousElementSibling -> trả về phần tử trước nó, nextElementSibling -> trả về phần tử đằng sau nó*/
			var phanTuHienTai = document.querySelector(".btnListSlideDemoActive");	/*các N11,...16 trong thẻ ul zống nhau ->lấy đc chọn ra*/
			for (var viTri = 0; phanTuHienTai =phanTuHienTai.previousElementSibling;viTri++){/*previousElementSibling:thẻ đằng trước thẻ đó*/
			}	/*mỗi lần lặp thì phần tử hiện tại tiến thêm 1 slide nữa, đến khi nào đến phần tử cuối cùng thì kết thúc vòng lặp*/
			for (var j = 0; j < btnListSlideDemo.length; j++) {	/*trước khi add class thì cần remove hết*/
				ulContent.classList.remove("contentSlidesDemoNumber"+j);
			}

			ulContent.classList.add("contentSlidesDemoNumber"+viTri);	/*khi biết đc vị trí đc chọn => add class cho div ul*/
		})
	}




	/*Example 12: Slide Page DEMO 2*/
	var controlSlidesUlLiButton = document.querySelectorAll(".controlSlides ul li");
	var slidesPageDemo2 =document.querySelectorAll(".slidesPageDemo2 ul li");

	/*Chế độ 1: trước tiên, bật chế độ tự động chuyển slide*/
	var timeauto = setInterval(function () { autoSlide(); },3000)

	/*Chế độ 2: click button*/
	for (var i = 0; i < controlSlidesUlLiButton.length; i++) {
		controlSlidesUlLiButton[i].addEventListener("click",function () {	/*mỗi 1 nút trong mảng controlSlidesUlLiButton đc click*/
			clearInterval(timeauto);/*sau khi click vào thì đầu tiên phải hủy chế độ tự chuyển động đi đã, tức là clear timeauto*/

			for (var j = 0; j < controlSlidesUlLiButton.length; j++) {		/*trước đó phải remove hết đi đã rồi mới đc add vào*/
				controlSlidesUlLiButton[j].classList.remove("runningAciveSlide");
			}
			this.classList.add("runningAciveSlide");	

			/*bước 1: xử lý tính vị trí slide cần kích hoạt*/
			var viTriSlideClick=0;
			var runningAciveSlide = this;	/*hàm mới: previousElementSibling -> trả về phần tử trước nó*/
			for (viTriSlideClick = 0; runningAciveSlide = runningAciveSlide.previousElementSibling ; viTriSlideClick++) {	
				console.log(viTriSlideClick);	/*nextElementSibling-> trả về phần tử đằng sau nó*/
				console.log(runningAciveSlide);
			}	/*hết vòng lặp nà, biến chạy j = số thứ tự*/
			console.log("vị trí phần tử có class là kích hoạt :"+viTriSlideClick)

			/*bước 2: hiệu ứng slide chuyển động*/
			for (var j = 0; j < slidesPageDemo2.length; j++) {
				slidesPageDemo2[j].classList.remove("activeSlidePageDemo2");		/*đầu tiên là xóa hết hiệu ứng*/
			}
			slidesPageDemo2[viTriSlideClick].classList.add("activeSlidePageDemo2");	/*sau đó add hiệu ứng cho slide đc chọn*/

			timeauto =setInterval(function () {autoSlide();},3000);
		})
	}


	function autoSlide() {		/*setInterval: set khoảng time để sau 1 khoảng time 3s, gọi lại hàm này*/
		var viTriSlideClick=0;	/*bước 1: xử lý tính vị trí slide cần kích hoạt*/
		var runningAciveSlide =document.querySelector(".controlSlides ul li.runningAciveSlide");
		for (viTriSlideClick = 0; runningAciveSlide = runningAciveSlide.previousElementSibling ; viTriSlideClick++) {	
			// console.log(viTriSlideClick);	/*hàm mới:previousElementSibling->trả về phần tử trước nó*/
			// console.log(runningAciveSlide);	/*nextElementSibling-> trả về phần tử đằng sau nó*/
		}	/*hết vòng lặp nà, biến chạy j = số thứ tự*/
		// console.log("vị trí phần tử có class là kích hoạt :"+viTriSlideClick);
		/*bước 2: hiệu ứng slide chuyển động: lấy đc vị trí để xuất hiện slide thì, đầu tiên phải xóa hết hiệu ứng trước đó đi đã*/
		for (var j = 0; j < slidesPageDemo2.length; j++) {
			slidesPageDemo2[j].classList.remove("activeSlidePageDemo2");	/*đầu tiên là xóa hết hiệu ứng*/
			controlSlidesUlLiButton[j].classList.remove("runningAciveSlide")/*xóa luôn hiệu ứng của button*/
		}																	/*sau đó add hiệu ứng cho slide tiếp theo*/
		/*bước 3: check xem đến slide cuối cùng hay chưa, nếu đến slide cuối cùng thì đưa về slide vị trí đầu tiên*/
		if (viTriSlideClick<slidesPageDemo2.length-1) {
			slidesPageDemo2[viTriSlideClick].nextElementSibling.classList.add("activeSlidePageDemo2");
			controlSlidesUlLiButton[viTriSlideClick].nextElementSibling.classList.add("runningAciveSlide");
		}
		else{
			slidesPageDemo2[0].classList.add("activeSlidePageDemo2");
			controlSlidesUlLiButton[0].classList.add("runningAciveSlide");
		}
	}










	/*Example 12: Slide Page DEMO 3*/
	var previousSlideDemo3 = document.querySelector(".WrapperSlidesPageDemo3 .controlSlides3 b.previousSlideDemo3");	/*button previous*/
	var nextSlideDemo3 = document.querySelector(".WrapperSlidesPageDemo3 .controlSlides3 b.nextSlideDemo3");			/*button next*/
	var slidesPageDemo3UlLi = document.querySelectorAll(".slidesPageDemo3 ul li");										/*mảng các li*/
	
	var current=0;							/*xác định slide hiện tại*/
	var trangThaiChuyenDong = "Stopping";	/*(biến này dùng xử lý lỗi) xử lý khi user click nhiều lần mà slide chưa đáp ứng kịp*/
	var appearNext = "", appearPrevious = "", disappearNext = "", disappearPrevious = ""; /*4 trạng thái next, previous, appear và disapear*/


	/*Phần xử lý nhấn vào nút chọn slide xổ xuống*/
	var moreSettingIconPageDemo3 = document.getElementsByClassName("moreSettingIconPageDemo3");
	var moreSettingListPageDemo3 = document.getElementsByClassName("moreSettingListPageDemo3");
	for (var i = 0; i < moreSettingIconPageDemo3.length; i++) {
		moreSettingIconPageDemo3[i].onclick=function () {					/*Thuộc tính attribute:áp dụng cho all class nào có cấu trúc là*/
			var elementDetailPageDemo3=this.getAttribute("more-details-page-demo3");/*tên moreSettingIcon và có more-details-page-demo3*/
			if (this.classList[1]=="moreSettingIconGray") {	/*nếu class thứ 2 đã đc add moreSettingIconGray thì xử lý khác*/
				this.classList.remove("moreSettingIconGray");	/*đầu tiên remove chính class moreSettingIconGray đó đi.*/
				document.getElementById(elementDetailPageDemo3).classList.remove("moreSettingListDisplayPageDemo3");/*sau đó remove class*/
			}	/*moreSettingListDisplayPageDemo3 đó đi (lấy phần tử đc click có id="more-details-page-demo3" ra và remove cho phần tử đó)*/
			else{	/*trường hợp 2: nếu class thứ 2 chưa đc click (tức là chưa đc add class moreSettingIconGray) thì xử lý kiểu khác*/
				for (var j = 0; j < moreSettingIconPageDemo3.length; j++) {		/*đầu tiên phải remove hết class moreSettingIconGray.*/
					moreSettingIconPageDemo3[j].classList.remove("moreSettingIconGray");
				}	/*để đám bảo trong 1 time cố định chỉ có 1 phần tử đc click*/
				this.classList.toggle("moreSettingIconGray");		/*sau đó mới đc add class moreSettingIconGray cho phần tử đc click*/
				for (var j = 0; j < moreSettingListPageDemo3.length; j++) {/*đầu tiên phải remove hết class moreSettingListDisplayPageDemo3*/
					moreSettingListPageDemo3[j].classList.remove("moreSettingListDisplayPageDemo3");	
				}	/* đám bảo trong 1time cốđịnh chỉ có 1 phần tử đc click*/
				document.getElementById(elementDetailPageDemo3).classList.toggle("moreSettingListDisplayPageDemo3");	
			}	/*sau đó mới add vào (lấy phần tử đc click có id="more-details" ra và toggle moreSettingListDisplay cho phần tử đó)*/

		}
	}


	/*tắt chức năng xổ menu chọn hiệu ứng (hàm tắt chức năng này)*/
	function turnOffEffect() {
		for (var i = 0; i < moreSettingIconPageDemo3.length; i++) {/*xóa tấtCả class moreSettingIconGray và moreSettingListDisplayPageDemo3*/
			var elementDetailPageDemo3 = moreSettingIconPageDemo3[i].getAttribute("more-details-page-demo3");	/*nhấn vào icon xổ xuống*/
			moreSettingIconPageDemo3[i].classList.remove("moreSettingIconGray");
			document.getElementById(elementDetailPageDemo3).classList.remove("moreSettingListDisplayPageDemo3");
		}
	}

	/*xử lý khi nhấn vào hình ảnh thì tắt chức năng xổ xuống chọn slide*/
	var slidesPageDemo3 =document.querySelector(".slidesPageDemo3");
	slidesPageDemo3.addEventListener("click", function () { turnOffEffect(); });		/* nhấn vào hình ảnh thì tắt chức năng xổ xuống*/


	/*xử lý chức năng chọn slide -> lấy ra được vị trí "chức năng chọn slide" đc chọn => lưu vào viTriEffectChoonse*/
	var itemSlidesPageDemo3=document.querySelectorAll(".choiceEffectPageDemo3 .moreSettingListPageDemo3 ul li");
	var viTriEffectChoonse = 0;
	for (var i = 0; i < itemSlidesPageDemo3.length; i++) {
		itemSlidesPageDemo3[i].addEventListener("click", function () {
			for (var j = 0; j < itemSlidesPageDemo3.length; j++) {	/*đầu tiên phải xóa hết class effect đi đã, rồi mới add class effect*/
				itemSlidesPageDemo3[j].classList.remove("effects");	/*vào cho item nào đc click*/
			}
			this.classList.add("effects");
			var phanTuHienTai = document.querySelector(".effects");	/*các N11,...16 trong thẻ ul zống nhau ->lấy đc chọn ra*/
			for (var viTri = 0; phanTuHienTai =phanTuHienTai.previousElementSibling;viTri++){/*previousElementSibling:thẻ đằng trước thẻ đó*/
			}	/*mỗi lần lặp thì phần tử hiện tại tiến thêm 1 slide nữa, đến khi nào đến phần tử cuối cùng thì kết thúc vòng lặp*/
			viTriEffectChoonse = viTri;
			console.log(viTriEffectChoonse);					
			turnOffEffect();			/*chọn xong thì tắt chức năng xổ xuống*/
		});
	}



	function slideForButtonDemo3 (buttonSlideDemo3, whichEffect, appearSlideDemo3, disappearSlideDemo3) {
		if(trangThaiChuyenDong=="Running"){ return false; } /*đầu tiên cần kiểm tra trạng thái, nếu trạng thái đang chuyển động thì stop*/
		trangThaiChuyenDong = "Running"; 	/*còn nếu ko thì trạng thái đang đứng yên (stopping) */
		var trangThai2ChuyenDong = 0;		/*=> we sẽ xử lý chuyển động! Lúc đó cần đánh dấu là đang chuyển động*/

		choiceEffect(whichEffect);	/*chọn hiệu ứng muốn sử dụng => gọi đến hàm chọn hiệu ứng*/
		appearSlideDemo3 = (buttonSlideDemo3=="nextForSlideDemo3") ? appearNext : appearPrevious;		   /*xác định xem ẩn hay hiện class*/
		disappearSlideDemo3 = (buttonSlideDemo3=="nextForSlideDemo3") ? disappearNext : disappearPrevious; /* nào dựa vào button đc nhấn*/

		var slidesPageDemo3UlLiCurrent = slidesPageDemo3UlLi[current];	  						/*lấy ul li hiện tại và */	
		var slidesPageDemo3UlLiNear = (buttonSlideDemo3=="nextForSlideDemo3")					/*lấy ul li tiếp theo hoặc trước đó ra*/
				? ((current>=slidesPageDemo3UlLi.length-1) ? slidesPageDemo3UlLi[0] : slidesPageDemo3UlLi[current+1])
				: ((current<=0) ? slidesPageDemo3UlLi[slidesPageDemo3UlLi.length-1] : slidesPageDemo3UlLi[current-1]);
		current = (buttonSlideDemo3=="nextForSlideDemo3") 
				? ((current>=slidesPageDemo3UlLi.length-1) ? 0 : (current+1))	/*nếu next đến slide cuối cùng thì reset về 0*/
				: ((current<=0) ? (slidesPageDemo3UlLi.length-1) : (current-1));/*nếu previous đến slide đầu tiên thì reset về slide cuối*/


		/*bước tiếp theo: tạo chuyển động sau khi xác định đc 2 phần tử (remove hết xong mới đc add vào)*/
		/*Cách 1: add/remove class thông thường*/
		// for (var i = 0; i < slidesPageDemo3UlLi.length; i++) {
		// 	slidesPageDemo3UlLi[i].classList.remove("activeSlidePageDemo3");
		// 	slidesPageDemo3UlLi[i].classList.remove(disappearSlideDemo3);
		// 	slidesPageDemo3UlLi[i].classList.remove(appearSlideDemo3);
		// }
		// slidesPageDemo3UlLiCurrent.classList.add(disappearSlideDemo3);
		// slidesPageDemo3UlLiNear.classList.add(appearSlideDemo3);
		// slidesPageDemo3UlLiNear.classList.add("activeSlidePageDemo3");
		

		/*Cách 2: sử dụng hàm check trạng thái chuyển động*/
		slidesPageDemo3UlLiCurrent.classList.add(disappearSlideDemo3);
		slidesPageDemo3UlLiNear.classList.add(appearSlideDemo3);
		
		var slidesPageDemo3UlLiCurrentEndingProcess = function () {	/*check xem khi nào animation của slide hiện tại kết thúc*/
			this.classList.remove("activeSlidePageDemo3");  /*nếu kết thúc chuyển động -> thực hiện 1 nhiệm vụ zì đó (remove 2 class này)*/
			this.classList.remove(disappearSlideDemo3);
			
			trangThai2ChuyenDong++;	/*2 dòng lệnh này để check lỗi khi người dùng click nhiều lần mà slide đáp ứng ko kịp*/
			if (trangThai2ChuyenDong==2) {trangThaiChuyenDong="Stopping"};	/*tức là đợi chuyển động xong mới đc clink*/
		}
		var slidesPageDemo3UlLiNearEndingProcess = function () {	/*check xem khi nào animation của slide kế tiếp kết thúc*/
			this.classList.remove(appearSlideDemo3);
			this.classList.add("activeSlidePageDemo3");				/*và add class này vô để xác định đang active class nào*/

			trangThai2ChuyenDong++;	/*2 dòng lệnh này để check lỗi khi người dùng click nhiều lần mà slide đáp ứng ko kịp*/
			if (trangThai2ChuyenDong==2) {trangThaiChuyenDong="Stopping"};	/*tức là đợi chuyển động xong mới đc clink*/
		}	/*webkitAnimationEnd -> sự kiện check trạng thái chuyển động (thường đứng trước khi click để lắng nghe trạng thái chuyển động*/
		slidesPageDemo3UlLiCurrent.addEventListener("webkitAnimationEnd",slidesPageDemo3UlLiCurrentEndingProcess);	/*sự kiện lắng nghe khi*/
		slidesPageDemo3UlLiNear.addEventListener("webkitAnimationEnd",slidesPageDemo3UlLiNearEndingProcess);		/*animation kết thúc*/
	}
		
	var nextSlideForButtonDemo3 = function () { 
		slideForButtonDemo3("nextForSlideDemo3",viTriEffectChoonse,appearNext,disappearNext); 
	}
	var previousSlideForButtonDemo3 = function () { 
		slideForButtonDemo3("previousForSlideDemo3",viTriEffectChoonse,appearPrevious,disappearPrevious); 
	}
	nextSlideDemo3.addEventListener("click", nextSlideForButtonDemo3);
	previousSlideDemo3.addEventListener("click", previousSlideForButtonDemo3);


	function choiceEffect(whichEffect) {
		switch(whichEffect) {
			case 0: 	/*nếu chọn hiệu ứng thứ nhất: Soft scale*/
				appearNext = "apearNextSoftScale";
				appearPrevious = "apearPreviousSoftScale";
				disappearNext = "disapearNextSoftScale";
				disappearPrevious = "disapearPreviousSoftScale";
				break;
			case 1: 	/*nếu chọn hiệu ứng thứ hai: Press away*/
				appearNext = "apearNextPressAway";
				appearPrevious = "apearPreviousPressAway";
				disappearNext = "disapearNextPressAway";
				disappearPrevious = "disapearPreviousPressAway";
				break;
			case 2: 	/*nếu chọn hiệu ứng thứ ba: Press and zoom (trượt sang và zoom lên)*/
				appearNext = "apearNextPressAndZoom";
				appearPrevious = "apearPreviousPressAndZoom";
				disappearNext = "disapearNextPressAndZoom";
				disappearPrevious = "disapearPreviousPressAndZoom";
				break;	
			case 3: 	/*nếu chọn hiệu ứng thứ tư: Side Swing (lùi về và dịch sang phải)*/
				appearNext = "apearNextSideSwing";
				appearPrevious = "apearPreviousSideSwing";
				disappearNext = "disapearNextSideSwing";
				disappearPrevious = "disapearPreviousSideSwing";
				break;	
			case 4: 	/*nếu chọn hiệu ứng thứ năm: Fortune Wheel (quay vòng 3D)*/
				appearNext = "apearNextFortuneWheel";
				appearPrevious = "apearPreviousFortuneWheel";
				disappearNext = "disapearNextFortuneWheel";
				disappearPrevious = "disapearPreviousFortuneWheel";
				break;	
			case 5: 	/*nếu chọn hiệu ứng thứ sáu: Swipe (vuốt lên)*/
				appearNext = "apearNextSwipe";
				appearPrevious = "apearPreviousSwipe";
				disappearNext = "disapearNextSwipe";
				disappearPrevious = "disapearPreviousSwipe";
				break;
			case 6: 	/*nếu chọn hiệu ứng thứ bảy: Push reveal (vuốt xuống)*/
				appearNext = "apearNextPushReveal";
				appearPrevious = "apearPreviousPushReveal";
				disappearNext = "disapearNextPushReveal";
				disappearPrevious = "disapearPreviousPushReveal";
				break;	
			case 7: 	/*nếu chọn hiệu ứng thứ tám: snap in*/
				appearNext = "apearNextSnapIn";
				appearPrevious = "apearPreviousSnapIn";
				disappearNext = "disapearNextSnapIn";
				disappearPrevious = "disapearPreviousSnapIn";
				break;	
			case 8: 	/*nếu chọn hiệu ứng thứ chín: Let me in*/
				appearNext = "apearNextLetMeIn";
				appearPrevious = "apearPreviousLetMeIn";
				disappearNext = "disapearNextLetMeIn";
				disappearPrevious = "disapearPreviousLetMeIn";
				break;	
		}
	}















	/*Facebook 2*/
	var imagesContentFacebook =document.querySelectorAll(".imagesContentFacebook img");
	console.log(imagesContentFacebook);
	var blackBackground =document.querySelector(".blackBackground");	/*black background, chỉ xuất hiện khi click vào hình ảnh*/
	var closeBlackBgrd =document.querySelector(".closeBlackBgrd");		/*nút close góc phải trên cùng của black background*/
	var informationImage =document.querySelector(".informationImage");	/*Khối hiển thị hình ảnh(cả 2 phần trái và phải)khi click vào image*/
	var imageBlockFbUlLi =document.querySelectorAll(".imageBlockFb ul li");	/*tập các hình ảnh khi black background hiện lên*/
	var indexImage = 0;	 /*indexImage trả về chỉ số của hình ảnh, khi click vào image nào thì biết đc đó là ảnh thứ mấy trong tập các ảnh*/

	var removeWhenClickBlackBackgroundOrCloseButton = function () {
		blackBackground.classList.remove("informationDisplay");
		informationImage.classList.remove("informationDisplay");
		for (var i = 0; i < imageBlockFbUlLi.length; i++) {
			imageBlockFbUlLi[i].classList.remove("activeImgFbDisplay")		/*remove hết active (k cho phép hiển thị hình ảnh)*/
		}
		for (var i = 0; i < imagesContentFacebook.length; i++) {		
			imagesContentFacebook[i].classList.remove("imgActiveFacebook2");
		}
	}
	/*click x để close background black*/
	// closeBlackBgrd.addEventListener("click",removeWhenClickBlackBackgroundOrCloseButton)
	/*click vào background black thì close*/
	blackBackground.addEventListener("click",removeWhenClickBlackBackgroundOrCloseButton)


	/*click vào hình ảnh thì mở black background và hiển thị hình ảnh*/
	var imagesMainFacebook = document.querySelector(".imagesMainFacebook");
	var lastImageFb2 =document.querySelector(".lastImageFb2 img");
	for (var count = 0; count < imagesContentFacebook.length; count++) {
		imagesContentFacebook[count].addEventListener("click",function () {
			blackBackground.classList.add("informationDisplay");	/*mở background black*/
			informationImage.classList.add("informationDisplay");	/*mở hình ảnh hiển thị lên*/
			
			this.classList.add("imgActiveFacebook2");						/*đoạn code xác định vị trí của hình ảnh đc hiển thị*/
			var phanTuHienTai = document.querySelector(".imgActiveFacebook2");
			var viTri = 0;							/*ban đầu, nếu imagesMainFacebook = phanTuHienTai (tức là cùng có*/
			if (phanTuHienTai==lastImageFb2) {
				viTri=imagesContentFacebook.length-1;
			}
			else if (phanTuHienTai!=imagesMainFacebook){/*dạng <img src="image/1.png" alt="" class="imagesMainFacebook">) thì đó là vitri 0*/
				for (viTri = 1; phanTuHienTai = phanTuHienTai.previousElementSibling;viTri++){}		/*ngược lại thì cho chạy từ vị trí 1*/
			}																/*sau khi xác định đc vị trí thì cho hiển thị lên*/
			imageBlockFbUlLi[viTri].classList.add("activeImgFbDisplay");	/*click vào hình nào thì hình đó đc active*/
			indexImage = viTri;						/*sau khi hiển thị thì đồng thời lưu chỉ số của hình ảnh đang hiển thị đó*/
		})
	}

	/*click vào hình ảnh cuối cùng chứa phần mở rộng (+số lượng hình ảnh chưa đc hiển thị) thì mở black background và hiển thị hình ảnh*/
	var lastImageFb2 =document.querySelector(".lastImageFb2");
	document.querySelector(".lastImageFb2 .numberOfImage").innerHTML = "+" /*+ với số lượng hình ảnh chưa đc hiển thị*/
					+ (imageBlockFbUlLi.length -1 - (document.querySelectorAll(".imagesContentFacebook .imagesFacebook")).length -1);
	lastImageFb2.addEventListener("click",function () {
		blackBackground.classList.add("informationDisplay");	/*mở background black*/
		informationImage.classList.add("informationDisplay");	/*mở hình ảnh hiển thị lên*/
		indexImage = imagesContentFacebook.length-1;
		imageBlockFbUlLi[indexImage].classList.add("activeImgFbDisplay");
	})
	
	/*sự kiện khi click vào button next và previous*/
	var buttonImageNextFb =document.querySelector(".buttonImageNextFb");
	var buttonImagePreviousFb =document.querySelector(".buttonImagePreviousFb");
	buttonImageNextFb.addEventListener("click",function () {
		for (var i = 0; i < imageBlockFbUlLi.length; i++) {
			imageBlockFbUlLi[i].classList.remove("activeImgFbDisplay")				/*remove hết active (k cho phép hiển thị hình ảnh)*/
		}						
		indexImage = (indexImage>=imageBlockFbUlLi.length-1) ? 0 : (indexImage+1);	/*remove xong thì tăng chỉ số lên 1 đơn vị*/
		imageBlockFbUlLi[indexImage].classList.add("activeImgFbDisplay");	/*xong thì add class activeImgFbDisplay vào chỉ số tiếp theo đó*/
	})
	buttonImagePreviousFb.addEventListener("click",function () {					/*tương tự đối với button previous*/
		for (var i = 0; i < imageBlockFbUlLi.length; i++) {
			imageBlockFbUlLi[i].classList.remove("activeImgFbDisplay");
		}
		indexImage = (indexImage<=0) ? (imageBlockFbUlLi.length-1) : indexImage-1;
		imageBlockFbUlLi[indexImage].classList.add("activeImgFbDisplay");
	})

},false)