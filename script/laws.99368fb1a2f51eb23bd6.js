!function(){"use strict";var e,t,c,a;e="header__bottom_active",t=document.querySelector(".".concat("header__burger")),c=document.querySelector(".".concat("header__close")),a=document.querySelector(".".concat("header__bottom")),t.addEventListener("click",(function(){a.classList.add("".concat(e))})),c.addEventListener("click",(function(){a.classList.remove("".concat(e))})),a.addEventListener("click",(function(e){e.target.closest(".header-nav__link_menu")&&(e.target.closest(".header-nav__title")&&(e.target.closest(".header-nav__link_menu").querySelector(".header-nav__menu").classList.toggle("header-nav__menu_active"),e.target.closest(".header-nav__title").querySelector("svg").classList.toggle("header-nav__link_arrow")),e.target.closest(".header-nav-submenu")&&e.target.closest(".header-nav-submenu__title")&&(e.target.closest(".header-nav-submenu").querySelector(".header-nav-submenu__wr").classList.toggle("header-nav-submenu__wr_active"),e.target.closest(".header-nav-submenu").querySelector("svg").classList.toggle("header-nav-submenu__arrow_active")))})),function(e,t,c,a){var s=document.querySelector(".".concat("modal-subscription")),n=document.querySelector(".".concat("footer__subscription")),r=s.querySelectorAll(".".concat("modal-subscription__close"));n&&s&&n.addEventListener("click",(function(e){e.preventDefault(),s.classList.add("".concat(c))})),r.forEach((function(e){e.addEventListener("click",(function(){s.classList.remove("".concat(c))}))}))}(0,0,"modal-subscription_active"),document.querySelector(".laws__list").addEventListener("click",(function(e){e.target.closest("button")&&e.target.closest("li").querySelector(".laws__sublist").classList.toggle("laws__sublist_active")}))}();