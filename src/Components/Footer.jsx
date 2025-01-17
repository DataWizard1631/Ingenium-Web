import React from "react";

function Footer() {
  return (
    <section>
      <section className="bg-colBlack h-4/5 w-full text-white px-20 py-32">
        <h1 className="text-4xl">Lorem, ipsum.</h1>
        <h2 className="text-3xl">Lorem, ipsum dolor.</h2>
      </section>
      <section>
        <div>
            <p>Home/ About Us / Project /</p>
            <p>Services / Careers / Blogs</p>
        </div>
        <div>
            <p>Contact us</p>
            <p>+9876543210</p>
            <div className="flex justify-between">
                <div>
                    <p>Location</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div>
                    <p>Email</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>

            </div>
        </div>

      </section>
    </section>

  );
}

export default Footer;
