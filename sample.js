// external js: masonry.pkgd.js

$(window).load(function(){
  $('.grid').masonry({
    columnWidth: 240,
    itemSelector: '.grid-item',
    isFitWidth: true
  });
});
