
// Add Class
export function addNewClass (elements, myClass) {
  // if there are no elements, we're done
  if (!elements) { return; }
  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
      elements = document.querySelectorAll(elements);
  }
  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }
  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {
      // if class is not already found
      if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
      // add class
      elements[i].className += ' ' + myClass;
      }
  }
}

// Remove Class
export function removeClass (elements, myClass) {
  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
      elements = document.querySelectorAll(elements);
  }
  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }
  // create pattern to find class name
  var reg = new RegExp('(^| )'+myClass+'($| )','g');
  // remove class from all chosen elements
  for (var i=0; i<elements.length; i++) {
      elements[i].className = elements[i].className.replace(reg,' ');
  }
}

// 返回顶部跳转动画
export function smoothScroll () {
  // Calculate how far and how fast to scroll
  var startLocation = window.pageYOffset;
  var endLocation = 0;
  var distance = endLocation - startLocation;
  var increments = distance/(500/16);
  // Scroll the page by an increment, and check if it's time to stop
  var animateScroll = function () {
      window.scrollBy(0, increments);
      if (window.pageYOffset === 0) {
        clearInterval(runAnimation);
      }
  };
  // Loop the animation function
  var runAnimation = setInterval(animateScroll, 16);
}