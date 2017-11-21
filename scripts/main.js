

document.addEventListener("DOMContentLoaded", function(event) {
 
  
  anchors.options = {
  placement: 'right',
  visible: 'touch',
  icon: ''
};
  
  anchors.add();
  anchors.add('h1');
});

var cb = function() 
{
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = '/style.css';
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
      
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

if (raf) 
	raf(cb);
else 
	window.addEventListener('load', cb);