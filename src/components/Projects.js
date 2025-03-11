import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emiCalculator from "../assets/Projects/Minor/emiCalculator.png";
import markdownEditor from "../assets/Projects/Minor/markdownEditor.png";
import propertyFinder from "../assets/Projects/Minor/propertyFinder.png";
import textTranslator from "../assets/Projects/Minor/textTranslator.png";
import budgetPlanner from "../assets/Projects/Minor/budgetPlanner.png";
import employeeCard from "../assets/Projects/Minor/employeeCard.png";
import studyPlanner from "../assets/Projects/Minor/studyPlanner.png";
import netflix from "../assets/Projects/Major/netflix.png";
import recipefinder from "../assets/Projects/Major/recipefinder.png";
import vblog from "../assets/Projects/Major/vblog.png";
import googleDrive from "../assets/Projects/Major/googleDrive.png";
import movix from "../assets/Projects/Major/movix.png";

gsap.registerPlugin(ScrollTrigger);

const projectsData = {
  minor: [
    {
      title: "EMI Calculator",
      image: emiCalculator,
      link: "https://emi-calculator-app-two.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/emi-calculator-app.git"
    },
    {
      title: "Markdown Editor",
      image: markdownEditor,
      link: "https://mark-down-editor-kohl.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/mark-down-editor.git"
    },
    {
      title: "Property Finder",
      image: propertyFinder,
      link: "https://rent-a-home-three.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/rent-a-home.git"
    },
    {
      title: "Text Translator",
      image: textTranslator,
      link: "https://text-translator-iota.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/text-translator.git"
    },
    {
      title: "Budget Planner",
      image: budgetPlanner,
      link: "https://budget-planner-eta-tan.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/budget-planner.git"
    },
    {
      title: "Employee Card",
      image: employeeCard,
      link: "https://employee-card-ivory.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/employee-card.git"
    },
    {
      title: "Study Planner",
      image: studyPlanner,
      link: "https://study-planner-project.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/study-planner-project.git"
    },
  ],
  major: [
    {
      title: "Netflix Clone",
      image: netflix,
      link: "https://fullstack-netlfix-clone.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/fullstack-netlfix-clone.git"
    },
    {
      title: "Recipe Finder",
      image: recipefinder,
      link: "https://recipe-search-app-wine.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/recipe-search-app.git"
    },
    {
      title: "V Blog",
      image: vblog,
      link: "https://type-trek.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/type-trek.git",
    },
    {
      title: "Google Drive Clone",
      image: googleDrive,
      link: "https://google-drive-clone-gr8c.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/google-drive-clone.git"
    },
    {
      title: "Movix",
      image: movix,
      link: "https://moviex-flax.vercel.app/",
      repo: "https://github.com/nareshkumarnandam/moviex.git"
    }
  ],
};

const Projects = () => {
  const projectRef = useRef(null);
  const [projects, setProjects] = useState("minorProjects");
  const minorProjectsDisplay = () => {
    setProjects("minorProjects");
  };
  const majorProjectsDisplay = () => {
    setProjects("majorProjects");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the main About section
      gsap.fromTo(
        projectRef.current,
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 60%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }, projectRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // GSAP animation for each project card when it enters the viewport
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, [projects]);

  return (
    <div id="projects" ref={projectRef} className="w-full px-5 lg:px-20 pt-14 font-Architects overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center my-5 lg:mx-auto">
        <h1 className="text-3xl lg:text-5xl mb-8 font-extrabold">Projects</h1>
        <div className="flex justify-between items-center">
          <div
            onClick={minorProjectsDisplay}
            className={`md:mx-5 flex flex-col group relative overflow-hidden transition-opacity duration-300 ${
              projects === "minorProjects" ? "opacity-100" : "opacity-50"
            }`}
          >
            <h4 className="text-lg md:text-xl font-semibold cursor-pointer">
              Mini Projects
            </h4>
          </div>
          <div
            onClick={majorProjectsDisplay}
            className={`mx-5 flex flex-col group relative overflow-hidden transition-opacity duration-300 ${
              projects === "majorProjects" ? "opacity-100" : "opacity-50"
            }`}
          >
            <h4 className="text-lg md:text-xl font-semibold cursor-pointer">
              Major Projects
            </h4>
          </div>
        </div>
        <div className="mt-20 text-center md:grid grid-cols-3 gap-5">
          {projects === "minorProjects"
            ? projectsData.minor.map((project, index) => (
                <div
                  key={index}
                  className="project-card justify-center items-center rounded-md m-3"
                >
                  <div className="relative w-full h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-auto rounded-md mb-4 transition-opacity duration-300 border-2"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-md duration-300 flex justify-evenly items-center ">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-lg hover:underline"
                      >
                        Go Live
                      </a>
                      <a
                        href={project.repo} // Assuming you have a 'repoLink' field for the project
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-lg hover:underline"
                      >
                        Git Repo
                      </a>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl mb-10 md:my-2 font-semibold tracking-wider">{project.title}</h3>
                </div>
              ))
            : projectsData.major.map((project, index) => (
              <div
                  key={index}
                  className="project-card justify-center items-center rounded-md m-3"
                >
                  <div className="relative w-full h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-auto rounded-md mb-4 transition-opacity duration-300 border-2"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-md duration-300 flex justify-evenly items-center ">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-lg hover:underline"
                      >
                        Go Live
                      </a>
                      <a
                        href={project.repo} // Assuming you have a 'repoLink' field for the project
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-lg hover:underline"
                      >
                        Git Repo
                      </a>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl mb-10 md:my-2 font-semibold tracking-wider">{project.title}</h3>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
