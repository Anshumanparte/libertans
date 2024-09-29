var tl = gsap.timeline();

tl.from("#nav-right button",{
    transform:"translateX(-50%)",
    delay:1,
    opacity:0
    
})

tl.from(".topright-section-1",{
    transform:"translateX(-50%)",
    
    opacity:-1
    
})


tl.from("#img-section-1 ",{
    x:-100,
    scale:1.2,
    opacity:0,
    
})
tl.from("#img-section-2",{
    x:100,
    scale:1.2,
    opacity:0
    
})
tl.from("#context-section-1 h5",{
    transform:"translateY(-150%)",
    stagger:-1
    
    
})

tl.from("#context-section-1 h5 img",{
    rotate:360,
    
    repeat:-1,
    duration:2,
    ease: "linear"
    
})
tl.from(".scroll-down p",{
    transform:"translateX(-100%)",
    
    
    
})
tl.from("#left-bottom-section-1 .img-logo ",{
    transform:"translateX(-100%)",

    
    
})
tl.from(" .scroll-down-logo",{
    transform:"translateY(-100%)",

    
    
})

gsap.from("#expertise-nav h1",{
    transform:"translateY(-200%)",
    scrollTrigger:{
        trigger:"#expertise-nav",
        scroller:"body",
                start:"top 50%"

    }
    
    
})
gsap.from(" #expertise-nav p ",{
    transform:"translateY(-300%)",
    scrollTrigger:{
        trigger:"#expertise-nav",
        scroller:"body",
                start:"top 50%"

    }
    
    
})


gsap.from(".container-expertise .card-expertise",{
    transform:"translateY(-100%)",
    stagger:0.3,
    scrollTrigger:{
        trigger:".container-expertise",
        scroller:"body",
                start:"top 50%"

    }
    
    
    
})
gsap.from(".middle-expertise-nav div",{
    opacity:1,
    delay:1,
    scrollTrigger:{
        trigger:".container-expertise",
        scroller:"body",
        start:"top 50%"

    }
    
    
})



gsap.from(".middle-expertise  ",{
    borderRadius:"0",
    backgroundColor:"#282828",
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".container-expertise",
        scroller:"body",
                start:"top 50%"

    }
    
    
})
gsap.from(".middle-expertise-img  ",{
    borderRadius:"0",
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".container-expertise",
        scroller:"body",
                start:"top 50%"

    }
    
    
})
gsap.from(".middle-expertise-logo  ",{
    opacity:0,
    rotate:-120,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:".container-expertise",
        scroller:"body",
                start:"top 50%"

    }
    
    
    
})



gsap.from(".expertise-context-left h1",{
    transform:"translateY(-100%)",
    duration:2,
    scrollTrigger:{
        trigger:".expertise-context-left",
        scroller:"body",
                start:"top 50%"

    }
    
    
    
})

gsap.to(".expertise-context-right img",{
    rotate: 360,
    ease: "linear",
    repeat: -1, // Infinite loop for the rotation
    duration: 2, // Control the speed of the rotation
    delay:1,
    scrollTrigger: {
        trigger: ".expertise-context",
        scroller: "body",
        
        start: "top 50%"
    }
    
    
    
})

gsap.from(".expertise-context-right img",{
    scale: 1.3,
    opacity: 0,
    scrollTrigger: {
        trigger: ".expertise-context-left",
        scroller: "body",
        
        start: "top 50%"
    }
    
    
    
})

gsap.from(".expertise-context-right span",{
     y:-100,
     opacity:0,
    delay:1,
    scrollTrigger: {
        trigger: ".expertise-context-left",
        scroller: "body",
        
        start: "top 50%"
    }
    
    
    
})

gsap.from(".expertise-context-right h5",{
    x:100,
    opacity:0,
   delay:1,
   scrollTrigger: {
       trigger: ".expertise-context-left",
       scroller: "body",
       
       start: "top 50%"
   }
   
   
   
})
gsap.from(".expertise-context-right p",{
    y:100,
    opacity:0,
   delay:1,
   scrollTrigger: {
       trigger: ".expertise-context-left",
       scroller: "body",
       
       start: "top 50%"
   }
   
   
   
})

gsap.from(".recent-work-container-card-img-last",{
    borderRadius:0,
    filter:"grayscale(100%)",
    borderRadius:"border-radius: 5em",
   duration:1,
   scrollTrigger: {
       trigger: ".recent-work-container-card-img-last",
       scroller: "body",
       
       start: "top 50%"
   }
   
   
   
})
gsap.from(".recent-work-container-card-last-logo",{
    opacity:0,
   duration:1,
   scale:.5,
   scrollTrigger: {
       trigger: ".recent-work-container-card-img-last",
       scroller: "body",
       
       start: "top 50%"
   }
   
   
   
})
gsap.from(".recent-work-container-card-last-logo",{
    rotate:360,
    repeat:-1,
    ease:"linear",
    duration:1,
   scrollTrigger: {
       trigger: ".recent-work-container-card-img-last",
       scroller: "body",
       
       start: "top 50%"
   }
   
   
   
})
gsap.from("#compamy-logos .logo-container img",{
    transform: "translatey(-150%)",
    
    stagger:.1,
   scrollTrigger: {
       trigger: "#compamy-logos",
       scroller: "body",
       
       start: "top 60%"
   }
   
   
   
})
gsap.from(".lastblock-1",{
    transform:"translateY(40%)",
    duration:1,
   scrollTrigger: {
       trigger: "#lastblock",
       scroller: "body",
       
       start: "top 50%"
   }
   
   
   
})


gsap.from(".lastblock-start h3",{
   
    y:-100,
    duration:1,

   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
       
       start: "top 70%"
   }
   
   
   
})
gsap.from(".lastblock-start h1",{
   
    y:-300,
    duration:1,
    delay:1,
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
       
       start: "top 70%"
   }
   
   
   
})
gsap.from(".lastblock-start p",{
   
    y:-100,
    duration:1,
    delay:1.5,
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
       
       start: "top 70%"
   }
   
   
   
})



gsap.from(".lastblock-last-left ",{
   
    y:-200,
    duration:1,
    delay:2,
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
       
       start: "top 70%"
   }
   
   
   
})
gsap.from(".lastblock-last-right-about h5",{
   
    y:-100,
    duration:1,
    delay:2,
    stagger:.4,
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
     
       start: "top 70%"
   }
   
   
   
})

gsap.from(".lastblock-start img",{
    
   opacity:0,
    y:100,
    scale:1.6,
    delay:2,
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
      
       start: "top 70%"
   }
   
   
   
})
gsap.from(".lastblock-start img",{
    rotate:360,
    repeat:-1,
    ease:"linear",
    duration:2,
    
    
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
       
       start: "top 70%"
   }
   
   
   
})

gsap.from(".lastblock-last-right-policy h5",{
   
    y:-100,
    duration:1,
    delay:2.5,
    
   scrollTrigger: {
       trigger: ".lastblock-1",
       scroller: "body",
       
       start: "top 70%"
   }
   
   
   
})
