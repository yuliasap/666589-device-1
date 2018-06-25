var write=document.querySelector(".button-write-us");
var popup=document.querySelector(".write-us");
var close=document.querySelector(".modal-close");
var login=popup.querySelector("[name= name]");
var form=popup.querySelector("form");
var maplink=document.querySelector(".contacts-button-map");
var mappopup=document.querySelector(".modal-map");
var mapclose=mappopup.querySelector(".modal-close");


write.addEventListener("click", function (evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});

close.addEventListener("click", function (evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
	login.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt){
	evt.preventDefault();
	if (!login.value) {
		login.classList.add("modal-error");
	}
});

maplink.addEventListener("click", function (evt){
	evt.preventDefault();
	mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt){
	evt.preventDefault();
	mappopup.classList.remove("modal-show");
});


// slider_controls_first.addEventListener("click", function(evt, ){
// 	evt.preventDefault();

// 	first_slider.classList.add("active-slide");
// 	second_slider.classList.remove("active-slide");
// 	third_slider.classList.remove("active-slide");

// 	slider_controls_first.classList.add("active");
// 	slider_controls_second.classList.remove("active");
// 	slider_controls_third.classList.remove("active");
// });

// slider_controls_second.addEventListener("click", function(evt){
// 	evt.preventDefault();
	
// 	first_slider.classList.remove("active-slide");
// 	second_slider.classList.add("active-slide");
// 	third_slider.classList.remove("active-slide");

// 	slider_controls_first.classList.remove("active");
// 	slider_controls_second.classList.add("active");
// 	slider_controls_third.classList.remove("active");
// });

// slider_controls_third.addEventListener("click", function(evt){
// 	evt.preventDefault();
	
// 	first_slider.classList.remove("active-slide");
// 	second_slider.classList.remove("active-slide");
// 	third_slider.classList.add("active-slide");

// 	slider_controls_first.classList.remove("active");
// 	slider_controls_second.classList.remove("active");
// 	slider_controls_third.classList.add("active");
// });


function switchSlider(n) {

	for (var i = 1; i <= 3; i++) {
		var slide = document.querySelector(".slide-" + i);
		var control = document.querySelector(".slider-controls-" + i);

		if (i == n) {
			slide.classList.add('active-slide');
			control.classList.add('active')
		} else {
			slide.classList.remove('active-slide');
			control.classList.remove('active')
		}
	}
};


function wrapper (arg) {
	return function () {
		switchSlider(arg);
	}
};


for (var i = 1; i <= 3; i++) {
	var control = document.querySelector(".slider-controls-" + i);
	control.addEventListener('click', wrapper(i))
};

// slider_controls_1.addEventListener("click", );
// slider_controls_2.addEventListener("click", switchSlider(2)); - это неправильно
// slider_controls_3.addEventListener("click", switchSlider(3));


function switchSlider2(n){

	for (var i = 1; i <= 3; i++) {
		var another_slider = document.querySelector(".services-slider-" + i);
		var button = document.querySelector(".slider--" + i);

		if (i ==n) {
			another_slider.classList.add("services-slider-active");
			button.classList.add("button-current");
		} else {
			another_slider.classList.remove("services-slider-active");
			button.classList.remove("button-current");
		}
	}
};


function wrapper2(arg) {
	return function(){
		switchSlider2(arg);
	}
};

for (var i=1; i<=3; i++) {
	var button=document.querySelector(".slider--" + i);
	button.addEventListener("click", wrapper2(i))
};
