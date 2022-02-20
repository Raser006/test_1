$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false, auto: true,
    });
});

$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        pager: true, controls: false,
    });
});

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true,
    });
});

$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:''
    });
});

$(document).ready(function($){
    $('.primary-nav-trigger').on('click', function(){
        $('.menu-icon').toggleClass('is-clicked');
        $('.primary-nav').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
    });
});

$('.primary-nav').on('click', 'a', function (event){
    event.preventDefault();
    let id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});

let headerHeight = $(".topheader").height();
$(window).on('scroll', { previousTop: 0},
function(){
    let currenTop = $(window).scrollTop();
    if(currenTop < this.previousTop){
        if( !(currenTop > 0) && $(".topheader").hasClass("is-fixed")){
            $(".topheader").removeClass("is-fixed");
        }
    }else{
        if(currenTop > headerHeight && !$(".topheader").hasClass("is-fixed")){
            $(".topheader").addClass("is-fixed");
        }
    }
    this.previousTop = currenTop;
});

$(window).load(function(){
    $(".preload").fadeOut("slow");
});

$(window).load(function(){
    $(".preload").fadeOut("slow");
function onScrollInit(items){
items.each(function(){
    let osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
    osElement.css({
        'animation-delay':     osAnimationDelay
    });
    osElement.waypoint(function(){
        osElement.addClass('animated').addClass(osAnimationClass);
    },
    {
     triggerOnce: true,
     offset: '90%'   
    });
});
}
onScrollInit( $('.os-animation'));
});

$(function(){
    let filterList = {
        init: function(){
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap' 
            });
        },
    };
    filterList.init();
});