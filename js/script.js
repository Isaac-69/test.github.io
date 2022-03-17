var text = document.querySelector('.text');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 1);
var loaded = false
function animate(){
  if(count == 100 && per == 400){
    text.style.fontSize = "70px";
    text.classList.add("add");
    clearInterval(loading).then(async()=>{
loaded  = true
return;

})
  }else{
    per = per + 4;
    count = count + 1;
    progress.style.width = per + 'px';
  }
}



var typed = new Typed('.typing', {
  strings: [
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6",
    "text7"
  ],
  typeSpeed: 120,
  backSpeed: 80,
  loop: true,
})


$(document).ready(function() {
  $(window).scroll(function() {

      
    if(this.scrollY > 400) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  })

  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  })
  
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })
})


