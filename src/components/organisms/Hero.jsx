import React from "react";
import { ArrowRight } from "../../assets/compSvg";
import { HeroImage } from "../../assets/images";
import { SectionLabel } from "../atoms";

const Hero = () => {
  return (
    <div className="w-full items-center justify-center gap-6 flex lg:flex-row flex-col-reverse lg:px-0 px-4 max-w-6xl mx-auto">
      <div className="flex max-w-lg flex-col gap-6 mx-auto lg:mx-0">
        <SectionLabel title="By Kemenristek" />
        <h1 className="text-6xl leading-tight font-bold">
          Badan Eskekutif Mahasiswa
        </h1>
        <p className="text-md text-[#656464]">
          mewujudkan badan eksekutif mahasiswa STMIK IKMI kearah progresif,
          revolusioner, sehingga terciptanya mahasiswa yang kritis, aktif, dan
          berkualitas.
        </p>
        <button className="flex bg-transparent items-center justify-center focus:ring-4 transition-all duaration-300 focus:ring-[#217BF4] focus:ring-opacity-30 text-base font-semibold border-2 rounded-full border-[#217BF4] gap-2 text-[#217BF4] w-48 h-14">
          Get Started
          <ArrowRight />
        </button>
      </div>
      <div className="flex mx-auto max-w-lg">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
