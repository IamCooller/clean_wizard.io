var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    loop: true,
    zoom:true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper2 = new Swiper('.swiper-container-s2', {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination-s2',
      clickable: true,
    },
    
mousewheel: true,
keyboard: true,
});