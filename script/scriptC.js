
let redC = document.getElementById("redC")
let greenC = document.getElementById("greenC")
let orangeC = document.getElementById("orangeC")
let sections = document.querySelectorAll (".cc")
let sectionsCB = document.querySelectorAll (".c-b")
let mouseOC = document.querySelectorAll (".m-o")
let mouseOCo = document.querySelectorAll (".m-o-o")
let hoverIcons = document.querySelectorAll (".h-i")

let openOption = document.querySelector(".bxs-cog")
let openn = document.getElementById("open")


openOption.addEventListener("click", ()=>{
    openOption.style.transform = "translate(000px, -80px)"
    openOption.style.transition = "all 2s"
    openn.style.transform = "translate(000px, 000px)"
    openn.style.transition = "all 1.8s"
    
})
openOption.addEventListener("dblclick", ()=>{
    openOption.style.transform = "translate(000px, 70px)"
    openOption.style.transition = "all 2s"
    openn.style.transform = "translate(-450px, 000px)"
    openn.style.transition = "all 1.8s"
    
})
redC.addEventListener("click", ()=>{
       sections.forEach((item)=>{
    item.style.color = "red"
}) 

sectionsCB.forEach((cb)=>{
    cb.style.background = "rgb(137, 29, 29)"
}) 


mouseOC.forEach((mo)=>{
    
    mo.style.background = "red"
    mo.addEventListener("mouseover" ,()=>{
            mo.style.background = "white"
            mo.style.color = "red"
        })
        mo.addEventListener("mouseout" ,()=>{
            mo.style.background = "red"
            mo.style.color = "white"
        })
}) 


mouseOCo.forEach((moo)=>{
    
    moo.addEventListener("mouseover" ,()=>{
            moo.style.background = "red"
            moo.style.color = "white"
        })
        moo.addEventListener("mouseout" ,()=>{
            moo.style.background = "white"
            moo.style.color = "red"
        })
}) 


hoverIcons.forEach((icon)=>{
    icon.style.color =" rgb(137, 29, 29)"


    icon.addEventListener("mouseover", ()=>{
        icon.style.color = "red"
    })

    icon.addEventListener("mouseout" ,()=>{
        icon.style.color = " rgb(137, 29, 29)"
    })
})

})


greenC.addEventListener("click", ()=>{
    sections.forEach((item)=>{
    item.style.color = "rgb(0, 150, 0)"
}) 

sectionsCB.forEach((cb)=>{
    cb.style.background = "rgb(0, 100, 0)"
}) 


mouseOC.forEach((mo)=>{
    
    mo.style.background = "rgb(0, 150, 0)"
    mo.addEventListener("mouseover" ,()=>{
            mo.style.background = "white"
            mo.style.color = "rgb(0, 150, 0)"
        })
        mo.addEventListener("mouseout" ,()=>{
            mo.style.background = "rgb(0, 150, 0)"
            mo.style.color = "white"
        })
}) 


mouseOCo.forEach((moo)=>{
    
    moo.addEventListener("mouseover" ,()=>{
            moo.style.background = "rgb(0, 150, 0)"
            moo.style.color = "white"
        })
        moo.addEventListener("mouseout" ,()=>{
            moo.style.background = "white"
            moo.style.color = "rgb(0, 150, 0)"
        })
}) 


hoverIcons.forEach((icon)=>{
    icon.style.color =" rgb(0, 100, 0)"


    icon.addEventListener("mouseover", ()=>{
        icon.style.color = "rgb(0, 150, 0)"
    })

    icon.addEventListener("mouseout" ,()=>{
        icon.style.color = " rgb(0, 100, 0)"
    })
})
 







     })


     orangeC.addEventListener("click", ()=>{
        sections.forEach((item)=>{
     item.style.color = "rgb(207, 140, 16)"
 }) 




 sectionsCB.forEach((cb)=>{
    cb.style.background = "rgb(207, 140, 16)"
}) 


mouseOC.forEach((mo)=>{
    
    mo.style.background = " orange"
    mo.addEventListener("mouseover" ,()=>{
            mo.style.background = "white"
            mo.style.color = "orange"
        })
        mo.addEventListener("mouseout" ,()=>{
            mo.style.background = "orange"
            mo.style.color = "white"
        })
}) 


mouseOCo.forEach((moo)=>{
    
    moo.addEventListener("mouseover" ,()=>{
            moo.style.background = "orange"
            moo.style.color = "white"
        })
        moo.addEventListener("mouseout" ,()=>{
            moo.style.background = "white"
            moo.style.color = " orange"
        })
}) 


hoverIcons.forEach((icon)=>{
    icon.style.color =" rgb(207, 140, 16)"


    icon.addEventListener("mouseover", ()=>{
        icon.style.color = " orange"
    })

    icon.addEventListener("mouseout" ,()=>{
        icon.style.color = " rgb(207, 140, 16)"
    })
})
 







     })

