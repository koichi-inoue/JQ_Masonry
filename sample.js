// external js: masonry.pkgd.js

$(window).on("load",function(){
  $('.grid').masonry({
    columnWidth: 240,
    itemSelector: '.grid-item',
    isFitWidth: true
  });
});
