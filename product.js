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

//search function enable code
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){
        var productname = productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }

    }


})

