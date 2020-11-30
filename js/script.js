// Preloader

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

// Team

$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            489: {
                items: 2
            }
        }
    });
});



// Progress Bars

$(function() {
    $('#progress-elements').waypoint(function() {
        $('.progress-bar').each(function() {
            $(this).animate({ width: $(this).attr('aria-valuenow') + '%' }, 1000);
        });
        this.destroy();
    }, { offset: 'bottom-in-view' });
});


// Responsive Tabs
$(function() {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});


// Portfolio

$(window).on('load', function() {
    // Initialize
    $("#isotope-container").isotope({

    });
    // Filter Items
    $("#isotope-filters").on('click', 'button', function() {
        // Git filter value
        var filterValue = $(this).attr('data-filter');
        // Filter Portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

// Popup
$(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Testimonial
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

// Stats Counter

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Clients
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

// Map

$(window).on('load', function() {
    // Map Vars
    var addressString = '230 Broadway, NY, New York 10007 USA';
    var myLating = {
        let: 40.712685,
        lng: -74.005920
    };
    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLating
    });
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLating,
        map: map,
        title: 'Click To See Address'
    });
    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    // Show Info Window when user clicks marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
});

// Navigation => White Nav
$(function() {
    // show/hide nav on load
    showHideNav();
    $(window).scroll(function() {
        // show/hide nav on scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // Show White Nav
            $("nav").addClass('white-nav-top');
            // Show Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            // Show Back To Top Button
            $("#back-to-top").fadeIn();
        } else {
            // Hide White Nav
            $("nav").removeClass("white-nav-top");
            // Show Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            // Hide Back To Top Button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling

$(function() {
    $("a.smmoth-scroll").click(function(event) {
        event.preventDefault();
        // Get Section Id
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});







/*
function myMap() {
    var mapProp = {
        center: new google.maps.LatLing(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
*/