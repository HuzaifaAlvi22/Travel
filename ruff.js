// 2nd page starts with animation work of hover + button

let line_changer = document.getElementsByClassName("line_changer");

function mouseOver() {
  magic_works.classList.add("working");
  making_random_lines();
}

function making_random_lines() {

  let number = Math.random();

  if (number > 0.9) {
    magic_works.textContent = "Have you seen a real dragon";
    magic_works.style.background =
      "linear-gradient( rgb(249, 221, 168) 0% , yellow 40%)";
  }
   else if (number >= 0.8 && number < 0.9) {
    magic_works.textContent = "Go Expllore the world";
    magic_works.style.backgroundColor = "pink";
  } 
  else if (number >= 0.7 && number < 0.8) {
    magic_works.textContent = "Enjoy your life ..";
    magic_works.style.background =
      "linear-gradient( rgb(249, 221, 168) 0% , purple 40%)";
  }
   else if (number >= 0.6 && number < 0.7) {
    magic_works.textContent = "clicking button can destroy words";
  }
   else if (number >= 0.5 && number < 0.6) {
    magic_works.textContent = "look there is nothing";
    magic_works.style.background =
      "linear-gradient( rgb(249, 221, 168) 0% , lime 40%)";
  }
   else if (number >= 0.3 && number < 0.5) {
    magic_works.textContent = "Still hovering to see random lines";
  }
   else if (number >= 0.25 && number < 0.3) {
    magic_works.textContent = "Dont waste your time ...";
    magic_works.style.background =
      "linear-gradient( rgb(249, 221, 168) 0% , orange 40%)";
  }
   else if (number >= 0.2 && number < 0.25) {
    magic_works.textContent = "I wonder what you will do next ";
  }
   else if (number >= 0.16 && number < 0.2) {
    magic_works.textContent = "Error Internet connection";
    magic_works.style.background =
      "linear-gradient( rgb(249, 221, 168) 0% ,  rgb(255, 80, 80) 40%)";
  }
   else if (number >= 0.14 && number < 0.16) {
    magic_works.textContent = "I ran out of words";
  }
   else if (number >= 0.125 && number < 0.14) {
    magic_works.textContent = "look someone is watching me";
    magic_works.style.background = "linear-gradient (white 0% , blue 40% )";
  }
   else if (number >= 0.1 && number < 0.125) {
    magic_works.textContent = "See the remaining site GO!";
    console.log(number);
  }
}


// slide text animation = Random text 


let front_arrow = document.getElementById("arrow_f");
let display_text_animtion = document.getElementById("question");
let text_slide = document.getElementById("text_slide");

function add_animation_class() {
  text_slide.classList.add("page_2_heading");
  setTimeout(add_animation, 2000);
  function add_animation() {
    text_slide.style.background =
      "linear-gradient(to right, plum 40%, blue 60%)";
  }
  setTimeout(remove_animation, 3900);
  function remove_animation() {
    text_slide.classList.remove("page_2_heading");
    text_slide.style.background =
      "linear-gradient(to right,  purple 30%, yellow 70%)";
  }
}


// page 2 work ends