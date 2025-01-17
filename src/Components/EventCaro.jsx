import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = () => {
    const images = [
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",

      ];

 return (
    <div className="w-full flex justify-center items-center py-10 bg-gray-900">
      <Swiper
        spaceBetween={30}   // Space between slides
        slidesPerView={3}   // Show 3 slides at a time (1 large, 2 smaller)
        centeredSlides={true}  // Center the current slide
        loop={true}        // Loop the slides
        navigation={true}  // Show navigation arrows
        modules={[Navigation]}
        className="w-[80%] h-[500px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="transition-all duration-500 ease-in-out transform hover:scale-110 w-[70%] h-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
