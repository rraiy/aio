var is_cook_ani=false;
var websiteName = 'aio';


function isMobile() {
	var a = navigator.userAgent || navigator.vendor || window.opera;
	return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
}

var queue = new createjs.LoadQueue();
var preloadImages = [
    "images/about_i01.png",
    "images/about_i02.png",
    "images/about_img01.png",
    "images/about_product-step.png",
    "images/about_product-step-m.png",
    "images/about_img03.png",
    "images/about_img04.png",
    "images/about_img04_m.png",
    "images/about_title.png",
    "images/about_title02.png",
    "images/arrow.png",
    "images/close.png",
    "images/cookies_xx.png",
    "images/fb.png",
    "images/footer_bg.png",
    "images/footer_bg_m.png",
    "images/footer_bg01.png",
    "images/footer_img01.png",
    "images/footer_img02.png",
    "images/footer_img02_m.png",
    "images/gotop.png",
    "images/ham.png",
    "images/ham_close.png",
    "images/icon_cart.png",
    "images/icon_cart_h.png",
    "images/icon_fb.png",
    "images/icon_fb_h.png",
    "images/icon_ig.png",
    "images/icon_ig_h.png",
    "images/kv_bg.png",
    "images/kv_img00.png",
    "images/kv_img01.png",
    "images/kv_img01-1.png",
    "images/kv_img02.png",
    "images/kv_img02-1.png",
    "images/kv_img02-2.png",
    "images/kv_img02-3.png",
    "images/kv_mask.png",
    "images/kv_mask_m.png",
    "images/logo.png",
    "images/p_cart.png",
    "images/play.png",
    "images/pp_cart.png",
    "images/pp_link01.png",
    "images/pp_link02.png",
    "images/pp_link03.png",
    "images/pp_link04.png",
    "images/product_bg01.png",
    "images/product_bg01_m.png",
    "images/product_bg02.png",
    "images/product_bg02_m.png",
    "images/product_bg03.png",
    "images/product_bg03_m.png",
    "images/product_bg04.png",
    "images/product_bg04_m.png",
    "images/product_bg05.png",
    "images/product_bg05_m.png",
    "images/product_bg06.png",
    "images/product_bg06_m.png",
    "images/product_bg07.png",
    "images/product_bg07_m.png",
    "images/video_bg.png",
    "images/video_bg_bottom.png",
    "images/video_bg_top.png",
    "images/video_i01.png",
    "images/video_i02.png",
    "images/video_img01.png",
];

queue.on("complete", function (event) {
    sessionStorage.setItem('isLoad', 1);
    $('header, footer, article').show();
    $("img").each(function(){
        $(this).prop('src',$(this).attr('ds'));
    });
    $('body,html').stop().animate({ scrollTop: "0" }, 10);
    indexInit();
    $('#loading').fadeOut(500,function(){
        // $('#loading').remove();
    });
});
queue.on("progress", function (event) {
    // $('.loading .loading_num').text(Math.round(event.progress * 100) + '%');
    if($(window).width()<=733){
        $('#loading .main .num span').css('left',Math.round(event.progress * 105 - 280) + '%');
    }else{
        $('#loading .main .num span').css('left',Math.round(event.progress * 105 - 140) + '%');
    }
});
queue.on("error", function (event) {
    // console.log(event);
});
queue.loadManifest(preloadImages);


var mdot=1;
var mdot2=5;
function indexInit(){

    $(window).resize(indexResize);
    indexResize();
    /*** scroll ***/
    $(window).scroll(windowScrollIndex);
	windowScrollIndex();

    // gotop
    $('.gotop').on('click',function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    // cookies
    if (parseInt(getCookie(websiteName)) == 1) {
		doCookieSetup(websiteName, 1)
	} else {
		$('section#kv .cookies').show();
	}
    $(document).on('click', function () {
        doCookieSetup(websiteName, 1)
        $('section#kv .cookies').hide();
    });

    // kv scroll
    $('.scroll').on('click',function(){
        if(isMobile()){
            $("html, body").animate({scrollTop: $('section#about').offset().top-50}, 1000);
        }else{
            $("html, body").animate({scrollTop: $('section#about').offset().top}, 1000);
        }
    });
    
    // menu
    $('header nav ul li').on('click',MenuLiClick);
    $('header .ham').on('click',hamClick);

    // YT PP
    $('.video01, .video02').on('click',function(){
        $('.video_pp').fadeIn(500);
        $('.video_pp .main iframe').prop('src',$(this).attr('yt'));
    });

    $('.video_pp .main .xx').on('click',function(){
        $('.video_pp .main iframe').prop('src','');
        $('.video_pp').fadeOut(500);
    });

    // product

    $('section#product .main .dots [class^="dot"]').on('click',function(){
        if($(this).hasClass('active')!=true){
            mdot=$(this).attr('dot');
            $('section#product .main .dots .active').removeClass('active')
            $('section#product .main .items .active').removeClass('active')
            $(this).addClass('active');
            $('section#product .main .items .item0'+mdot).addClass('active')
        }
    });
    $('section#product .main02 .dots [class^="dot"]').on('click',function(){
        if($(this).hasClass('active')!=true){
            mdot2=$(this).attr('dot');
            $('section#product .main02 .dots .active').removeClass('active')
            $('section#product .main02 .items .active').removeClass('active')
            $(this).addClass('active');
            $('section#product .main02 .items .item0'+mdot2).addClass('active')
        }
    });

    owl = $('section#product .main .m_dot_box');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        dots: false,
        center: true,
        // autoplayHoverPause: true,
        mouseDrag: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        // autoplay: true,
        smartSpeed: 1000,
        responsive: {
            375: {
                items: 1,
                margin: 100,
            },
            600: {
                items: 3,
                margin: 0,
            },
            1000: {
                items: 3,
            },
        },
    });
    owl2 = $('section#product .main02 .m_dot_box');
    owl2.owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        dots: false,
        center: true,
        // autoplayHoverPause: true,
        mouseDrag: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        // autoplay: true,
        smartSpeed: 1000,
        responsive: {
            375: {
                items: 1,
                margin: 100,
            },
            600: {
                items: 3,
                margin: 0,
            },
            1000: {
                items: 3,
            },
        },
    });


    owl.on('changed.owl.carousel', function(event) {
        mdot = $('.main .owl-item.center').next().find('[class^="m_dot"]').attr('dot');
        $('section#product .main .items .active').removeClass('active');
        $('section#product .main .items .item0'+mdot).addClass('active');
        
        $('section#product .main .dots .active').removeClass('active')
        $('section#product .main .dots .dot0'+mdot).removeClass('active')
    })
    $('section#product .main .owl-prev').click(function() {
        mdot = $('.main .owl-item.center').find('[class^="m_dot"]').attr('dot');
        $('section#product .main .items .active').removeClass('active');
        $('section#product .main .items .item0'+mdot).addClass('active');
        
        $('section#product .main .dots .active').removeClass('active')
        $('section#product .main .dots .dot0'+mdot).removeClass('active')
    })
    $('section#product .main .owl-next').click(function() {
        mdot = $('.main .owl-item.center').find('[class^="m_dot"]').attr('dot');
        $('section#product .main .items .active').removeClass('active');
        $('section#product .main .items .item0'+mdot).addClass('active');
        
        $('section#product .main .dots .active').removeClass('active')
        $('section#product .main .dots .dot0'+mdot).removeClass('active')
    })

    owl2.on('changed.owl.carousel', function(event) {
        mdot2 = $('.main02 .owl-item.center').next().find('[class^="m_dot"]').attr('dot');
        $('section#product .main02 .items .active').removeClass('active');
        $('section#product .main02 .items .item0'+mdot2).addClass('active');

        $('section#product .main02 .dots .active').removeClass('active')
        $('section#product .main02 .dots .dot0'+mdot2).removeClass('active')
    })
    $('section#product .main02 .owl-prev').click(function() {
        mdot2 = $('.main02 .owl-item.center').find('[class^="m_dot"]').attr('dot');
        $('section#product .main02 .items .active').removeClass('active');
        $('section#product .main02 .items .item0'+mdot2).addClass('active');

        $('section#product .main02 .dots .active').removeClass('active')
        $('section#product .main02 .dots .dot0'+mdot2).removeClass('active')
    })
    $('section#product .main02 .owl-next').click(function() {
        mdot2 = $('.main02 .owl-item.center').find('[class^="m_dot"]').attr('dot');
        $('section#product .main02 .items .active').removeClass('active');
        $('section#product .main02 .items .item0'+mdot2).addClass('active');

        $('section#product .main02 .dots .active').removeClass('active')
        $('section#product .main02 .dots .dot0'+mdot2).removeClass('active')
    })


    set00();
    act01();
}



function set00(){
    TweenMax.set('section#kv .img00',{y:50,opacity:0});
    TweenMax.set('section#kv .img01',{x:-50,opacity:0});
    TweenMax.set('section#kv .img02-1',{y:200,opacity:0});
    TweenMax.set('section#kv .img02-3',{x:-50,opacity:0});
    TweenMax.set('section#kv .img02',{x:50,opacity:0});
    
    if($(window).width()<=1400){
        TweenMax.set('section#kv .img02-2',{x:300,y:-400,rotation:60,opacity:0.5});
    }else{
        TweenMax.set('section#kv .img02-2',{x:400,y:-400,rotation:30,opacity:0.5});
    }
    
    
    TweenMax.set('section#about .inner .title',{y:50,opacity:0});
    TweenMax.set('section#about .inner .info_box .info01',{y:50,opacity:0});
    TweenMax.set('section#about .inner .info_box .info02',{y:50,opacity:0});
    TweenMax.set('section#about .inner .title02',{y:50,opacity:0});
    TweenMax.set('section#about .inner .product-step',{y:50,opacity:0});
    TweenMax.set('section#about .i01',{x:100,opacity:0});
    TweenMax.set('section#about .i02',{x:-100,opacity:0});

    
    TweenMax.set('section#video .inner .video01, section#video .inner .video02',{y:50,opacity:0});

    
    TweenMax.set('section#product .main',{y:50,opacity:0});
    TweenMax.set('section#product .main02',{y:50,opacity:0});
}

function act01(){
    TweenMax.to('section#kv .img00',0.6,{y:0,opacity:1});
    TweenMax.to('section#kv .img01',0.6,{delay:0.8,x:0,opacity:1});
    TweenMax.to('section#kv .img02',0.6,{delay:0.8,x:0,opacity:1});
    TweenMax.to('section#kv .img02-3',0.8,{delay:1.6,x:0,opacity:1});
    TweenMax.to('section#kv .img02-2',0.8,{delay:1.6,x:0,y:0,rotation:0,opacity:1});
    TweenMax.to('section#kv .img02-1',0.8,{delay: 2.0, y:0,opacity:1});

}
function act02(){
    TweenMax.to('section#about .inner .title',0.8,{y:0,opacity:1});
    TweenMax.to('section#about .inner .info_box .info01',0.8,{delay:0.8,y:0,opacity:1});
    TweenMax.to('section#about .inner .info_box .info02',0.8,{delay:0.8,y:0,opacity:1});
    TweenMax.to('section#about .inner .title02',0.8,{delay:1.5,y:0,opacity:1});
    TweenMax.to('section#about .inner .product-step',0.8,{delay:1.8,y:0,opacity:1});
    TweenMax.to('section#about .i01',0.8,{delay:1.2,x:0,opacity:1});
    TweenMax.to('section#about .i02',0.8,{delay:1.2,x:0,opacity:1});

    // queue.loadManifest(lazyloadImages)
}
function act03(){
    TweenMax.staggerTo('section#video .inner .video01, section#video .inner .video02',0.8,{y:0,opacity:1},0.2);
}
function act04(){
    TweenMax.to('section#product .main',0.8,{y:0,opacity:1});
    TweenMax.to('section#product .main02',0.8,{delay:0.8,y:0,opacity:1});
}

function hamClick(){
    if($(this).hasClass('active')!=true){
		$(this).addClass('active');
		$('header nav').fadeIn();
	}else{
		$(this).removeClass('active');
		$('header nav').fadeOut();
	}
}

var is_menu=false;
var is_ti=false;
function indexResize(){
    if($(window).width()<=1100){
		// is_menu=true;
		$('header .ham').show().removeClass('active');
		// $('header nav').hide();
	}
	// if($(window).width()>1083 && is_menu==true){
    //     is_menu=false;
	// 	$('header .ham').hide();
	// 	$('header nav').show();
    // }
}


var menu_index=0;
function MenuLiClick(){
    menu_index=$(this).index();
    if($(window).width()<=1100){
		$('header .ham').removeClass('active');
		$('header nav').fadeOut(500);
	}

    if(isMobile()){
        if(menu_index==0){
            $("html, body").animate({scrollTop: 0}, 1000);
        }
        if(menu_index==1){
            $("html, body").animate({scrollTop: $('section#about').offset().top-50}, 1000);
        }
        if(menu_index==2){
            $("html, body").animate({scrollTop: $('section#product').offset().top-150}, 1000);
        }
    }
    else{
        if(menu_index==0){
            $("html, body").animate({scrollTop: 0}, 1000);
        }
        if(menu_index==1){
            $("html, body").animate({scrollTop: $('section#about').offset().top}, 1000);
        }
        if(menu_index==2){
            $("html, body").animate({scrollTop: $('section#product').offset().top}, 1000);
        }
    }
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
function doCookieSetup(name, value) {
	var expires = new Date();
	//有效時間保存 2 天 2*24*60*60*1000
	expires.setTime(expires.getTime() + 604800000);
	document.cookie = name + "=" + escape(value) + ";expires=" + expires.toGMTString()
}

// windowScroll
var winScroll;
var winHeight;
var is_act01=false, is_act02=false, is_act03=false, is_act04=false;
function windowScrollIndex(){
	winScroll = $(window).scrollTop();
    winHeight = $(window).height();
    if(winScroll>=$('section#about').offset().top-winHeight*0.8 && is_act01==false){
        is_act01=true;
        act02();
    }
    if(winScroll>=$('section#video .video01').offset().top-winHeight*0.8 && is_act02==false){
        is_act02=true;
        act03();
    }
    if(winScroll>=$('section#product').offset().top-winHeight*0.8 && is_act03==false){
        is_act03=true;
        act04();
    }
}
