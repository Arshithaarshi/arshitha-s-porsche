import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gallery from '../Components/Gallery';
import Template from "../Components/Template";
import AutoSlider from "../Components/AutoSlider";
import PromoCards from "../Components/PromoCards";
import ExclusiveSection from "../Components/ExclusiveSection";
import RangeRoverSection from "../Components/RangeRoverSection";
import Footer from "../Components/Footer";
import VelarShowcase from "../Components/VelarShowcase";








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


      <AutoSlider />

     <br></br>
     <section style={{ backgroundColor: "#fff", padding: "2rem 0" }}>
  <PromoCards />
</section>

      <br></br>

      {/* Image Slider */}
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <img src="https://images-porsche.imgix.net/-/media/D1554F444AEF4C96A92C2E88F3F20A94_1982732C3A4D4D3AAAB76486D51AD62C_CZ26W10OX0001-911-turbo-s-side?w=2560&h=1440&q=45&crop=faces%2Centropy%2Cedges&auto=format" alt="Porsche 1" />
          <img src="https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2025/01/mixcollage-08-jan-2025-09-30-am-6844.jpg" alt="Porsche 2" />
          <img src="https://shop.porschedowntowntoronto.com/cdn/shop/products/TE21P4BIX0107_1_low_21-Zoll_Panamera_Exclusive_Design_Sport_Winterkomplettradsatz_lackiert_in_Schwarz_hochglanz_huge_2048x.jpg?v=1651689699" alt="Porsche 3" />
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
          <br></br>
 
  </div>
   

  

  <Template /> <br></br> 
  
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
    
    
    <ExclusiveSection/>
    <RangeRoverSection/>
    <VelarShowcase/>
    <Footer/>
    </div>
  );
};

export default Home;
