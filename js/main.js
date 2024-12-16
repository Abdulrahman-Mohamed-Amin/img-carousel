// strat cursul 
let slideImg = document.querySelectorAll(".slide img")
let slide = document.querySelector(".slide")
let next = document.querySelector(".slides .next")
let prev = document.querySelector(".slides .prev")
let slideIdx = 1
let slideInterval;
function slideFun () {
    slideInterval = setInterval(() => {
        slide.style.transform = `translate(-${ slideIdx * 100}%)`
        
        slideIdx++
        if(slideIdx > 3){
            slideIdx = 0
        }
    }, 3000);
    
    next.addEventListener("click" , (e) =>{
        clearInterval(slideInterval)
        slideIdx--
        if(slideIdx < 0){
            slideIdx = 3
        }
        slide.style.transform = `translate(-${ slideIdx * 100}%)`
        
    })
    
    prev.addEventListener("click" , (e) =>{
        clearInterval(slideInterval)
        slideIdx++
        
        if(slideIdx > 3){
            slideIdx = 0
        }
        slide.style.transform = `translate(-${ slideIdx * 100}%)`
        
    })
}
slideFun()