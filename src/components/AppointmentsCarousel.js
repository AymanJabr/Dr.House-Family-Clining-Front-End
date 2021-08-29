import { useEffect } from 'react';

const AppointmentsCarousel = () => {
  let slideIndex = 1;

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('appointments');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  function moveSlides(n) {
    showSlides(slideIndex += n);
  }

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className="appointmentsCarousel">

      <button className="prevButton carouselButton" type="button" onClick={() => { moveSlides(-1); }}>&#10094;</button>

      <div className="appointmentsContainer">
        <div className="appointments fade">
          <p className="width100">Aug 26</p>
          <p className="width100">4-5pm</p>
          <p className="width100">Name: Alessandro</p>
          <p className="width100">Sympots: al;kdfj al;dkfj alkjdiojfei;fj ;alkdfjk;lk jiadsiflkajd fiaj;ioejf lakdjf oijea;lkdfj a;lkkjdjifj;oiadlk fj</p>
          <div className="text">Tests done: ;lkajdsfijole dnl;fjad iad fd ;lakjd;fiojlad  ;akdjf; lkas d[lkjfoiae ldkj  a;lkdfo;ij;eakldjf</div>
        </div>

        <div className="appointments fade">
          <p className="width100">Aug 28</p>
          <p className="width100">1-2pm</p>
          <p className="width100">Name: Mark</p>
          <p className="width100">Sympots: al;kdfj al;dkfj alkjdiojfei;fj ;alkdfjk;lk jiadsiflkajd fiaj;ioejf lakdjf oijea;lkdfj a;lkkjdjifj;oiadlk fj</p>
          <div className="text">Tests done: ;lkajdsfijole dnl;fjad iad fd ;lakjd;fiojlad  ;akdjf; lkas d[lkjfoiae ldkj  a;lkdfo;ij;eakldjf</div>
        </div>

        <div className="appointments fade">
          <p className="width100">Aug 30</p>
          <p className="width100">8-9pm</p>
          <p className="width100">Name: Luca</p>
          <p className="width100">Sympots: al;kdfj al;dkfj alkjdiojfei;fj ;alkdfjk;lk jiadsiflkajd fiaj;ioejf lakdjf oijea;lkdfj a;lkkjdjifj;oiadlk fj</p>
          <div className="text">Tests done: ;lkajdsfijole dnl;fjad iad fd ;lakjd;fiojlad  ;akdjf; lkas d[lkjfoiae ldkj  a;lkdfo;ij;eakldjf</div>
        </div>
      </div>

      <button className="nextButton carouselButton" type="button" onClick={() => { moveSlides(1); }}>&#10095;</button>
    </div>
  );
};

export default AppointmentsCarousel;
