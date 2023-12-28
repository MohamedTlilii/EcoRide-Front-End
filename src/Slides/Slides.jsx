import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Data from "../Data";
import { useParams } from "react-router-dom";
function Slides({ slideContent }) {
    
    return (
      <div className="slides-container">
        <Swiper navigation pagination={{ type: "fraction" }} modules={[Navigation, Pagination]}>
          {Data.map((slideContent, i) => (
            <SwiperSlide key={i}>
              <img src={slideContent.image.src} alt={slideContent.image.alt} className="lol" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
export default Slides;
