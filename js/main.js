$(document).ready(function(){

    var Iconic = function(){};

     Iconic.prototype = {
         init: function(){
             // set full screen
             $(window).on('resize', function(){
                 var winWidth = $(window).width();
                 var winHeight = $(window).height();

                 // set full screen for body
                 $('body').width(winWidth)
                     .height(winHeight);
             });
             $(window).trigger('resize');
         },
         hoverLink: function(){
             $('#main-content .item a').hover(function(){
                     $(this).find('i.fa').show().css('margin-left', 60);
                $(this).find('i.fa').animate({
                    'margin-left': 10
                }, 200)
             },
             function(){
                 $(this).find('i.fa').hide();
             }
             );
         },
         translate: function(){
             var arrayLang = new Array();
             arrayLang['en'] = ['Japan', 'Vietnam', 'Indonesia'];
             arrayLang['jp'] = ['日本', 'ベトナム', 'インドネシア'];
             arrayLang['vn'] = ['Nhật Bản', 'Việt Nam', 'Indonesia'];
             arrayLang['id'] = ['Jepang', 'Vietnam', 'Indonesia'];
             $('#languages-switcher a').on('click', function(e){
                 e.preventDefault();

                 var lang = $(this).data('lang');
                 newLang = arrayLang[lang];
                 $('#main-content dl dt').each(function(index, value){
                    $(this).html(newLang[index]);
                 });
             });
         }

    };

    var iconic = new Iconic();
    iconic.init();
    iconic.hoverLink();
    iconic.translate();
});

