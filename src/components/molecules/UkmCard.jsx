import { CheckLabel } from "../atoms";

const UkmCard = ({ title, socialMedia, image }) => {
  return (
    <div className="w-full bg-white select-none dark:bg-brand dark:bg-opacity-10 lg:h-80 transition-all duratiion-300 flex items-center lg:flex-col lg:gap-6 lg:justify-center hover:shadow-md shadow-blue-300 rounded-xl border dark:border-none border-blue-600">
      <div className="lg:w-44 lg:h-[10.688rem] w-24 h-28 lg:bg-[url('../../assets/images/ukmborder.png')] bg-no-repeat object-cover flex items-center px-[0.90rem]">
        <div className="lg:w-[8.875rem] w-16 h-16 lg:h-[8.875rem] relative lg:bg-brand lg:bg-opacity-20 rounded-full flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center lg:overflow-hidden rounded-full">
            <img src={image} alt="ukm-image" />
          </div>
          <CheckLabel />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-0 lg:text-center">
        <h1 className="lg:text-2xl text-md font-semibold dark:text-white">
          {title}
        </h1>
        <a
          href={`https://instagram.com/${socialMedia.split("@")[1]}`}
          target="_blank"
          className="lg:text-base text-xs hover:underline cursor-pointer font-medium hover:text-gray-700 text-gray-400"
        >
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default UkmCard;
