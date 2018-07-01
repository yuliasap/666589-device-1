var write=document.querySelector(".button-write-us");
var popup=document.querySelector(".write-us");
var modalclose=document.querySelector(".modal-close");
var login=popup.querySelector("[name=name]");
var form=popup.querySelector("form");
var maplink=document.querySelector(".contacts-button-map");
var mappopup=document.querySelector(".modal-map");
var mapclose=mappopup.querySelector(".modal-close");

write.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

modalclose.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    login.classList.remove("modal-error");
    popup.classList.remove("error-shake");
});

form.addEventListener("submit", function (evt){
    evt.preventDefault();
    if (!login.value) {
        login.classList.add("modal-error");
        popup.classList.add("error-shake");
    }
    else {
        login.classList.remove("modal-error");
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

function switchSlider(n, evt) {

    if (evt.type == "keyup" && evt.keyCode != 13) {
        return;
    }

    for (var i = 1; i <= 3; i++) {
        var slide = document.querySelector(".slide-" + i);
        var control = document.querySelector(".slider-controls-" + i);

        if (i == n) {
            slide.classList.add("active-slide");
            control.classList.add("active");
        } else {
            slide.classList.remove("active-slide");
            control.classList.remove("active");
        }
    }
}

for (var i = 1; i <= 3; i++) {
    var control = document.querySelector(".slider-controls-" + i);
    control.addEventListener("click", switchSlider.bind(null, i));
    control.addEventListener("keyup", switchSlider.bind(null, i));
}

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
}

for (var i=1; i<=3; i++) {
    var button=document.querySelector(".slider--" + i);
    button.addEventListener("click", switchSlider2.bind(null, i));
}