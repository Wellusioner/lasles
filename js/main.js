const body = document.body,
      header = document.querySelector('.header'),
      headerBtns = document.querySelectorAll('.hamburger, .header-mask, .close-menu'),
      menulinks = document.querySelectorAll('.menu-link'),
      allSection = document.querySelectorAll('.section'),
      upBtn = document.querySelector('.upBtn');

upBtn.addEventListener('click', function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function(){
  handleActiveMenu();
});

function handleActiveMenu(){
  allSection.forEach(function(section){
    const ch = Math.floor(document.documentElement.clientHeight / 2);
    const id = section.getAttribute('id');
    if(id){
      const a = header.querySelector('nav a[href="#'+id+'"]');
      if(a && (window.scrollY + ch > section.offsetTop)){
        menulinks.forEach(function(link){
          link.classList.remove('active');
        });
        a.classList.add('active');
      }else{
        a.classList.remove('active');
      }
    }
  });
}

menulinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    link.classList.add('active');
    const id = link.getAttribute('href');
    if(id){
      const block = document.querySelector(id);
      if(window.innerWidth){
        body.classList.remove('overflowed');
        header.classList.remove('active');
      }
      if(block){
        const offsetTop = block.offsetTop - header.clientHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

headerBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    body.classList.toggle('overflowed');
    header.classList.toggle('active');
  });
});

//const feedbackSlider = new Swiper('.feedback-slider', {
//  spaceBetween: 120,
//  pagination: {
//    el: '.feedback-section .swiper-pagination',
//    clickable: true
//  },
//  navigation: {
//    prevEl: '.feedback-navigation .prev-button',
//    nextEl: '.feedback-navigation .next-button',
//  }
//});