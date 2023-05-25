
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
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;


  document.getElementById('contactForm').reset();

 
  emailjs.send('service_z7oyfvi', 'template_e6n5u7f', {
    from_name: name,
    from_email: email,
    message: message
  }).then(function(response) {
    alert('Send succeed!');
  }, function(error) {
    console.error('Send fail:', error);
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


/**
 * ----------------------------------------
 * Konrad Kukałowicz - author
 * ----------------------------------------
 */


