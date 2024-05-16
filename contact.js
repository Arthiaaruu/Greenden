//sidenavbar mbl open close

var sidemenu = document.getElementById("menuicon")
var sidenav =document.getElementById("sidenav")
var close = document.getElementById("closenav")

sidemenu.addEventListener("click",function(){
    sidenav.style.right=0
})

close.addEventListener("click",function(){
    sidenav.style.right ="-50%"
})