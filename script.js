const App={}
App.menu=function(){
   $('.hamburgerMenu button').on('click', function(){
    $('.hamburgerMenu ul').css('display', 'block')
    $('.hamburgerMenu button').css('display', 'none')
       setTimeout(function(){
        $('.hamburgerMenu ul').css('right', '0')
       },200)
   })
   $('.hamburgerMenu ul li:first-of-type').on('click', function(){
    $('.hamburgerMenu ul').css('right', '-200px')
    $('.hamburgerMenu button').css('display', 'block')
    setTimeout(function(){
        $('.hamburgerMenu ul').css('display', 'none')
       },400)
   })
}
App.inint=function(){
    App.menu()
}
$(function(){
    App.inint()
})