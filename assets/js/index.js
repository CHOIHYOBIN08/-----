
const visualSlide1 = new Swiper('.sc-visual .news .swiper',{
    loop:true,
    autoplay:{
        delay:3000
    },
    navigation:{
        nextEl:".next",
        pervEl:".prev",
    },
    pagination:{
        el:".page",
        type:"fraction"
    }
 })

$('.sc-visual .title').click(function(e){
    e.preventDefault();

    
    $(this).parent().addClass('active').siblings().removeClass('active');

})

$('.btn-more').click(function(){
    $('html').addClass('hidden');
    $('.popup-all').addClass('show');
})
$('.popup-all .close').click(function(){
    $('.popup-all').removeClass('show');
    $('html').removeClass('hidden');
})




$('.sc-visual .news .autoplay').click(function(){

    if($(this).hasClass('active')){
        visualSlide1.autoplay.start();
    }else{
        visualSlide1.autoplay.stop();

    }
    $(this).toggleClass('active');
   
})

$('.sc-visual .citizen .autoplay').click(function(){

    if($(this).hasClass('active')){
        visualSlide2.autoplay.start();
    }else{
        visualSlide2.autoplay.stop();

    }
    $(this).toggleClass('active');
   
})

const visualSlide2 = new Swiper('.sc-visual .citizen .swiper',{
    loop:true,
    autoplay:{
        delay:3000
    },
    navigation:{
        nextEl:".next",
        pervEl:".prev",
    },
    pagination:{
        el:".page",
        type:"fraction"
    }
})


//배너존
 bannerSlide = new Swiper('.banner-slide',{
    loop:true,
    navigation:{
        nextEl:".sc-banner-board .next",
        prevEl:".sc-banner-board .prev",
    },
    pagination:{
        el:".sc-banner-board .page",
        type:"fraction"
    },
    autoplay:{
        delay:3000,
    },
    spaceBetween:43,
    slidesPerView:3,
})

$('.sc-banner-board .autoplay').click(function(){

    if($(this).hasClass('active')){
        bannerSlide.autoplay.start();
    }else{
        bannerSlide.autoplay.stop();

    }
    $(this).toggleClass('active');
   
})

//사이트
$('.btn-title.child').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
        $(this).removeClass('on').siblings('.sub').slideUp();
    }else{
        $('.btn-title').removeClass('on').siblings('.sub').slideUp();
        $(this).addClass('on').siblings('.sub').slideDown();
    }
})

