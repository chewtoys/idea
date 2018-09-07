
import { addNewClass, removeClass } from './class-module'

document.addEventListener('DOMContentLoaded',function(){
    let toggles = document.querySelectorAll('.cases .item')
    toggles.forEach(((toggle, index) => {
        
        toggle.addEventListener('mouseover', function(e) {
			// Prevent the default link behavior
            e.preventDefault();

            // 移除上一次的选中状态
            removeClass(document.getElementsByClassName('img__active'), 'img__active')
            removeClass(document.getElementsByClassName('sub__active'), 'sub__active')
            // 设置新的选中状态
            addNewClass(toggle.children[0], 'img__active')
            addNewClass(document.getElementById('sub-' + toggle.dataset.icon), 'sub__active')

        }, false);

    }))
})