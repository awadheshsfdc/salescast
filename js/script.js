





var tl = gsap.timeline({scrollTrigger:{
    trigger:"#scroll",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});


tl
.to(".text", {
    top:"-7",
}, 'a')

.to("#card-one",{
    top:"35%",
}, 'a')

.to("#card-two",{
    top:"130%",
}, 'a')

.to("#card-two",{
    top:"42%",
}, 'b')

.to("#card-one",{
    width:"65%",
    height:"65vh"
}, 'b')

.to("#card-three",{
    top:"130%",
}, 'b')

.to("#card-three",{
    top:"50%"
}, 'c')

.to("#card-two",{
    width:"70%",
    height:"70vh"
}, 'c')


.to("#card-four",{
    top:"130%",
}, 'c')

.to("#card-four",{
    top:"50%",
}, 'd')

.to("#card-three",{
    width:"65%",
    height:"65vh"
}, 'd')




gsap.from(".leftWrapper", {
    opacity: 0, 
    y: -100, 
    duration: 1
  });

gsap.from(".imgWrapper", {
    opacity: 0, 
    y: 100, 
    delay: '0.5',
    duration: 1
  });

  gsap.from("#secondWrapper .aboutImg",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#secondWrapper .aboutImg",
        scroller:"body"
    }
  });
 

   gsap.from(".nextGenWrapper .thirdWrapperTitle",{
    scale:0.5,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".nextGenWrapper .thirdWrapperTitle",
        scroller:"body",
        scrub:2
    }
   });

   gsap.from("#thirdWrapper .innersection",{
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#thirdWrapper .innersection",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 50%",
        scrub:2
    }

   });

   gsap.from("#forthWrapper .innersection",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#forthWrapper .innersection",
        scroller:"body",
        start: "top 120%",
        end:"top 30%",
        scrub:2
    }
   });

   gsap.from("#columnWrapper .oneWrapper",{
    scale:0.5,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#columnWrapper .oneWrapper",
        scroller:"body",
        start:"top 125%",
        end:"top 50%",
        scrub:2
    }
   });

   gsap.from("#columnWrapper .columnWrapperTitle",{
    scale:0.5,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#columnWrapper .columnWrapperTitle",
        scroller:"body",
        scrub:2
    }
   });

   gsap.from(".chartWrapper .chartImg",{
    scale:1.3,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".chartWrapper .chartImg",
        scroller:"body",
        scrub:2
    }
   });





   
  
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     grabCursor: true,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

  
