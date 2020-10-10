$(document).on('ready', function(){

    if($('.mobile-beacon').is(':hidden')){ mobileBeacon = true; }

    initialiseGallery();

    setTimeout(function(){

        initialiseHeader();

        $('.ribbon').addClass('active');

    }, 1000);

    $(document).scroll(function(){

        parallaxHeader($(document).scrollTop())

    });

    $(document).on('click', '.scroll-anchor', function(){

        //variables
        var anchor = $(this).attr('data-anchor');

        offsetAnchor = $('#'+anchor+'-span').position();

        $('html, body').animate({scrollTop: offsetAnchor.top}, 1200, 'swing', function() {

        });

    })

    $(document).on('click', '.scroll-down, .scroll-introduction', function(){

        headerHeight = $('#header-span').height();
        logoBarHeight = $('#logo-bar').height();

        $('body').animate({scrollTop: headerHeight+logoBarHeight}, 1200, 'swing', function() {

        });

    });

    //open poppy gallery
    $(document).on('click', '#where-span:not(".active") #poppy-gallery .gallery-image', function(){

        openPoppyGallery();

    });

    $(document).on('click', '.arrow-right', function(){

        galleryNext();

    })

    $(document).on('click', '.arrow-left', function(){

        galleryPrev();

    });

    $(document).on('click', '.signup-close', function(){

        closePopup();

    })

    //keypress gallery
    $("body").keydown(function(e) {

        if(e.keyCode == 37) { // left

            galleryPrev();

        }

        else if(e.keyCode == 39) { // right

            galleryNext();

        }

    });

    //sign up buttons
    $(document).on('click', '.sign-up-trigger', function(){

        openPopup('register');

    })

    $(document).on('click', '#popup-wrapper', function(){

        closePopup();

    })

    $(document).on('click', '[data-popup], #signup-popup', function(e){

        e.stopPropagation();

    });

});
