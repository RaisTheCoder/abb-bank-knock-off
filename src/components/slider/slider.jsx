import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "./slider.css";

const Slider = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressCircle = useRef(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("/slides.json");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSlides();
  }, []);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
  };

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="flex items-center">
          <div className="container h-full w-full">
            <div className="slide-left relative flex flex-col w-300 justify-between items-start">
              <p className="slide-name">{item.name}</p>
              <div className="text-content flex flex-col space-y-300 lg:space-y-500 gap-3">
                <h4 className="slide-title text-xl font-semibold lg:text-2xl">
                  {item.title}
                </h4>
                <p className="slide-desc overflow-y-scroll h-20">
                  {item.description}
                </p>
              </div>
              <button className="button w-fit mt-[10px]">{item.button}</button>
            </div>

            <div className="slide-right flex justify-end w-250">
              <img src={item.image} alt={item.title} className="slide-image" />
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <div className="controls flex">
          <button className="prev-btn">←</button>

          <div className="progress">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span className="slide-number">{activeIndex + 1}</span>
          </div>

          <button className="next-btn">→</button>
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
