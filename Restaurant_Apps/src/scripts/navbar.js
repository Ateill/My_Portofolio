const navbar = document.getElementsByClassName('toggle-navbar');
const navBtn = document.querySelector('.toggle-button');
const navHome = document.getElementById('navbar-home');
const navFav = document.getElementById('navbar-favorite');
const navAbt = document.getElementById('navbar-about');

toggleBtn = () => {
  let menuopen = false;
  Array.from(navbar).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
      menuopen = true;
    } else {
      x.style.display = "none";
      menuopen = false;
    }
  })

  if(menuopen == true) {
      navBtn.classList.add('open');
  } else {
      navBtn.classList.remove('open');
  }
};