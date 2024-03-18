$(document).ready(function(){

     // header start

     $(window).scroll(function(){
        
        sct = $(window).scrollTop();
        console.log(sct);

        if(sct>80) {
            $('header').css({
                backgroundColor: 'rgba(0, 0, 0, 0.78)',
            });
            $('.in_header').css({
                border: 0
            });
        }

        if(sct<80) {
            $('header').css({
                backgroundColor: 'rgba(0, 0, 0, 0)',
            });
            $('.in_header').css({
                borderBottom: '2px solid #fff',
            });
        }
    });
    // header end

    // section_2 start

    $('.btn>li').each(function(i){
        $(this).attr({
            "data-num": i
        });
    }).click(function(){
            var num = $(this).attr("data-num")
            console.log(num);
            
            $('.con_wrap').animate({
                left: num * -100 + '%'
            });

            $('.btn>li').removeClass('active');
            $('.btn>li').eq(num).addClass('active');

        });
    // section_2 end

    $('.con_2_title>li').click(function(){
        var t =$(this).index();
        console.log(t);

        $('.item').hide();
        $('.item').eq(t).show();

        $('.con_2_title>li').removeClass('borde');
        $('.con_2_title>li').eq(t).addClass('borde');
    });//title

    $('.mo_btn_1>.click').each(function(a){
        $(this).attr({
            "data-num": a
        });
    }).click(function(){
            var mo = $(this).attr("data-num")
            console.log(mo);
            
            $('.img_wrap_1').animate({
                left: mo * -100 + '%'
            });

            $('.mo_btn_1>.click').removeClass('color');
            $('.mo_btn_1>.click').eq(mo).addClass('color');

        });//1번

    $('.mo_btn_2>.click').each(function(b){
        $(this).attr({
            "data-num": b
        });
    }).click(function(){
            var moo = $(this).attr("data-num")
            console.log(moo);
            
            $('.img_wrap_2').animate({
                left: moo * -100 + '%'
            });

            $('.mo_btn_2>.click').removeClass('color');
            $('.mo_btn_2>.click').eq(moo).addClass('color');

        })//2번

        $('.mo_btn_3>.click').each(function(c){
            $(this).attr({
                "data-num": c
            });
        }).click(function(){
                var mooo = $(this).attr("data-num")
                console.log(mooo);
                
                $('.img_wrap_3').animate({
                    left: mooo * -100 + '%'
                });
    
                $('.mo_btn_3>.click').removeClass('color');
                $('.mo_btn_3>.click').eq(mooo).addClass('color');
    
        })//3번

        $('.mo_btn_4>.click').each(function(d){
            $(this).attr({
                "data-num": d
            });
        }).click(function(){
                var moooo = $(this).attr("data-num")
                console.log(moooo);
                
                $('.img_wrap_4').animate({
                    left: moooo * -100 + '%'
                });
    
                $('.mo_btn_4>.click').removeClass('color');
                $('.mo_btn_4>.click').eq(moooo).addClass('color');
    
        })//4번
        //notice
    //section_2 반응형 end

    //section_2 모바일 start
        $('#moblie ul').mouseenter(function(){
            $(this).find('.in').stop().slideDown();
        });

        $('#moblie ul').mouseleave(function(){
            $(this).find('.in').stop().slideUp();
        });
    //section_2 모바일 end

    //section_5 start
    var c = 0;

    $('.right').click(function(){
        c++;
        if(c>1){
            c=0;
        }
        $('.con_5 ul li').animate({
            left: c * -100 + '%'
        })
    });

    $('.left').click(function(){
        c--;
        if(c<0){
            c=1;
        }
        $('.con_5 ul li').animate({
            left: c * -100 + '%'
        });
    });
    //section_5 end

    //section_5 반응형 start
    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 3000, 
            disableOnInteraction: false,
        },
      });
    //section_5 반응형 end

});//end