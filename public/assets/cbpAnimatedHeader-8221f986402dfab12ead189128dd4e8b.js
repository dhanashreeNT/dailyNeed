/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function t(){window.addEventListener("scroll",function(){o||(o=!0,setTimeout(e,250))},!1)}function e(){var t=n();t>=a?classie.add(r,"navbar-shrink"):classie.remove(r,"navbar-shrink"),o=!1}function n(){return window.pageYOffset||i.scrollTop}var i=document.documentElement,r=document.querySelector(".navbar-default"),o=!1,a=300;t()}();