// Import Swiper React components
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroCarousel = (data) => {
  const posts = data.data;
  return (
    <div className="container mx-auto">
      <Swiper
        className="main-carousel flex flex-col items-center justify-center w-full"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {posts.map((post, index) => (
          <SwiperSlide
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 w-full md:w-10/12 lg:w-8/12"
          >
            <div
              className="bg-cover bg-no-repeat bg-center main-carousel flex items-center justify-center bg-blend-soft-light"
              style={{
                backgroundImage: `url(${post.featuredImage?.node.sourceUrl})`,
                opacity: 0.5,
              }}
            >
              
              <h2 className="text-center text-2xl font-bold text-white">
                {post.title}
              </h2>
              <div className="description">
                <p>{post.author.node.name}</p>
                <p>{post.date}</p>
                <p>{post.categories.nodes[0].name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
