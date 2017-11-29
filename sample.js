$(window).on("load",function(){
  $('.grid').masonry({
    columnWidth: 240,
    itemSelector: '.grid-item',
		transitionDuration: '1.0s',
    isFitWidth: true
  });
});
