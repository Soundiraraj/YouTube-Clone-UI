var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".siderbar");

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
}