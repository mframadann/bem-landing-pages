import Fade from "react-reveal/Fade";

const List = ({ text }) => {
  return (
    <Fade right cascade>
      <div className="flex gap-3 items-center">
        <div className="bg-brand bg-opacity-10 w-6 h-6 flex gap-2 items-center justify-center rounded-full">
          <div className="bg-brand h-3 w-3 rounded-full"></div>
        </div>
        <div className="w-full">
          <p className="text-[#171648] dark:text-gray-300 text-base font-medium">
            {text}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default List;
