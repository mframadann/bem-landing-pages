import { MailIcon } from "../../assets/compSvg";
import { ImageBEMFooter } from "../../assets/images";
import { NavItem, SocialMediaIconsComp } from "../../contants";
import { SocialMedia } from "../atoms";

const Footer = () => {
  return (
    <div className="w-full  dark:bg-slate-800 dark:bg-opacity-30 bg-footer-primary">
      <div className="w-full px-8 lg:px-0 py-20 flex flex-col lg:flex-row gap-12 lg:gap-0 max-w-6xl mx-auto justify-between h-full">
        <div className="flex flex-col gap-4">
          <img src={ImageBEMFooter} alt="logo-bem-ikmi" className="w-28 h-28" />
          <h1 className="font-bold text-base text-white">
            BEM STMIK IKMI Cirebon
          </h1>
          <p className="text-white font-regular w-64">
            Jl. Perjuangan No.10B, Karyamulya, Kec. Kesambi, Kota Cirebon, Jawa
            Barat 45131
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-brand text-xl font-bold">Website</h1>
          {NavItem?.map((item) => (
            <a
              href="#"
              className="text-base hover:text-brand font-regular text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-brand text-xl font-bold">Kontak</h1>
          <div className="flex gap-2 text-white">
            <MailIcon />
            Example@gmail.com
          </div>
          <div className="flex gap-2 text-white">
            <p>(+62)</p>
            81-xxxx-xxxx
          </div>
        </div>
      </div>
      <div className="w-full lg:h-24 px-6 lg:px-0 lg:py-0 py-10 bg-footer-secondary flex items-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:gap-0 gap-6 justify-center lg:justify-between">
          <h1 className="text-sm text-white text-center lg:text-left">
            © Copyright 2022 By Kemenristek Division All Right Reversed.
          </h1>
          <div className="flex gap-2">
            {SocialMediaIconsComp?.map((item) => (
              <SocialMedia icon={item.component} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
