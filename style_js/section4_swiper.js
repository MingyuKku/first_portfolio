$(document).ready(function(){
  var swiper = new Swiper(".ui_kit_slider", {
    slidesPerView: 4.5,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 800,
    centeredSlides: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,  
    },
  
    touchRatio: 1,  // 0으로 하면 드래그 금지
    // on: {
    //   slideChange: function(){
    //     $('.ui_kit_slider .swiper-slide')[this.realIndex].css('transform', 'scale(1)');
        
    //   }
    // }
  });


});



// 패럴렉스
// section2
let goal_wrap = document.querySelector(".goal_wrap");
let keyword_main_img_wrap = document.querySelector('.keyword_main_img_wrap');
// section3
let figma_wrap = document.querySelector('.figma_wrap')
// section4
let output_kit_standard = document.querySelector('.output_kit_standard');
// section6
let manual = document.querySelector('.manual');


window.addEventListener('scroll', function(){
  let wScroll = document.documentElement.scrollTop;

// section2
if(wScroll >= goal_wrap.offsetTop - window.innerHeight / 1.5){
  goal_wrap.classList.add("scroll");
} else {
  goal_wrap.classList.remove("scroll");
}
if(wScroll >= (document.documentElement.scrollTop + keyword_main_img_wrap.getBoundingClientRect().top) - window.innerHeight / 1.5){
  autoKeywordSlide();
}

// section3
if(wScroll >= figma_wrap.offsetTop - window.innerHeight / 1.7){
  figma_wrap.classList.add("scroll");
}

// section4
if(wScroll >= (document.documentElement.scrollTop + output_kit_standard.getBoundingClientRect().top) - window.innerHeight / 1.7){
  output_kit_standard.classList.add("scroll");
  if(output_kit_standard.classList.contains('scroll')){
    setTimeout(function(){
      output_kit_standard.children[1].style.transform = 'none';
      output_kit_standard.children[1].style.opacity = '1';
      output_kit_standard.children[2].style.transform = 'none';
      output_kit_standard.children[2].style.opacity = '1';
    },700)
  } 
} else {
  output_kit_standard.classList.remove("scroll");
  output_kit_standard.children[1].style.transform = '';
  output_kit_standard.children[1].style.opacity = '';
  output_kit_standard.children[2].style.transform = '';
  output_kit_standard.children[2].style.opacity = '';
}

// section6
if(wScroll >= manual.offsetTop - window.innerHeight / 1.7){
  manual.classList.add("scroll");
} else {
  manual.classList.remove("scroll");
}

})  //window 스크롤 이벤트



// ============================
// 스크롤 탑
// let dHeight = document.documentElement.scrollHeight; 
// let scroll_top = document.querySelector('.scroll_top');


// window.addEventListener("scroll", function(){
//   let wScroll = document.documentElement.scrollTop;
//   if(wScroll > dHeight / 8){
//     scroll_top.style.bottom = '10px';
//   } else {
//     scroll_top.style.bottom = '';
//   }
// }); 


// var scroll_top_j = $(".scroll_top");
// var video_scroll = $('.video_scroll');
// var main_visual_wrap_j = $('.main_visual_wrap');

// video_scroll.click(function(){
//   $("html, body").animate({scrollTop: main_visual_wrap_j.offset().top + 100}, 600, "easeInCirc"); 
// });


// scroll_top_j.click(function(){
// // var target = $(this);
// // var index = target.index(); 
// // var section = cont.eq(index); 
// // var offset = section.offset().top;

// $("html, body").animate({scrollTop: 0}, 600, "easeOutCirc"); 
// });