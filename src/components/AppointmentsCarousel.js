import { useEffect } from 'react';

const AppointmentsCarousel = () => {
  let slideIndex = 1;

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  //   showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className="AppointmentsCarousel">

      <div className="slideshow-container">

        <div className="mySlides fade">
          <p className="width100">This is image 1</p>
          <div className="text">Caption Text</div>
          <div className="numbertext">1 / 3</div>
        </div>

        <div className="mySlides fade">
          <p className="width100">This is image 2</p>
          <div className="text">Caption Two</div>
          <div className="numbertext">2 / 3</div>
        </div>

        <div className="mySlides fade">
          <p className="width100">This is image 3</p>
          <div className="text">Caption Three</div>
          <div className="numbertext">3 / 3</div>
        </div>

        <button className="prev" type="button" onClick={() => { plusSlides(-1); }}>&#10094;</button>
        <button className="next" type="button" onClick={() => { plusSlides(1); }}>&#10095;</button>
      </div>
      <br />

    </div>
  );
};

export default AppointmentsCarousel;
