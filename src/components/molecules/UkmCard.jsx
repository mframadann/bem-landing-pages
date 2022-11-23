import { CheckLabel } from "../atoms";

const UkmCard = ({ title, socialMedia, image }) => {
  return (
    <div className="w-full select-none h-80 transition-all duratiion-300 flex items-center flex-col gap-4 justify-center shadow-md shadow-gray-200 rounded-xl hover:border hover:border-blue-600">
      <div className="w-44 h-[10.688rem] bg-[url('../../assets/images/ukmborder.png')] bg-no-repeat object-cover flex items-center px-[0.90rem]">
        <div className="w-[8.875rem] h-[8.875rem] relative bg-brand bg-opacity-20 rounded-full flex items-center justify-center">
          <img src={image} alt="ukm-image" />
          <CheckLabel />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h1 className="text-base font-medium text-gray-400">{socialMedia}l</h1>
    </div>
  );
};

export default UkmCard;
