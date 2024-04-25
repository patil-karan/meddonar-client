import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import SectionCardCarousel from "../components/HomeSectionCarousel/SectionCardCarousel";
import MissionCardCarousel from "../components/HomeSectionCarousel/MissionCardCarousel";
import { categories } from "../data/categories";
import { section_data } from "../data/section_data";
import { mission } from "../data/mission";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20">
        <SectionCardCarousel
          data={section_data}
          sectionName={"Lets Make A Difference Today"}
        />
        <HomeSectionCarousel
          data={categories}
          sectionName={"Medicine for Use"}
        />
        <MissionCardCarousel data={mission} sectionName={"Our Mission"} />
      </div>
    </div>
  );
};

export default HomePage;
