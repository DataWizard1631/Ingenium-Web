export const Hero = () => {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-[10vw] pt-20 sm:pt-24 md:pt-28 mb-10 sm:mb-16 md:mb-[10vh]">
      {/* Text Area */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h1 className="font-secFont1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold leading-tight">
            Lorem ipsum dolor sit lOREM.
          </h1>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="font-secFont1 text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus unde placeat at reiciendis maxime deleniti sapiente iure dicta ipsam ut rem illum error optio aperiam exercitationem, neque nobis id, dolor numquam quod quaerat!
          </p>
          <button className="bg-colPink text-white rounded-full px-8 sm:px-12 py-3 sm:py-4 w-fit text-sm sm:text-base transition-all duration-300 hover:bg-opacity-90 active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
        <img 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" 
          src="/gif.gif" 
          alt="Hero Image"
        />
      </div>
    </section>
  );
};
  