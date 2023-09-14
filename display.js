
let loader = document.getElementById('screen_loader')
window.addEventListener('load' , function(){
  loader.style.display = 'none';
})




// parallax image work

let stars = document.getElementById("stars");
let aeroplane = document.getElementById("aeroplane");
let building = document.getElementById("building");
let f_building = document.getElementById("f_building");
let nav_bar = document.getElementsByClassName("navigation_bat_items");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.top = value * 0.75 + "px";
  building.style.top = value * 0.75 + "px";
  aeroplane.style.left = value * -2.5 + "px";
});

let magic_works = document.getElementById("magic_works");
magic_works.onmouseover = function () {
  mouseOver();
};

