function initialiseHeader(){

    if(mobileBeacon){ $('.header-theme-animation').css('width','100%').css('transform','skew(0deg)'); }
    else { $('.header-theme-animation').css('width','90%').css('transform','skew(-20deg)'); }

    setTimeout(function(){

        $('#header, #logo-bar, #header-canvas').css('opacity','1');

        setTimeout(function(){

            $('.scroll-down').fadeIn(250);

        }, 1000)

    }, 500)

}

function parallaxHeader(position){

    arrowPosition = position / 4.1;

    if(arrowPosition > 180){

        arrowPosition = 180;

    }

    else {

        $('.scroll-down').css('transform','translate(0px, '+position/4+'px) rotate('+arrowPosition+'deg)');

    }

    $('.header-left-contents').css('transform','translate(0px, '+position/2+'px)')

}

//open poppy gallery
function openPoppyGallery(){

    windowWidth = $(window).width();

    $('#where-span #poppy-gallery').css('right','-'+(countGalleryImages*windowWidth-windowWidth)+'px');
    $('#poppy-gallery li img').addClass('active')
    $('#where, where-span').addClass('active')
    $('.arrow-right').show();
}

function galleryNext(){

    if(galleryNextLock || galleryLock){ return false; }
    galleryPrevLock = false;
    galleryLock = true;

    setTimeout(function(){

        galleryLock = false;

    }, 800)

    //variables
    positionRight = parseInt($('#where-span #poppy-gallery').css('right'));
    windowWidth = $(window).width();

    $('#where-span #poppy-gallery').css('right',windowWidth+positionRight+'px');

    $('.arrow-left').removeClass('hide');

    if(windowWidth+positionRight == 0){ $('.arrow-right').addClass('hide'); galleryNextLock = true;  }

}

function galleryPrev(){

    if(galleryPrevLock || galleryLock){ return false; }
    galleryNextLock = false;
    galleryLock = true;

    setTimeout(function(){

        galleryLock = false;

    }, 800)

    //variables
    positionRight = parseInt($('#where-span #poppy-gallery').css('right'));
    windowWidth = $(window).width();

    $('#where-span #poppy-gallery').css('right',positionRight-windowWidth+'px');

    $('.arrow-right').removeClass('hide');

    if(positionRight-windowWidth == countGalleryImages*windowWidth-windowWidth-((countGalleryImages*windowWidth-windowWidth)*2)){ $('.arrow-left').addClass('hide'); galleryPrevLock = true; }

}

//initialise gallery
function initialiseGallery(){

    //variables
    countGalleryImages = $('#where-span #poppy-gallery li').length;
    windowWidth = $(window).width();

    //copy to mobile gallery
    galleryHtml = $('#poppy-gallery ul').html();

    $('#poppy-mobile-gallery ul').html(galleryHtml)
    $('#poppy-mobile-gallery').find('.gallery-image').removeClass('gallery-image');

    $('#where-span #poppy-gallery').css('width',countGalleryImages*windowWidth+'px').css('right', '-'+(countGalleryImages*windowWidth-windowWidth*0.2)+'px');
    $('#poppy-gallery li').css('width',100/countGalleryImages+'%');

}

function openPopup(popupName){

    $('[data-popup="'+popupName+'"]').show();
    $('#popup-wrapper').fadeIn(globalAnimationSpeed);
    $('html, body').css('overflow','hidden')


        $('#popup-wrapper [data-popup="'+popupName+'"]').css({
            'transform':'scale(1)',
            'opacity':'1'
        })


}

function closePopup(){

    $('#popup-wrapper [data-popup="'+popupName+'"]').css({
        'transform':'scale(0.9)',
        'opacity':'0'
    });
    $('#popup-wrapper').fadeOut(globalAnimationSpeed);

    setTimeout(function(){

        $('[data-popup="'+popupName+'"]').hide();
        $('html, body').css('overflow','hidden')

    }, 500)

}

function closePopup(){

    $('#popup-wrapper [data-popup]:visible').css({
        'transform':'scale(0.95)',
        'opacity':'0'
    })

    setTimeout(function(){

        $('#popup-wrapper').fadeOut(globalAnimationSpeed);
        $('[data-popup]').hide();

        $('html, body').css('overflow','')

    }, 10);

}
