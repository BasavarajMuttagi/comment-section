const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-black to-violet-900 min-h-screen">
      <div className="text-white space-y-1">
        <div className="text-5xl font-bold text-stone-100">
          These are uncharted waters
        </div>
        <div className="text-lg text-pink-400">
          Sorry, that page can't be found.
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
