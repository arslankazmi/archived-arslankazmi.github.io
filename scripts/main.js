document.addEventListener("DOMContentLoaded", function(event) {
 
  
  anchors.options = {
  placement: 'right',
  visible: 'touch',
  icon: ''
};
  
  anchors.add();
  anchors.add('h1');
  //anchors.add('.post > h1','.post > h2','.post > h3','.post > h4','.post > h5','.post > h6');
});