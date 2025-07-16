var sidenav = document.getElementById("side-nav")
var navclose = document.getElementById("nav-close")
var sidbar = document.getElementById("side-bar")


sidenav.addEventListener("click",function(){
    sidbar.style.right =0
})

navclose.addEventListener("click",function(){
    sidbar.style.right = "-50%"
})