var sidenav = document.getElementById("side-nav")
var navclose = document.getElementById("nav-close")
var sidbar = document.getElementById("side-bar")
var search = document.getElementById("search")
var produvtlist = productcontainer.querySelectorAll("div")

console.log(produvtlist)


sidenav.addEventListener("click",function(){
    sidbar.style.right =0
})

navclose.addEventListener("click",function(){
    sidbar.style.right = "-50%"
})

search.addEventListener("keyup",function(){

    var searchproduct = event.target.value.toUpperCase()
    
    for(count=0; count<produvtlist.length; count++){
        var productname = produvtlist[count].querySelector("h1").textContent.toUpperCase()
        if(productname.indexOf(searchproduct)<0){
            produvtlist[count].style.display ="none"
        }

        else{
            produvtlist[count].style.display ="block"
        }
    }
})