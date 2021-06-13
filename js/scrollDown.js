const $scrollDown = document.querySelector(".logo");

window.scroll(function () {
    if($scrollDown.scrollTop() == 0) {
     $scrollDown.hide();
    } else {
     $scrollDown.show();
    }
   });