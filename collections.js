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
// search bar
var product = document.querySelector(".product-image")
var searchbox = document.getElementById("searchbox")
var productlist = product.querySelectorAll("div")

    searchbox.addEventListener("keyup",function(){
var enteredValue = event.target.value.toUpperCase()

for(count =0; count<productlist.length; count = count+1)
    {
    var productname = productlist[count].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(enteredValue)<0){
    productlist[count].style.display = "none"
    }
else{
    productlist[count].style.display = "block"
}
}

    })
  