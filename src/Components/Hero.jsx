export const Hero = () => {

    return(
        <section className="w-screen pt-[12vh] mb-[150px] px-[10vw]">
                
            {/* Text Area */}
            <div className="w-full flex flex-row h-[40vh]">
                <div className=" w-1/2 font-secFont1 text-8xl  text-white font-extrabold">
                    Lorem ipsum dolor sit lOREM ASS.
                </div>
                <div className="w-1/2 font-secFont1 text-white text-[0.97rem] pt-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus unde placeat at reiciendis maxime deleniti sapiente iure dicta ipsam ut rem illum error optio aperiam exercitationem, neque nobis id, dolor numquam quod quaerat! In quas minus blanditiis eligendi nisi rerum ducimus, earum quam dolorem illum molestiae consectetur sit, modi officiis qui vero aliquam adipisci suscipit consequuntur perspiciatis ad veniam distinctio.
                    <br/>
                    <br/>
                    <br/>
                    <button className="bg-white text-colBlack rounded-full px-[4rem] py-[1.2rem]">Learn More </button>
                </div>

            </div>

            {/* Image/ Gif */}
            <div className="">
                <img className="w-full rounded-xl" src="/gif.png" alt="" />
            </div>
        </section>
    )
}