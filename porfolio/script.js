$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Critical Thinker", "Cybersecurity engineer","Frontend Devop"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Critical Thinker", "Cybersecurity Enthusiastic ", "Frontend Devop"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
/* Open Modal Function */
function openModal(imageElement) {
    let modal = document.getElementById("imageModal");
    let modalImage = document.getElementById("modalImage");
    let closeButton = document.querySelector(".close");

    modalImage.src = imageElement.src;
    modal.style.display = "flex";
    closeButton.style.display = "block"; // Show X button when modal is open
}

/* Close Modal Function */
function closeModal() {
    let modal = document.getElementById("imageModal");
    let closeButton = document.querySelector(".close");

    modal.style.display = "none";
    closeButton.style.display = "none"; // Hide X button when modal is closed
}


