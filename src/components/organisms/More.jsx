import { MockupIlustration } from "../../assets/images";
import { SectionLabel } from "../atoms";

const MoreSection = () => {
  return (
    <div
      id="more"
      className="w-full lg:h-[35rem] bg-brand dark:bg-slate-900 bg-opacity-20 lg:px-0 pt-20"
    >
      <div className="w-full max-w-6xl mx-auto h-full flex flex-col gap-6 lg:flex-row justify-between">
        <div className="w-full h-full flex px-6 lg:px-0 justify-center flex-col gap-6">
          <SectionLabel title="Ikuti Kami" />
          <h1 className="text-2xl lg:text-4xl break-normal leading-tight dark:text-gray-300 font-bold">
            Ikuti instagram kami untuk informasi lebih lanjut!
          </h1>
          <p className="text-md text-[#656464] dark:text-gray-400">
            Yuk ikuti instagram kami untuk mendapatkan informasi dan kegiatan
            dari BEM STMIK IKMI Cirebon!!
          </p>
          <button className="flex group bg-brand items-center justify-center focus:ring-4 transition-all duaration-300 focus:ring-brand focus:ring-opacity-40 text-base font-semibold rounded-full  gap-2 w-48 h-14 text-white">
            Ikuti sekarang
          </button>
        </div>
        <div className="w-full h-full flex items-end justify-end relative">
          <img
            src={MockupIlustration}
            alt="mobile-mockup-ilustration"
            className="lg:absolute lg:bottom-0 lg:right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
