
/* ----------------------------------------------------- 
	---------------------  工具函数  ----------------------
	------------------------------------------------------ */

import * as common from './common';

/* ----------------------------------------------------- 
	----------------------  Main  ------------------------
	------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', function(){

})
// 监听返回顶部
var scrollTop = document.getElementById('scroll-top');
scrollTop.addEventListener('click', function(e) {
	e.preventDefault();
	common.smoothScroll();
}, false);
window.addEventListener('scroll', function(){
	var offet = window.pageYOffset;
	if (offet > 1000) {
		common.removeClass(scrollTop, 'hide');
	} else {
		common.addNewClass(scrollTop, 'hide');
	}
});