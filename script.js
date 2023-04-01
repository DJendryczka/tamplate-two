/* Navbar */
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animaton = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });
      burger.classList.toggle('toggle');
    });
  
    nav.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
  };

  const navChangeColor = () => {
    const nav = document.getElementById('navbar')
    const navText = document.getElementById('nav-links')
    const hamburger = document.getElementById('hamburger')
    console.log('zmiana')
    if(window.scrollY >=95){
        nav.classList.add('bg-white')
        navText.classList.add('nav-links-gray')
        hamburger.classList.add('nav-links-gray')
    }else{
        nav.classList.remove('bg-white')
        navText.classList.remove('nav-links-gray')
        hamburger.classList.remove('nav-links-gray')
    }
}

window.addEventListener('scroll', navChangeColor)
  
  navSlide();
  
