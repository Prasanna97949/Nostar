var offerBar = document.querySelector(".offerbar")

offerClose = document.getElementById("offer-close")
offerClose.addEventListener("click",function()
{
    offerBar.style.display="none"
})

var sidebarOpen =document.getElementById("sidebar-open")
var sidebar = document.querySelector(".sidebar")
sidebarOpen.addEventListener("click",function()
{
    sidebar.style.marginLeft="0%"
})

var sidebarClose = document.querySelector(".sidebar-close")
sidebarClose.addEventListener("click",function()
{
    sidebar.style.marginLeft = "-60%"
})



var leftbutton = document.getElementById("left")
var rightbutton =document.getElementById("right")
var sliderimage= document.querySelector(".banner-image")
var slidermargin=0


rightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

leftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)





var like = document.querySelectorAll(".likebutton")

like.forEach(function(liked){
    liked.addEventListener("click",function(event){
        
        if(event.target.src.indexOf("blackheart")>0)
        {
            event.target.src="./images/redheart.png"
        }
        else{
            event.target.src="./images/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = document.querySelectorAll(".scroll")
    elements.forEach(function(scroll){
        windowHeight = window.innerHeight
     var scrollbound = scroll.getBoundingClientRect()
     if(windowHeight>scrollbound.top-100){
    scroll.classList.remove("opac")

    }
    
})
    
})