import { SponserCard } from "./SponserCard"
import { TitleSponserCard } from "./TtileSponserCard"

export const Sponsors = () => {
    return (
        <>
       
        <div className="space-y-20">
            {/* Logo */}
            
            {/* Card Section Title Sponsers */}
            <div className="w-full flex flex-row justify-center items-center">
                <div className="w-[70%] flex flex-col">
                    <div className="w-full mb-11 text-center font-primaryFont text-6xl text-colPink">TITLE SPONSoR</div>
                    <div className="w-full">
                        <TitleSponserCard
                            title="PYRAMID"
                            href="http://www.pyramidconsultants.com"
                            containerClassName="w-full"
                        >
                            <img 
                                className="w-full h-full object-contain" 
                                src="/Pyramid.png" 
                                alt="Pyramid Overseas Education Consultants" 
                            />
                        </TitleSponserCard>
                    </div>
                </div>
            </div>

            {/* Gold Sponsors Section */}
            <section className="pt-10">
                <h2 className="text-3xl font-bold text-center mb-12 relative">
                    Gold Sponsors
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-500"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[...Array(6)].map((_, index) => (
                        <SponserCard
                            key={`gold-${index}`}
                            title={`Gold Sponsor ${index + 1}`}
                            href="#"
                        >
                            <div className="w-64 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
                                <span className="text-white">Gold Sponsor Logo</span>
                            </div>
                        </SponserCard>
                    ))}
                </div>
            </section>

            {/* Automobile Section */}
            <section className="pt-10">
                <h2 className="text-3xl font-bold text-center mb-12 relative">
                    Automobile
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-pink-500"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[...Array(6)].map((_, index) => (
                        <SponserCard
                            key={`auto-${index}`}
                            title={`Automobile Sponsor ${index + 1}`}
                            href="#"
                        >
                            <div className="w-64 h-48 bg-gray-800/50 rounded-lg flex items-center justify-center">
                                <span className="text-white">Automobile Sponsor Logo</span>
                            </div>
                        </SponserCard>
                    ))}
                </div>
            </section>
        </div>
        </>
    )
}