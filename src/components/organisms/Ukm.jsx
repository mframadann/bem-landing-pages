import { SectionLabel } from "../atoms";
import { CardUkm } from "../molecules";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UkmData } from "../../contants";

const Ukm = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
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

      <div className="w-full pb-20 ">
        <Carousel
          draggable={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={1000}
          arrows={true}
          containerClass="w-full flex cursor-grab active:cursor-grabbing"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="lg:mx-4 mx-2 m-20"
          centerMode={true}
          showDots={true}
        >
          {UkmData?.map((item) => (
            <CardUkm
              image={item.logo}
              title={item.name}
              socialMedia={item.socialMedia}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Ukm;
