
let slider;

$(document).ready(function(){
	slider = $('.content_slide_1').slick({
    //к-сть показу слайдів
		slidesToShow: 1,
		 arrows: false,
		
    // автоматичний рух слайдів
		autoplay: false,
    //швидкість руху
		autoplaySpeed: 2000,
  dots: true,
	});
});
//код для переключення туди-сюди
$('#next').on('click',function(){
  slider.slick('slickNext');
})

$('#prev').on('click',function(){
  slider.slick('slickPrev');
})


//кнопка з меню
jQuery('.c-hamburger').on('click', function(){
	jQuery('.show-content').toggleClass('opened',500);
   jQuery('.c-hamburger').toggleClass('is-active',500);
})
// seacrh-menu open click
jQuery('.search-btn').on('click', function(){
  jQuery('.show-search-content').addClass('show-active',500);
})
//seacrh-menu close click
jQuery('.header__search-close').on('click', function(){
  jQuery('.show-search-content').removeClass('show-active',500);
})


// desc-menu open click
jQuery('.desc-header').on('click', function(){
  jQuery('.desc-content-show').toggleClass('desc-active',500);
})

// desc-analytics-menu open click
jQuery('.desc-header-anlt').on('click', function(){
  jQuery('.desc-analytics').toggleClass('desc-active',500);
})

// show-list-menu open click
jQuery('.main-text').on('click', function(){
  jQuery('.list-1').toggleClass('show-list',500);
})
// show-list-menu open click
jQuery('.main-text-1').on('click', function(){
  jQuery('.list-2').toggleClass('show-list',500);
})
// show-list-menu open click
jQuery('.main-text-2').on('click', function(){
  jQuery('.list-3').toggleClass('show-list',500);
})
// show-list-menu open click
jQuery('.main-text-3').on('click', function(){
  jQuery('.list-4').toggleClass('show-list',500);
})
// show-list-menu open click
jQuery('.main-text-4').on('click', function(){
  jQuery('.list-5').toggleClass('show-list',500);
})
// show-list-menu open click
jQuery('.main-text-5').on('click', function(){
  jQuery('.list-6').toggleClass('show-list',500);
})

//counter
const counters = document.querySelectorAll('.value');
const speed = 400;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

//radio-button
$('input[name="radio"]').click(function(){
  var target = $('#block-' + $(this).val());
  $('.block-text-radio').not(target).hide(0);
  target.fadeIn(500);
});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
