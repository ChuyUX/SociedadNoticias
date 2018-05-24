if($('.post__video').length > 0){
  $('.post__video').css('height', $('.post__video').height());
  $(window).scroll(function(){
    if($("body").scrollTop() > $('.post__content').position().top){
      $('.post__video-wrapper').addClass('post__video--fixed');
    } else {
      $('.post__video-wrapper').removeClass('post__video--fixed');
    }
  });
}

$('.js-post-gallery').slick({
  infinite: false
});

var lastScrollTop = 0;
$(window).scroll(function(){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('header').removeClass('header--fixed');
       $('.post__preview').hide();
   } else {
      $('header').addClass('header--fixed');
   }
   lastScrollTop = st;
});

$('.post__preview-btn').click(function(){
  $('.post__preview').hide();
  return false;
});

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
