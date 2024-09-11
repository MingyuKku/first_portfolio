 // 메인비주얼슬라이드 스크립트
 let visual_slide_wrap = document.querySelector(".visual_slide_wrap");
 let visual_slider = document.querySelector(".visual_slider");
 let visual_slide = document.querySelectorAll(".visual_slide");

 let visual_txt_top = document.querySelector(".visual_txt_top");
 let visual_txt_bottom = document.querySelector(".visual_txt_bottom");
 let visual_pageMove = document.querySelectorAll(".visual_pageMove>li")

 let visual_slide_idx = 0;
 let visual_slide_set = "";
 let visual_slide_set_control = false;



let visual_txt_top_h2 = document.querySelectorAll('.visual_txt_top>h2')
let visual_txt_top_h4 = document.querySelector('.visual_txt_top>h4')
let visual_txt_top_h3 = document.querySelectorAll('.visual_txt_top>h3')
let visual_txt_top_p = document.querySelectorAll('.visual_txt_top>p')
let visual_txt_bottom_p = document.querySelectorAll('.visual_txt_bottom>p');
let visual_txt_bottom_span = document.querySelectorAll('.visual_txt_bottom>span');
let visual_slide_img = document.querySelectorAll('.visual_slide>img')

let making_info_h3_span = document.querySelectorAll('.making_info>h3>span');
let gnb_menu_ul_li_a = document.querySelectorAll('.gnb_menu>ul>li>a')


// 로딩시 첫 슬라이드 텍스트 애니메이션
visual_slide[0].style.zIndex = '5';
visual_txt_top_h2[0].classList.add('active');
// visual_txt_top_h4.classList.add('active');
visual_txt_top_h3[0].classList.add('active');
visual_txt_top_p[0].classList.add('active');
visual_txt_bottom_p[0].classList.add('active');
visual_txt_bottom_span[0].classList.add('active');

 

 


//  패럴렉스
let overview_wrap = document.querySelector('.overview_wrap');
let overview_img_wrap = document.querySelector('.overview_img_wrap')

let desktopUiKit1_img = document.querySelector('.desktopUiKit1_img')
let desktopUiKit1_text1 = document.querySelector('.desktopUiKit1_text1')
let desktopUiKit1_text2 = document.querySelector('.desktopUiKit1_text2')
let desktopUiKit1_text3 = document.querySelector('.desktopUiKit1_text3')

let desktopUiKit2_img = document.querySelector('.desktopUiKit2_img')
let desktopUiKit2_text1 = document.querySelector('.desktopUiKit2_text1')
let desktopUiKit2_text2 = document.querySelector('.desktopUiKit2_text2')

let desktopUiKit3_img = document.querySelector('.desktopUiKit3_img')
let desktopUiKit3_text1 = document.querySelector('.desktopUiKit3_text1')

let video = document.querySelector('.video>video')



window.addEventListener('scroll', function(){
  let wScroll = document.documentElement.scrollTop;

if(wScroll >= overview_wrap.offsetTop - window.innerHeight / 3){
  overview_wrap.classList.add("scroll");
}

if(wScroll >= overview_img_wrap.offsetTop - window.innerHeight / 2){
  overview_img_wrap.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit1_img.getBoundingClientRect().top) - window.innerHeight / 1.5){
  desktopUiKit1_img.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit1_text1.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit1_text1.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit1_text2.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit1_text2.classList.add("scroll");
} 

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit1_text3.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit1_text3.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit2_img.getBoundingClientRect().top) - window.innerHeight / 1.5){
  desktopUiKit2_img.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit2_text1.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit2_text1.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit2_text2.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit2_text2.classList.add("scroll");
} 

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit3_img.getBoundingClientRect().top) - window.innerHeight / 1.3){
  desktopUiKit3_img.classList.add("scroll");
} 

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit3_text1.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit3_text1.classList.add("scroll");
} 

if(wScroll >= (document.documentElement.scrollTop + desktopUiKit3_text1.getBoundingClientRect().top) - window.innerHeight / 2){
  desktopUiKit3_text1.classList.add("scroll");
} 

if(wScroll >= (document.documentElement.scrollTop + video.getBoundingClientRect().top) - window.innerHeight / 1.2){
  video.play();
} 



// if(wScroll >= (document.documentElement.scrollTop + keyword_main_img_wrap.getBoundingClientRect().top) - window.innerHeight / 1.5){
//   autoKeywordSlide();
// }


// // section4
// if(wScroll >= (document.documentElement.scrollTop + output_kit_standard.getBoundingClientRect().top) - window.innerHeight / 1.7){
//   output_kit_standard.classList.add("scroll");
//   if(output_kit_standard.classList.contains('scroll')){
//     setTimeout(function(){
//       output_kit_standard.children[1].style.transform = 'none';
//       output_kit_standard.children[1].style.opacity = '1';
//       output_kit_standard.children[2].style.transform = 'none';
//       output_kit_standard.children[2].style.opacity = '1';
//     },700)
//   } 
// }

})  //window 스크롤 이벤트