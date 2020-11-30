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
    $("#isotope-container").isotope({});
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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

/* Google Map */
// Initialize and add the map
$(function initMap() {
    // The location of Uluru
    const mapCenter = { lat: 40.716881, lng: -73.994019 };
    // The map,
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: mapCenter,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
    });
});

// Navigation => White Nav
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            // Show white bg
            $('nav').addClass('white-navbar');
            // change img
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
            //back to top button
            $('#back-to-top').fadeIn();
        } else {
            $('nav').removeClass('white-navbar');
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');
            $('#back-to-top').fadeOut();
        }
    });
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