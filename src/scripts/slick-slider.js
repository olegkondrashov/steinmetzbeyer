
$(document).ready(function () {
  //main
  $('.slider-wrapper').slick({
    infinite: false,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  });

  //leistungen
  $('.slider-wrapper-leistungen').slick({
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  });

  //leistungen-materialien
  $('.gallery-grid').slick({
    infinite: false,
    centerPadding: '0',
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
  });

  //Galerie
  $('.block').slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
    ]
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
