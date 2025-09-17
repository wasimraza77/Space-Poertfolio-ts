import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Weather+: Real time weather using APIs"
          description="Interactive weather app built using JavaScript and Css3."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Casmart: Ecommerce website"
          description="An e-commerce website with various functionalities such as cart , payment gateway and login"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Travel Destination website"
          description="A travel themed website for people who love to travel across the world"
        />
         <ProjectCard
          src="/apple.png"
          title="Apple Store Clone"
          description="A Ecommerce store of Apple Inc is cloned and made better"
        />
         <ProjectCard
          src="/zentry.png"
          title="Zentry : Landing page"
          description="Animated landing , Zentry themed"
        />
      </div>
    </div>
  );
};

export default Projects;
