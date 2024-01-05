
// nav function
const bar = document.getElementsByClassName('bar');
const navbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener("click" , () => {
    navbar.classList.add('.active');
  });
}
