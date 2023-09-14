let loader = document.getElementById('screen_loader')
window.addEventListener('load' , function(){
  loader.style.display = 'none';
})

let button = document.getElementById('slide')
let count = 0;
function slide() {
    
    let menue = document.getElementById('menu')
    let alpha = menue.firstElementChild
    if(count == 0) {
    alpha.classList.remove('items')
    alpha.classList.add('slide')
    button.textContent = 'Close menue'
    
    
    count++;
    }
    else if (count >= 1) {
        button.textContent = 'Open menue'
      
        alpha.classList.remove('slide')
        alpha.classList.add('items');
        count--;
        
    }
    
}









let card = document.getElementById("card_container");
let new_card = card.parentElement








function making_card (description,url) {

    let box_card = document.createElement("div")
    let box_img = document.createElement("img")
    let box_button = document.createElement("button")
    let box_par = document.createElement("p")


    box_button.textContent = 'View'

    box_img = new Image();
    box_img.src = `${url}`;

box_par.textContent = `${description}`;

box_card.appendChild(box_img)
box_card.appendChild(box_button)
box_card.appendChild(box_par)

box_card.classList.add('card_1')

card.appendChild(box_card)

}

let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url =  "/A useful/hotel.jpg";

let description2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url2 =  "/A useful/room_1.jpg";

let description3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url3 =  "/A useful/room_2.jpg";

let description4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url4 =  "/A useful/room_3.jpg";

let description5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url5 =  "/A useful/room_4.jpg";

let description6 = "Available in Paris. It has 2 bed attached together. Suitable for luxury people"
let url6 =  "/A useful/room_5.jpg";

let description7 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url7 =  "/A useful/room_6.jpg";

let description8 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url8 =  "/A useful/room_7.jpg";

let description9 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url9 =  "/A useful/room_8.jpg";

let description10 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a!"
let url10 =  "/A useful/hotel-building.jpg";

making_card(description,url)
making_card(description2,url2)
making_card(description3,url3)
making_card(description4,url4)
making_card(description5,url5)
making_card(description6,url6)
making_card(description7,url7)
making_card(description8,url8)
making_card(description9,url9)
making_card(description10,url10)




let top_scroll = document.getElementById('top')
let btn = top_scroll.firstElementChild
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction ( ){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_scroll.style.display = 'block';
    }
    else {
        top_scroll.style.display -= 'none'
    }

}

function go_to_top () {
    document.documentElement.scrollTop = 0;
}
 













