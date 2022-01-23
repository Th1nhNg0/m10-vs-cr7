import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const images = [
  "/images/gif/penisGoal.webm",
  "/images/gif/real.webm",
  "/images/gif/vsATM.webm",
  "/images/gif/vsAletico.webm",
  "/images/gif/vsAta.webm",
  "/images/gif/vsPorto.webm",
  "/images/gif/vsVil.webm",
  "/images/gif/vsWolf.webm",
  "/images/gif/vsbayern.webm",
  "/images/gif/vspsg.webm",
  "/images/gif/vsreal.webm",
].sort(() => Math.random() - 0.5);

export default function Slider() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={30}
        autoplay={{
          pauseOnMouseEnter: true,

          delay: 800,
        }}
        slidesPerView={3}
        modules={[Navigation, A11y, Autoplay]}
        navigation
        loop={true}
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="w-full h-full aspect-video">
              <video
                muted
                playsInline
                autoPlay
                loop
                className="object-cover w-full h-full rounded-2xl"
              >
                <source src={image} type="video/webm" />
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
