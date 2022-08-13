$(".show-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft: 0})
});

$(".hide-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft: '-100%'})
});

function go(url){
    setTimeout(function(){
        location.href = `${url}`
    }, 1000)  
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$('.full-screen-btn').click(function(){
    $(this).closest('.card').toggleClass('full-screen-card');
    if($('.card').hasClass("full-screen-card")){
        $(this).html(`<i class="feather-minimize-2 "></i>`)
    }else{
        $(this).html(`<i class="feather-maximize-2 "></i>`)
    }
})

let screenHeight = $(window).height();
let currentHeight = $('.sidebar-menu .active').offset().top;
if (currentHeight > screenHeight*0.8) {
    $('.sidebar').animate({
        scrollTop: currentHeight-200
    },1000);
}