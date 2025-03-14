import React, { useState } from "react";
import { SponserCard } from "./SponserCard";
import { TitleSponserCard } from "./TtileSponserCard";
import { sponsorsData } from "../../data/sponsorsData";
import { SponsorCategorySelector } from "./SponsorCategorySelector";
import { motion } from 'framer-motion';

export const Sponsors = () => {
  const {
    titleSponsor,
    presentingSponsors,
    platinumSponsors,
    goldSponsors,
    fashionSponsors,
    automobileSponsors,
    supportingSponsors, // Added supportingSponsors from the JSON
  } = sponsorsData;

  const [activeCategory, setActiveCategory] = useState("all");

  // Category configurations for styling and layout
  const categoryConfig = {
    title: {
      titleText: "TITLE SPONSOR",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      partnerText: "Title Sponsor",
      textColor: "text-rose-400",
      isTitle: true,
      cardWidth: "w-[280px] sm:w-[360px]",
      cardHeight: "h-[200px] sm:h-[260px]",
    },
    presenting: {
      titleText: "Presenting Sponsors",
      gradient: "from-violet-400 to-violet-600",
      bgGradient: "from-violet-500/10 via-transparent to-violet-500/10",
      borderColor: "border-violet-500/20",
      partnerText: "Presenting Partner",
      textColor: "text-violet-400",
      cols: "md:grid-cols-2",
      cardWidth: "w-[280px] sm:w-[360px]",
      cardHeight: "h-[200px] sm:h-[260px]",
    },
    platinum: {
      titleText: "Platinum Sponsors",
      gradient: "from-slate-200 to-slate-400",
      bgGradient: "from-slate-300/10 via-transparent to-slate-300/10",
      borderColor: "border-slate-500/20",
      partnerText: (name) => name === "T.I.M.E." ? "Education Partner" : "Platinum Partner",
      textColor: "text-slate-400",
      cols: "sm:grid-cols-2 lg:grid-cols-3",
      cardWidth: "w-[260px] sm:w-[340px]",
      cardHeight: "h-[180px] sm:h-[240px]",
    },
    gold: {
      titleText: "Gold Sponsors",
      gradient: "from-amber-400 to-amber-600",
      bgGradient: "from-amber-500/10 via-transparent to-amber-500/10",
      borderColor: "border-amber-500/20",
      partnerText: "Gold Partner",
      textColor: "text-amber-400",
      cols: "sm:grid-cols-2 lg:grid-cols-3",
      cardWidth: "w-[240px] sm:w-[320px]",
      cardHeight: "h-[160px] sm:h-[220px]",
    },
    fashion: {
      titleText: "Fashion Sponsor",
      gradient: "from-pink-400 to-pink-600",
      bgGradient: "from-pink-500/10 via-transparent to-pink-500/10",
      borderColor: "border-pink-500/20",
      partnerText: "Fashion Partner",
      textColor: "text-pink-400",
      cols: "sm:grid-cols-2 lg:grid-cols-3",
      cardWidth: "w-[280px] sm:w-[320px]",
      cardHeight: "h-[200px] sm:h-[220px]",
    },
    automobile: {
      titleText: "Automobile Sponsors",
      gradient: "from-red-400 to-red-600",
      bgGradient: "from-red-500/10 via-transparent to-red-500/10",
      borderColor: "border-red-500/20",
      partnerText: "Automobile Partner",
      textColor: "text-red-400",
      cols: "sm:grid-cols-2 lg:grid-cols-3",
      cardWidth: "w-[280px] sm:w-[320px]",
      cardHeight: "h-[200px] sm:h-[220px]",
    },
    supporting: {
      titleText: "Supporting Sponsors",
      gradient: "from-teal-400 to-teal-600",
      bgGradient: "from-teal-500/10 via-transparent to-teal-500/10",
      borderColor: "border-teal-500/20",
      partnerText: "Supporting Partner",
      textColor: "text-teal-400",
      cols: "sm:grid-cols-2 lg:grid-cols-3",
      cardWidth: "w-[280px] sm:w-[320px]",
      cardHeight: "h-[200px] sm:h-[220px]",
    },
  };

  // Map category to sponsor data
  const categorySponsors = {
    title: [titleSponsor], // Title sponsor is a single object, wrapped in array for consistency
    presenting: presentingSponsors,
    platinum: platinumSponsors,
    gold: goldSponsors,
    fashion: fashionSponsors,
    automobile: automobileSponsors,
    supporting: supportingSponsors, // Added supporting sponsors
  };

  const getGridConfig = (sponsorCount) => {
    switch (sponsorCount) {
      case 1:
        return "grid-cols-1 place-items-center max-w-2xl mx-auto";
      case 2:
        return "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto";
      case 5:
      case 6:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto";
    }
  };

  const renderCategory = () => {
    // Handle 'all' category
    if (activeCategory === "all") {
      const allSections = [];
      const categories = Object.keys(categoryConfig);

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const config = categoryConfig[category];
        const sponsors = categorySponsors[category];

        // Skip empty categories
        if (!sponsors || sponsors.length === 0) continue;

        if (category === "title") {
          allSections.push(
            <div
              key={category}
              className="w-full flex flex-row justify-center items-center"
            >
              <div className="w-full  flex flex-col">
                <motion.div 
                  className="w-full mb-8 sm:mb-16 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`text-4xl sm:text-6xl lg:text-6xl font-bold bg-gradient-to-r ${config.gradient} text-transparent bg-clip-text mb-4 font-primaryFont`}
                  >
                    {config.titleText}
                  </motion.h1>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`h-1 w-20 sm:w-40 bg-gradient-to-r ${config.gradient} mx-auto`}
                  />
                </motion.div>
                <div className="w-full transform  transition-transform duration-500">
                  <TitleSponserCard
                    title={titleSponsor.title}
                    name={titleSponsor.name}
                    href={titleSponsor.href}
                    containerClassName="w-full"
                  >
                    <img
                      className="w-fit h-fit object-contain p-4"
                      src={titleSponsor.logo}
                      alt={titleSponsor.name}
                    />
                  </TitleSponserCard>
                  {/* <div className="text-center mt-8">
                    <h3 className="text-2xl mt-20 sm:text-3xl font-semibold text-white font-secFont1">
                      {titleSponsor.name}
                    </h3>
                    <p
                      className={`${config.textColor} mt-2 text-base sm:text-lg font-secFont1`}
                    >
                      {config.partnerText}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          );
        } else {
          const sponsorCards = [];
          for (let j = 0; j < sponsors.length; j++) {
            const sponsor = sponsors[j];
            sponsorCards.push(
              <div
                key={`${category}-${j}`}
                className="flex flex-col items-center group w-full"
              >
                <div className="w-full flex justify-center perspective-container">
                  <SponserCard
                    title={sponsor.title}
                    href={sponsor.href}
                    category={category}
                  >
                    <div
                      className={`${config.cardWidth} ${config.cardHeight} rounded-xl flex items-center justify-center border ${config.borderColor} backdrop-blur-sm bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 relative overflow-hidden group
                        transform-gpu transition-all duration-500 hover:rotate-x-12 hover:rotate-y-12 hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.title}
                          className="w-[80%] h-[80%] object-contain transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </SponserCard>
                </div>
                <div className="text-center mt-4 md:mt-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300 font-secFont1">
                    {sponsor.title}
                  </h3>
                  <p className={`${config.textColor} mt-2 text-sm sm:text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300 font-secFont1`}>
                    {typeof config.partnerText === 'function' ? config.partnerText(sponsor.title) : config.partnerText}
                  </p>
                  {/* Mobile Visit Website Button */}
                  {/* <div className="sm:hidden mt-4">
                    <a
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${config.gradient} text-white font-secFont1 text-sm transition-all duration-300 hover:scale-105`}
                    >
                      Visit Website
                    </a>
                  </div> */}
                </div>
              </div>
            );
          }

          allSections.push(
            <section key={category} className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient} blur-3xl -z-10`}
              ></div>
              <motion.div 
                className="text-center mb-10 sm:mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-bold font-primaryFont"
                >
                  <span
                    className={`bg-gradient-to-r ${config.gradient} text-transparent bg-clip-text`}
                  >
                    {config.titleText}
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`h-1 w-20 sm:w-40 bg-gradient-to-r ${config.gradient} mx-auto mt-4`}
                />
              </motion.div>
              <div
                className={`grid ${getGridConfig(sponsorCards.length)} gap-10 sm:gap-16 px-4`}
              >
                {sponsorCards}
              </div>
            </section>
          );
        }
      }

      return <div className="space-y-16 md:space-y-32">{allSections}</div>;
    }

    // Handle individual category
    const config = categoryConfig[activeCategory];
    const sponsors = categorySponsors[activeCategory];

    if (!config || !sponsors || sponsors.length === 0) return null;

    if (activeCategory === "title") {
      return (
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full sm:w-[90%] lg:w-[80%] flex flex-col">
            <motion.div 
              className="w-full mb-8 sm:mb-16 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-4xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r ${config.gradient} text-transparent bg-clip-text mb-4 font-primaryFont`}
              >
                {config.titleText}
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`h-1 w-20 sm:w-40 bg-gradient-to-r ${config.gradient} mx-auto`}
              />
            </motion.div>
            <div className="w-full transform  transition-transform duration-500">
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
                <h3 className="text-2xl mt-20 sm:text-3xl font-semibold text-white font-secFont1">
                  {titleSponsor.name}
                </h3>
                <p className={`${config.textColor} mt-2 text-base sm:text-lg font-secFont1`}>
                  {config.partnerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const sponsorCards = [];
    for (let i = 0; i < sponsors.length; i++) {
      const sponsor = sponsors[i];
      sponsorCards.push(
        <div
          key={`${activeCategory}-${i}`}
          className="flex flex-col items-center group w-full"
        >
          <div className="w-full flex justify-center perspective-container">
            <SponserCard
              title={sponsor.title}
              href={sponsor.href}
              category={activeCategory}
            >
              <div
                className={`${config.cardWidth} ${config.cardHeight} rounded-xl flex items-center justify-center border ${config.borderColor} backdrop-blur-sm bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 relative overflow-hidden group
                  transform-gpu transition-all duration-500 hover:rotate-x-12 hover:rotate-y-12 hover:scale-105`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.title}
                    className="w-[80%] h-[80%] object-contain transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </SponserCard>
          </div>
          <div className="text-center mt-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300 font-secFont1">
              {sponsor.title}
            </h3>
            <p className={`${config.textColor} mt-2 text-sm sm:text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300 font-secFont1`}>
              {typeof config.partnerText === 'function' ? config.partnerText(sponsor.title) : config.partnerText}
            </p>
            {/* Mobile Visit Website Button */}
            <div className="sm:hidden mt-4">
              <a
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${config.gradient} text-white font-secFont1 text-sm transition-all duration-300 hover:scale-105`}
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <section className="relative">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient} blur-3xl -z-10`}
        ></div>
        <motion.div 
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold font-primaryFont"
          >
            <span
              className={`bg-gradient-to-r ${config.gradient} text-transparent bg-clip-text`}
            >
              {config.titleText}
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`h-1 w-20 sm:w-40 bg-gradient-to-r ${config.gradient} mx-auto mt-4`}
          />
        </motion.div>
        <div
          className={`grid ${getGridConfig(sponsors.length)} gap-10 sm:gap-16 px-4`}
        >
          {sponsorCards}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <style>
        {`
          .perspective-container {
            perspective: 1000px;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block"
          >
            <h1 className="font-primaryFont text-3xl xs:text-4xl sm:text-6xl lg:text-9xl mb-3 xs:mb-4 sm:mb-6 lg:mb-8 font-semibold text-white tracking-[0.17em]">
              SPONSORS
            </h1>
            <div className="absolute -bottom-0 md:bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-colPink to-transparent" />

          </motion.div>
         
        </motion.div>

        <SponsorCategorySelector
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        {renderCategory()}
      </div>
    </div>
  );
};
