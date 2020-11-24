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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
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


/* 
 <section id="portfolio-wrapper">
                <div class="container">
                    <div class="row">
                        <div id="*-container">
                            <div class="col-md-3">
                                <!--Item 01-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/001.jpg" title="Add Description">
                                        <img src="img/portfolio/001.jpg" class="img-fluid" alt="portfolio 01">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Logo</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Desktop, Design</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 02-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/002.jpg" title="Add Description">
                                        <img src="img/portfolio/002.jpg" class="img-fluid" alt="portfolio 02">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Photoshop</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Web Design, Illustration</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 03-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/003.jpg" title="Add Description">
                                        <img src="img/portfolio/003.jpg" class="img-fluid" alt="portfolio 03">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Web Design</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Video, Web</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 04-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/004.jpg" title="Add Description">
                                        <img src="img/portfolio/004.jpg" class="img-fluid" alt="portfolio 04">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Logo</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Desktop, Design</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 05 -->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/001.jpg" title="Add Description">
                                        <img src="img/portfolio/005.jpg" class="img-fluid" alt="portfolio 05">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Photoshop</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Web Design, Illustration</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 06-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/006.jpg" title="Add Description">
                                        <img src="img/portfolio/006.jpg" class="img-fluid" alt="portfolio 06">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Logo</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Desktop, Design</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 07-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/007.jpg" title="Add Description">
                                        <img src="img/portfolio/007.jpg" class="img-fluid" alt="portfolio 07">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Photoshop</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Web Design, Illustration</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <!--Item 08-->
                                <div class="portfolio-item">
                                    <a href="img/portfolio/008.jpg" title="Add Description">
                                        <img src="img/portfolio/008.jpg" class="img-fluid" alt="portfolio 08">
                                        <div class="portfolio-item-overlay">
                                            <div class="portfoilio-item-details text-center">
                                                <!--Item Header-->
                                                <h3>Mobile Design</h3>
                                                <!--Item Strips-->
                                                <span></span>
                                                <!--Item Description-->
                                                <p>Video, Web</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
*/