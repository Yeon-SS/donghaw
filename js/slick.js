$( document ).ready( function() {
    $( '.slider' ).slick( {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      dots : true,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            arrows: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: true,
          }
        }
      ]
    } );
  } );



