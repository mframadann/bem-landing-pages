import { MissionItem } from "../../contants";
import { Fade } from "react-reveal/";
import { List, SectionLabel } from "../atoms";
import { AboutImage } from "../../assets/images";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full max-w-6xl gap-14 flex flex-col lg:flex-row justify-between py-20 mx-auto"
    >
      <div className="w-full gap-8 flex flex-col lg:flex-row">
        <Fade left cascade>
          <div className="flex w-full h-full px-6 items-center justify-center ">
            <img src={AboutImage} alt="about-images" />
          </div>
        </Fade>
      </div>
      <Fade right cascade>
        <div className="w-full flex flex-col justify-center px-10 gap-4">
          <SectionLabel title="Tentang kami" />
          <h1 className="lg:text-4xl text-2xl dark:text-gray-300 font-bold leading-normal">
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
