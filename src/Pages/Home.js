import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from '../Components/ImageSlider';
import Gallery from '../Components/Gallery';
import Template from "../Components/Template";



const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="page-container home">
      <h1>Porsche</h1>
      <p>Your porsche journey starts now.</p>

      {/* Image Slider */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <img src="https://images-porsche.imgix.net/-/media/92C77A76FFFE4CB6AC4808FC077B9F4B_8B0BB52914224A8F81898F68A30289D3_taycan-4s?w=1759&q=85&auto=format" alt="Porsche 1" />
          <img src="https://di-uploads-pod29.dealerinspire.com/porscheontario1/uploads/2021/08/2022-porsche-911-carrera-trim-levels.png" alt="Porsche 2" />
          <img src="https://img.autocarpro.in/autocarpro/ec828459-7d0d-446e-8309-a6cf60e4a0a5_Image-4.jpeg?w=750&h=490&q=75&c=1" alt="Porsche 3" />
        </Slider>
      </div>

    <div>
       <h1 className='page home-page'>
            Home of Porsche Motorsport
            </h1>
       <p>Dive into the world of Porsche Motorsport, where passion meets precision, and every race is a new story waiting to be told. Whether it’s the endurance challenges of Le Mans, the adrenaline-fueled action of Formula E, or the cutting-edge competition in Esports, our Porsche Motorsport Hub brings you closer to the action than ever before.
         </p> 

       <p> Follow every lap, every pit stop, and every victory as we take you behind the scenes with the entire Porsche Motorsport Team. From customer racing to the pinnacle of motorsport, this is your ultimate destination to experience the legacy and future of Porsche in racing. Don’t just watch – immerse yourself in the journey.
          </p> 
 
  </div>


  <Template /> <br></br> 
  








  <div className="Imgslid" style={{ display: "flex", gap: "20px" }}>
      <ImageSlider
        beforeImage="https://www.stratstone.com/-/media/stratstone/porsche/car-models/inline-images/911/porsche-911-turbo-720x405px.ashx"
        afterImage="https://images-porsche.imgix.net/-/media/92C77A76FFFE4CB6AC4808FC077B9F4B_8B0BB52914224A8F81898F68A30289D3_taycan-4s?w=1759&q=85&auto=format"
      />

      <br></br>

      <ImageSlider
        beforeImage="https://www.autopediame.com/storage/images/Porsche/zzzzzzz%20por%C5%9F.jpg"
        afterImage="https://www.edmunds.com/assets/m/cs/blt1b3fe5ecec2e77b9/6712911a1c3e18e235603dcf/2025_Porsche_Panamera_GTS_011_1600.jpg"
      />
    </div>

      {/* Porsche Approved Section */}
<div className="approved-section">
  {/* Left Image */}
  <div className="approved-image">
    <img
      src="https://images.ctfassets.net/s699s7kh1jys/63ZVpMyNuQnEbx57zEz78V/a5e40fef137c0ba6cfb383de7466696a/taycan_wallpaper_gts_desktop_1.jpg"
      alt="Porsche Approved"
    />
  </div>

  {/* Right Text */}
  <div className="approved-text">
    <h2>Porsche Approved <br /> Pre-Owned Cars.</h2>
    <p>
      A Porsche is always a Porsche. Our Porsche Approved Pre-Owned Cars are just as thrilling 
      to drive today as they were on their first day. We put our heart and soul into preparing 
      the vehicles for your driving pleasure. They exude the same passion due to the 111-point 
      quality check we carry out. And with our Porsche Approved Warranty, you have complete 
      peace of mind.
    </p>
    <button className="approved-btn">Read more</button>
  </div>
</div>

   
    
    <Gallery/>
    
  


      {/* Image Gallery */}
      <div className="gallery">
        <img src="https://a.storyblok.com/f/338913/1920x1080/c4ba0518e0/16-9_e-performance_1920x1080.jpg/m/1398x786/filters:format(webp):quality(45)" alt="Porsche 1" />
        <img src="https://images-porsche.imgix.net/-/media/B833173E694F4914B02A6DE430AA512F_37D952603E9049C2ADF35C5780EA333C_008-extended-teaser_PEC_LEIP_4-3_3840x2880?w=350&q=45&dpr=2&auto=format" alt="Porsche 2" />
        <img src="https://images-porsche.imgix.net/-/media/72804B67ECC144698C4F7555CB6FD2F5_F2CEFF159E0242F39BB1F6A904A1C66B_CZ26W10OX0002-911-turbo-s-rear-mobile?fp-x=0.5&fp-y=0.5&w=999&ar=1%3A1&q=45&dpr=2&crop=focalpoint&auto=format" alt="Porsche 3" />
        <img src="https://images-porsche.imgix.net/-/media/C46D3DC88EF64A3180BC892F3BC41B23_EEF0E5E01A9C47FB850B11FB41A25AE8_CZ26W00OX0003-911-turbo-s-and-911-turbo-s-cabrio?w=1200&q=45&crop=faces%2Centropy%2Cedges&auto=format" alt="Porsche 4" />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Porsche Fansite | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
