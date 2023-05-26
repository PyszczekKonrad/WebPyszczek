"use strict";

//header text 
window.addEventListener('scroll', function () {
  var movingText = document.getElementById("movingText");
  var scrolled = window.pageYOffset;
  var left = scrolled * 3;
  movingText.style.transform = "translate3d(-".concat(left, "px, 0px, 0px)");
}); // date for footer

var footerYear = document.querySelector('.footer__year');

var handlePresentYear = function handlePresentYear() {
  var year = new Date().getFullYear();
  footerYear.innerText = year;
};

handlePresentYear(); //navigation scroll

document.addEventListener('DOMContentLoaded', function () {
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
}); //form contact

var btn = document.getElementById('button');
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  btn.value = 'Sending...';
  var serviceID = 'default_service';
  var templateID = 'template_o8vl1tg';
  emailjs.sendForm(serviceID, templateID, this).then(function () {
    btn.value = 'Send message';
    alert('Thanks for subscribing to our mailing list!');
    document.getElementById('contactForm').reset();
  }, function (err) {
    btn.value = 'Send message';
    alert(JSON.stringify(err));
  });
}); //animation for section info 

window.addEventListener('scroll', function () {
  var movingTitle = document.getElementById("movingTitle");
  var scrolled = window.pageYOffset;
  var startScroll = 240;
  var maxScroll = 900;
  var right = 0;

  if (window.innerWidth >= 576) {
    if (scrolled >= startScroll && scrolled <= maxScroll) {
      right = (scrolled - startScroll) * 1;
    } else if (scrolled > maxScroll) {
      right = (maxScroll - startScroll) * 1;
    }
  }

  movingTitle.style.transform = "translate3d(+".concat(right, "px, 0px, 0px)");
});
/**
 * ----------------------------------------
 * Konrad Kukałowicz - author
 * ----------------------------------------
 */