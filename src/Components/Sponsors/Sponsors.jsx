import React, { useState } from "react";
import { SponserCard } from "./SponserCard"
import { TitleSponserCard } from "./TtileSponserCard"
import { sponsorsData } from "../../data/sponsorsData"
import { SponsorCategorySelector } from "./SponsorCategorySelector"

export const Sponsors = () => {
    const {
        titleSponsor,
        presentingSponsors,
        platinumSponsors,
        goldSponsors,
        fashionSponsors,
        automobileSponsors
    } = sponsorsData;

    const [activeCategory, setActiveCategory] = useState('title');

    const renderCategory = () => {
        switch (activeCategory) {
            case 'all':
                return (
                    <div className="space-y-32">
                        {/* Title Section */}
                        <div className="w-full flex flex-row justify-center items-center">
                            <div className="w-full sm:w-[90%] lg:w-[80%] flex flex-col">
                                <div className="w-full mb-8 sm:mb-16 text-center">
                                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 hover:scale-105 transition-transform duration-300">
                                        TITLE SPONSOR
                                    </h1>
                                    <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 mx-auto"></div>
                                </div>
                                <div className="w-full transform hover:scale-105 transition-transform duration-500">
                                    <TitleSponserCard
                                        title={titleSponsor.title}
                                        name={titleSponsor.name}
                                        href={titleSponsor.href}
                                        containerClassName="w-full"
                                    >
                                        <img 
                                            className="w-full h-full object-contain p-4" 
                                            src={titleSponsor.logo}
                                            alt={titleSponsor.name}
                                        />
                                    </TitleSponserCard>
                                </div>
                            </div>
                        </div>

                        {/* Presenting Section */}
                        <section className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-3xl -z-10"></div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                                <span className="bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
                                    Presenting Sponsors
                                </span>
                                <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-violet-400 to-violet-600 mx-auto mt-4"></div>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 max-w-6xl mx-auto px-4">
                                {presentingSponsors.map((sponsor, index) => (
                                    <div key={`presenting-${index}`} className="flex flex-col items-center group">
                                        <div className="transform group-hover:scale-105 transition-transform duration-500">
                                            <SponserCard
                                                title={sponsor.title}
                                                href={sponsor.href}
                                                category="presenting"
                                            >
                                                <div className="w-full sm:w-72 h-40 sm:h-52 rounded-xl flex items-center justify-center border border-violet-500/20 backdrop-blur-sm">
                                                    <img 
                                                        src={sponsor.logo} 
                                                        alt={sponsor.name}
                                                        className="w-full h-full object-contain p-4"
                                                    />
                                                </div>
                                            </SponserCard>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Platinum Section */}
                        <section className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-300/10 via-transparent to-slate-300/10 blur-3xl -z-10"></div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                                <span className="bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">
                                    Platinum Sponsors
                                </span>
                                <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-slate-200 to-slate-400 mx-auto mt-4"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                                {platinumSponsors.map((sponsor, index) => (
                                    <div key={`platinum-${index}`} className="flex flex-col items-center group">
                                        <div className="transform group-hover:scale-105 transition-transform duration-500">
                                            <SponserCard
                                                title={sponsor.title}
                                                href={sponsor.href}
                                                category="platinum"
                                            >
                                                <div className="w-full sm:w-64 h-40 sm:h-48 rounded-xl flex items-center justify-center border border-slate-500/20 backdrop-blur-sm">
                                                    <img 
                                                        src={sponsor.logo} 
                                                        alt={sponsor.title}
                                                        className="w-full h-full object-contain p-4"
                                                    />
                                                </div>
                                            </SponserCard>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gold Section */}
                        <section className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-3xl -z-10"></div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                                <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
                                    Gold Sponsors
                                </span>
                                <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                                {goldSponsors.map((sponsor, index) => (
                                    <div key={`gold-${index}`} className="flex flex-col items-center group">
                                        <div className="transform group-hover:scale-105 transition-transform duration-500">
                                            <SponserCard
                                                title={sponsor.title}
                                                href={sponsor.href}
                                                category="gold"
                                            >
                                                <div className="w-64 h-48 rounded-xl flex items-center justify-center border border-amber-500/20 backdrop-blur-sm">
                                                    <img 
                                                        src={sponsor.logo} 
                                                        alt={sponsor.title}
                                                        className="w-full h-full object-contain p-4"
                                                    />
                                                </div>
                                            </SponserCard>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Fashion Section */}
                        <section className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-pink-500/10 blur-3xl -z-10"></div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                                <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
                                    Fashion Sponsors
                                </span>
                                <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-4"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                                {fashionSponsors.map((sponsor, index) => (
                                    <div key={`fashion-${index}`} className="flex flex-col items-center group">
                                        <div className="transform group-hover:scale-105 transition-transform duration-500">
                                            <SponserCard
                                                title={sponsor.title}
                                                href={sponsor.href}
                                                category="fashion"
                                            >
                                                <div className="w-64 h-48 rounded-xl flex items-center justify-center border border-pink-500/20 backdrop-blur-sm">
                                                    <img 
                                                        src={sponsor.logo} 
                                                        alt={sponsor.title}
                                                        className="w-full h-full object-contain p-4"
                                                    />
                                                </div>
                                            </SponserCard>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Automobile Section */}
                        <section className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-3xl -z-10"></div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                                <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                                    Automobile Sponsors
                                </span>
                                <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4"></div>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                                {automobileSponsors.map((sponsor, index) => (
                                    <div key={`automobile-${index}`} className="flex flex-col items-center group">
                                        <div className="transform group-hover:scale-105 transition-transform duration-500">
                                            <SponserCard
                                                title={sponsor.title}
                                                href={sponsor.href}
                                                category="automobile"
                                            >
                                                <div className="w-64 h-48 rounded-xl flex items-center justify-center border border-red-500/20 backdrop-blur-sm">
                                                    <img 
                                                        src={sponsor.logo} 
                                                        alt={sponsor.title}
                                                        className="w-full h-full object-contain p-4"
                                                    />
                                                </div>
                                            </SponserCard>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                );
            case 'title':
                return (
                    <div className="w-full flex flex-row justify-center items-center">
                        <div className="w-full sm:w-[90%] lg:w-[80%] flex flex-col">
                            <div className="w-full mb-8 sm:mb-16 text-center">
                                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 hover:scale-105 transition-transform duration-300">
                                    TITLE SPONSOR
                                </h1>
                                <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 mx-auto"></div>
                            </div>
                            <div className="w-full transform hover:scale-105 transition-transform duration-500">
                                <TitleSponserCard
                                    title={titleSponsor.title}
                                    name={titleSponsor.name}
                                    href={titleSponsor.href}
                                    containerClassName="w-full"
                                >
                                    <img 
                                        className="w-full h-full object-contain p-4" 
                                        src={titleSponsor.logo}
                                        alt={titleSponsor.name}
                                    />
                                </TitleSponserCard>
                                <div className="text-center mt-8">
                                    <h3 className="text-2xl mt-20 sm:text-3xl font-semibold text-white">{titleSponsor.name}</h3>
                                    <p className="text-rose-400 mt-2 text-base sm:text-lg">Title Sponsor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'presenting':
                return (
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-3xl -z-10"></div>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                            <span className="bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
                                Presenting Sponsors
                            </span>
                            <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-violet-400 to-violet-600 mx-auto mt-4"></div>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 max-w-6xl mx-auto px-4">
                            {presentingSponsors.map((sponsor, index) => (
                                <div key={`presenting-${index}`} className="flex flex-col items-center group">
                                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                                        <SponserCard
                                            title={sponsor.title}
                                            href={sponsor.href}
                                            category="presenting"
                                        >
                                            <div className="w-full sm:w-72 h-40 sm:h-52 rounded-xl flex items-center justify-center border border-violet-500/20 backdrop-blur-sm">
                                                <img 
                                                    src={sponsor.logo} 
                                                    alt={sponsor.name}
                                                    className="w-full h-full object-contain p-4"
                                                />
                                            </div>
                                        </SponserCard>
                                        <div className="text-center mt-8">
                                            <h3 className="text-xl sm:text-2xl font-semibold text-white">{sponsor.name}</h3>
                                            <p className="text-violet-400 mt-2 text-sm sm:text-base">Presenting Partner</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            case 'platinum':
                return (
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-300/10 via-transparent to-slate-300/10 blur-3xl -z-10"></div>
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-20">
                            <span className="bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">
                                Platinum Sponsors
                            </span>
                            <div className="h-1 w-20 sm:w-40 bg-gradient-to-r from-slate-200 to-slate-400 mx-auto mt-4"></div>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                            {platinumSponsors.map((sponsor, index) => (
                                <div key={`platinum-${index}`} className="flex flex-col items-center group">
                                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                                        <SponserCard
                                            title={sponsor.title}
                                            href={sponsor.href}
                                            category="platinum"
                                        >
                                            <div className="w-full sm:w-64 h-40 sm:h-48 rounded-xl flex items-center justify-center border border-slate-500/20 backdrop-blur-sm">
                                                <img 
                                                    src={sponsor.logo} 
                                                    alt={sponsor.title}
                                                    className="w-full h-full object-contain p-4"
                                                />
                                            </div>
                                        </SponserCard>
                                        <div className="text-center mt-8">
                                            <h3 className="text-xl sm:text-2xl font-semibold text-white">{sponsor.title}</h3>
                                            <p className="text-slate-400 mt-2 text-sm sm:text-base">Platinum Partner</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            case 'gold':
                return (
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-3xl -z-10"></div>
                        <h2 className="text-6xl font-bold text-center mb-20">
                            <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
                                Gold Sponsors
                            </span>
                            <div className="h-1 w-40 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4"></div>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                            {goldSponsors.map((sponsor, index) => (
                                <div key={`gold-${index}`} className="flex flex-col items-center group">
                                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                                        <SponserCard
                                            title={sponsor.title}
                                            href={sponsor.href}
                                            category="gold"
                                        >
                                            <div className="w-64 h-48 rounded-xl flex items-center justify-center border border-amber-500/20 backdrop-blur-sm">
                                                <img 
                                                    src={sponsor.logo} 
                                                    alt={sponsor.title}
                                                    className="w-full h-full object-contain p-4"
                                                />
                                            </div>
                                        </SponserCard>
                                        <div className="text-center mt-8">
                                            <h3 className="text-2xl font-semibold text-white">{sponsor.title}</h3>
                                            <p className="text-amber-400 mt-2">Gold Partner</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            case 'fashion':
                return (
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-pink-500/10 blur-3xl -z-10"></div>
                        <h2 className="text-6xl font-bold text-center mb-20">
                            <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
                                Fashion Sponsors
                            </span>
                            <div className="h-1 w-40 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-4"></div>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                            {fashionSponsors.map((sponsor, index) => (
                                <div key={`fashion-${index}`} className="flex flex-col items-center group">
                                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                                        <SponserCard
                                            title={sponsor.title}
                                            href={sponsor.href}
                                            category="fashion"
                                        >
                                            <div className="w-64 h-48 rounded-xl flex items-center justify-center border border-pink-500/20 backdrop-blur-sm">
                                                <img 
                                                    src={sponsor.logo} 
                                                    alt={sponsor.title}
                                                    className="w-full h-full object-contain p-4"
                                                />
                                            </div>
                                        </SponserCard>
                                        <div className="text-center mt-8">
                                            <h3 className="text-2xl font-semibold text-white">{sponsor.title}</h3>
                                            <p className="text-pink-400 mt-2">Fashion Partner</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            case 'automobile':
                return (
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-3xl -z-10"></div>
                        <h2 className="text-6xl font-bold text-center mb-20">
                            <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                                Automobile Sponsors
                            </span>
                            <div className="h-1 w-40 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4"></div>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 max-w-7xl mx-auto px-4">
                            {automobileSponsors.map((sponsor, index) => (
                                <div key={`automobile-${index}`} className="flex flex-col items-center group">
                                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                                        <SponserCard
                                            title={sponsor.title}
                                            href={sponsor.href}
                                            category="automobile"
                                        >
                                            <div className="w-64 h-48 rounded-xl flex items-center justify-center border border-red-500/20 backdrop-blur-sm">
                                                <img 
                                                    src={sponsor.logo} 
                                                    alt={sponsor.title}
                                                    className="w-full h-full object-contain p-4"
                                                />
                                            </div>
                                        </SponserCard>
                                        <div className="text-center mt-8">
                                            <h3 className="text-2xl font-semibold text-white">{sponsor.title}</h3>
                                            <p className="text-red-400 mt-2">Automobile Partner</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen py-10 sm:py-20">
            <div className="space-y-20 sm:space-y-40 container mx-auto px-4">
                {/* Category Selector */}
                <SponsorCategorySelector
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Dynamic Category Content */}
                {renderCategory()}
            </div>
        </div>
    )
}