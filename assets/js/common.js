$(window).scroll(function(){
    curr = $(this).scrollTop(); //현재

    if (curr > 0) {
        $('.fix-btn').addClass('show')
    } else {
        $('.fix-btn').removeClass('show')
    }
})


$('.btn-top').click(function(){ 
    window.scrollTo({top:0,behavior:"smooth"})
    
});


$('#header .lang-area .select-btn').click(function(){
    url = $('#langList').val();

    window.open(url);
})

