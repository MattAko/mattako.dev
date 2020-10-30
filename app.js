console.log("script running");

// global variables
var desktopWidth = 1100;

// Parallax effect for banner
var parallax = document.getElementsByClassName('banner')[0];
window.addEventListener("scroll", function(){
    var pageOffset = window.pageYOffset * 0.7;
    if(window.innerWidth > desktopWidth){
        parallax.style.backgroundPositionY = pageOffset + 'px';
    }
})


// Show or hide the dropdown menu when pressed
// This is only used for the mobile nav
function toggleNav(){
    if($('#dropdown').hasClass('hide-dropdown')){
        $('#dropdown').removeClass('hide-dropdown');
        $('#dropdown').addClass('show-dropdown');
    }
    else{
        $('#dropdown').removeClass('show-dropdown');
        $('#dropdown').addClass('hide-dropdown');
    }   
}


// For opening urls
function openURL(url) { 
    window.open(url, "_blank"); 
} 


// Jump the window view to a specific section
// sectionName is a string that represents the section id to jump to 
function jumpto(sectionName){
    //window.location.hash = sectionName;
    document.getElementById(sectionName).scrollIntoView({behavior: 'smooth'});

    $('#dropdown').removeClass('show-dropdown');
    $('#dropdown').addClass('hide-dropdown');
}


// Change bg color of floating nav li based on scroll height
// Probably a cleaner way to do this xxx
$(document).scroll(function(){
    var y = $(this).scrollTop();
    
    // Finding all the heights for each section
    bannerHeight = document.getElementsByClassName('banner')[0].scrollHeight;
    aboutHeight = document.getElementById('about-section').scrollHeight;
    expHeight = document.getElementById('experience-section').scrollHeight;
    skillsHeight = document.getElementById('abilities-section').scrollHeight;
    contactHeight = document.getElementById('contact-section').scrollHeight;

    console.log(contactHeight);
    if(y > bannerHeight + aboutHeight + skillsHeight + expHeight - 2*contactHeight){
        $('.floating-nav li:eq(3)').css('background-color', 'red');
        $('.floating-nav li:eq(2)').css('background-color', '#222222');
        $('.floating-nav li:eq(1)').css('background-color', '#222222');
        $('.floating-nav li:eq(0)').css('background-color', '#222222');
    }
    else if(y > bannerHeight + aboutHeight + skillsHeight - 10){
        $('.floating-nav li:eq(3)').css('background-color', '#222222');
        $('.floating-nav li:eq(2)').css('background-color', 'red');
        $('.floating-nav li:eq(1)').css('background-color', '#222222');
        $('.floating-nav li:eq(0)').css('background-color', '#222222');
    }
    else if(y > bannerHeight + aboutHeight - 10){
        $('.floating-nav li:eq(3)').css('background-color', '#222222');
        $('.floating-nav li:eq(2)').css('background-color', '#222222');
        $('.floating-nav li:eq(1)').css('background-color', 'red');
        $('.floating-nav li:eq(0)').css('background-color', '#222222');
    } else{
        $('.floating-nav li:eq(3)').css('background-color', '#222222');
        $('.floating-nav li:eq(2)').css('background-color', '#222222');
        $('.floating-nav li:eq(1)').css('background-color', '#222222');
        $('.floating-nav li:eq(0)').css('background-color', 'red');
    } 

    console.log('window width: ' + window.innerWidth);
})