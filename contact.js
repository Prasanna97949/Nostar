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