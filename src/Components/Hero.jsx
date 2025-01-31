export const Hero = () => {
    return (
      <section className="w-full h-full px-6 sm:px-[10vw] pt-16 mb-[10vh]">
        {/* Text Area */}
        <div className="w-full flex flex-col md:flex-row h-auto md:h-[40vh]">
          {/* Left Column */}
          <div className="w-full md:w-1/2 font-secFont1 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-extrabold mb-6 md:mb-0">
            Lorem ipsum dolor sit lOREM.
          </div>
  
          {/* Right Column */}
          <div className="w-full md:w-1/2 font-secFont1 text-white text-sm sm:text-base md:text-[1rem] lg:text-[1.1rem] pt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus unde placeat at reiciendis maxime deleniti sapiente iure dicta ipsam ut rem illum error optio aperiam exercitationem, neque nobis id, dolor numquam quod quaerat! In quas minus blanditiis eligendi nisi rerum ducimus, earum quam dolorem illum molestiae consectetur sit, modi officiis qui vero aliquam adipisci suscipit consequuntur perspiciatis ad veniam distinctio.
            <button className="bg-colPink text-white rounded-full px-12 py-4 ml-0 mt-5 md:mt-10 transition-all duration-300 hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
  
        {/* Image */}
        <div className="">
          <img className="w-full rounded-xl object-cover" src="/gif.gif" alt="Hero Image" />
            
        </div>
      </section>
    );
  };
  