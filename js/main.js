
//header text 
window.addEventListener('scroll', () => {
    const movingText = document.getElementById("movingText");
    const scrolled = window.pageYOffset;
    const left = scrolled * 3;
  
    movingText.style.transform = `translate3d(-${left}px, 0px, 0px)`;
  })

// date for footer
const footerYear = document.querySelector('.footer__year')

const handlePresentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year  
}
handlePresentYear();

//navigation scroll
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('.nav');
  var navItems = document.querySelectorAll('.nav__item');

  function changeNavTextColor() {
    var scrollPosition = window.scrollY;

  
    var isMobile = window.innerWidth <= 768; 

    for (var i = 0; i < navItems.length; i++) {
      var navItem = navItems[i];

      if (isMobile) {
        nav.style.backgroundColor = 'rgb(2, 137, 173)'; 
        navItem.style.color = 'white';
      } else {
        nav.style.backgroundColor = ''; 
        if (scrollPosition > 3605) {
          navItem.style.color = '';
        } else if (scrollPosition > 2816) {
          navItem.style.color = 'rgb(2, 137, 173)';
        } else if (scrollPosition > 1584) {
          navItem.style.color = '';
        } else if (scrollPosition > 712) {
          navItem.style.color = 'rgb(2, 137, 173)';
        } else if (scrollPosition > 96) {
          navItem.style.color = 'black';
        } else {
          navItem.style.color = '';
        }
      }

      navItem.style.setProperty('color', navItem.style.color, 'important');
    }
  }

  window.addEventListener('scroll', changeNavTextColor);
});


//form contact
const btn = document.getElementById('button');

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  btn.value = 'Sending...';
  
  const serviceID = 'default_service';
  const templateID = 'template_o8vl1tg';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send message';
      alert('Thanks for subscribing to our mailing list!');

      document.getElementById('contactForm').reset();
    }, (err) => {
      btn.value = 'Send message';
      alert(JSON.stringify(err));
    });
});



//animation for section info 
window.addEventListener('scroll', () => {
  const movingTitle = document.getElementById("movingTitle");
  const scrolled = window.pageYOffset;
  const startScroll = 240;
  const maxScroll = 900; 
  let right = 0;

  if (window.innerWidth >= 576) { 
    if (scrolled >= startScroll && scrolled <= maxScroll) {
      right = (scrolled - startScroll) * 1;
    } else if (scrolled > maxScroll) {
      right = (maxScroll - startScroll) * 1;
    }
  }

  movingTitle.style.transform = `translate3d(+${right}px, 0px, 0px)`;
});

//animation for phone section view
var viewBox = document.querySelector('.view__box');
var viewBoxImg = viewBox.querySelector('.view__box-img');
var viewBoxText = viewBox.querySelector('.view__box-text');

viewBoxImg.addEventListener('click', function() {
  viewBoxImg.classList.add('view__box-text--first');
  viewBoxText.classList.remove('view__box-img--one');
});

viewBoxText.addEventListener('click', function() {
  viewBoxImg.classList.toggle('view__box-text--first');
  viewBoxText.classList.toggle('view__box-img--one');
});




/**
 * ----------------------------------------
 * Konrad Kukałowicz - author
 * ----------------------------------------
 */


