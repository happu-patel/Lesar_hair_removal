$(document).ready(function() {

    //our patitent

    $('.our-patients .owl-carousel').owlCarousel({

        loop:false,        

        nav:true,

        margin:10,

        dots:false,

        navText: ['<img src="images/icon-right.png" alt="">','<img src="images/icon-right.png" alt="">'],

        responsive:{

            0:{

                items:1

            },

            576:{

                items:2,

                margin: 20

            },

            768:{

                items:3,

                margin:20                

            },

            1200:{

                margin:45

            }

        }

    });

    

    //our patitent results

    $('.our-patients-r .owl-carousel').owlCarousel({

        loop:false,        

        nav:true,

        margin:10,

        dots:false,

        navText: ['<img src="images/icon-right.png" alt="">','<img src="images/icon-right.png" alt="">'],

        responsive:{

            0:{

                items:1

            },

            576:{

                items:2,

                margin: 20

            },

            768:{

                items:3,

                margin:20                

            },

            1200:{

                margin:45

            }

        }

    });



    //video testimonials

    $('.v-test .owl-carousel').owlCarousel({

        loop:false,        

        nav:true,

        items:2,

        margin:10,

        dots:false,

        navText: ['<img src="images/icon-right.png" alt="">','<img src="images/icon-right.png" alt="">'],

        responsive:{

            0:{

                items:1

            },

            576:{

                items:2,

                margin:20                

            },

            1200:

            {

                margin:85

            }

        }

    });



    //testimonials

    $('.testimonials .owl-carousel').owlCarousel({

        loop:false,        

        nav:true,

        items:2,

        margin:20,

        dots:false,

        navText: ['<img src="images/icon-right.png" alt="">','<img src="images/icon-right.png" alt="">'],

        responsive:{

            0:{

                items:1

            },

            767:{

                items:2,

                margin:20                

            },            

            1200:{

                margin:115

            }

        }

    });



    //our partners

    $('.our-partners .owl-carousel').owlCarousel({

        loop:true,

        margin:15,

        nav:true,

        responsive:{

            0:{

                items:2

            },

            768:{

                items:4,

                margin:20                

            },            
            1200:
            {

                margin:15,
                items:6
            }
        },

        dots:false,

        navText: ['<img src="images/icon-right.png" alt="">','<img src="images/icon-right.png" alt="">'],                

    });



    //our patitent skin results

    $('.op .owl-carousel').owlCarousel({

        loop:false,

        margin:15,

        nav:true,

        items:1,

        dots:false,

        navText: ['<img src="images/icon-right.png" alt="">','<img src="images/icon-right.png" alt="">'],                

    });



    //lazyload

    $(function() {

        $('.lazy').Lazy();

    });    



    //scroll top    

    $(window).scroll(function () {

        if($(window).scrollTop() > 100) 

        {

          $(".scroll-top").addClass('show-scroll');          

        } 

        else 

        {

            $(".scroll-top").removeClass('show-scroll');

        }

    });

    $(".scroll-top").click(function() {

        $("html, body").animate({scrollTop: 0}, 3000);

     });



    //toggle menu

    $(".navbar-toggler").click(function(){

        $("body,html").addClass("toggle-menu");

    });

    $(".ico-close").click(function(){

        $("body,html").removeClass("toggle-menu");

    });

    var menu = $(".navbar-collapse").html();

    var em = $(".ht-detail").html();   

    $(".m-menu-scroll").html(menu);

    $(".m-menu-scroll .navbar-nav").after(em);

});



//fixed header

if($(window).width() >= 768)

{

        $(window).scroll(function() {

            if ($(this).scrollTop() >= 150){  

                $('header').addClass("fixed-header");

            }

            else{

                $('header').removeClass("fixed-header");

            }

        });

    

}