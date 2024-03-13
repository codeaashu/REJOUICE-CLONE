function loader(){
  var tl = gsap.timeline()
/* ===( CODE AASHU )=== */
tl.from(".loader span",{
  x:100,
  duration:1.2,
  stagger:.03,
  delay:.1
})
tl.to(".loader span",{
  x:-100,
  duration:.6,
  opacity:0,
  stagger:.03
})
tl.to('.loader',{
  duration:.5,
  opacity:0,
  display:"none"
})
tl.from('.page1 .inner-content h1 span',{
  y:60,
  duration:.5,
  delay:-.3,
  stagger:.05
})
}
function crsrAnim(){
    const cursor = document.querySelector(".cursor");
    const innerContent = document.querySelector(".inner-content");

innerContent.addEventListener("mousemove", (e) => {
    gsap.to(cursor,{
        x: e.x+"px",
        y: e.y+"px"
    })
})

innerContent.addEventListener("mouseenter", ()=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
innerContent.addEventListener("mouseleave", ()=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
function page2TopAnim(){
  gsap.from(".first-text h3, .second-text h3", {
    y: 60,
    scrollTrigger:{
      scroller:".main",
      trigger:".first-text h3,.second-text h3",
      start:"top 100%",
      end:"top 98%",
      duration:.8,
      scrub:1
    }
  });
  gsap.to(".page2-top-border", {
    width: 94+"vw",
    scrollTrigger:{
      scroller:".main",
      trigger:".page2-top-border",
      start:"top 92%",
      end:"top 89%",
      duration:5,
      scrub:1
    }
  });
  gsap.from(".page2 .page2-bottom .btm-text h2 .up span",{
    y:200,
    scrollTrigger:{
      scroller:".main",
      trigger:".page2 .page2-bottom .btm-text h2 .up span",
      start:"top 103%",
      end:"top 98%",
      scrub:2,
      stagger:.1
    }
})
}
function page4Anim(){
  const videos = document.querySelectorAll('.page4 .page4-video .item video');

videos.forEach((video) => {
  video.addEventListener('mouseenter',() =>{
    video.play()
  })
  video.addEventListener('mouseleave',() =>{
    video.pause()
    video.currentTime= 0
  })
})
}
function page5TopAnim(){
  gsap.from(".page5 .page5-top .top-text h3", {
    y: 60,
    scrollTrigger:{
      scroller:".main",
      trigger:".page5 .page5-top .top-text h3",
      start:"top 100%",
      end:"top 95%",
      duration:.8,
      scrub:1
    }
  })
  gsap.to(".page5-top-border", {
    width: 94+"vw",
    scrollTrigger:{
      scroller:".main",
      trigger:".page5-top-border",
      start:"top 85%",
      end:"top 80%",
      duration:5,
      scrub:1
    }
  });
  gsap.from(".page5 .page5-bottom .btm-text h2 .up span",{
    y:200,
    scrollTrigger:{
      scroller:".main",
      trigger:".page5 .page5-bottom .btm-text h2 .up span",
      start:"top 105%",
      end:"top 99%",
      scrub:2,
      stagger:.1,
    }
})
}
function page6Anim(){
  const cursor = document.querySelector('.page6 .crsr')
const svg = document.querySelector('.page6')

svg.addEventListener('mousemove', (ev) => {
  gsap.to(cursor,{
    x: ev.x-50+"px",
    y: ev.y-100+"px"
  })
})
svg.addEventListener("mouseenter", ()=>{
  gsap.to(cursor,{
      scale:1,
      opacity:1
  })
})
svg.addEventListener("mouseleave", ()=>{
  gsap.to(cursor,{
      scale:0,
      opacity:0
  })
})
}
function page7TopAnim(){
  gsap.from(".page7 .page7-top .top-text h3", {
    y: 60,
    scrollTrigger:{
      scroller:".main",
      trigger:".page7 .page7-top .top-text h3",
      start:"top 100%",
      end:"top 95%",
      duration:.8,
      scrub:1
    }
  })
  gsap.to(".page7-top-border", {
    width: 94+"vw",
    scrollTrigger:{
      scroller:".main",
      trigger:".page7-top-border",
      start:"top 85%",
      end:"top 80%",
      duration:5,
      scrub:1
    }
  });
  gsap.from(".page7 .page7-bottom .btm-text h2 .up span",{
    y:200,
    scrollTrigger:{
      scroller:".main",
      trigger:".page7 .page7-bottom .btm-text h2 .up span",
      start:"top 105%",
      end:"top 99%",
      scrub:2,
      stagger:.1,
    }
})
}
function menuAnim(){
  const menuBtn = document.querySelector('.page1 .inner-content nav #menu')
  const menu = document.querySelector('.page1 .menu')
  const closeBtn = document.querySelector('.page1 .menu .menu-header #close')
  const video = document.querySelector('.page1 .menu .menu-sec .vid video')
  const playReel = document.querySelector('.page1 .menu .menu-sec .vid .play')
  const smallLinks = document.querySelector('.page1 .menu .small-links')
  const Links = document.querySelectorAll('.page1 .menu .menu-sec .links h3 , .page1 .menu .menu-sec .links button')
  const border = document.querySelector('.page1 .menu .menu-border') 


menuBtn.addEventListener('click',() => {
  menu.classList.add('active')
  menu.style.transition = `height .5s ease`
  
  gsap.from(video,{
    scale:.1,
    duration:1
  })
  gsap.from(playReel,{
    y:-100,
    duration:1.1
  })
  gsap.from(smallLinks,{
    x:200,
    duration:2,
    delay:-.4
  })
  gsap.from(Links,{
    y:100,
    duration:.7,
    stagger:.1
  })
  gsap.to(border,{
   width:95+"vw",
   duration:1.5,
   delay:-.1
  })

})
closeBtn.addEventListener('click',() => {
  menu.classList.remove('active') 
})

}
function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 600,
      disableOnInteraction: false,
    },
  });
}
function page3TextAnim(){
  gsap.from('.page3 .page3-text h1  ',{
    y:100,
    opacity:0,
    scrollTrigger:{
      scroller:'.main',
      trigger:'.page3 .page3-text h1 ',
      start:'top 80%',
      end:'top 68%',
      duration:1.2,
      stagger:1,
      scrub:1
    }
  })
}
crsrAnim();
loco();
page2TopAnim();
page3TextAnim();
page4Anim();
page5TopAnim();
page6Anim();
page7TopAnim();
loader();
menuAnim();
swiper();



















