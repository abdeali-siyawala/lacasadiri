      jQuery(document).ready(function() {
          jQuery(window).scroll(function() {
              if (jQuery(window).scrollTop() >= 250) {
                  jQuery('header').addClass('fixed-header');
                  jQuery('#text_').addClass('search_bar_text');

              } else {
                  jQuery('header').removeClass('fixed-header');
                  jQuery('#text_').removeClass('search_bar_text');

              }
              //   if (jQuery(window).scrollTop() >= 1) {
              //       jQuery('#footer_banner').addClass('fixed_banner');

              //   } else {
              //       jQuery('#footer_banner').removeClass('fixed_banner');

              //   }
          });
          // carousal

          $('.carous_ricerca').slick({
              autoplay: true,
              dots: false,
              arrows: false,
              slidesToShow: 1,
              fade: true,
          });

          $('.carous').slick({
              autoplay: true,
              dots: true,
              slidesToShow: 5,
              responsive: [{
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                          infinite: true,
                          dots: true
                      }
                  },
                  {
                      breakpoint: 600,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
              ]

          });



          // italy map

          jQuery('#vmap').vectorMap({
              map: 'it_regions_mill',
              backgroundColor: 'white',
              borderColor: '#818181',
              borderOpacity: 0.25,
              borderWidth: 1,
              color: '#1A9C82',
              enableZoom: true,
              hoverColor: '#c9dfaf',
              hoverOpacity: null,
              normalizeFunction: 'linear',
              scaleColors: ['#b6d6ff', '#005ace'],
              selectedColor: '#c9dfaf',
              selectedRegions: null,
              showTooltip: true,


          });


      });