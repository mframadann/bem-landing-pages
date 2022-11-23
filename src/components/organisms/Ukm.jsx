import { Adcom, UkmBorderImage } from "../../assets/images";
import { SectionLabel } from "../atoms";
import { CardUkm } from "../molecules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Ukm = () => {
  return (
    <div className="w-full max-w-6xl py-20 mx-auto">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 items-center">
        <SectionLabel title="Ukm & Hima" />
        <h1 className="text-4xl break-normal leading-tight text-center dark:text-gray-300 font-bold">
          Unit Kegiatan Mahasiswa Dan Himpunan Mahasiswa
        </h1>
      </div>
      <div className="w-full py-20">
        <div className="w-full flex gap-6 cursor-grab active:cursor-grabbing">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2000 }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardUkm
                image={Adcom}
                title="Adcom"
                socialMedia="@official_adcom"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Ukm;
