/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){var n=i(t,e)?o:r;n(t,e)}var i,r,o;"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},r=function(t,e){t.classList.add(e)},o=function(t,e){t.classList.remove(e)}):(i=function(t,n){return e(n).test(t.className)},r=function(t,e){i(t,e)||(t.className=t.className+" "+e)},o=function(t,n){t.className=t.className.replace(e(n)," ")});var a={hasClass:i,addClass:r,removeClass:o,toggleClass:n,has:i,add:r,remove:o,toggle:n};"function"==typeof define&&define.amd?define(a):t.classie=a}(window);