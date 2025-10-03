import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ExclusiveSection.css";

const ExclusiveSection = () => {
  const slides = [
    {
      image:
        "https://images-porsche.imgix.net/-/media/DC37A92C50CB475BBA31EAC32A2E778A_9DA725FB571246EEB0F1AA3BA8FE7F92_017-text-media-content-4-3-1500x1125-2images-0004-gt105696?w=598&q=45&dpr=2&auto=format", // replace with your Porsche image
      title: "Attention to detail.",
      description:
        "The experience and passion of our employees always result in something extraordinary: Vehicles full of personality and character which fully meet our customers’ needs. Their own line often begins as a small line on paper. Which then becomes something great."
    },
    {
      image:
        "https://images-porsche.imgix.net/-/media/40C11BB8E0854BAD9E30DCB08377D75D_7A6221835EE14354AD6F1617AE88ACAA_017-text-media-content-4-3-1500x1125-2images-0003-resto-928s-my81-also-saddlery3-038-low?w=598&q=45&dpr=2&auto=format",
      title: "Craftsmanship at its best.",
      description:
        "From design sketches to final assembly, every step is carefully crafted with precision. This dedication ensures that every Porsche is unique and truly special."
    },
    {
      image:
        "https://images-porsche.imgix.net/-/media/D61ACE89A81B4CE5A35DB1B943B65EF0_186F66F667C74B4B8F1EBBCB4752BDD4_017-text-media-content-4-3-1500x1125-2images-0000-cj-bts-stills-1-1-27?w=598&q=45&dpr=2&auto=format",
      title: "Innovation meets tradition.",
      description:
        "Our engineers combine state-of-the-art technology with the classic Porsche DNA. This is how we create vehicles that inspire passion across generations."
    }
  ];

  return (
    <div className="exclusive-container">
      <h2 className="exclusive-heading">Committed to exclusivity.</h2>
      <p className="exclusive-subtitle">
        Our goal is to make unique customer requests come true to create
        incomparable vehicles. For every type and every model. To turn something
        special into something unique.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="exclusive-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="exclusive-slide">
              <div className="exclusive-image">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="exclusive-text">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExclusiveSection;
