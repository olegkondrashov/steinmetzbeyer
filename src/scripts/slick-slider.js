
$(document).ready(function(){
    $('.slider-wrapper-leistungen').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
        ]
    });

    $('.gallery-grid').slick({
      centerPadding: '0',
      slidesToShow: 7,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
      ]
  });
  $('.slider-wrapper').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
    ]
});
$('.block').slick({
  slidesToShow: 4
});

    
    const arrowRight = document.querySelectorAll("button.slick-next.slick-arrow");
    const arrowLeft = document.querySelectorAll("button.slick-prev.slick-arrow");

    arrowLeft.forEach(arrow => {
      // Bild als Hintergrundbild setzen
      arrow.style.backgroundImage = "url('src/img/arrow-icon-links.png')";
      arrow.style.backgroundRepeat = "no-repeat";
      arrow.style.backgroundSize = "contain";
      arrow.style.backgroundPosition = "center";
      arrow.textContent = "";
    })

    arrowRight.forEach(arrow => {
      // Bild als Hintergrundbild setzen
      arrow.style.backgroundImage = "url('src/img/arrow-icon-1177.png')";
      arrow.style.backgroundRepeat = "no-repeat";
      arrow.style.backgroundSize = "contain";
      arrow.style.backgroundPosition = "center";
      arrow.textContent = "";
    })


  });
