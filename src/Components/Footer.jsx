import React from "react";

function Footer() {
  return (
    <section className="bg-colBlack h-4/5 w-full text-white px-20 py-32 flex flex-col justify-around gap-6">
      <section className="flex gap-8">
        <div>
          <h1 className="text-6xl font-primaryFont">Lorem, ipsum</h1>
          <h2 className="text-4xl font-primaryFont">Lorem, ipsum dolor</h2>
        </div>
        <div className="flex-1 flex gap-4 items-end border-b-2 border-gray-600 py-5 pl-4">
          <input
            className="bg-colBlack  text-gray-600 w-full pl-4 py-3"
            placeholder="What's your name?"
          />
          <button className="bg-slate-50 font-secFont1 text-black px-6 py-3 rounded-3xl">
            SUBMIT
          </button>
        </div>
      </section>
      <section className="flex justify-between font-secFont1 border-b-2 border-gray-600 py-3 ">
        <div>
          <p>Home / About Us / Project /</p>
          <p>Services / Careers / Blogs</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-gray-400 text-sm">Contact us</p>
            <p>+9876543210</p>
          </div>

          <div className="flex gap-5">
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
