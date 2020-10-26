const App={}
App.mainMenuDisplay=function(){
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let displayLimit=$('#aboutMe').offset().top - 80
        if(scroll> displayLimit){
            $('nav.mainMenu').css('display','flex')
        }
        else{
            $('nav.mainMenu').css('display','none')
        }
    });
}
App.menu=function(){
    $('.hamburger--spin').on('click', function(){
        $('.hamburger--spin').toggleClass('is-active')
        $('.hamburgerMenu ul').toggleClass('active')
    })
}
App.smoothScroll=function(){
    $(".horizontalMenu a, .hamburgerMenu a, .mainMenu a, .scrollDown").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top -70 }, 700);
      });
}
App.inint=function(){
    App.menu()
    App.smoothScroll()
    App.mainMenuDisplay()
}
$(function(){
    App.inint()
})


