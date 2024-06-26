const IntroSection = () => {
  return (
    <div className="relative min-h-screen bg-white" style={{ height: "100vh" }}>
      <div
        className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-8 bg-white z-10 md:ml-20 md:mr-20 lg:ml-40 lg:mr-20 w-full md:w-1/2"
        style={{ height: "100vh" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-10">
          T&S Tech Geeks
        </h1>
        <h2 className="text-xl md:text-2xl text-black mb-10">
          Delivering peace of mind and confidence.
        </h2>
        <p className="text-base md:text-lg text-black mb-5">
          Empowering your business with tailored Value and simplifying <br></br>{" "}
          Complex tasks In straightforward terms.
        </p>
      </div>
      <div className="w-full h-full ">
        <img
          src="../../assets/data.jpg"
          alt="Intro"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default IntroSection;
