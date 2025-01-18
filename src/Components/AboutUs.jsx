export const AboutUs = () => {

    return(

        <section className="px-[10vw] w-full">
            {/* Title */}
            <div className="w-full flex justify-start items-center" >
                About Us
            </div>


            {/* Text Area*/}
            <div className="w-[50%] flex flex-row items-center">
                {/* Primary Text */}
                <div className="font-secFont1 text-white text-6xl">
                    Lorem ipsum dolor sit amet.
                </div>

                {/* Secondary Text + counters */}
                <div className="w-[50%] flex flex-col">
                    <div className="w-full font-secFont1 text-white text-[0.98rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem similique facere, recusandae mollitia cumque sed nostrum ad eaque tempora voluptatibus culpa voluptatem. Est nobis earum dolorem maxime quod minima saepe cum delectus ipsam nulla ipsa, nemo quis dicta, soluta odio omnis, molestiae quo. Velit nisi maiores deleniti.
                    </div>

                    {/* Counters */}
                    <div className="w-full">
                        
                    </div>
                </div>
            </div>

        </section>
    )
}