const CardMinistry = ({ image }) => {
  return (
    <div className="flex max-w-xs rounded-xl mx-auto md:mx-0 lg:mx-0 justify-center items-center dark:bg-slate-800 dark:shadow-none lg:p-4 p-2 bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300">
      <div className="rounded-xl object-cover overflow-hidden">
        <img src={image} alt="ministry" />
      </div>
    </div>
  );
};

export default CardMinistry;
