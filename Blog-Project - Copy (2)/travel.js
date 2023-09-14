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
 
