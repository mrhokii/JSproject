



//scrolltoTop
function scrolltoTop(){
    window.scrollTo(0,0)
    
}




/// road map

let slide1Btn = document.querySelector(".slide__1")
let slide2Btn = document.querySelector(".slide__2")
let slider1 = document.querySelector(".slide-1")
let slider2 = document.querySelector(".slide-2")

slide1Btn.addEventListener("click", ()=>{
    // color btn
    slide1Btn.style.background = "blue"
    slide2Btn.style.background = "rgb(99, 173, 198)"

    //btn size
    slide1Btn.style.width= "40px"
    slide2Btn.style.width= "20px"

    //slider transform
    slider1.style.transform = "translate(0px, 0px)"
    slider1.style.transition = "all 1s"
    slider2.style.transform = "translate(1500px, -360px)"
    slider2.style.transition = "all 1s"
})
slide2Btn.addEventListener("click", ()=>{
    // color btn
    slide2Btn.style.background = "blue"
    slide1Btn.style.background = "rgb(99, 173, 198)"

    //btn size
    slide2Btn.style.width= "40px"
    slide1Btn.style.width= "20px"


    //slider transform
    slider2.style.transform = "translate(0px, -360px)"
    slider2.style.transition = "all 1s"
    slider1.style.transform = "translate(-1500px, 0px)"
    slider1.style.transition = "all 1s"
})






/// road map mob

let slide1BtnM = document.querySelector(".slide__1mob")
let slide2BtnM = document.querySelector(".slide__2mob")
let slide3BtnM = document.querySelector(".slide__3mob")
let slide4BtnM = document.querySelector(".slide__4mob")
let slider1M = document.querySelector(".slide-1-mob")
let slider2M = document.querySelector(".slide-2-mob")
let slider3M = document.querySelector(".slide-3-mob")
let slider4M = document.querySelector(".slide-4-mob")


slide1BtnM.addEventListener("click", ()=>{
    //slide translate
    slider1M.style.transform = "translate(000px, 000px)"
    slider2M.style.transform = "translate(500px, 000px)"
    slider3M.style.transform = "translate(500px, 000px)"
    slider4M.style.transform = "translate(500px, 000px)"


    // slide transition
    slider2M.style.transition = "all 0.50s"
    slider3M.style.transition = "all 0.50s"
    slider4M.style.transition = "all 0.50s"



    //btn size
    slide1BtnM.style.width= "40px"
    slide2BtnM.style.width= "20px"
    slide3BtnM.style.width= "20px"
    slide4BtnM.style.width= "20px"


    // color btn
    slide1BtnM.style.background = "blue"
    slide2BtnM.style.background = "rgb(99, 173, 198)"
    slide3BtnM.style.background = "rgb(99, 173, 198)"
    slide4BtnM.style.background = "rgb(99, 173, 198)"

})




slide2BtnM.addEventListener("click", ()=>{
    //slide translate
    slider1M.style.transform = "translate(-500px, 000px)"
    slider2M.style.transform = "translate(000px, 000px)"
    slider3M.style.transform = "translate(500px, 000px)"
    slider4M.style.transform = "translate(500px, 000px)"


    // slide transition
    slider1M.style.transition = "all 0.50s"
    slider2M.style.transition = "all 0.50s"
    slider3M.style.transition = "all 0.50s"
    slider4M.style.transition = "all 0.50s"



    //btn size
    slide2BtnM.style.width= "40px"
    slide1BtnM.style.width= "20px"
    slide3BtnM.style.width= "20px"
    slide4BtnM.style.width= "20px"


    // color btn
    slide2BtnM.style.background = "blue"
    slide1BtnM.style.background = "rgb(99, 173, 198)"
    slide3BtnM.style.background = "rgb(99, 173, 198)"
    slide4BtnM.style.background = "rgb(99, 173, 198)"

})







slide3BtnM.addEventListener("click", ()=>{
    //slide translate
    slider1M.style.transform = "translate(-500px, 000px)"
    slider2M.style.transform = "translate(-500px, 000px)"
    slider3M.style.transform = "translate(000px, 000px)"
    slider4M.style.transform = "translate(500px, 000px)"


    // slide transition
    slider1M.style.transition = "all 0.50s"
    slider2M.style.transition = "all 0.50s"
    slider3M.style.transition = "all 0.50s"
    slider4M.style.transition = "all 0.50s"



    //btn size
    slide3BtnM.style.width= "40px"
    slide1BtnM.style.width= "20px"
    slide2BtnM.style.width= "20px"
    slide4BtnM.style.width= "20px"


    // color btn
    slide3BtnM.style.background = "blue"
    slide1BtnM.style.background = "rgb(99, 173, 198)"
    slide2BtnM.style.background = "rgb(99, 173, 198)"
    slide4BtnM.style.background = "rgb(99, 173, 198)"

})


slide4BtnM.addEventListener("click", ()=>{
    //slide translate
    slider1M.style.transform = "translate(-500px, 000px)"
    slider2M.style.transform = "translate(-500px, 000px)"
    slider3M.style.transform = "translate(-500px, 000px)"
    slider4M.style.transform = "translate(000px, 000px)"


    // slide transition
    slider1M.style.transition = "all 0.50s"
    slider2M.style.transition = "all 0.50s"
    slider3M.style.transition = "all 0.50s"
    slider4M.style.transition = "all 0.50s"



    //btn size
    slide4BtnM.style.width= "40px"
    slide1BtnM.style.width= "20px"
    slide2BtnM.style.width= "20px"
    slide3BtnM.style.width= "20px"


    // color btn
    slide4BtnM.style.background = "blue"
    slide1BtnM.style.background = "rgb(99, 173, 198)"
    slide2BtnM.style.background = "rgb(99, 173, 198)"
    slide3BtnM.style.background = "rgb(99, 173, 198)"

})



/// box slider



let slide1B = document.querySelector(".slide__1b")
let slide2B = document.querySelector(".slide__2b")
let slider1b = document.querySelector(".slide-box1")
let slider2b = document.querySelector(".slide-box2")

slide1B.addEventListener("click", ()=>{
    // color btn
    slide1B.style.background = "blue"
    slide2B.style.background = "rgb(99, 173, 198)"

    //btn size
    slide1B.style.width= "40px"
    slide2B.style.width= "20px"

    //slider transform
    slider2b.style.transform = "translate(1500px, -300px)"
    slider2b.style.transition = "all 1s"
    slider1b.style.transform = "translate(0px, 0px)"
    slider1b.style.transition = "all 1s"
})


slide2B.addEventListener("click", ()=>{
    // color btn
    slide2B.style.background = "blue"
    slide1B.style.background = "rgb(99, 173, 198)"

    //btn size
    slide2B.style.width= "40px"
    slide1B.style.width= "20px"
    slide1B.style.transition = "all 0.40s"
    slide2B.style.transition = "all 0.40s"


    //slider transform
    slider2b.style.transform = "translate(0px, -300px)"
    slider2b.style.transition = "all 1s"
    slider1b.style.transform = "translate(-1500px, 0px)"
    slider1b.style.transition = "all 1s"
})





/// box slider mob




let slide1BM = document.querySelector(".slide__1b-mob")
let slide2BM = document.querySelector(".slide__2b-mob")
let slide3BM = document.querySelector(".slide__3b-mob")
let slide4BM = document.querySelector(".slide__4b-mob")
let slider1bM = document.querySelector(".slide-box1-mob")
let slider2bM = document.querySelector(".slide-box2-mob")
let slider3bM = document.querySelector(".slide-box3-mob")
let slider4bM = document.querySelector(".slide-box4-mob")




slide1BM.addEventListener("click", ()=>{
    
    //box translate
    slider1bM.style.transform = "translate(000px, 000px)"
    slider2bM.style.transform = "translate(700px, 000px)"
    slider3bM.style.transform = "translate(700px, 000px)"
    slider4bM.style.transform = "translate(700px, 000px)"

    
    // box transition
    slider2bM.style.transition = "all 0.50s"
    slider3bM.style.transition = "all 0.50s"
    slider4bM.style.transition = "all 0.50s"

    
    //btn size
    slide1BM.style.width= "40px"
    slide2BM.style.width= "20px"
    slide3BM.style.width= "20px"
    slide4BM.style.width= "20px"


    // color btn
    slide1BM.style.background = "blue"
    slide2BM.style.background = "rgb(99, 173, 198)"
    slide3BM.style.background = "rgb(99, 173, 198)"
    slide4BM.style.background = "rgb(99, 173, 198)"

})



slide2BM.addEventListener("click", ()=>{
    //box translate
    slider1bM.style.transform = "translate(-700px, 000px)"
    slider2bM.style.transform = "translate(000px, 000px)"
    slider3bM.style.transform = "translate(700px, 000px)"
    slider4bM.style.transform = "translate(700px, 000px)"

    
    // box transition
    slider1bM.style.transition = "all 0.50s"
    slider2bM.style.transition = "all 0.50s"
    slider3bM.style.transition = "all 0.50s"
    slider4bM.style.transition = "all 0.50s"

    
    //btn size
    slide2BM.style.width= "40px"
    slide1BM.style.width= "20px"
    slide3BM.style.width= "20px"
    slide4BM.style.width= "20px"


    // color btn
    slide2BM.style.background = "blue"
    slide1BM.style.background = "rgb(99, 173, 198)"
    slide3BM.style.background = "rgb(99, 173, 198)"
    slide4BM.style.background = "rgb(99, 173, 198)"

})




slide3BM.addEventListener("click", ()=>{
    //box translate
    slider1bM.style.transform = "translate(-700px, 000px)"
    slider2bM.style.transform = "translate(-700px, 000px)"
    slider3bM.style.transform = "translate(000px, 000px)"
    slider4bM.style.transform = "translate(700px, 000px)"

    
    // box transition
    slider1bM.style.transition = "all 0.50s"
    slider2bM.style.transition = "all 0.50s"
    slider3bM.style.transition = "all 0.50s"
    slider4bM.style.transition = "all 0.50s"

    
    //btn size
    slide3BM.style.width= "40px"
    slide1BM.style.width= "20px"
    slide2BM.style.width= "20px"
    slide4BM.style.width= "20px"


    // color btn
    slide3BM.style.background = "blue"
    slide1BM.style.background = "rgb(99, 173, 198)"
    slide2BM.style.background = "rgb(99, 173, 198)"
    slide4BM.style.background = "rgb(99, 173, 198)"

})




slide4BM.addEventListener("click", ()=>{
    
    //box translate
    slider1bM.style.transform = "translate(-700px, 000px)"
    slider2bM.style.transform = "translate(-700px, 000px)"
    slider3bM.style.transform = "translate(-700px, 000px)"
    slider4bM.style.transform = "translate(000px, 000px)"

    
    // box transition
    slider1bM.style.transition = "all 0.50s"
    slider2bM.style.transition = "all 0.50s"
    slider3bM.style.transition = "all 0.50s"
    slider4bM.style.transition = "all 0.50s"

    
    //btn size
    slide4BM.style.width= "40px"
    slide1BM.style.width= "20px"
    slide3BM.style.width= "20px"
    slide2BM.style.width= "20px"


    // color btn
    slide4BM.style.background = "blue"
    slide1BM.style.background = "rgb(99, 173, 198)"
    slide3BM.style.background = "rgb(99, 173, 198)"
    slide2BM.style.background = "rgb(99, 173, 198)"

})





//footer media

let showMedia = document.getElementById("show-media")
let instagram = document.getElementById("instagram")
let facebook = document.getElementById("facebook")
let twitter = document.getElementById("twitter")
let telegram = document.getElementById("telegram")

showMedia.addEventListener("click", ()=>{
    instagram.classList.add("instagram-transform")
    instagram.classList.remove("instagram-transform-back")
    facebook.classList.add("facebook-transform")
    facebook.classList.remove("facebook-transform-back")
    twitter.classList.add("twitter-transform")
    twitter.classList.remove("twitter-transform-back")
    telegram.classList.add("telegram-transform")
    telegram.classList.remove("telegram-transform-back")
})

showMedia.addEventListener("dblclick", ()=>{
    instagram.classList.remove("instagram-transform")
    instagram.classList.add("instagram-transform-back")
    facebook.classList.remove("facebook-transform")
    facebook.classList.add("facebook-transform-back")
    twitter.classList.remove("twitter-transform")
    twitter.classList.add("twitter-transform-back")
    telegram.classList.remove("telegram-transform")
    telegram.classList.add("telegram-transform-back")
})



//input email address

let emailIcon = document.getElementById("email-icon")
let email = document.getElementById("email")


emailIcon.addEventListener("click", ()=>{
    if(email.value.endsWith("@gmail.com")){
        alert("Your email has been sent successfully")
        email.style.border = " 3px solid rgba(51, 233, 51)"
        timeborder()
        
    }else{
        alert("Enter your email with @gmail.com")
        email.style.border = " 3px solid red"
        timeborder()
    }

    
})

function timeborder(){
    
setInterval(()=>{
    email.style.border = "none"
 },15000);
}







 