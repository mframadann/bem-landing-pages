import { Adcom, UkmBorderImage } from "../../assets/images";
import { CarouselControllerButton, SectionLabel } from "../atoms";
import { CardUkm } from "../molecules";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Ukm = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full max-w-6xl py-20 mx-auto">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 items-center">
        <SectionLabel title="Ukm & Hima" />
        <h1 className="text-2xl lg:text-4xl break-normal leading-tight text-center dark:text-gray-300 font-bold">
          Unit Kegiatan Mahasiswa Dan Himpunan Mahasiswa
        </h1>
      </div>

      <div className="w-full py-20 px-6 lg:px-0">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={1500}
          arrows={true}
          customLeftArrow={<CarouselControllerButton />}
          customRightArrow={<CarouselControllerButton iconAlign="right" />}
          containerClass="w-full flex cursor-grab active:cursor-grabbing"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="lg:mx-4"
        >
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
          <CardUkm image={Adcom} title="Adcom" socialMedia="@official_adcom" />
        </Carousel>
      </div>
    </div>
  );
};

export default Ukm;
