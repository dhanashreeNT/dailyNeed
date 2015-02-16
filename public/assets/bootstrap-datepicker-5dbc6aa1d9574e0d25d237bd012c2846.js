/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(e){var t=function(t,s){if(this.element=e(t),this.format=a.parseFormat(s.format||this.element.data("date-format")||"mm/dd/yyyy"),this.picker=e(a.template).appendTo("body").on({click:e.proxy(this.click,this)}),this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on"):!1,this.isInput?this.element.on({focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this)}):this.component?this.component.on("click",e.proxy(this.show,this)):this.element.on("click",e.proxy(this.show,this)),this.minViewMode=s.minViewMode||this.element.data("date-minviewmode")||0,"string"==typeof this.minViewMode)switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}if(this.viewMode=s.viewMode||this.element.data("date-viewmode")||0,"string"==typeof this.viewMode)switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0}this.startViewMode=this.viewMode,this.weekStart=s.weekStart||this.element.data("date-weekstart")||0,this.weekEnd=0===this.weekStart?6:this.weekStart-1,this.onRender=s.onRender,this.fillDow(),this.fillMonths(),this.update(),this.showMode()};t.prototype={constructor:t,show:function(t){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),e(window).on("resize",e.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault()),!this.isInput;var a=this;e(document).on("mousedown",function(t){0==e(t.target).closest(".datepicker").length&&a.hide()}),this.element.trigger({type:"show",date:this.date})},hide:function(){this.picker.hide(),e(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||e(document).off("mousedown",this.hide),this.element.trigger({type:"hide",date:this.date})},set:function(){var e=a.formatDate(this.date,this.format);this.isInput?this.element.prop("value",e):(this.component&&this.element.find("input").prop("value",e),this.element.data("date",e))},setValue:function(e){this.date="string"==typeof e?a.parseDate(e,this.format):new Date(e),this.set(),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},place:function(){var e=this.component?this.component.offset():this.element.offset();this.picker.css({top:e.top+this.height,left:e.left})},update:function(e){this.date=a.parseDate("string"==typeof e?e:this.isInput?this.element.prop("value"):this.element.data("date"),this.format),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},fillDow:function(){for(var e=this.weekStart,t="<tr>";e<this.weekStart+7;)t+='<th class="dow">'+a.dates.daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){for(var e="",t=0;12>t;)e+='<span class="month">'+a.dates.monthsShort[t++]+"</span>";this.picker.find(".datepicker-months td").append(e)},fill:function(){var e=new Date(this.viewDate),t=e.getFullYear(),s=e.getMonth(),i=this.date.valueOf();this.picker.find(".datepicker-days th:eq(1)").text(a.dates.months[s]+" "+t);var n=new Date(t,s-1,28,0,0,0,0),h=a.getDaysInMonth(n.getFullYear(),n.getMonth());n.setDate(h),n.setDate(h-(n.getDay()-this.weekStart+7)%7);var o=new Date(n);o.setDate(o.getDate()+42),o=o.valueOf();for(var r,d,l,c=[];n.valueOf()<o;)n.getDay()===this.weekStart&&c.push("<tr>"),r=this.onRender(n),d=n.getFullYear(),l=n.getMonth(),s>l&&d===t||t>d?r+=" old":(l>s&&d===t||d>t)&&(r+=" new"),n.valueOf()===i&&(r+=" active"),c.push('<td class="day '+r+'">'+n.getDate()+"</td>"),n.getDay()===this.weekEnd&&c.push("</tr>"),n.setDate(n.getDate()+1);this.picker.find(".datepicker-days tbody").empty().append(c.join(""));var p=this.date.getFullYear(),m=this.picker.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");p===t&&m.eq(this.date.getMonth()).addClass("active"),c="",t=10*parseInt(t/10,10);var u=this.picker.find(".datepicker-years").find("th:eq(1)").text(t+"-"+(t+9)).end().find("td");t-=1;for(var w=-1;11>w;w++)c+='<span class="year'+(-1===w||10===w?" old":"")+(p===t?" active":"")+'">'+t+"</span>",t+=1;u.html(c)},click:function(t){t.stopPropagation(),t.preventDefault();var s=e(t.target).closest("span, td, th");if(1===s.length)switch(s[0].nodeName.toLowerCase()){case"th":switch(s[0].className){case"switch":this.showMode(1);break;case"prev":case"next":this.viewDate["set"+a.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+a.modes[this.viewMode].navFnc].call(this.viewDate)+a.modes[this.viewMode].navStep*("prev"===s[0].className?-1:1)),this.fill(),this.set()}break;case"span":if(s.is(".month")){var i=s.parent().find("span").index(s);this.viewDate.setMonth(i)}else{var n=parseInt(s.text(),10)||0;this.viewDate.setFullYear(n)}0!==this.viewMode&&(this.date=new Date(this.viewDate),this.element.trigger({type:"changeDate",date:this.date,viewMode:a.modes[this.viewMode].clsName})),this.showMode(-1),this.fill(),this.set();break;case"td":if(s.is(".day")&&!s.is(".disabled")){var h=parseInt(s.text(),10)||1,i=this.viewDate.getMonth();s.is(".old")?i-=1:s.is(".new")&&(i+=1);var n=this.viewDate.getFullYear();this.date=new Date(n,i,h,0,0,0,0),this.viewDate=new Date(n,i,Math.min(28,h),0,0,0,0),this.fill(),this.set(),this.element.trigger({type:"changeDate",date:this.date,viewMode:a.modes[this.viewMode].clsName})}}},mousedown:function(e){e.stopPropagation(),e.preventDefault()},showMode:function(e){e&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+e))),this.picker.find(">div").hide().filter(".datepicker-"+a.modes[this.viewMode].clsName).show()}},e.fn.datepicker=function(a,s){return this.each(function(){var i=e(this),n=i.data("datepicker"),h="object"==typeof a&&a;n||i.data("datepicker",n=new t(this,e.extend({},e.fn.datepicker.defaults,h))),"string"==typeof a&&n[a](s)})},e.fn.datepicker.defaults={onRender:function(){return""}},e.fn.datepicker.Constructor=t;var a={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],dates:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,a.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},parseFormat:function(e){var t=e.match(/[.\/\-\s].*?/),a=e.split(/\W+/);if(!t||!a||0===a.length)throw new Error("Invalid date format.");return{separator:t,parts:a}},parseDate:function(e,t){var a,s=e.split(t.separator),e=new Date;if(e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),s.length===t.parts.length){for(var i=e.getFullYear(),n=e.getDate(),h=e.getMonth(),o=0,r=t.parts.length;r>o;o++)switch(a=parseInt(s[o],10)||1,t.parts[o]){case"dd":case"d":n=a,e.setDate(a);break;case"mm":case"m":h=a-1,e.setMonth(a-1);break;case"yy":i=2e3+a,e.setFullYear(2e3+a);break;case"yyyy":i=a,e.setFullYear(a)}e=new Date(i,h,n,0,0,0)}return e},formatDate:function(e,t){var a={d:e.getDate(),m:e.getMonth()+1,yy:e.getFullYear().toString().substring(2),yyyy:e.getFullYear()};a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m;for(var e=[],s=0,i=t.parts.length;i>s;s++)e.push(a[t.parts[s]]);return e.join(t.separator)},headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};a.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+a.headTemplate+'<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">'+a.headTemplate+a.contTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+a.headTemplate+a.contTemplate+"</table></div></div>"}(window.jQuery);