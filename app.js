console.log("script running");

// Parallax effect

var parallax = document.getElementsByClassName('banner')[0];
window.addEventListener("scroll", function(){
    var pageOffset = window.pageYOffset * 0.7;
    parallax.style.backgroundPositionY = pageOffset + 'px';
})


// Mobile nav menu

var mobileNav = document.getElementsByClassName('mobileNav')[0];
var bannerHeight = document.getElementsByClassName('banner')[0].scrollHeight;

$(document).scroll(function(){
    var y = $(this).scrollTop();
    bannerHeight = document.getElementsByClassName('banner')[0].scrollHeight;
    if(y > bannerHeight-50){
        $('.mobileNav').css('position', 'fixed');
        $('.mobileNav').css('top', '0px');
        $('.arrow').css('display','none');
        $('section').css('margin', '30px 0 0 0');
    }else{
        $('.mobileNav').css('position', 'relative');
        $('.arrow').css('display','block');
        $('section').css('margin', '0 0 0 0');
    }
})

function toggleNav(){
    console.log('toggle nav');
    console.log($('#dropdown').hasClass('hide-dropdown'));
    if($('#dropdown').hasClass('hide-dropdown')){
        $('#dropdown').removeClass('hide-dropdown');
        console.log("Showing dropdown");
        $('#dropdown').addClass('show-dropdown');
    }
    else{
        console.log("hiding dropdown");
        $('#dropdown').removeClass('show-dropdown');
        $('#dropdown').addClass('hide-dropdown');
    }   
}

function openURL(url) { 
    window.open(url, "_blank"); 
} 
