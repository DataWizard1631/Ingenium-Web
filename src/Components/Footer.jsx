import React from "react";

function Footer() {
  return (
    <section className="bg-colBlack w-full text-white px-6 md:px-20 py-16 md:py-32 flex flex-col gap-12">
      {/* Top Section */}
      <section className="flex flex-col md:flex-row gap-8">
        {/* Title Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-primaryFont">Lorem, ipsum</h1>
          <h2 className="text-2xl md:text-4xl font-primaryFont">Lorem, ipsum dolor</h2>
        </div>

        {/* Input Section */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 items-center md:items-end border-b-2 border-gray-600 py-4">
          <input
            className="bg-colBlack text-gray-600 w-full md:w-auto flex-grow pl-4 py-3 rounded-md"
            placeholder="What's your name?"
          />
          <button className="bg-slate-50 font-secFont1 text-black px-6 py-3 rounded-3xl">
            SUBMIT
          </button>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col md:flex-row justify-between gap-8 font-secFont1 border-b-2 border-gray-600 pb-6">
        {/* Links Section */}
        <div className="text-center md:text-left">
          <p>Home / About Us / Project /</p>
          <p>Services / Careers / Blogs</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-6">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">Contact us</p>
            <p>+9876543210</p>
          </div>

          {/* Location and Email */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-center sm:text-left">
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p>Lorem ipsum dolor.</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
