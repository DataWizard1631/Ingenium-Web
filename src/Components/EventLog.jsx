export const EventLog = () => {
  return (
    <section>  
            {/* Event Log */}
            <div className="flex h-[30vh] items-center flex-col justify-around mt-[8vh] bg-colBlack ">
                {/* Logo */}
                <div>
                    <img src="" alt="" />
                </div>

                {/* Title */}
                <div>
                    <h2 className="text-9xl font-primaryFont text-white">EVENT LOG</h2>
                </div>
                {/* Description */}
                <div>
                    <p className="text-2xl font-secFont1 max-w-[60vw] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque culpa quisquam vel quos distinctio inventore.</p>
                </div>
            </div>

            {/* Card Section */}
            <div className="w-full flex flex-col items-center  ">

                {/* Event Selector Bars */}
                <div className="items-center flex gap-4 justify-between bg-gray-400 max-w-[60vw]">
                    <div className="text-2xl font-secFont1">e-sports</div>
                    <div className="text-2xl font-secFont1">e-sports</div>
                    <div className="text-2xl font-secFont1">e-sports</div>
                    <div className="text-2xl font-secFont1">e-sports</div>
                    <div className="text-2xl font-secFont1">e-sports</div>
                    <div className="text-2xl font-secFont1">e-sports</div>
                </div>
                

                {/* Event Cards */}
                <div></div>
                
            </div>
    </section>
  )
}