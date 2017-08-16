'use strict';

let mainNav    = document.getElementById('mainNav'),
    navButtons = mainNav.querySelectorAll('.main-nav__link');


const animatedScrollTo = (targetElement, time) => {
  let initialPosition = document.body.scrollTop,
      finalPosition   = Math.ceil(targetElement.getBoundingClientRect().top + initialPosition),
      distanceToScroll= finalPosition - initialPosition,
      scrollFragment  = distanceToScroll / time;
      
      animateScroll(scrollFragment, finalPosition);
};

const animateScroll = (scrollFragment, finalPosition) => {
  let animatedScroll = setInterval(function() {
    document.body.scrollTop += scrollFragment;
    if(scrollFragment > 0) {
      if(document.body.scrollTop > finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll);
    } else {
      if(document.body.scrollTop < finalPosition - (scrollFragment / 2)) clearInterval(animatedScroll);
    }   
  },1);
};

mainNav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        //console.log(e.target.hash);
        e.preventDefault();
        animatedScrollTo(e.target, 200);
    }
});



window.addEventListener('resize', () => {
    if(window.innerWidth <= 720) {
        if(mainNav.classList.length > 1) {
            mainNav.classList.remove('main-nav--display');
        }
    }
});

window.addEventListener('scroll', () => {
    if(window.innerWidth >= 720) {
        mainNav.classList.add('main-nav--display');
        if(scrollY < 400) mainNav.classList.remove('main-nav--display');
    }
});

