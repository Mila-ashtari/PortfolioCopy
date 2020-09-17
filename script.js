const App={}
App.menu=function(){
    $('.hamburger--spin').on('click', function(){
        $('.hamburger--spin').toggleClass('is-active')
        $('.hamburgerMenu ul').toggleClass('active')
    })
}
App.smoothScroll=function(){
    $("nav a, .scrollDown").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        console.log(href)
        $("html, body").animate({ scrollTop: $(href).offset().top }, 700);
      });
    
}
App.inint=function(){
    App.menu()
    App.smoothScroll()
}
$(function(){
    App.inint()
})


