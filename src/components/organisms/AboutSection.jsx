import { MissionItem } from "../../contants";
import { Fade, Flip } from "react-reveal/";
import { List, SectionLabel } from "../atoms";

const AboutSection = () => {
  return (
    <section className="w-full max-w-6xl gap-14 flex flex-col lg:flex-row justify-between py-20 mx-auto">
      <div className="w-full gap-8 flex flex-col lg:flex-row">
        <Flip left cascade>
          <div className="grid gap-8 px-4 lg:px-0 lg:grid-cols-2 w-full ">
            <div className="lg:aspect-square rounded-2xl overflow-hidden cursor-pointer group">
              <img
                src="https://picsum.photos/id/239/200/300"
                alt="image"
                className="group-hover:scale-150 transition-all duration-300 group-hover:rotate-12 w-full"
              />
            </div>
            <div className="lg:aspect-[1/1.5]  lg:row-span-2 lg:my-auto bg-gray-300 overflow-hidden rounded-2xl cursor-pointer group">
              <img
                width="100%"
                height="100%"
                src="https://picsum.photos/id/311/200/300"
                alt="image"
                className="group-hover:scale-150 transition-all duration-300 group-hover:rotate-12 w-full"
              />
            </div>
            <div className="lg:aspect-square overflow-hidden transition-all duration-300 rounded-2xl cursor-pointer group">
              <img
                src="https://picsum.photos/id/127/200/300"
                alt="image"
                className="group-hover:scale-150 transition-all duration-300 group-hover:rotate-12 w-full"
              />
            </div>
          </div>
        </Flip>
      </div>
      <Fade right cascade>
        <div className="w-full flex flex-col justify-center px-10 gap-4">
          <SectionLabel title="Tentang kami" />
          <h1 className="text-4xl dark:text-gray-300 font-bold leading-normal">
            Misi BEM STMIK IKMI Cirebon
          </h1>
          {MissionItem?.map((item) => (
            <List text={item.text} />
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default AboutSection;
