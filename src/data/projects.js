import mhamiImage from "../assets/projects/mhami.webp";
import qaahaImage from "../assets/projects/qaaha.png";
import portfolioImage from "../assets/projects/portfolio.webp";
import personalPortfolioImage from "../assets/projects/personal-poertfolio.webp";

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio",
    image: personalPortfolioImage,
    technologies: ["React", "Tailwind"],
    github: "https://github.com/rawaabaessa/personal-portfolio",
    liveDemo: "https://devrawaa.vercel.app/",
  },
  {
    id: 2,
    title: "Mhami",
    image: mhamiImage,
    technologies: ["React"],
    github: "https://github.com/rawaabaessa/mahami-Reactjs",
    liveDemo: "https://mahammi.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio",
    image: portfolioImage,
    technologies: ["React"],
    github: "https://github.com/rawaabaessa/Portfolio",
    liveDemo: "https://rawaaba.netlify.app/",
  },
  {
    id: 4,
    title: "Qaaha",
    image: qaahaImage,
    technologies: ["HTML", "CSS", "Laravel"],
    github:
      "https://github.com/rawaabaessa/bootcamp-final-project-qaah-platform",
  },
];
