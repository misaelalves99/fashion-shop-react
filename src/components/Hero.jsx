import Fade from 'react-reveal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgHero1 from '../../src/assets/img-carrousel/hero-01.png';
import ImgHero2 from '../../src/assets/img-carrousel/hero-02.png';
import ImgHero3 from '../../src/assets/img-carrousel/hero-03.png';
import ImgHero4 from '../../src/assets/img-carrousel/hero-04.png';

const Hero = () => {
  const images = [
    ImgHero1,
    ImgHero2,
    ImgHero3,
    ImgHero4
  ];

  return (
    <>
      <section className='w-full bg-background bg-cover bg-center'>
        <Fade bottom duration={2000} distance="40px">
          <div className="w-full max-w-full m-auto">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={true}
              emulateTouch={true}
              swipeable={true}
              interval={3000}
              transitionTime={500}
              className="carousel"
            >
              {images.map((url, index) => (
                <div className="slide" key={index}>
                  <img src={url} alt={`Slide ${index + 1}`} className="w-full"/>
                </div>
              ))}
            </Carousel>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Hero;
