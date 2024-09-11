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

 
let visual_txt_top_h2 = document.querySelector('.visual_txt_top>h2')
let visual_txt_top_h4 = document.querySelector('.visual_txt_top>h4')
let visual_txt_top_h3 = document.querySelector('.visual_txt_top>h3')
let visual_txt_top_p = document.querySelector('.visual_txt_top>p')
let visual_txt_bottom_p = document.querySelector('.visual_txt_bottom>p');
let visual_txt_bottom_span = document.querySelector('.visual_txt_bottom>span');
let visual_slide_img = document.querySelector('.visual_slide>img')

let making_info_h3_span = document.querySelectorAll('.making_info>h3>span');
let gnb_menu_ul_li_a = document.querySelectorAll('.gnb_menu>ul>li>a')


// 로딩시 첫 슬라이드 텍스트 애니메이션

visual_txt_top_h2.classList.add('active');
visual_txt_top_h4.classList.add('active');
visual_txt_top_h3.classList.add('active');
visual_txt_bottom_p.classList.add('active');
visual_txt_bottom_span.classList.add('active');

 



// ===============================================
//  section2
// 키워드 모바일 슬라이드
let keyword_slider = document.querySelector('.keyword_slider')
let keyword_slide = document.querySelectorAll('.keyword_slider>li')
let keyword_slide_idx = 0;
let keyword_slide_set;
let keyword_slide_set_control = true;

let keyword_main_img_img = document.querySelectorAll('.keyword_main_img>img')


// autoKeywordSlide();
function autoKeywordSlide(){
  if(keyword_slide_set_control){
    keyword_slide_set = setInterval(function(){
      keywordSlide(keyword_slide_idx + 1)
    }, 2000);
  }
  keyword_slide_set_control = false;
}

// 첫 트렌지션 효과를 위해
setTimeout(function(){
  keyword_slider.style.left = '0';
}, 100)

// 수동 슬라이드
function keywordSlide(n){
  keyword_slide_idx = n;

  keyword_main_img_img.forEach(img=>{
    img.style.opacity = '0';
  })

  if(n == 3){
    clearInterval(keyword_slide_set);
  }

  keyword_slider.style.left = 360*keyword_slide_idx + 'px';
  keyword_main_img_img[keyword_slide_idx].style.opacity = '1';
}