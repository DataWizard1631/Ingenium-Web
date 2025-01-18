import React from "react";
import { TimeLineAnimation } from "../Components/TimeLineAnimation";

export const TimelineComp = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-colPink font-secFont1 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-colBlack shadow-lg overflow-hidden"
              >
                <img 
                  src={`/gif.png`}
                  alt={`Project screenshot ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-colPink font-secFont1 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-colPink font-secFont1 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-colBlack shadow-lg overflow-hidden"
              >
                <img 
                  src={`/gif.png`}
                  alt={`Design template ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-colPink font-secFont1 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            {[
              "Card grid component",
              "Startup template Aceternity",
              "Random file upload lol",
              "Himesh Reshammiya Music CD",
              "Salman Bhai Fan Club registrations open"
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-center text-colGray font-secFont1 text-xs md:text-sm">
                ✅ {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-colBlack shadow-lg overflow-hidden"
              >
                <img 
                  src={`/gif.png`}
                  alt={`Component preview ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <TimeLineAnimation data={data} />
    </div>
  );
};