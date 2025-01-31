import React from "react";
import InfoCard from "../Components/InfoCard";
import MouseCard from "../Components/MouseCard";
import NameCard from "../Components/NameCard";
import AboutCard from "../Components/AboutCard";

function About() {
  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto">
      <InfoCard />
      <MouseCard/>
    </div>
  );
}

export default About;
