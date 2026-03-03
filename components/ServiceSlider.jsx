import {
  RxCalendar,
  RxVideo,
  RxMagicWand,
  RxSpeakerLoud,
  RxHeart,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCalendar,
    title: "Event Planning",
    description: "Full-scale event conceptualization, planning, and execution.",
  },
  {
    Icon: RxVideo,
    title: "Content Creation",
    description: "Professional video production and multimedia content creation.",
  },
  {
    Icon: RxMagicWand,
    title: "Social Media Strategy",
    description: "Content planning and social media growth across platforms.",
  },
  {
    Icon: RxSpeakerLoud,
    title: "Sound & Music",
    description: "Music production and live sound management for events.",
  },
  {
    Icon: RxHeart,
    title: "Brand Activations",
    description: "Creative brand experiences that engage your audience.",
  },
  {
    Icon: RxRocket,
    title: "Community Building",
    description: "Building engaged communities through authentic storytelling.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      freeMode
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div>
              {/* icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              {/* title & description */}
              <div>
                <div className="mb-2 text-lg font-medium">{item.title}</div>
                <p className="text-sm leading-normal text-white/80 line-clamp-3">{item.description}</p>
              </div>
            </div>

            {/* arrow - static position */}
            <div className="text-3xl mt-6">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
