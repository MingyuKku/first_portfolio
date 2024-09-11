
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
visual_txt_top_h4.classList.add('active');
visual_txt_top_h3[0].classList.add('active');
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
      // slide.classList.remove('active');
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
  visual_txt_top_h4.classList.remove('active');
  visual_txt_top_h4.style.transitionDelay = '0';

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


   if(n == 3){visual_slide_idx = 0}
   if(n < 0){visual_slide_idx = 2}


   if(flag){
     if(visual_slide_idx == 0){
      visual_slide[2].style.zIndex = '4';
     } else {
      visual_slide[visual_slide_idx-1].style.zIndex = '4';
      // visual_slide[0].style.zIndex = '4';
      // visual_slide[1].style.zIndex = '3';
      // visual_slide[2].style.zIndex = '2';
     }
   }

   if(!flag){
     if(visual_slide_idx == 2){
      visual_slide[0].style.zIndex = '4';
     } else {
      visual_slide[visual_slide_idx+1].style.zIndex = '4';
      // visual_slide[0].style.zIndex = '2';
      // visual_slide[1].style.zIndex = '3';
      // visual_slide[2].style.zIndex = '4';
     }
   }

   
   visual_slide[visual_slide_idx].style.zIndex ='5';
   visual_slide[visual_slide_idx].style.width = '0';
  //  visual_slide[visual_slide_idx].style.transform = 'translateX(-100%)';

   setTimeout(function(){
    // visual_slide[visual_slide_idx].classList.add('active');
    visual_slide[visual_slide_idx].style.transition = 'width 0.8s ease-in-out';
    visual_slide[visual_slide_idx].style.width = '100%';
   }, 100)
   
  //  이미지, 페이지내비 애니메이션
   visual_pageMove[visual_slide_idx].classList.add('active');
   visual_slide_img[visual_slide_idx].style.transform = 'scale(1.1)';
  
  //  텍스트 애니메이션
   visual_txt_top_h2[visual_slide_idx].classList.add('active');
   if(visual_slide_idx == 0){
    visual_txt_top_h4.classList.add('active');
   }
   
   visual_txt_top_h3[visual_slide_idx].classList.add('active');
   if(visual_slide_idx == 1){
    visual_txt_top_p[0].classList.add('active');
    making_info_h3_span.forEach(sp=>{
      sp.style.color = '#fff';
    })
    gnb_menu_ul_li_a.forEach(a=>{
      a.style.color = '#fff';
    })
   } else if(visual_slide_idx == 2){
    visual_txt_top_p[1].classList.add('active');
    making_info_h3_span.forEach(sp=>{
      sp.style.color = '#fff';
    })
    gnb_menu_ul_li_a.forEach(a=>{
      a.style.color = '#fff';
    })
   } else {
    making_info_h3_span.forEach(sp=>{
      sp.style.color = '#333';
    })
    gnb_menu_ul_li_a.forEach(a=>{
      a.style.color = '#333';
    })
   }
   
   visual_txt_bottom_p[visual_slide_idx].classList.add('active');
   visual_txt_bottom_span[visual_slide_idx].classList.add('active');
   //  텍스트 애니메이션 끝
   
 };



// // ======================
// // 해더 고정
// let window_Height = window.innerHeight; //현재 브라우저 창의 높이
// let docum_Height = document.documentElement.scrollHeight; //현재 문서(스크롤 포함)의 높이
// let header_Height = document.querySelector("#header").offsetHeight; //#header의 높이값
// let headline = document.querySelector(".headline");
// let lastScrollTop = 0;
// let moveScroll;
// // let main_logo = document.querySelector(".main_logo");
// // let scroll_logo = document.querySelector(".scroll_logo");

// // 사용자가 스크롤을 했는지 감지하는 역할
// window.addEventListener("scroll", function(){
//   moveScroll = true;
// });
// // 0.1초마다 스크롤을 감지해 스크롤이 일어났을 시 hasScroll 함수를 실행시킨다
// setInterval(function(){
//   if(moveScroll){
//     hasScroll();
//     moveScroll = false;
//   }
// }, 100)

// function hasScroll(){
//   let window_Scroll = window.pageYOffset; //브라우저의 스크롤 값을 구하는 방법2
//   if(window_Scroll > lastScrollTop){
//     document.querySelector("#header").style.top = "-200px"
//   } else {
//     document.querySelector("#header").style.top = "0";
//   }
//   lastScrollTop = window_Scroll;

//   // 해더에 그림자 생기기
//   if(window_Scroll > header_Height){

//       headline.style.borderBottom = '1px solid rgba(255, 255, 255, 0.0)';
//       document.querySelector('#header').style.background = 'linear-gradient(to bottom, rgba(252,252,252,1), rgba(252,252,252,0.5), rgba(252,252,252,0.0))'

//       gnb_menu_ul_li_a.forEach(a=>{
//         a.style.color = '#333';
//       })

//   } else {
//     headline.style.borderBottom = '';
//     document.querySelector('#header').style.background = '';

//     gnb_menu_ul_li_a.forEach(a=>{
//       a.style.color = '';
//     })
//   }
// }










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

