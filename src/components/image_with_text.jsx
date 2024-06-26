/* eslint-disable react/no-unescaped-entities */
const ImageWithText = () => {
  return (
    <div className="relative w-full h-auto">
      <img
        src="https://res.cloudinary.com/dqph3qip7/image/upload/v1719431588/ts_geeks/engine.png"
        alt="Description"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-left justify-center flex-col ml-10 sm:ml-10 mm:ml-20 lg:ml-30">
        <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
          T&S TECH GEEKS
        </span>
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Your challenges, our solutions
        </span>
        <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          always reliable
        </span>
      </div>
    </div>
  );
};

export default ImageWithText;
