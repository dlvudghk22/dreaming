

$(window).load(function(){

    mobileGnb();


})


function mobileGnb(){

    var $isOpen = false;
    $('.mobile-gnb').css({'display':'none'});

    $('.mobile-menu-btn').on('click', mobileActive);

    function mobileActive(){
        if($isOpen == false){
            $('.line02').addClass('on');
            setTimeout(function(){
                $('.line01').addClass('on');
                $('.line03').addClass('on');
            },200)
            setTimeout(function(){
                $('.mobile-menu-btn a').addClass('on');
            },400)
            setTimeout(function(){
                $('.mobile-menu-btn').css({'opacity':0})
            },600)

            $('.mobile-gnb').delay(700).fadeIn()

            $('body, html').css({'overflow':'hidden'})
            
            $isOpen == true;
        }
    }

    $('.mobile-close-btn').on('click', function(){
        $('.mobile-gnb').fadeOut()
        $('.mobile-menu-btn').css({'opacity':1})
        $('.line02').removeClass('on');
        $('.line01').removeClass('on');
        $('.line03').removeClass('on');
        $('.mobile-menu-btn a').removeClass('on');
        $('.mobile-menu-btn').removeClass('on');
        
        $('.mobile-gnb').fadeOut()

    })

}










