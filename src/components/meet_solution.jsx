const MeetSolution = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-white">
      <div
        className="w-full md:w-1/2 h-64 md:h-auto"
        style={{ height: "100vh" }}
      >
        <img
          src="https://res.cloudinary.com/dqph3qip7/image/upload/v1719431592/ts_geeks/table.png"
          alt="Intro"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="w-full md:w-1/2 p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-10">
          Discover <span className="font-bold">Your Solution</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10">
          Experience peace of mind and confidence in your IT infrastructure with
          T&S Tech Geeks.
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-10">
          Few companies match the benefits we bring to your business.
          <br />
          Convenience, flexibility, efficiency, and savings—all in one call.
          <br></br>Contact us today.
        </p>
      </div>
    </div>
  );
};

export default MeetSolution;
