import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Lazy, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "swiper/css/autoplay";

const images = [
  "/images/gif/penisGoal.gif",
  "/images/gif/real.gif",
  "/images/gif/vsATM.gif",
  "/images/gif/vsAletico.gif",
  "/images/gif/vsAta.gif",
  "/images/gif/vsPorto.gif",
  "/images/gif/vsVil.gif",
  "/images/gif/vsWolf.gif",
  "/images/gif/vsbayern.gif",
  "/images/gif/vspsg.gif",
  "/images/gif/vsreal.gif",
].sort(() => Math.random() - 0.5);

export default function Slider() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={30}
        autoplay={{
          pauseOnMouseEnter: true,
          waitForTransition: true,
          delay: 3000,
        }}
        slidesPerView={3}
        modules={[Navigation, A11y, Lazy, Autoplay]}
        navigation
        loop={true}
        lazy={true}
        pagination={{ clickable: true }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div>
              <img
                className="object-cover w-full h-full rounded-2xl aspect-video"
                src={image}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}