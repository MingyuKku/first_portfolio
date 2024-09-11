
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

 visualAutoSlide();
 // 메인비주얼자동슬라이드
 function visualAutoSlide(){
   visual_slide_set = setInterval(function(){
     visualSlide(visual_slide_idx + 1);
   }, 5000)
 }


 // 컨트롤버튼
let visual_prev = document.querySelector('.visual_prev');
let visual_next = document.querySelector('.visual_next');
let visual_time = true;

visual_prev.addEventListener('click', function(){
  if(visual_time){
    visual_time = false;
    visualSlide(visual_slide_idx - 1);
    setTimeout(function(){
      visual_time = true;
    }, 810)
  }
  
})
visual_prev.addEventListener('mousedown', function(){
  clearInterval(visual_slide_set);
})
visual_prev.addEventListener('mouseup', visualAutoSlide);

visual_next.addEventListener('click', function(){
  if(visual_time){
    visual_time = false;
    visualSlide(visual_slide_idx + 1);
    setTimeout(function(){
      visual_time = true;
    }, 810)
  }
})
visual_next.addEventListener('mousedown', function(){
  clearInterval(visual_slide_set);
})
visual_next.addEventListener('mouseup', visualAutoSlide);


 visual_pageMove.forEach((con,idx)=>{
   con.addEventListener("click", function(){
     visualSlide(idx);
   });

   con.addEventListener('mousedown', function(){
     clearInterval(visual_slide_set);
   })

   con.addEventListener('mouseup', visualAutoSlide);
 });
 


let visual_txt_top_h2 = document.querySelectorAll('.visual_txt_top>h2')
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

visual_slide_img[0].style.transform = 'scale(1.1)';
 

 // 메인비주얼수동슬라이드
 let flag = false;

 function visualSlide(n){
   
   if(n>visual_slide_idx){  //바로 앞전에 인덱스보다 지금 누른 인덱스가 더 클때
    flag = true;
   }
   if(n<visual_slide_idx){  //바로 앞전에 인덱스보다 지금 누른 인덱스가 낮을 때
     flag = false;
   }

   visual_slide_idx = n;

    visual_slide.forEach(slide=>{
      slide.style.transition = 'width 0s ease-in-out';
      slide.style.zIndex = '3';
      slide.style.width = '100%';
    })
  
   visual_pageMove.forEach(li=>{
     li.classList.remove('active');
   })

   visual_slide_img.forEach(img=>{
     img.style.transform = 'scale(1)';
   })

  //  텍스트 애니메이션 초기화
  visual_txt_top_h2.forEach(h2=>{
    h2.classList.remove('active');
    h2.style.transitionDelay = '0';
  })

  visual_txt_top_h3.forEach(h3=>{
    h3.classList.remove('active');
    h3.style.transitionDelay = '0';
  })
  visual_txt_top_p.forEach(p=>{
    p.classList.remove('active');
    p.style.transitionDelay = '0';
  })
  visual_txt_bottom_p.forEach(p=>{
    p.classList.remove('active');
    p.style.transitionDelay = '0';
  })
  visual_txt_bottom_span.forEach(span=>{
    span.classList.remove('active');
    span.style.transitionDelay = '0';
  })
//  텍스트 애니메이션 초기화 끝


   if(n == 2){visual_slide_idx = 0}
   if(n < 0){visual_slide_idx = 1}


   if(flag){
     if(visual_slide_idx == 0){
      visual_slide[1].style.zIndex = '4';
     } 
   }

   if(!flag){
     if(visual_slide_idx == 1){
      visual_slide[0].style.zIndex = '4';
     }
   }

   visual_slide[visual_slide_idx].style.zIndex ='5';
   visual_slide[visual_slide_idx].style.width = '0';
  //  visual_slide[visual_slide_idx].style.transform = 'translateX(-100%)';

   setTimeout(function(){
    visual_slide[visual_slide_idx].style.transition = 'width 0.8s ease-in-out';
    visual_slide[visual_slide_idx].style.zIndex ='5';
    // visual_slide[visual_slide_idx].style.transition = 'transform 0.8s ease-out';
    visual_slide[visual_slide_idx].style.width = '100%';
    // visual_slide[visual_slide_idx].style.transform = 'none';
   }, 100)
   
  //  이미지, 페이지내비 애니메이션
   visual_pageMove[visual_slide_idx].classList.add('active');
   visual_slide_img[visual_slide_idx].style.transform = 'scale(1.1)';
  
  //  텍스트 애니메이션
   visual_txt_top_h2[visual_slide_idx].classList.add('active');
   if(visual_slide_idx == 2){
    visual_txt_top_h4.classList.add('active');
   }
   
   visual_txt_top_h3[visual_slide_idx].classList.add('active');
   if(visual_slide_idx == 0){
    visual_txt_top_p[0].classList.add('active');
   
   } else if(visual_slide_idx == 1){
    visual_txt_top_p[1].classList.add('active');
   }
   
   visual_txt_bottom_p[visual_slide_idx].classList.add('active');
   visual_txt_bottom_span[visual_slide_idx].classList.add('active');
   //  텍스트 애니메이션 끝
   
 };


// 스와이퍼

$(document).ready(function(){
  var swiper = new Swiper(".desktop_kit_slider", {
    slidesPerView: 1.5,
    spaceBetween: 0,
    speed: 1000,
    centeredSlides: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
      draggable: true,
    },
    touchRatio: 0.5,
  });


})  //$(document).ready

// 스크롤바 이벤트
$('.desktop_kit .swiper-scrollbar').mouseover(function(){
  $(this).css({'opacity': '1', 'transition-duration': '0.6s'});
});

$('.desktop_kit .swiper-scrollbar').mouseout(function(){
  $(this).css({'opacity': '0', 'transition-duration': '1s'});
});



// 패럴렉스
let keyword_wrap = document.querySelector('.keyword_wrap');
let uiKit_wrap = document.querySelector('.uiKit_wrap')
let mobile_info = document.querySelector('.mobile_info')
let ulKit_info_wrap = document.querySelector('.ulKit_info_wrap')
let menu_info = document.querySelector('.menu_info');

window.addEventListener('scroll', function(){
  let wScroll = document.documentElement.scrollTop;

if(wScroll >= keyword_wrap.offsetTop - window.innerHeight / 1.5){
  keyword_wrap.classList.add("scroll");
}

if(wScroll >= uiKit_wrap.offsetTop - window.innerHeight / 1.5){
  uiKit_wrap.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + ulKit_info_wrap.getBoundingClientRect().top) - window.innerHeight / 1.5){
  ulKit_info_wrap.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + menu_info.getBoundingClientRect().top) - window.innerHeight / 1.2){
  menu_info.classList.add("scroll");
}

if(wScroll >= (document.documentElement.scrollTop + mobile_info.getBoundingClientRect().top) - window.innerHeight / 1.5){
  mobile_info.classList.add("scroll");
}












})  //window 스크롤 이벤트