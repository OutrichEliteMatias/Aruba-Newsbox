// JavaScript Document
/* eslint-env es6 */
/* eslint-disable */


window.onscroll = function() {stickyNav()};


var sticky = navbar.offsetTop;


function stickyNav() {
  if (window.pageYOffset >= sticky) {
    $('header').addClass("sticky");
	   $('header').removeClass('posRelative');
	  
  } else {
    $('header').removeClass("sticky");
	  $('header').addClass('posRelative');
  }
}



const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
   toggle.querySelector("a").innerHTML = "<img src='images/menu-icon.png' alt=''/>";
	  $('nav').removeClass('height-100');
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<img src='images/close_menu.svg' alt=''/>";
	$('nav').addClass('height-100'); 
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

//$(".has-submenu").click(function(){
//	if($(".submenu-active .submenu").css("display")=="block") {
//		$('.bottom-header').addClass('white-bg');
//	} else {
//		$('.bottom-header').removeClass('white-bg');
//	}
//});

//$(document).ready(function () {
//	$(window).on("resize", function (e) {
//        checkScreenSize();
//    });

 //    checkScreenSize();

 //    function checkScreenSize(){
// 		var newWindowWidth = $(window).width();
// 		if (newWindowWidth < 783.99 ) {
// 			$('.bottom-header').addClass('white-bg');
 //        } else {
// 			$('.bottom-header').removeClass('white-bg');
// 		} 
//     }
// });

