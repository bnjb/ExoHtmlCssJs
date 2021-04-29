var openNav = () => {
    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("buttonCloseOpen").style.marginLeft = "250px";
    document.getElementById("buttonCloseOpen").style.visibility = "hidden";
    document.getElementById("content").style.marginLeft = "250px";
}
  
var closeNav = () => {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("buttonCloseOpen").style.marginLeft= "0";
    document.getElementById("buttonCloseOpen").style.visibility = "visible";
    document.getElementById("content").style.marginLeft= "0";
}