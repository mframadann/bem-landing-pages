import React from "react";
import Fade from "react-reveal/Fade";
import { ArrowRight } from "../../assets/compSvg";
import { HeroImage } from "../../assets/images";
import { SectionLabel } from "../atoms";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full items-center justify-center py-20 gap-6 flex lg:flex-row flex-col-reverse lg:px-0 px-4 max-w-6xl mx-auto"
    >
      <Fade left cascade>
        <div className="flex max-w-lg flex-col gap-6 mx-auto lg:mx-0">
          <SectionLabel title="By Kemenristek" />
          <h1 className="lg:text-6xl text-4xl leading-tight dark:text-gray-300 font-bold">
            Badan Eksekutif Mahasiswa
          </h1>
          <p className="text-md text-[#656464] dark:text-gray-400">
            mewujudkan badan eksekutif mahasiswa STMIK IKMI kearah progresif,
            revolusioner, sehingga terciptanya mahasiswa yang kritis, aktif, dan
            berkualitas.
          </p>
          <button className="flex group bg-transparent items-center justify-center focus:ring-4 transition-all duaration-300 focus:ring-brand focus:ring-opacity-30 text-base font-semibold border-2 rounded-full border-brand gap-2 text-brand w-48 h-14">
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
      </Fade>
      <Fade right cascade>
        <div className="flex mx-auto max-w-lg">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
